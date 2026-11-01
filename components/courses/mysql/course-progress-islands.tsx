"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Circle, Play } from "lucide-react";
import { useMysqlProgress } from "@/hooks/use-mysql-progress";
import { cn } from "@/lib/utils";
import MysqlProgressSync from "./progress-sync";

function useMounted() {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  return m;
}

export function StartButton({ firstSlug, className, compact }: { firstSlug: string; className?: string; compact?: boolean }) {
  const mounted = useMounted();
  const p = useMysqlProgress();
  const started = mounted && (p.lastLesson || p.completedLessons.length > 0);
  const href = `/courses/mysql/${(mounted && p.lastLesson) || firstSlug}`;
  return (
    <Link href={href} className={cn("inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}>
      <Play className="h-4 w-4" />
      {started ? (compact ? "Continue" : "Continue where you left off") : compact ? "Start course" : "Start the course — free"}
      <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

export function ProgressRing({ lessons, problems, questionIds }: { lessons: string[]; problems: number; questionIds: string[] }) {
  const mounted = useMounted();
  const p = useMysqlProgress();
  if (!mounted) return null;
  const done = lessons.filter((l) => p.completedLessons.includes(l)).length;
  const solved = questionIds.filter((id) => p.solved.includes(id)).length;
  if (!done && !solved && !p.lastLesson) return <MysqlProgressSync />;
  const pct = Math.round((done / lessons.length) * 100);
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
      <MysqlProgressSync />
      <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90" role="img" aria-label={`${pct}% of lessons complete`}>
        <circle cx="32" cy="32" r={r} className="fill-none stroke-muted" strokeWidth="7" />
        <circle cx="32" cy="32" r={r} className="fill-none stroke-success transition-all" strokeWidth="7" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - pct / 100)} />
      </svg>
      <div>
        <p className="text-sm font-semibold">Your progress</p>
        <p className="text-sm text-muted-foreground">{done} of {lessons.length} lessons · {solved} of {problems} problems</p>
      </div>
    </div>
  );
}

export function LessonStatus({ slug, questionIds }: { slug: string; questionIds: string[] }) {
  const mounted = useMounted();
  const p = useMysqlProgress();
  const done = mounted && p.completedLessons.includes(slug);
  const solved = mounted ? questionIds.filter((id) => p.solved.includes(id)).length : 0;
  return (
    <>
      {done ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-label="Completed" /> : <Circle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" aria-hidden />}
      <span className="sr-only">{done ? "Completed. " : ""}</span>
      <span className="order-last hidden shrink-0 text-xs tabular-nums text-muted-foreground sm:inline" suppressHydrationWarning>
        {solved} / {questionIds.length} solved
      </span>
    </>
  );
}

export function MobileStartBar({ firstSlug }: { firstSlug: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
      <StartButton firstSlug={firstSlug} className="w-full" compact />
    </div>
  );
}
