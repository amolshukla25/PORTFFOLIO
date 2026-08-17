import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CourseHeader from "@/components/courses/CourseHeader";
import AuthorBadge from "@/components/courses/AuthorBadge";
import InteractivePromptPlayground from "@/components/courses/InteractivePromptPlayground";
import SeoJsonLd from "@/components/courses/SeoJsonLd";
import { LLM_COURSE, INSTRUCTOR_AMOL } from "@/lib/courses-data";

export const metadata: Metadata = {
  title: LLM_COURSE.seo.title,
  description: LLM_COURSE.seo.description,
  keywords: LLM_COURSE.seo.keywords,
  openGraph: {
    title: LLM_COURSE.seo.title,
    description: LLM_COURSE.seo.description,
    type: "website",
    url: "https://amolshukla.dev/courses/ai-tools-and-technology/llm",
  },
};

export default function LlmCoursePage() {
  return (
    <>
      <SeoJsonLd
        type="Course"
        title={LLM_COURSE.seo.title}
        description={LLM_COURSE.seo.description}
        url="https://amolshukla.dev/courses/ai-tools-and-technology/llm"
        breadcrumbs={[
          { name: "Courses", item: "https://amolshukla.dev/courses" },
          { name: "AI Tools and Technology", item: "https://amolshukla.dev/courses/ai-tools-and-technology" },
          { name: "LLM Mastery", item: "https://amolshukla.dev/courses/ai-tools-and-technology/llm" },
        ]}
        courseData={{
          courseName: LLM_COURSE.title,
          description: LLM_COURSE.description,
          timeRequired: "PT8H30M",
        }}
      />

      <CourseHeader
        breadcrumbs={[
          { label: "AI Tools and Technology", href: "/courses/ai-tools-and-technology" },
          { label: "LLM Mastery" },
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Course Header Banner */}
        <section className="mb-14">
          <div className="rounded-3xl bg-gradient-to-r from-ink-1/90 via-ink-2/70 to-ice-950/40 border border-ice-500/40 p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-ice-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-ice-500/20 text-ice-200 border border-ice-500/30">
                  {LLM_COURSE.trackName}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {LLM_COURSE.level}
                </span>
                <span className="text-xs text-ice-400 font-mono">
                  {LLM_COURSE.duration} · 3 Core Modules · 20 Lessons
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ice-50 leading-[1.08] mb-4">
                {LLM_COURSE.title}
              </h1>

              <p className="text-base sm:text-xl text-ice-200 leading-relaxed mb-6">
                {LLM_COURSE.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  href="/courses/ai-tools-and-technology/llm/prompt-engineering"
                  className="frost-btn frost-btn--primary !py-3 !px-6 text-sm"
                >
                  <span>Start Module 1: Prompt Engineering</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>

                <a
                  href="#syllabus"
                  className="frost-btn !py-3 !px-5 text-sm"
                >
                  View Full Syllabus
                </a>
              </div>

              <AuthorBadge />
            </div>
          </div>
        </section>

        {/* What You Will Learn & Prerequisites */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8 rounded-2xl bg-ink-1/80 border border-ink-3 p-7 backdrop-blur-md">
            <h2 className="text-xl sm:text-2xl font-bold text-ice-50 mb-5 flex items-center gap-2">
              <span className="text-ice-400">✦</span> What You Will Master
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LLM_COURSE.whatYouWillLearn.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-ice-500/20 text-ice-300 border border-ice-500/30 flex items-center justify-center text-xs flex-none mt-0.5">
                    ✓
                  </span>
                  <p className="text-xs sm:text-sm text-ice-200 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl bg-ink-1/80 border border-ink-3 p-7 backdrop-blur-md flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-ice-50 mb-4 flex items-center gap-2">
                <span className="text-ice-400">❖</span> Prerequisites
              </h2>
              <ul className="space-y-3">
                {LLM_COURSE.prerequisites.map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-ice-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-ice-400 flex-none mt-1.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-ink-3 text-xs text-ice-400">
              Curated by <strong>Amol Shukla</strong> for software developers, engineers, and AI practitioners.
            </div>
          </div>
        </section>

        {/* Modules Syllabus Section */}
        <section id="syllabus" className="mb-20 scroll-mt-24">
          <div className="mb-8 pb-4 border-b border-ink-3">
            <span className="text-xs font-mono uppercase tracking-wider text-ice-400">
              Comprehensive Curriculum
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-ice-50 tracking-tight mt-1">
              Course Modules Syllabus
            </h2>
            <p className="text-xs sm:text-sm text-ice-300 mt-1">
              Click on any module to enter its dedicated interactive lesson page.
            </p>
          </div>

          <div className="space-y-6">
            {LLM_COURSE.modules.map((mod, idx) => (
              <div
                key={mod.id}
                className="rounded-2xl bg-ink-1/90 border border-ink-3 p-6 sm:p-8 backdrop-blur-md hover:border-ice-500/50 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-ink-3">
                  <div className="flex items-center gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-ice-500/20 text-ice-200 border border-ice-500/30 flex items-center justify-center font-mono font-bold text-sm">
                      {mod.number}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-ice-400">
                        {mod.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-ice-50 group-hover:text-ice-200 transition-colors">
                        {mod.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-start md:self-center">
                    <span className="text-xs font-mono text-ice-400">
                      {mod.duration} · {mod.lessonsCount} Lessons
                    </span>
                    <Link
                      href={`/courses/ai-tools-and-technology/llm/${mod.slug}`}
                      className="frost-btn frost-btn--primary !py-2 !px-4 text-xs"
                    >
                      Open Module
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <p className="text-sm text-ice-200 my-4 leading-relaxed">
                  {mod.shortDesc}
                </p>

                {/* Key Takeaways */}
                <div className="mt-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-ice-400 mb-2">
                    Key Topics & Blueprint:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {mod.keyTakeaways.map((k, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-ice-300">
                        <span className="w-1 h-1 rounded-full bg-ice-400 flex-none" />
                        <span>{k}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Prompt Sandbox Section */}
        <section className="mb-20">
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-ice-400">
              Hands-on Learning
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight mt-1">
              Live Prompting Sandbox
            </h2>
            <p className="text-xs sm:text-sm text-ice-300 mt-1">
              Experience the prompting paradigms taught by Amol Shukla in real-time.
            </p>
          </div>

          <InteractivePromptPlayground />
        </section>
      </main>
    </>
  );
}
