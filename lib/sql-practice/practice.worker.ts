/// <reference lib="webworker" />
/**
 * Web Worker that owns the practice databases. Running SQL off the main
 * thread means a runaway query (an accidental CROSS JOIN on 4,000 orders)
 * can be stopped by terminating the worker, without freezing the page.
 */
import type { SqlJsStatic } from "sql.js";
import { compareRuns, referenceOrders } from "./compare";
import { PracticeDb } from "./engine";
import type { DatasetId } from "./datasets";
import type { WorkerRequest, WorkerResponse } from "./protocol";

declare const self: DedicatedWorkerGlobalScope & { initSqlJs?: (cfg: { locateFile: (f: string) => string }) => Promise<SqlJsStatic> };

// Workers may be served from a blob: URL, so build absolute URLs from the origin.
const ORIGIN = self.location.origin && self.location.origin !== "null" ? self.location.origin : "";
const VENDOR = `${ORIGIN}/vendor/sql.js/`;
let sqlPromise: Promise<SqlJsStatic> | null = null;
const sessions = new Map<DatasetId, PracticeDb>();
const pristine = new Map<DatasetId, Uint8Array>();

function loadSql() {
  if (!sqlPromise) {
    sqlPromise = (async () => {
      // sql.js ships as a classic script; evaluate it in the worker's global scope.
      const code = await (await fetch(`${VENDOR}sql-wasm.js`)).text();
      (0, eval)(code);
      if (!self.initSqlJs) throw new Error("sql.js failed to load");
      return self.initSqlJs({ locateFile: (f) => `${VENDOR}${f}` });
    })();
  }
  return sqlPromise;
}

async function fresh(dataset: DatasetId) {
  const SQL = await loadSql();
  if (!pristine.has(dataset)) {
    const db = new PracticeDb(SQL, dataset);
    pristine.set(dataset, db.export());
    db.close();
  }
  return new PracticeDb(SQL, dataset, pristine.get(dataset));
}

async function session(dataset: DatasetId) {
  if (!sessions.has(dataset)) sessions.set(dataset, await fresh(dataset));
  return sessions.get(dataset)!;
}

async function handle(msg: WorkerRequest): Promise<WorkerResponse> {
  switch (msg.type) {
    case "warm":
      await session(msg.dataset);
      return { id: msg.id, type: "ready" };
    case "reset": {
      sessions.get(msg.dataset)?.close();
      sessions.delete(msg.dataset);
      await session(msg.dataset);
      return { id: msg.id, type: "ready" };
    }
    case "run": {
      const db = await session(msg.dataset);
      return { id: msg.id, type: "run", output: db.run(msg.sql) };
    }
    case "check": {
      // Both queries run on their own fresh copy, so earlier experiments in
      // the session (an UPDATE you forgot to roll back) never affect the check.
      const mine = await fresh(msg.dataset);
      const ref = await fresh(msg.dataset);
      try {
        const output = mine.run(msg.sql);
        if (msg.expectError) {
          const ok = output.error?.code === msg.expectError;
          return {
            id: msg.id, type: "check", output,
            verdict: ok
              ? { ok: true, message: `Correct — MySQL error ${msg.expectError}, exactly as expected.` }
              : { ok: false, message: output.error ? `Got error ${output.error.code}, expected ${msg.expectError}.` : `No error yet — this task should trigger error ${msg.expectError}.` },
          };
        }
        const expected = ref.run(msg.answerSql);
        const verdict = compareRuns(expected, output, {
          orderMatters: msg.orderMatters ?? referenceOrders(msg.answerSql),
          numericTolerance: msg.numericTolerance,
        });
        return { id: msg.id, type: "check", output, verdict };
      } finally {
        mine.close();
        ref.close();
      }
    }
  }
}

self.onmessage = async (e: MessageEvent<WorkerRequest>) => {
  try {
    self.postMessage(await handle(e.data));
  } catch (err) {
    self.postMessage({ id: e.data.id, type: "fatal", message: err instanceof Error ? err.message : String(err) } satisfies WorkerResponse);
  }
};
