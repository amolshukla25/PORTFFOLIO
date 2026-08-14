"use client";

import { useEffect, useRef, useState } from "react";

interface UseRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Lightweight scroll-reveal hook: flips `visible` to true the first time the
 * element enters the viewport. Replaces framer-motion's `whileInView` without
 * pulling in the animation library.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: UseRevealOptions
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -80px 0px",
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return { ref, visible };
}
