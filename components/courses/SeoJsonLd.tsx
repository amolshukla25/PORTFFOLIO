import React from "react";
import { INSTRUCTOR_AMOL } from "@/lib/courses-data";

interface SeoJsonLdProps {
  type?: "Course" | "Article" | "CollectionPage";
  title: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; item: string }>;
  courseData?: {
    courseName: string;
    courseCode?: string;
    description: string;
    providerName?: string;
    timeRequired?: string;
  };
}

export default function SeoJsonLd({
  type = "Course",
  title,
  description,
  url,
  breadcrumbs,
  courseData,
}: SeoJsonLdProps) {
  const schemaList: object[] = [];

  // Person Schema for Amol Shukla
  schemaList.push({
    "@context": "https://schema.org",
    "@type": "Person",
    name: INSTRUCTOR_AMOL.name,
    jobTitle: INSTRUCTOR_AMOL.role,
    description: INSTRUCTOR_AMOL.bio,
    sameAs: [
      INSTRUCTOR_AMOL.social.github,
      INSTRUCTOR_AMOL.social.linkedin,
    ],
  });

  // Breadcrumb Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemaList.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: b.name,
        item: b.item,
      })),
    });
  }

  // Course Schema
  if (type === "Course" && courseData) {
    schemaList.push({
      "@context": "https://schema.org",
      "@type": "Course",
      name: courseData.courseName,
      description: courseData.description,
      timeRequired: courseData.timeRequired || "PT8H",
      provider: {
        "@type": "Person",
        name: INSTRUCTOR_AMOL.name,
        url: url,
      },
      author: {
        "@type": "Person",
        name: INSTRUCTOR_AMOL.name,
      },
      educationalLevel: "All Levels",
      inLanguage: "en",
    });
  } else if (type === "Article") {
    schemaList.push({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: title,
      description: description,
      author: {
        "@type": "Person",
        name: INSTRUCTOR_AMOL.name,
      },
      publisher: {
        "@type": "Person",
        name: INSTRUCTOR_AMOL.name,
      },
      mainEntityOfPage: url,
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaList),
      }}
    />
  );
}
