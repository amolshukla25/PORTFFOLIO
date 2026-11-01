import { siteConfig } from "@/config/site";
import { MYSQL_COURSE_FACTS, MYSQL_MODULES, MYSQL_SYLLABUS } from "@/config/mysql/syllabus";
import type { MysqlLesson } from "@/config/mysql/types";
import { estimateMinutes } from "@/config/mysql/estimate";

/** Bump when lesson content changes materially (freshness signal for search and answer engines). */
export const MYSQL_CONTENT_UPDATED = "2026-11-02";
export const MYSQL_CONTENT_PUBLISHED = "2026-08-06";

const COURSE_URL = `${siteConfig.url}/courses/mysql`;
const COURSE_NAME = "MySQL: Practical SQL from Beginner to Professional";

const person = {
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.authorName,
  url: siteConfig.url,
  jobTitle: "AI Developer & Trainer",
  sameAs: [siteConfig.links.github, siteConfig.links.twitter],
};

export const iso = (minutes: number) => `PT${Math.floor(minutes / 60) ? `${Math.floor(minutes / 60)}H` : ""}${minutes % 60 ? `${minutes % 60}M` : ""}` || "PT0M";

export const MYSQL_COURSE_FAQ = [
  { q: "Is this MySQL course free?", a: `Yes. All ${MYSQL_COURSE_FACTS.lessons} lessons, ${MYSQL_COURSE_FACTS.problems} practice problems, quizzes and the practice databases are free to use, with no sign-up required.` },
  { q: "Do I need to install MySQL to start?", a: "No. Every lesson has a practice editor that runs in your browser with the course database already loaded. Lesson 2 shows how to install MySQL 8.4 and Workbench when you are ready; employers expect you to know the real tool." },
  { q: "How long does the course take?", a: `About ${MYSQL_COURSE_FACTS.hours} hours in total: reading, worked examples, guided practice, ${MYSQL_COURSE_FACTS.problems} practice problems, quizzes and a 3-hour capstone. Most learners finish in 3–5 weeks at 5–6 hours a week.` },
  { q: "Which MySQL version does the course use?", a: "MySQL 8.0.16 or newer, with 8.4 LTS recommended. Window functions, CTEs and enforced CHECK constraints all need MySQL 8." },
  { q: "Is this course enough for a data analyst job?", a: "It covers the SQL most data analyst roles test: filtering, aggregation, joins, subqueries, CTEs, window functions and data quality, finishing with a portfolio capstone. Pair it with a spreadsheet or BI tool and practise explaining your results." },
  { q: "How are the practice answers checked?", a: "Your query and the reference answer run on fresh copies of the same data in your browser, and the results are compared row by row. The core lessons' reference answers were also run on MySQL 8 and show the expected MySQL output; the six real-life modules are checked the same way, against 2,000-row databases that are already selected when each problem opens." },
];

export const MYSQL_OUTCOMES = [
  "Write SELECT queries that filter, sort, transform and summarise data",
  "Join several tables correctly and avoid double counting",
  "Use subqueries, CTEs, UNION and window functions for real reports",
  "Design tables with keys and constraints, and change data safely in transactions",
  "Read EXPLAIN and add the right index",
  "Deliver an audited sales report with a README — a portfolio piece",
];

const teachesAll = ["SQL", "MySQL", "SELECT", "WHERE", "GROUP BY", "HAVING", "JOIN", "Subqueries", "Common table expressions", "UNION", "Window functions", "CREATE TABLE", "Constraints", "Transactions", "Views", "Indexes", "EXPLAIN", "Data quality"];

export function datasetSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": `${COURSE_URL}#dataset`,
    name: "Learning Shop practice database for MySQL",
    description:
      "A fictional Indian retail database for learning SQL: customers, products, orders and order_items. The small version has 6 customers, 6 products, 8 orders and 14 order lines so every answer can be checked by eye; the large version has 300 customers, 40 products and 4,000 orders from January 2025 to June 2026 for window functions, indexing and EXPLAIN. Delivered as MySQL 8 .sql scripts.",
    url: COURSE_URL,
    isAccessibleForFree: true,
    creator: person,
    keywords: ["MySQL sample database", "SQL practice dataset", "retail orders dataset", "SQL exercises"],
    temporalCoverage: "2025-01-01/2026-06-30",
    variableMeasured: ["customer city", "product category", "price", "order date", "order status", "quantity", "unit price"],
    distribution: [
      { "@type": "DataDownload", name: "Small shop (portfolio_retail_lab)", encodingFormat: "application/sql", contentUrl: `${siteConfig.url}/downloads/mysql-retail-lab.sql` },
      { "@type": "DataDownload", name: "Reset script for the small shop", encodingFormat: "application/sql", contentUrl: `${siteConfig.url}/downloads/mysql-retail-lab-reset.sql` },
      { "@type": "DataDownload", name: "Large shop (portfolio_retail_large)", encodingFormat: "application/sql", contentUrl: `${siteConfig.url}/downloads/mysql-retail-large.sql` },
      { "@type": "DataDownload", name: "Hospital practice database", encodingFormat: "application/sql", contentUrl: `${siteConfig.url}/downloads/mysql-reallife-hospital.sql` },
      { "@type": "DataDownload", name: "Retail bank practice database", encodingFormat: "application/sql", contentUrl: `${siteConfig.url}/downloads/mysql-reallife-bank.sql` },
      { "@type": "DataDownload", name: "E-commerce marketplace practice database", encodingFormat: "application/sql", contentUrl: `${siteConfig.url}/downloads/mysql-reallife-ecommerce.sql` },
      { "@type": "DataDownload", name: "College records practice database", encodingFormat: "application/sql", contentUrl: `${siteConfig.url}/downloads/mysql-reallife-college.sql` },
      { "@type": "DataDownload", name: "Ride-hailing practice database", encodingFormat: "application/sql", contentUrl: `${siteConfig.url}/downloads/mysql-reallife-rides.sql` },
      { "@type": "DataDownload", name: "Streaming service practice database", encodingFormat: "application/sql", contentUrl: `${siteConfig.url}/downloads/mysql-reallife-streaming.sql` },
    ],
  };
}

export function courseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${COURSE_URL}#course`,
    name: COURSE_NAME,
    description: `Free MySQL course from beginner to professional: ${MYSQL_COURSE_FACTS.lessons} lessons, ${MYSQL_COURSE_FACTS.problems} practice problems with automatic checking in the browser, quizzes, real MySQL 8 output for every example, and an audited capstone report.`,
    url: COURSE_URL,
    inLanguage: "en",
    isAccessibleForFree: true,
    educationalLevel: "Beginner",
    coursePrerequisites: "None. No prior SQL or programming experience needed.",
    teaches: teachesAll,
    timeRequired: iso(MYSQL_COURSE_FACTS.minutes),
    dateModified: MYSQL_CONTENT_UPDATED,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    provider: { "@type": "Organization", name: siteConfig.authorName, url: siteConfig.url },
    author: person,
    offers: { "@type": "Offer", category: "Free", price: 0, priceCurrency: "INR", availability: "https://schema.org/InStock", url: COURSE_URL },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: iso(MYSQL_COURSE_FACTS.minutes),
      instructor: person,
    },
    syllabusSections: MYSQL_MODULES.map((m) => ({
      "@type": "Syllabus",
      name: `Module ${m.number}: ${m.title}`,
      description: m.description,
      timeRequired: iso(MYSQL_SYLLABUS.filter((l) => l.module === m.number).reduce((s, l) => s + l.minutes, 0)),
    })),
    hasPart: MYSQL_SYLLABUS.map((l, i) => ({
      "@type": "LearningResource",
      position: i + 1,
      name: l.title,
      description: l.summary,
      url: `${COURSE_URL}/${l.slug}`,
      learningResourceType: "Lesson",
      timeRequired: iso(l.minutes),
    })),
    workExample: { "@id": `${COURSE_URL}#dataset` },
  };
}

export function faqSchema(faq: { q: string; a: string }[], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}

export function lessonSchemas(l: MysqlLesson, index: number) {
  const url = `${COURSE_URL}/${l.slug}`;
  const module = MYSQL_MODULES.find((m) => m.number === l.module)!;
  return [
    {
      "@context": "https://schema.org",
      "@type": ["LearningResource", "TechArticle"],
      "@id": `${url}#lesson`,
      headline: l.title,
      name: l.title,
      description: l.summary,
      abstract: l.quickAnswer.answer,
      url,
      mainEntityOfPage: url,
      inLanguage: "en",
      isAccessibleForFree: true,
      learningResourceType: "Lesson",
      educationalLevel: index < 7 ? "Beginner" : index < 12 ? "Intermediate" : "Advanced",
      teaches: l.teaches,
      keywords: l.teaches.join(", "),
      timeRequired: iso(estimateMinutes(l)),
      position: index + 1,
      datePublished: MYSQL_CONTENT_PUBLISHED,
      dateModified: MYSQL_CONTENT_UPDATED,
      author: person,
      publisher: { "@type": "Organization", name: siteConfig.authorName, url: siteConfig.url },
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      about: [{ "@type": "Thing", name: "MySQL", sameAs: "https://en.wikipedia.org/wiki/MySQL" }, { "@type": "Thing", name: "SQL", sameAs: "https://en.wikipedia.org/wiki/SQL" }],
      isPartOf: { "@type": "Course", "@id": `${COURSE_URL}#course`, name: COURSE_NAME, url: COURSE_URL },
      educationalAlignment: { "@type": "AlignmentObject", alignmentType: "educationalSubject", targetName: `Module ${module.number}: ${module.title}` },
      hasPart: {
        "@type": "Quiz",
        name: `${l.shortTitle} — quiz`,
        about: l.teaches.slice(0, 3).map((t) => ({ "@type": "Thing", name: t })),
        educationalLevel: "Beginner",
      },
    },
    breadcrumbs([
      { name: "Home", url: siteConfig.url },
      { name: "Learning Hub", url: `${siteConfig.url}/courses` },
      { name: "MySQL course", url: COURSE_URL },
      { name: l.shortTitle, url },
    ]),
    faqSchema([{ q: l.quickAnswer.question, a: l.quickAnswer.answer }, ...l.faq], url),
  ];
}

export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
