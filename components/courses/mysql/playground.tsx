"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ErDiagram } from "./diagrams";
import SqlRunner from "./sql-runner";

const SAMPLES = [
  { label: "All products", sql: "SELECT * FROM products ORDER BY product_id;" },
  { label: "Revenue by month", sql: "SELECT DATE_FORMAT(o.order_date, '%Y-%m') AS month,\n       SUM(i.quantity * i.unit_price) AS revenue\nFROM orders o\nJOIN order_items i ON i.order_id = o.order_id\nWHERE o.status = 'completed'\nGROUP BY month\nORDER BY month;" },
  { label: "Customers without orders", sql: "SELECT c.customer_name\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.customer_id\nWHERE o.order_id IS NULL;" },
  { label: "Top product per category", sql: "WITH r AS (\n  SELECT p.category, p.product_name, SUM(i.quantity * i.unit_price) AS revenue,\n         ROW_NUMBER() OVER (PARTITION BY p.category ORDER BY SUM(i.quantity * i.unit_price) DESC) AS rn\n  FROM order_items i JOIN products p ON p.product_id = i.product_id\n  GROUP BY p.category, p.product_id, p.product_name\n)\nSELECT category, product_name, revenue FROM r WHERE rn = 1 ORDER BY category;" },
];

export default function MysqlPlayground() {
  const [sql, setSql] = useState(SAMPLES[0].sql);
  return (
    <div className="container max-w-5xl py-8 sm:py-12">
      <Link href="/courses/mysql" className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> MySQL course
      </Link>
      <header className="mt-4 space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">Free · no install · no sign-up</p>
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">MySQL practice playground</h1>
        <p className="max-w-[720px] text-base leading-relaxed text-muted-foreground sm:text-lg">
          Write and run SQL in your browser on the Learning Shop database — 4 related tables, or a large version with 4,000 orders. The database dropdown also lists the six real-life practice databases from the last six modules (hospital, bank, marketplace, college, rides, streaming), each with 2,000 rows. Changes stay in your browser; <strong className="text-foreground">Reset database</strong> brings the original rows back.
        </p>
      </header>
      <div className="mt-6 flex flex-wrap gap-2">
        {SAMPLES.map((s) => (
          <button key={s.label} type="button" onClick={() => setSql(s.sql)} className="min-h-10 rounded-xl border border-border px-3 text-sm hover:border-accent/50 hover:bg-muted">
            {s.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <SqlRunner initialSql={SAMPLES[0].sql} value={sql} onChange={setSql} dataset="shop" datasetSwitch label="Playground SQL editor" minLines={10} />
      </div>
      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl font-semibold">The tables</h2>
        <p className="max-w-[720px] text-[15px] leading-relaxed text-muted-foreground">A customer has many orders, an order has many order_items, and each order item points to one product. Revenue is quantity × unit_price for completed orders (6150.00 in the small shop).</p>
        <ErDiagram />
      </section>
      <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
        The playground runs a SQLite engine with a MySQL compatibility layer. Most MySQL syntax used in the course works; EXPLAIN output, WITH ROLLUP and user variables differ — run those in MySQL Workbench. Download the same data as MySQL scripts from any lesson’s Database step.
      </p>
    </div>
  );
}
