"use client";

import { useTheme } from "next-themes";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="h-8 w-8 px-0" disabled>
        <Icons.sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-1 bg-muted/40 p-1 rounded-full border border-border/30">
      {/* Cyberpunk Quick Switch */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("cyberpunk")}
        className={cn(
          "h-7 w-7 rounded-full p-0 transition-all hover:bg-background/80 hover:text-foreground",
          theme === "cyberpunk"
            ? "bg-background text-primary shadow-sm border border-border/20 scale-105"
            : "text-muted-foreground/80 hover:scale-105"
        )}
        title="Cyberpunk theme"
      >
        <Icons.cyberpunk className="h-3.5 w-3.5" />
        <span className="sr-only">Cyberpunk</span>
      </Button>

      {/* Retro Quick Switch */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("retro")}
        className={cn(
          "h-7 w-7 rounded-full p-0 transition-all hover:bg-background/80 hover:text-foreground",
          theme === "retro"
            ? "bg-background text-primary shadow-sm border border-border/20 scale-105"
            : "text-muted-foreground/80 hover:scale-105"
        )}
        title="Retro theme"
      >
        <Icons.retro className="h-3.5 w-3.5" />
        <span className="sr-only">Retro</span>
      </Button>

      {/* Synthwave Quick Switch */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("synthwave")}
        className={cn(
          "h-7 w-7 rounded-full p-0 transition-all hover:bg-background/80 hover:text-foreground",
          theme === "synthwave"
            ? "bg-background text-primary shadow-sm border border-border/20 scale-105"
            : "text-muted-foreground/80 hover:scale-105"
        )}
        title="Synthwave theme"
      >
        <Icons.synthwave className="h-3.5 w-3.5" />
        <span className="sr-only">Synthwave</span>
      </Button>

      {/* Divider */}
      <div className="h-4 w-px bg-border/40 mx-0.5" />

      {/* More themes dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 rounded-full p-0 text-muted-foreground hover:bg-background/80 hover:text-foreground"
            title="More themes"
          >
            <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cyberpunk:scale-0 retro:scale-0 paper:scale-0 aurora:scale-0 synthwave:scale-0" />
            <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cyberpunk:scale-0 retro:scale-0 paper:scale-0 aurora:scale-0 synthwave:scale-0" />
            <Icons.retro className="absolute rotate-90 scale-0 transition-all retro:rotate-0 retro:scale-100" />
            <Icons.cyberpunk className="absolute rotate-90 scale-0 transition-all cyberpunk:rotate-0 cyberpunk:scale-100" />
            <Icons.paper className="absolute rotate-90 scale-0 transition-all paper:rotate-0 paper:scale-100" />
            <Icons.aurora className="absolute rotate-90 scale-0 transition-all aurora:rotate-0 aurora:scale-100" />
            <Icons.synthwave className="absolute rotate-90 scale-0 transition-all synthwave:rotate-0 synthwave:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Icons.sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Icons.moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setTheme("retro")}>
            <Icons.retro className="mr-2 h-4 w-4" />
            <span>Retro</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("cyberpunk")}>
            <Icons.cyberpunk className="mr-2 h-4 w-4" />
            <span>Cyberpunk</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("paper")}>
            <Icons.paper className="mr-2 h-4 w-4" />
            <span>Paper</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("aurora")}>
            <Icons.aurora className="mr-2 h-4 w-4" />
            <span>Aurora</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("synthwave")}>
            <Icons.synthwave className="mr-2 h-4 w-4" />
            <span>Synthwave</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <Icons.laptop className="mr-2 h-4 w-4" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

