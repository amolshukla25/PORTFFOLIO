import Link from "next/link";
import { Norican } from "next/font/google";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-50 bg-background border-b border-border/40">
        <div className="flex h-20 items-center justify-between py-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className={cn(norican.className, "text-2xl hover:text-foreground/80 transition-colors")}>
              {siteConfig.authorName}
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <MainNav items={routesConfig.mainNav}>
              <div className="flex items-center gap-3">
                <ModeToggle />
              </div>
            </MainNav>
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
