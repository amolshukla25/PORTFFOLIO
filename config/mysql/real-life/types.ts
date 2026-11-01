import type { Faq, Level, Mistake, QuizItem } from "../types";
import type { RealLifeDatasetId } from "../../../lib/sql-practice/real-life-datasets";

/** One practice problem before its target text is generated from real output. */
export interface RealLifeQuestionInput {
  id: string;
  level: Level;
  prompt: string;
  hint: string;
  answerSql: string;
}

/** Everything a "real life database" module needs. The lesson is built from it. */
export interface RealLifeModuleConfig {
  /** Module number in the MySQL course (6–11). */
  number: number;
  slug: string;
  shortTitle: string;
  title: string;
  summary: string;
  dataset: RealLifeDatasetId;
  /** Two or three sentences describing the fictional business. */
  context: string;
  /** One line per table: name, grain and the columns a learner will touch. */
  tables: { name: string; grain: string; columns: string }[];
  outcomes: string[];
  quickAnswer: { question: string; answer: string };
  guided: { heading: string; intro: string; steps: string[]; sql: string; explain: string };
  teaches: string[];
  questions: RealLifeQuestionInput[];
  quiz: QuizItem[];
  mistakes: Mistake[];
  faq: Faq[];
}

/** Compact question factory — keeps the six banks readable. */
export const q = (id: string, level: Level, prompt: string, hint: string, answerSql: string): RealLifeQuestionInput => ({
  id,
  level,
  prompt,
  hint,
  answerSql,
});
