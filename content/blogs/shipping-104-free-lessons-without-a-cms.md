---
title: "Shipping 104 Free Lessons Without a CMS: How the Next.js Learning Hub Is Built"
date: "2026-10-29"
description: "Six courses and 104 lessons live as typed config, prerendered at build time. The content architecture, the crawler trade-offs, and how to add a lesson in three steps."
tags: ["Next.js", "Content Architecture", "Education", "React", "Static Site Generation"]
coverImage: "/blogs/covers/shipping-104-free-lessons-without-a-cms.webp"
---

The [Learning Hub](/courses) on this site serves six courses and 104 lesson pages, with no CMS, no headless API, and no database behind the public content. Every lesson lives in a typed TypeScript file next to the course that owns it. This post explains why that works, where it hurts, and what the build does with all of it.

## The problem with a CMS for long-form teaching notes

A CMS earns its keep when non-engineers publish frequently and content structure changes often. A solo-authored technical curriculum is the opposite case:

- The author is the person who writes the code.
- Lessons are long markdown blocks with code samples, tables and formulas.
- The content shape changes rarely — once a course structure is set, it stays set.
- Every edit benefits from being diffable, reviewable and revertable.

A CMS would add a network hop, a content schema to keep in sync, and an editor that mangles code fences. Storing the notes in the repository gives all of that for free: version control, type checking, and a build that fails loudly when a lesson is malformed.

## The content model

One course is an object; modules belong to courses; lessons belong to modules. The types are the contract:

```ts
export interface lesson {
  id: string;
  title: string;
  shortDescription: string;
  duration: string;
  readingTime: string;
  contentMarkdown: string;
  codeSnippet: string;
  codeLanguage: string;
  codeOutput: string;
  visualizationTips?: string[];
  tipsAndTricks?: string[];
  practice?: PracticeExercise[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: lesson[];
}
```

The optional fields are what make the format survive contact with reality. Some lessons are pure prose; others carry a trace-table exercise, a professional tip list, or a hands-on practice block with test cases. The renderer skips what is absent instead of demanding every field for every lesson.

Here is the shape of the hub today:

| Course | Modules | Lessons |
| --- | --- | --- |
| AI Tools: LLM & Prompt Engineering Mastery | 10 | 26 |
| Complete Python Course | 6 | 25 |
| Complete Stock Market Course | 10 | 30 |
| Complete Prompt Engineering Course | 4 | 12 |
| Complete Digital Marketing Course | 2 | 6 |
| Applied Data Science & Generative AI Hub | 5 | 5 |
| **Total** | **37** | **104** |

## Rendering 104 pages at build time

Every lesson URL is known before the first request, so nothing needs to be generated on demand:

```ts
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
```

The build prerenders all 104 lesson pages plus their six course hubs. That produces a flat, predictable URL space:

```
/courses/ai-tools/what-is-an-llm
/courses/python-basics/python-lesson-1
/courses/stock-marketing/51
```

Human-readable slugs where the content deserves one, numeric IDs where a course has thirty sequential lessons — the URL stays stable either way, which is what actually matters for search.

## The markdown pipeline

Each lesson's `contentMarkdown` is converted to HTML on the server with `remark`, `remark-gfm` and `remark-html`. Math delimiters are protected before parsing so `$$…$$` survives into a code fence instead of being eaten by the HTML sanitizer:

```ts
function protectMath(content: string) {
  return content.replace(/\$\$([^$]+)\$\$/g, (_, expr) => "```math\n" + expr + "\n```");
}
```

Rendering on the server matters more than it sounds. The alternative — parse markdown in a client component — ships an empty article to every crawler that does not execute JavaScript, which is most retrieval bots and Googlebot's first pass. Server rendering means the notes are the HTML, and the interactive layer (collapsible syllabus, progress tracking, code playground) hydrates on top of content that already reads correctly.

## Three sources of truth, one input

The sitemap, the lesson pages and the course hub all derive from the same exported array. The sitemap does not hand-list URLs — it walks the courses:

```ts
const lessonRoutes = COURSES.flatMap((course) =>
  course.modules.flatMap((module) =>
    module.lessons.map((lesson) => ({
      url: `${baseUrl}/courses/${course.id}/${lesson.id}`,
      changeFrequency: "monthly",
      priority: 0.6,
    }))
  )
);
```

That single decision prevents the most common rot in content sites: a page nobody links to and a sitemap nobody updates. If a lesson exists, it is in the sitemap. If it is in the sitemap, it renders. The same reasoning drives `/llms.txt`, which is generated from the identical array.

## Adding a lesson in three steps

1. **Append to the module's `lessons` array** in the relevant config file — id, title, duration, markdown body.
2. **Optionally add `practice`, `tipsAndTricks` or `visualizationTips`** if the lesson benefits from them.
3. **Deploy.** The build prerenders the new page, adds it to the sitemap, and includes it in the course hub's syllabus.

No migration, no admin form, no cache invalidation. The trade-off is that publishing requires a deploy — acceptable for content that ships a few times a week rather than a few times an hour.

## Where this architecture gets uncomfortable

Pretending a pattern has no cost is how bad blog posts get written. The real costs:

- **Build time grows with content.** 104 lessons plus 9 posts is comfortable; a thousand lessons would need incremental generation or on-demand revalidation of the heavy pages.
- **No multi-author workflow.** Two people editing the same course config will fight over merge conflicts, and a non-technical contributor cannot touch it at all.
- **The config files get large.** A 30-lesson course is a big file; navigation relies on `id` search rather than reading top to bottom.
- **Content and code share a review process.** Fixing a typo means a commit. That is a feature for an engineer and friction for anyone else.

If any two of those became false, a CMS or MDX-with-CMS hybrid would be the correct move. For one author shipping teaching notes, the trade is clearly worth it.

## What makes it work for search

The architecture is not an SEO trick, but it produces good SEO properties almost accidentally:

- **Unique canonical URL per lesson**, with self-referencing canonicals generated from the same IDs.
- **Full text in the HTML**, so the content is legible without JavaScript.
- **Structured hierarchy** — `BreadcrumbList` on every lesson encodes Home → Learning Hub → Course → Lesson.
- **Course-level schema** on each hub, so a parser can tell what the course contains and how long it takes.
- **Internal linking for free** — every lesson links to its course, and every course lists all its modules.

## Frequently Asked Questions

### Is storing content in TypeScript files better than MDX?

They solve different problems. MDX keeps markdown in its own files and lets you embed components; a typed config array gives you exhaustive checking, cross-linking by ID, and a structure you can iterate over to build sitemaps and navigation. For a hierarchical curriculum, the array wins. For a flat blog, markdown files are simpler.

### How do you handle images in lessons?

Lesson content is text-first by design — code blocks, tables and prose — with covers handled at the blog level. That keeps pages light and keeps the markdown portable to any renderer.

### Can this scale past a few hundred lessons?

The content model scales; the build does not, without changes. Past a few hundred pages, the right move is on-demand generation for lesson routes plus a sitemap that streams from the same data, rather than prerendering everything on every deploy.
