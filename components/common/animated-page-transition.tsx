"use client";

import { ReactNode } from "react";

interface AnimatedPageTransitionProps {
  children: ReactNode;
}

export const AnimatedPageTransition = ({
  children,
}: AnimatedPageTransitionProps) => {
  return <div className="w-full animate-page-in">{children}</div>;
};
