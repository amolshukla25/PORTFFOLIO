import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-4 pb-32 shadow-md animate-in slide-in-from-top-10 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-2xl border border-border/60 bg-popover/95 p-5 text-popover-foreground shadow-2xl backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-primary to-accent font-heading text-xs font-bold text-primary-foreground">
              AS
            </span>
            <span className="font-heading text-base font-semibold tracking-tight">
              {siteConfig.authorName}
            </span>
          </Link>
          <a
            href={siteConfig.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-[11px] font-medium text-foreground transition-all"
          >
            <span>Created with</span>
            <Icons.heart className="h-3 w-3 fill-red-500 text-red-500 animate-pulse" />
            <span className="font-semibold text-primary">amolshukla.online</span>
          </a>
        </div>
        <nav className="grid grid-flow-row auto-rows-max gap-1 text-sm">
          {items.map((item, index) =>
            item.isButton ? (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "w-full justify-center rounded-xl font-semibold",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                {item.title}
              </Link>
            ) : (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center justify-between rounded-xl px-3 py-2.5 font-medium transition-colors hover:bg-muted",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                {item.title}
                <span className="text-muted-foreground">→</span>
              </Link>
            )
          )}
        </nav>
        {children ? <div className="pt-1">{children}</div> : null}
      </div>
    </div>
  );
}
