import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpen,
  ChevronDown,
  Clock,
  FileText,
  GraduationCap,
  Layers,
} from "lucide-react";
import PageContainer from "@/components/common/page-container";
import CourseProgressPanel from "@/components/courses/course-progress-panel";
import { COURSES } from "@/config/courses";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn, truncateMetaTitle } from "@/lib/utils";

interface CoursePageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export function generateStaticParams() {
  return COURSES.map((course) => ({ courseId: course.id }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { courseId } = await params;
  const course = COURSES.find((c) => c.id === courseId);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} — Notes & Syllabus`,
    description: `${course.shortDescription
      .trim()
      .replace(/[.!?…]+$/, "")} — Free course notes and syllabus by Amol Shukla, AI Developer & Trainer.`,
    keywords: [
      ...course.category,
      siteConfig.authorName,
      "Amol Shukla courses",
    ],
    alternates: {
      canonical: `${siteConfig.url}/courses/${courseId}`,
    },
    openGraph: {
      title: truncateMetaTitle(course.title),
      description: course.shortDescription,
      url: `${siteConfig.url}/courses/${courseId}`,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: truncateMetaTitle(course.title),
      description: course.shortDescription,
      images: [siteConfig.ogImage],
      creator: `@${siteConfig.username}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const course = COURSES.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  const totalLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.length,
    0
  );

  // Course schema + breadcrumbs for structured data.
  // hasPart lists every lesson as a LearningResource so Google understands
  // the course structure and can crawl every lesson page from the schema.
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    inLanguage: "en",
    isAccessibleForFree: true,
    educationalLevel: course.difficulty,
    description: course.detailedDescription,
    url: `${siteConfig.url}/courses/${course.id}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: course.duration,
      instructor: {
        "@type": "Person",
        name: course.instructor,
      },
    },
    hasPart: course.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({
        "@type": "LearningResource",
        name: lesson.title,
        description: lesson.shortDescription || (lesson as any).description || "",
        url: `${siteConfig.url}/courses/${course.id}/${lesson.id}`,
        learningResourceType: "lesson",
      }))
    ),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Learning Hub",
        item: `${siteConfig.url}/courses`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.title,
        item: `${siteConfig.url}/courses/${course.id}`,
      },
    ],
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Ambient wash — depth behind the header without a heavy hero block */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(60%_100%_at_50%_0%,hsl(var(--accent)/0.10),transparent_72%)]"
      />

      <div className="container relative max-w-6xl py-8 sm:py-12">
        <Link
          href="/courses"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "-ml-2 mb-8 gap-2 rounded-xl text-muted-foreground hover:text-foreground"
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          All courses
        </Link>

        <header className="animate-rise">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Badge variant="accent">{course.difficulty}</Badge>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {course.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" />
              {totalLessons} lessons
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Award className="h-3.5 w-3.5 text-star" />
              {course.rating} / 5
            </span>
          </div>

          <h1 className="mt-5 text-balance font-heading text-3xl leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {course.title}
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {course.detailedDescription}
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Taught by{" "}
            <span className="font-medium text-foreground">{course.instructor}</span>
          </p>

          {/* Quick facts: one hairline-divided strip instead of four loose chips */}
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/80 bg-border/70 sm:grid-cols-4">
            {[
              { label: "Modules", value: course.modules.length, Icon: Layers },
              { label: "Lessons", value: totalLessons, Icon: FileText },
              { label: "Level", value: course.difficulty, Icon: GraduationCap },
              { label: "Rating", value: `${course.rating} / 5`, Icon: Award },
            ].map(({ label, value, Icon }) => (
              <div key={label} className="flex items-center gap-3 bg-card px-4 py-4">
                <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <div className="min-w-0">
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="truncate text-sm font-semibold text-foreground">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </header>

        {/* Progress tracker — completion state persisted to localStorage */}
        <section className="mt-10 animate-rise">
          <CourseProgressPanel
            courseId={course.id}
            modules={course.modules.map((m) => ({
              id: m.id,
              title: m.title,
              lessons: m.lessons.map((l) => ({ id: l.id, title: l.title })),
            }))}
          />
        </section>

        <section className="mt-14">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="font-heading text-2xl tracking-tight text-foreground sm:text-3xl">
              Syllabus
            </h2>
            <span className="shrink-0 text-xs text-muted-foreground sm:text-sm">
              {course.modules.length} modules · {totalLessons} lessons
            </span>
          </div>

          {/* Accordion: one module open at a time keeps a ten-module course
              from becoming an endless wall of nested cards. */}
          <div className="space-y-3">
            {course.modules.map((module, mIdx) => (
              <details
                key={module.id}
                id={module.id}
                open={mIdx === 0}
                className="reveal group scroll-mt-24 overflow-hidden rounded-2xl border border-border/80 bg-card transition-colors"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 px-4 py-4 transition-colors hover:bg-muted/50 sm:px-5 [&::-webkit-details-marker]:hidden">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent/10 text-xs font-semibold tabular-nums text-accent">
                    {String(mIdx + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-[15px] font-semibold text-foreground">
                      {module.title}
                    </h3>
                    <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground sm:text-[13px]">
                      {module.description}
                    </p>
                  </div>
                  <span className="hidden shrink-0 text-xs tabular-nums text-muted-foreground sm:block">
                    {module.lessons.length} lessons
                  </span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                </summary>

                <ol className="border-t border-border/70 p-1.5 sm:p-2">
                  {module.lessons.map((lesson, lIdx) => (
                    <li key={lesson.id}>
                      <Link
                        href={`/courses/${course.id}/${lesson.id}`}
                        className="group/lesson flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-muted/60 focus-visible:bg-muted/60 focus-visible:outline-none"
                      >
                        <span className="mt-0.5 w-8 shrink-0 text-xs tabular-nums text-muted-foreground/70">
                          {mIdx + 1}.{lIdx + 1}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium leading-snug text-foreground transition-colors group-hover/lesson:text-accent">
                            {lesson.title}
                          </span>
                          <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-muted-foreground">
                            {lesson.shortDescription ||
                              (lesson as any).description ||
                              ""}
                          </span>
                        </span>
                        <span className="hidden shrink-0 items-center gap-1.5 pt-0.5 text-xs text-muted-foreground sm:flex">
                          <Clock className="h-3 w-3" />
                          {lesson.duration}
                        </span>
                        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/30 transition-all group-hover/lesson:-translate-y-0.5 group-hover/lesson:translate-x-0.5 group-hover/lesson:text-accent" />
                      </Link>
                    </li>
                  ))}
                </ol>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
