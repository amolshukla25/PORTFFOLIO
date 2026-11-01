/**
 * Writes the downloadable practice scripts from lib/sql-practice/datasets.ts:
 *   public/downloads/mysql-retail-lab-reset.sql  (drop + recreate the small shop)
 *   public/downloads/mysql-retail-large.sql      (4,000-order dataset, separate schema)
 * Run: npm run mysql:downloads
 */
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { buildLargeDataset, sqlLiteral, type Dataset } from "../../lib/sql-practice/datasets";

const root = join(__dirname, "..", "..");
const out = (name: string) => join(root, "public", "downloads", name);

function money(table: string, col: number, v: string | number | null) {
  // keep two decimals for DECIMAL columns so the file reads like MySQL output
  if (typeof v === "number" && ((table === "products" && col === 3) || (table === "order_items" && col === 3))) return v.toFixed(2);
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
      lines.push(`INSERT ${insertIgnore ? "IGNORE " : ""}INTO ${t.name} VALUES\n${chunk.map((r) => ` (${r.map((v, c) => money(t.name, c, v)).join(",")})`).join(",\n")};`);
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
