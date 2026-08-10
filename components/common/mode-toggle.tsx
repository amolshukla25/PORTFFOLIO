"use client";

import { useTheme } from "next-themes";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const THEME_OPTIONS = [
  { value: "light", label: "Light", icon: Icons.sun },
  { value: "dark", label: "Dark", icon: Icons.moon },
  { value: "system", label: "System", icon: Icons.laptop },
] as const;

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Migration guard: older versions of this site offered extra themes
  // (retro, cyberpunk, paper, aurora, synthwave) that were persisted in
  // localStorage. Those no longer exist, so fall back to the light default
  // instead of applying a class with no matching CSS.
  React.useEffect(() => {
    if (!mounted) return;
    const valid = THEME_OPTIONS.map((o) => o.value);
    if (theme && !valid.includes(theme)) {
      setTheme("light");
    }
  }, [mounted, theme, setTheme]);

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="h-8 w-8 px-0" disabled>
        <Icons.sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <div
      role="group"
      aria-label="Theme"
      className="flex items-center gap-1 bg-muted/40 p-1 rounded-full border border-border/40 shadow-sm backdrop-blur"
    >
      {THEME_OPTIONS.map((option) => {
        const isActive = theme === option.value;
        const Icon = option.icon;
        return (
          <Button
            key={option.value}
            variant="ghost"
            size="sm"
            aria-pressed={isActive}
            onClick={() => setTheme(option.value)}
            className={cn(
              "h-7 rounded-full px-2.5 gap-1.5 transition-all hover:bg-background/80 hover:text-foreground",
              isActive
                ? "bg-background text-primary shadow-sm border border-border/20 scale-105"
                : "text-muted-foreground/80 hover:scale-105"
            )}
            title={`${option.label} theme`}
          >
            <Icon className="h-3.5 w-3.5" />
            <span className="text-[11px] font-semibold hidden sm:inline">
              {option.label}
            </span>
            <span className="sr-only">{option.label}</span>
          </Button>
        );
      })}
    </div>
  );
}
