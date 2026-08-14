"use client";

import { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export const AnimatedText = ({
  children,
  delay = 0,
  className = "",
  as = "div",
}: AnimatedTextProps) => {
  const Component = as;

  return (
    <Component
      className={cn("animate-text-in", className)}
      style={{ animationDelay: `${delay}s` } as CSSProperties}
    >
      {children}
    </Component>
  );
};
