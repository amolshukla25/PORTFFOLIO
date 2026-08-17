import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseCard from "@/components/courses/CourseCard";
import AuthorBadge from "@/components/courses/AuthorBadge";
import SeoJsonLd from "@/components/courses/SeoJsonLd";
import { TRACKS, ALL_COURSES, INSTRUCTOR_AMOL } from "@/lib/courses-data";

export const metadata: Metadata = {
  title: "AI Tools & Technology Courses by Amol Shukla | Learn LLM & Prompt Engineering",
  description:
    "Explore premier technical courses by Amol Shukla. Master Large Language Models (LLMs), Prompt Engineering, Types of Prompting, RAG architectures, and Python engineering.",
  keywords: [
    "Amol Shukla",
    "Amol Shukla Courses",
    "Amol Shukla AI",
    "Amol Shukla LLM",
    "AI Tools and Technology Amol Shukla",
    "Prompt Engineering Course",
    "Python Engineering Course",
  ],
  openGraph: {
    title: "AI Tools & Technology Courses by Amol Shukla",
    description:
      "Master Large Language Models (LLMs), Prompt Engineering, and Python engineering with comprehensive curriculums by Amol Shukla.",
    type: "website",
  },
};

export default function CoursesHubPage() {
  const llmCourse = ALL_COURSES.find((c) => c.slug === "llm")!;
  const pythonCourse = ALL_COURSES.find((c) => c.slug === "python")!;

  return (
    <>
      <SeoJsonLd
        type="CollectionPage"
        title="AI Tools & Technology Courses by Amol Shukla"
        description="Comprehensive technical courses on LLMs, Prompt Engineering, and Python Systems by Amol Shukla."
        url="https://amolshukla.dev/courses"
        breadcrumbs={[{ name: "Courses", item: "https://amolshukla.dev/courses" }]}
      />

      <CourseHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ice-500/10 border border-ice-500/30 text-ice-300 text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-ice-400 animate-pulse" />
            Amol Shukla Learning Academy
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ice-50 leading-[1.08] mb-6">
            Master <span className="text-ice-400">AI Tools & Tech</span> with Amol Shukla
          </h1>

          <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-8">
            Step-by-step masterclasses designed to take you from foundational concepts to production-ready AI architectures, prompt engineering frameworks, and scalable Python services.
          </p>

          <AuthorBadge className="text-left" />
        </section>

        {/* Tracks Grid */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-ink-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                Curated Learning Tracks
              </h2>
              <p className="text-xs sm:text-sm text-ice-400 mt-1">
                Structured paths curated by Amol Shukla to master generative AI and core engineering.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRACKS.map((track) => (
              <div
                key={track.id}
                className="group relative rounded-2xl bg-ink-1/70 border border-ink-3 p-7 backdrop-blur-md hover:border-ice-500/50 hover:shadow-[0_8px_30px_rgba(31,72,116,0.25)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-ice-500/20 text-ice-200 border border-ice-500/30">
                      {track.badge}
                    </span>
                    <span className="text-xs text-ice-400 font-mono">
                      {track.totalDuration} · {track.coursesCount} Courses
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-ice-50 tracking-tight group-hover:text-ice-200 transition-colors">
                    {track.title}
                  </h3>

                  <p className="text-sm text-ice-300 mt-2 leading-relaxed">
                    {track.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-ink-3 flex items-center justify-between">
                  <span className="text-xs text-ice-400">
                    Lead: <strong className="text-ice-200">{INSTRUCTOR_AMOL.name}</strong>
                  </span>
                  <Link
                    href={`/courses/${track.slug}`}
                    className="frost-btn frost-btn--primary !py-2 !px-4 text-xs"
                  >
                    Explore Track
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Courses Grid */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-ink-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                Featured Courses
              </h2>
              <p className="text-xs sm:text-sm text-ice-400 mt-1">
                Deep dive into interactive lessons, prompt engineering playgrounds, and production code.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CourseCard course={llmCourse} featured />
            <CourseCard course={pythonCourse} />
          </div>
        </section>

        {/* Why Learn With Amol Shukla Section */}
        <section className="rounded-3xl bg-gradient-to-b from-ink-1/90 to-ink-0/90 border border-ink-3 p-8 sm:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-ice-50 tracking-tight mb-4">
              Why Learn with Amol Shukla?
            </h2>
            <p className="text-sm sm:text-base text-ice-300 leading-relaxed mb-10">
              Unlike generic tutorials, each course provides battle-tested production frameworks, real-world prompt blueprints, and deep architectural clarity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="p-5 rounded-xl bg-ink-2/60 border border-ink-3">
                <div className="w-9 h-9 rounded-lg bg-ice-500/20 text-ice-300 flex items-center justify-center font-bold mb-3">
                  01
                </div>
                <h3 className="font-bold text-ice-100 text-sm mb-1">Production-First</h3>
                <p className="text-xs text-ice-400 leading-relaxed">
                  Real prompt templates, guardrails, and Python implementations ready for production deployment.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-ink-2/60 border border-ink-3">
                <div className="w-9 h-9 rounded-lg bg-ice-500/20 text-ice-300 flex items-center justify-center font-bold mb-3">
                  02
                </div>
                <h3 className="font-bold text-ice-100 text-sm mb-1">Interactive Sandboxes</h3>
                <p className="text-xs text-ice-400 leading-relaxed">
                  Test Zero-Shot, Few-Shot, CoT, and ReAct prompting with live simulators inside each module.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-ink-2/60 border border-ink-3">
                <div className="w-9 h-9 rounded-lg bg-ice-500/20 text-ice-300 flex items-center justify-center font-bold mb-3">
                  03
                </div>
                <h3 className="font-bold text-ice-100 text-sm mb-1">Structured Roadmap</h3>
                <p className="text-xs text-ice-400 leading-relaxed">
                  Clear module progression from fundamentals to advanced agentic AI architectures.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
