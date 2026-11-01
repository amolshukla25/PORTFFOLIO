"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, CircleAlert, Database, Loader2, Play, RotateCcw, Undo2, Wand2 } from "lucide-react";
import { usePracticeEngine } from "@/hooks/use-practice-engine";
import type { CheckVerdict } from "@/lib/sql-practice/compare";
import { DATASET_INFO } from "@/lib/sql-practice/dataset-info";
import type { DatasetId } from "@/lib/sql-practice/datasets";
import type { RunOutput } from "@/lib/sql-practice/engine";
import { cn } from "@/lib/utils";
import ResultTable from "./result-table";
import SqlEditor from "./sql-editor";

const ERROR_HINTS: Record<number, string> = {
  1046: "Choose a database first: USE portfolio_retail_lab;",
  1052: "Two joined tables share this column name. Prefix it with the table alias, e.g. o.order_id.",
  1054: "Check the spelling and the table alias. Text values need single quotes: city = 'Pune'.",
  1055: "Every selected column must be in GROUP BY or inside an aggregate such as COUNT or SUM.",
  1062: "A row with this key already exists. Primary keys and UNIQUE columns cannot repeat.",
  1064: "Syntax error. Look just before the word mentioned: a missing comma, quote or bracket is the usual cause.",
  1111: "Aggregates such as COUNT() cannot go in WHERE. Move the condition to HAVING.",
  1146: "That table does not exist here. Run SHOW TABLES; to see the names.",
  1222: "Every SELECT in a UNION must return the same number of columns.",
  1241: "This subquery must return a single column.",
  1242: "This subquery returns more than one row where one value is expected.",
  1452: "The referenced row does not exist (foreign key). Insert the parent row first.",
  3819: "A CHECK constraint rejected this value.",
  1048: "A NOT NULL column received NULL.",
};

export interface RunnerCheck {
  answerSql: string;
  expectError?: number;
  orderMatters?: boolean;
  numericTolerance?: number;
}

export default function SqlRunner({
  initialSql,
  dataset: initialDataset,
  label = "SQL editor",
  datasetSwitch = false,
  check,
  onRan,
  onChecked,
  value,
  onChange,
  autoFocusKey,
  minLines = 5,
}: {
  initialSql: string;
  dataset: DatasetId;
  label?: string;
  datasetSwitch?: boolean;
  check?: RunnerCheck;
  onRan?: () => void;
  onChecked?: (v: CheckVerdict) => void;
  value?: string;
  onChange?: (v: string) => void;
  autoFocusKey?: string;
  minLines?: number;
}) {
  const engine = usePracticeEngine();
  const [own, setOwn] = useState(initialSql);
  const sql = value ?? own;
  const setSql = onChange ?? setOwn;
  const [dataset, setDataset] = useState<DatasetId>(initialDataset);
  const [busy, setBusy] = useState<"run" | "check" | "reset" | null>(null);
  const [output, setOutput] = useState<RunOutput | null>(null);
  const [verdict, setVerdict] = useState<CheckVerdict | null>(null);
  const [fatal, setFatal] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    setOutput(null);
    setVerdict(null);
    setFatal(null);
    setNotice(null);
  }, [autoFocusKey]);

  async function run() {
    if (!sql.trim() || busy) return;
    setBusy("run");
    setVerdict(null);
    setFatal(null);
    setNotice(null);
    const r = await engine.run(dataset, sql);
    setBusy(null);
    if (r.type === "run") {
      setOutput(r.output);
      onRan?.();
    } else if (r.type === "fatal") {
      setOutput(null);
      setFatal(r.message);
    }
  }

  async function doCheck() {
    if (!check || !sql.trim() || busy) return;
    setBusy("check");
    setFatal(null);
    setNotice(null);
    const r = await engine.check(dataset, sql, check.answerSql, {
      expectError: check.expectError,
      orderMatters: check.orderMatters,
      numericTolerance: check.numericTolerance,
    });
    setBusy(null);
    if (r.type === "check") {
      setOutput(r.output);
      setVerdict(r.verdict);
      onRan?.();
      onChecked?.(r.verdict);
    } else if (r.type === "fatal") {
      setFatal(r.message);
    }
  }

  async function resetDb() {
    setBusy("reset");
    await engine.reset(dataset);
    setBusy(null);
    setOutput(null);
    setVerdict(null);
    setNotice(`${DATASET_INFO[dataset].label} restored to its original rows.`);
  }

  const loading = engine.status === "loading" && busy !== null;

  return (
    <div className="space-y-3">
      {!datasetSwitch && dataset !== "none" && (
        <p className="flex flex-wrap items-center gap-1.5 rounded-xl border border-accent/30 bg-accent/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
          <Database className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
          <span>
            <strong className="font-semibold text-foreground">Database already selected:</strong> {DATASET_INFO[dataset].label}
          </span>
          <span className="font-mono text-[11px] text-muted-foreground/80">({DATASET_INFO[dataset].schema})</span>
          <span className="basis-full sm:basis-auto">— write the query directly, no USE needed.</span>
        </p>
      )}
      <SqlEditor value={sql} onChange={setSql} onRun={check ? doCheck : run} label={label} minLines={minLines} />
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={run}
          disabled={!!busy}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {busy === "run" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
          Run
        </button>
        {check && (
          <button
            type="button"
            onClick={doCheck}
            disabled={!!busy}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-success/40 bg-success/10 px-4 text-sm font-semibold text-success transition-colors hover:bg-success/15 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success"
          >
            {busy === "check" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
            Check answer
          </button>
        )}
        <span className="hidden text-xs text-muted-foreground sm:inline">Ctrl + Enter to {check ? "check" : "run"}</span>
        <div className="ml-auto flex flex-wrap items-center gap-1.5">
          {datasetSwitch && (
            <label className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-border px-2 text-xs text-muted-foreground">
              <Database className="h-3.5 w-3.5" aria-hidden />
              <span className="sr-only">Dataset</span>
              <select
                value={dataset}
                onChange={(e) => {
                  setDataset(e.target.value as DatasetId);
                  setOutput(null);
                  setVerdict(null);
                }}
                className="bg-transparent py-1 text-xs font-medium text-foreground outline-none"
              >
                {(["shop", "large", "hospital", "bank", "ecommerce", "college", "rides", "streaming", "none"] as DatasetId[]).map((id) => (
                  <option key={id} value={id}>
                    {DATASET_INFO[id].label}
                  </option>
                ))}
              </select>
            </label>
          )}
          {sql !== initialSql && (
            <button type="button" onClick={() => setSql(initialSql)} className="inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground" title="Put the original query back">
              <Undo2 className="h-3.5 w-3.5" /> Reset query
            </button>
          )}
          {dataset !== "none" && (
            <button type="button" onClick={resetDb} disabled={!!busy} className="inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-60" title="Undo every change you made to the practice data">
              <RotateCcw className={cn("h-3.5 w-3.5", busy === "reset" && "animate-spin")} /> Reset database
            </button>
          )}
        </div>
      </div>

      <div aria-live="polite" className="space-y-3">
        {loading && (
          <div className="space-y-2 rounded-xl border border-border p-3" aria-label="Loading the practice engine">
            <p className="text-xs text-muted-foreground">Loading the practice engine (first run only)…</p>
            <div className="h-3 w-2/3 animate-pulse rounded bg-muted" />
            <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
          </div>
        )}
        {verdict && (
          <div
            role="status"
            className={cn(
              "flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm",
              verdict.ok ? "border-success/40 bg-success/10 text-success" : "border-star/50 bg-star/10 text-foreground"
            )}
          >
            {verdict.ok ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-star" />}
            <p>
              <strong>{verdict.ok ? "Correct" : "Not yet"}</strong>
              {verdict.ok ? (verdict.message !== "Correct" ? ` — ${verdict.message.replace(/^Correct — /, "")}` : " — your result matches the reference answer.") : ` — ${verdict.message}`}
            </p>
          </div>
        )}
        {notice && <p className="rounded-xl bg-muted px-4 py-2.5 text-xs text-muted-foreground">{notice}</p>}
        {fatal && (
          <div className="rounded-xl border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm">
            <p className="font-semibold text-destructive">Practice engine stopped</p>
            <p className="mt-1 text-muted-foreground">{fatal}</p>
          </div>
        )}
        {output && (
          <>
            {output.resultSets.map((rs, i) => (
              <ResultTable
                key={i}
                columns={rs.columns}
                rows={rs.rows}
                truncatedTotal={rs.truncated ? rs.totalRows : undefined}
                caption={output.resultSets.length > 1 ? `Result ${i + 1}` : "Result"}
              />
            ))}
            {output.messages.length > 0 && (
              <ul className="space-y-0.5 rounded-xl bg-muted/60 px-4 py-2 font-mono text-[12px] text-muted-foreground">
                {output.messages.map((m, i) => (
                  <li key={i}>✓ {m}</li>
                ))}
              </ul>
            )}
            {output.error && (
              <div className="rounded-xl border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm" role="alert">
                <p className="font-mono text-[12.5px] text-destructive">
                  Error {output.error.code ? `${output.error.code}` : ""}
                  {stmtLabel(output)}: {output.error.message}
                </p>
                {ERROR_HINTS[output.error.code] && <p className="mt-1.5 text-muted-foreground">Hint: {ERROR_HINTS[output.error.code]}</p>}
              </div>
            )}
            {output.notes.map((n, i) => (
              <p key={i} className="rounded-xl border border-accent/30 bg-accent/5 px-4 py-2.5 text-xs text-muted-foreground">
                {n}
              </p>
            ))}
            {!output.error && <p className="text-[11px] text-muted-foreground">Ran in {output.ms} ms · practice mode</p>}
          </>
        )}
      </div>
    </div>
  );
}

function stmtLabel(o: RunOutput) {
  return o.error && o.error.statement > 1 ? ` (statement ${o.error.statement})` : "";
}
