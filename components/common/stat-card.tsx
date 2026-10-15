import type { LucideIcon } from "lucide-react";
import * as React from "react";

import { MotionCard } from "@/components/common/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: React.ReactNode;
  hint?: string;
  icon?: LucideIcon;
  tone?: "default" | "accent" | "success" | "star";
  className?: string;
}

const toneStyles: Record<NonNullable<StatCardProps["tone"]>, string> = {
  default: "border-border/60 bg-muted/40 text-muted-foreground",
  accent: "border-accent/20 bg-accent/10 text-accent",
  success: "border-success/20 bg-success/10 text-success",
  star: "border-star/20 bg-star/10 text-star",
};

/**
 * Portal metric card. Stays a server component so callers can keep passing
 * icon components; the entrance/hover motion comes from `MotionCard`.
 */
export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "default",
  className,
}: StatCardProps) {
  return (
    <MotionCard className="h-full">
      <Card
        className={cn(
          "h-full border-border/70 transition-shadow hover:shadow-sm",
          className
        )}
      >
        <CardContent className="flex items-start justify-between gap-3 p-5">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {label}
            </p>
            <p className="mt-2 truncate text-2xl font-semibold tracking-tight tabular-nums">
              {value}
            </p>
            {hint ? (
              <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
            ) : null}
          </div>
          {Icon ? (
            <span
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                toneStyles[tone]
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
          ) : null}
        </CardContent>
      </Card>
    </MotionCard>
  );
}
