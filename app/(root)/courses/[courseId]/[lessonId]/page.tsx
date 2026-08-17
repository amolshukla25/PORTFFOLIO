import { Metadata } from "next";
import { notFound } from "next/navigation";

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

import LessonNotes from "@/components/courses/lesson-notes";
import { COURSES } from "@/config/courses";
import { siteConfig } from "@/config/site";
import { truncateMetaTitle } from "@/lib/utils";

// Renders $$math$$ tokens as styled inline math spans before remark parses
// the markdown, so notes that use LaTeX-style delimiters keep their look.
// Mirrors the transform previously done client-side in lesson-notes.tsx.
function protectMath(content: string) {
  return content.replace(/\$\$([^$]+)\$\$/g, (_, expr) => {
    return `\`\`\`math\n${expr}\n\`\`\``;
  });
}

// Full GFM markdown renderer (tables, blockquotes, links, code blocks,
// task lists, strikethrough) — same pipeline the blog pages use. Running it
// here on the server means the full lesson text ships in the initial HTML,
// which is what Googlebot reads before any JavaScript executes.
async function renderLessonMarkdown(content: string): Promise<string> {
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(protectMath(content));
  return processed.toString();
}

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
      title: truncateMetaTitle(title),
      description: lesson.shortDescription,
      url,
      siteName: siteConfig.name,
      type: "article",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: truncateMetaTitle(title),
      description: lesson.shortDescription,
      images: [siteConfig.ogImage],
      creator: `@${siteConfig.username}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
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

  // BreadcrumbList — helps Google understand the site hierarchy (Courses →
  // Course → Lesson) and can earn breadcrumb rich results in the SERP.
  // (No FAQPage schema: since 2023 Google only shows FAQ rich results on
  // authoritative government/health sites, so that markup would be ignored.)
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
        name: course.title.split(": ")[0] || course.title,
        item: `${siteConfig.url}/courses/${course.id}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: lesson.title.split(": ")[1] || lesson.title,
        item: url,
      },
    ],
  };

  // Render the lesson body on the server so crawlers see the full notes
  // without executing JavaScript (the previous client-only render left the
  // article body empty in the initial HTML, which Google treats as thin
  // content and refuses to index).
  const contentHtml = await renderLessonMarkdown(lesson.contentMarkdown);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LessonNotes contentHtml={contentHtml} />
    </>
  );
}
