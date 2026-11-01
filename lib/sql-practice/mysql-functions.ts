/**
 * MySQL functions that SQLite lacks (or behaves differently on), registered
 * on every practice database. Dates are stored as 'YYYY-MM-DD' text, the same
 * way MySQL prints them, so string comparison and ordering already match.
 */

type V = string | number | null | Uint8Array;

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const p2 = (n: number) => String(n).padStart(2, "0");

function parseDate(v: V): Date | null {
  if (v === null || v === undefined) return null;
  const s = String(v).trim();
  const m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
  if (!m) return null;
  const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +(m[4] ?? 0), +(m[5] ?? 0), +(m[6] ?? 0)));
  return isNaN(d.getTime()) ? null : d;
}

function hasTime(v: V) {
  return /\d{1,2}:\d{2}/.test(String(v));
}

function fmtDate(d: Date) {
  return `${d.getUTCFullYear()}-${p2(d.getUTCMonth() + 1)}-${p2(d.getUTCDate())}`;
}

function fmtDateTime(d: Date) {
  return `${fmtDate(d)} ${p2(d.getUTCHours())}:${p2(d.getUTCMinutes())}:${p2(d.getUTCSeconds())}`;
}

function nowLocal(): Date {
  const n = new Date();
  return new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds()));
}

function dayOfYear(d: Date) {
  return Math.floor((d.getTime() - Date.UTC(d.getUTCFullYear(), 0, 1)) / 86400000) + 1;
}

function dateFormat(v: V, f: V): V {
  const d = parseDate(v);
  if (!d || f === null) return null;
  return String(f).replace(/%(.)/g, (_, c: string) => {
    const h = d.getUTCHours();
    switch (c) {
      case "Y": return String(d.getUTCFullYear());
      case "y": return String(d.getUTCFullYear()).slice(-2);
      case "m": return p2(d.getUTCMonth() + 1);
      case "c": return String(d.getUTCMonth() + 1);
      case "d": return p2(d.getUTCDate());
      case "e": return String(d.getUTCDate());
      case "M": return MONTHS[d.getUTCMonth()];
      case "b": return MONTHS[d.getUTCMonth()].slice(0, 3);
      case "W": return DAYS[d.getUTCDay()];
      case "a": return DAYS[d.getUTCDay()].slice(0, 3);
      case "w": return String(d.getUTCDay());
      case "j": return String(dayOfYear(d)).padStart(3, "0");
      case "H": return p2(h);
      case "k": return String(h);
      case "h": case "I": return p2(h % 12 || 12);
      case "l": return String(h % 12 || 12);
      case "i": return p2(d.getUTCMinutes());
      case "s": case "S": return p2(d.getUTCSeconds());
      case "p": return h < 12 ? "AM" : "PM";
      case "T": return `${p2(h)}:${p2(d.getUTCMinutes())}:${p2(d.getUTCSeconds())}`;
      case "%": return "%";
      default: return c;
    }
  });
}

function addInterval(v: V, n: V, unit: V, sign: 1 | -1): V {
  const d = parseDate(v);
  if (!d || n === null) return null;
  const k = Number(n) * sign;
  const u = String(unit ?? "DAY").toUpperCase();
  const r = new Date(d.getTime());
  if (u === "DAY") r.setUTCDate(r.getUTCDate() + k);
  else if (u === "WEEK") r.setUTCDate(r.getUTCDate() + 7 * k);
  else if (u === "MONTH" || u === "QUARTER" || u === "YEAR") {
    const months = u === "MONTH" ? k : u === "QUARTER" ? 3 * k : 12 * k;
    const day = r.getUTCDate();
    r.setUTCDate(1);
    r.setUTCMonth(r.getUTCMonth() + months);
    const last = new Date(Date.UTC(r.getUTCFullYear(), r.getUTCMonth() + 1, 0)).getUTCDate();
    r.setUTCDate(Math.min(day, last));
  } else if (u === "HOUR") r.setUTCHours(r.getUTCHours() + k);
  else if (u === "MINUTE") r.setUTCMinutes(r.getUTCMinutes() + k);
  else if (u === "SECOND") r.setUTCSeconds(r.getUTCSeconds() + k);
  else return null;
  return hasTime(v) || ["HOUR", "MINUTE", "SECOND"].includes(u) ? fmtDateTime(r) : fmtDate(r);
}

function monthsBetween(a: Date, b: Date) {
  let m = (b.getUTCFullYear() - a.getUTCFullYear()) * 12 + (b.getUTCMonth() - a.getUTCMonth());
  if (m > 0 && b.getUTCDate() < a.getUTCDate()) m--;
  if (m < 0 && b.getUTCDate() > a.getUTCDate()) m++;
  return m;
}

function strToDate(s: V, f: V): V {
  if (s === null || f === null) return null;
  const src = String(s);
  let re = "";
  const order: string[] = [];
  for (let i = 0; i < String(f).length; i++) {
    const ch = String(f)[i];
    if (ch === "%" && i + 1 < String(f).length) {
      const c = String(f)[++i];
      if ("Yymcde".includes(c)) { re += c === "Y" ? "(\\d{4})" : "(\\d{1,2})"; order.push(c); }
      else if (c === "M" || c === "b") { re += "([A-Za-z]+)"; order.push(c); }
      else re += ".*?";
    } else re += ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  const m = src.match(new RegExp(`^${re}$`));
  if (!m) return null;
  let y = 1970, mo = 1, d = 1;
  order.forEach((c, i) => {
    const val = m[i + 1];
    if (c === "Y") y = +val;
    else if (c === "y") y = 2000 + +val;
    else if (c === "m" || c === "c") mo = +val;
    else if (c === "d" || c === "e") d = +val;
    else mo = MONTHS.findIndex((n) => n.toLowerCase().startsWith(val.toLowerCase().slice(0, 3))) + 1;
  });
  return `${y}-${p2(mo)}-${p2(d)}`;
}

function toStr(v: V): string | null {
  if (v === null || v === undefined) return null;
  if (v instanceof Uint8Array) return new TextDecoder().decode(v);
  return String(v);
}

function mysqlRound(x: number, d: number) {
  const f = Math.pow(10, d);
  return (Math.sign(x) * Math.round(Math.abs(x) * f + 1e-9)) / f;
}

export interface FunctionContext {
  /** Rows changed by the previous statement (MySQL ROW_COUNT()). */
  rowCount: () => number;
  database: () => string | null;
}

type Fn = (...args: V[]) => V;

export function mysqlFunctions(ctx: FunctionContext): Record<string, Fn> {
  const date1 = (f: (d: Date) => V) => (v: V) => {
    const d = parseDate(v);
    return d ? f(d) : null;
  };
  return {
    DATE_FORMAT: dateFormat,
    YEAR: date1((d) => d.getUTCFullYear()),
    MONTH: date1((d) => d.getUTCMonth() + 1),
    DAY: date1((d) => d.getUTCDate()),
    DAYOFMONTH: date1((d) => d.getUTCDate()),
    DAYOFWEEK: date1((d) => d.getUTCDay() + 1),
    WEEKDAY: date1((d) => (d.getUTCDay() + 6) % 7),
    DAYOFYEAR: date1((d) => dayOfYear(d)),
    DAYNAME: date1((d) => DAYS[d.getUTCDay()]),
    MONTHNAME: date1((d) => MONTHS[d.getUTCMonth()]),
    QUARTER: date1((d) => Math.floor(d.getUTCMonth() / 3) + 1),
    LAST_DAY: date1((d) => fmtDate(new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)))),
    DATEDIFF: (a, b) => {
      const x = parseDate(a), y = parseDate(b);
      if (!x || !y) return null;
      const ux = Date.UTC(x.getUTCFullYear(), x.getUTCMonth(), x.getUTCDate());
      const uy = Date.UTC(y.getUTCFullYear(), y.getUTCMonth(), y.getUTCDate());
      return Math.round((ux - uy) / 86400000);
    },
    TIMESTAMPDIFF: (unit, a, b) => {
      const x = parseDate(a), y = parseDate(b);
      if (!x || !y) return null;
      const u = String(unit).toUpperCase();
      const ms = y.getTime() - x.getTime();
      if (u === "DAY") return Math.trunc(ms / 86400000);
      if (u === "WEEK") return Math.trunc(ms / (7 * 86400000));
      if (u === "HOUR") return Math.trunc(ms / 3600000);
      if (u === "MINUTE") return Math.trunc(ms / 60000);
      if (u === "SECOND") return Math.trunc(ms / 1000);
      if (u === "MONTH") return monthsBetween(x, y);
      if (u === "QUARTER") return Math.trunc(monthsBetween(x, y) / 3);
      if (u === "YEAR") return Math.trunc(monthsBetween(x, y) / 12);
      return null;
    },
    MYSQL_DATE_ADD: (d, n, u) => addInterval(d, n, u, 1),
    MYSQL_DATE_SUB: (d, n, u) => addInterval(d, n, u, -1),
    ADDDATE: (d, n) => addInterval(d, n, "DAY", 1),
    SUBDATE: (d, n) => addInterval(d, n, "DAY", -1),
    STR_TO_DATE: strToDate,
    CURDATE: () => fmtDate(nowLocal()),
    UTC_DATE: () => fmtDate(new Date()),
    NOW: () => fmtDateTime(nowLocal()),
    SYSDATE: () => fmtDateTime(nowLocal()),
    CURTIME: () => fmtDateTime(nowLocal()).slice(11),
    // MySQL CONCAT returns NULL when any argument is NULL — SQLite's does not.
    CONCAT: (...a) => (a.some((x) => x === null) ? null : a.map((x) => toStr(x)).join("")),
    CONCAT_WS: (sep, ...a) => (sep === null ? null : a.filter((x) => x !== null).map((x) => toStr(x)).join(String(sep))),
    MYSQL_LEFT: (s, n) => (s === null || n === null ? null : String(toStr(s)).slice(0, Math.max(0, Number(n)))),
    MYSQL_RIGHT: (s, n) => (s === null || n === null ? null : Number(n) <= 0 ? "" : String(toStr(s)).slice(-Number(n))),
    LPAD: (s, n, p) => {
      if (s === null || n === null || p === null) return null;
      const str = String(toStr(s)), len = Number(n);
      if (str.length >= len) return str.slice(0, len);
      return String(p) ? str.padStart(len, String(p)) : null;
    },
    RPAD: (s, n, p) => {
      if (s === null || n === null || p === null) return null;
      const str = String(toStr(s)), len = Number(n);
      if (str.length >= len) return str.slice(0, len);
      return String(p) ? str.padEnd(len, String(p)) : null;
    },
    REVERSE: (s) => (s === null ? null : Array.from(String(toStr(s))).reverse().join("")),
    CHAR_LENGTH: (s) => (s === null ? null : Array.from(String(toStr(s))).length),
    CHARACTER_LENGTH: (s) => (s === null ? null : Array.from(String(toStr(s))).length),
    LOCATE: (sub, s, pos) => {
      if (sub === null || s === null) return null;
      const start = pos === undefined || pos === null ? 0 : Number(pos) - 1;
      return String(toStr(s)).toLowerCase().indexOf(String(toStr(sub)).toLowerCase(), start) + 1;
    },
    SUBSTRING_INDEX: (s, delim, count) => {
      if (s === null || delim === null || count === null) return null;
      const parts = String(toStr(s)).split(String(delim));
      const n = Number(count);
      if (n === 0) return "";
      return n > 0 ? parts.slice(0, n).join(String(delim)) : parts.slice(n).join(String(delim));
    },
    REPEAT: (s, n) => (s === null || n === null ? null : String(toStr(s)).repeat(Math.max(0, Number(n)))),
    SPACE: (n) => (n === null ? null : " ".repeat(Math.max(0, Number(n)))),
    UCASE: (s) => (s === null ? null : String(toStr(s)).toUpperCase()),
    LCASE: (s) => (s === null ? null : String(toStr(s)).toLowerCase()),
    MID: (s, p, n) => (s === null ? null : String(toStr(s)).substr(Number(p) - 1, n === undefined ? undefined : Number(n))),
    FORMAT: (x, d) => {
      if (x === null) return null;
      const dec = Math.max(0, Number(d ?? 0));
      return mysqlRound(Number(x), dec).toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
    },
    TRUNCATE: (x, d) => {
      if (x === null || d === null) return null;
      const f = Math.pow(10, Number(d));
      return Math.trunc(Number(x) * f) / f;
    },
    ROUND: (x, d) => (x === null ? null : mysqlRound(Number(x), d === undefined || d === null ? 0 : Number(d))),
    CEIL: (x) => (x === null ? null : Math.ceil(Number(x))),
    CEILING: (x) => (x === null ? null : Math.ceil(Number(x))),
    FLOOR: (x) => (x === null ? null : Math.floor(Number(x))),
    POW: (a, b) => (a === null || b === null ? null : Math.pow(Number(a), Number(b))),
    POWER: (a, b) => (a === null || b === null ? null : Math.pow(Number(a), Number(b))),
    SQRT: (a) => (a === null || Number(a) < 0 ? null : Math.sqrt(Number(a))),
    MOD: (a, b) => (a === null || b === null || Number(b) === 0 ? null : Number(a) % Number(b)),
    RAND: () => Math.random(),
    GREATEST: (...a) => (a.some((x) => x === null) ? null : a.reduce((m, x) => ((x as number) > (m as number) ? x : m))),
    LEAST: (...a) => (a.some((x) => x === null) ? null : a.reduce((m, x) => ((x as number) < (m as number) ? x : m))),
    VERSION: () => "8.4.0-practice",
    CURRENT_USER: () => "learner@localhost",
    USER: () => "learner@localhost",
    SESSION_USER: () => "learner@localhost",
    MYSQL_DATABASE: () => ctx.database(),
    CONNECTION_ID: () => 1,
    ROW_COUNT: () => ctx.rowCount(),
  };
}

export const SERVER_VARIABLES: Record<string, string | number> = {
  port: 3306,
  version: "8.4.0-practice",
  version_comment: "Practice mode (browser SQLite engine)",
  sql_mode: "ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION",
  time_zone: "SYSTEM",
  "global.time_zone": "SYSTEM",
  "session.time_zone": "SYSTEM",
  system_time_zone: "UTC",
  character_set_client: "utf8mb4",
  character_set_connection: "utf8mb4",
  character_set_server: "utf8mb4",
  collation_connection: "utf8mb4_0900_ai_ci",
  autocommit: 1,
  hostname: "practice",
  datadir: "/practice/",
  max_connections: 151,
  transaction_isolation: "REPEATABLE-READ",
  default_storage_engine: "InnoDB",
};
