/**
 * Data model for the MySQL course. Every lesson page, the course page, the
 * JSON-LD, llms.txt and the PDF are rendered from these objects — no lesson
 * text lives inside components.
 */

export type Level = "Easy" | "Medium" | "Hard" | "Professional";

export type DatasetChoice =
  | "shop"
  | "large"
  | "none"
  | "hospital"
  | "bank"
  | "ecommerce"
  | "college"
  | "rides"
  | "streaming";

/** Modules 1–5 are the core course; 6–11 are the real-life database modules. */
export type ModuleNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export interface QuestionCheck {
  /** Results depend on the learner's own server or are written notes: compare by eye. */
  manual?: boolean;
  /** The task is to trigger this MySQL error code (e.g. 1062 duplicate key). */
  expectError?: number;
  /** Force row order to matter / not matter. Default: matters when the answer has an outer ORDER BY. */
  orderMatters?: boolean;
  numericTolerance?: number;
}

export interface Question {
  id: string;
  level: Level;
  prompt: string;
  target: string;
  hint: string;
  answerSql: string;
  dataset?: DatasetChoice;
  check?: QuestionCheck;
}

export interface QuizItem {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonSection {
  heading: string;
  /** Markdown. Keep paragraphs short. */
  body: string;
  /** Optional worked example shown with its real MySQL result grid. */
  sql?: string;
  dataset?: DatasetChoice;
  /** Short markdown shown under the result. */
  after?: string;
  callout?: { kind: "tip" | "mistake" | "remember" | "business"; text: string };
  /** Alternative versions of the same step (e.g. Windows / macOS / Linux). All are in the HTML. */
  tabs?: { label: string; body: string }[];
  /** Name of a built-in diagram to draw after the body. */
  diagram?: "er" | "join-expansion" | "group-buckets" | "window-frame" | "venn";
}

export interface Mistake {
  wrong: string;
  why: string;
  fix: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface MysqlLesson {
  slug: string;
  /** Used in the sidebar, prev/next links and breadcrumbs. */
  shortTitle: string;
  title: string;
  /** One-line description for cards and meta descriptions (≤ 160 chars). */
  summary: string;
  module: ModuleNumber;
  /** Only set when the estimate (reading + guided + practice + quiz) is wrong, e.g. the capstone. */
  minutesOverride?: number;
  dataset: DatasetChoice;
  /** 40–60 word direct answer to the lesson's main question (answer engines quote this). */
  quickAnswer: { question: string; answer: string };
  outcomes: string[];
  sections: LessonSection[];
  mistakes: Mistake[];
  checkYourself: string[];
  faq: Faq[];
  guided: {
    intro: string;
    steps: string[];
    sql: string;
    dataset: DatasetChoice;
    explain: string;
  };
  questions: Question[];
  quiz: QuizItem[];
  /** Keywords for meta tags and JSON-LD `teaches`. */
  teaches: string[];
}

export interface MysqlModule {
  number: ModuleNumber;
  title: string;
  description: string;
}
