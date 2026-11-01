"use client";

import { useRef } from "react";
import { SqlHighlighted } from "./sql-code";

/**
 * Lightweight SQL editor: a transparent textarea over a highlighted <pre>.
 * Ctrl/⌘ + Enter runs, Tab inserts two spaces. No editor library needed.
 */
export default function SqlEditor({
  value,
  onChange,
  onRun,
  label,
  minLines = 4,
}: {
  value: string;
  onChange: (v: string) => void;
  onRun?: () => void;
  label: string;
  minLines?: number;
}) {
  const pre = useRef<HTMLPreElement>(null);
  const lines = Math.max(minLines, value.split("\n").length + 1);
  return (
    <div className="sql-hl relative overflow-hidden rounded-xl border border-white/10 bg-code-bg font-mono text-[13px] leading-6 text-code-fg">
      <pre ref={pre} aria-hidden className="pointer-events-none m-0 overflow-hidden whitespace-pre p-4" style={{ minHeight: `${lines * 1.5 + 2}rem` }}>
        <code>
          <SqlHighlighted sql={value} />
          {"\n"}
        </code>
      </pre>
      <textarea
        aria-label={label}
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onScroll={(e) => {
          if (pre.current) {
            pre.current.scrollTop = e.currentTarget.scrollTop;
            pre.current.scrollLeft = e.currentTarget.scrollLeft;
          }
        }}
        onKeyDown={(e) => {
          if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
            e.preventDefault();
            onRun?.();
          } else if (e.key === "Tab" && !e.shiftKey) {
            e.preventDefault();
            const t = e.currentTarget;
            const { selectionStart: s, selectionEnd: end } = t;
            const next = value.slice(0, s) + "  " + value.slice(end);
            onChange(next);
            requestAnimationFrame(() => t.setSelectionRange(s + 2, s + 2));
          }
          e.stopPropagation();
        }}
        className="absolute inset-0 h-full w-full resize-none whitespace-pre bg-transparent p-4 text-transparent caret-code-accent outline-none selection:bg-code-accent/30 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-code-accent"
        style={{ WebkitTextFillColor: "transparent" }}
        wrap="off"
      />
    </div>
  );
}
