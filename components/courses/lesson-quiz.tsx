"use client";

import React, { useMemo, useState } from "react";
import {
  Award,
  Check,
  ChevronRight,
  HelpCircle,
  RotateCcw,
  X,
} from "lucide-react";

import type { LessonQuiz } from "@/config/quizzes";
import { useCourseProgress } from "@/hooks/use-course-progress";
import { cn } from "@/lib/utils";

interface LessonQuizProps {
  quiz: LessonQuiz;
  /** Course the quiz belongs to — used to auto-mark the lesson complete. */
  courseId: string;
  /** Lesson this quiz belongs to — auto-marked complete on a passing score. */
  lessonId: string;
}

const LETTERS = ["A", "B", "C", "D", "E"];

export default function LessonQuiz({ quiz, courseId, lessonId }: LessonQuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const progress = useCourseProgress();

  const question = quiz.questions[current];
  const answered = selected !== null;

  const progressPct = useMemo(() => {
    if (finished) return 100;
    return Math.round((current / quiz.questions.length) * 100);
  }, [current, finished, quiz.questions.length]);

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    if (index === question.correctIndex) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current + 1 >= quiz.questions.length) {
      // The score already includes the last answered question. A passing
      // score (70%+) auto-marks the lesson as complete so progress updates
      // without requiring the manual "Mark Complete" button.
      const total = quiz.questions.length;
      const pct = total > 0 ? Math.round((score / total) * 100) : 0;
      if (pct >= 70) {
        progress.markCompleted(courseId, lessonId);
      }
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  // Final score screen
  if (finished) {
    const total = quiz.questions.length;
    const pct = Math.round((score / total) * 100);
    const perfect = score === total;
    const great = pct >= 70;
    return (
      <div className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs">
        <div className="px-5 sm:px-6 py-5 border-b border-border/60 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              {perfect
                ? "Perfect score — outstanding! 🎉"
                : great
                  ? "Great job — you know your stuff! 💪"
                  : "Good effort — review the lesson and try again!"}
            </h3>
            <p className="text-xs text-muted-foreground">
              You scored {score} out of {total} ({pct}%)
            </p>
            {great && (
              <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-semibold text-success">
                <Check className="h-3 w-3" />
                Lesson marked as complete — progress updated!
              </p>
            )}
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-5">
          {/* Score bar */}
          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-muted-foreground">
              <span>Score</span>
              <span className="font-semibold text-foreground">{pct}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-muted overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-700",
                  perfect
                    ? "bg-success"
                    : great
                      ? "bg-primary"
                      : "bg-star"
                )}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {quiz.questions.map((q, i) => (
              <div
                key={q.id}
                className="rounded-xl border border-border/60 bg-muted/20 p-3"
              >
                <p className="line-clamp-2 text-xs font-medium text-foreground">
                  {i + 1}. {q.question}
                </p>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  {q.options[q.correctIndex]}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:text-accent"
            >
              <RotateCcw className="h-4 w-4" />
              Retry quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs">
      <div className="px-5 sm:px-6 py-5 border-b border-border/60 bg-muted/20 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <HelpCircle className="h-5 w-5 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">
            Quick Check: {quiz.title}
          </h3>
        </div>
        <span className="text-xs font-medium text-muted-foreground shrink-0">
          {current + 1} / {quiz.questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-muted">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="p-5 sm:p-6">
        <div className="text-base font-semibold text-foreground leading-relaxed whitespace-pre-line">
          {question.question}
        </div>

        <div className="mt-5 space-y-2.5">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correctIndex;
            const isSelected = index === selected;

            let stateClass =
              "border-border/70 bg-background hover:border-accent/50 hover:bg-muted/40 cursor-pointer";
            if (answered) {
              if (isCorrect) {
                stateClass = "border-success/60 bg-success/10";
              } else if (isSelected) {
                stateClass = "border-destructive/60 bg-destructive/10";
              } else {
                stateClass = "border-border/50 bg-background opacity-50";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={answered}
                className={cn(
                  "flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-sm transition-all",
                  stateClass
                )}
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-[11px] font-bold",
                    answered && isCorrect
                      ? "border-success text-success"
                      : answered && isSelected
                        ? "border-destructive text-destructive"
                        : "border-border text-muted-foreground"
                  )}
                >
                  {answered && isCorrect ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : answered && isSelected ? (
                    <X className="h-3.5 w-3.5" />
                  ) : (
                    LETTERS[index]
                  )}
                </span>
                <span
                  className={cn(
                    "leading-relaxed",
                    answered && isCorrect
                      ? "text-success"
                      : answered && isSelected
                        ? "text-destructive"
                        : "text-foreground"
                  )}
                >
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Instant feedback + explanation */}
        {answered && (
          <div
            role="status"
            aria-live="polite"
            className={cn(
              "mt-4 rounded-xl border p-4 text-sm animate-in fade-in slide-in-from-bottom-2",
              selected === question.correctIndex
                ? "border-success/40 bg-success/5"
                : "border-star/40 bg-star/5"
            )}
          >
            <p
              className={cn(
                "font-semibold",
                selected === question.correctIndex
                  ? "text-success"
                  : "text-star"
              )}
            >
              {selected === question.correctIndex
                ? "Correct! +1 point"
                : `Not quite — the answer is ${LETTERS[question.correctIndex]}.`}
            </p>
            <p className="mt-1 leading-relaxed text-muted-foreground whitespace-pre-line">
              {question.explanation}
            </p>
          </div>
        )}

        {answered && (
          <div className="mt-5 flex justify-end">
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-[0.98]"
            >
              {current + 1 >= quiz.questions.length ? "See results" : "Next question"}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
