import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CourseHeader from "@/components/courses/CourseHeader";
import AuthorBadge from "@/components/courses/AuthorBadge";
import SeoJsonLd from "@/components/courses/SeoJsonLd";
import { PYTHON_COURSE } from "@/lib/courses-data";

export const metadata: Metadata = {
  title: PYTHON_COURSE.seo.title,
  description: PYTHON_COURSE.seo.description,
  keywords: PYTHON_COURSE.seo.keywords,
  openGraph: {
    title: PYTHON_COURSE.seo.title,
    description: PYTHON_COURSE.seo.description,
    type: "website",
    url: "https://amolshukla.dev/courses/python",
  },
};

export default function PythonCoursePage() {
  return (
    <>
      <SeoJsonLd
        type="Course"
        title={PYTHON_COURSE.seo.title}
        description={PYTHON_COURSE.seo.description}
        url="https://amolshukla.dev/courses/python"
        breadcrumbs={[
          { name: "Courses", item: "https://amolshukla.dev/courses" },
          { name: "Python Mastery", item: "https://amolshukla.dev/courses/python" },
        ]}
        courseData={{
          courseName: PYTHON_COURSE.title,
          description: PYTHON_COURSE.description,
          timeRequired: "PT14H",
        }}
      />

      <CourseHeader
        breadcrumbs={[
          { label: "Python Mastery" },
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Course Hero Banner */}
        <section className="mb-14">
          <div className="rounded-3xl bg-gradient-to-r from-ink-1/90 via-ink-2/70 to-ice-950/40 border border-ice-500/40 p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden">
            <div className="max-w-4xl relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-ice-500/20 text-ice-200 border border-ice-500/30">
                  {PYTHON_COURSE.trackName}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {PYTHON_COURSE.level}
                </span>
                <span className="text-xs text-ice-400 font-mono">
                  {PYTHON_COURSE.duration} · {PYTHON_COURSE.modulesCount} Modules
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ice-50 leading-[1.08] mb-4">
                {PYTHON_COURSE.title}
              </h1>

              <p className="text-base sm:text-xl text-ice-200 leading-relaxed mb-6">
                {PYTHON_COURSE.subtitle}
              </p>

              <AuthorBadge />
            </div>
          </div>
        </section>

        {/* Modules List */}
        <section className="mb-16">
          <div className="mb-8 pb-4 border-b border-ink-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
              Python Course Curriculum
            </h2>
            <p className="text-xs sm:text-sm text-ice-300 mt-1">
              Curated modules from Python syntax to enterprise AsyncIO & FastAPI architectures.
            </p>
          </div>

          <div className="space-y-6">
            {PYTHON_COURSE.modules.map((mod) => (
              <div
                key={mod.id}
                className="rounded-2xl bg-ink-1/80 border border-ink-3 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between hover:border-ice-500/50 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-ink-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-ice-500/20 text-ice-200 border border-ice-500/30 flex items-center justify-center font-mono font-bold text-sm">
                      {mod.number}
                    </span>
                    <h3 className="text-xl font-bold text-ice-50 group-hover:text-ice-200 transition-colors">
                      {mod.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-ice-400">
                    {mod.duration} · {mod.lessonsCount} Lessons
                  </span>
                </div>

                <p className="text-sm text-ice-200 my-4 leading-relaxed">
                  {mod.shortDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {mod.keyTakeaways.map((k, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-ice-300">
                      <span className="w-1 h-1 rounded-full bg-ice-400" />
                      <span>{k}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-ink-3 flex justify-end">
                  <Link
                    href={`/courses/python/${mod.slug}`}
                    className="frost-btn frost-btn--primary !py-2 !px-4 text-xs"
                  >
                    Open Module {mod.number}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
