import { Metadata } from "next";
import { notFound } from "next/navigation";

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

import LessonNotes from "@/components/courses/lesson-notes";
import MysqlLessonPage from "@/components/courses/mysql/mysql-lesson-page";
import MysqlPlayground from "@/components/courses/mysql/playground";
import { getMysqlLesson, MYSQL_LESSONS, MYSQL_MODULES, MYSQL_SYLLABUS } from "@/config/mysql/index";
import { renderMysqlLesson } from "@/lib/mysql-course/render";
import { breadcrumbs, jsonLd, lessonSchemas, MYSQL_CONTENT_UPDATED } from "@/lib/mysql-course/seo";
import { COURSES } from "@/config/courses";
import { siteConfig } from "@/config/site";
import { truncateMetaDescription, truncateMetaTitle } from "@/lib/utils";

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
  return [
    ...COURSES.flatMap((course) =>
      course.modules.flatMap((module) =>
        module.lessons.map((lesson) => ({
          courseId: course.id,
          lessonId: lesson.id,
        }))
      )
    ),
    { courseId: "mysql", lessonId: "playground" },
  ];
}

function mysqlMetadata(lessonId: string): Metadata | null {
  const base = `${siteConfig.url}/courses/mysql`;
  if (lessonId === "playground") {
    const title = "Free online MySQL playground with a sample database";
    const description = "Run MySQL-style SQL in your browser on a ready-made retail database (small or 4,000 orders). No install, no sign-up — practice queries, joins and window functions.";
    return {
      title: { absolute: title },
      description,
      alternates: { canonical: `${base}/playground` },
      openGraph: { title, description, url: `${base}/playground`, siteName: siteConfig.name, type: "website", images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: title }] },
      twitter: { card: "summary_large_image", title, description, images: [siteConfig.ogImage] },
    };
  }
  const found = getMysqlLesson(lessonId);
  if (!found) return null;
  const { lesson } = found;
  const url = `${base}/${lesson.slug}`;
  const description = truncateMetaDescription(lesson.summary, 158);
  return {
    title: { absolute: truncateMetaTitle(lesson.title, 70) },
    description,
    keywords: [...lesson.teaches, "MySQL tutorial", "SQL practice", "MySQL course"],
    authors: [{ name: siteConfig.authorName, url: siteConfig.url }],
    alternates: { canonical: url },
    openGraph: {
      title: lesson.title,
      description,
      url,
      siteName: siteConfig.name,
      type: "article",
      modifiedTime: MYSQL_CONTENT_UPDATED,
      authors: [siteConfig.authorName],
      section: "MySQL course",
      tags: lesson.teaches,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: lesson.title }],
    },
    twitter: { card: "summary_large_image", title: truncateMetaTitle(lesson.title), description, images: [siteConfig.ogImage], creator: `@${siteConfig.username}` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  };
}

/**
 * Plain-text summary of a lesson for meta tags.
 *
 * Most lessons carry a hand-written `shortDescription`, but some (the stock
 * marketing modules) only ship a markdown body. Those used to emit the
 * description " — Free lesson notes by Amol Shukla." and an empty
 * og:description, so 18 lesson URLs shared one blank snippet. Fall back to
 * the first prose line of the body, then to the course summary.
 */
function lessonSummary(
  course: { shortDescription?: string },
  lesson: {
    shortDescription?: string;
    contentMarkdown?: string;
    content?: string;
  }
): string {
  const explicit = (lesson.shortDescription ?? "").trim();
  if (explicit) return explicit;

  const body = lesson.contentMarkdown || lesson.content || "";
  const prose = body
    .split("\n")
    .map((line) => line.trim())
    .find(
      (line) =>
        line.length > 0 &&
        !/^(#{1,6}\s|```|\||>|!|-{3,}|\$\$)/.test(line)
    );

  if (prose) {
    return prose
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[*_`#>|]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  return (course.shortDescription ?? "").trim();
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
  if (courseId === "mysql") return mysqlMetadata(lessonId) ?? { title: "Lesson Not Found" };
  const { course, lesson } = getlesson(courseId, lessonId);

  if (!course || !lesson) {
    return { title: "Lesson Not Found" };
  }

  const url = `${siteConfig.url}/courses/${courseId}/${lessonId}`;
  const title = `${lesson.title} — ${course.title}`;
  const summary = lessonSummary(course, lesson);
  const description = summary
    ? `${truncateMetaDescription(
        summary.replace(/[.!?…]+$/, ""),
        120
      )} — Free lesson notes by Amol Shukla.`
    : `${lesson.title} — free lesson notes from ${course.title} by Amol Shukla.`;

  return {
    title,
    description,
    keywords: [
      ...course.category,
      siteConfig.authorName,
      "Amol Shukla notes",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: truncateMetaTitle(title),
      description: truncateMetaDescription(summary, 200),
      url,
      siteName: siteConfig.name,
      type: "article",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: truncateMetaTitle(title),
      description: truncateMetaDescription(summary, 200),
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
  if (courseId === "mysql") return renderMysql(lessonId);
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

  const learningSchema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "@id": `${url}#lesson`,
    name: lesson.title,
    description: lessonSummary(course, lesson),
    url,
    inLanguage: "en",
    isAccessibleForFree: true,
    learningResourceType: "Lesson",
    educationalLevel: course.difficulty,
    author: { "@type": "Person", name: siteConfig.authorName, url: siteConfig.url },
    isPartOf: { "@type": "Course", name: course.title, url: `${siteConfig.url}/courses/${course.id}` },
  };

  // Render the lesson body on the server so crawlers see the full notes
  // without executing JavaScript (the previous client-only render left the
  // article body empty in the initial HTML, which Google treats as thin
  // content and refuses to index).
  const contentHtml = await renderLessonMarkdown(lesson.contentMarkdown || (lesson as any).content || "");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(learningSchema).replace(/</g, "\\u003c") }}
      />
      <LessonNotes contentHtml={contentHtml} />
    </>
  );
}

async function renderMysql(lessonId: string) {
  const base = `${siteConfig.url}/courses/mysql`;
  if (lessonId === "playground") {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "MySQL practice playground",
        url: `${base}/playground`,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any (runs in the browser)",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: 0, priceCurrency: "INR" },
        description: "Run SQL in the browser on the Learning Shop practice database used by the MySQL course.",
        isPartOf: { "@type": "Course", "@id": `${base}#course`, url: base },
      },
      breadcrumbs([
        { name: "Home", url: siteConfig.url },
        { name: "Learning Hub", url: `${siteConfig.url}/courses` },
        { name: "MySQL course", url: base },
        { name: "Playground", url: `${base}/playground` },
      ]),
    ];
    return (
      <>
        {schemas.map((d, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(d) }} />)}
        <MysqlPlayground />
      </>
    );
  }
  const found = getMysqlLesson(lessonId);
  if (!found) notFound();
  const rendered = await renderMysqlLesson(found.lesson);
  const syllabus = MYSQL_SYLLABUS.map((l) => ({
    slug: l.slug,
    shortTitle: l.shortTitle,
    module: l.module,
    minutes: l.minutes,
    questions: l.questions,
    questionIds: MYSQL_LESSONS.find((x) => x.slug === l.slug)!.questions.map((q) => q.id),
  }));
  return (
    <>
      {lessonSchemas(found.lesson, found.index).map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(d) }} />
      ))}
      <MysqlLessonPage lesson={rendered} index={found.index} syllabus={syllabus} modules={MYSQL_MODULES.map((m) => ({ number: m.number, title: m.title }))} />
    </>
  );
}
