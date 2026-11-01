"use client";

import { useState } from "react";
import { SHOP_DATASET } from "@/lib/sql-practice/datasets";
import { cn } from "@/lib/utils";
import ResultTable from "./result-table";

const COLS: Record<string, string[]> = Object.fromEntries(
  SHOP_DATASET.tables.map((t) => [t.name, t.columns.filter((c) => !/^(FOREIGN|PRIMARY|CHECK)/.test(c)).map((c) => c.split(" ")[0])])
);

const KEYS: Record<string, Record<string, "PK" | "FK" | "PK FK">> = {
  customers: { customer_id: "PK" },
  products: { product_id: "PK" },
  orders: { order_id: "PK", customer_id: "FK" },
  order_items: { order_id: "PK FK", product_id: "PK FK" },
};

const BOXES = [
  { name: "customers", x: 8, y: 14 },
  { name: "orders", x: 232, y: 14 },
  { name: "order_items", x: 456, y: 14 },
  { name: "products", x: 680, y: 14 },
];
const W = 156;
const ROW = 20;

/** Entity-relationship diagram of the shop. Click a table to see all its rows. */
export function ErDiagram() {
  const [open, setOpen] = useState<string | null>(null);
  const table = SHOP_DATASET.tables.find((t) => t.name === open);
  // one side (1) → many side (N, with crow's-foot arrow)
  const rel = (oneX: number, manyX: number, y: number) => {
    const dir = manyX > oneX ? 1 : -1;
    return (
      <g>
        <line x1={oneX} y1={y} x2={manyX} y2={y} className="stroke-accent" strokeWidth={1.5} />
        <text x={oneX + dir * 8} y={y - 6} textAnchor="middle" className="fill-muted-foreground" fontSize={11} fontWeight={700}>1</text>
        <text x={manyX - dir * 12} y={y - 6} textAnchor="middle" className="fill-muted-foreground" fontSize={11} fontWeight={700}>N</text>
        <path d={`M${manyX} ${y} l${-dir * 8} -6 M${manyX} ${y} l${-dir * 8} 6`} className="stroke-accent" strokeWidth={1.5} fill="none" />
      </g>
    );
  };
  return (
    <figure className="not-prose my-5 space-y-3">
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-2">
        <svg viewBox="0 0 844 140" role="img" aria-labelledby="er-title er-desc" className="w-full min-w-[620px] font-mono">
          <title id="er-title">Learning Shop tables and relationships</title>
          <desc id="er-desc">customers one-to-many orders; orders one-to-many order_items; products one-to-many order_items.</desc>
          {BOXES.map((b) => {
            const cols = COLS[b.name];
            return (
              <g key={b.name} transform={`translate(${b.x} ${b.y})`} className="cursor-pointer" onClick={() => setOpen(open === b.name ? null : b.name)}>
                <rect width={W} height={38 + cols.length * ROW} rx={10} className={cn("fill-card stroke-border", open === b.name && "stroke-accent")} strokeWidth={open === b.name ? 2 : 1} />
                <rect width={W} height={26} rx={10} className="fill-accent/10" />
                <text x={10} y={17} fontSize={12} fontWeight={700} className="fill-foreground">{b.name}</text>
                {cols.map((c, i) => (
                  <g key={c}>
                    <text x={10} y={44 + i * ROW} fontSize={11} className="fill-foreground">{c}</text>
                    {KEYS[b.name][c] && (
                      <text x={W - 8} y={44 + i * ROW} fontSize={9} textAnchor="end" className="fill-accent" fontWeight={700}>{KEYS[b.name][c]}</text>
                    )}
                  </g>
                ))}
              </g>
            );
          })}
          {rel(8 + W, 232, 64)}
          {rel(232 + W, 456, 54)}
          {rel(680, 456 + W, 64)}
        </svg>
      </div>
      <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
        customers.customer_id → orders.customer_id · orders.order_id → order_items.order_id · products.product_id → order_items.product_id
      </p>
      <figcaption className="flex flex-wrap gap-2 text-xs text-muted-foreground">
        <span className="mr-1 self-center">Show rows:</span>
        {SHOP_DATASET.tables.map((t) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setOpen(open === t.name ? null : t.name)}
            aria-pressed={open === t.name}
            className={cn("min-h-9 rounded-lg border px-3 font-mono text-xs transition-colors", open === t.name ? "border-accent bg-accent/10 text-accent" : "border-border hover:border-accent/50")}
          >
            {t.name} ({t.rows.length})
          </button>
        ))}
      </figcaption>
      {table && (
        <ResultTable
          caption={`${table.name} — all rows`}
          columns={COLS[table.name]}
          rows={table.rows.map((r) => r.map((v, i) => (typeof v === "number" && ((table.name === "products" && i === 3) || (table.name === "order_items" && i === 3)) ? v.toFixed(2) : v)))}
        />
      )}
    </figure>
  );
}

export function VennDiagram() {
  return (
    <figure className="not-prose my-5 grid gap-3 sm:grid-cols-2">
      {[
        { title: "INNER JOIN", note: "only customers with orders", left: false },
        { title: "LEFT JOIN", note: "every customer; NULL where no order", left: true },
      ].map((d) => (
        <div key={d.title} className="rounded-xl border border-border bg-card p-3">
          <svg viewBox="0 0 220 110" role="img" aria-label={`${d.title}: ${d.note}`} className="w-full">
            <defs>
              <clipPath id={`clip-${d.left}`}>
                <circle cx={85} cy={55} r={45} />
              </clipPath>
            </defs>
            {d.left && <circle cx={85} cy={55} r={45} className="fill-accent/25" />}
            <circle cx={135} cy={55} r={45} clipPath={`url(#clip-${d.left})`} className="fill-accent/60" />
            <circle cx={85} cy={55} r={45} className="fill-none stroke-foreground/50" />
            <circle cx={135} cy={55} r={45} className="fill-none stroke-foreground/50" />
            <text x={62} y={58} fontSize={10} className="fill-foreground">customers</text>
            <text x={148} y={58} fontSize={10} className="fill-foreground">orders</text>
          </svg>
          <p className="mt-1 text-center text-xs"><strong className="font-semibold text-foreground">{d.title}</strong> <span className="text-muted-foreground">— {d.note}</span></p>
        </div>
      ))}
    </figure>
  );
}

export function JoinExpansionDiagram() {
  return (
    <figure className="not-prose my-5 overflow-x-auto rounded-xl border border-border bg-card p-4">
      <svg viewBox="0 0 560 130" role="img" aria-label="One order row becomes two rows after joining its two order items" className="min-w-[460px] w-full font-mono">
        <text x={10} y={16} fontSize={11} className="fill-muted-foreground">orders (1 row)</text>
        <rect x={10} y={26} width={150} height={30} rx={8} className="fill-accent/10 stroke-accent" />
        <text x={20} y={45} fontSize={12} className="fill-foreground">101 · Asha · completed</text>
        <text x={200} y={16} fontSize={11} className="fill-muted-foreground">order_items (2 rows)</text>
        {["101 · Notebook · 2 × 100", "101 · Pen · 5 × 20"].map((t, i) => (
          <g key={t}>
            <rect x={200} y={26 + i * 40} width={170} height={30} rx={8} className="fill-card stroke-border" />
            <text x={210} y={45 + i * 40} fontSize={12} className="fill-foreground">{t}</text>
            <path d={`M160 41 C 180 41, 180 ${41 + i * 40}, 200 ${41 + i * 40}`} className="stroke-accent" fill="none" strokeWidth={1.5} />
          </g>
        ))}
        <text x={400} y={16} fontSize={11} className="fill-muted-foreground">after JOIN: 2 rows</text>
        {[0, 1].map((i) => (
          <g key={i}>
            <rect x={400} y={26 + i * 40} width={150} height={30} rx={8} className="fill-star/10 stroke-star" />
            <text x={410} y={45 + i * 40} fontSize={12} className="fill-foreground">order 101 again</text>
          </g>
        ))}
        <text x={10} y={120} fontSize={11} className="fill-muted-foreground">COUNT(*) now counts 2 for one order → use COUNT(DISTINCT order_id).</text>
      </svg>
    </figure>
  );
}

export function GroupBucketsDiagram() {
  const groups: [string, string[]][] = [["Delhi", ["Dev"]], ["Jaipur", ["Farah"]], ["Mumbai", ["Bilal", "Esha"]], ["Pune", ["Asha", "Charu"]]];
  return (
    <figure className="not-prose my-5 grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label="GROUP BY city puts the six customers into four buckets">
      {groups.map(([city, names]) => (
        <div key={city} className="rounded-xl border border-border bg-card p-3">
          <p className="font-mono text-xs font-semibold text-accent">{city}</p>
          <ul className="mt-2 flex flex-wrap gap-1">
            {names.map((n) => (
              <li key={n} className="rounded-md bg-muted px-1.5 py-0.5 text-[11px]">{n}</li>
            ))}
          </ul>
          <p className="mt-2 border-t border-border pt-1.5 font-mono text-xs">COUNT(*) = {names.length}</p>
        </div>
      ))}
    </figure>
  );
}

export function WindowFrameDiagram() {
  const months = [["2026-01", 1600], ["2026-02", 1950], ["2026-03", 2600], ["2026-04", 1200], ["2026-05", 2100], ["2026-06", 1800]] as const;
  const [cur, setCur] = useState(3);
  const [preceding, setPreceding] = useState<"unbounded" | 2>(2);
  const from = preceding === "unbounded" ? 0 : Math.max(0, cur - 2);
  const inFrame = months.slice(from, cur + 1).map((m) => m[1]);
  const sum = inFrame.reduce((a, b) => a + b, 0);
  return (
    <figure className="not-prose my-5 space-y-3 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-center gap-3 text-xs">
        <label className="flex items-center gap-2">
          Current row
          <input type="range" min={0} max={months.length - 1} value={cur} onChange={(e) => setCur(+e.target.value)} className="accent-[hsl(var(--accent))]" aria-label="Current row" />
        </label>
        <div className="flex gap-1" role="group" aria-label="Frame start">
          {(["unbounded", 2] as const).map((p) => (
            <button key={String(p)} type="button" onClick={() => setPreceding(p)} aria-pressed={preceding === p} className={cn("min-h-9 rounded-lg border px-2.5 font-mono", preceding === p ? "border-accent bg-accent/10 text-accent" : "border-border")}>
              {p === "unbounded" ? "UNBOUNDED PRECEDING" : "2 PRECEDING"}
            </button>
          ))}
        </div>
      </div>
      <ol className="grid grid-cols-3 gap-1.5 sm:grid-cols-6">
        {months.map(([m, v], i) => (
          <li key={m} className={cn("rounded-lg border px-2 py-1.5 font-mono text-[11px]", i === cur ? "border-accent bg-accent/15" : i >= from && i <= cur ? "border-accent/40 bg-accent/5" : "border-border text-muted-foreground")}>
            <span className="block">{m}</span>
            <span className="block font-semibold">{v}</span>
          </li>
        ))}
      </ol>
      <figcaption className="font-mono text-xs text-muted-foreground">
        ROWS BETWEEN {preceding === "unbounded" ? "UNBOUNDED" : "2"} PRECEDING AND CURRENT ROW → SUM = <strong className="text-foreground">{sum}</strong>, AVG = <strong className="text-foreground">{Math.round((sum / inFrame.length) * 100) / 100}</strong> <span className="ml-1">(illustrative numbers)</span>
      </figcaption>
    </figure>
  );
}

export function LessonDiagram({ kind }: { kind: "er" | "join-expansion" | "group-buckets" | "window-frame" | "venn" }) {
  if (kind === "er") return <ErDiagram />;
  if (kind === "venn") return <VennDiagram />;
  if (kind === "join-expansion") return <JoinExpansionDiagram />;
  if (kind === "group-buckets") return <GroupBucketsDiagram />;
  return <WindowFrameDiagram />;
}
