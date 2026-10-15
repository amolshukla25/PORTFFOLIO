"use client";

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

const ADMIN_NAV: NavItem[] = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/batches", label: "Batches", icon: GraduationCap },
  { href: "/admin/students", label: "Students", icon: Users },
  { href: "/admin/activities", label: "Daily activity", icon: BookOpenCheck },
  { href: "/admin/assignments", label: "Assignments", icon: ClipboardList },
  { href: "/admin/todos", label: "Daily to-dos", icon: ListChecks },
  { href: "/admin/reports", label: "Reports", icon: FileBarChart },
];

const STUDENT_NAV: NavItem[] = [
  { href: "/student", label: "Dashboard", icon: LayoutDashboard },
  { href: "/student/activity", label: "Daily activity", icon: BookOpenCheck },
  { href: "/student/assignments", label: "Assignments", icon: ClipboardList },
];

interface PortalShellProps {
  role: "admin" | "student";
  user: { name: string; email: string; batchName?: string | null };
  children: React.ReactNode;
}

export function PortalShell({ role, user, children }: PortalShellProps) {
  const pathname = usePathname();
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
    <nav className="flex flex-col gap-1">
      {nav.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-accent/15 text-accent"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  const brand = (
    <div className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-sm font-semibold text-accent">
        AS
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold leading-tight">
          Amol Shukla
        </p>
        <p className="text-[11px] text-muted-foreground">{roleLabel} portal</p>
      </div>
    </div>
  );

  const userBlock = (
    <div className="space-y-3 rounded-lg border border-border/60 bg-background/60 p-3">
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{user.name}</p>
        <p className="truncate text-xs text-muted-foreground">{user.email}</p>
        {user.batchName ? (
          <Badge variant="accent" className="mt-1.5">
            {user.batchName}
          </Badge>
        ) : null}
      </div>
      <LogoutButton redirectTo={loginPath} />
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
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

      {mobileOpen ? (
        <div className="sticky top-[57px] z-30 space-y-3 border-b border-border/60 bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
          {navLinks}
          {userBlock}
        </div>
      ) : null}

      <div className="flex">
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between border-r border-border/60 bg-muted/20 p-4 lg:flex">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-2">
              {brand}
              <ModeToggle />
            </div>
            {navLinks}
          </div>
          {userBlock}
        </aside>

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
