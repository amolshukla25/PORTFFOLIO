"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle, ArrowLeft, BookOpen, BookOpenCheck, BookOpenText, Briefcase, Check, CheckCircle2, ChevronLeft, ChevronRight,
  Circle, Clock, Database, Download, Info, Lightbulb, ListChecks, Menu, PanelLeftClose, PanelLeftOpen, Play, Sparkles, Trophy, X,
} from "lucide-react";
import LessonQuiz from "@/components/courses/lesson-quiz";
import { useMysqlProgress } from "@/hooks/use-mysql-progress";
import type { RenderedLesson, RenderedSection } from "@/lib/mysql-course/render";
import { cn } from "@/lib/utils";
import CopyButton from "./copy-button";
import { ErDiagram, LessonDiagram } from "./diagrams";
import PracticePanel from "./practice-panel";
import MysqlProgressSync from "./progress-sync";
import ResultTable from "./result-table";
import { SqlPre } from "./sql-code";
import SqlRunner from "./sql-runner";

export interface SyllabusItem {
  slug: string;
  shortTitle: string;
  module: number;
  minutes: number;
  questions: number;
  questionIds: string[];
}

const STEPS = [
  { id: "lesson", label: "Lesson", note: "Understand the idea", icon: BookOpen },
  { id: "database", label: "Database", note: "Get the practice data", icon: Database },
  { id: "guided", label: "Guided", note: "Follow a worked example", icon: Play },
  { id: "practice", label: "Practice", note: "Solve problems", icon: ListChecks },
] as const;
type StepId = (typeof STEPS)[number]["id"];

const CALLOUT = {
  tip: { label: "Tip", icon: Lightbulb, cls: "border-primary/30 bg-primary/5", ic: "text-primary" },
  mistake: { label: "Common mistake", icon: AlertTriangle, cls: "border-destructive/30 bg-destructive/5", ic: "text-destructive" },
  remember: { label: "Remember", icon: Info, cls: "border-star/40 bg-star/10", ic: "text-[hsl(var(--star))]" },
  business: { label: "Business note", icon: Briefcase, cls: "border-success/30 bg-success/5", ic: "text-success" },
} as const;

function readVisited(slug: string): StepId[] {
  try {
    return JSON.parse(window.localStorage.getItem(`mysql-steps-${slug}`) ?? "[]");
  } catch {
    return [];
  }
}

export default function MysqlLessonPage({
  lesson,
  index,
  syllabus,
  modules,
}: {
  lesson: RenderedLesson;
  index: number;
  syllabus: SyllabusItem[];
  modules: { number: number; title: string }[];
}) {
  const progress = useMysqlProgress();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<StepId>("lesson");
  const [visited, setVisited] = useState<StepId[]>([]);
  const [guidedRan, setGuidedRan] = useState(false);
  const [reading, setReading] = useState(false);
  const [outlineOpen, setOutlineOpen] = useState(true);
  const [sheet, setSheet] = useState(false);
  const [readPct, setReadPct] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [confetti, setConfetti] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const prev = syllabus[index - 1];
  const next = syllabus[index + 1];
  const completed = mounted && progress.completedLessons.includes(lesson.slug);
  const solvedHere = mounted ? lesson.questions.filter((q) => progress.solved.includes(q.id)).length : 0;

  // Hash ⇄ step, so a link like …#practice opens the right step
  useEffect(() => {
    setMounted(true);
    const fromHash = window.location.hash.replace("#", "") as StepId;
    if (STEPS.some((s) => s.id === fromHash)) setStep(fromHash);
    else if (fromHash) {
      // a section anchor inside the Lesson step
      setStep("lesson");
      requestAnimationFrame(() => document.getElementById(fromHash)?.scrollIntoView());
    }
    setVisited(readVisited(lesson.slug));
    progress.setLastLesson(lesson.slug);
    try {
      setOutlineOpen(window.localStorage.getItem("course-outline-collapsed") !== "1" && window.innerWidth >= 1280);
    } catch {
      /* storage blocked */
    }
    const onHash = () => {
      const h = window.location.hash.replace("#", "") as StepId;
      if (STEPS.some((s) => s.id === h)) setStep(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.slug]);

  const go = useCallback(
    (to: StepId, scroll = true) => {
      setStep((from) => {
        if (from !== to) {
          setVisited((v) => {
            const nextV = v.includes(from) ? v : [...v, from];
            try {
              window.localStorage.setItem(`mysql-steps-${lesson.slug}`, JSON.stringify(nextV));
            } catch {
              /* ignore */
            }
            return nextV;
          });
        }
        return to;
      });
      history.replaceState(null, "", `#${to}`);
      if (scroll) topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [lesson.slug]
  );

  // Reading progress through the article
  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const done = window.innerHeight - el.getBoundingClientRect().top;
      setReadPct(total <= 0 ? 100 : Math.min(100, Math.max(0, (done / (el.offsetHeight || 1)) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [step]);

  useEffect(() => {
    if (!reading) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setReading(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [reading]);

  const say = (m: string) => {
    setToast(m);
    setTimeout(() => setToast(null), 2600);
  };

  const toggleComplete = () => {
    const nowDone = progress.toggleLesson(lesson.slug);
    if (nowDone) {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 1800);
    }
    say(nowDone ? "Lesson marked complete" : "Lesson marked as not complete");
  };

  const stepDone = (id: StepId) =>
    id === "practice" ? completed || (lesson.questions.length > 0 && solvedHere === lesson.questions.length) : id === "guided" ? guidedRan || visited.includes("guided") : visited.includes(id);

  const totalSolved = mounted ? progress.solved.length : 0;
  const totalProblems = syllabus.reduce((s, l) => s + l.questions, 0);
  const lessonsDone = mounted ? syllabus.filter((l) => progress.completedLessons.includes(l.slug)).length : 0;

  const outline = (
    <nav aria-label="Course outline" className="space-y-4">
      {modules.map((m) => (
        <div key={m.number}>
          <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Module {m.number} · {m.title}
          </p>
          <ol className="mt-1.5 space-y-0.5">
            {syllabus
              .map((l, i) => ({ ...l, n: i + 1 }))
              .filter((l) => l.module === m.number)
              .map((l) => {
                const done = mounted && progress.completedLessons.includes(l.slug);
                const solved = mounted ? l.questionIds.filter((id) => progress.solved.includes(id)).length : 0;
                const here = l.slug === lesson.slug;
                return (
                  <li key={l.slug}>
                    <Link
                      href={`/courses/mysql/${l.slug}`}
                      aria-current={here ? "page" : undefined}
                      onClick={() => setSheet(false)}
                      className={cn("flex min-h-11 items-start gap-2 rounded-lg px-2 py-1.5 text-[13px] leading-snug transition-colors", here ? "bg-primary/10 font-medium text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground")}
                    >
                      {done ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-label="Completed" /> : <Circle className="mt-0.5 h-4 w-4 shrink-0 opacity-40" aria-hidden />}
                      <span className="min-w-0 flex-1">
                        <span className="mr-1 font-mono text-[10px] opacity-70">{l.n}.</span>
                        {l.shortTitle}
                        <span className="mt-0.5 block text-[10.5px] opacity-80">
                          {l.minutes} min · {solved}/{l.questions} solved
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
          </ol>
        </div>
      ))}
    </nav>
  );

  return (
    <div className="relative border-t border-border/40">
      <MysqlProgressSync />
      {confetti && <Confetti />}
      <div className="flex">
        {/* Desktop outline */}
        {!reading && (
          <aside className={cn("no-print sticky top-16 hidden h-[calc(100vh-4rem)] shrink-0 overflow-y-auto border-r border-border/60 bg-card/40 transition-[width] lg:block", outlineOpen ? "w-72 p-4" : "w-0 overflow-hidden p-0")} aria-hidden={!outlineOpen}>
            <Link href="/courses/mysql" className="mb-4 inline-flex min-h-9 items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-3.5 w-3.5" /> MySQL course
            </Link>
            {outline}
            <div className="mt-5 rounded-xl border border-border p-3 text-xs">
              <p className="font-semibold">Course progress</p>
              <p className="mt-1 text-muted-foreground">{lessonsDone} / {syllabus.length} lessons · {totalSolved} / {totalProblems} problems</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-success" style={{ width: `${(lessonsDone / syllabus.length) * 100}%` }} />
              </div>
            </div>
          </aside>
        )}

        <div className="min-w-0 flex-1">
          {/* Sticky top bar */}
          <div className="no-print sticky top-16 z-30 border-b border-border/60 bg-background/90 backdrop-blur">
            <div className="flex items-center gap-2 px-3 py-2 sm:px-6">
              {!reading && (
                <>
                  <button type="button" onClick={() => setSheet(true)} className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-xs font-medium hover:bg-muted lg:hidden" aria-label="Open lesson list">
                    <Menu className="h-4 w-4" /> Lessons
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setOutlineOpen((o) => {
                        try { window.localStorage.setItem("course-outline-collapsed", o ? "1" : "0"); } catch { /* ignore */ }
                        return !o;
                      });
                    }}
                    className="hidden min-h-11 items-center rounded-lg px-2 text-muted-foreground hover:bg-muted lg:inline-flex"
                    aria-label={outlineOpen ? "Hide course outline" : "Show course outline"}
                  >
                    {outlineOpen ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
                  </button>
                </>
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold">{index + 1}. {lesson.shortTitle}</p>
                <p className="truncate text-[11px] text-muted-foreground">Step {STEPS.findIndex((s) => s.id === step) + 1} of 4 · {STEPS.find((s) => s.id === step)!.label}</p>
              </div>
              <button type="button" onClick={() => { setReading((r) => !r); say(reading ? "Reading mode off" : "Reading mode on — Esc to exit"); }} aria-pressed={reading} className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium hover:bg-muted">
                {reading ? <BookOpenCheck className="h-4 w-4 text-accent" /> : <BookOpenText className="h-4 w-4" />}
                <span className="hidden sm:inline">Reading mode</span>
              </button>
              <button type="button" onClick={toggleComplete} aria-pressed={completed} className={cn("inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium", completed ? "bg-success/10 text-success" : "hover:bg-muted")}>
                {completed ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                <span className="hidden sm:inline">{completed ? "Completed" : "Mark complete"}</span>
              </button>
              <button type="button" onClick={() => { say("Preparing the PDF — choose Save as PDF"); setTimeout(() => window.print(), 400); }} className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium hover:bg-muted">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download PDF</span>
              </button>
            </div>
            <div className="h-0.5 bg-transparent" aria-hidden>
              <div className="h-full bg-gradient-to-r from-primary to-accent transition-[width] duration-150" style={{ width: `${readPct}%` }} />
            </div>
          </div>

          <div ref={articleRef} className={cn("print-container mx-auto w-full px-4 pb-16 pt-6 sm:px-8", reading ? "max-w-3xl" : "max-w-5xl")}>
            <header className="space-y-3 border-b border-border/70 pb-6" ref={topRef}>
              <nav aria-label="Breadcrumb" className="no-print text-xs text-muted-foreground">
                <ol className="flex flex-wrap items-center gap-1">
                  <li><Link href="/courses" className="hover:text-foreground">Learning Hub</Link></li>
                  <li aria-hidden>/</li>
                  <li><Link href="/courses/mysql" className="hover:text-foreground">MySQL</Link></li>
                  <li aria-hidden>/</li>
                  <li>Module {lesson.module}: {modules.find((m) => m.number === lesson.module)?.title}</li>
                </ol>
              </nav>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">Lesson {index + 1} of {syllabus.length}</p>
              <h1 className="text-balance font-heading text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl">{lesson.title}</h1>
              <p className="max-w-[720px] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{lesson.summary}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {lesson.minutes} min</span>
                <span className="inline-flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" /> {Math.max(3, Math.round(lesson.words / 200))} min read</span>
                <span className="inline-flex items-center gap-1.5"><ListChecks className="h-3.5 w-3.5" /> {lesson.questions.length} problems · {solvedHere} solved</span>
                <span className="inline-flex items-center gap-1.5"><Database className="h-3.5 w-3.5" /> {lesson.dataset === "none" ? "No tables needed" : "Learning Shop data"}</span>
              </div>
            </header>

            {/* Stepper */}
            <div role="tablist" aria-label="Lesson steps" className="no-print z-20 -mx-4 mt-5 flex sm:sticky sm:top-[7.25rem] gap-1.5 overflow-x-auto bg-background/95 px-4 py-2 backdrop-blur sm:mx-0 sm:grid sm:grid-cols-4 sm:px-0">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                const active = step === s.id;
                const done = mounted && stepDone(s.id);
                return (
                  <button
                    key={s.id}
                    role="tab"
                    id={`tab-${s.id}`}
                    aria-selected={active}
                    aria-controls={`panel-${s.id}`}
                    onClick={() => go(s.id, false)}
                    className={cn("flex min-h-14 min-w-[8.5rem] shrink-0 items-center gap-2.5 rounded-xl border px-3 py-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/40")}
                  >
                    <span className={cn("grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold", active ? "bg-white/20" : done ? "bg-success/15 text-success" : "bg-muted text-muted-foreground")}>
                      {done && !active ? <Check className="h-4 w-4" /> : i + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-1 text-sm font-semibold"><Icon className="h-3.5 w-3.5" aria-hidden />{s.label}</span>
                      <span className={cn("block truncate text-[11px]", active ? "text-primary-foreground/80" : "text-muted-foreground")}>{s.note}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ── 1. Lesson ── */}
            <section id="panel-lesson" role="tabpanel" aria-labelledby="tab-lesson" hidden={step !== "lesson"} className="mysql-panel mt-6 space-y-8">
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-4 sm:p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">In short</p>
                <h2 className="mt-1 text-lg font-semibold">{lesson.quickAnswer.question}</h2>
                <p className="mt-2 max-w-[720px] text-[15px] leading-relaxed">{lesson.quickAnswer.answer}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-[1fr_minmax(0,240px)]">
                <div className="rounded-2xl border border-border bg-card p-4 sm:p-5">
                  <h2 className="text-sm font-semibold">By the end of this lesson you can</h2>
                  <ul className="mt-3 space-y-2">
                    {lesson.outcomesHtml.map((o, i) => (
                      <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-success" aria-hidden />
                        <span className="inline-md" dangerouslySetInnerHTML={{ __html: o }} />
                      </li>
                    ))}
                  </ul>
                </div>
                <nav aria-label="On this page" className="no-print rounded-2xl border border-border p-4 text-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">On this page</p>
                  <ol className="mt-2 space-y-1">
                    {lesson.sections.map((s) => (
                      <li key={s.id}><a href={`#${s.id}`} className="block py-0.5 text-[13px] text-muted-foreground hover:text-foreground">{s.heading}</a></li>
                    ))}
                    <li><a href="#common-mistakes" className="block py-0.5 text-[13px] text-muted-foreground hover:text-foreground">Common mistakes</a></li>
                    <li><a href="#faq" className="block py-0.5 text-[13px] text-muted-foreground hover:text-foreground">FAQ</a></li>
                  </ol>
                </nav>
              </div>

              {lesson.sections.map((s) => (
                <LessonSectionView key={s.id} s={s} />
              ))}

              <section id="common-mistakes" className="scroll-mt-40 rounded-2xl border border-destructive/25 bg-destructive/[0.03] p-4 sm:p-5">
                <h2 className="flex items-center gap-2 font-heading text-xl font-semibold"><AlertTriangle className="h-5 w-5 text-destructive" /> Common mistakes</h2>
                <div className="mt-4 space-y-4">
                  {lesson.mistakes.map((m, i) => (
                    <div key={i} className="grid gap-2 md:grid-cols-2">
                      <div className="min-w-0">
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-destructive">Wrong</p>
                        <MistakeText text={m.wrong} />
                      </div>
                      <div className="min-w-0">
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-success">Fix</p>
                        <MistakeText text={m.fix} />
                      </div>
                      <p className="inline-md text-sm text-muted-foreground md:col-span-2" dangerouslySetInnerHTML={{ __html: `Why: ${m.whyHtml}` }} />
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-border bg-card p-4 sm:p-5">
                <h2 className="font-heading text-xl font-semibold">Check yourself</h2>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed">
                  {lesson.checkYourselfHtml.map((c, i) => <li key={i} className="inline-md" dangerouslySetInnerHTML={{ __html: c }} />)}
                </ol>
                <p className="mt-3 text-sm text-muted-foreground">Answer out loud or in your notebook. If one is hard, reread that section before practising.</p>
              </section>

              <section id="faq" className="scroll-mt-40">
                <h2 className="font-heading text-xl font-semibold">Frequently asked questions</h2>
                <div className="mt-3 divide-y divide-border rounded-2xl border border-border bg-card">
                  {lesson.faq.map((f, i) => (
                    <details key={i} className="group px-4" open={i === 0}>
                      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 py-3 text-[15px] font-medium [&::-webkit-details-marker]:hidden">
                        <h3 className="text-[15px] font-medium">{f.q}</h3>
                        <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90" aria-hidden />
                      </summary>
                      <p className="pb-4 text-[15px] leading-relaxed text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="no-print">
                <div className="mb-3 flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-star" />
                  <h2 className="text-sm font-semibold">Quick quiz — {lesson.quiz.length} questions</h2>
                </div>
                <LessonQuiz quiz={{ title: lesson.shortTitle, questions: lesson.quiz }} courseId="mysql" lessonId={lesson.slug} />
              </section>

              <NextStepButton onClick={() => go(lesson.dataset === "none" ? "guided" : "database")}>
                {lesson.dataset === "none" ? "Next: try it in the guided example" : "Next: get the practice database"}
              </NextStepButton>
            </section>

            {/* ── 2. Database ── */}
            <section id="panel-database" role="tabpanel" aria-labelledby="tab-database" hidden={step !== "database"} className="mysql-panel mt-6 space-y-6">
              <DatabaseStep noImport={lesson.dataset === "none"} usesLarge={lesson.questions.some((q) => q.dataset === "large") || lesson.sections.some((s) => s.dataset === "large")} />
              <NextStepButton onClick={() => go("guided")}>Data ready? Follow the guided example</NextStepButton>
            </section>

            {/* ── 3. Guided ── */}
            <section id="panel-guided" role="tabpanel" aria-labelledby="tab-guided" hidden={step !== "guided"} className="mysql-panel mt-6 space-y-5">
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight">Let’s do one together</h2>
                <p className="mt-2 max-w-[720px] text-[15px] leading-relaxed text-muted-foreground">{lesson.guided.intro}</p>
              </div>
              <ol className="max-w-[720px] space-y-2">
                {lesson.guided.stepsHtml.map((st, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">{i + 1}</span>
                    <span className="inline-md" dangerouslySetInnerHTML={{ __html: st }} />
                  </li>
                ))}
              </ol>
              <div className="print-only"><SqlPre sql={lesson.guided.sql} /></div>
              <div className="no-print">
                {step === "guided" && (
                  <SqlRunner initialSql={lesson.guided.sql} dataset={lesson.guided.dataset} datasetSwitch={lesson.guided.dataset !== "none"} label="Guided example editor" onRan={() => setGuidedRan(true)} minLines={6} />
                )}
              </div>
              <div className="rounded-2xl border border-success/30 bg-success/5 p-4">
                <h3 className="text-sm font-semibold">What you should see</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{lesson.guided.explain}</p>
                {lesson.guided.result && !lesson.guided.result.error && lesson.guided.result.sets.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {lesson.guided.result.sets.map((st, i) => (
                      <ResultTable key={i} tone="expected" caption={lesson.dataset === "none" && lesson.slug === "install-connect-mysql" ? "Example from a MySQL 8.0 server — yours shows its own values" : lesson.guided.result!.sets.length > 1 ? `MySQL result ${i + 1}` : "MySQL result"} columns={st.columns} rows={st.rows} />
                    ))}
                  </div>
                )}
              </div>
              <NextStepButton onClick={() => go("practice")}>I understand — give me practice</NextStepButton>
            </section>

            {/* ── 4. Practice ── */}
            <section id="panel-practice" role="tabpanel" aria-labelledby="tab-practice" hidden={step !== "practice"} className="mysql-panel mt-6 space-y-6">
              <PracticePanel questions={lesson.questions} lessonSlug={lesson.slug} />
              <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <p className="flex-1 text-sm text-muted-foreground">
                  Finished? Save your queries in a <code className="rounded bg-muted px-1">.sql</code> file and mark the lesson complete.
                </p>
                <button type="button" onClick={toggleComplete} className={cn("inline-flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-semibold", completed ? "bg-success/10 text-success" : "bg-primary text-primary-foreground")}>
                  {completed ? <CheckCircle2 className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
                  {completed ? "Lesson complete" : "Mark lesson complete"}
                </button>
              </div>
            </section>

            {/* Print-only appendix: every answer, for the PDF */}
            <section className="print-only print-page-break">
              <h2>Answers — {lesson.shortTitle}</h2>
              <ol>
                {lesson.questions.map((q) => (
                  <li key={q.id}>
                    <p><strong>{q.level}.</strong> {q.prompt} <em>Target: {q.target}</em></p>
                    <pre>{q.answerSql}</pre>
                  </li>
                ))}
              </ol>
            </section>

            {/* Up next + prev/next */}
            {!reading && (
              <div className="no-print mt-12 space-y-6">
                {next ? (
                  <section className="overflow-hidden rounded-2xl border border-border bg-card">
                    <div className="border-b border-border/60 bg-accent/5 px-5 py-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent">Up next · Lesson {index + 2}</p>
                      <h2 className="mt-1 font-heading text-xl font-bold">{next.shortTitle}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{next.minutes} min · {next.questions} practice problems</p>
                    </div>
                    <div className="flex px-5 py-4">
                      <Link href={`/courses/mysql/${next.slug}`} className="ml-auto inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground sm:w-auto">
                        Start next lesson <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </section>
                ) : (
                  <section className="rounded-2xl border border-success/30 bg-success/5 p-5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-success">Last lesson</p>
                    <h2 className="mt-1 font-heading text-xl font-bold">Submit your capstone and you have finished the course</h2>
                    <p className="mt-1 text-sm text-muted-foreground">Go back to the course page to review your progress or revisit any lesson.</p>
                    <Link href="/courses/mysql" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground">Course overview</Link>
                  </section>
                )}
                <div className="flex items-center justify-between gap-3 border-t border-border/60 pt-6">
                  {prev ? (
                    <Link href={`/courses/mysql/${prev.slug}`} className="inline-flex min-h-11 items-center gap-1 rounded-xl px-2 text-sm text-muted-foreground hover:text-foreground">
                      <ChevronLeft className="h-4 w-4" /> <span className="hidden sm:inline">Previous:</span> {prev.shortTitle}
                    </Link>
                  ) : <span />}
                  {next && (
                    <Link href={`/courses/mysql/${next.slug}`} className="ml-auto inline-flex min-h-11 items-center gap-1 rounded-xl px-2 text-right text-sm font-medium text-primary">
                      <span className="hidden sm:inline">Next:</span> {next.shortTitle} <ChevronRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile bottom sheet */}
      {sheet && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Lessons">
          <button type="button" className="absolute inset-0 bg-black/40" aria-label="Close lesson list" onClick={() => setSheet(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[80vh] overflow-y-auto rounded-t-3xl border-t border-border bg-background p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold">{lessonsDone} / {syllabus.length} lessons · {totalSolved} / {totalProblems} problems</p>
              <button type="button" onClick={() => setSheet(false)} className="grid h-11 w-11 place-items-center rounded-lg hover:bg-muted" aria-label="Close"><X className="h-5 w-5" /></button>
            </div>
            {outline}
          </div>
        </div>
      )}

      {toast && (
        <div role="status" className="no-print fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-foreground px-4 py-2.5 text-sm text-background shadow-lg">{toast}</div>
      )}
    </div>
  );
}

/** A sentence ("Move the filter into ON") reads as text; a statement is highlighted as SQL. */
function MistakeText({ text }: { text: string }) {
  if (/^[A-Z][a-z]/.test(text.trim())) {
    return <p className="rounded-xl border border-border bg-card px-4 py-3 text-[14px] leading-relaxed">{text}</p>;
  }
  return <SqlPre sql={text} className="text-[12.5px]" />;
}

function NextStepButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} className="no-print inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      {children} <ChevronRight className="h-4 w-4" />
    </button>
  );
}

function LessonSectionView({ s }: { s: RenderedSection }) {
  const [tab, setTab] = useState(0);
  const [trying, setTrying] = useState(false);
  const C = s.callout ? CALLOUT[s.callout.kind] : null;
  return (
    <section id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-44 space-y-4">
      <h2 id={`${s.id}-h`} className="font-heading text-2xl font-semibold tracking-tight">
        <a href={`#${s.id}`} className="hover:text-accent">{s.heading}</a>
      </h2>
      <div className="blog-content lesson-content mysql-prose max-w-[720px]" dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />
      {s.tabs && (
        <div className="max-w-[760px] rounded-2xl border border-border bg-card">
          <div role="tablist" aria-label={`${s.heading} options`} className="flex gap-1 overflow-x-auto border-b border-border p-1.5">
            {s.tabs.map((t, i) => (
              <button key={t.label} role="tab" aria-selected={tab === i} onClick={() => setTab(i)} className={cn("min-h-10 shrink-0 rounded-lg px-3 text-sm font-medium", tab === i ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>
                {t.label}
              </button>
            ))}
          </div>
          {s.tabs.map((t, i) => (
            <div key={t.label} role="tabpanel" hidden={tab !== i} className="mysql-tab blog-content lesson-content mysql-prose px-4 py-3" data-label={t.label} dangerouslySetInnerHTML={{ __html: t.html }} />
          ))}
        </div>
      )}
      {s.diagram && <LessonDiagram kind={s.diagram} />}
      {s.sql && (
        <div className="space-y-2">
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-code-bg">
            <div className="flex items-center gap-2 border-b border-white/5 px-3 py-1.5">
              <span className="text-[11px] font-medium uppercase tracking-wider text-code-fg/60">SQL · {s.dataset === "large" ? "large dataset" : s.dataset === "none" ? "no tables" : "shop"}</span>
              <div className="ml-auto flex items-center gap-1">
                <CopyButton text={s.sql} />
                <button type="button" onClick={() => setTrying((t) => !t)} className="no-print inline-flex min-h-9 items-center gap-1.5 rounded-lg px-2.5 text-xs font-semibold text-code-accent hover:bg-white/10" aria-expanded={trying}>
                  <Play className="h-3.5 w-3.5" /> {trying ? "Close editor" : "Try it"}
                </button>
              </div>
            </div>
            {!trying && <SqlPre sql={s.sql} className="rounded-none" />}
          </div>
          {trying && <SqlRunner initialSql={s.sql} dataset={s.dataset} datasetSwitch={s.dataset !== "none"} label={`Editor: ${s.heading}`} />}
          {s.result && !s.result.error && s.result.sets.length > 0 && (
            <div className="space-y-2">
              {s.result.sets.map((st, i) => (
                <ResultTable key={i} tone="expected" caption={s.result!.sets.length > 1 ? `MySQL result ${i + 1}` : "MySQL result"} columns={st.columns} rows={st.rows} />
              ))}
            </div>
          )}
          {s.result?.error && (
            <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-3 py-2 font-mono text-[12.5px] text-destructive">MySQL: ERROR {s.result.error.code} — {s.result.error.message}</p>
          )}
          {s.result && !s.result.error && s.result.sets.length === 0 && s.result.messages.length > 0 && (
            <p className="rounded-xl bg-muted px-3 py-2 font-mono text-xs text-muted-foreground">MySQL: {s.result.messages.join(" · ")}</p>
          )}
        </div>
      )}
      {s.afterHtml && <div className="blog-content lesson-content mysql-prose max-w-[720px]" dangerouslySetInnerHTML={{ __html: s.afterHtml }} />}
      {s.callout && C && (
        <aside className={cn("flex max-w-[760px] gap-3 rounded-2xl border p-4", C.cls)}>
          <C.icon className={cn("mt-0.5 h-5 w-5 shrink-0", C.ic)} aria-hidden />
          <div className="text-[15px] leading-relaxed">
            <p className="text-[11px] font-semibold uppercase tracking-wider">{C.label}</p>
            <p className="inline-md mt-0.5" dangerouslySetInnerHTML={{ __html: s.callout.html }} />
          </div>
        </aside>
      )}
    </section>
  );
}

function DatabaseStep({ noImport, usesLarge }: { noImport: boolean; usesLarge: boolean }) {
  return (
    <>
      <div>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Meet Learning Shop</h2>
        <p className="mt-2 max-w-[720px] text-[15px] leading-relaxed text-muted-foreground">
          One small fictional shop powers the whole course: 6 customers, 6 products, 8 orders and 14 order lines, small enough to check every answer by eye. The practice editor on this page already contains it. To practise in MySQL Workbench, import it once.
        </p>
        {noImport && (
          <p className="mt-3 max-w-[720px] rounded-xl bg-accent/10 p-3 text-sm text-accent">You do not need this database for lessons 1 and 2 — go straight to the guided example. Import it when you reach lesson 3.</p>
        )}
      </div>
      <ErDiagram />
      <div className="grid gap-3 sm:grid-cols-3">
        <DownloadCard href="/downloads/mysql-retail-lab.sql" title="Practice database" note="Small shop · creates portfolio_retail_lab · safe to re-run" primary />
        <DownloadCard href="/downloads/mysql-retail-lab-reset.sql" title="Reset script" note="Drops and recreates portfolio_retail_lab. Deletes your changes — practice servers only." warn />
        <DownloadCard href="/downloads/mysql-retail-large.sql" title="Large dataset" note={`4,000 orders · schema portfolio_retail_large${usesLarge ? " · used in this lesson" : " · for lessons 11 and 14"}`} />
      </div>
      <div className="max-w-[760px] space-y-3 rounded-2xl border border-border bg-card p-4 sm:p-5">
        <h3 className="font-semibold">Import in MySQL Workbench</h3>
        <ol className="list-decimal space-y-1.5 pl-5 text-[15px] leading-relaxed text-muted-foreground">
          <li>Connect to your local MySQL server (8.0.16 or newer; 8.4 recommended).</li>
          <li>Choose <strong className="text-foreground">File → Open SQL Script</strong> and open the downloaded file.</li>
          <li>Click the lightning bolt to execute the whole script. The last result shows 6, 6, 8 and 14 rows.</li>
          <li>Refresh the Schemas panel, then select the database:</li>
        </ol>
        <div className="relative">
          <SqlPre sql={"USE portfolio_retail_lab;\nSHOW TABLES;"} />
          <div className="absolute right-1.5 top-1.5"><CopyButton text={"USE portfolio_retail_lab;"} label="Copy USE" /></div>
        </div>
        <p className="text-sm text-muted-foreground">Command line instead: <code className="rounded bg-muted px-1">mysql -u root -p &lt; mysql-retail-lab.sql</code></p>
        <p className="text-sm text-muted-foreground">In the practice editor, the <strong className="text-foreground">Reset database</strong> button does the same as the reset script — instantly and only in your browser.</p>
      </div>
    </>
  );
}

function DownloadCard({ href, title, note, primary, warn }: { href: string; title: string; note: string; primary?: boolean; warn?: boolean }) {
  return (
    <a href={href} download className={cn("group flex min-h-24 flex-col gap-1 rounded-2xl border p-4 transition-colors", primary ? "border-primary/40 bg-primary/5 hover:bg-primary/10" : warn ? "border-destructive/30 hover:bg-destructive/5" : "border-border hover:bg-muted/60")}>
      <span className="inline-flex items-center gap-2 font-semibold">
        {warn ? <AlertTriangle className="h-4 w-4 text-destructive" /> : <Download className="h-4 w-4 text-primary" />}
        {title}
      </span>
      <span className="text-xs leading-relaxed text-muted-foreground">{note}</span>
    </a>
  );
}

function Confetti() {
  const pieces = useMemo(() => Array.from({ length: 36 }, (_, i) => ({ i, left: Math.random() * 100, delay: Math.random() * 0.3, hue: [190, 221, 32, 158, 0][i % 5] })), []);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] overflow-hidden motion-reduce:hidden">
      {pieces.map((p) => (
        <span key={p.i} className="confetti-piece" style={{ left: `${p.left}%`, animationDelay: `${p.delay}s`, background: `hsl(${p.hue} 85% 55%)` }} />
      ))}
    </div>
  );
}
