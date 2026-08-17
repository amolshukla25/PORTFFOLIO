import React from "react";
import { INSTRUCTOR_AMOL } from "@/lib/courses-data";

interface AuthorBadgeProps {
  compact?: boolean;
  className?: string;
}

export default function AuthorBadge({ compact = false, className = "" }: AuthorBadgeProps) {
  if (compact) {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink-2/80 border border-ice-700/60 backdrop-blur-md ${className}`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs text-ice-300">
          Course by <strong className="text-ice-100 font-semibold">{INSTRUCTOR_AMOL.name}</strong>
        </span>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl bg-ink-1/80 border border-ink-3 p-5 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.4)] ${className}`}
    >
      <div className="flex items-center gap-3.5">
        <div className="relative flex-none">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-ice-700 to-ice-500 flex items-center justify-center text-ice-50 font-bold text-lg shadow-[0_0_15px_rgba(122,166,208,0.3)]">
            AS
          </div>
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-ink-1 flex items-center justify-center text-[9px] text-white">
            ✓
          </span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-base font-bold text-ice-50 tracking-tight">
              {INSTRUCTOR_AMOL.name}
            </h4>
            <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-ice-500/20 text-ice-300 border border-ice-500/30">
              Instructor & AI Engineer
            </span>
          </div>
          <p className="text-xs text-ice-400 mt-0.5 line-clamp-1 sm:line-clamp-none">
            {INSTRUCTOR_AMOL.bio}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 self-end sm:self-center">
        <span className="text-xs text-ice-400 hidden md:inline">Verified Curriculum</span>
        <span className="px-3 py-1 rounded-lg bg-ink-2/90 border border-ice-700/50 text-xs font-medium text-ice-200">
          Amol Shukla Tech Academy
        </span>
      </div>
    </div>
  );
}
