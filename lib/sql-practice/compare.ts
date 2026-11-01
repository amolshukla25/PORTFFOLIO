import type { Cell, ResultSet, RunOutput } from "./engine";

export interface CheckOptions {
  orderMatters?: boolean;
  numericTolerance?: number;
}

export type CheckVerdict =
  | { ok: true; message: string }
  | { ok: false; message: string };

function isNumeric(v: Cell): v is number | string {
  if (typeof v === "number") return true;
  return typeof v === "string" && /^-?\d+(\.\d+)?$/.test(v.trim());
}

function same(a: Cell, b: Cell, tol: number) {
  if (a === null || b === null) return a === b;
  if (isNumeric(a) && isNumeric(b)) return Math.abs(Number(a) - Number(b)) <= tol;
  return String(a).trim().toLowerCase() === String(b).trim().toLowerCase();
}

export function formatCell(v: Cell): string {
  if (v === null) return "NULL";
  if (typeof v === "number") {
    if (Number.isInteger(v)) return String(v);
    return String(Math.round(v * 10000) / 10000);
  }
  return v;
}

function key(row: Cell[]) {
  return row.map((v) => (v === null ? "\u0000" : isNumeric(v) ? Number(v).toFixed(4) : String(v).trim().toLowerCase())).join("\u0001");
}

/** Does the outer query fix its row order? (ORDER BY outside an OVER(...) window) */
export function referenceOrders(sql: string) {
  let s = sql.replace(/'(?:[^']|'')*'/g, "''");
  // remove OVER ( ... ) groups so window ORDER BY doesn't count
  let prev = "";
  while (prev !== s) {
    prev = s;
    s = s.replace(/OVER\s*\([^()]*\)/gi, "");
  }
  const lastSelect = s.split(/;/).filter((x) => /\bSELECT\b/i.test(x)).pop() ?? s;
  // ORDER BY at paren depth 0
  let depth = 0;
  const up = lastSelect.toUpperCase();
  for (let i = 0; i < up.length; i++) {
    const c = up[i];
    if (c === "(") depth++;
    else if (c === ")") depth--;
    else if (depth === 0 && up.startsWith("ORDER BY", i)) return true;
  }
  return false;
}

export function compareResultSets(expected: ResultSet, actual: ResultSet, opts: CheckOptions = {}): CheckVerdict {
  const tol = opts.numericTolerance ?? 0.01;
  if (actual.columns.length !== expected.columns.length) {
    return { ok: false, message: `Expected ${expected.columns.length} column${expected.columns.length === 1 ? "" : "s"} (${expected.columns.join(", ")}), got ${actual.columns.length}.` };
  }
  if (actual.rows.length !== expected.rows.length) {
    return { ok: false, message: `Expected ${expected.rows.length} row${expected.rows.length === 1 ? "" : "s"}, got ${actual.rows.length}.` };
  }
  if (opts.orderMatters) {
    for (let r = 0; r < expected.rows.length; r++) {
      for (let c = 0; c < expected.columns.length; c++) {
        if (!same(expected.rows[r][c], actual.rows[r][c], tol)) {
          // Same rows in another order?
          const sortedOk = compareResultSets(expected, actual, { ...opts, orderMatters: false }).ok;
          if (sortedOk) return { ok: false, message: "The right rows, but in a different order. Check your ORDER BY." };
          return { ok: false, message: `Row ${r + 1}, column ${expected.columns[c]}: expected ${formatCell(expected.rows[r][c])}, got ${formatCell(actual.rows[r][c])}.` };
        }
      }
    }
    return { ok: true, message: "Correct" };
  }
  const pool = new Map<string, number>();
  for (const row of actual.rows) pool.set(key(row), (pool.get(key(row)) ?? 0) + 1);
  for (let r = 0; r < expected.rows.length; r++) {
    const k = key(expected.rows[r]);
    const n = pool.get(k) ?? 0;
    if (n > 0) {
      pool.set(k, n - 1);
      continue;
    }
    // Fall back to tolerant matching for floating point values
    const idx = actual.rows.findIndex((row) => row.every((v, c) => same(expected.rows[r][c], v, tol)));
    if (idx >= 0) continue;
    return { ok: false, message: `Missing a row: (${expected.rows[r].map(formatCell).join(", ")}).` };
  }
  return { ok: true, message: "Correct" };
}

/** Compare the last result set of each run (scripts may print previews first). */
export function compareRuns(expected: RunOutput, actual: RunOutput, opts: CheckOptions = {}): CheckVerdict {
  if (actual.error) return { ok: false, message: `Your query stopped with an error: ${actual.error.message}` };
  if (expected.error) return { ok: false, message: "The reference answer could not run in practice mode — compare with the target by eye." };
  const e = expected.resultSets[expected.resultSets.length - 1];
  const a = actual.resultSets[actual.resultSets.length - 1];
  if (!e) return { ok: !!actual.messages.length, message: actual.messages.length ? "Correct" : "Nothing ran." };
  if (!a) return { ok: false, message: "Your query returned no result grid. Add a SELECT that shows the answer." };
  return compareResultSets(e, a, opts);
}
