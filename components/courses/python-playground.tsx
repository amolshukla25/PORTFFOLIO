"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  Award,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  Eye,
  HelpCircle,
  Lightbulb,
  Play,
  RotateCcw,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

import type { PracticeExercise } from "@/config/courses";
import { runPythonTests, type ExecutionReport } from "@/lib/pyodide-runner";
import { cn } from "@/lib/utils";

interface PythonPlaygroundProps {
  exercises?: PracticeExercise[];
  initialCode?: string;
  expectedOutput?: string;
  courseId?: string;
  lessonId?: string;
  onAllCompleted?: () => void;
}

export default function PythonPlayground({
  exercises: propExercises,
  initialCode,
  expectedOutput,
  courseId = "default-course",
  lessonId = "default-lesson",
  onAllCompleted,
}: PythonPlaygroundProps) {
  const exercises: PracticeExercise[] = useMemo(() => {
    if (propExercises && propExercises.length > 0) return propExercises;
    return [
      {
        id: "try-it-yourself",
        title: "Try It Yourself — Interactive Code Experiment",
        difficulty: "Easy",
        points: 10,
        task: "Experiment with this lesson's code snippet. Modify the logic, run it, and inspect the terminal stdout below.",
        starterCode: initialCode || `# Python Playground\nprint("Hello from Python 3.12!")\n`,
        testCases: expectedOutput
          ? [
              {
                id: "tc-sample",
                name: "Expected Lesson Output",
                inputCode: "",
                expectedOutput: expectedOutput.trim(),
              },
            ]
          : [],
        hint: "Press 'Submit & Run Tests' to execute your Python script in WebAssembly.",
      },
    ];
  }, [propExercises, initialCode, expectedOutput]);

  const [activeIdx, setActiveIdx] = useState(0);
  const [userCodes, setUserCodes] = useState<Record<string, string>>({});
  const [isRunning, setIsRunning] = useState(false);
  const [report, setReport] = useState<ExecutionReport | null>(null);
  const [selectedTestCaseIdx, setSelectedTestCaseIdx] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"tests" | "console">("tests");

  // Solved state and XP points stored in localStorage
  const [solvedMap, setSolvedMap] = useState<Record<string, boolean>>({});
  const [earnedXP, setEarnedXP] = useState(0);
  const [celebration, setCelebration] = useState<{
    show: boolean;
    points: number;
    title: string;
  } | null>(null);

  const activeExercise = exercises[activeIdx] || exercises[0];

  // Storage key
  const storageKey = useMemo(
    () => `py_practice_${courseId}_${lessonId}`,
    [courseId, lessonId]
  );

  // Load solved map and code from localStorage on mount
  useEffect(() => {
    try {
      const savedSolved = localStorage.getItem(`${storageKey}_solved`);
      if (savedSolved) {
        setSolvedMap(JSON.parse(savedSolved));
      }
      const savedCodes = localStorage.getItem(`${storageKey}_codes`);
      if (savedCodes) {
        setUserCodes(JSON.parse(savedCodes));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, [storageKey]);

  // Calculate total XP earned across this lesson
  useEffect(() => {
    let total = 0;
    exercises.forEach((ex) => {
      if (solvedMap[ex.id]) {
        total += ex.points || (ex.difficulty === "Easy" ? 10 : ex.difficulty === "Medium" ? 20 : 30);
      }
    });
    setEarnedXP(total);
  }, [solvedMap, exercises]);

  // Default starter code for current exercise
  const currentCode = useMemo(() => {
    if (!activeExercise) return "";
    if (userCodes[activeExercise.id] !== undefined) {
      return userCodes[activeExercise.id];
    }
    return (
      activeExercise.starterCode ||
      `# ${activeExercise.title}\n# Write your solution below\n\ndef solve():\n    pass\n`
    );
  }, [activeExercise, userCodes]);

  const handleCodeChange = (newCode: string) => {
    if (!activeExercise) return;
    setUserCodes((prev) => {
      const next = { ...prev, [activeExercise.id]: newCode };
      try {
        localStorage.setItem(`${storageKey}_codes`, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleResetCode = () => {
    if (!activeExercise) return;
    const initial =
      activeExercise.starterCode ||
      `# ${activeExercise.title}\n# Write your solution below\n\ndef solve():\n    pass\n`;
    handleCodeChange(initial);
    setReport(null);
  };

  // Keyboard tab indentation handling in textarea
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;

      const updated = value.substring(0, start) + "    " + value.substring(end);
      handleCodeChange(updated);

      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 4;
      });
    }
  };

  // Run or Submit Code
  const handleExecute = async () => {
    if (!activeExercise || isRunning) return;
    setIsRunning(true);
    setReport(null);
    setActiveTab("tests");

    const tests =
      activeExercise.testCases && activeExercise.testCases.length > 0
        ? activeExercise.testCases
        : [
            {
              id: "tc-default",
              name: "Sample Test Case",
              inputCode: "solve()",
              expectedOutput: "",
            },
          ];

    try {
      const execReport = await runPythonTests(currentCode, tests);
      setReport(execReport);
      setSelectedTestCaseIdx(0);

      // If all tests passed and not already solved, reward XP
      if (execReport.success && !solvedMap[activeExercise.id]) {
        const points =
          activeExercise.points ||
          (activeExercise.difficulty === "Easy"
            ? 10
            : activeExercise.difficulty === "Medium"
              ? 20
              : 30);

        const nextSolved = { ...solvedMap, [activeExercise.id]: true };
        setSolvedMap(nextSolved);
        try {
          localStorage.setItem(`${storageKey}_solved`, JSON.stringify(nextSolved));
        } catch {}

        setCelebration({
          show: true,
          points,
          title: activeExercise.title,
        });

        setTimeout(() => setCelebration(null), 5000);

        // Check if all exercises are solved
        const allDone = exercises.every((ex) => nextSolved[ex.id]);
        if (allDone && onAllCompleted) {
          onAllCompleted();
        }
      }
    } catch (err: any) {
      setReport({
        success: false,
        totalTests: tests.length,
        passedTests: 0,
        results: [],
        overallStdout: "",
        overallStderr: err.message,
        totalDurationMs: 0,
        status: "RUNTIME_ERROR",
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const solvedCount = useMemo(
    () => exercises.filter((ex) => solvedMap[ex.id]).length,
    [exercises, solvedMap]
  );

  const totalPossibleXP = useMemo(() => {
    return exercises.reduce(
      (acc, ex) =>
        acc +
        (ex.points ||
          (ex.difficulty === "Easy" ? 10 : ex.difficulty === "Medium" ? 20 : 30)),
      0
    );
  }, [exercises]);

  const lineCount = useMemo(
    () => Math.max(currentCode.split("\n").length, 12),
    [currentCode]
  );

  if (!activeExercise) return null;

  return (
    <div className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs my-8 transition-all">
      {/* Top Header & Gamified XP Banner */}
      <div className="px-5 sm:px-6 py-4 border-b border-border/60 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Code2 className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-base font-bold text-foreground">
                Python Code Judge & Practice Arena
              </h2>
              <span className="inline-flex items-center gap-1 rounded-md bg-primary/15 px-2 py-0.5 text-[11px] font-semibold text-primary">
                <Zap className="h-3 w-3" />
                LeetCode Style
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Run real Python 3.12 WebAssembly code directly in your browser against automated test suites.
            </p>
          </div>
        </div>

        {/* Progress & XP Score Counter */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-muted/30 px-3 py-1.5 text-xs">
            <span className="text-muted-foreground font-medium">Solved:</span>
            <span className="font-bold text-foreground">
              {solvedCount} / {exercises.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-xl border border-star/30 bg-star/10 px-3 py-1.5 text-xs font-bold text-star">
            <Award className="h-4 w-4" />
            <span>
              {earnedXP} / {totalPossibleXP} XP
            </span>
          </div>
        </div>
      </div>

      {/* Challenge Selector Carousel Tabs (1 .. 25) */}
      <div className="border-b border-border/60 bg-muted/15 px-4 py-2.5 overflow-x-auto scrollbar-none flex items-center gap-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground px-2 shrink-0">
          Challenges:
        </span>
        {exercises.map((ex, idx) => {
          const isSolved = solvedMap[ex.id];
          const isCurrent = idx === activeIdx;
          return (
            <button
              key={ex.id}
              onClick={() => {
                setActiveIdx(idx);
                setReport(null);
                setShowHint(false);
                setShowSolution(false);
              }}
              className={cn(
                "relative flex h-8 min-w-[32px] px-2.5 items-center justify-center rounded-lg text-xs font-semibold transition-all shrink-0",
                isCurrent
                  ? "bg-primary text-primary-foreground shadow-xs font-bold"
                  : isSolved
                    ? "bg-success/15 text-success border border-success/30 hover:bg-success/25"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
              )}
            >
              {isSolved && !isCurrent && (
                <Check className="h-3 w-3 mr-1 text-success" />
              )}
              <span>{idx + 1}</span>
            </button>
          );
        })}
      </div>

      {/* Main Split Grid: Problem Statement (Left) vs Code Editor & Judge (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border/60">
        {/* LEFT COLUMN: Problem Details */}
        <div className="lg:col-span-5 p-5 sm:p-6 space-y-5 bg-card/50 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Header / Meta */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Problem {activeIdx + 1} of {exercises.length}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-0.5">
                  {activeExercise.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-xs font-semibold",
                    activeExercise.difficulty === "Easy" &&
                      "bg-success/10 text-success border border-success/20",
                    activeExercise.difficulty === "Medium" &&
                      "bg-star/10 text-star border border-star/20",
                    activeExercise.difficulty === "Hard" &&
                      "bg-destructive/10 text-destructive border border-destructive/20"
                  )}
                >
                  {activeExercise.difficulty}
                </span>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary border border-primary/20">
                  +{activeExercise.points || (activeExercise.difficulty === "Easy" ? 10 : activeExercise.difficulty === "Medium" ? 20 : 30)} XP
                </span>
              </div>
            </div>

            {/* Problem Description */}
            <div className="rounded-xl border border-border/60 bg-muted/20 p-4 text-sm leading-relaxed text-foreground whitespace-pre-line">
              {activeExercise.task}
            </div>

            {/* Test Case Samples Preview */}
            {activeExercise.testCases && activeExercise.testCases.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Sample Test Cases:
                </span>
                <div className="space-y-2">
                  {activeExercise.testCases.slice(0, 2).map((tc, tcIdx) => (
                    <div
                      key={tc.id || tcIdx}
                      className="rounded-lg border border-border/50 bg-muted/15 p-3 text-xs font-mono space-y-1"
                    >
                      <div className="text-muted-foreground">
                        <span className="text-primary font-semibold">Input: </span>
                        {tc.inputCode}
                      </div>
                      <div className="text-muted-foreground">
                        <span className="text-success font-semibold">Expected: </span>
                        {tc.expectedOutput}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hint Drawer */}
            {activeExercise.hint && (
              <div className="pt-2">
                {!showHint ? (
                  <button
                    onClick={() => setShowHint(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-star hover:underline"
                  >
                    <Lightbulb className="h-3.5 w-3.5" />
                    Need a hint? Click to reveal
                  </button>
                ) : (
                  <div className="rounded-xl border border-star/30 bg-star/5 p-3.5 text-xs text-foreground space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-star">
                      <Lightbulb className="h-4 w-4" />
                      <span>Hint:</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {activeExercise.hint}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Solution Reveal Drawer */}
            {activeExercise.solution && (
              <div className="pt-1">
                {!showSolution ? (
                  <button
                    onClick={() => setShowSolution(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:underline"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Stuck? View solution reference
                  </button>
                ) : (
                  <div className="rounded-xl border border-border/80 bg-code-bg overflow-hidden">
                    <div className="flex items-center justify-between px-3 py-1.5 bg-muted/40 border-b border-border/60 text-[11px] font-semibold text-muted-foreground">
                      <span>Python Reference Solution</span>
                      <button
                        onClick={() => setShowSolution(false)}
                        className="text-xs hover:text-foreground"
                      >
                        Hide
                      </button>
                    </div>
                    <pre className="p-3 font-mono text-xs overflow-x-auto text-code-fg leading-relaxed">
                      <code>{activeExercise.solution}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Between Challenges */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <button
              onClick={() => {
                if (activeIdx > 0) {
                  setActiveIdx(activeIdx - 1);
                  setReport(null);
                  setShowHint(false);
                  setShowSolution(false);
                }
              }}
              disabled={activeIdx === 0}
              className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous Problem
            </button>

            <button
              onClick={() => {
                if (activeIdx + 1 < exercises.length) {
                  setActiveIdx(activeIdx + 1);
                  setReport(null);
                  setShowHint(false);
                  setShowSolution(false);
                }
              }}
              disabled={activeIdx + 1 >= exercises.length}
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline disabled:opacity-30 disabled:pointer-events-none"
            >
              Next Problem
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Code Editor, Test Suite & Console */}
        <div className="lg:col-span-7 flex flex-col bg-background">
          {/* Editor Action Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 bg-muted/20 text-xs">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-success" />
              <span className="font-mono font-semibold text-foreground">
                main.py
              </span>
              <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground font-mono">
                Python 3.12 (WASM)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                title="Copy code"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
              <button
                onClick={handleResetCode}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                title="Reset starter code"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Interactive Code Editor with Line Numbers */}
          <div className="relative flex-1 min-h-[280px] sm:min-h-[320px] bg-code-bg font-mono text-xs sm:text-sm flex">
            {/* Line Numbers Gutter */}
            <div className="select-none py-3 px-3 text-right text-muted-foreground/40 bg-muted/10 border-r border-border/30 shrink-0 font-mono text-xs leading-6">
              {Array.from({ length: lineCount }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            {/* Code Textarea */}
            <textarea
              value={currentCode}
              onChange={(e) => handleCodeChange(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              className="flex-1 w-full bg-transparent p-3 text-code-fg font-mono text-xs sm:text-sm leading-6 resize-none focus:outline-hidden selection:bg-primary/30 scrollbar-thin"
              placeholder="# Write your Python solution here..."
            />
          </div>

          {/* Editor Action Buttons Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-t border-border/60 bg-muted/20">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              <span>Press <b>Run Code</b> to test or <b>Submit</b> to verify test cases</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExecute}
                disabled={isRunning}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    Executing...
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    Submit & Run Tests
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Test Results & Console Drawer */}
          {report && (
            <div className="border-t border-border/60 bg-card p-4 sm:p-5 space-y-4">
              {/* Report Header Status */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {report.success ? (
                    <div className="flex items-center gap-2 text-success font-bold text-sm">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Accepted — All {report.totalTests} Test Cases Passed!</span>
                    </div>
                  ) : report.status === "RUNTIME_ERROR" ? (
                    <div className="flex items-center gap-2 text-destructive font-bold text-sm">
                      <AlertCircle className="h-5 w-5" />
                      <span>Runtime Error / Syntax Error</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-destructive font-bold text-sm">
                      <AlertCircle className="h-5 w-5" />
                      <span>
                        Wrong Answer ({report.passedTests} / {report.totalTests} Passed)
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <Zap className="h-3.5 w-3.5 text-primary" />
                  <span>{report.totalDurationMs} ms</span>
                </div>
              </div>

              {/* Result Tabs (Test Cases vs Stdout Console) */}
              <div className="flex items-center gap-2 border-b border-border/40 pb-2 text-xs">
                <button
                  onClick={() => setActiveTab("tests")}
                  className={cn(
                    "px-3 py-1 rounded-md font-semibold transition-colors",
                    activeTab === "tests"
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Test Cases ({report.passedTests}/{report.totalTests})
                </button>
                <button
                  onClick={() => setActiveTab("console")}
                  className={cn(
                    "px-3 py-1 rounded-md font-semibold transition-colors",
                    activeTab === "console"
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Stdout Console
                </button>
              </div>

              {/* Tab 1: Test Cases Details */}
              {activeTab === "tests" && report.results.length > 0 && (
                <div className="space-y-3">
                  {/* Case Selectors */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {report.results.map((r, i) => (
                      <button
                        key={r.id || i}
                        onClick={() => setSelectedTestCaseIdx(i)}
                        className={cn(
                          "px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-1.5",
                          selectedTestCaseIdx === i
                            ? r.passed
                              ? "bg-success/20 text-success border border-success/40"
                              : "bg-destructive/20 text-destructive border border-destructive/40"
                            : r.passed
                              ? "bg-muted/40 text-success"
                              : "bg-muted/40 text-destructive"
                        )}
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            r.passed ? "bg-success" : "bg-destructive"
                          )}
                        />
                        <span>
                          {r.name || `Case ${i + 1}`}
                          {r.isHidden && " (Hidden)"}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Selected Test Case Details */}
                  {report.results[selectedTestCaseIdx] && (
                    <div className="rounded-xl border border-border/60 bg-muted/20 p-3.5 space-y-2.5 font-mono text-xs">
                      {report.results[selectedTestCaseIdx].error ? (
                        <div className="text-destructive whitespace-pre-wrap leading-relaxed">
                          {report.results[selectedTestCaseIdx].error}
                        </div>
                      ) : (
                        <>
                          <div>
                            <span className="text-muted-foreground font-semibold">
                              Input:{" "}
                            </span>
                            <span className="text-foreground">
                              {report.results[selectedTestCaseIdx].input || "solve()"}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground font-semibold">
                              Expected Output:{" "}
                            </span>
                            <span className="text-success">
                              {report.results[selectedTestCaseIdx].expected}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground font-semibold">
                              Your Output:{" "}
                            </span>
                            <span
                              className={cn(
                                report.results[selectedTestCaseIdx].passed
                                  ? "text-success"
                                  : "text-destructive font-bold"
                              )}
                            >
                              {report.results[selectedTestCaseIdx].actual || "None"}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Raw Console Stdout */}
              {activeTab === "console" && (
                <div className="rounded-xl border border-border/60 bg-code-bg p-3.5 font-mono text-xs text-code-fg whitespace-pre-wrap max-h-40 overflow-y-auto">
                  {report.overallStdout || report.overallStderr || "No stdout output printed."}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Gamified Celebration Toast / Modal */}
      {celebration && celebration.show && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center gap-3.5 rounded-2xl border border-star/50 bg-card p-4 shadow-xl text-foreground">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-star/20 text-star animate-bounce">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-sm text-foreground">
                  Challenge Solved! 🎉
                </span>
                <span className="rounded-md bg-star/20 px-1.5 py-0.5 text-xs font-extrabold text-star">
                  +{celebration.points} XP
                </span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {celebration.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
