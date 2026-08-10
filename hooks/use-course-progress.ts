"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CourseProgressState {
  /** Map of courseId -> set of completed lecture ids */
  completed: Record<string, string[]>;
  toggleLecture: (courseId: string, lectureId: string) => void;
  markCompleted: (courseId: string, lectureId: string) => void;
  resetCourse: (courseId: string) => void;
}

export const useCourseProgress = create<CourseProgressState>()(
  persist(
    (set, get) => ({
      completed: {},

      toggleLecture: (courseId, lectureId) => {
        const current = get().completed[courseId] ?? [];
        const exists = current.includes(lectureId);
        set({
          completed: {
            ...get().completed,
            [courseId]: exists
              ? current.filter((id) => id !== lectureId)
              : [...current, lectureId],
          },
        });
      },

      markCompleted: (courseId, lectureId) => {
        const current = get().completed[courseId] ?? [];
        if (current.includes(lectureId)) return;
        set({
          completed: {
            ...get().completed,
            [courseId]: [...current, lectureId],
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

/** Is this lecture marked complete? */
export function isLectureCompleted(courseId: string, lectureId: string): boolean {
  return (useCourseProgress.getState().completed[courseId] ?? []).includes(lectureId);
}

/** Fraction (0–1) of lectures completed within a single course. */
export function getCourseProgress(courseId: string, totalLectures: number): number {
  if (totalLectures <= 0) return 0;
  const done = useCourseProgress.getState().completed[courseId] ?? [];
  return Math.min(done.length / totalLectures, 1);
}
