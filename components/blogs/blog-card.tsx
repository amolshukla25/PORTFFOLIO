import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { BlogMeta } from "@/lib/blogs";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  blog: BlogMeta;
  /**
   * `wide` lays the card out horizontally — used for the lead article in the
   * writing section so the newest post reads as the headline, not as one of
   * three identical boxes.
   */
  variant?: "default" | "wide";
}

export default function BlogCard({ blog, variant = "default" }: BlogCardProps) {
  const isWide = variant === "wide";

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const isoDate = new Date(blog.date).toISOString();

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className={cn(
        "surface-card hover-lift group flex h-full flex-col overflow-hidden",
        isWide && "sm:flex-row"
      )}
    >
      <article
        className={cn(
          "flex h-full w-full flex-col",
          isWide && "sm:flex-row"
        )}
      >
        {/* Cover — fixed ratio on mobile, half the card when wide. */}
        {blog.coverImage && (
          <div
            className={cn(
              "relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-muted",
              isWide && "sm:aspect-auto sm:w-[46%]"
            )}
          >
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              sizes={
                isWide
                  ? "(max-width: 640px) 100vw, 46vw"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-accent/10 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        )}

        <div
          className={cn(
            "flex flex-1 flex-col p-5 sm:p-6",
            isWide && "sm:justify-center sm:p-7"
          )}
        >
          <div className="flex flex-wrap gap-1.5">
            {blog.tags.slice(0, isWide ? 3 : 2).map((tag) => (
              <span key={tag} className="chip-accent">
                {tag}
              </span>
            ))}
            {blog.tags.length > (isWide ? 3 : 2) && (
              <span className="chip">
                +{blog.tags.length - (isWide ? 3 : 2)}
              </span>
            )}
          </div>

          <h3
            className={cn(
              "card-title mt-3 line-clamp-2 transition-colors group-hover:text-accent",
              isWide && "text-lg sm:text-xl lg:text-2xl"
            )}
          >
            {blog.title}
          </h3>

          <p
            className={cn(
              "card-body mt-2 line-clamp-2 sm:line-clamp-3",
              isWide && "sm:text-[15px]"
            )}
          >
            {blog.description}
          </p>

          <div className="mt-auto flex items-center justify-between gap-2 border-t border-border/70 pt-3.5">
            <div className="flex min-w-0 flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] text-muted-foreground">
              <time dateTime={isoDate} className="inline-flex items-center gap-1">
                <Icons.calendar className="h-3.5 w-3.5" />
                {formattedDate}
              </time>
              {blog.readingTime && (
                <span className="inline-flex items-center gap-1">
                  <Icons.clock className="h-3.5 w-3.5" />
                  {blog.readingTime} min
                </span>
              )}
            </div>
            <span
              className="inline-flex shrink-0 items-center gap-0.5 text-[11px] font-semibold text-muted-foreground transition-colors group-hover:text-accent"
              aria-hidden="true"
            >
              Read
              <Icons.chevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
