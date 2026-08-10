import { Metadata } from "next";
import Script from "next/script";

import LectureNotes from "@/components/courses/lecture-notes";
import { COURSES } from "@/config/courses";
import { siteConfig } from "@/config/site";

interface LecturePageProps {
  params: Promise<{
    courseId: string;
    lectureId: string;
  }>;
}

export function generateStaticParams() {
  return COURSES.flatMap((course) =>
    course.modules.flatMap((module) =>
      module.lectures.map((lecture) => ({
        courseId: course.id,
        lectureId: lecture.id,
      }))
    )
  );
}

function getLecture(courseId: string, lectureId: string) {
  const course = COURSES.find((c) => c.id === courseId);
  const lecture = course
    ?.modules.flatMap((m) => m.lectures)
    .find((l) => l.id === lectureId);
  return { course, lecture };
}

export async function generateMetadata({
  params,
}: LecturePageProps): Promise<Metadata> {
  const { courseId, lectureId } = await params;
  const { course, lecture } = getLecture(courseId, lectureId);

  if (!course || !lecture) {
    return { title: "Lecture Not Found" };
  }

  const url = `${siteConfig.url}/courses/${courseId}/${lectureId}`;
  const title = `${lecture.title} — ${course.title}`;

  return {
    title,
    description: lecture.shortDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: lecture.shortDescription,
      url,
      siteName: siteConfig.name,
      type: "article",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: lecture.shortDescription,
      images: [siteConfig.ogImage],
      creator: `@${siteConfig.username}`,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LecturePage({
  params,
}: LecturePageProps) {
  const { courseId, lectureId } = await params;
  const { course, lecture } = getLecture(courseId, lectureId);

  if (!course || !lecture) {
    return null;
  }

  const url = `${siteConfig.url}/courses/${courseId}/${lectureId}`;

  // FAQPage schema generated from real lecture content for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is covered in "${lecture.title}"?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: lecture.shortDescription,
        },
      },
      {
        "@type": "Question",
        name: `How long does it take to learn ${lecture.title.split(": ").pop()?.toLowerCase() ?? "this lesson"}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The lesson takes about ${lecture.readingTime.replace(/^.*?(\d+)/, "$1")} to read, with an estimated lecture duration of ${lecture.duration}.`,
        },
      },
      ...(lecture.visualizationTips?.length
        ? [
            {
              "@type": "Question",
              name: `What visualization tips help you master ${lecture.title.split(": ").pop() ?? "this topic"}?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: lecture.visualizationTips.slice(0, 2).join(" "),
              },
            },
          ]
        : []),
      ...(lecture.tipsAndTricks?.length
        ? [
            {
              "@type": "Question",
              name: `What are the best professional tips and tricks for ${lecture.title.split(": ").pop() ?? "this topic"}?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: lecture.tipsAndTricks.slice(0, 2).join(" "),
              },
            },
          ]
        : []),
      ...(lecture.practice?.length
        ? [
            {
              "@type": "Question",
              name: `Can you practice ${lecture.title.split(": ").pop() ?? "this topic"} with exercises?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `Yes — this lesson includes ${lecture.practice.length} hands-on practice exercise${lecture.practice.length > 1 ? "s" : ""} with difficulty levels and step-by-step solutions: ${lecture.practice
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
      <Script
        id="schema-faq-lecture"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LectureNotes />
    </>
  );
}
