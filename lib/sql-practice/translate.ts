/**
 * Turns one MySQL statement into what the SQLite practice engine runs.
 *
 * This is not a full MySQL parser. It covers the syntax the course teaches and
 * the common beginner variations, and it fails with a clear "not supported in
 * practice mode" message instead of silently returning a different answer.
 */

import { SERVER_VARIABLES } from "./mysql-functions";

export type TokType = "ws" | "comment" | "str" | "ident" | "word" | "num" | "var" | "punct";
export interface Tok {
  t: TokType;
  v: string;
}

export function tokenize(sql: string): Tok[] {
  const out: Tok[] = [];
  let i = 0;
  const n = sql.length;
  while (i < n) {
    const c = sql[i];
    const rest = sql.slice(i);
    let m: RegExpMatchArray | null;
    if ((m = rest.match(/^\s+/))) {
      out.push({ t: "ws", v: m[0] });
    } else if (rest.startsWith("--") && /^--(\s|$)/.test(rest) || c === "#") {
      const end = sql.indexOf("\n", i);
      out.push({ t: "comment", v: end === -1 ? rest : sql.slice(i, end) });
    } else if (rest.startsWith("/*")) {
      const end = sql.indexOf("*/", i + 2);
      out.push({ t: "comment", v: end === -1 ? rest : sql.slice(i, end + 2) });
    } else if (c === "'" || c === '"') {
      let j = i + 1;
      while (j < n) {
        if (sql[j] === "\\") { j += 2; continue; }
        if (sql[j] === c) {
          if (sql[j + 1] === c) { j += 2; continue; }
          break;
        }
        j++;
      }
      out.push({ t: "str", v: sql.slice(i, Math.min(j + 1, n)) });
      i = Math.min(j + 1, n);
      continue;
    } else if (c === "`") {
      const end = sql.indexOf("`", i + 1);
      out.push({ t: "ident", v: end === -1 ? rest : sql.slice(i, end + 1) });
    } else if ((m = rest.match(/^@@[A-Za-z_][\w.]*/)) || (m = rest.match(/^@[A-Za-z_]\w*/))) {
      out.push({ t: "var", v: m[0] });
    } else if ((m = rest.match(/^(\d+\.?\d*(e[+-]?\d+)?|\.\d+)/i))) {
      out.push({ t: "num", v: m[0] });
    } else if ((m = rest.match(/^[A-Za-z_][\w$]*/))) {
      out.push({ t: "word", v: m[0] });
    } else if ((m = rest.match(/^(<=>|<>|!=|<=|>=|:=|\|\||&&|[^\s])/))) {
      out.push({ t: "punct", v: m[0] });
    } else {
      out.push({ t: "punct", v: c });
    }
    i += out[out.length - 1].v.length;
  }
  return out;
}

/** Split a script into statements on top-level semicolons. */
export function splitStatements(sql: string): string[] {
  const toks = tokenize(sql);
  const stmts: string[] = [];
  let cur = "";
  for (const t of toks) {
    if (t.t === "punct" && t.v === ";") {
      if (cur.trim()) stmts.push(cur);
      cur = "";
    } else cur += t.v;
  }
  if (cur.trim()) stmts.push(cur);
  // Drop statements that are only comments, but keep them as a no-op marker
  return stmts;
}

export type Translated =
  | { kind: "sql"; sql: string[]; info?: string }
  | { kind: "emulate"; name: "show-tables" | "show-databases" | "describe" | "show-create" | "show-index" | "show-warnings" | "use" | "comment-only" | "set-noop"; arg?: string; info?: string }
  | { kind: "error"; code: number; message: string };

const BLOCKED: [RegExp, string][] = [
  [/^\s*(GRANT|REVOKE)\b/i, "Permissions (GRANT / REVOKE) are not available in practice mode."],
  [/\bLOAD\s+DATA\b/i, "LOAD DATA is blocked in practice mode."],
  [/\bINTO\s+(OUT|DUMP)FILE\b/i, "Writing files (INTO OUTFILE) is blocked in practice mode."],
  [/^\s*SET\s+(GLOBAL|PERSIST)\b/i, "SET GLOBAL is blocked in practice mode."],
  [/^\s*(SHUTDOWN|KILL|FLUSH|RESET)\b/i, "Server administration commands are blocked in practice mode."],
  [/^\s*(CREATE|DROP|ALTER)\s+USER\b/i, "User management is blocked in practice mode."],
  [/^\s*(ATTACH|DETACH|PRAGMA|VACUUM|REINDEX)\b/i, "That command does not exist in MySQL."],
  [/^\s*(CREATE|DROP)\s+(DATABASE|SCHEMA)\b/i, "Practice mode has one database per dataset. Use the Reset button to start fresh, or run this in MySQL Workbench."],
  [/^\s*(CREATE|DROP)\s+(PROCEDURE|FUNCTION|TRIGGER|EVENT)\b/i, "Stored programs are not supported in practice mode. Run this one in MySQL Workbench."],
  [/^\s*CALL\b/i, "Stored procedures are not supported in practice mode."],
  [/^\s*SET\s+@/i, "User variables (@name) are not supported in practice mode. Use a CTE or subquery instead."],
];

function stripComments(sql: string) {
  return tokenize(sql).filter((t) => t.t !== "comment").map((t) => t.v).join("").trim();
}

function upperWords(sql: string) {
  return stripComments(sql).replace(/\s+/g, " ").toUpperCase();
}

const unquote = (s: string) => s.replace(/^[`"']|[`"']$/g, "");

/** Token-level rewrites applied to every statement that reaches SQLite. */
function rewriteTokens(sql: string, opts: { createTable?: boolean } = {}): string {
  const toks = tokenize(sql);
  const sig = (k: number, dir: 1 | -1) => {
    let j = k + dir;
    while (j >= 0 && j < toks.length && (toks[j].t === "ws" || toks[j].t === "comment")) j += dir;
    return j;
  };
  const out: string[] = [];
  for (let k = 0; k < toks.length; k++) {
    const tok = toks[k];
    const U = tok.v.toUpperCase();
    const next = toks[sig(k, 1)];
    const prev = toks[sig(k, -1)];

    if (tok.t === "var" && tok.v.startsWith("@@")) {
      const name = tok.v.slice(2).toLowerCase();
      const key = name in SERVER_VARIABLES ? name : name.replace(/^(global|session|local)\./, "");
      const val = SERVER_VARIABLES[key];
      if (val === undefined) throw new TranslateError(1193, `Unknown system variable '${name}'`);
      const lit = typeof val === "number" ? String(val) : `'${val}'`;
      // Without an alias MySQL names the column "@@name"; SQLite would use the literal.
      const after = toks[sig(k, 1)];
      const aliased = after && (after.t === "word" && !/^(FROM|WHERE|UNION|ORDER|GROUP|LIMIT|AND|OR|IS|IN|LIKE|THEN|ELSE|END|WHEN)$/i.test(after.v) || after.t === "ident" || after.t === "str");
      const inSelectList = prev && (prev.v === "," || /^(SELECT|DISTINCT)$/i.test(prev.v));
      out.push(inSelectList && !aliased && (!after || after.v === "," || after.v === ")" || /^(FROM|UNION)$/i.test(after.v)) ? `${lit} AS "${tok.v}"` : lit);
      continue;
    }
    if (tok.t === "punct" && tok.v === "/") {
      // MySQL '/' is always decimal division; SQLite truncates int / int.
      out.push("* 1.0 /");
      continue;
    }
    if (tok.t === "punct" && tok.v === "<=>") { out.push("IS"); continue; }
    if (tok.t === "punct" && tok.v === "&&") { out.push("AND"); continue; }
    if (tok.t === "str" && tok.v.startsWith('"')) {
      // MySQL treats "text" as a string literal.
      out.push(`'${tok.v.slice(1, -1).replace(/'/g, "''").replace(/""/g, '"')}'`);
      continue;
    }
    if (tok.t === "str" && tok.v.includes("\\")) {
      // MySQL backslash escapes inside strings.
      const body = tok.v.slice(1, -1).replace(/\\(.)/g, (_, ch: string) => (ch === "n" ? "\n" : ch === "t" ? "\t" : ch)).replace(/'/g, "''").replace(/''''/g, "''");
      out.push(`'${body}'`);
      continue;
    }
    if (tok.t === "word") {
      const isCall = next && next.t === "punct" && next.v === "(";
      if (U === "IF" && isCall && !(prev && prev.t === "word" && /^(TABLE|VIEW|INDEX|EXISTS)$/i.test(prev.v))) { out.push("IIF"); continue; }
      if ((U === "LEFT" || U === "RIGHT") && isCall) { out.push(`MYSQL_${U}`); continue; }
      if ((U === "DATABASE" || U === "SCHEMA") && isCall) { out.push("MYSQL_DATABASE"); continue; }
      if ((U === "DATE_ADD" || U === "DATE_SUB") && isCall) { out.push(`MYSQL_${U}`); continue; }
      if (U === "LAST_INSERT_ID" && isCall) { out.push("last_insert_rowid"); continue; }
      if (U === "DIV" && prev && prev.t !== "punct") { out.push("/"); continue; }
      if (U === "MOD" && !isCall) { out.push("%"); continue; }
      if (U === "XOR") throw new TranslateError(1235, "XOR is not supported in practice mode.");
      if (U === "INTERVAL" && prev && (prev.v === "+" || prev.v === "-")) {
        throw new TranslateError(1235, "date + INTERVAL n UNIT is not supported in practice mode. Write DATE_ADD(date, INTERVAL n UNIT) or DATE_SUB(…) — it works in MySQL too.");
      }
      if (U === "INTERVAL") {
        // INTERVAL <expr> <UNIT>  →  <expr>, '<UNIT>'  (consumed by MYSQL_DATE_ADD/SUB)
        const e = sig(k, 1);
        const unitIdx = sig(e, 1);
        if (toks[e] && toks[unitIdx] && toks[unitIdx].t === "word") {
          out.push(`${toks[e].v}, '${toks[unitIdx].v.toUpperCase()}'`);
          k = unitIdx;
          continue;
        }
      }
      if (U === "TIMESTAMPDIFF" && isCall) {
        const paren = sig(k, 1);
        const unitIdx = sig(paren, 1);
        out.push("TIMESTAMPDIFF(");
        out.push(`'${toks[unitIdx].v.toUpperCase()}'`);
        k = unitIdx;
        continue;
      }
      if (U === "SEPARATOR") { out.push(","); continue; }
      if ((U === "SIGNED" || U === "UNSIGNED") && prev && prev.t === "word" && prev.v.toUpperCase() === "AS") {
        out.push("INTEGER");
        const nx = sig(k, 1);
        if (toks[nx] && toks[nx].t === "word" && toks[nx].v.toUpperCase() === "INTEGER") k = nx;
        continue;
      }
      if (/^PORTFOLIO_RETAIL_(LAB|LARGE)$/.test(U) && next && next.v === ".") { out.push("main"); continue; }
      if (opts.createTable) {
        if (U === "AUTO_INCREMENT") {
          // drop the keyword (and an optional "= n")
          const eq = sig(k, 1);
          if (toks[eq] && toks[eq].v === "=") k = sig(eq, 1);
          continue;
        }
        if (U === "UNSIGNED" || U === "ZEROFILL") continue;
        if (U === "ENGINE" || U === "CHARSET" || U === "COLLATE" && !(prev && prev.v === ")")) {
          // table options: ENGINE=InnoDB, DEFAULT CHARSET=utf8mb4, COLLATE x
          const eq = sig(k, 1);
          k = toks[eq] && toks[eq].v === "=" ? sig(eq, 1) : eq;
          if (out.length && /^\s*DEFAULT\s*$/i.test(out[out.length - 1])) out.pop();
          continue;
        }
        if (U === "COMMENT" && next && next.t === "str") { k = sig(k, 1); continue; }
        if (U === "ENUM" && isCall) {
          // ENUM('a','b') → TEXT CHECK-less (the CHECK is up to the learner)
          let depth = 0, j = sig(k, 1);
          for (; j < toks.length; j++) {
            if (toks[j].v === "(") depth++;
            if (toks[j].v === ")" && --depth === 0) break;
          }
          out.push("TEXT");
          k = j;
          continue;
        }
        if ((U === "VARCHAR" || U === "CHAR") && isCall) {
          let j = sig(k, 1);
          let txt = U;
          for (; j < toks.length; j++) { txt += toks[j].v; if (toks[j].v === ")") break; }
          out.push(`${txt} COLLATE NOCASE`);
          k = j;
          continue;
        }
        if ((U === "TEXT" || U === "TINYTEXT" || U === "MEDIUMTEXT" || U === "LONGTEXT") && prev && prev.t !== "punct") {
          out.push("TEXT COLLATE NOCASE");
          continue;
        }
        if (U === "ON" && next && next.t === "word" && next.v.toUpperCase() === "UPDATE") {
          // ON UPDATE CURRENT_TIMESTAMP
          const a = sig(k, 1), b = sig(a, 1);
          const after = toks[b]?.v.toUpperCase();
          if (after === "CURRENT_TIMESTAMP" || after === "NOW") {
            k = b;
            if (toks[sig(b, 1)]?.v === "(") k = sig(sig(b, 1), 1);
            continue;
          }
        }
        if ((U === "INT" || U === "BIGINT" || U === "SMALLINT" || U === "TINYINT" || U === "MEDIUMINT") && /AUTO_INCREMENT/i.test(sql.slice(0))) {
          // keep INTEGER so a single-column PRIMARY KEY becomes the rowid alias
          out.push("INTEGER");
          if (next && next.v === "(") { let j = sig(k, 1); while (j < toks.length && toks[j].v !== ")") j++; k = j; }
          continue;
        }
      }
    }
    out.push(tok.v);
  }
  return out.join("");
}

export class TranslateError extends Error {
  constructor(public code: number, message: string) {
    super(message);
  }
}

/** Pull `INDEX name (cols)` / `KEY name (cols)` out of CREATE TABLE bodies. */
function extractInlineIndexes(sql: string, table: string) {
  const extra: string[] = [];
  const cleaned = sql.replace(/,\s*(UNIQUE\s+)?(INDEX|KEY)\s+`?(\w+)`?\s*\(([^)]*)\)/gi, (_m, uniq, _k, name, cols) => {
    extra.push(`CREATE ${uniq ? "UNIQUE " : ""}INDEX ${name} ON ${table} (${cols})`);
    return "";
  }).replace(/,\s*CONSTRAINT\s+`?\w+`?\s+(PRIMARY|FOREIGN|UNIQUE|CHECK)/gi, ", $1");
  return { cleaned, extra };
}

/** Rewrite GROUP_CONCAT(x ORDER BY y SEPARATOR s) → GROUP_CONCAT(x, s ORDER BY y). */
function fixGroupConcat(sql: string) {
  return sql.replace(/GROUP_CONCAT\s*\(([^()]*?)\s+ORDER\s+BY\s+([^()]*?)\s+SEPARATOR\s+('(?:[^']|'')*')\s*\)/gi, "GROUP_CONCAT($1, $3 ORDER BY $2)");
}

/**
 * SQLite only lets a compound SELECT (UNION / INTERSECT / EXCEPT) ORDER BY a
 * result alias, while MySQL also accepts the underlying column name
 * (ORDER BY customer_id after SELECT c.customer_id). Wrapping the compound in
 * a derived table makes both work the same way.
 */
function wrapCompoundOrderBy(sql: string) {
  const toks = tokenize(sql);
  let depth = 0;
  let compound = false;
  let orderAt = -1;
  for (let k = 0; k < toks.length; k++) {
    const t = toks[k];
    if (t.v === "(") depth++;
    else if (t.v === ")") depth--;
    else if (depth === 0 && t.t === "word") {
      const U = t.v.toUpperCase();
      if (U === "UNION" || U === "INTERSECT" || U === "EXCEPT") { compound = true; orderAt = -1; }
      if (U === "ORDER" && compound) orderAt = k;
    }
  }
  if (!compound || orderAt === -1 || /^\s*WITH\b/i.test(sql)) return sql;
  const head = toks.slice(0, orderAt).map((t) => t.v).join("");
  const tail = toks.slice(orderAt).map((t) => t.v).join("");
  return `SELECT * FROM (${head}) AS compound_result ${tail}`;
}

export function translate(stmt: string): Translated {
  const plain = stripComments(stmt);
  if (!plain) return { kind: "emulate", name: "comment-only" };
  const U = upperWords(stmt);

  for (const [re, msg] of BLOCKED) if (re.test(plain)) return { kind: "error", code: 1227, message: msg };

  let m: RegExpMatchArray | null;
  if ((m = plain.match(/^USE\s+`?(\w+)`?$/i))) return { kind: "emulate", name: "use", arg: m[1] };
  if (/^SHOW (FULL )?TABLES/.test(U)) return { kind: "emulate", name: "show-tables" };
  if (/^SHOW (DATABASES|SCHEMAS)/.test(U)) return { kind: "emulate", name: "show-databases" };
  if (/^SHOW (WARNINGS|ERRORS)/.test(U)) return { kind: "emulate", name: "show-warnings" };
  if ((m = plain.match(/^(?:DESCRIBE|DESC|EXPLAIN)\s+`?(\w+)`?\s*$/i)) || (m = plain.match(/^SHOW\s+(?:FULL\s+)?(?:COLUMNS|FIELDS)\s+(?:FROM|IN)\s+`?(?:\w+`?\.`?)?(\w+)`?/i)))
    return { kind: "emulate", name: "describe", arg: m[1] };
  if ((m = plain.match(/^SHOW\s+CREATE\s+(?:TABLE|VIEW)\s+`?(?:\w+`?\.`?)?(\w+)`?/i))) return { kind: "emulate", name: "show-create", arg: m[1] };
  if ((m = plain.match(/^SHOW\s+(?:INDEX|INDEXES|KEYS)\s+(?:FROM|IN)\s+`?(?:\w+`?\.`?)?(\w+)`?/i))) return { kind: "emulate", name: "show-index", arg: m[1] };
  if (/ WITH ROLLUP\b/.test(U)) return { kind: "error", code: 1235, message: "WITH ROLLUP is not supported in practice mode. The result grid in the lesson shows MySQL's output; or add a total row with UNION ALL (lesson 10)." };
  if (/^SHOW\b/.test(U)) return { kind: "error", code: 1064, message: "This SHOW command is not available in practice mode. Try SHOW TABLES, DESCRIBE table or SHOW INDEX FROM table." };
  if (/^SET (AUTOCOMMIT|NAMES|SESSION|SQL_MODE|TIME_ZONE|CHARACTER)/.test(U)) return { kind: "emulate", name: "set-noop", info: "Setting accepted (no effect in practice mode)." };

  try {
    if (/^(START TRANSACTION|BEGIN( WORK)?)$/.test(U)) return { kind: "sql", sql: ["BEGIN"] };
    if (/^(COMMIT|ROLLBACK)( WORK)?$/.test(U)) return { kind: "sql", sql: [U.split(" ")[0]] };
    if (/^EXPLAIN (ANALYZE |FORMAT ?= ?\w+ )?/.test(U)) {
      const inner = plain.replace(/^EXPLAIN\s+(ANALYZE\s+|FORMAT\s*=\s*\w+\s+)?/i, "");
      return { kind: "sql", sql: [`EXPLAIN QUERY PLAN ${rewriteTokens(fixGroupConcat(inner))}`], info: "Practice mode shows SQLite's plan (id, parent, detail). MySQL's EXPLAIN has different columns (type, key, rows) — run it in Workbench to read those." };
    }
    if ((m = plain.match(/^TRUNCATE\s+(?:TABLE\s+)?`?(\w+)`?$/i))) return { kind: "sql", sql: [`DELETE FROM ${m[1]}`] };
    if ((m = plain.match(/^DROP\s+INDEX\s+`?(\w+)`?\s+ON\s+`?(\w+)`?$/i))) return { kind: "sql", sql: [`DROP INDEX ${m[1]}`] };
    if ((m = plain.match(/^CREATE\s+OR\s+REPLACE\s+VIEW\s+`?(\w+)`?\s+AS\s+([\s\S]+)$/i)))
      return { kind: "sql", sql: [`DROP VIEW IF EXISTS ${m[1]}`, `CREATE VIEW ${m[1]} AS ${rewriteTokens(fixGroupConcat(m[2]))}`] };
    if ((m = plain.match(/^ALTER\s+TABLE\s+`?(\w+)`?\s+ADD\s+(UNIQUE\s+)?(?:INDEX|KEY)\s+`?(\w+)`?\s*\(([^)]*)\)$/i)))
      return { kind: "sql", sql: [`CREATE ${m[2] ? "UNIQUE " : ""}INDEX ${m[3]} ON ${m[1]} (${m[4]})`] };
    if ((m = plain.match(/^ALTER\s+TABLE\s+`?(\w+)`?\s+DROP\s+(?:INDEX|KEY)\s+`?(\w+)`?$/i))) return { kind: "sql", sql: [`DROP INDEX ${m[2]}`] };
    if ((m = plain.match(/^ALTER\s+TABLE\s+`?(\w+)`?\s+ADD\s+(?:COLUMN\s+)?([\s\S]+?)(\s+(AFTER\s+\w+|FIRST))?$/i)) && !/^ALTER\s+TABLE\s+\S+\s+ADD\s+(CONSTRAINT|PRIMARY|FOREIGN|UNIQUE|CHECK|INDEX|KEY)\b/i.test(plain))
      return { kind: "sql", sql: [`ALTER TABLE ${m[1]} ADD COLUMN ${rewriteTokens(m[2], { createTable: true })}`] };
    if (/^ALTER TABLE \S+ RENAME (TO|AS) /.test(U) || /^ALTER TABLE \S+ RENAME COLUMN /.test(U) || /^ALTER TABLE \S+ DROP (COLUMN )?\w+$/.test(U) && !/ DROP (INDEX|KEY|PRIMARY|FOREIGN|CHECK|CONSTRAINT)/.test(U))
      return { kind: "sql", sql: [rewriteTokens(plain.replace(/\bRENAME\s+AS\b/i, "RENAME TO").replace(/\bDROP\s+(?!COLUMN)(\w+)$/i, "DROP COLUMN $1"))] };
    if (/^ALTER TABLE/.test(U))
      return { kind: "error", code: 1235, message: "This ALTER TABLE form (MODIFY, CHANGE, ADD CONSTRAINT…) is not supported in practice mode. Create the table again with the new definition, or run it in MySQL Workbench." };
    if ((m = plain.match(/^CREATE\s+(?:TEMPORARY\s+)?TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?`?(\w+)`?/i)) && !/\bAS\s+SELECT\b|\bSELECT\b/i.test(plain.split("(")[0])) {
      let chk = 0;
      // Name CHECK constraints like MySQL does (table_chk_1, _2 …) so error messages match.
      const named = plain.replace(/(?<!CONSTRAINT\s+`?\w+`?\s+)\bCHECK\s*\(/gi, () => `CONSTRAINT ${m![1]}_chk_${++chk} CHECK (`);
      const { cleaned, extra } = extractInlineIndexes(named, m[1]);
      return { kind: "sql", sql: [rewriteTokens(cleaned, { createTable: true }), ...extra] };
    }
    if (/^INSERT IGNORE /.test(U)) return { kind: "sql", sql: [rewriteTokens(plain.replace(/^INSERT\s+IGNORE/i, "INSERT OR IGNORE"))] };
    if (/ ON DUPLICATE KEY UPDATE /.test(U))
      return { kind: "error", code: 1235, message: "ON DUPLICATE KEY UPDATE is not supported in practice mode. Use UPDATE, or run it in MySQL Workbench." };
    if (/^(UPDATE|DELETE) /.test(U) && / (JOIN) /.test(U.split(/ WHERE /)[0]))
      return { kind: "error", code: 1235, message: "Multi-table UPDATE / DELETE with JOIN is not supported in practice mode. Use WHERE … IN (SELECT …) instead." };
    return { kind: "sql", sql: [rewriteTokens(fixGroupConcat(wrapCompoundOrderBy(plain)))] };
  } catch (e) {
    if (e instanceof TranslateError) return { kind: "error", code: e.code, message: e.message };
    throw e;
  }
}

/** Is this statement a read that returns rows in MySQL? */
export function isReadStatement(stmt: string) {
  return /^(SELECT|WITH|SHOW|DESCRIBE|DESC|EXPLAIN|TABLE|VALUES|\()/i.test(stripComments(stmt));
}
