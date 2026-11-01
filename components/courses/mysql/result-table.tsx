"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Cell = string | number | null;

function isNum(v: Cell) {
  return typeof v === "number" || (typeof v === "string" && /^-?\d+(\.\d+)?$/.test(v));
}

export function formatCell(v: Cell) {
  if (v === null) return "NULL";
  if (typeof v === "number" && !Number.isInteger(v)) return String(Math.round(v * 10000) / 10000);
  return String(v);
}

/**
 * One grid for both "What you should see" (stored MySQL output) and live
 * practice results, so learners compare like with like.
 */
export default function ResultTable({
  columns,
  rows,
  caption,
  tone = "default",
  maxRows = 25,
  truncatedTotal,
}: {
  columns: string[];
  rows: Cell[][];
  caption?: string;
  tone?: "default" | "expected";
  maxRows?: number;
  truncatedTotal?: number;
}) {
  const [all, setAll] = useState(false);
  const shown = all ? rows : rows.slice(0, maxRows);
  const numeric = columns.map((_, c) => rows.length > 0 && rows.every((r) => r[c] === null || isNum(r[c])));
  return (
    <figure className={cn("overflow-hidden rounded-xl border", tone === "expected" ? "border-success/30" : "border-border")}>
      {caption && (
        <figcaption className={cn("flex items-center justify-between gap-3 border-b px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider", tone === "expected" ? "border-success/20 bg-success/5 text-success" : "border-border bg-muted/50 text-muted-foreground")}>
          <span>{caption}</span>
          <span className="normal-case tracking-normal">
            {truncatedTotal ?? rows.length} row{(truncatedTotal ?? rows.length) === 1 ? "" : "s"}
          </span>
        </figcaption>
      )}
      <div className="max-h-[420px] overflow-auto">
        <table className="w-full border-collapse font-mono text-[12.5px] leading-5">
          <thead className="sticky top-0 bg-card">
            <tr>
              {columns.map((c, i) => (
                <th key={i} scope="col" className={cn("whitespace-nowrap border-b border-border px-3 py-1.5 font-semibold text-foreground", numeric[i] ? "text-right" : "text-left")}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shown.map((row, r) => (
              <tr key={r} className="odd:bg-muted/30">
                {row.map((v, c) => (
                  <td key={c} className={cn("whitespace-nowrap px-3 py-1 tabular-nums", numeric[c] ? "text-right" : "text-left", v === null && "italic text-muted-foreground")}>
                    {formatCell(v)}
                  </td>
                ))}
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={Math.max(1, columns.length)} className="px-3 py-3 text-center text-xs text-muted-foreground">
                  Empty set (0 rows)
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {rows.length > maxRows && !all && (
        <button type="button" onClick={() => setAll(true)} className="w-full border-t border-border px-3 py-2 text-xs font-medium text-accent hover:bg-muted/50">
          Show all {rows.length} rows
        </button>
      )}
      {truncatedTotal && truncatedTotal > rows.length ? (
        <p className="border-t border-border px-3 py-1.5 text-[11px] text-muted-foreground">Showing the first {rows.length} of {truncatedTotal} rows.</p>
      ) : null}
    </figure>
  );
}
