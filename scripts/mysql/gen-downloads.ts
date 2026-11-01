/**
 * Writes the downloadable practice scripts from lib/sql-practice/datasets.ts:
 *   public/downloads/mysql-retail-lab-reset.sql  (drop + recreate the small shop)
 *   public/downloads/mysql-retail-large.sql      (4,000-order dataset, separate schema)
 *   public/downloads/mysql-reallife-*.sql        (the six real-life databases)
 * Run: npm run mysql:downloads
 */
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { buildLargeDataset, sqlLiteral, type Dataset } from "../../lib/sql-practice/datasets";
import { REAL_LIFE_IDS, buildRealLifeDataset } from "../../lib/sql-practice/real-life-datasets";

const root = join(__dirname, "..", "..");
const out = (name: string) => join(root, "public", "downloads", name);

function cell(def: string | undefined, v: string | number | null) {
  // keep two decimals for DECIMAL columns so the file reads like MySQL output
  if (typeof v === "number" && /DECIMAL/i.test(def ?? "")) return v.toFixed(2);
  return sqlLiteral(v);
}

function datasetSql(ds: Dataset, { insertIgnore }: { insertIgnore: boolean }) {
  const lines: string[] = [];
  for (const t of ds.tables) {
    lines.push(`CREATE TABLE IF NOT EXISTS ${t.name} (\n ${t.columns.join(",\n ")}\n) ENGINE=InnoDB;`);
  }
  lines.push("");
  for (const t of ds.tables) {
    for (let i = 0; i < t.rows.length; i += 500) {
      const chunk = t.rows.slice(i, i + 500);
      lines.push(`INSERT ${insertIgnore ? "IGNORE " : ""}INTO ${t.name} VALUES\n${chunk.map((r) => ` (${r.map((v, c) => cell(t.columns[c], v)).join(",")})`).join(",\n")};`);
    }
  }
  return lines.join("\n");
}

// 1. Reset script: header + DROP + the exact lab script body.
const lab = readFileSync(out("mysql-retail-lab.sql"), "utf8");
const labBody = lab.slice(lab.indexOf("CREATE DATABASE"));
writeFileSync(
  out("mysql-retail-lab-reset.sql"),
  `-- RESET the Learning Shop practice database to its original rows.
-- WARNING: this DELETES the database portfolio_retail_lab and everything you
-- created inside it, then recreates it from scratch. Practice servers only.
-- MySQL 8.0.16+ (8.4 recommended). Workbench: File > Open SQL Script > Execute.
DROP DATABASE IF EXISTS portfolio_retail_lab;
${labBody}`
);

// 2. Large dataset.
const large = buildLargeDataset();
const counts = large.tables.map((t) => `${t.name} ${t.rows.length}`).join(", ");
writeFileSync(
  out("mysql-retail-large.sql"),
  `-- Learning Shop LARGE practice dataset (fictional): ${counts}.
-- Same four tables and columns as portfolio_retail_lab, in a separate schema,
-- so every course query runs unchanged after USE portfolio_retail_large;
-- Orders run from 2025-01-01 to 2026-06-30. Used in lessons 11 and 14.
-- MySQL 8.0.16+ (8.4 recommended). Safe to re-run: no DROP, INSERT IGNORE.
-- Workbench: File > Open SQL Script > Execute.  CLI: mysql -u USER -p < mysql-retail-large.sql
CREATE DATABASE IF NOT EXISTS portfolio_retail_large CHARACTER SET utf8mb4;
USE portfolio_retail_large;

${datasetSql(large, { insertIgnore: true })}

SELECT 'customers' AS table_name, COUNT(*) AS row_count FROM customers
UNION ALL SELECT 'products', COUNT(*) FROM products
UNION ALL SELECT 'orders', COUNT(*) FROM orders
UNION ALL SELECT 'order_items', COUNT(*) FROM order_items;
`
);
console.log("wrote reset + large:", counts);

// 3. The six real-life databases, one MySQL script each.
const summary = REAL_LIFE_IDS.map((id) => {
  const ds = buildRealLifeDataset(id);
  const counts = ds.tables.map((t) => `${t.name} ${t.rows.length}`).join(", ");
  const columnCount = ds.tables.reduce((s, t) => s + t.rows[0].length, 0);
  const check = ds.tables
    .map((t) => `SELECT '${t.name}' AS table_name, COUNT(*) AS row_count FROM ${t.name}`)
    .join("\nUNION ALL ");
  writeFileSync(
    out(`mysql-reallife-${id}.sql`),
    `-- Real-life practice database for the free MySQL course: ${ds.label}.
-- ${ds.tables.length} related tables, ${columnCount} columns, generated from a fixed seed so
-- it matches the in-browser code arena row for row. All data is fictional.
-- MySQL 8.0.16+ (8.4 recommended). Safe to re-run: no DROP, INSERT IGNORE.
-- Workbench: File > Open SQL Script > Execute.  CLI: mysql -u USER -p < mysql-reallife-${id}.sql
CREATE DATABASE IF NOT EXISTS ${ds.schema} CHARACTER SET utf8mb4;
USE ${ds.schema};

${datasetSql(ds, { insertIgnore: true })}

${check};
`
  );
  return `${id}: ${counts}`;
});
console.log("wrote real-life databases:\n " + summary.join("\n "));
