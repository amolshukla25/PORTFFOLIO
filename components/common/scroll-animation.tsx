"use client";

import { CSSProperties, ReactNode, useRef } from "react";

import { useScrollProgress } from "@/components/common/use-scroll-progress";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  effect?: "fade" | "zoom" | "slide" | "rotate";
}

export const ScrollAnimation = ({
  children,
  className = "",
  effect = "fade",
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref);

  // Match the original framer-motion mapping: first half of the scroll
  // range drives the full effect.
  const t = Math.min(1, progress * 2);

  const style: CSSProperties = { opacity: 0.2 + 0.8 * t };
  if (effect === "zoom") style.transform = `scale(${0.8 + 0.2 * t})`;
  if (effect === "slide") style.transform = `translateX(${-50 + 50 * t}px)`;
  if (effect === "rotate") style.transform = `rotate(${-10 + 10 * t}deg)`;

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};
