import Link from "next/link";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { Icons } from "@/components/common/icons";
import { routesConfig } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-2.5" aria-label="Go to homepage">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary to-accent font-heading text-sm font-bold text-primary-foreground shadow-md shadow-accent/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                AS
              </span>
              <span className="font-heading text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                {siteConfig.authorName}
              </span>
            </Link>

            {/* Created with heart credit in upper sight (Header) */}
            <a
              href={siteConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-foreground transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/20 hover:scale-105 shadow-sm"
              title="Created with ❤️ by amolshukla.online"
            >
              <span className="hidden md:inline">Created with</span>
              <Icons.heart className="h-3.5 w-3.5 fill-red-500 text-red-500 animate-pulse" />
              <span className="hidden md:inline">by</span>
              <span className="font-semibold text-primary">amolshukla.online</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MainNav items={routesConfig.mainNav}>
              <div className="flex items-center gap-3">
                <ModeToggle />
              </div>
            </MainNav>
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className={cn("container flex-1")}>{children}</main>
      <SiteFooter />
    </div>
  );
}
