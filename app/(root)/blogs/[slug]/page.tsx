import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getAllBlogSlugs, getAllBlogsMeta, getBlogPost } from "@/lib/blogs";
import { cn, truncateMetaTitle } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getBlogPost(slug);
    const ogImage = post.coverImage
      ? `${siteConfig.url}${post.coverImage}`
      : siteConfig.ogImage;

    return {
      title: post.title,
      description: post.description,
      authors: [{ name: siteConfig.authorName, url: siteConfig.url }],
      keywords: post.tags,
      alternates: {
        canonical: `${siteConfig.url}/blogs/${slug}`,
      },
      openGraph: {
        title: truncateMetaTitle(post.title),
        description: post.description,
        url: `${siteConfig.url}/blogs/${slug}`,
        siteName: siteConfig.name,
        type: "article",
        publishedTime: post.date,
        modifiedTime: post.date,
        authors: [siteConfig.authorName],
        tags: post.tags,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: truncateMetaTitle(post.title),
        description: post.description,
        images: [ogImage],
        creator: `@${siteConfig.username}`,
      },
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    };
  } catch {
    return { title: "Blog Post Not Found" };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await getBlogPost(slug);
  } catch {
    notFound();
  }

  const allBlogs = getAllBlogsMeta();
  const currentIndex = allBlogs.findIndex((b) => b.slug === slug);

  // Related posts: share at least one tag, ranked by overlap then recency
  const relatedPosts = allBlogs
    .filter((b) => b.slug !== slug)
    .map((b) => ({
      blog: b,
      overlap: b.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .filter((r) => r.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap || new Date(b.blog.date).getTime() - new Date(a.blog.date).getTime())
    .slice(0, 3)
    .map((r) => r.blog);

  // Fall back to most recent posts if no tag overlap exists
  const related =
    relatedPosts.length > 0
      ? relatedPosts
      : allBlogs.filter((b) => b.slug !== slug).slice(0, 3);

  // Prev / next article navigation (newest-first ordering)
  const newerPost = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const olderPost =
    currentIndex >= 0 && currentIndex < allBlogs.length - 1
      ? allBlogs[currentIndex + 1]
      : null;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const isoDate = new Date(post.date).toISOString();
  const ogImage = post.coverImage
    ? `${siteConfig.url}${post.coverImage}`
    : siteConfig.ogImage;

  // BlogPosting JSON-LD — the single most important schema for article SEO
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
      sameAs: [siteConfig.links.github, siteConfig.links.twitter],
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.authorName,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.logoIcon}`,
      },
    },
    url: `${siteConfig.url}/blogs/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blogs/${slug}`,
    },
    image: ogImage,
    keywords: post.tags.join(", "),
    articleSection: post.tags[0],
    wordCount: post.contentHtml.replace(/<[^>]*>/g, "").split(/\s+/).length,
    ...(post.readingTime && {
      timeRequired: `PT${post.readingTime}M`,
    }),
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      name: `${siteConfig.authorName}'s Blog`,
      url: `${siteConfig.url}/blogs`,
    },
  };

  // BreadcrumbList for post hierarchy
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
        name: "Blogs",
        item: `${siteConfig.url}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteConfig.url}/blogs/${slug}`,
      },
    ],
  };

  return (
    <ClientPageWrapper>
      {/* JSON-LD as plain <script> tags so it is present in the initial HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb nav (visible, accessible) */}
        <AnimatedText delay={0}>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <Icons.chevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-foreground transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li aria-hidden="true">
                <Icons.chevronRight className="w-3.5 h-3.5" />
              </li>
              <li
                className="text-foreground font-medium truncate max-w-[200px] sm:max-w-[300px]"
                aria-current="page"
              >
                {post.title}
              </li>
            </ol>
          </nav>
        </AnimatedText>

        {/* Header */}
        <AnimatedSection direction="up">
          <header className="mb-8">
            {/* Tags as internal links to the filtered blog index */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blogs?tag=${encodeURIComponent(tag)}`}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {tag}
                </Link>
              ))}
            </div>

            {/* H1 title — single h1 per page */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground mb-4">
              {post.title}
            </h1>

            {/* Description as lead paragraph */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {post.description}
            </p>

            {/* Author + date + reading time */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
              <address className="flex items-center gap-1.5 not-italic">
                <Icons.user className="w-4 h-4" />
                <a
                  rel="author"
                  href={siteConfig.url}
                  className="hover:text-foreground transition-colors"
                >
                  {siteConfig.authorName}
                </a>
              </address>
              <time dateTime={isoDate} className="flex items-center gap-1.5">
                <Icons.calendar className="w-4 h-4" />
                {formattedDate}
              </time>
              {post.readingTime && (
                <span className="flex items-center gap-1.5">
                  <Icons.clock className="w-4 h-4" />
                  {post.readingTime} min read
                </span>
              )}
            </div>
          </header>
        </AnimatedSection>

        {/* Cover image (if exists) */}
        {post.coverImage && (
          <AnimatedSection direction="up" delay={0.05}>
            <figure className="mb-10">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={768}
                height={400}
                className="w-full h-auto rounded-lg border border-border object-cover"
                priority
              />
            </figure>
          </AnimatedSection>
        )}

        {/* Markdown content wrapped in semantic section */}
        <AnimatedSection direction="up" delay={0.1}>
          <section
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </AnimatedSection>

        {/* Prev / Next article navigation — strong internal linking */}
        {(newerPost || olderPost) && (
          <AnimatedSection
            direction="up"
            delay={0.15}
            className="mt-12 border-t border-border pt-8"
          >
            <nav
              aria-label="Article navigation"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {olderPost ? (
                <Link
                  href={`/blogs/${olderPost.slug}`}
                  className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/40 hover:shadow-md"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    ← Older article
                  </span>
                  <span className="mt-1.5 block text-sm font-semibold text-foreground line-clamp-2 transition-colors group-hover:text-accent">
                    {olderPost.title}
                  </span>
                </Link>
              ) : (
                <span className="hidden sm:block" aria-hidden />
              )}
              {newerPost ? (
                <Link
                  href={`/blogs/${newerPost.slug}`}
                  className="group rounded-xl border border-border bg-card p-4 text-right transition-all hover:border-accent/40 hover:shadow-md sm:col-start-2"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Newer article →
                  </span>
                  <span className="mt-1.5 block text-sm font-semibold text-foreground line-clamp-2 transition-colors group-hover:text-accent">
                    {newerPost.title}
                  </span>
                </Link>
              ) : (
                <span className="hidden sm:block" aria-hidden />
              )}
            </nav>
          </AnimatedSection>
        )}

        {/* Related reading */}
        {related.length > 0 && (
          <AnimatedSection
            direction="up"
            delay={0.2}
            className="mt-14 border-t border-border pt-8"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Related reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  className="card-hover group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
                >
                  {blog.coverImage && (
                    <div className="relative h-24 w-full overflow-hidden bg-muted">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-3.5">
                    <h3 className="line-clamp-2 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                      {blog.title}
                    </h3>
                    <span className="mt-auto pt-2 text-[11px] text-muted-foreground">
                      {blog.readingTime
                        ? `${blog.readingTime} min read`
                        : new Date(blog.date).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Footer nav */}
        <AnimatedSection
          direction="up"
          delay={0.25}
          className="mt-16 pt-8 border-t border-border"
        >
          <footer className="space-y-4">
            {/* Learning Hub cross-link */}
            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-accent/20 bg-accent/5 px-5 py-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  🎓 Want hands-on practice?
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Explore structured notes, code walk-throughs, and exercises
                  in the Learning Hub.
                </p>
              </div>
              <Link
                href="/courses"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "shrink-0 rounded-lg gap-2"
                )}
              >
                Visit the Learning Hub
                <Icons.arrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center justify-between">
              <Link
                href="/blogs"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-lg gap-2"
                )}
              >
                <Icons.chevronLeft className="w-4 h-4" />
                All posts
              </Link>
              <div className="text-sm text-muted-foreground">
                Written by{" "}
                <Link
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.authorName}
                </Link>
              </div>
            </div>

            {/* Signature credit — always visible at the end of every article */}
            <div className="flex items-center justify-center pt-6">
              <Link
                href="/"
                className="group inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-4 py-2 text-xs text-muted-foreground transition-all hover:border-accent/30 hover:text-foreground"
              >
                Created with
                <Icons.heart className="h-3.5 w-3.5 fill-red-500 text-red-500 animate-pulse transition-transform duration-300 group-hover:scale-125" />
                by
                <span className="font-semibold text-foreground group-hover:text-accent">
                  {siteConfig.authorName}
                </span>
                <span aria-hidden className="text-border">
                  ·
                </span>
                <span className="font-medium text-primary">amolshukla.online</span>
              </Link>
            </div>
          </footer>
        </AnimatedSection>
      </article>
    </ClientPageWrapper>
  );
}
