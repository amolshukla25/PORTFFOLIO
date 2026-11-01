import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { mysqlResult, type StoredResult } from "@/config/mysql/index";
import type { DatasetChoice, LessonSection, MysqlLesson, Question, QuizItem } from "@/config/mysql/types";
import { estimateMinutes, lessonWordCount } from "@/config/mysql/estimate";

/** Lesson data with markdown pre-rendered and real MySQL output attached — passed to the client page. */
export interface RenderedSection {
  id: string;
  heading: string;
  bodyHtml: string;
  sql?: string;
  dataset: DatasetChoice;
  result?: StoredResult | null;
  afterHtml?: string;
  callout?: { kind: NonNullable<LessonSection["callout"]>["kind"]; html: string };
  tabs?: { label: string; html: string }[];
  diagram?: LessonSection["diagram"];
}

export interface RenderedQuestion extends Question {
  dataset: DatasetChoice;
  expected: StoredResult | null;
}

export interface RenderedLesson {
  slug: string;
  shortTitle: string;
  title: string;
  summary: string;
  module: number;
  minutes: number;
  words: number;
  dataset: DatasetChoice;
  quickAnswer: { question: string; answer: string };
  outcomesHtml: string[];
  sections: RenderedSection[];
  mistakes: { wrong: string; whyHtml: string; fix: string }[];
  checkYourselfHtml: string[];
  faq: { q: string; a: string }[];
  guided: { intro: string; stepsHtml: string[]; sql: string; dataset: DatasetChoice; explain: string; result: StoredResult | null };
  questions: RenderedQuestion[];
  quiz: QuizItem[];
}

async function md(text: string): Promise<string> {
  const out = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(text);
  // Wrap wide tables so they scroll inside their own box on phones
  return out.toString().replace(/<table>/g, '<div class="table-scroll"><table>').replace(/<\/table>/g, "</table></div>");
}

async function inline(text: string): Promise<string> {
  return (await md(text)).trim().replace(/^<p>([\s\S]*)<\/p>$/, "$1");
}

export function slugify(s: string) {
  return s.toLowerCase().replace(/[`'’"]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
}

export async function renderMysqlLesson(l: MysqlLesson): Promise<RenderedLesson> {
  const used = new Set<string>();
  const sections: RenderedSection[] = [];
  for (const s of l.sections) {
    let id = slugify(s.heading);
    while (used.has(id)) id += "-2";
    used.add(id);
    const dataset = s.dataset ?? l.dataset;
    sections.push({
      id,
      heading: s.heading,
      bodyHtml: await md(s.body),
      sql: s.sql,
      dataset,
      result: s.sql ? mysqlResult(dataset, s.sql) : undefined,
      afterHtml: s.after ? await md(s.after) : undefined,
      callout: s.callout ? { kind: s.callout.kind, html: await inline(s.callout.text) } : undefined,
      tabs: s.tabs ? await Promise.all(s.tabs.map(async (t) => ({ label: t.label, html: await md(t.body) }))) : undefined,
      diagram: s.diagram,
    });
  }
  return {
    slug: l.slug,
    shortTitle: l.shortTitle,
    title: l.title,
    summary: l.summary,
    module: l.module,
    minutes: estimateMinutes(l),
    words: lessonWordCount(l),
    dataset: l.dataset,
    quickAnswer: l.quickAnswer,
    outcomesHtml: await Promise.all(l.outcomes.map(inline)),
    sections,
    mistakes: await Promise.all(l.mistakes.map(async (m) => ({ wrong: m.wrong, whyHtml: await inline(m.why), fix: m.fix }))),
    checkYourselfHtml: await Promise.all(l.checkYourself.map(inline)),
    faq: l.faq,
    guided: {
      intro: l.guided.intro,
      stepsHtml: await Promise.all(l.guided.steps.map(inline)),
      sql: l.guided.sql,
      dataset: l.guided.dataset,
      explain: l.guided.explain,
      result: mysqlResult(l.guided.dataset, l.guided.sql),
    },
    questions: l.questions.map((q) => {
      const dataset = q.dataset ?? l.dataset;
      return { ...q, dataset, expected: mysqlResult(dataset, q.answerSql) };
    }),
    quiz: l.quiz,
  };
}
