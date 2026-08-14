"use client";

import { CSSProperties, ReactNode } from "react";

import { useReveal } from "@/components/common/use-reveal";
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
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : cn("opacity-0", hiddenOffset[direction]),
        className
      )}
      style={{ transitionDelay: `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
};
