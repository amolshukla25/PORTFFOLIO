import { COURSES } from "@/config/courses";
import { experiences } from "@/config/experience";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { getAllBlogsMeta } from "@/lib/blogs";

/**
 * `/llms.txt` — a markdown index of the site for language models and agentic
 * crawlers, following the convention described at https://llmstxt.org:
 * an H1 name, a blockquote summary, then sections of links with short
 * descriptions.
 *
 * It is generated from the same configs that render the pages, so it can never
 * list a lesson that no longer exists or miss a post published yesterday. That
 * is the whole reason it lives in code instead of public/llms.txt.
 */

export const dynamic = "force-static";

const SITE = siteConfig.url;

function link(title: string, url: string, description?: string): string {
  return description ? `- [${title}](${url}): ${description}` : `- [${title}](${url})`;
}

function courseSection(course: (typeof COURSES)[number]): string[] {
  const lessons = course.modules.flatMap((module) => module.lessons);
  const lines = [
    `### ${course.title}`,
    "",
    `${course.shortDescription} ${course.modules.length} modules, ${lessons.length} lessons, ${course.duration}. Difficulty: ${course.difficulty}.`,
    "",
    link("Course hub", `${SITE}/courses/${course.id}`, "Syllabus, module list and every lesson in one page."),
  ];

  for (const module of course.modules) {
    lines.push("");
    lines.push(`#### ${module.title}`);
    lines.push("");
    for (const lesson of module.lessons) {
      const summary = (lesson.shortDescription ?? "").trim();
      lines.push(
        link(
          lesson.title,
          `${SITE}/courses/${course.id}/${lesson.id}`,
          summary || undefined
        )
      );
    }
  }

  return lines;
}

export async function GET() {
  const blogs = getAllBlogsMeta();
  const totalLessons = COURSES.reduce(
    (total, course) =>
      total + course.modules.reduce((sum, module) => sum + module.lessons.length, 0),
    0
  );

  const body: string[] = [
    `# ${siteConfig.authorName} — AI Developer, Trainer & Agentic AI Expert`,
    "",
    `> ${siteConfig.description}`,
    "",
    `This is the personal site and free learning library of ${siteConfig.authorName}. It holds a portfolio (projects, experience, skills, open-source contributions), a technical blog, and ${COURSES.length} free courses covering ${totalLessons} lessons on agentic AI, large language models, prompt engineering, Python, MySQL and SQL, NumPy, pandas, Matplotlib, seaborn, Plotly, data science, digital marketing and stock market fundamentals. Everything on the site is free to read; no lesson is gated behind an account.`,
    "",
    "Content is written in English (`inLanguage: en`) and served worldwide. Lesson notes are rendered to HTML on the server, so the full text is available without executing JavaScript. Structured data (JSON-LD) describes the person, each article, each course and the site hierarchy.",
    "",
    "## Core pages",
    "",
    link("Home", SITE, "Profile, featured projects, latest writing and course highlights."),
    link("Skills", `${SITE}/skills`, "AI, agentic AI, Python and full-stack engineering skill set."),
    link("Projects", `${SITE}/projects`, "Personal and professional software and AI projects."),
    link("Experience", `${SITE}/experience`, "Professional timeline: AI training, development and engineering roles."),
    link("Contributions", `${SITE}/contributions`, "Open-source work and community contributions."),
    link("Contact", `${SITE}/contact`, "How to get in touch about AI, training and software work."),
    link("Learning Hub", `${SITE}/courses`, `Catalog of all ${COURSES.length} courses and ${totalLessons} lessons.`),
    link("Blog", `${SITE}/blogs`, "Long-form articles on LLMs, RAG, Python and web engineering."),
    "",
    "## About",
    "",
    `${siteConfig.authorName} is an AI Developer, Trainer and Agentic AI Expert. He builds agentic AI systems (ReAct-style agent pipelines, tool-calling systems and production LLM workflows), trains developers and data professionals on Python, machine learning and generative AI, and ships production software with Python, FastAPI, Next.js, React and TypeScript.`,
    "",
    "## Courses",
    "",
    "Each course hub links to every lesson. Lesson URLs follow `/courses/{course}/{lesson}`.",
    "",
  ];

  for (const course of COURSES) {
    body.push(...courseSection(course), "");
  }

  body.push(    "## Articles", "");
  for (const blog of blogs) {
    body.push(
      link(
        blog.title,
        `${SITE}/blogs/${blog.slug}`,
        `${blog.description} (${blog.date}; tags: ${blog.tags.join(", ")})`
      )
    );
  }

  body.push("", "## Projects", "");
  for (const project of Projects) {
    const details = project.descriptionDetails?.bullets?.slice(0, 2).join(" ") ?? "";
    body.push(
      link(
        project.companyName,
        `${SITE}/projects/${project.id}`,
        [project.shortDescription, details].filter(Boolean).join(" ")
      )
    );
  }

  body.push("", "## Experience", "");
  for (const role of experiences) {
    const end = role.endDate === "Present" ? "present" : role.endDate.getFullYear();
    body.push(
      link(
        `${role.position} — ${role.company}`,
        `${SITE}/experience/${role.id}`,
        `${role.location}, ${role.startDate.getFullYear()}–${end}. ${role.description[0] ?? ""}`.trim()
      )
    );
  }

  body.push(
    "",
    "## Practice datasets",
    "",
    link("MySQL retail practice database", `${SITE}/downloads/mysql-retail-lab.sql`, "MySQL 8 seed schema and fictional retail data for the separate SQL course. No DROP statements."),
    link("Data-science sales CSV", `${SITE}/downloads/data-science-sales.csv`, "Twelve fictional orders for NumPy, pandas and visualisation workshops; includes returned orders."),
    "",
    "## Optional",
    "",
    link("RSS feed", `${SITE}/feed.xml`, "Newest articles first, updated on publish."),
    link("Sitemap", `${SITE}/sitemap.xml`, "Every indexable URL on the site."),
    link("llms.txt", `${SITE}/llms.txt`, "This file."),
    ""
  );

  return new Response(body.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
