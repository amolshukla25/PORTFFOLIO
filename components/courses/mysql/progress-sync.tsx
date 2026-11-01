"use client";

import { useEffect } from "react";
import { progressSnapshot, useMysqlProgress, type MysqlProgressData } from "@/hooks/use-mysql-progress";

/**
 * Signed-in students: pull saved progress, merge it with this browser's,
 * and push changes back (debounced). Guests: does nothing — progress stays
 * in localStorage. Renders nothing.
 */
export default function MysqlProgressSync() {
  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let unsubscribe: (() => void) | null = null;

    const push = () => {
      fetch("/api/student/progress", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course: "mysql", progress: progressSnapshot() }),
      }).catch(() => {});
    };

    (async () => {
      try {
        const me = await fetch("/api/auth/me", { cache: "no-store" }).then((r) => r.json());
        if (cancelled || me?.user?.role !== "student") return;
        const res = await fetch("/api/student/progress?course=mysql", { cache: "no-store" });
        if (!res.ok || cancelled) return;
        const { progress } = (await res.json()) as { progress: MysqlProgressData | null };
        if (progress) useMysqlProgress.getState().merge(progress);
        push();
        unsubscribe = useMysqlProgress.subscribe(() => {
          if (timer) clearTimeout(timer);
          timer = setTimeout(push, 1500);
        });
      } catch {
        /* offline or signed out: local progress still works */
      }
    })();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      unsubscribe?.();
    };
  }, []);
  return null;
}
