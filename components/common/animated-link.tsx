"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export const AnimatedLink = ({
  href,
  children,
  className = "",
  onClick,
  target,
  rel,
}: AnimatedLinkProps) => {
  return (
    <div className="transition-transform duration-200 ease-out will-change-transform hover:scale-105 active:scale-95">
      <Link
        href={href}
        className={className}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    </div>
  );
};
