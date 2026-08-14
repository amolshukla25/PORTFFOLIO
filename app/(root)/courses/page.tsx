import { Metadata } from "next";

import CoursesExplorer from "@/components/courses/courses-explorer";
import { COURSES } from "@/config/courses";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { truncateMetaTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: pagesConfig.courses.metadata.title,
  },
  description: pagesConfig.courses.metadata.description,
  keywords: [
    ...siteConfig.keywords,
    "Amol Shukla courses",
    "Amol Shukla Learning Hub",
  ],
  alternates: {
    canonical: `${siteConfig.url}/courses`,
  },
  openGraph: {
    title: truncateMetaTitle(pagesConfig.courses.metadata.title),
    description: pagesConfig.courses.metadata.description,
    url: `${siteConfig.url}/courses`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.authorName} Learning Hub`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: truncateMetaTitle(pagesConfig.courses.metadata.title),
    description: pagesConfig.courses.metadata.description,
    images: [siteConfig.ogImage],
    creator: `@${siteConfig.username}`,
  },
};

export default function CoursesPage() {
  // ItemList of Course structured data — helps Google understand the hub
  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.authorName} — Learning Hub`,
    description: pagesConfig.courses.metadata.description,
    url: `${siteConfig.url}/courses`,
    numberOfItems: COURSES.length,
    itemListElement: COURSES.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
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
        },
      },
    })),
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CoursesExplorer />
    </>
  );
}
