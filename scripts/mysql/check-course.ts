/**
 * CI check for the MySQL course. Fails (exit 1) when:
 *  - a lesson has fewer than 15 or more than 20 practice problems, or 3–5 quiz items;
 *  - question ids repeat;
 *  - a snippet has no stored MySQL result (run gen-results.py);
 *  - the browser practice engine disagrees with real MySQL on any auto-checked
 *    reference answer (so the "Check" button would mark the reference wrong);
 *  - syllabus.ts is out of date.
 * Run: npm run test:mysql
 */
import initSqlJs from "sql.js";
import { MYSQL_LESSONS, mysqlResult } from "../../config/mysql/index";
import { MYSQL_SYLLABUS } from "../../config/mysql/syllabus";
import { estimateMinutes } from "../../config/mysql/estimate";
import { PracticeDb } from "../../lib/sql-practice/engine";
import { compareResultSets, referenceOrders } from "../../lib/sql-practice/compare";
import type { DatasetChoice } from "../../config/mysql/types";

(async () => {
  const SQL = await initSqlJs();
  const problems: string[] = [];
  const ids = new Set<string>();
  const cache = new Map<DatasetChoice, Uint8Array>();
  const fresh = (ds: DatasetChoice) => {
    if (!cache.has(ds)) { const d = new PracticeDb(SQL, ds); cache.set(ds, d.export()); d.close(); }
    return new PracticeDb(SQL, ds, cache.get(ds));
  };
  let checked = 0;

  for (const l of MYSQL_LESSONS) {
    if (l.questions.length < 15 || l.questions.length > 20) problems.push(`${l.slug}: ${l.questions.length} problems (need 15–20)`);
    if (l.quiz.length < 3 || l.quiz.length > 5) problems.push(`${l.slug}: ${l.quiz.length} quiz items (need 3–5)`);
    if (l.summary.length > 160) problems.push(`${l.slug}: summary longer than 160 characters`);
    const syl = MYSQL_SYLLABUS.find((s) => s.slug === l.slug);
    if (!syl || syl.questions !== l.questions.length || syl.minutes !== estimateMinutes(l)) problems.push(`${l.slug}: syllabus.ts out of date — run npm run mysql:syllabus`);
    const snippets: [DatasetChoice, string, string][] = [
      ...l.sections.filter((s) => s.sql).map((s, i) => [s.dataset ?? l.dataset, s.sql!, `section ${i + 1}`] as [DatasetChoice, string, string]),
      [l.guided.dataset, l.guided.sql, "guided"],
    ];
    for (const [ds, sql, where] of snippets) if (!mysqlResult(ds, sql)) problems.push(`${l.slug} ${where}: no stored MySQL result — run gen-results.py`);

    for (const q of l.questions) {
      if (ids.has(q.id)) problems.push(`duplicate question id ${q.id}`);
      ids.add(q.id);
      const ds = q.dataset ?? l.dataset;
      const stored = mysqlResult(ds, q.answerSql);
      if (!stored) { problems.push(`${q.id}: no stored MySQL result — run gen-results.py`); continue; }
      if (q.check?.manual) continue;
      const db = fresh(ds);
      const run = db.run(q.answerSql);
      db.close();
      checked++;
      if (q.check?.expectError) {
        if (run.error?.code !== q.check.expectError) problems.push(`${q.id}: expected error ${q.check.expectError}, practice engine gave ${run.error ? run.error.code : "no error"}`);
        if (stored.error?.code !== q.check.expectError) problems.push(`${q.id}: MySQL gave ${stored.error?.code ?? "no error"}, expected ${q.check.expectError}`);
        continue;
      }
      if (run.error) { problems.push(`${q.id}: practice engine error ${run.error.code}: ${run.error.message}`); continue; }
      const mine = run.resultSets[run.resultSets.length - 1];
      const theirs = stored.sets[stored.sets.length - 1];
      if (!mine || !theirs) { problems.push(`${q.id}: missing result set`); continue; }
      const verdict = compareResultSets({ columns: theirs.columns, rows: theirs.rows }, mine, { orderMatters: q.check?.orderMatters ?? referenceOrders(q.answerSql) });
      if (!verdict.ok) problems.push(`${q.id}: practice engine ≠ MySQL — ${verdict.message}`);
    }
  }

  console.log(`${MYSQL_LESSONS.length} lessons, ${ids.size} problems, ${checked} auto-checked against MySQL output`);
  if (problems.length) {
    console.error(`\n${problems.length} problem(s):\n- ${problems.join("\n- ")}`);
    process.exit(1);
  }
  console.log("All checks passed.");
})();
