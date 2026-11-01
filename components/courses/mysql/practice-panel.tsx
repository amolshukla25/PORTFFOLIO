"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, ChevronRight, Circle, CircleDot, Eye, Lightbulb, ListFilter } from "lucide-react";
import { useMysqlProgress } from "@/hooks/use-mysql-progress";
import { DATASET_INFO } from "@/lib/sql-practice/dataset-info";
import type { RenderedQuestion } from "@/lib/mysql-course/render";
import { cn } from "@/lib/utils";
import CopyButton from "./copy-button";
import ResultTable from "./result-table";
import { SqlPre } from "./sql-code";
import SqlRunner from "./sql-runner";

const LEVELS = ["Easy", "Medium", "Hard", "Professional"] as const;
type Filter = "All" | (typeof LEVELS)[number] | "Unsolved";

export const LEVEL_STYLE: Record<string, string> = {
  Easy: "border-success/40 bg-success/10 text-success",
  Medium: "border-primary/40 bg-primary/10 text-primary",
  Hard: "border-star/50 bg-star/10 text-[hsl(var(--star))]",
  Professional: "border-accent/40 bg-accent/10 text-accent",
};

function starterFor(q: RenderedQuestion) {
  if (q.dataset === "none") return "-- write your query here\n";
  return "-- write your query here\nSELECT ";
}

export default function PracticePanel({ questions, lessonSlug }: { questions: RenderedQuestion[]; lessonSlug: string }) {
  const progress = useMysqlProgress();
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<Filter>("All");
  const [current, setCurrent] = useState(questions[0]?.id);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [confirmAnswer, setConfirmAnswer] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  useEffect(() => setMounted(true), []);

  const solved = mounted ? progress.solved : [];
  const tried = mounted ? progress.tried : [];
  const status = (id: string) => (solved.includes(id) ? "solved" : tried.includes(id) ? "tried" : "new");

  const visible = useMemo(
    () => questions.filter((q) => (filter === "All" ? true : filter === "Unsolved" ? !solved.includes(q.id) : q.level === filter)),
    [questions, filter, solved]
  );
  const index = questions.findIndex((q) => q.id === current);
  const q = questions[index];
  const solvedHere = questions.filter((x) => solved.includes(x.id)).length;

  function go(id: string, focus = false) {
    setCurrent(id);
    setConfirmAnswer(null);
    if (focus && window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }
  function step(dir: 1 | -1) {
    const list = visible.length ? visible : questions;
    const i = list.findIndex((x) => x.id === current);
    const next = list[(i + dir + list.length) % list.length];
    if (next) go(next.id);
  }

  // J / K move between problems (not while typing in the editor)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("textarea, input, select, [contenteditable]")) return;
      if (e.key === "j" || e.key === "J") step(1);
      if (e.key === "k" || e.key === "K") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight">Practice problems</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {questions.length} problems from Easy to Professional · <span className="font-medium text-foreground">{solvedHere} solved</span> · J / K to move
          </p>
        </div>
        <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-xl border border-border p-1" role="group" aria-label="Filter problems">
          <ListFilter className="ml-1 h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
          {(["All", ...LEVELS, "Unsolved"] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn("min-h-9 shrink-0 rounded-lg px-2.5 text-xs font-medium transition-colors", filter === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground")}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
        <ol className="max-h-[70vh] space-y-1 overflow-y-auto rounded-2xl border border-border bg-card p-1.5 lg:sticky lg:top-24" aria-label="Problems">
          {visible.map((x) => {
            const n = questions.indexOf(x) + 1;
            const st = status(x.id);
            return (
              <li key={x.id}>
                <button
                  type="button"
                  onClick={() => go(x.id, true)}
                  aria-current={x.id === current ? "true" : undefined}
                  className={cn("flex w-full items-start gap-2.5 rounded-xl px-2.5 py-2 text-left transition-colors", x.id === current ? "bg-primary/10 ring-1 ring-primary/30" : "hover:bg-muted")}
                >
                  {st === "solved" ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-label="Solved" />
                  ) : st === "tried" ? (
                    <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-star" aria-label="Tried" />
                  ) : (
                    <Circle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" aria-label="Not tried" />
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] text-muted-foreground">{String(n).padStart(2, "0")}</span>
                      <span className={cn("rounded-md border px-1.5 text-[10px] font-semibold", LEVEL_STYLE[x.level])}>{x.level}</span>
                    </span>
                    <span className="mt-0.5 line-clamp-2 block text-[13px] leading-snug text-foreground">{x.prompt}</span>
                  </span>
                </button>
              </li>
            );
          })}
          {visible.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted-foreground">Nothing left here — every problem in this filter is solved.</li>}
        </ol>

        <div ref={detailRef} className="min-w-0 scroll-mt-28">
          {/* Every problem is in the HTML (crawlers, PDF, no-JS); only the selected one is shown. */}
          {questions.map((x, i) => {
            const active = x.id === current;
            const isSolved = solved.includes(x.id);
            const manual = !!x.check?.manual;
            const revealed = confirmAnswer === x.id || (mounted && progress.answers.includes(x.id));
            return (
              <section key={x.id} id={`problem-${x.id}`} hidden={!active} aria-labelledby={`problem-title-${x.id}`} className="space-y-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={cn("rounded-lg border px-2 py-0.5 text-xs font-semibold", LEVEL_STYLE[x.level])}>{x.level}</span>
                  <span className="font-mono text-xs text-muted-foreground">Problem {i + 1} of {questions.length}</span>
                  {x.dataset === "none" ? (
                    <span className="rounded-lg bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">No database needed</span>
                  ) : (
                    <span className="rounded-lg border border-accent/30 bg-accent/5 px-2 py-0.5 text-[11px] text-accent">
                      Database already selected: {DATASET_INFO[x.dataset].label}
                    </span>
                  )}
                  {isSolved && <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-success"><CheckCircle2 className="h-3.5 w-3.5" />Solved</span>}
                </div>
                <h3 id={`problem-title-${x.id}`} className="text-base font-semibold leading-relaxed sm:text-lg">{x.prompt}</h3>
                <p className="rounded-xl bg-muted/60 px-3 py-2 text-sm leading-relaxed">
                  <span className="font-semibold">Target: </span>
                  <span className="text-muted-foreground">{x.target}</span>
                </p>

                {active && (
                  <>
                    {manual && (
                      <p className="rounded-xl border border-accent/30 bg-accent/5 px-3 py-2 text-xs text-muted-foreground">
                        {x.dataset === "none" && /^L2-/.test(x.id)
                          ? "The answer depends on your own MySQL server. Run it in Workbench (or here, where practice mode shows its own values) and compare with the target by eye."
                          : "This one is checked by eye: the result depends on the server or is a written note. Compare with the target, then mark it solved."}
                      </p>
                    )}
                    <SqlRunner
                      key={x.id}
                      autoFocusKey={x.id}
                      label={`Your query for problem ${i + 1}`}
                      initialSql={starterFor(x)}
                      value={drafts[x.id] ?? starterFor(x)}
                      onChange={(v) => setDrafts((d) => ({ ...d, [x.id]: v }))}
                      dataset={x.dataset}
                      check={manual ? undefined : { answerSql: x.answerSql, expectError: x.check?.expectError, orderMatters: x.check?.orderMatters, numericTolerance: x.check?.numericTolerance }}
                      onRan={() => progress.markTried(x.id)}
                      onChecked={(v) => v.ok && progress.markSolved(x.id)}
                    />
                    {manual && !isSolved && (
                      <button type="button" onClick={() => progress.markSolved(x.id)} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-success/40 px-4 text-sm font-medium text-success hover:bg-success/10">
                        <CheckCircle2 className="h-4 w-4" /> I compared it — mark as solved
                      </button>
                    )}
                  </>
                )}

                <details className="group rounded-xl border border-border" onToggle={(e) => (e.currentTarget as HTMLDetailsElement).open && progress.openHint(x.id)}>
                  <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 px-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
                    <Lightbulb className="h-4 w-4 text-star" /> I’m stuck — show a hint
                  </summary>
                  <p className="border-t border-border px-3 py-2.5 text-sm text-muted-foreground">{x.hint}</p>
                </details>

                <div className="rounded-xl border border-border">
                  {!revealed && <AnswerGate onShow={() => { setConfirmAnswer(x.id); progress.openAnswer(x.id); }} tried={tried.includes(x.id)} />}
                  <div hidden={!revealed} className="space-y-3 p-3" data-answer>
                    <p className="text-sm font-medium">Reference answer</p>
                    <div className="relative">
                      <SqlPre sql={x.answerSql} className="pr-20" />
                      <div className="absolute right-1.5 top-1.5"><CopyButton text={x.answerSql} /></div>
                    </div>
                    {x.expected && !x.expected.error && x.expected.sets.length > 0 && (
                      <ResultTable tone="expected" caption="Expected result (MySQL 8)" columns={x.expected.sets[x.expected.sets.length - 1].columns} rows={x.expected.sets[x.expected.sets.length - 1].rows} />
                    )}
                    {x.expected?.error && <p className="rounded-xl bg-muted px-3 py-2 font-mono text-xs">MySQL: ERROR {x.expected.error.code} — {x.expected.error.message}</p>}
                    <p className="text-xs text-muted-foreground">More than one query can be correct. If your result matches the target, your query is right.</p>
                  </div>
                </div>

                {active && (
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3">
                    <button type="button" onClick={() => step(-1)} className="min-h-11 rounded-xl px-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                      ← Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => step(1)}
                      className={cn("inline-flex min-h-11 items-center gap-1.5 rounded-xl px-4 text-sm font-semibold", isSolved ? "bg-primary text-primary-foreground" : "border border-border hover:bg-muted")}
                    >
                      Next problem <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
      <p className="text-[11px] leading-relaxed text-muted-foreground">
        Practice mode runs in your browser on a SQLite engine with a MySQL compatibility layer, so you can practise without installing anything. Your result is compared with the reference answer on a fresh copy of the same rows, so any correct query is accepted. A few MySQL-only features (EXPLAIN columns, WITH ROLLUP, user variables) behave differently here — run those in MySQL Workbench.
      </p>
    </div>
  );
}

function AnswerGate({ onShow, tried }: { onShow: () => void; tried: boolean }) {
  const [asked, setAsked] = useState(false);
  if (!asked) {
    return (
      <button type="button" onClick={() => (tried ? onShow() : setAsked(true))} className="flex min-h-11 w-full items-center gap-2 px-3 text-left text-sm font-medium">
        <Eye className="h-4 w-4 text-muted-foreground" /> Compare with the reference answer
      </button>
    );
  }
  return (
    <div className="flex flex-wrap items-center gap-2 p-3 text-sm">
      <span className="text-muted-foreground">Show the answer? Trying once more first helps it stick.</span>
      <button type="button" onClick={onShow} className="min-h-9 rounded-lg border border-border px-3 text-xs font-medium hover:bg-muted">Show answer</button>
      <button type="button" onClick={() => setAsked(false)} className="min-h-9 rounded-lg px-3 text-xs font-medium text-accent hover:bg-accent/10">I’ll try again</button>
    </div>
  );
}
