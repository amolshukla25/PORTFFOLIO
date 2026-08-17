import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseCard from "@/components/courses/CourseCard";
import AuthorBadge from "@/components/courses/AuthorBadge";
import SeoJsonLd from "@/components/courses/SeoJsonLd";
import { LLM_COURSE, TRACKS, INSTRUCTOR_AMOL } from "@/lib/courses-data";

export const metadata: Metadata = {
  title: "AI Tools and Technology Track | Amol Shukla",
  description:
    "Master the cutting edge of artificial intelligence. Explore Large Language Models (LLMs), Prompt Engineering, RAG systems, and AI Agents with Amol Shukla.",
  keywords: [
    "Amol Shukla",
    "Amol Shukla AI",
    "AI Tools and Technology Amol Shukla",
    "LLM Course Amol Shukla",
    "Prompt Engineering Amol Shukla",
    "Generative AI",
    "AI Agents",
  ],
  openGraph: {
    title: "AI Tools and Technology Track by Amol Shukla",
    description:
      "Explore Large Language Models (LLMs), Prompt Engineering, RAG, and AI developer tools.",
    type: "website",
  },
};

export default function AiToolsTrackPage() {
  const track = TRACKS.find((t) => t.slug === "ai-tools-and-technology")!;

  return (
    <>
      <SeoJsonLd
        type="CollectionPage"
        title={track.seo.title}
        description={track.seo.description}
        url="https://amolshukla.dev/courses/ai-tools-and-technology"
        breadcrumbs={[
          { name: "Courses", item: "https://amolshukla.dev/courses" },
          { name: "AI Tools and Technology", item: "https://amolshukla.dev/courses/ai-tools-and-technology" },
        ]}
      />

      <CourseHeader
        breadcrumbs={[
          { label: "AI Tools and Technology" },
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Track Banner */}
        <section className="mb-14">
          <div className="rounded-3xl bg-gradient-to-r from-ink-1/90 via-ink-2/60 to-ice-950/40 border border-ice-500/30 p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-ice-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ice-500/20 text-ice-200 border border-ice-500/30 text-xs font-mono mb-4">
                <span>✦</span>
                <span>Track Overview</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ice-50 leading-[1.1] mb-4">
                AI Tools and Technology
              </h1>

              <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-8">
                {track.description}
              </p>

              <AuthorBadge />
            </div>
          </div>
        </section>

        {/* Primary Course Showcase */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-ink-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-ice-400">
                Primary Masterclass
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight mt-0.5">
                Large Language Models (LLM) Masterclass
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <CourseCard course={LLM_COURSE} featured />
          </div>
        </section>

        {/* Modules Breakdown Quick Preview */}
        <section className="mb-16">
          <div className="mb-8 pb-4 border-b border-ink-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
              LLM Masterclass Modules
            </h2>
            <p className="text-xs sm:text-sm text-ice-400 mt-1">
              Three deep-dive modules structured for complete conceptual and practical mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LLM_COURSE.modules.map((mod) => (
              <div
                key={mod.id}
                className="rounded-2xl bg-ink-1/80 border border-ink-3 p-6 backdrop-blur-md flex flex-col justify-between hover:border-ice-500/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-ice-400">
                      Module {mod.number}
                    </span>
                    <span className="text-xs text-ice-400 font-mono">
                      {mod.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-ice-50 group-hover:text-ice-200 transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-ice-300 mt-2 leading-relaxed">
                    {mod.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-ink-3">
                  <Link
                    href={`/courses/ai-tools-and-technology/llm/${mod.slug}`}
                    className="text-xs font-semibold text-ice-200 hover:text-ice-50 flex items-center gap-1.5"
                  >
                    <span>Start Module {mod.number}</span>
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional AI Tools & Technologies */}
        <section>
          <div className="mb-8 pb-4 border-b border-ink-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
              Complementary AI Tools & Technologies
            </h2>
            <p className="text-xs sm:text-sm text-ice-400 mt-1">
              Upcoming specialized modules inside the AI Tools track curated by Amol Shukla.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-ink-1/40 border border-ink-3 p-6 backdrop-blur-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-ice-500/20 text-ice-300 border border-ice-500/30 mb-3 inline-block">
                Toolchain
              </span>
              <h3 className="text-base font-bold text-ice-100 mb-1">
                LangChain & LlamaIndex
              </h3>
              <p className="text-xs text-ice-400 leading-relaxed">
                Orchestrating agents, memory chains, vector retrievers, and structured tool calling.
              </p>
            </div>

            <div className="rounded-2xl bg-ink-1/40 border border-ink-3 p-6 backdrop-blur-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-ice-500/20 text-ice-300 border border-ice-500/30 mb-3 inline-block">
                Developer AI
              </span>
              <h3 className="text-base font-bold text-ice-100 mb-1">
                Cursor, Copilot & Claude Code
              </h3>
              <p className="text-xs text-ice-400 leading-relaxed">
                Supercharging developer productivity with context-aware AI pairing, indexing, and spec generation.
              </p>
            </div>

            <div className="rounded-2xl bg-ink-1/40 border border-ink-3 p-6 backdrop-blur-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-ice-500/20 text-ice-300 border border-ice-500/30 mb-3 inline-block">
                Data & Storage
              </span>
              <h3 className="text-base font-bold text-ice-100 mb-1">
                Vector Databases & pgvector
              </h3>
              <p className="text-xs text-ice-400 leading-relaxed">
                High-performance embeddings storage, hybrid search, and semantic indexing in PostgreSQL.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
