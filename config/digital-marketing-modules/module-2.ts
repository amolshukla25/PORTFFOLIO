import type { Module } from "../courses";

export const MODULE_2: Module = {
  id: "module-2-seo-fundamentals",
  title: "Module 2: Search Engine Optimization (SEO) Fundamentals",
  description:
    "Learn how search engines work and master the fundamentals of SEO to drive organic traffic to your website.",
  lessons: [
    {
      id: "how-search-engines-work",
      title: "Lesson 4: How Search Engines Work",
      shortDescription:
        "Understanding crawling, indexing, and ranking — the three pillars of search engine functionality.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### The Search Engine Process

Search engines like Google have one job: **deliver the most relevant results for any query in milliseconds**. Understanding how they work is the foundation of SEO.

#### The Three Pillars of Search

| Pillar | What It Means | SEO Implication |
|---|---|---|
| **Crawling** | Search engine bots (spiders) discover pages by following links | Your site must be crawlable with no blocking errors |
| **Indexing** | Pages are analyzed and stored in a massive database | Your content must be understandable and unique |
| **Ranking** | Results are ordered by relevance and quality signals | Your page must be the best answer for the query |

> **Mental model:** Think of Google as a giant library. Crawling is the librarian discovering new books, indexing is cataloging them, and ranking is deciding which book to put on the front shelf for each question.

#### How Google Crawls Your Website

1. **Discovery**: Google finds your page through a link from another page, your sitemap, or Search Console.
2. **Rendering**: Googlebot downloads and renders your HTML, CSS, and JavaScript.
3. **Crawling**: Googlebot follows all links on the page to discover more pages.
4. **Processing**: Content is analyzed for topic, quality, and freshness.

**Key factors that affect crawling:**
- Site speed (faster = more pages crawled)
- Internal linking structure
- XML sitemap
- Robots.txt file
- No broken links or redirect chains

#### The Indexing Process

Once a page is crawled, Google decides whether to **index** it (add it to the database) or **exclude** it.

**Pages that get indexed:**
- Unique, valuable content
- Properly structured HTML
- No "noindex" tags
- Not blocked by robots.txt

**Pages that often get excluded:**
- Duplicate content
- Thin content (very little useful information)
- Pages blocked by robots.txt or noindex tags
- Pages with crawl errors

#### How Ranking Works

Google uses **over 200 ranking factors** to determine where your page appears. The most important categories:

| Category | Key Factors | Weight |
|---|---|---|
| **Content Quality** | Relevance, depth, freshness, expertise | High |
| **Backlinks** | Quantity and quality of links from other sites | High |
| **User Experience** | Page speed, mobile-friendliness, Core Web Vitals | Medium-High |
| **Technical SEO** | Site structure, schema markup, HTTPS | Medium |
| **User Signals** | Click-through rate, bounce rate, time on page | Medium |

> **Key insight:** Google's mission is to organize the world's information and make it universally accessible. If your content genuinely helps users, you're already aligned with what Google wants.

#### Common Mistakes to Avoid

- **Mistake:** Blocking important pages in robots.txt — **Fix:** Always check what's being blocked.
- **Mistake:** Ignoring your XML sitemap — **Fix:** Submit it to Google Search Console and keep it updated.
- **Mistake:** Creating thin, low-quality content — **Fix:** Focus on comprehensive, helpful content.
- **Mistake:** Not monitoring crawl errors — **Fix:** Check Search Console regularly for issues.

### Professional Tips & Tricks

- Use Google Search Console to monitor how Google sees your site.
- Check your crawl budget — large sites need to prioritize which pages get crawled.
- Make sure your most important pages are within 3 clicks of the homepage.
- Use tools like Screaming Frog to audit your site's technical SEO.

---

### Key Takeaways

- Search engines work through crawling, indexing, and ranking.
- Your site must be crawlable and indexable to appear in search results.
- Google uses over 200 ranking factors, with content quality and backlinks being the most important.
- Technical SEO ensures search engines can efficiently access and understand your content.

**Next up:** Keyword research — finding the right terms to target for maximum traffic.`,
      codeLanguage: "text",
      codeSnippet: `# SEO Fundamentals Cheat Sheet

## The 3 Pillars of Search Engines:
1. Crawling - Discovery of pages by search engine bots
2. Indexing - Storing pages in the search engine database
3. Ranking - Ordering results by relevance and quality

## Key Technical SEO Checklist:
- [ ] XML sitemap submitted to Search Console
- [ ] Robots.txt not blocking important pages
- [ ] No broken links (404 errors)
- [ ] HTTPS enabled
- [ ] Mobile-friendly design
- [ ] Fast page load speed (< 3 seconds)
- [ ] Proper canonical tags
- [ ] Structured data/Schema markup

## Google's Top Ranking Factors:
1. High-quality, relevant content
2. Backlinks from authoritative sites
3. Page speed and Core Web Vitals
4. Mobile-friendliness
5. User engagement signals
6. Domain authority
7. HTTPS security`,
      codeOutput: `SEO Fundamentals Cheat Sheet

## The 3 Pillars of Search Engines:
1. Crawling - Discovery of pages by search engine bots
2. Indexing - Storing pages in the search engine database
3. Ranking - Ordering results by relevance and quality

## Key Technical SEO Checklist:
- [ ] XML sitemap submitted to Search Console
- [ ] Robots.txt not blocking important pages
- [ ] No broken links (404 errors)
- [ ] HTTPS enabled
- [ ] Mobile-friendly design
- [ ] Fast page load speed (< 3 seconds)
- [ ] Proper canonical tags
- [ ] Structured data/Schema markup

## Google's Top Ranking Factors:
1. High-quality, relevant content
2. Backlinks from authoritative sites
3. Page speed and Core Web Vitals
4. Mobile-friendliness
5. User engagement signals
6. Domain authority
7. HTTPS security`,
      visualizationTips: [
        "Draw a flowchart: URL → Crawler → Rendering → Indexing → Ranking → Search Results.",
        "Create a mind map of Google's ranking factors organized by category.",
        "Use Google's Mobile-Friendly Test and PageSpeed Insights to see how Google evaluates your site.",
      ],
      tipsAndTricks: [
        "Always check Google Search Console for crawl errors — they're quick wins to fix.",
        "Internal linking helps Google understand your site structure and distributes page authority.",
        "Fresh, updated content gets crawled more frequently — keep your best pages current.",
      ],
      practice: [
        {
          id: "practice-crawl-audit",
          title: "Crawl Audit Exercise",
          difficulty: "Medium",
          task: "Using Google Search Console (or a free tool like Screaming Frog), identify 3 technical SEO issues on a website of your choice.",
          hint: "Look for crawl errors, broken links, or missing meta tags.",
          solution: `Example audit findings:
1. 12 pages returning 404 errors (broken links)
2. Missing meta descriptions on 25% of pages
3. 5 pages blocked by robots.txt that should be indexed`,
        },
        {
          id: "practice-ranking-factors",
          title: "Ranking Factors Analysis",
          difficulty: "Easy",
          task: "Pick a search query (e.g., 'best coffee shops in Seattle') and analyze the top 3 results. What makes them rank well?",
          hint: "Consider content quality, backlinks, user experience, and technical factors.",
          solution: `Analysis of "best coffee shops in Seattle":
Result 1 (Yelp):
- High domain authority
- User-generated reviews and ratings
- Location-specific content
- Fast loading, mobile-friendly

Result 2 (Blog post):
- Comprehensive list with detailed descriptions
- Original photos and personal experience
- Strong internal linking
- Updated regularly`,
        },
      ],
    },
    {
      id: "keyword-research",
      title: "Lesson 5: Keyword Research Mastery",
      shortDescription:
        "Find the right keywords to target using research tools and data-driven strategies.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Why Keyword Research is Critical

Keyword research is the foundation of SEO — it tells you **what your audience is actually searching for**. Without it, you're creating content blind, hoping someone will find it.

#### Types of Keywords

| Keyword Type | Example | Search Volume | Competition | Conversion Potential |
|---|---|---|---|---|
| **Head Terms** | "shoes" | Very High | Very High | Low |
| **Body Terms** | "running shoes" | High | High | Medium |
| **Long-tail Keywords** | "best running shoes for flat feet 2026" | Low | Low | High |
| **Question Keywords** | "how to choose running shoes" | Medium | Medium | Medium |

> **Mental model:** Think of keywords as fishing spots — head terms are crowded lakes where everyone fishes (hard to catch anything), while long-tail keywords are quiet streams with hungry fish (easier to catch exactly what you want).

#### The Keyword Research Process

**Step 1: Brainstorm Seed Keywords**
- What does your business offer?
- What problems do you solve?
- What would your customers search for?

**Step 2: Expand with Tools**
- Google Keyword Planner (free)
- Ubersuggest (freemium)
- Ahrefs/SEMrush (paid)
- AnswerThePublic (free)

**Step 3: Analyze & Prioritize**
- Search volume (how many people search)
- Keyword difficulty (how hard to rank)
- Search intent (what do they want?)
- Business relevance (does it matter to you?)

**Step 4: Map Keywords to Content**
- Each page should target 1 primary keyword
- Include related secondary keywords
- Match the content format to search intent

#### Search Intent: The Missing Piece

| Intent Type | What the User Wants | Content Format | Example Query |
|---|---|---|---|
| **Informational** | Learn something | Blog post, guide, tutorial | "how to tie a tie" |
| **Navigational** | Find a specific website | Homepage, landing page | "facebook login" |
| **Commercial** | Research before buying | Comparison, review | "best laptops 2026" |
| **Transactional** | Buy something now | Product page, checkout | "buy iphone 16 pro" |

> **Critical insight:** Matching your content to search intent is more important than targeting the "perfect" keyword. Google prioritizes intent match above almost everything else.

#### Keyword Research Tools Comparison

| Tool | Cost | Best For | Key Features |
|---|---|---|---|
| Google Keyword Planner | Free | Beginners | Official Google data |
| Ubersuggest | Freemium | Small businesses | Easy to use, good suggestions |
| AnswerThePublic | Free | Content ideas | Question-based keywords |
| Ahrefs | $99+/mo | Professionals | Comprehensive data, competitor analysis |
| SEMrush | $119+/mo | Agencies | All-in-one marketing toolkit |

#### Common Mistakes to Avoid

- **Mistake:** Only targeting high-volume keywords — **Fix:** Long-tail keywords often convert better.
- **Mistake:** Ignoring search intent — **Fix:** Always analyze the top results for your target keyword.
- **Mistake:** Keyword stuffing — **Fix:** Write naturally; keywords should flow organically.
- **Mistake:** Not tracking keyword rankings — **Fix:** Monitor your positions monthly to see what's working.

### Professional Tips & Tricks

- Start with long-tail keywords — they're easier to rank for and convert better.
- Analyze competitor keywords to find opportunities you're missing.
- Group keywords by topic clusters — it helps build topical authority.
- Update keyword research quarterly — trends and competition change.

---

### Key Takeaways

- Keyword research reveals what your audience is actually searching for.
- Long-tail keywords often have higher conversion potential than head terms.
- Search intent must match your content format for SEO success.
- Use a combination of free and paid tools for comprehensive research.
- Group keywords into topic clusters for better site structure.

**Next up:** On-page SEO — optimizing your content for search engines and users.`,
      codeLanguage: "text",
      codeSnippet: `# Keyword Research Framework

## Step 1: Seed Keywords
For a coffee shop business:
- coffee shop
- specialty coffee
- espresso drinks
- coffee beans

## Step 2: Keyword Expansion
Using tools, expand to:
- "best coffee shops near me" (5,400/mo)
- "how to make pour over coffee" (8,100/mo)
- "single origin coffee beans" (2,900/mo)
- "coffee shop ambiance" (1,600/mo)

## Step 3: Keyword Analysis

| Keyword | Volume | Difficulty | Intent | Priority |
|---------|--------|------------|--------|----------|
| best coffee shops near me | 5,400 | 45 | Commercial | High |
| how to make pour over coffee | 8,100 | 32 | Informational | Medium |
| single origin coffee beans | 2,900 | 28 | Commercial | High |
| coffee shop ambiance | 1,600 | 22 | Informational | Low |

## Step 4: Content Mapping
- Homepage: "best coffee shop [city]"
- Blog: "how to make pour over coffee"
- Product page: "single origin coffee beans"
- About page: "coffee shop ambiance"`,
      codeOutput: `Keyword Research Framework

## Step 1: Seed Keywords
For a coffee shop business:
- coffee shop
- specialty coffee
- espresso drinks
- coffee beans

## Step 2: Keyword Expansion
Using tools, expand to:
- "best coffee shops near me" (5,400/mo)
- "how to make pour over coffee" (8,100/mo)
- "single origin coffee beans" (2,900/mo)
- "coffee shop ambiance" (1,600/mo)

## Step 3: Keyword Analysis

| Keyword | Volume | Difficulty | Intent | Priority |
|---------|--------|------------|--------|----------|
| best coffee shops near me | 5,400 | 45 | Commercial | High |
| how to make pour over coffee | 8,100 | 32 | Informational | Medium |
| single origin coffee beans | 2,900 | 28 | Commercial | High |
| coffee shop ambiance | 1,600 | 22 | Informational | Low |

## Step 4: Content Mapping
- Homepage: "best coffee shop [city]"
- Blog: "how to make pour over coffee"
- Product page: "single origin coffee beans"
- About page: "coffee shop ambiance"`,
      visualizationTips: [
        "Create a keyword mind map with seed keywords in the center and expanded keywords branching out.",
        "Use a spreadsheet to track keywords, volume, difficulty, and intent side by side.",
        "Analyze the top 10 results for your target keyword to understand what Google considers 'best'.",
      ],
      tipsAndTricks: [
        "Start with keywords where difficulty is under 30 — they're easier to rank for quickly.",
        "AnswerThePublic is gold for finding question-based keywords.",
        "Check what your competitors rank for — there's no point reinventing the wheel.",
      ],
      practice: [
        {
          id: "practice-keyword-research",
          title: "Keyword Research Exercise",
          difficulty: "Medium",
          task: "Perform keyword research for a fitness coaching business. Find 10 keywords with varying difficulty levels and categorize them by intent.",
          hint: "Use Google's autocomplete and free tools like Ubersuggest.",
          solution: `Fitness coaching keywords:
Informational:
- "how to lose weight fast" (high volume)
- "beginner workout routine" (medium volume)
- "protein vs carbs for muscle" (low volume)

Commercial:
- "best fitness coaching apps" (medium volume)
- "online personal trainer cost" (medium volume)
- "fitness coaching reviews" (low volume)

Transactional:
- "hire personal trainer online" (low volume)
- "buy workout program" (low volume)`,
        },
        {
          id: "practice-intent-matching",
          title: "Search Intent Analysis",
          difficulty: "Easy",
          task: "For the keyword 'running shoes', analyze the top 5 Google results and categorize each by the type of content it provides.",
          hint: "Is it a product page, blog post, comparison, or something else?",
          solution: `Top results for "running shoes":
1. Nike.com - Product category page (Transactional)
2. Runner's World - "Best Running Shoes 2026" (Commercial)
3. Wiki - "Running shoe" article (Informational)
4. REI - Buying guide (Commercial/Informational)
5. Amazon - Product listings (Transactional)

Insight: Mixed intent - Google shows both commercial and informational content.`,
        },
      ],
    },
    {
      id: "on-page-seo",
      title: "Lesson 6: On-Page SEO Optimization",
      shortDescription:
        "Optimize your content, meta tags, headings, and internal links for maximum search visibility.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### What is On-Page SEO?

On-page SEO is the practice of optimizing **individual web pages** to rank higher and earn more relevant traffic. Unlike off-page SEO (which focuses on external signals like backlinks), on-page SEO is entirely within your control.

#### The On-Page SEO Checklist

| Element | Best Practice | Why It Matters |
|---|---|---|
| **Title Tag** | 50-60 characters, include primary keyword | First thing users see in search results |
| **Meta Description** | 150-160 characters, compelling call-to-action | Influences click-through rate |
| **H1 Tag** | One per page, include primary keyword | Signals the main topic to Google |
| **URL Structure** | Short, descriptive, include keyword | Helps users and search engines |
| **Header Tags (H2-H6)** | Organize content logically with keywords | Improves readability and SEO |
| **Image Optimization** | Compressed, descriptive alt text | Faster loading, accessibility |
| **Internal Linking** | Link to relevant pages with descriptive anchor text | Distributes authority, helps navigation |
| **Content Quality** | Comprehensive, accurate, helpful | The #1 ranking factor |

> **Mental model:** On-page SEO is like writing a book with a clear title, organized chapters, helpful references, and beautiful formatting — it makes both readers (users) and librarians (search engines) happy.

#### Title Tags: Your First Impression

The title tag is the most important on-page element. It appears in search results as the clickable headline.

**Best practices:**
- Keep it under 60 characters (Google truncates after ~60)
- Put your primary keyword near the beginning
- Make it compelling and click-worthy
- Include your brand name if it fits

**Examples:**
- ❌ "Home" (too vague)
- ❌ "Best Running Shoes 2026 - Top Picks for Every Runner - ShoeStore.com" (too long)
- ✅ "Best Running Shoes 2026: Expert Picks for Every Runner" (clear, compelling)

#### Meta Descriptions: Your Sales Pitch

Meta descriptions don't directly affect rankings, but they significantly impact **click-through rate (CTR)**, which does affect rankings.

**Best practices:**
- 150-160 characters maximum
- Include your primary keyword naturally
- Add a call-to-action ("Learn more", "Discover", "Shop now")
- Make it compelling — you're competing with other results

#### Header Tags: Content Hierarchy

| Tag | Usage | SEO Impact |
|---|---|---|
| **H1** | Main page title (one per page) | High — signals main topic |
| **H2** | Major sections | Medium — organizes content |
| **H3** | Sub-sections within H2s | Low-Medium — improves readability |
| **H4-H6** | Further subdivisions | Minimal — mainly for structure |

**Header tag best practices:**
- Use keywords naturally in headers
- Maintain a logical hierarchy (don't skip from H2 to H4)
- Keep headers descriptive and scannable
- Each header should introduce a new topic

#### URL Structure

**Good URLs:**
- \`/best-running-shoes-2026\`
- \`/coffee-shop/seattle\`
- \`/blog/how-to-make-pour-over-coffee\`

**Bad URLs:**
- \`/page?id=123&cat=456\`
- \`/blog/2026/08/12/post-title-here\`
- \`/category/subcategory/sub-subcategory/product\`

**URL best practices:**
- Keep URLs short and descriptive
- Include your primary keyword
- Use hyphens to separate words
- Avoid unnecessary parameters and session IDs

#### Image Optimization

Images affect both user experience and SEO:

1. **File size**: Compress images without losing quality (use WebP format when possible)
2. **Alt text**: Describe the image for accessibility and SEO
3. **File names**: Use descriptive names (running-shoes-nike.jpg vs IMG_1234.jpg)
4. **Lazy loading**: Load images only when they enter the viewport

**Alt text formula:**
"[Primary keyword] - [descriptive text]"

Example: "Nike Air Zoom Pegasus running shoes - side view on trail"

---

### Common Mistakes to Avoid

- **Mistake:** Keyword stuffing in title tags — **Fix:** Write for humans first, optimize for search engines second.
- **Mistake:** Duplicate title tags across pages — **Fix:** Every page should have a unique title.
- **Mistake:** Missing or generic meta descriptions — **Fix:** Write compelling descriptions for every important page.
- **Mistake:** Ignoring image alt text — **Fix:** Add descriptive alt text to all images.
- **Mistake:** Orphan pages (no internal links) — **Fix:** Every page should be linked from at least one other page.

### Professional Tips & Tricks

- Use Yoast SEO or Rank Math plugins (WordPress) for on-page SEO guidance.
- Check your title tags in Google Search Console — it shows which pages have issues.
- Update old content with new keywords and improved optimization quarterly.
- Use schema markup to enhance your search results with rich snippets.

---

### Key Takeaways

- On-page SEO is entirely within your control and critical for rankings.
- Title tags, meta descriptions, and headers are your most important elements.
- URLs should be short, descriptive, and keyword-rich.
- Image optimization affects both speed and accessibility.
- Every page should have unique, optimized elements.

**Next up:** Technical SEO — site speed, mobile optimization, and crawlability.`,
      codeLanguage: "text",
      codeSnippet: `# On-Page SEO Audit Checklist

## Title Tag Audit
Page: Homepage
Current: "Welcome to Our Store"
Optimized: "Premium Running Shoes | Free Shipping | ShoeStore.com"
Character count: 49 ✅

## Meta Description Audit
Page: Product Category
Current: (missing)
Optimized: "Shop our collection of premium running shoes. Expert picks for every runner. Free shipping on orders over $50. Shop now!"
Character count: 128 ✅

## Header Tag Structure
H1: Best Running Shoes for Flat Feet (2026)
  H2: Why Arch Support Matters
    H3: Top 5 Picks for Flat Feet
    H3: How to Choose the Right Shoe
  H2: Runner Reviews
  H2: FAQ About Running Shoes

## Internal Linking Plan
- Blog post "How to Choose Running Shoes" → Links to product category
- Product pages → Link to related blog posts
- Homepage → Links to all main categories

## Image Optimization
- All product images: WebP format, < 100KB
- Alt text: Descriptive, keyword-rich
- Lazy loading enabled on all non-critical images`,
      codeOutput: `On-Page SEO Audit Checklist

## Title Tag Audit
Page: Homepage
Current: "Welcome to Our Store"
Optimized: "Premium Running Shoes | Free Shipping | ShoeStore.com"
Character count: 49 ✅

## Meta Description Audit
Page: Product Category
Current: (missing)
Optimized: "Shop our collection of premium running shoes. Expert picks for every runner. Free shipping on orders over $50. Shop now!"
Character count: 128 ✅

## Header Tag Structure
H1: Best Running Shoes for Flat Feet (2026)
  H2: Why Arch Support Matters
    H3: Top 5 Picks for Flat Feet
    H3: How to Choose the Right Shoe
  H2: Runner Reviews
  H2: FAQ About Running Shoes

## Internal Linking Plan
- Blog post "How to Choose Running Shoes" → Links to product category
- Product pages → Link to related blog posts
- Homepage → Links to all main categories

## Image Optimization
- All product images: WebP format, < 100KB
- Alt text: Descriptive, keyword-rich
- Lazy loading enabled on all non-critical images`,
      visualizationTips: [
        "Create a visual checklist with checkboxes for each on-page element.",
        "Use browser developer tools to inspect title tags and meta descriptions on any website.",
        "Draw a content hierarchy diagram showing H1 → H2 → H3 relationships.",
      ],
      tipsAndTricks: [
        "Use Google's 'site:yourdomain.com' search to see how Google indexes your pages.",
        "Check for duplicate title tags in Google Search Console under 'Enhancements'.",
        "Update your top-performing pages' title tags quarterly to keep them fresh.",
      ],
      practice: [
        {
          id: "practice-on-page-audit",
          title: "On-Page SEO Audit",
          difficulty: "Medium",
          task: "Choose a website and perform a complete on-page SEO audit. Document the title tag, meta description, headers, and image alt text for the homepage.",
          hint: "Right-click and 'View Page Source' to see the HTML elements.",
          solution: `Audit of example website:
Title Tag: "Running Shoes | Athletic Footwear | ShoeCo"
- Length: 42 characters ✅
- Includes brand name ✅
- Could be more specific

Meta Description: "Shop our wide selection of running shoes..."
- Length: 155 characters ✅
- Includes call-to-action ✅
- Missing price/value proposition

Headers: 
- H1: Missing ❌ (using image instead)
- H2s: "New Arrivals", "Best Sellers", "Sale" ✅
- No H3s used ❌`,
        },
        {
          id: "practice-url-optimization",
          title: "URL Structure Exercise",
          difficulty: "Easy",
          task: `Rewrite these bad URLs to be SEO-friendly:
1. www.example.com/page?id=123&cat=shoes
2. www.example.com/blog/2026/08/12/our-latest-post-about-running
3. www.example.com/products/nike/air/zoom/pegasus/38`,
          hint: "Keep URLs short, descriptive, and keyword-rich.",
          solution: `Optimized URLs:
1. www.example.com/running-shoes
2. www.example.com/blog/best-running-shoes-2026
3. www.example.com/nike-air-zoom-pegasus-38

Principles applied:
- Removed unnecessary parameters
- Shortened path depth
- Included relevant keywords
- Used hyphens as separators`,
        },
      ],
    },
  ],
};
