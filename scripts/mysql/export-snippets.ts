/** Prints every SQL snippet in the course (sections, guided, questions) as JSON. */
import { readdirSync } from "fs";
import { join } from "path";
import { EXTRA_SNIPPETS } from "../../config/mysql/extra-snippets";
import { snippetKey } from "../../config/mysql/snippet-key";
import type { MysqlLesson } from "../../config/mysql/types";

(async () => {
  const dir = join(__dirname, "..", "..", "config", "mysql", "lessons");
  const out: { key: string; dataset: string; sql: string; where: string }[] = [];
  for (const f of readdirSync(dir).filter((x) => /^\d\d-.*\.ts$/.test(x)).sort()) {
    const mod = await import(join(dir, f));
    const lesson = Object.values(mod).find((v) => (v as MysqlLesson)?.slug) as MysqlLesson;
    const add = (dataset: string, sql: string, where: string) => out.push({ key: snippetKey(dataset, sql), dataset, sql, where: `${lesson.slug}:${where}` });
    lesson.sections.forEach((s, i) => s.sql && add(s.dataset ?? lesson.dataset, s.sql, `section${i + 1}`));
    add(lesson.guided.dataset, lesson.guided.sql, "guided");
    lesson.questions.forEach((q) => add(q.dataset ?? lesson.dataset, q.answerSql, q.id));
  }
  for (const e of EXTRA_SNIPPETS) out.push({ key: snippetKey(e.dataset, e.sql), dataset: e.dataset, sql: e.sql, where: e.where });
  process.stdout.write(JSON.stringify(out));
})();
