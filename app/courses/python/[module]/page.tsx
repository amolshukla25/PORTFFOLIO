import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CourseHeader from "@/components/courses/CourseHeader";
import AuthorBadge from "@/components/courses/AuthorBadge";
import CodeBlock from "@/components/courses/CodeBlock";
import ModuleNavigation from "@/components/courses/ModuleNavigation";
import SeoJsonLd from "@/components/courses/SeoJsonLd";
import { PYTHON_COURSE, getModuleBySlug } from "@/lib/courses-data";

interface PageProps {
  params: Promise<{ module: string }>;
}

export async function generateStaticParams() {
  return PYTHON_COURSE.modules.map((m) => ({
    module: m.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { module: moduleSlug } = await params;
  const mod = getModuleBySlug(PYTHON_COURSE, moduleSlug);

  if (!mod) {
    return {
      title: "Module Not Found | Amol Shukla",
    };
  }

  return {
    title: `${mod.title} | Python Mastery by Amol Shukla`,
    description: `${mod.shortDesc} - Mastered in Amol Shukla's Python Mastery Course.`,
    keywords: [
      "Amol Shukla",
      "Amol Shukla Python",
      mod.title,
      "Python Course Amol Shukla",
      "Python Engineering",
    ],
  };
}

export default async function PythonModulePage({ params }: PageProps) {
  const { module: moduleSlug } = await params;
  const mod = getModuleBySlug(PYTHON_COURSE, moduleSlug);

  if (!mod) {
    notFound();
  }

  const moduleIndex = PYTHON_COURSE.modules.findIndex((m) => m.slug === moduleSlug);
  const prevMod = moduleIndex > 0 ? PYTHON_COURSE.modules[moduleIndex - 1] : undefined;
  const nextMod = moduleIndex < PYTHON_COURSE.modules.length - 1 ? PYTHON_COURSE.modules[moduleIndex + 1] : undefined;

  const pythonCodeSnippet = `# Amol Shukla Python Engineering Pattern: ${mod.title}
from typing import Optional
from dataclasses import dataclass
import asyncio

@dataclass
class ServiceContext:
    service_name: str
    is_active: bool = True
    timeout_seconds: float = 5.0

async def execute_task(ctx: ServiceContext) -> dict:
    await asyncio.sleep(0.1) # Async I/O simulation
    return {
        "status": "success",
        "service": ctx.service_name,
        "handled_by": "Amol Shukla Architecture"
    }

# Entrypoint execution
if __name__ == "__main__":
    ctx = ServiceContext(service_name="payment_orchestrator")
    result = asyncio.run(execute_task(ctx))
    print(result)`;

  return (
    <>
      <SeoJsonLd
        type="Article"
        title={`${mod.title} - Python Mastery by Amol Shukla`}
        description={mod.shortDesc}
        url={`https://amolshukla.dev/courses/python/${mod.slug}`}
        breadcrumbs={[
          { name: "Courses", item: "https://amolshukla.dev/courses" },
          { name: "Python Mastery", item: "https://amolshukla.dev/courses/python" },
          { name: mod.title, item: `https://amolshukla.dev/courses/python/${mod.slug}` },
        ]}
      />

      <CourseHeader
        breadcrumbs={[
          { label: "Python Mastery", href: "/courses/python" },
          { label: mod.title },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-ice-500/20 text-ice-200 border border-ice-500/30">
              Module {mod.number}
            </span>
            <span className="text-xs text-ice-400 font-mono">
              {mod.duration} · {mod.lessonsCount} Lessons
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ice-50 leading-[1.1] mb-4">
            {mod.title}
          </h1>

          <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">
            {mod.shortDesc}
          </p>

          <AuthorBadge />
        </header>

        {/* Content */}
        <article className="space-y-10 text-ice-200 leading-relaxed">
          <section className="p-6 sm:p-8 rounded-2xl bg-ink-1/70 border border-ink-3">
            <h2 className="text-2xl font-bold text-ice-50 mb-4">
              Module Key Takeaways & Architecture
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {mod.keyTakeaways.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-ice-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-ice-400 flex-none mt-1.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <CodeBlock
              code={pythonCodeSnippet}
              language="python"
              title={`Python Blueprint: ${mod.title}`}
            />
          </section>
        </article>

        {/* Module Navigation */}
        <ModuleNavigation
          courseOverviewHref="/courses/python"
          prevModule={
            prevMod
              ? {
                  title: `${prevMod.number}. ${prevMod.title}`,
                  href: `/courses/python/${prevMod.slug}`,
                }
              : undefined
          }
          nextModule={
            nextMod
              ? {
                  title: `${nextMod.number}. ${nextMod.title}`,
                  href: `/courses/python/${nextMod.slug}`,
                }
              : undefined
          }
        />
      </main>
    </>
  );
}
