"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { DatasetId } from "@/lib/sql-practice/datasets";
import type { WorkerRequest, WorkerResponse } from "@/lib/sql-practice/protocol";

type Pending = { resolve: (r: WorkerResponse) => void; timer: ReturnType<typeof setTimeout> };
type Req = WorkerRequest extends infer R ? (R extends { id: number } ? Omit<R, "id"> : never) : never;

/** Time limits per dataset, mirroring the "3 s query timeout" rule of the spec. */
const LIMIT_MS: Record<DatasetId, number> = { none: 3000, shop: 3000, large: 8000 };

let worker: Worker | null = null;
let nextId = 1;
const pending = new Map<number, Pending>();
const listeners = new Set<(s: EngineStatus) => void>();
let status: EngineStatus = "idle";

export type EngineStatus = "idle" | "loading" | "ready" | "error";

function setStatus(s: EngineStatus) {
  status = s;
  listeners.forEach((l) => l(s));
}

function spawn() {
  worker = new Worker(new URL("../lib/sql-practice/practice.worker.ts", import.meta.url), { type: "module" });
  worker.onmessage = (e: MessageEvent<WorkerResponse>) => {
    const p = pending.get(e.data.id);
    if (!p) return;
    clearTimeout(p.timer);
    pending.delete(e.data.id);
    if (e.data.type === "fatal" && status !== "ready") setStatus("error");
    else if (status !== "ready") setStatus("ready");
    p.resolve(e.data);
  };
  worker.onerror = () => setStatus("error");
}

function kill() {
  worker?.terminate();
  worker = null;
  pending.forEach((p, id) => {
    clearTimeout(p.timer);
    p.resolve({ id, type: "fatal", message: "stopped" });
  });
  pending.clear();
}

function send(req: Req): Promise<WorkerResponse> {
  if (!worker) spawn();
  if (status === "idle" || status === "error") setStatus("loading");
  const id = nextId++;
  const dataset = (req as { dataset: DatasetId }).dataset;
  // The first call also downloads sql.js (~700 KB), so allow it extra time.
  const limit = LIMIT_MS[dataset] + (status === "ready" ? 0 : 15000);
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      kill();
      setStatus("idle");
      resolve({
        id,
        type: "fatal",
        message: `Query stopped after ${Math.round(LIMIT_MS[dataset] / 1000)} s. Check for a missing JOIN condition or WHERE. The practice database was reset.`,
      });
    }, limit);
    pending.set(id, { resolve, timer });
    worker!.postMessage({ ...req, id } as WorkerRequest);
  });
}

/** Shared practice engine (one worker per tab). The worker loads lazily on first use. */
export function usePracticeEngine() {
  const [s, setS] = useState<EngineStatus>(status);
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    const l = (v: EngineStatus) => mounted.current && setS(v);
    listeners.add(l);
    return () => {
      mounted.current = false;
      listeners.delete(l);
    };
  }, []);

  const run = useCallback((dataset: DatasetId, sql: string) => send({ type: "run", dataset, sql }), []);
  const check = useCallback(
    (dataset: DatasetId, sql: string, answerSql: string, opts: { expectError?: number; orderMatters?: boolean; numericTolerance?: number } = {}) =>
      send({ type: "check", dataset, sql, answerSql, ...opts }),
    []
  );
  const reset = useCallback((dataset: DatasetId) => send({ type: "reset", dataset }), []);
  const warm = useCallback((dataset: DatasetId) => send({ type: "warm", dataset }), []);

  return { status: s, run, check, reset, warm };
}
