"use client";

import React from "react";
import Link from "next/link";
import SeasonPicker from "@/components/SeasonPicker";
import LanguagePicker from "@/components/LanguagePicker";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CourseHeaderProps {
  breadcrumbs?: BreadcrumbItem[];
}

export default function CourseHeader({ breadcrumbs }: CourseHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-ink-0/80 border-b border-ink-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left Side: Brand & Breadcrumbs */}
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-2 text-ice-100 hover:text-ice-50 transition-colors flex-none"
            aria-label="Back to Portfolio Home"
          >
            <div className="w-8 h-8 rounded-lg bg-ice-600/50 border border-ice-400/40 flex items-center justify-center font-bold text-xs text-ice-50 shadow-[0_0_10px_rgba(122,166,208,0.3)]">
              AS
            </div>
            <span className="font-bold text-sm tracking-tight hidden sm:inline text-ice-50">
              Amol Shukla
            </span>
          </Link>

          <span className="text-ice-600 hidden sm:inline">/</span>

          <Link
            href="/courses"
            className="text-xs sm:text-sm font-semibold text-ice-300 hover:text-ice-100 transition-colors flex-none"
          >
            Courses Hub
          </Link>

          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumbs" className="hidden md:flex items-center gap-2 min-w-0 text-xs overflow-hidden text-ellipsis whitespace-nowrap">
              {breadcrumbs.map((b, i) => (
                <React.Fragment key={i}>
                  <span className="text-ice-600">/</span>
                  {b.href ? (
                    <Link
                      href={b.href}
                      className="text-ice-400 hover:text-ice-200 transition-colors truncate max-w-[200px]"
                    >
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-ice-100 font-medium truncate max-w-[240px]">
                      {b.label}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>

        {/* Right Side: Actions & Track Links */}
        <div className="flex items-center gap-2 sm:gap-3 flex-none">
          <Link
            href="/courses/ai-tools-and-technology/llm"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-ice-500/20 text-ice-200 border border-ice-500/30 hover:bg-ice-500/30 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ice-400 animate-pulse" />
            LLM Masterclass
          </Link>

          <Link
            href="/courses/python"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-ink-2/80 text-ice-300 border border-ink-3 hover:text-ice-100 transition-colors"
          >
            Python Track
          </Link>

          <SeasonPicker />
          <LanguagePicker />
        </div>
      </div>
    </header>
  );
}
