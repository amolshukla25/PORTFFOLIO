---
title: "I Crawled All 131 Pages of My Next.js Portfolio: What the Technical SEO Audit Found"
date: "2026-11-01"
description: "A full crawl of amolshukla.online's 131 URLs, the two real SEO defects it exposed, and the Next.js App Router fixes that resolved them."
tags: ["SEO", "Next.js", "Technical SEO", "Web Development", "Case Study"]
coverImage: "/blogs/covers/i-crawled-all-131-pages-of-my-nextjs-portfolio.webp"
featured: true
---

Every portfolio site owner eventually asks the same question: *is Google actually seeing what I think it is seeing?* The only honest way to answer it is to crawl the site the way a search engine does — fetch every URL in the sitemap, read the raw HTML that comes back before JavaScript runs, and look for the signals that decide whether a page gets indexed, reranked, or quietly dropped from the results.

This is what that crawl of [amolshukla.online](https://www.amolshukla.online) found across **131 URLs**, which two defects were real, and which "problem" turned out to be a false alarm once I checked the response headers. (The sitemap has grown since the crawl; the numbers here are from the audit itself.)

## Why crawl your own site at all

Most SEO advice is about content: write longer posts, target better keywords, add internal links. All true — and all irrelevant if the technical layer is telling Google the wrong thing. A page with a duplicate meta description, a self-canonicalizing filter URL, or a sitemap that contradicts itself will underperform no matter how good the writing is.

The crawl is cheap to run and produces facts instead of opinions. Mine does four things per URL:

1. Fetch the page over HTTP and record the status code.
2. Extract `<title>`, `<meta name="description">`, `<link rel="canonical">`, `og:image`, and `<html lang>`.
3. Count `<h1>` tags — zero means the page has no stated topic, more than one means the outline is ambiguous.
4. Count `application/ld+json` blocks, since structured data is what turns a plain blue link into a richer result.

Then it groups the results by title and description to expose duplication, and compares every canonical against the page's own path.

## The results, before any fixes

| Check | Result |
| --- | --- |
| URLs in `sitemap.xml` | 131 |
| Returning HTTP 200 | 131 |
| Missing `<title>` | 0 |
| Duplicate titles | 0 |
| Missing canonical | 0 |
| Canonical pointing somewhere else | 0 |
| Pages with exactly one `<h1>` | 131 |
| Missing `og:image` | 0 |
| Missing `lang` attribute | 0 |
| Missing meta description | 0 |
| **Descriptions identical across pages** | **1 group of 18 pages** |

That table is the whole point of measuring. Most of the foundation was fine — but "mostly fine" hides the one problem that mattered, and it was invisible without grouping descriptions across URLs.

## Defect 1: eighteen lesson pages shared one blank description

The crawl found eighteen pages whose description was the string `" — Free lesson notes by Amol Shukla."` — a fragment starting with a space and a dash, with nothing before it.

The cause was a template that assumed every lesson had a `shortDescription`:

```ts
description: `${(lesson.shortDescription || "").trim()} — Free lesson notes by Amol Shukla.`,
```

Most lessons do carry a hand-written summary. The stock market modules were written differently — they ship a long markdown body with no summary field at all. So the template happily interpolated an empty string, and eighteen URLs ended up telling Google the same useless thing. Their `og:description` was empty too, which means those links looked broken when shared.

The fix is a fallback chain rather than a single field: use the explicit summary when it exists, otherwise take the first prose line of the lesson body and strip the markdown, otherwise fall back to the course summary.

```ts
function lessonSummary(course, lesson) {
  const explicit = (lesson.shortDescription ?? "").trim();
  if (explicit) return explicit;

  const body = lesson.contentMarkdown || lesson.content || "";
  const prose = body
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line && !/^(#{1,6}\s|```|\||>|!|-{3,}|\$\$)/.test(line));

  if (prose) {
    return prose
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[*_`#>|]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  return (course.shortDescription ?? "").trim();
}
```

Re-running the crawl afterwards: duplicate description groups went from 1 to 0, and every lesson page now has a snippet that actually describes the lesson. You can see the result on any [stock market lesson](/courses/stock-marketing/51), where the description now opens with the dividend analogy from the lesson itself.

## Defect 2: the blog's tag pages were an infinite supply of duplicate URLs

The blog index filters by tag with a query string — `/blogs?tag=AI`. Two things were true at once:

- The page set its canonical to its own URL, including the parameter.
- **Any** tag value returned HTTP 200. `/blogs?tag=zzz-not-a-tag` rendered an empty list with its own unique `<title>`, its own description, and a self-referencing canonical.

That is the worst shape a duplicate-content problem can take, because it is unbounded. A crawler can generate thousands of indexable URLs from one page, all near-identical, all competing with the hub that should be ranking. Google had already picked one of them up — `/blogs?tag=AI` showed up in the index.

The fix is one line of intent: the filtered view is the same content, so it points at the hub.

```ts
alternates: {
  // Tag views are the same list with a filter applied.
  canonical: `${siteConfig.url}/blogs`,
},
```

Tag pages still work for readers and are still shareable; they just consolidate their ranking signals into `/blogs` instead of fragmenting them across every tag string anyone can type into the address bar.

## The problem that turned out not to exist

My first instinct on reading `app/sitemap.ts` was that the `lastModified` values were broken. Most entries were `new Date()`, which is evaluated when the function runs — so I assumed every crawler request produced a sitemap claiming that 118 URLs had *just* changed.

That would be genuinely harmful: Google compares `lastmod` against what it last saw, and once a sitemap lies consistently it starts ignoring the field entirely. So before changing anything, I checked the headers on the live sitemap:

```
HTTP/1.1 200 OK
Content-Type: application/xml
Age: 1434956
X-Vercel-Cache: HIT
```

All 117 `lastmod` tags carried the same deployment timestamp (`2026-10-15T20:51:09`, two values one millisecond apart). Next.js had prerendered the route at build time and Vercel was serving a cached copy. The values were coarse (every lesson claimed the same deploy date), but they were not lying on every request.

The lesson is worth more than the bug would have been: **`new Date()` in source code is a hypothesis. Response headers are evidence.** I would have "fixed" working code and shipped a diff to solve a problem that only existed in my reading of the file.

## What was already correct

It is easy to spend a whole afternoon rebuilding things that work. The crawl confirmed these were already in place, so I left them alone:

- **`metadataBase`** set once in the root layout, so relative `og:image` paths resolve to absolute URLs on every page.
- **Per-page canonicals** on all 131 URLs, each matching its own path.
- **A sitemap generated from the same config** that renders the pages — courses, lessons, projects and experiences cannot drift out of sync with the site.
- **`robots.txt`** allowing everything except `/api/` and the authenticated `/admin` and `/student` portals, with the sitemap declared.
- **Structured data** on the pages where it earns something: `WebSite` and `Person` on the homepage, `BlogPosting` on articles, `Course` and `BreadcrumbList` on course and lesson pages.
- **An RSS feed** at [`/feed.xml`](/feed.xml) built from the same post metadata.

## The checklist I now run after every content change

1. Crawl every sitemap URL and assert all return 200.
2. Diff titles, descriptions and canonicals to catch copies of the same template leaking empty fields.
3. Confirm the new URL appears in `sitemap.xml` and `feed.xml` without a manual edit.
4. Check the canonical on filter and search views points at the hub, not at itself.
5. Verify `lastmod` values in production headers, not in source.

None of it takes more than a couple of minutes, and all of it produces facts you can act on. A portfolio with 131 pages does not need an SEO consultant; it needs a crawl loop and the discipline to check the evidence before rewriting the code.

## Frequently Asked Questions

### How many URLs should a personal site's sitemap contain?

However many pages actually exist and should rank — no more. Mine has 131: six course hubs, 104 lesson pages, four blog posts, four projects, five experience entries and the core pages. If the number keeps growing without new content, something is generating near-duplicate URLs.

### Should filtered or tagged blog pages be indexed?

Usually not as separate pages. They add no content the hub lacks, and any user-supplied filter value multiplies them. Keeping them crawlable but canonicalized to the hub preserves sharing and UX without splitting ranking signals.

### Does a missing meta description hurt rankings?

It does not directly, but it costs you control over the click. Google rewrites or generates snippets when a description is absent or duplicated, and a generic empty snippet makes a link easy to skip. Fixing 18 of them was a ten-minute change with a measurable effect on how those pages appear in results.
