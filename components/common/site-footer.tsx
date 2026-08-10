import Link from "next/link";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { routesConfig } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("mt-24 border-t border-border/40", className)}>
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="group flex w-fit items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary to-accent font-heading text-sm font-bold text-primary-foreground shadow-md shadow-accent/20">
                AS
              </span>
              <span className="font-heading text-lg font-semibold tracking-tight">
                {siteConfig.authorName}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI Developer, Trainer & Agentic AI Expert building practical
              learning systems and real-world AI applications.
            </p>
          </div>

          {/* Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {routesConfig.mainNav
                .filter((item: any) => item.title !== "Resume")
                .map((item: any) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  href="/experience"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={siteConfig.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Resume
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-1 pt-2">
              {SocialLinks.map((item, ind) => (
                <CustomTooltip icon={item.icon} text={item.username} key={ind}>
                  <Link
                    href={item.link}
                    target="_blank"
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      }),
                      "h-9 w-9 rounded-full p-2"
                    )}
                    aria-label={item.name}
                  >
                    <item.icon className="h-4 w-4" />
                  </Link>
                </CustomTooltip>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.authorName} · Made with{" "}
            <span aria-hidden className="text-destructive transition-transform duration-300 inline-block hover:scale-125">
              ❤
            </span>{" "}
            by{" "}
            <a
              href={siteConfig.url}
              className="font-medium text-foreground transition-colors hover:text-accent"
            >
              amolshukla.online
            </a>
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Back to top"
          >
            Back to top
            <Icons.chevronUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
