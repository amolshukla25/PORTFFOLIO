"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { useCourseProgress } from "./use-course-progress";

export interface MysqlProgressData {
  completedLessons: string[];
  /** Question ids answered correctly (or confirmed by hand for manual ones). */
  solved: string[];
  /** Question ids the learner ran at least once. */
  tried: string[];
  hints: string[];
  answers: string[];
  lastLesson: string | null;
  updatedAt: number;
}

interface MysqlProgressState extends MysqlProgressData {
  markSolved: (id: string) => void;
  markTried: (id: string) => void;
  openHint: (id: string) => void;
  openAnswer: (id: string) => void;
  setLastLesson: (slug: string) => void;
  toggleLesson: (slug: string) => boolean;
  completeLesson: (slug: string) => void;
  merge: (other: Partial<MysqlProgressData>) => void;
  resetAll: () => void;
}

const add = (list: string[], id: string) => (list.includes(id) ? list : [...list, id]);
const union = (a: string[] = [], b: string[] = []) => Array.from(new Set([...a, ...b]));

const EMPTY: MysqlProgressData = { completedLessons: [], solved: [], tried: [], hints: [], answers: [], lastLesson: null, updatedAt: 0 };

// localStorage can throw (private windows, blocked storage): fall back to memory.
const safeStorage = createJSONStorage(() => {
  try {
    const t = "__mysql_progress_test__";
    window.localStorage.setItem(t, "1");
    window.localStorage.removeItem(t);
    return window.localStorage;
  } catch {
    const mem = new Map<string, string>();
    return { getItem: (k) => mem.get(k) ?? null, setItem: (k, v) => void mem.set(k, v), removeItem: (k) => void mem.delete(k) };
  }
});

export const useMysqlProgress = create<MysqlProgressState>()(
  persist(
    (set, get) => ({
      ...EMPTY,
      markSolved: (id) => set((s) => ({ solved: add(s.solved, id), tried: add(s.tried, id), updatedAt: Date.now() })),
      markTried: (id) => set((s) => ({ tried: add(s.tried, id), updatedAt: Date.now() })),
      openHint: (id) => set((s) => ({ hints: add(s.hints, id), updatedAt: Date.now() })),
      openAnswer: (id) => set((s) => ({ answers: add(s.answers, id), updatedAt: Date.now() })),
      setLastLesson: (slug) => set({ lastLesson: slug, updatedAt: Date.now() }),
      toggleLesson: (slug) => {
        const done = get().completedLessons.includes(slug);
        set((s) => ({ completedLessons: done ? s.completedLessons.filter((x) => x !== slug) : [...s.completedLessons, slug], updatedAt: Date.now() }));
        // keep the shared Learning Hub tracker (course cards, hub progress) in step
        const hub = useCourseProgress.getState();
        const hubDone = (hub.completed.mysql ?? []).includes(slug);
        if (hubDone === done) hub.togglelesson("mysql", slug);
        return !done;
      },
      completeLesson: (slug) => {
        set((s) => ({ completedLessons: add(s.completedLessons, slug), updatedAt: Date.now() }));
        useCourseProgress.getState().markCompleted("mysql", slug);
      },
      merge: (o) =>
        set((s) => ({
          completedLessons: union(s.completedLessons, o.completedLessons),
          solved: union(s.solved, o.solved),
          tried: union(s.tried, o.tried),
          hints: union(s.hints, o.hints),
          answers: union(s.answers, o.answers),
          lastLesson: (o.updatedAt ?? 0) > s.updatedAt ? o.lastLesson ?? s.lastLesson : s.lastLesson,
          updatedAt: Math.max(s.updatedAt, o.updatedAt ?? 0),
        })),
      resetAll: () => set({ ...EMPTY, updatedAt: Date.now() }),
    }),
    {
      name: "mysql-progress-v1",
      storage: safeStorage,
      partialize: ({ completedLessons, solved, tried, hints, answers, lastLesson, updatedAt }) => ({ completedLessons, solved, tried, hints, answers, lastLesson, updatedAt }),
      onRehydrateStorage: () => (state) => {
        // Import lessons ticked before this store existed.
        const hub = useCourseProgress.getState().completed.mysql ?? [];
        if (state && hub.length) state.merge({ completedLessons: hub });
      },
    }
  )
);

export function progressSnapshot(): MysqlProgressData {
  const { completedLessons, solved, tried, hints, answers, lastLesson, updatedAt } = useMysqlProgress.getState();
  return { completedLessons, solved, tried, hints, answers, lastLesson, updatedAt };
}
