"use client";

import { CSSProperties, ReactNode, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  id?: string;
}

const hiddenOffset: Record<
  NonNullable<AnimatedSectionProps["direction"]>,
  string
> = {
  up: "translate-y-12",
  down: "-translate-y-12",
  left: "translate-x-12",
  right: "-translate-x-12",
};

export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  id,
}: AnimatedSectionProps) => {
  // Mount-gated reveal: content is fully visible in the server-rendered HTML
  // (good for SEO, LCP and no-JS visitors) and only starts hidden after
  // hydration confirms JS is running. Below-the-fold sections then reveal on
  // scroll via IntersectionObserver.
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = document.getElementById(id ?? "");
    // No id (or no observer support): show immediately, never hide content.
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted, id]);

  // Before hydration the section is visible — crawlers and users without JS
  // always get the full content.
  if (!mounted || inView) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      id={id}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        cn("opacity-0", hiddenOffset[direction]),
        className
      )}
      style={{ transitionDelay: `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
};
