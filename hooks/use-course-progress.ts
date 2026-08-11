"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CourseProgressState {
  /** Map of courseId -> set of completed lesson ids */
  completed: Record<string, string[]>;
  togglelesson: (courseId: string, lessonId: string) => void;
  markCompleted: (courseId: string, lessonId: string) => void;
  resetCourse: (courseId: string) => void;
}

export const useCourseProgress = create<CourseProgressState>()(
  persist(
    (set, get) => ({
      completed: {},

      togglelesson: (courseId, lessonId) => {
        const current = get().completed[courseId] ?? [];
        const exists = current.includes(lessonId);
        set({
          completed: {
            ...get().completed,
            [courseId]: exists
              ? current.filter((id) => id !== lessonId)
              : [...current, lessonId],
          },
        });
      },

      markCompleted: (courseId, lessonId) => {
        const current = get().completed[courseId] ?? [];
        if (current.includes(lessonId)) return;
        set({
          completed: {
            ...get().completed,
            [courseId]: [...current, lessonId],
          },
        });
      },

      resetCourse: (courseId) => {
        const next = { ...get().completed };
        delete next[courseId];
        set({ completed: next });
      },
    }),
    {
      name: "learning-hub-progress",
    }
  )
);

/** Is this lesson marked complete? */
export function isLessonCompleted(courseId: string, lessonId: string): boolean {
  return (useCourseProgress.getState().completed[courseId] ?? []).includes(lessonId);
}

/** Fraction (0–1) of lessons completed within a single course. */
export function getCourseProgress(courseId: string, totalLessons: number): number {
  if (totalLessons <= 0) return 0;
  const done = useCourseProgress.getState().completed[courseId] ?? [];
  return Math.min(done.length / totalLessons, 1);
}
