/**
 * Practice engine: runs learner SQL on an in-memory SQLite copy of a course
 * dataset (sql.js), with a MySQL compatibility layer on top.
 *
 * Environment-neutral: the caller passes the initialised sql.js module, so the
 * same code runs in the browser worker and in the Node CI check.
 */

import type { Database, SqlJsStatic } from "sql.js";
import { getDataset, sqlLiteral, type DatasetId } from "./datasets";
import { mysqlFunctions } from "./mysql-functions";
import { isReadStatement, splitStatements, translate } from "./translate";

export type Cell = string | number | null;

export interface ResultSet {
  columns: string[];
  rows: Cell[][];
  /** True when more rows existed than were returned. */
  truncated?: boolean;
  totalRows?: number;
}

export interface RunOutput {
  resultSets: ResultSet[];
  messages: string[];
  notes: string[];
  error?: { code: number; message: string; statement: number };
  ms: number;
}

export const ROW_LIMIT = 500;

/** Map SQLite errors to the MySQL error a learner would see in Workbench. */
export function toMysqlError(raw: string): { code: number; message: string } {
  const msg = raw.replace(/^Error:\s*/, "");
  let m: RegExpMatchArray | null;
  if ((m = msg.match(/no such column: (.+)/))) return { code: 1054, message: `Unknown column '${m[1].replace(/^\w+\./, (s) => s)}' in the query` };
  if ((m = msg.match(/no such table: (?:main\.)?(.+)/))) return { code: 1146, message: `Table '${m[1]}' doesn't exist` };
  if ((m = msg.match(/no such function: (.+)/))) return { code: 1305, message: `FUNCTION ${m[1]} does not exist (or is not available in practice mode)` };
  if ((m = msg.match(/UNIQUE constraint failed: (.+)/))) return { code: 1062, message: `Duplicate entry for key '${m[1]}'` };
  if (/FOREIGN KEY constraint failed/.test(msg)) return { code: 1452, message: "Cannot add or update a child row: a foreign key constraint fails" };
  if ((m = msg.match(/CHECK constraint failed: (.+)/))) return { code: 3819, message: `Check constraint '${m[1]}' is violated.` };
  if ((m = msg.match(/NOT NULL constraint failed: (.+)/))) return { code: 1048, message: `Column '${m[1].split(".").pop()}' cannot be null` };
  if ((m = msg.match(/table (\w+) already exists/))) return { code: 1050, message: `Table '${m[1]}' already exists` };
  if ((m = msg.match(/index (\w+) already exists/))) return { code: 1061, message: `Duplicate key name '${m[1]}'` };
  if ((m = msg.match(/ambiguous column name: (.+)/))) return { code: 1052, message: `Column '${m[1]}' in field list is ambiguous` };
  if (/misuse of aggregate/.test(msg)) return { code: 1111, message: "Invalid use of group function (an aggregate cannot go in WHERE — use HAVING)" };
  if (/cannot start a transaction within a transaction/.test(msg)) return { code: 0, message: "A transaction is already open; COMMIT or ROLLBACK it first." };
  if (/cannot (commit|rollback) - no transaction is active/.test(msg)) return { code: 0, message: "No open transaction (nothing to commit or roll back)." };
  if (/syntax error|incomplete input|unrecognized token/.test(msg))
    return { code: 1064, message: `You have an error in your SQL syntax (${msg.replace(/^.*?(near "[^"]*")?.*$/, "$1") || "check the statement"}).` };
  if (/SELECTs to the left and right of UNION do not have the same number/.test(msg)) return { code: 1222, message: "The used SELECT statements have a different number of columns" };
  if (/sub-select returns \d+ columns/.test(msg)) return { code: 1241, message: "Operand should contain 1 column(s)" };
  if (/interrupted/.test(msg)) return { code: 3024, message: "Query execution was interrupted (time limit)" };
  return { code: 1105, message: msg };
}

const OPTIONAL_ARITIES: Record<string, number[]> = {
  CONCAT: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  CONCAT_WS: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  GREATEST: [2, 3, 4, 5, 6, 7, 8],
  LEAST: [2, 3, 4, 5, 6, 7, 8],
  LOCATE: [2, 3],
  MID: [2, 3],
  ROUND: [1, 2],
  FORMAT: [2],
  RAND: [0, 1],
};

function arities(name: string, declared: number) {
  return OPTIONAL_ARITIES[name] ?? [declared];
}

const MYSQL_TYPE = (t: string) => t.replace(/\s*COLLATE\s+NOCASE/i, "").toLowerCase().replace(/^integer$/, "int");

export class PracticeDb {
  private db: Database;
  private lastChanges = -1;
  private currentDb: string | null;
  private inTx = false;
  readonly dataset: DatasetId;

  constructor(private SQL: SqlJsStatic, dataset: DatasetId, bytes?: Uint8Array) {
    this.dataset = dataset;
    this.db = bytes ? new SQL.Database(bytes) : new SQL.Database();
    const ds = getDataset(dataset);
    this.currentDb = ds ? ds.schema : null;
    this.register();
    if (!bytes) this.seed();
    this.db.run("PRAGMA foreign_keys = ON");
  }

  private register() {
    const fns = mysqlFunctions({ rowCount: () => this.lastChanges, database: () => this.currentDb });
    for (const [name, fn] of Object.entries(fns)) {
      // sql.js registers a function for exactly fn.length arguments, so
      // variadic and optional-argument functions are registered per arity.
      for (const n of arities(name, fn.length)) {
        const wrapped = (...args: unknown[]) => (fn as (...a: unknown[]) => unknown)(...args);
        Object.defineProperty(wrapped, "length", { value: n });
        this.db.create_function(name, wrapped);
      }
    }
  }

  private seed() {
    const ds = getDataset(this.dataset);
    if (!ds) return;
    const stmts: string[] = [];
    for (const t of ds.tables) {
      // Name CHECK constraints the way MySQL does (table_chk_1, _2 …) so errors match.
      let chk = 0;
      const cols = t.columns.map((c) =>
        c.replace(/\b(VARCHAR\(\d+\))/i, "$1 COLLATE NOCASE").replace(/\bCHECK\s*\(/i, () => `CONSTRAINT ${t.name}_chk_${++chk} CHECK (`)
      );
      stmts.push(`CREATE TABLE ${t.name} (${cols.join(", ")})`);
      for (const ix of t.indexes ?? []) stmts.push(`CREATE INDEX ${ix.name === ix.columns[0] ? `${t.name}_${ix.name}` : ix.name} ON ${t.name} (${ix.columns.join(", ")})`);
    }
    this.db.run("BEGIN");
    for (const s of stmts) this.db.run(s);
    for (const t of ds.tables) {
      for (let i = 0; i < t.rows.length; i += 400) {
        const chunk = t.rows.slice(i, i + 400).map((r) => `(${r.map(sqlLiteral).join(",")})`).join(",");
        this.db.run(`INSERT INTO ${t.name} VALUES ${chunk}`);
      }
    }
    this.db.run("COMMIT");
  }

  export(): Uint8Array {
    return this.db.export();
  }

  close() {
    this.db.close();
  }

  private userTables(): string[] {
    const r = this.db.exec("SELECT name FROM sqlite_master WHERE type IN ('table','view') AND name NOT LIKE 'sqlite_%' ORDER BY name");
    return r.length ? r[0].values.map((v) => String(v[0])) : [];
  }

  private query(sql: string): ResultSet {
    const stmt = this.db.prepare(sql);
    try {
      const columns = stmt.getColumnNames();
      const rows: Cell[][] = [];
      let total = 0;
      while (stmt.step()) {
        total++;
        if (rows.length < ROW_LIMIT) {
          rows.push(stmt.get().map((v) => (v instanceof Uint8Array ? `[${v.length} bytes]` : (v as Cell))));
        }
      }
      return { columns, rows, truncated: total > ROW_LIMIT, totalRows: total };
    } finally {
      stmt.free();
    }
  }

  private emulate(name: string, arg?: string): ResultSet | string | null {
    const schema = this.currentDb ?? "portfolio_retail_lab";
    switch (name) {
      case "use": {
        const ds = getDataset(this.dataset);
        if (ds && arg && arg.toLowerCase() !== ds.schema) {
          throw Object.assign(new Error(`Unknown database '${arg}' (practice mode has ${ds.schema})`), { mysqlCode: 1049 });
        }
        this.currentDb = arg ?? this.currentDb;
        return "Database changed";
      }
      case "show-tables":
        return { columns: [`Tables_in_${schema}`], rows: this.userTables().map((t) => [t]) };
      case "show-databases": {
        const ds = getDataset(this.dataset);
        return { columns: ["Database"], rows: [["information_schema"], ["mysql"], ...(ds ? [[ds.schema]] : []), ["performance_schema"], ["sys"]] };
      }
      case "show-warnings":
        return { columns: ["Level", "Code", "Message"], rows: [] };
      case "comment-only":
        return null;
      case "set-noop":
        return "Query OK, 0 rows affected";
      case "describe": {
        const t = this.resolveTable(arg!);
        const info = this.query(`SELECT name, type, "notnull", dflt_value, pk FROM pragma_table_info('${t}')`);
        const keys = this.columnKeys(t);
        return {
          columns: ["Field", "Type", "Null", "Key", "Default", "Extra"],
          rows: info.rows.map(([name, type, notnull, dflt, pk]) => [
            name, MYSQL_TYPE(String(type)), notnull || pk ? "NO" : "YES", keys[String(name)] ?? "", dflt === null ? null : String(dflt).replace(/^'|'$/g, ""), "",
          ]),
        };
      }
      case "show-create": {
        const t = this.resolveTable(arg!);
        const r = this.query(`SELECT type, sql FROM sqlite_master WHERE name = '${t}'`);
        const [type, sql] = r.rows[0];
        return { columns: type === "view" ? ["View", "Create View"] : ["Table", "Create Table"], rows: [[t, String(sql).replace(/\s*COLLATE NOCASE/gi, "")]] };
      }
      case "show-index": {
        const t = this.resolveTable(arg!);
        const rows: Cell[][] = [];
        const pk = this.query(`SELECT name FROM pragma_table_info('${t}') WHERE pk > 0 ORDER BY pk`).rows;
        pk.forEach(([c], i) => rows.push([t, 0, "PRIMARY", i + 1, c]));
        for (const [ixName, unique, origin] of this.query(`SELECT name, "unique", origin FROM pragma_index_list('${t}') ORDER BY name`).rows) {
          if (origin === "pk") continue;
          const shown = String(ixName).startsWith("sqlite_autoindex") ? null : String(ixName).replace(new RegExp(`^${t}_`), "");
          this.query(`SELECT name FROM pragma_index_info('${ixName}') ORDER BY seqno`).rows.forEach(([c], i) => rows.push([t, unique ? 0 : 1, shown ?? String(c), i + 1, c]));
        }
        return { columns: ["Table", "Non_unique", "Key_name", "Seq_in_index", "Column_name"], rows };
      }
    }
    return null;
  }

  private resolveTable(name: string) {
    const found = this.userTables().find((t) => t.toLowerCase() === name.toLowerCase());
    if (!found) throw Object.assign(new Error(`Table '${this.currentDb}.${name}' doesn't exist`), { mysqlCode: 1146 });
    return found;
  }

  private columnKeys(t: string): Record<string, string> {
    const keys: Record<string, string> = {};
    for (const [c] of this.query(`SELECT name FROM pragma_table_info('${t}') WHERE pk > 0`).rows) keys[String(c)] = "PRI";
    for (const [ix, unique, origin] of this.query(`SELECT name, "unique", origin FROM pragma_index_list('${t}')`).rows) {
      if (origin === "pk") continue;
      const cols = this.query(`SELECT name FROM pragma_index_info('${ix}') ORDER BY seqno`).rows;
      const first = String(cols[0]?.[0]);
      if (!keys[first]) keys[first] = unique && cols.length === 1 ? "UNI" : "MUL";
    }
    for (const [from] of this.query(`SELECT "from" FROM pragma_foreign_key_list('${t}')`).rows) if (!keys[String(from)]) keys[String(from)] = "MUL";
    return keys;
  }

  /** information_schema emulation: refreshed before statements that mention it. */
  private refreshInformationSchema() {
    const attached = this.query("SELECT name FROM pragma_database_list WHERE name = 'information_schema'").rows.length > 0;
    if (!attached) this.db.run("ATTACH DATABASE ':memory:' AS information_schema");
    const schema = this.currentDb ?? getDataset(this.dataset)?.schema ?? "practice";
    const run = (s: string) => this.db.run(s);
    run("DROP TABLE IF EXISTS information_schema.tables");
    run("DROP TABLE IF EXISTS information_schema.columns");
    run("DROP TABLE IF EXISTS information_schema.key_column_usage");
    run("CREATE TABLE information_schema.tables (table_schema TEXT, table_name TEXT, table_type TEXT, table_rows INT)");
    run("CREATE TABLE information_schema.columns (table_schema TEXT, table_name TEXT, column_name TEXT, ordinal_position INT, data_type TEXT, column_type TEXT, is_nullable TEXT, column_key TEXT, column_default TEXT)");
    run("CREATE TABLE information_schema.key_column_usage (table_schema TEXT, table_name TEXT, column_name TEXT, constraint_name TEXT, ordinal_position INT, referenced_table_schema TEXT, referenced_table_name TEXT, referenced_column_name TEXT)");
    const views = new Set(this.query("SELECT name FROM sqlite_master WHERE type = 'view'").rows.map((r) => String(r[0])));
    for (const t of this.userTables()) {
      const count = views.has(t) ? null : Number(this.query(`SELECT COUNT(*) FROM "${t}"`).rows[0][0]);
      run(`INSERT INTO information_schema.tables VALUES (${sqlLiteral(schema)}, ${sqlLiteral(t)}, ${sqlLiteral(views.has(t) ? "VIEW" : "BASE TABLE")}, ${count ?? "NULL"})`);
      const keys = this.columnKeys(t);
      this.query(`SELECT cid, name, type, "notnull", dflt_value, pk FROM pragma_table_info('${t}')`).rows.forEach(([cid, name, type, notnull, dflt, pk]) => {
        const ct = MYSQL_TYPE(String(type));
        run(`INSERT INTO information_schema.columns VALUES (${sqlLiteral(schema)}, ${sqlLiteral(t)}, ${sqlLiteral(String(name))}, ${Number(cid) + 1}, ${sqlLiteral(ct.replace(/\(.*/, ""))}, ${sqlLiteral(ct)}, '${notnull || pk ? "NO" : "YES"}', ${sqlLiteral(keys[String(name)] ?? "")}, ${dflt === null ? "NULL" : sqlLiteral(String(dflt))})`);
      });
      this.query(`SELECT name, pk FROM pragma_table_info('${t}') WHERE pk > 0 ORDER BY pk`).rows.forEach(([c, pk]) =>
        run(`INSERT INTO information_schema.key_column_usage VALUES (${sqlLiteral(schema)}, ${sqlLiteral(t)}, ${sqlLiteral(String(c))}, 'PRIMARY', ${pk}, NULL, NULL, NULL)`)
      );
      this.query(`SELECT id, seq, "table", "from", "to" FROM pragma_foreign_key_list('${t}')`).rows.forEach(([id, seq, ref, from, to]) =>
        run(`INSERT INTO information_schema.key_column_usage VALUES (${sqlLiteral(schema)}, ${sqlLiteral(t)}, ${sqlLiteral(String(from))}, ${sqlLiteral(`${t}_ibfk_${Number(id) + 1}`)}, ${Number(seq) + 1}, ${sqlLiteral(schema)}, ${sqlLiteral(String(ref))}, ${sqlLiteral(String(to))})`)
      );
    }
  }

  run(script: string): RunOutput {
    const started = Date.now();
    const out: RunOutput = { resultSets: [], messages: [], notes: [], ms: 0 };
    const stmts = splitStatements(script);
    for (let i = 0; i < stmts.length; i++) {
      const stmt = stmts[i];
      const tr = translate(stmt);
      try {
        if (tr.kind === "error") {
          out.error = { code: tr.code, message: tr.message, statement: i + 1 };
          break;
        }
        if (tr.kind === "emulate") {
          const r = this.emulate(tr.name, tr.arg);
          if (r && typeof r === "object") out.resultSets.push(r);
          else if (typeof r === "string") out.messages.push(r);
          if (tr.info) out.notes.push(tr.info);
          this.lastChanges = tr.name === "set-noop" ? 0 : -1;
          continue;
        }
        if (/information_schema\./i.test(stmt)) {
          if (this.inTx) out.notes.push("information_schema is refreshed outside transactions only; it may not show uncommitted changes.");
          else this.refreshInformationSchema();
        }
        if (tr.info) out.notes.push(tr.info);
        const read = isReadStatement(stmt);
        for (const s of tr.sql) {
          if (/^BEGIN$/i.test(s)) {
            if (this.inTx) { this.db.run("COMMIT"); out.notes.push("MySQL commits the open transaction when a new one starts; practice mode did the same."); }
            this.db.run("BEGIN");
            this.inTx = true;
            out.messages.push("Transaction started");
            continue;
          }
          if (/^(COMMIT|ROLLBACK)$/i.test(s)) {
            if (this.inTx) this.db.run(s);
            this.inTx = false;
            out.messages.push(`${s.toUpperCase() === "COMMIT" ? "Committed" : "Rolled back"}`);
            continue;
          }
          if (read || /^EXPLAIN/i.test(s)) {
            const rs = this.query(s);
            out.resultSets.push(rs);
            this.lastChanges = -1;
          } else {
            if (/^\s*(CREATE|DROP|ALTER)\b/i.test(s) && this.inTx) {
              this.db.run("COMMIT");
              this.inTx = false;
              out.notes.push("DDL (CREATE / ALTER / DROP) commits the open transaction in MySQL — so did practice mode. ROLLBACK will not undo it.");
            }
            this.db.run(s);
            const changed = this.db.getRowsModified();
            this.lastChanges = /^\s*(INSERT|UPDATE|DELETE|REPLACE)\b/i.test(s) ? changed : 0;
            out.messages.push(`Query OK, ${this.lastChanges} row${this.lastChanges === 1 ? "" : "s"} affected`);
          }
        }
      } catch (e) {
        const raw = e instanceof Error ? e.message : String(e);
        const code = (e as { mysqlCode?: number }).mysqlCode;
        let mapped = code ? { code, message: raw } : toMysqlError(raw);
        if (mapped.code === 1146 && !this.currentDb) mapped = { code: 1046, message: "No database selected" };
        const dup = raw.match(/UNIQUE constraint failed: (\w+)\.(\w+)/);
        if (dup) {
          const pk = this.query(`SELECT name FROM pragma_table_info('${dup[1]}') WHERE pk > 0`).rows.map((r) => String(r[0]));
          mapped = { code: 1062, message: `Duplicate entry for key '${dup[1]}.${pk.includes(dup[2]) ? "PRIMARY" : dup[2]}'` };
        }
        out.error = { ...mapped, statement: i + 1 };
        break;
      }
    }
    out.ms = Date.now() - started;
    return out;
  }
}

/** Fresh database from a dataset, or a clone of an existing one. */
export function openPracticeDb(SQL: SqlJsStatic, dataset: DatasetId, from?: PracticeDb) {
  return new PracticeDb(SQL, dataset, from?.export());
}
