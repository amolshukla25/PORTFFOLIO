"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CopyButton({ text, className, label = "Copy" }: { text: string; className?: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          const ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          ta.remove();
        }
        setDone(true);
        setTimeout(() => setDone(false), 1600);
      }}
      className={cn("inline-flex min-h-9 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium text-code-fg/75 transition-colors hover:bg-white/10 hover:text-code-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-code-accent", className)}
      aria-label={done ? "Copied" : `${label} SQL`}
    >
      {done ? <Check className="h-3.5 w-3.5 text-code-accent" /> : <Copy className="h-3.5 w-3.5" />}
      <span>{done ? "Copied" : label}</span>
    </button>
  );
}
