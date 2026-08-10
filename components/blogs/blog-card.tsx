import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { BlogMeta } from "@/lib/blogs";

interface BlogCardProps {
  blog: BlogMeta;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const isoDate = new Date(blog.date).toISOString();

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background"
    >
      <article className="flex h-full flex-col">
        {/* Cover image */}
        {blog.coverImage && (
          <div className="relative h-[180px] w-full flex-shrink-0 overflow-hidden bg-muted">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-grow flex-col gap-3 p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5" aria-label="Tags">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
              >
                {tag}
              </span>
            ))}
            {blog.tags.length > 3 && (
              <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                +{blog.tags.length - 3}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="line-clamp-2 text-lg font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-accent">
            {blog.title}
          </h3>

          {/* Description */}
          <p className="line-clamp-3 flex-grow text-sm leading-relaxed text-muted-foreground">
            {blog.description}
          </p>

          {/* Footer: date + read time + arrow */}
          <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <time dateTime={isoDate} className="flex items-center gap-1">
                <Icons.calendar className="h-3.5 w-3.5" />
                {formattedDate}
              </time>
              {blog.readingTime && (
                <span className="flex items-center gap-1">
                  <Icons.clock className="h-3.5 w-3.5" />
                  {blog.readingTime} min read
                </span>
              )}
            </div>
            {/* Decorative read indicator */}
            <span
              className="inline-flex items-center gap-0.5 text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:text-accent"
              aria-hidden="true"
            >
              Read
              <Icons.chevronRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
