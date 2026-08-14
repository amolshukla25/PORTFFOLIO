"use client";

import { RefObject, useEffect, useState } from "react";

/**
 * Returns a 0 → 1 progress value as the element scrolls from entering the
 * bottom of the viewport to exiting the top. Lightweight replacement for
 * framer-motion's useScroll/useTransform.
 */
export function useScrollProgress<T extends HTMLElement>(
  ref: RefObject<T | null>
): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = vh + rect.height;
      const p =
        total > 0 ? Math.min(1, Math.max(0, (vh - rect.top) / total)) : 0;
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);

  return progress;
}
