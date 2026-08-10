import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Script from "next/script";
import { BookOpen, Clock, Award, ChevronRight, FileText, ArrowLeft, GraduationCap, List } from "lucide-react";
import PageContainer from "@/components/common/page-container";
import CourseProgressPanel from "@/components/courses/course-progress-panel";
import { COURSES } from "@/config/courses";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    title: `${course.title} — Notes & Syllabus | Amol Shukla`,
    description: course.shortDescription,
    keywords: course.category,
    alternates: {
      canonical: `${siteConfig.url}/courses/${courseId}`,
    },
    openGraph: {
      title: `${course.title} | ${siteConfig.name}`,
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
      title: `${course.title} | ${siteConfig.name}`,
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
    redirect("/courses");
  }

  const totalLectures = course.modules.reduce(
    (acc, module) => acc + module.lectures.length,
    0
  );

  // Course schema + breadcrumbs for structured data
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
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
    <div className="container py-8 max-w-4xl">
      <Script
        id="schema-course"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Script
        id="schema-breadcrumb-course"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Back button */}
      <Link
        href="/courses"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "mb-6 rounded-xl text-muted-foreground hover:text-foreground gap-2"
        )}
      >
        <ArrowLeft className="h-4 w-4" />
        All Courses
      </Link>

      {/* Course Header */}
      <div className="space-y-4 mb-10 pb-8 border-b border-border">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {course.difficulty}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {course.duration} estimated content
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            {totalLectures} lectures
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
            <Award className="h-3.5 w-3.5 text-star" />
            {course.rating} / 5
          </span>
        </div>

        <h1 className="font-heading text-4xl leading-tight md:text-5xl flex items-center gap-3">
          <GraduationCap className="h-10 w-10 text-primary hidden sm:block" />
          {course.title}
        </h1>

        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          {course.detailedDescription}
        </p>

        <div className="flex items-center gap-4 text-sm pt-2">
          <span className="font-semibold text-foreground">
            Instructor: <span className="font-normal text-muted-foreground">{course.instructor}</span>
          </span>
        </div>
      </div>

      {/* Progress tracker — completion state persisted to localStorage */}
      <div className="mb-10">
        <CourseProgressPanel
          courseId={course.id}
          modules={course.modules.map((m) => ({
            id: m.id,
            title: m.title,
            lectures: m.lectures.map((l) => ({ id: l.id, title: l.title })),
          }))}
        />
      </div>

      {/* Table of Contents — every module & lecture linked for navigation + internal linking */}
      <nav
        aria-label="Course table of contents"
        className="mb-10 rounded-2xl border border-border/80 bg-card shadow-sm overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-border/60 bg-muted/20 flex items-center gap-2">
          <List className="h-4 w-4 text-primary" />
          <h2 className="font-heading text-lg font-bold text-foreground">
            Table of Contents
          </h2>
          <span className="ml-auto text-xs font-medium text-muted-foreground">
            {course.modules.length} modules · {totalLectures} lessons
          </span>
        </div>
        <ol className="divide-y divide-border/50 text-sm">
          {course.modules.map((module, mIdx) => (
            <li key={module.id} className="px-6 py-3 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-2">
                <a
                  href={`#${module.id}`}
                  className="font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <BookOpen className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                  <span>
                    Module {mIdx + 1}: {module.title.split(": ")[1] || module.title}
                  </span>
                </a>
                <span className="ml-auto text-xs text-muted-foreground shrink-0">
                  {module.lectures.length} lessons
                </span>
              </div>
              <ol className="mt-2 ml-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {module.lectures.map((lecture) => (
                  <li key={lecture.id}>
                    <Link
                      href={`/courses/${course.id}/${lecture.id}`}
                      className="group inline-flex items-start gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ChevronRight className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary/40 group-hover:text-primary transition-colors" />
                      <span className="line-clamp-1">{lecture.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </nav>

      {/* Syllabus Modules Grid (Card Inside Card Layout) */}
      <div className="space-y-8">
        <h2 className="font-heading text-3xl mb-6">Course Modules</h2>
        
        {course.modules.map((module, mIdx) => (
          <div
            key={module.id}
            id={module.id}
            className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm relative overflow-hidden scroll-mt-24"
          >
            {/* Soft decorative background tint for module */}
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Module {mIdx + 1}
              </span>
              <h3 className="text-2xl font-bold text-foreground">
                {module.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {module.description}
              </p>
            </div>

            {/* Inner Lecture Cards (Card inside Card) */}
            <div className="grid grid-cols-1 gap-4">
              {module.lectures.map((lecture) => (
                <div
                  key={lecture.id}
                  className="group relative p-4 rounded-xl bg-background border border-border/60 hover:border-primary/30 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div className="space-y-1.5 max-w-xl">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary/70 shrink-0" />
                      <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                        {lecture.title}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 pl-6">
                      {lecture.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pl-6 sm:pl-0 shrink-0">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs font-medium text-foreground">{lecture.duration}</p>
                      <p className="text-[10px] text-muted-foreground">{lecture.readingTime}</p>
                    </div>
                    <Link
                      href={`/courses/${course.id}/${lecture.id}`}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "rounded-xl gap-1 text-xs py-1.5 h-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      )}
                    >
                      Read Notes
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
