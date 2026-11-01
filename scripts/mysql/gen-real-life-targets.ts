/**
 * Generates config/mysql/real-life/targets.generated.json.
 *
 * Runs every reference answer of the six real-life modules against its
 * database and writes the expected output as the problem's `target` text, so
 * learners compare against what the query really returns instead of a number
 * typed by hand. Also fails when a module does not have exactly 50 problems, a
 * question id repeats, or an answer errors out.
 *
 * Run: npm run mysql:targets
 */
import { writeFileSync } from "fs";
import { join } from "path";
import initSqlJs from "sql.js";
import { REAL_LIFE_CONFIGS } from "../../config/mysql/real-life/configs";
import { PracticeDb, type Cell, type ResultSet } from "../../lib/sql-practice/engine";
import type { DatasetId } from "../../lib/sql-practice/datasets";

const fmt = (v: Cell) => {
  if (v === null) return "NULL";
  if (typeof v === "number") return Number.isInteger(v) ? String(v) : String(Math.round(v * 100) / 100);
  return String(v);
};

function summarize(rs: ResultSet): string {
  const preview = rs.rows
    .slice(0, 2)
    .map((r) => `(${r.map(fmt).join(", ")})`)
    .join("; ");
  const more = rs.rows.length > 2 ? " …" : "";
  const text = `${rs.rows.length} row${rs.rows.length === 1 ? "" : "s"} · ${rs.columns.join(", ")} · ${preview}${more}`;
  return text.length > 240 ? `${text.slice(0, 237)}…` : text;
}

(async () => {
  const SQL = await initSqlJs();
  const targets: Record<string, string> = {};
  const problems: string[] = [];
  const ids = new Set<string>();

  for (const module of REAL_LIFE_CONFIGS) {
    if (module.questions.length !== 50) problems.push(`${module.slug}: ${module.questions.length} problems (need exactly 50)`);
    const db = new PracticeDb(SQL, module.dataset as DatasetId);
    for (const question of module.questions) {
      if (ids.has(question.id)) problems.push(`duplicate question id ${question.id}`);
      ids.add(question.id);
      const run = db.run(question.answerSql);
      if (run.error) {
        problems.push(`${question.id}: ${run.error.code} ${run.error.message}`);
        continue;
      }
      const last = run.resultSets[run.resultSets.length - 1];
      if (!last) {
        problems.push(`${question.id}: reference answer returned no result grid`);
        continue;
      }
      targets[question.id] = summarize(last);
    }
    db.close();
  }

  const sorted = Object.fromEntries(Object.keys(targets).sort().map((k) => [k, targets[k]]));
  writeFileSync(join(__dirname, "..", "..", "config", "mysql", "real-life", "targets.generated.json"), `${JSON.stringify(sorted, null, 2)}\n`);

  console.log(`${REAL_LIFE_CONFIGS.length} modules, ${ids.size} problems, ${Object.keys(targets).length} targets generated`);
  if (problems.length) {
    console.error(`\n${problems.length} problem(s):\n- ${problems.join("\n- ")}`);
    process.exit(1);
  }
  console.log("All reference answers run and return a result.");
})();
