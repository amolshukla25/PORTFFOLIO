"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BookOpenCheck,
  ClipboardList,
  FileBarChart,
  GraduationCap,
  LayoutDashboard,
  ListChecks,
  Menu,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { LogoutButton } from "@/components/common/logout-button";
import { ModeToggle } from "@/components/common/mode-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const ADMIN_NAV: NavGroup[] = [
  {
    title: "Overview",
    items: [
      { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
      { href: "/admin/batches", label: "Batches", icon: GraduationCap },
      { href: "/admin/students", label: "Students", icon: Users },
    ],
  },
  {
    title: "Learning",
    items: [
      { href: "/admin/activities", label: "Daily activity", icon: BookOpenCheck },
      { href: "/admin/assignments", label: "Assignments", icon: ClipboardList },
      { href: "/admin/todos", label: "Daily to-dos", icon: ListChecks },
    ],
  },
  {
    title: "Insights",
    items: [{ href: "/admin/reports", label: "Reports", icon: FileBarChart }],
  },
];

const STUDENT_NAV: NavGroup[] = [
  {
    title: "Overview",
    items: [{ href: "/student", label: "Dashboard", icon: LayoutDashboard }],
  },
  {
    title: "Learning",
    items: [
      { href: "/student/activity", label: "Daily activity", icon: BookOpenCheck },
      { href: "/student/assignments", label: "Assignments", icon: ClipboardList },
    ],
  },
];

interface PortalShellProps {
  role: "admin" | "student";
  user: { name: string; email: string; batchName?: string | null };
  children: React.ReactNode;
}

function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean).slice(0, 2);
  const initials = parts.map((part) => part[0]?.toUpperCase() ?? "").join("");
  return initials || "AS";
}

const EASE = [0.19, 1, 0.22, 1] as const;

export function PortalShell({ role, user, children }: PortalShellProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const nav = role === "admin" ? ADMIN_NAV : STUDENT_NAV;
  const home = role === "admin" ? "/admin" : "/student";
  const loginPath = `${home}/login`;
  const roleLabel = role === "admin" ? "Admin" : "Student";

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  function isActive(href: string): boolean {
    if (href === home) return pathname === home;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const navLinks = (
    <nav className="flex flex-col gap-5">
      {nav.map((group) => (
        <div key={group.title} className="space-y-1">
          <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            {group.title}
          </p>
          {group.items.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-accent/10 font-medium text-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                {active ? (
                  <motion.span
                    layoutId={`portal-nav-active-${role}`}
                    className="absolute left-0.5 top-2 h-5 w-[3px] rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    aria-hidden="true"
                  />
                ) : null}
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );

  const brand = (
    <div className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-sm font-semibold text-background">
        AS
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold leading-tight">
          Amol Shukla
        </p>
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
          {roleLabel} portal
        </p>
      </div>
    </div>
  );

  const userBlock = (
    <div className="space-y-3 rounded-xl border border-border/60 bg-muted/30 p-3">
      <div className="flex items-start gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background text-[11px] font-semibold text-muted-foreground">
          {initialsOf(user.name)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium leading-tight">
            {user.name}
          </p>
          <p className="truncate text-xs text-muted-foreground">{user.email}</p>
          {user.batchName ? (
            <Badge variant="accent" className="mt-1.5">
              {user.batchName}
            </Badge>
          ) : null}
        </div>
      </div>
      <LogoutButton redirectTo={loginPath} />
    </div>
  );

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-border/60 bg-background/90 px-4 py-3 backdrop-blur lg:hidden">
        {brand}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </header>

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <motion.div
            key="portal-mobile-nav"
            className="sticky top-[57px] z-30 overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur lg:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <div className="space-y-3 px-4 py-4">
              {navLinks}
              {userBlock}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="flex">
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border/60 bg-card lg:flex">
          <div className="flex items-center justify-between gap-2 border-b border-border/60 px-4 py-4">
            {brand}
            <ModeToggle />
          </div>
          <div className="flex-1 overflow-y-auto px-2.5 py-5">{navLinks}</div>
          <div className="border-t border-border/60 p-3">{userBlock}</div>
        </aside>

        <main className="mx-auto w-full min-w-0 max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Keyed on the route so every portal page eases in as it loads. */}
          <motion.div
            key={pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
