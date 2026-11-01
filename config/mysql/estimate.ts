import type { MysqlLesson } from "./types";

const words = (s: string) => (s.match(/[A-Za-z0-9_']+/g) ?? []).length;

/** Words a learner reads in the Lesson step (prose, examples' notes, mistakes, FAQ). */
export function lessonWordCount(l: MysqlLesson): number {
  let n = words(l.quickAnswer.answer) + l.outcomes.reduce((s, o) => s + words(o), 0);
  for (const s of l.sections) {
    n += words(s.heading) + words(s.body) + words(s.after ?? "") + words(s.callout?.text ?? "");
    for (const t of s.tabs ?? []) n += words(t.body);
  }
  for (const m of l.mistakes) n += words(m.why) + words(m.fix);
  n += l.checkYourself.reduce((s, c) => s + words(c), 0);
  return n;
}

const PER_LEVEL = { Easy: 1.5, Medium: 2.5, Hard: 4, Professional: 6 } as const;

/** Honest time estimate: reading at 180 wpm, examples, guided practice, problems by level, quiz. */
export function estimateMinutes(l: MysqlLesson): number {
  if (l.minutesOverride) return l.minutesOverride;
  const reading = lessonWordCount(l) / 180;
  const examples = l.sections.filter((s) => s.sql).length * 1.5;
  const guided = 8;
  const practice = l.questions.reduce((s, q) => s + PER_LEVEL[q.level], 0);
  const quiz = l.quiz.length * 0.75;
  return Math.round((reading + examples + guided + practice + quiz) / 5) * 5;
}
