import { Metadata } from "next";
import { Suspense } from "react";

import BlogCard from "@/components/blogs/blog-card";
import BlogExplorer from "@/components/blogs/blog-explorer";
import { AnimatedSection } from "@/components/common/animated-section";
import PageContainer from "@/components/common/page-container";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { getAllBlogsMeta } from "@/lib/blogs";

interface BlogsPageProps {
  searchParams: Promise<{ tag?: string }>;
}

const tagLabel = (tag: string) => `${tag} Articles`;

export async function generateMetadata({
  searchParams,
}: BlogsPageProps): Promise<Metadata> {
  const { tag } = await searchParams;

  const title = tag
    ? `${tagLabel(tag)} | ${siteConfig.name}`
    : `${pagesConfig.blogs.metadata.title} | ${siteConfig.name}`;
  const description = tag
    ? `Amol Shukla's articles tagged "${tag}" — tutorials and deep dives for AI engineers and developers.`
    : pagesConfig.blogs.metadata.description;
  const url = tag
    ? `${siteConfig.url}/blogs?tag=${encodeURIComponent(tag)}`
    : `${siteConfig.url}/blogs`;

  return {
    title: tag ? { absolute: title } : pagesConfig.blogs.metadata.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.authorName} Blog`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: `@${siteConfig.username}`,
    },
  };
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const { tag } = await searchParams;
  const allBlogs = getAllBlogsMeta();
  const blogs = tag ? allBlogs.filter((b) => b.tags.includes(tag)) : allBlogs;

  const pageUrl = tag
    ? `${siteConfig.url}/blogs?tag=${encodeURIComponent(tag)}`
    : `${siteConfig.url}/blogs`;

  // CollectionPage + ItemList JSON-LD — the correct schema for the blog index
  // and tag-filtered listing pages. Rendered as a plain <script> tag so it
  // ships in the initial HTML (next/script would only inject it after hydration).
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": pageUrl,
    name: tag
      ? `${tagLabel(tag)} by ${siteConfig.authorName}`
      : `${siteConfig.authorName} — Blog`,
    description: tag
      ? `Articles tagged "${tag}" by ${siteConfig.authorName} — ${pagesConfig.blogs.metadata.description}`
      : pagesConfig.blogs.metadata.description,
    url: pageUrl,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      "@id": `${siteConfig.url}/blogs#blog`,
      name: `${siteConfig.authorName}'s Blog`,
      url: `${siteConfig.url}/blogs`,
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: blogs.length,
      itemListElement: blogs.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          headline: blog.title,
          description: blog.description,
          datePublished: new Date(blog.date).toISOString(),
          url: `${siteConfig.url}/blogs/${blog.slug}`,
          author: {
            "@type": "Person",
            name: siteConfig.authorName,
            url: siteConfig.url,
          },
          keywords: blog.tags.join(", "),
          ...(blog.coverImage && {
            image: `${siteConfig.url}${blog.coverImage}`,
          }),
        },
      })),
    },
  };

  // BreadcrumbList for site hierarchy (includes the active tag when filtered)
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
      ...(tag
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: tag,
              item: pageUrl,
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageContainer
        title={tag ? tagLabel(tag) : pagesConfig.blogs.title}
        description={
          tag
            ? `Articles tagged "${tag}" — ${pagesConfig.blogs.description}`
            : pagesConfig.blogs.description
        }
        eyebrow="Writing"
      >
        <Suspense
          fallback={
            blogs.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="text-4xl mb-4">✍️</p>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No posts yet
                </h3>
                <p className="text-muted-foreground text-sm">
                  Check back soon — posts are coming.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
                {blogs.map((blog, index) => (
                  <AnimatedSection
                    key={blog.slug}
                    delay={0.05 * index}
                    direction="up"
                    className="h-full"
                  >
                    <BlogCard blog={blog} />
                  </AnimatedSection>
                ))}
              </div>
            )
          }
        >
          <BlogExplorer blogs={blogs} />
        </Suspense>
      </PageContainer>
    </>
  );
}
