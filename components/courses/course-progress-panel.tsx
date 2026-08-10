"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Circle, RotateCcw, Trophy } from "lucide-react";

import { useCourseProgress } from "@/hooks/use-course-progress";
import { cn } from "@/lib/utils";

interface CourseProgressPanelProps {
  courseId: string;
  modules: {
    id: string;
    title: string;
    lectures: { id: string; title: string }[];
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

  const allLectures = modules.flatMap((m) => m.lectures);
  const completed =
    mounted && progress.completed[courseId] ? progress.completed[courseId] : [];
  const doneCount = allLectures.filter((l) => completed.includes(l.id)).length;
  const pct = allLectures.length ? Math.round((doneCount / allLectures.length) * 100) : 0;
  const allDone = doneCount > 0 && doneCount === allLectures.length;

  if (!mounted) {
    return (
      <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm h-[88px]" />
    );
  }

  return (
    <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Trophy className={cn("h-4 w-4", allDone ? "text-star" : "text-primary")} />
          <h3 className="text-sm font-semibold text-foreground">
            Your Progress
          </h3>
        </div>
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

      <div className="mt-3 flex items-center gap-3">
        <div className="flex-1">
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-700",
                allDone ? "bg-star" : "bg-success"
              )}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
        <span className="text-xs font-bold text-foreground shrink-0">
          {doneCount}/{allLectures.length}
        </span>
      </div>

      {pct > 0 && (
        <p className="mt-1.5 text-[11px] text-muted-foreground">
          {pct}% complete
          {allDone ? " — you finished this course. Amazing! 🎉" : " — keep going!"}
        </p>
      )}

      {pct === 0 && (
        <p className="mt-1.5 text-[11px] text-muted-foreground">
          Start any lecture below and mark it complete to track your journey.
        </p>
      )}

      {allDone && (
        <div className="mt-3 flex flex-wrap gap-2">
          {modules.map((m) => (
            <Link
              key={m.id}
              href={`#${m.id}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-success/30 bg-success/10 px-2 py-1 text-[11px] font-medium text-success transition-colors hover:bg-success/20"
            >
              <CheckCircle2 className="h-3 w-3" />
              {m.title.split(": ").pop()}
            </Link>
          ))}
        </div>
      )}

      {/* Per-module mini progress */}
      <div className="mt-4 space-y-2 border-t border-border/60 pt-3">
        {modules.map((mod) => {
          const modDone = mod.lectures.filter((l) => completed.includes(l.id)).length;
          const modPct = mod.lectures.length
            ? Math.round((modDone / mod.lectures.length) * 100)
            : 0;
          return (
            <div key={mod.id} className="flex items-center gap-2">
              <span
                className={cn(
                  "h-1.5 w-1.5 shrink-0 rounded-full",
                  modDone === mod.lectures.length
                    ? "bg-success"
                    : modDone > 0
                      ? "bg-primary"
                      : "bg-border"
                )}
              />
              <span className="flex-1 truncate text-[11px] text-muted-foreground">
                {mod.title.split(": ").pop()}
              </span>
              <span className="text-[10px] font-semibold text-muted-foreground shrink-0">
                {modDone}/{mod.lectures.length}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
