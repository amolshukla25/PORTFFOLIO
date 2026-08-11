"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Eraser,
  Loader2,
  Play,
  Terminal,
} from "lucide-react";

import { cn } from "@/lib/utils";

// Pyodide: Python compiled to WebAssembly, loaded lazily from the CDN the
// first time the user hits "Run" so lesson pages stay fast.
const PYODIDE_VERSION = "0.26.4";
const PYODIDE_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/pyodide.js`;

type RunState = "idle" | "loading" | "running" | "done" | "error";

interface PythonPlaygroundProps {
  initialCode: string;
  expectedOutput?: string;
}

// Global cache of the loaded Pyodide instance (one per tab).
declare global {
  interface Window {
    __pyodide?: any;
    loadPyodide?: (options: { indexURL: string }) => Promise<any>;
  }
}

async function getPyodide() {
  if (window.__pyodide) return window.__pyodide;

  if (!window.loadPyodide) {
    await new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = PYODIDE_URL;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () =>
        reject(new Error("Could not load the Python engine (Pyodide). Check your connection."));
      document.head.appendChild(script);
    });
  }

  window.__pyodide = await window.loadPyodide!({
    indexURL: `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`,
  });
  return window.__pyodide;
}

export default function PythonPlayground({
  initialCode,
  expectedOutput,
}: PythonPlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [state, setState] = useState<RunState>("idle");
  const [loadPct, setLoadPct] = useState(0);

  // Animate the loading bar while the WebAssembly runtime downloads.
  useEffect(() => {
    if (state !== "loading") return;
    setLoadPct(8);
    const id = setInterval(() => {
      setLoadPct((pct) => Math.min(pct + Math.random() * 12, 92));
    }, 400);
    return () => clearInterval(id);
  }, [state]);

  useEffect(() => {
    if (state === "running") setLoadPct(96);
    if (state === "done" || state === "error") setLoadPct(100);
  }, [state]);

  const handleRun = useCallback(async () => {
    if (state === "loading" || state === "running") return;

    setOutput("");
    setState("loading");

    try {
      const pyodide = await getPyodide();

      setState("running");

      // Capture stdout + stderr as plain text.
      let stdout = "";
      pyodide.setStdout({ batched: (s: string) => (stdout += s + "\n") });
      pyodide.setStderr({ batched: (s: string) => (stdout += s + "\n") });

      // Auto-load packages used by the snippet (numpy, pandas, ...).
      try {
        await pyodide.loadPackagesFromImports(code);
      } catch {
        // Missing packages are fine — the user may have written plain Python.
      }

      const result = await pyodide.runPythonAsync(code);
      if (result !== undefined && result !== null) {
        const text = String(result);
        if (text.trim()) stdout += text + "\n";
      }

      setOutput(stdout || "(no output produced)");
      setState("done");
    } catch (err: any) {
      const message =
        err && err.message
          ? err.message.replace(/^PythonError: /, "")
          : String(err);
      setOutput(`Traceback (most recent call last):\n${message}`);
      setState("error");
    }
  }, [code, state]);

  const handleReset = () => {
    setCode(initialCode);
    setOutput("");
    setState("idle");
  };

  const running = state === "loading" || state === "running";

  return (
    <div className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border/60 bg-muted/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary" />
          <div>
            <span className="text-sm font-semibold text-foreground block">
              Live Python Playground
            </span>
            <span className="text-[11px] text-muted-foreground">
              Real Python runs in your browser (WebAssembly) — edit & press Run
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleReset}
            disabled={running}
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-medium text-muted-foreground transition-all hover:text-foreground disabled:opacity-50"
          >
            <Eraser className="h-3.5 w-3.5" />
            Reset
          </button>
          <button
            onClick={handleRun}
            disabled={running}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm transition-all active:scale-[0.98] disabled:opacity-70",
              running
                ? "bg-muted text-muted-foreground"
                : "bg-primary text-primary-foreground hover:opacity-90"
            )}
          >
            {running ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                {state === "loading" ? "Loading Python…" : "Running…"}
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5" />
                Run
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="relative">
        <textarea
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            if (state === "done" || state === "error") {
              setState("idle");
              setOutput("");
            }
          }}
          spellCheck={false}
          aria-label="Python code editor"
          className="w-full resize-y bg-code-bg p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed text-code-fg outline-none placeholder:text-code-fg/30 min-h-[180px]"
          placeholder="# Write or edit Python code here…"
        />
        {state === "loading" && (
          <div className="absolute inset-x-0 bottom-0 h-1 bg-muted">
            <div
              className="h-full bg-accent transition-all duration-200"
              style={{ width: `${loadPct}%` }}
            />
          </div>
        )}
      </div>

      {/* Output */}
      <div className="border-t border-border/60 bg-muted/10">
        <div className="px-5 py-2.5 border-b border-border/40 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          <Terminal className="h-3.5 w-3.5" />
          Output
          {state === "done" && (
            <span className="ml-1 inline-flex items-center gap-1 normal-case tracking-normal text-success">
              <CheckCircle2 className="h-3 w-3" /> ran successfully
            </span>
          )}
          {state === "error" && (
            <span className="ml-1 inline-flex items-center gap-1 normal-case tracking-normal text-destructive">
              <AlertTriangle className="h-3 w-3" /> error
            </span>
          )}
        </div>
        <pre
          className={cn(
            "min-h-[80px] max-h-[280px] overflow-auto p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap",
            state === "error" ? "text-destructive" : "text-code-accent"
          )}
        >
          {output || (
            <span className="text-code-fg/40">
              Output will appear here. Press <kbd className="rounded border border-border bg-card px-1 py-0.5">Run</kbd> to execute the code.
            </span>
          )}
        </pre>
      </div>

      {/* Expected output (compare) */}
      {expectedOutput && (
        <div className="px-5 py-3.5 border-t border-border/60 bg-muted/10 flex flex-col sm:flex-row sm:items-start gap-2 text-xs text-muted-foreground">
          <span className="shrink-0 font-semibold text-foreground">
            Expected output:
          </span>
          <pre className="whitespace-pre-wrap font-mono text-code-fg/80">
            {expectedOutput}
          </pre>
        </div>
      )}
    </div>
  );
}
