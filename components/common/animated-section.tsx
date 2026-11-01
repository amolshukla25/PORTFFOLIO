import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  id?: string;
}

/** Content must stay visible regardless of section height or hydration. */
export const AnimatedSection = ({
  children,
  className = "",
  id,
}: AnimatedSectionProps) => (
  <div id={id} className={className}>
    {children}
  </div>
);
