import { tokenize } from "./translate";

const KEYWORDS = new Set(
  "SELECT FROM WHERE AND OR NOT AS ON JOIN INNER LEFT RIGHT CROSS OUTER FULL GROUP BY ORDER HAVING LIMIT OFFSET DISTINCT UNION ALL INTERSECT EXCEPT INSERT INTO VALUES UPDATE SET DELETE CREATE TABLE VIEW INDEX DROP ALTER ADD COLUMN PRIMARY KEY FOREIGN REFERENCES UNIQUE CHECK DEFAULT NULL IS IN BETWEEN LIKE EXISTS CASE WHEN THEN ELSE END WITH RECURSIVE OVER PARTITION ROWS RANGE UNBOUNDED PRECEDING FOLLOWING CURRENT ROW ASC DESC START TRANSACTION COMMIT ROLLBACK BEGIN USE SHOW TABLES DATABASES DESCRIBE DESC EXPLAIN INTERVAL AUTO_INCREMENT CONSTRAINT IF REPLACE TRUNCATE RENAME TO MODIFY CASCADE RESTRICT TRUE FALSE SEPARATOR ROLLUP DATABASE SCHEMA INT INTEGER BIGINT DECIMAL VARCHAR CHAR TEXT DATE DATETIME TIMESTAMP BOOLEAN DOUBLE FLOAT ENGINE"
    .split(" ")
);

export type HlClass = "kw" | "fn" | "str" | "num" | "com" | "var" | "plain";

/** Split SQL into highlighted pieces. Works on the server (static code blocks) and in the editor. */
export function highlightSql(sql: string): { c: HlClass; v: string }[] {
  const toks = tokenize(sql);
  return toks.map((t, i) => {
    if (t.t === "comment") return { c: "com", v: t.v };
    if (t.t === "str") return { c: "str", v: t.v };
    if (t.t === "num") return { c: "num", v: t.v };
    if (t.t === "var") return { c: "var", v: t.v };
    if (t.t === "word") {
      let j = i + 1;
      while (j < toks.length && toks[j].t === "ws") j++;
      if (toks[j]?.v === "(" && !KEYWORDS.has(t.v.toUpperCase())) return { c: "fn", v: t.v };
      if (KEYWORDS.has(t.v.toUpperCase())) return { c: "kw", v: t.v };
      if (toks[j]?.v === "(") return { c: "fn", v: t.v };
    }
    return { c: "plain", v: t.v };
  });
}
