"""Run every course snippet on a real MySQL 8 server and store the result grids.

Usage (needs a local MySQL 8.0.16+ and `pip install mysql-connector-python`):
    npx tsx scripts/mysql/export-snippets.ts > /tmp/snippets.json
    MYSQL_USER=root MYSQL_PASSWORD=... python3 scripts/mysql/gen-results.py /tmp/snippets.json
Writes config/mysql/results.generated.json. Each snippet runs on a freshly
imported copy of its dataset, so UPDATE / DDL examples never leak into the next.
"""
import json, os, re, sys, datetime, decimal
import mysql.connector

ROOT = os.path.join(os.path.dirname(__file__), "..", "..")
USER = os.environ.get("MYSQL_USER", "root")
PW = os.environ.get("MYSQL_PASSWORD", "")
SEEDS = {
    "shop": ("portfolio_retail_lab", os.path.join(ROOT, "public/downloads/mysql-retail-lab-reset.sql")),
    "large": ("portfolio_retail_large", os.path.join(ROOT, "public/downloads/mysql-retail-large.sql")),
}
WRITE = re.compile(r"\b(INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|TRUNCATE|REPLACE|RENAME)\b", re.I)

def connect(db=None):
    return mysql.connector.connect(user=USER, password=PW, host="127.0.0.1", database=db, autocommit=True, use_pure=True)

def run_script(conn, text):
    cur = conn.cursor()
    # mysql-connector 9+: execute(multi=True) removed → use cmd_query_iter
    for result in conn.cmd_query_iter(text):
        if "columns" in result:
            conn.get_rows()
    cur.close()

def reload(ds):
    schema, path = SEEDS[ds]
    c = connect()
    if ds == "large":
        cur = c.cursor(); cur.execute(f"DROP DATABASE IF EXISTS {schema}"); cur.close()
    run_script(c, open(path).read())
    c.close()

def cell(v):
    if v is None: return None
    if isinstance(v, decimal.Decimal): return str(v)
    if isinstance(v, (datetime.date, datetime.datetime)): return v.isoformat(sep=" ") if isinstance(v, datetime.datetime) else v.isoformat()
    if isinstance(v, (bytes, bytearray)): return v.decode("utf8", "replace")
    if isinstance(v, float): return v
    return v

def execute(ds, sql):
    db = SEEDS[ds][0] if ds in SEEDS else None
    conn = connect(db)
    out = {"sets": [], "messages": []}
    try:
        for result in conn.cmd_query_iter(sql):
            if "columns" in result:
                cols = [c[0] for c in result["columns"]]
                rows, _ = conn.get_rows()
                conv = []
                for r in rows:
                    vals = []
                    for i, v in enumerate(r):
                        if isinstance(v, (bytes, bytearray)):
                            v = v.decode("utf8", "replace")
                        vals.append(cell(v))
                    conv.append(vals)
                out["sets"].append({"columns": cols, "rows": conv})
            else:
                n = result.get("affected_rows", 0)
                out["messages"].append(f"{n} row{'s' if n != 1 else ''} affected")
    except mysql.connector.Error as e:
        out["error"] = {"code": e.errno, "message": e.msg}
    conn.close()
    return out

def main():
    snippets = json.load(open(sys.argv[1]))
    dest = os.path.join(ROOT, "config/mysql/results.generated.json")
    results = {}
    loaded_large = False
    for s in snippets:
        ds = s["dataset"]
        if ds == "shop":
            reload("shop")
        elif ds == "large" and (not loaded_large or WRITE.search(s["sql"])):
            reload("large"); loaded_large = not WRITE.search(s["sql"])
        r = execute(ds, s["sql"])
        r["where"] = s["where"]
        results[s["key"]] = r
    # Show the conventional root user instead of the account that generated the file
    for r in results.values():
        for st in r["sets"]:
            st["rows"] = [[(v.replace(f"{USER}@localhost", "root@localhost") if isinstance(v, str) else v) for v in row] for row in st["rows"]]
    # Text protocol returns strings; turn integer-looking values into ints for compact JSON
    for r in results.values():
        for st in r["sets"]:
            st["rows"] = [[(int(v) if isinstance(v, str) and re.fullmatch(r"-?\d{1,15}", v) else v) for v in row] for row in st["rows"]]
    json.dump(dict(sorted(results.items())), open(dest, "w"), ensure_ascii=False, separators=(",", ":"))
    errs = [(r["where"], r["error"]) for r in results.values() if "error" in r]
    print(f"{len(results)} snippets, {len(errs)} with errors")
    for w, e in errs: print("  ", w, e)

if __name__ == "__main__":
    main()
