import React from "react";
import Link from "next/link";
import { Course } from "@/lib/courses-data";

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

export default function CourseCard({ course, featured = false }: CourseCardProps) {
  const courseHref = `/courses/${course.trackSlug}/${course.slug}`;

  return (
    <article
      className={`group relative rounded-2xl bg-ink-1/80 border border-ink-3 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-ice-500/60 hover:shadow-[0_12px_40px_rgba(31,72,116,0.3)] flex flex-col justify-between ${
        featured ? "md:col-span-2 border-ice-500/40 bg-gradient-to-br from-ink-1/90 via-ink-1/80 to-ice-950/20" : ""
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-ice-500/20 text-ice-200 border border-ice-500/30">
              {course.trackName}
            </span>
            {featured && (
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                ★ Featured Course
              </span>
            )}
          </div>
          <span className="text-xs text-ice-400 font-mono">
            {course.duration} · {course.modulesCount} Modules
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold text-ice-50 tracking-tight group-hover:text-ice-200 transition-colors">
          <Link href={courseHref} className="focus:outline-none">
            {course.title}
          </Link>
        </h3>
        <p className="text-sm text-ice-300 mt-2 line-clamp-2 leading-relaxed">
          {course.subtitle}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {course.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded-md bg-ink-2/60 text-ice-300 border border-ink-3"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="mt-6 pt-5 border-t border-ink-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-ice-600 flex items-center justify-center text-[10px] font-bold text-white">
            AS
          </div>
          <span className="text-xs text-ice-400">
            Instructor: <strong className="text-ice-200">{course.instructor.name}</strong>
          </span>
        </div>

        <Link
          href={courseHref}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ice-100 hover:text-ice-300 group-hover:translate-x-0.5 transition-all"
        >
          <span>Explore Curriculum</span>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
