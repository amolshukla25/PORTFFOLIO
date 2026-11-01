import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { BlogMeta } from "@/lib/blogs";

interface BlogCardProps {
  blog: BlogMeta;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const isoDate = new Date(blog.date).toISOString();

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="surface-card hover-lift group flex h-full flex-col overflow-hidden"
    >
      <article className="flex h-full flex-col">
        {/* Cover image — fixed ratio instead of a fixed height, so the card
            scales with the column instead of leaving dead space on mobile. */}
        {blog.coverImage && (
          <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-muted">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {/* Shared wash over every cover so the mixed artwork reads as one
                set rather than five different photo styles. */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        )}

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap gap-1.5">
            {blog.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="chip-accent">
                {tag}
              </span>
            ))}
            {blog.tags.length > 2 && (
              <span className="chip">+{blog.tags.length - 2}</span>
            )}
          </div>

          <h3 className="card-title mt-3 line-clamp-2 transition-colors group-hover:text-accent">
            {blog.title}
          </h3>

          <p className="card-body mt-2 line-clamp-2 sm:line-clamp-3">
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
