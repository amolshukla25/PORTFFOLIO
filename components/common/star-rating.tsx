"use client";

import { Star } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

interface StarDisplayProps {
  value: number | null | undefined;
  /** Total stars to render. */
  max?: number;
  className?: string;
  starClassName?: string;
}

/** Read-only star row, e.g. 4 -> ★★★★☆ */
export function StarDisplay({
  value,
  max = 5,
  className,
  starClassName,
}: StarDisplayProps) {
  const rating = typeof value === "number" ? Math.round(value) : 0;
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      aria-label={rating ? `${rating} out of ${max} stars` : "No rating"}
      title={rating ? `${rating} / ${max}` : "No rating"}
    >
      {Array.from({ length: max }, (_, index) => (
        <Star
          key={index}
          className={cn(
            "h-4 w-4",
            index < rating
              ? "fill-star text-star"
              : "fill-transparent text-muted-foreground/40",
            starClassName
          )}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

interface StarRatingInputProps {
  value: number | null;
  onChange: (value: number) => void;
  disabled?: boolean;
  size?: "sm" | "lg";
  className?: string;
}

/** Interactive 1–5 star picker. */
export function StarRatingInput({
  value,
  onChange,
  disabled = false,
  size = "lg",
  className,
}: StarRatingInputProps) {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const active = hovered ?? value ?? 0;
  const starSize = size === "lg" ? "h-9 w-9" : "h-6 w-6";

  return (
    <div
      role="radiogroup"
      aria-label="Rating out of 5"
      className={cn("flex items-center gap-1.5", className)}
      onMouseLeave={() => setHovered(null)}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          role="radio"
          aria-checked={value === star}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
          disabled={disabled}
          onMouseEnter={() => setHovered(star)}
          onFocus={() => setHovered(star)}
          onBlur={() => setHovered(null)}
          onClick={() => onChange(star)}
          className={cn(
            "rounded-full p-1 transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            !disabled && "hover:scale-110 active:scale-95"
          )}
        >
          <Star
            className={cn(
              starSize,
              star <= active
                ? "fill-star text-star drop-shadow-[0_0_6px_hsl(var(--star)/0.35)]"
                : "fill-transparent text-muted-foreground/40"
            )}
          />
        </button>
      ))}
    </div>
  );
}
