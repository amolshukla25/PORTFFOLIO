import Link from "next/link";

import { BookOpen, Home, Newspaper } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFoundContent() {
  return (
    <section className="container flex min-h-[55vh] max-w-2xl flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">
        <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-accent" />
        Error 404
      </span>
      <h1 className="text-gradient font-heading mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:space-x-4">
        <Link
          href="/"
          className={cn(
            buttonVariants({ size: "lg" }),
            "group w-full rounded-xl bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground shadow-lg shadow-accent/20 hover:opacity-95 sm:w-auto"
          )}
          aria-label="Go to homepage"
        >
          <Home className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        <Link
          href="/blogs"
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            "w-full rounded-xl sm:w-auto"
          )}
          aria-label="Browse blog articles"
        >
          <Newspaper className="mr-2 h-4 w-4" /> Browse Blogs
        </Link>
        <Link
          href="/courses"
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            "w-full rounded-xl sm:w-auto"
          )}
          aria-label="Open the Learning Hub"
        >
          <BookOpen className="mr-2 h-4 w-4" /> Learning Hub
        </Link>
      </div>
      <nav
        aria-label="Popular pages"
        className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
      >
        <Link href="/projects" className="transition-colors hover:text-foreground">
          Projects
        </Link>
        <Link href="/experience" className="transition-colors hover:text-foreground">
          Experience
        </Link>
        <Link href="/skills" className="transition-colors hover:text-foreground">
          Skills
        </Link>
        <Link href="/contact" className="transition-colors hover:text-foreground">
          Contact
        </Link>
      </nav>
    </section>
  );
}
