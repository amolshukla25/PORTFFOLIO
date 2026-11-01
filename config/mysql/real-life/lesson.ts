/**
 * Builds a "real life database" lesson from its module config.
 *
 * The 50 problems live in one data file per database; their target text is
 * generated from the reference answer's real output (scripts/mysql/gen-real-life-targets.ts),
 * so a learner always compares against what the query actually returns.
 */
import type { MysqlLesson } from "../types";
import type { RealLifeModuleConfig } from "./types";
import targets from "./targets.generated.json";

const TARGETS = targets as Record<string, string>;

const tableMarkdown = (tables: RealLifeModuleConfig["tables"]) =>
  ["| Table | One row is | Columns you will use |", "| --- | --- | --- |", ...tables.map((t) => `| \`${t.name}\` | ${t.grain} | ${t.columns} |`)].join("\n");

export function buildRealLifeLesson(c: RealLifeModuleConfig): MysqlLesson {
  const download = `/downloads/mysql-reallife-${c.dataset}.sql`;
  return {
    slug: c.slug,
    shortTitle: c.shortTitle,
    title: c.title,
    summary: c.summary,
    module: c.number as MysqlLesson["module"],
    dataset: c.dataset,
    quickAnswer: c.quickAnswer,
    outcomes: c.outcomes,
    sections: [
      {
        heading: "The database you are practising on",
        body: `${c.context}\n\nThe whole set is fictional but shaped like the real thing: keys, foreign keys, dates, statuses and 2,000 rows in the busiest table. You do not import anything to start — practice mode loads the same rows into your browser. When you want the same data in MySQL Workbench, download the script (${c.tables.length} tables, 20 columns) and run it there.`,
        callout: { kind: "business", text: `Download: [${download}](${download}) — a MySQL 8 script that creates the database, its tables and every row. Safe to re-run.` },
      },
      {
        heading: "What one row means",
        body: `Read the grain before you write a join. Joining two tables without knowing what one row of each means is the single most common cause of doubled totals.\n\n${tableMarkdown(c.tables)}`,
      },
      {
        heading: "Your database is already selected",
        body: `Every problem below runs against this database only. The code arena preselects it and does not show a database dropdown, so you never see MySQL's \`ERROR 1046: No database selected\` here.\n\nYou write one query, press **Check answer**, and it is compared row by row with the reference answer — same rows, same columns, any valid query wins. Use **Hint** first, **Compare with the reference answer** once you have tried, and **Reset database** if you changed rows while experimenting.`,
        callout: { kind: "remember", text: "You do not need `USE portfolio_...;` in practice mode. In Workbench you do — the download script ends with the right USE for you." },
      },
    ],
    mistakes: c.mistakes,
    checkYourself: [
      `Can you say in one sentence what one row of \`${c.tables[0]?.name}\` means?`,
      "Can you write a query that returns exactly one number from a 2,000-row table without scrolling the result?",
      "Can you explain why two of your joins could double a total, and how you avoided it?",
    ],
    faq: c.faq,
    guided: {
      intro: c.guided.intro,
      steps: c.guided.steps,
      sql: c.guided.sql,
      dataset: c.dataset,
      explain: c.guided.explain,
    },
    questions: c.questions.map((question) => ({
      ...question,
      dataset: c.dataset,
      target: TARGETS[question.id] ?? "Run the reference answer to see the expected result.",
    })),
    quiz: c.quiz,
    teaches: c.teaches,
  };
}
