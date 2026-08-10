import { Metadata } from "next";

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

export async function generateMetadata({
  params,
}: LecturePageProps): Promise<Metadata> {
  const { courseId, lectureId } = await params;
  const course = COURSES.find((c) => c.id === courseId);
  const lecture = course
    ?.modules.flatMap((m) => m.lectures)
    .find((l) => l.id === lectureId);

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

export default function LecturePage() {
  return <LectureNotes />;
}
