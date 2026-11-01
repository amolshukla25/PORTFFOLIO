import { highlightSql } from "@/lib/sql-practice/highlight";
import { cn } from "@/lib/utils";

/** Highlighted SQL, safe to render on the server (no client JS needed). */
export function SqlHighlighted({ sql }: { sql: string }) {
  return (
    <>
      {highlightSql(sql).map((t, i) =>
        t.c === "plain" ? <span key={i}>{t.v}</span> : <span key={i} className={`hl-${t.c}`}>{t.v}</span>
      )}
    </>
  );
}

export function SqlPre({ sql, className }: { sql: string; className?: string }) {
  return (
    <pre className={cn("sql-hl overflow-x-auto rounded-xl bg-code-bg p-4 font-mono text-[13px] leading-6 text-code-fg", className)}>
      <code>
        <SqlHighlighted sql={sql} />
      </code>
    </pre>
  );
}
