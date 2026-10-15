"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Motion primitives for the portal.
 *
 * The public marketing site stays animation-library free (its CSS utilities in
 * globals.css); these helpers exist only for the admin/student portals, where
 * Framer Motion gives the dashboards a calmer, more deliberate feel. Every
 * helper falls back to static markup when the visitor asks for reduced motion.
 */

const EASE = [0.19, 1, 0.22, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait before the entrance starts. */
  delay?: number;
}

/** Fades a section up into place once, when the portal mounts. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

/**
 * Wraps a single card: fades it in and lifts it slightly on hover.
 *
 * Server components (like StatCard) use this as their root element so the
 * animation lives here while their own props stay server-serialisable.
 */
export function MotionCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      whileHover={{ y: -2 }}
    >
      {children}
    </motion.div>
  );
}

/** Reveals its children one after another — pair with `StaggerItem`. */
export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={groupVariants}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

/** One entry of a `StaggerGroup`. */
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  );
}
