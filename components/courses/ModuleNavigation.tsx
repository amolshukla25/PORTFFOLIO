import React from "react";
import Link from "next/link";

interface ModuleNavigationProps {
  prevModule?: {
    title: string;
    href: string;
  };
  nextModule?: {
    title: string;
    href: string;
  };
  courseOverviewHref: string;
}

export default function ModuleNavigation({
  prevModule,
  nextModule,
  courseOverviewHref,
}: ModuleNavigationProps) {
  return (
    <nav aria-label="Module pagination" className="my-12 pt-8 border-t border-ink-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevModule ? (
          <Link
            href={prevModule.href}
            className="group flex flex-col items-start p-4 rounded-xl bg-ink-1/70 border border-ink-3 hover:border-ice-500/40 transition-all text-left"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-ice-400 flex items-center gap-1 group-hover:-translate-x-0.5 transition-transform">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Previous Module
            </span>
            <span className="text-sm font-semibold text-ice-100 mt-1 group-hover:text-ice-50 transition-colors line-clamp-1">
              {prevModule.title}
            </span>
          </Link>
        ) : (
          <Link
            href={courseOverviewHref}
            className="flex flex-col items-start p-4 rounded-xl bg-ink-1/40 border border-ink-3 hover:border-ice-500/40 transition-all text-left"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-ice-400">
              Course Home
            </span>
            <span className="text-sm font-semibold text-ice-200 mt-1">
              View All Modules Syllabus
            </span>
          </Link>
        )}

        {nextModule ? (
          <Link
            href={nextModule.href}
            className="group flex flex-col items-end p-4 rounded-xl bg-ink-1/70 border border-ink-3 hover:border-ice-500/40 transition-all text-right sm:col-start-2"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-ice-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Next Module
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-ice-100 mt-1 group-hover:text-ice-50 transition-colors line-clamp-1">
              {nextModule.title}
            </span>
          </Link>
        ) : (
          <Link
            href={courseOverviewHref}
            className="flex flex-col items-end p-4 rounded-xl bg-ink-1/40 border border-ink-3 hover:border-ice-500/40 transition-all text-right sm:col-start-2"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
              Completed Track
            </span>
            <span className="text-sm font-semibold text-ice-200 mt-1">
              Back to Course Overview
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}
