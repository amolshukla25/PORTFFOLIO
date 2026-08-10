"use client";

import React, { useDeferredValue, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowUpDown, Search, Tag, X } from "lucide-react";

import BlogCard from "@/components/blogs/blog-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { BlogMeta } from "@/lib/blogs";
import { cn } from "@/lib/utils";

interface BlogExplorerProps {
  blogs: BlogMeta[];
}

type SortKey = "newest" | "oldest" | "az";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "newest", label: "Newest" },
  { key: "oldest", label: "Oldest" },
  { key: "az", label: "A–Z" },
];

export default function BlogExplorer({ blogs }: BlogExplorerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q") ?? "";
  const activeTag = searchParams.get("tag") ?? "";
  const sortParam = searchParams.get("sort") as SortKey | null;
  const sort = sortParam && SORT_OPTIONS.some((o) => o.key === sortParam) ? sortParam : "newest";

  const [inputValue, setInputValue] = useState(query);
  const deferredQuery = useDeferredValue(inputValue);

  // Update the URL when the user types (debounced via deferred value)
  const syncUrl = React.useCallback(
    (patch: { q?: string; tag?: string; sort?: SortKey }) => {
      const params = new URLSearchParams(searchParams.toString());
      if (patch.q !== undefined) {
        if (patch.q) params.set("q", patch.q);
        else params.delete("q");
      }
      if (patch.tag !== undefined) {
        if (patch.tag) params.set("tag", patch.tag);
        else params.delete("tag");
      }
      if (patch.sort !== undefined) {
        if (patch.sort !== "newest") params.set("sort", patch.sort);
        else params.delete("sort");
      }
      const qs = params.toString();
      router.replace(qs ? `/blogs?${qs}` : "/blogs", { scroll: false });
    },
    [router, searchParams]
  );

  React.useEffect(() => {
    if (deferredQuery !== query) {
      syncUrl({ q: deferredQuery });
    }
  }, [deferredQuery, query, syncUrl]);

  // All unique tags across posts, ranked by frequency
  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    blogs.forEach((blog) =>
      blog.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1))
    );
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  }, [blogs]);

  const filtered = useMemo(() => {
    let result = blogs;
    const q = deferredQuery.trim().toLowerCase();
    if (q) {
      result = result.filter((blog) =>
        [blog.title, blog.description, ...blog.tags]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }
    if (activeTag) {
      result = result.filter((blog) => blog.tags.includes(activeTag));
    }
    return [...result].sort((a, b) => {
      if (sort === "az") return a.title.localeCompare(b.title);
      const diff = new Date(b.date).getTime() - new Date(a.date).getTime();
      return sort === "oldest" ? -diff : diff;
    });
  }, [blogs, deferredQuery, activeTag, sort]);

  const hasActiveFilters = Boolean(query || activeTag);

  return (
    <div className="space-y-6 mt-2">
      {/* Toolbar: search + sort */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search articles, topics, tags…"
            aria-label="Search articles"
            className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-10 text-sm shadow-sm transition-all outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 placeholder:text-muted-foreground"
          />
          {inputValue && (
            <button
              onClick={() => {
                setInputValue("");
                syncUrl({ q: "" });
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Sort segmented control */}
        <div className="flex items-center gap-1 rounded-xl border border-border bg-muted/40 p-1 self-start sm:self-auto">
          <ArrowUpDown className="ml-2 h-3.5 w-3.5 text-muted-foreground" aria-hidden />
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => syncUrl({ sort: opt.key })}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-semibold transition-all",
                sort === opt.key
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tag filter chips */}
      <div className="flex flex-wrap items-center gap-1.5" aria-label="Filter by topic">
        <button
          onClick={() => syncUrl({ tag: "" })}
          className={cn(
            "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-all",
            !activeTag
              ? "border-accent/40 bg-accent text-accent-foreground"
              : "border-border/60 bg-muted/40 text-muted-foreground hover:border-accent/30 hover:text-foreground"
          )}
        >
          <Tag className="h-3 w-3" />
          All topics
        </button>
        {tagCounts.map(([tag, count]) => (
          <button
            key={tag}
            onClick={() => syncUrl({ tag: activeTag === tag ? "" : tag })}
            className={cn(
              "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-all",
              activeTag === tag
                ? "border-accent/40 bg-accent text-accent-foreground"
                : "border-border/60 bg-muted/40 text-muted-foreground hover:border-accent/30 hover:text-foreground"
            )}
          >
            {tag}
            <span className={cn("text-[10px]", activeTag === tag ? "text-accent-foreground/70" : "text-muted-foreground/70")}>
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Result summary */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <p>
          Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "article" : "articles"}
          {activeTag && (
            <>
              {" "}in <span className="font-semibold text-foreground">{activeTag}</span>
            </>
          )}
        </p>
        {hasActiveFilters && (
          <button
            onClick={() => {
              setInputValue("");
              syncUrl({ q: "", tag: "" });
            }}
            className="inline-flex items-center gap-1 font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-3 w-3" />
            Clear filters
          </button>
        )}
      </div>

      {/* Cards grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 px-6 py-20 text-center">
          <p className="mb-2 text-4xl">🔍</p>
          <h3 className="text-lg font-semibold text-foreground">No articles found</h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Try a different keyword or clear the active topic filter.
          </p>
          <button
            onClick={() => {
              setInputValue("");
              syncUrl({ q: "", tag: "" });
            }}
            className="mt-5 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:text-accent"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((blog) => (
            <AnimatedSection
              key={blog.slug}
              direction="up"
              className="h-full"
            >
              <BlogCard blog={blog} />
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>
  );
}
