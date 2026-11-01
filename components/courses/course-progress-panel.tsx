"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, RotateCcw, Trophy } from "lucide-react";

import { useCourseProgress } from "@/hooks/use-course-progress";
import { cn } from "@/lib/utils";

interface CourseProgressPanelProps {
  courseId: string;
  modules: {
    id: string;
    title: string;
    lessons: { id: string; title: string }[];
  }[];
}

export default function CourseProgressPanel({
  courseId,
  modules,
}: CourseProgressPanelProps) {
  const [mounted, setMounted] = useState(false);
  const progress = useCourseProgress();

  useEffect(() => {
    setMounted(true);
  }, []);

  const allLessons = modules.flatMap((m) => m.lessons);
  const completed =
    mounted && progress.completed[courseId] ? progress.completed[courseId] : [];
  const doneCount = allLessons.filter((l) => completed.includes(l.id)).length;
  const pct = allLessons.length ? Math.round((doneCount / allLessons.length) * 100) : 0;
  const allDone = doneCount > 0 && doneCount === allLessons.length;

  if (!mounted) {
    return (
      <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6" aria-hidden>
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-muted animate-pulse" />
          <div className="space-y-1.5">
            <div className="h-3 w-28 rounded bg-muted animate-pulse" />
            <div className="h-2 w-20 rounded bg-muted/60 animate-pulse" />
          </div>
        </div>
        <div className="mt-4 h-1.5 rounded-full bg-muted animate-pulse" />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span
            className={cn(
              "grid h-8 w-8 place-items-center rounded-lg transition-colors",
              allDone ? "bg-star/15 text-star" : "bg-accent/10 text-accent"
            )}
          >
            <Trophy className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Your progress</h3>
            <p className="text-[11px] text-muted-foreground">
              {doneCount} of {allLessons.length} lessons · saved in this browser
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold tabular-nums text-foreground">
            {pct}%
          </span>
          {doneCount > 0 && (
            <button
              onClick={() => progress.resetCourse(courseId)}
              className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              title="Reset progress for this course"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-700 ease-out",
            allDone ? "bg-star" : "bg-accent"
          )}
          style={{ width: `${pct}%` }}
        />
      </div>

      <p className="mt-2 text-[11px] text-muted-foreground">
        {pct === 0
          ? "Open any lesson and mark it complete to start tracking."
          : allDone
            ? "Course complete — every lesson marked. 🎉"
            : `${allLessons.length - doneCount} lessons to go.`}
      </p>

      {allDone && (
        <div className="mt-3 flex flex-wrap gap-2">
          {modules.map((m) => (
            <Link
              key={m.id}
              href={`#${m.id}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-success/25 bg-success/10 px-2 py-1 text-[11px] font-medium text-success transition-colors hover:bg-success/15"
            >
              <CheckCircle2 className="h-3 w-3" />
              {m.title.split(": ").pop()}
            </Link>
          ))}
        </div>
      )}

      {/* Per-module breakdown — a quiet two-column list, not a second card */}
      <dl className="mt-4 grid gap-x-8 gap-y-2 border-t border-border/60 pt-3 sm:grid-cols-2">
        {modules.map((mod) => {
          const modDone = mod.lessons.filter((l) => completed.includes(l.id)).length;
          const modComplete = modDone === mod.lessons.length;
          return (
            <div key={mod.id} className="flex items-center gap-2.5">
              <span
                className={cn(
                  "h-1.5 w-1.5 shrink-0 rounded-full",
                  modComplete ? "bg-success" : modDone > 0 ? "bg-accent" : "bg-border"
                )}
              />
              <dt className="min-w-0 flex-1 truncate text-[11px] text-muted-foreground">
                {mod.title.split(": ").pop()}
              </dt>
              <dd className="shrink-0 text-[10px] font-semibold tabular-nums text-muted-foreground">
                {modDone}/{mod.lessons.length}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
