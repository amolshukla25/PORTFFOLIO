---
title: "Designing a Website That LLMs Can Actually Read: llms.txt, Schema, and Server-Rendered HTML"
date: "2026-10-31"
description: "How amolshukla.online is structured for AI crawlers: a generated llms.txt, JSON-LD, and server-rendered lesson notes — and where the trade-offs are."
tags: ["AI", "LLMs", "SEO", "AEO", "Next.js"]
coverImage: "/blogs/covers/designing-a-website-that-llms-can-read.webp"
featured: true
---

Search used to mean ten blue links. Now a growing share of technical questions get answered inside a chat window, and the model answering them has to have read your page first. That changes the engineering question from *"will Google index this?"* to *"can a crawler extract meaning from this page without running my JavaScript?"*

This is a walk through how [amolshukla.online](https://www.amolshukla.online) is built for that, what I measured, and which parts are genuinely load-bearing versus decorative.

## What an AI crawler actually does with your page

Retrieval crawlers — GPTBot, ClaudeBot, PerplexityBot, Google-Extended — mostly fetch HTML and extract text. Some render JavaScript, but slowly, inconsistently, and with a budget. A single-page app that paints its article body after hydration looks, to those crawlers, like a page with navigation and no content.

That is the whole vulnerability. It is not about keywords, and it is not about the twelve-item checklist in last year's SEO post. It is: **does the text exist in the first response?**

Three consequences shaped this site:

1. Every lesson body is rendered to HTML on the server before the response leaves the origin.
2. Every page states its own meaning in machine-readable form via JSON-LD.
3. The site publishes an index written for language models, not for browsers.

## Rule one: the content has to be in the HTML

The Learning Hub has 104 lessons, and each one started life as markdown in a config file. The naive implementation renders that markdown in a client component — which works perfectly for humans and leaves the crawler holding an empty `<article>`.

The fix is a server-side remark pipeline. The lesson route converts markdown to HTML during the request (and, for prerendered lessons, at build time), so the full text ships in the initial payload:

```ts
async function renderLessonMarkdown(content: string): Promise<string> {
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(protectMath(content));

  return processed.toString();
}
```

Two details matter here. First, `remark-gfm` means tables, task lists and strikethrough survive the conversion instead of degrading into plain paragraphs. Second, rendered output goes through `dangerouslySetInnerHTML` as a single block, which keeps the HTML flat and easy to chunk.

The trade-off is honest: fewer interactive widgets inside the notes, and the markdown is parsed on every request for dynamic pages. Both are acceptable for lesson content that changes rarely and needs to be readable by everything from a browser to a text-only scraper.

## Rule two: say what the page is, in a format parsers understand

An LLM reading raw HTML sees tags. JSON-LD tells it what those tags mean. The site ships a small graph rather than a single blob:

- **`WebSite` + `Person`** on the homepage, with `sameAs` pointing at the GitHub and X profiles, so the name resolves to one entity.
- **`BlogPosting`** on articles, including `datePublished`, `author`, `keywords` and the cover image.
- **`Course`** on each course hub and **`BreadcrumbList`** on lessons, which encodes hierarchy the navigation menu only implies.

Breadcrumbs are worth including even though Google no longer shows them for every site: they are the cheapest way to hand a parser the path `Home → Learning Hub → Course → Lesson` in structured form. A language model asked "does this site have a Python course?" can answer from the graph without guessing from URL slugs.

## Rule three: publish an `llms.txt`

The [llms.txt proposal](https://llmstxt.org) is a simple idea: a markdown file at `/llms.txt` that summarizes the site and links to its most useful pages, in the same spirit as `robots.txt` but for readers rather than crawlers. It is a convention, not a standard — **no major model provider has publicly committed to consuming it**, so treat it as a cheap hedge, not a ranking factor.

The version on this site follows the shape the proposal suggests: an H1 with the site name, a blockquote summary, then sections of markdown links with one-line descriptions.

```markdown
# Amol Shukla — AI Developer, Trainer & Agentic AI Expert

> Portfolio, technical blog, and 104 free lesson notes covering agentic AI,
> LLMs, prompt engineering, Python and data science.

## Courses
- [AI Tools: LLM & Prompt Engineering Mastery](https://www.amolshukla.online/courses/ai-tools):
  10 modules on how LLMs work, context windows, hallucinations and agentic loops.
```

The interesting engineering problem is not the format — it is **staying correct**. A hand-maintained `llms.txt` on a site with 104 lessons and a growing blog starts decaying the moment you publish the next post. So [`/llms.txt`](/llms.txt) is generated by a route handler from the same configs that render the pages:

```ts
export const dynamic = "force-static";

export async function GET() {
  const courses = COURSES.map((course) => {
    const lessons = course.modules.flatMap((m) => m.lessons);
    return [
      `### ${course.title}`,
      `${course.shortDescription} (${lessons.length} lessons)`,
      `- Course hub: ${siteConfig.url}/courses/${course.id}`,
      ...lessons.map((l) => `- [${l.title}](${siteConfig.url}/courses/${course.id}/${l.id})`),
    ].join("\n");
  });

  return new Response(buildDocument(courses), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
```

Because it is prerendered, Vercel serves it as a static text file. Because it is generated, it cannot list a lesson that does not exist or miss a post I published yesterday. When the sitemap, the RSS feed and `llms.txt` all derive from one source of truth, only one of them can be wrong at a time — and usually none are.

## The parts that do not help

Not everything sold as "AI SEO" earns its place:

- **Keyword stuffing for LLMs.** Retrieval is embedding-based, so a paragraph that repeats a phrase five times helps nothing and reads badly.
- **`ai.txt`, `llm.txt` (singular), and the many variants.** There is one widely described convention and no evidence the others are read. Extra files at the root are clutter.
- **Hidden text for bots.** It is cloaking. Google's spam policies still apply, and model providers increasingly filter it.

The honest summary: LLMs read ordinary, well-structured, fast HTML. Everything in this post is a variation on making your HTML ordinary, well-structured and fast.

## Where the site still gives up reach

Two limits are worth stating instead of hiding:

1. **The authenticated portals are `noindex`.** Student activity logs and batch dashboards should never appear in an answer about the site, so `/admin` and `/student` are disallowed in `robots.txt` *and* carry `robots: { index: false }`. That is a deliberate loss of surface area.
2. **Only Google is verified.** Bing's index feeds several assistants, and submitting a sitemap there — or wiring up IndexNow — would widen coverage with no content work. It is on the list, not done.

## Frequently Asked Questions

### Does adding llms.txt improve rankings?

No. It is not used by Google's ranking systems, and no major model provider has confirmed reading it. It is a low-cost, zero-risk addition that may help some agentic tools navigate a large site; it will not move search positions.

### Do LLM crawlers execute JavaScript?

Some do, unreliably. Googlebot renders JS but on a delayed second pass, and most retrieval crawlers fetch raw HTML. Server-rendering the article body removes the dependency entirely, which is why the lesson pages here convert markdown to HTML on the server.

### How do I stop AI crawlers from indexing my private pages?

Use `robots.txt` for the crawl signal and an explicit `robots: { index: false }` in the page metadata for the indexing signal — plus authentication on the route itself, since neither signal is enforced by a determined scraper.
