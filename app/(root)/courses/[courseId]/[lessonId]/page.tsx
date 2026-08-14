import { Metadata } from "next";
import { notFound } from "next/navigation";

import LessonNotes from "@/components/courses/lesson-notes";
import { COURSES } from "@/config/courses";
import { siteConfig } from "@/config/site";

interface LessonPageProps {
  params: Promise<{
    courseId: string;
    lessonId: string;
  }>;
}

export function generateStaticParams() {
  return COURSES.flatMap((course) =>
    course.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({
        courseId: course.id,
        lessonId: lesson.id,
      }))
    )
  );
}

function getlesson(courseId: string, lessonId: string) {
  const course = COURSES.find((c) => c.id === courseId);
  const lesson = course
    ?.modules.flatMap((m) => m.lessons)
    .find((l) => l.id === lessonId);
  return { course, lesson };
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { courseId, lessonId } = await params;
  const { course, lesson } = getlesson(courseId, lessonId);

  if (!course || !lesson) {
    return { title: "Lesson Not Found" };
  }

  const url = `${siteConfig.url}/courses/${courseId}/${lessonId}`;
  const title = `${lesson.title} — ${course.title}`;

  return {
    title,
    description: `${lesson.shortDescription
      .trim()
      .replace(/[.!?…]+$/, "")} — Free lesson notes by Amol Shukla.`,
    keywords: [
      ...course.category,
      siteConfig.authorName,
      "Amol Shukla notes",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: lesson.shortDescription,
      url,
      siteName: siteConfig.name,
      type: "article",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: lesson.shortDescription,
      images: [siteConfig.ogImage],
      creator: `@${siteConfig.username}`,
    },
    robots: { index: true, follow: true },
  };
}

export default async function lessonPage({
  params,
}: LessonPageProps) {
  const { courseId, lessonId } = await params;
  const { course, lesson } = getlesson(courseId, lessonId);

  if (!course || !lesson) {
    notFound();
  }

  const url = `${siteConfig.url}/courses/${courseId}/${lessonId}`;

  // FAQPage schema generated from real lesson content for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is covered in "${lesson.title}"?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: lesson.shortDescription,
        },
      },
      {
        "@type": "Question",
        name: `How long does it take to learn ${lesson.title.split(": ").pop()?.toLowerCase() ?? "this lesson"}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The lesson takes about ${lesson.readingTime.replace(/^.*?(\d+)/, "$1")} to read, with an estimated lesson duration of ${lesson.duration}.`,
        },
      },
      ...(lesson.visualizationTips?.length
        ? [
            {
              "@type": "Question",
              name: `What visualization tips help you master ${lesson.title.split(": ").pop() ?? "this topic"}?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: lesson.visualizationTips.slice(0, 2).join(" "),
              },
            },
          ]
        : []),
      ...(lesson.tipsAndTricks?.length
        ? [
            {
              "@type": "Question",
              name: `What are the best professional tips and tricks for ${lesson.title.split(": ").pop() ?? "this topic"}?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: lesson.tipsAndTricks.slice(0, 2).join(" "),
              },
            },
          ]
        : []),
      ...(lesson.practice?.length
        ? [
            {
              "@type": "Question",
              name: `Can you practice ${lesson.title.split(": ").pop() ?? "this topic"} with exercises?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `Yes — this lesson includes ${lesson.practice.length} hands-on practice exercise${lesson.practice.length > 1 ? "s" : ""} with difficulty levels and step-by-step solutions: ${lesson.practice
                  .slice(0, 2)
                  .map((p) => p.title)
                  .join(", ")}.`,
              },
            },
          ]
        : []),
      {
        "@type": "Question",
        name: `Which course does this lesson belong to?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `This lesson is part of "${course.title}" — a ${course.difficulty} course by ${course.instructor} with ${course.modules.length} modules, available free at ${siteConfig.url}.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LessonNotes />
    </>
  );
}
