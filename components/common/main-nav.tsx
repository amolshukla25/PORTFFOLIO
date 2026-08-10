"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

// Animation variants for the navigation items
const navItemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * i,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <div className="flex items-center gap-3">
      {items?.length ? (
        <nav className="hidden items-center gap-1 rounded-full border border-border/50 bg-muted/40 p-1 backdrop-blur-sm md:flex">
          {items?.map((item, index) => {
            const isActive =
              !item.isButton &&
              item.href.startsWith(`/${segment}`) &&
              segment !== null;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
                    item.isButton
                      ? "bg-foreground text-background shadow-sm hover:opacity-90"
                      : isActive
                        ? "bg-background text-foreground shadow-sm border border-border/60"
                        : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
                  )}
                >
                  {item.title}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      ) : null}
      <motion.button
        className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/40 px-3 py-2 text-sm font-semibold md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        whileTap={{ scale: 0.96 }}
        aria-label="Toggle navigation menu"
      >
        {showMobileMenu ? <Icons.close className="h-4 w-4" /> : <Icons.menu className="h-4 w-4" />}
        Menu
      </motion.button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
