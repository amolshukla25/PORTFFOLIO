"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  FileText,
  Download,
  Copy,
  Check,
  Play,
  Terminal,
  Clock,
  Menu,
  X,
  FileCode,
  Eye,
  Heart,
  Lightbulb,
  ListChecks,
  Award,
  GraduationCap,
  CheckCircle2,
  Circle,
  Trophy,
  PanelLeftClose,
  PanelLeftOpen,
  BookOpenText,
  BookOpenCheck
} from "lucide-react";
import { COURSES } from "@/config/courses";
import { LESSON_QUIZZES } from "@/config/quizzes";
import { siteConfig } from "@/config/site";
import { useCourseProgress } from "@/hooks/use-course-progress";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LessonQuiz from "./lesson-quiz";
import PythonPlayground from "./python-playground";

interface LessonNotesPageProps {
  /** Pre-rendered HTML of the lesson body, produced server-side so crawlers
   *  see the full notes without executing JavaScript. */
  contentHtml: string;
}

export default function LessonNotesPage({ contentHtml }: LessonNotesPageProps) {
  const router = useRouter();
  const params = useParams();
  const courseId = params.courseId as string;
  const lessonId = params.lessonId as string;

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "output">("code");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [mounted, setMounted] = useState(false);
  // Desktop syllabus outline collapse state (persisted so it survives navigation)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  // Distraction-free reading mode — notes only, ideal text measure
  const [focusMode, setFocusMode] = useState(false);
  // Reading progress 0–100 for the slim progress bar under the sticky header
  const [readingProgress, setReadingProgress] = useState(0);
  // Measures scroll progress through the lesson article itself (not the footer)
  const articleRef = useRef<HTMLElement>(null);
  // Becomes true once the user explicitly chooses the outline state — stops auto-collapse
  const userChoseOutline = useRef(false);

  // Progress tracking (localStorage-backed via zustand persist)
  const progress = useCourseProgress();
  const completedLessons = mounted ? progress.completed[courseId] ?? [] : [];
  const isCompleted = completedLessons.includes(lessonId);

  useEffect(() => {
    setMounted(true);
    // Restore the user's explicit outline preference; otherwise auto-collapse
    // on small laptops (< 1280px) to give the notes more room by default.
    const saved = window.localStorage.getItem("course-outline-collapsed");
    if (saved === "1" || saved === "0") {
      userChoseOutline.current = true;
      setSidebarCollapsed(saved === "1");
      return;
    }
    const mq = window.matchMedia("(max-width: 1279px)");
    const apply = () => {
      // Never override an explicit choice made this session
      if (userChoseOutline.current) return;
      setSidebarCollapsed(mq.matches);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Track reading progress through the lesson article for the progress bar
  useEffect(() => {
    const updateProgress = () => {
      const el = articleRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setReadingProgress(0);
        return;
      }
      const rect = el.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      setReadingProgress(
        Math.min(100, Math.max(0, (scrolled / total) * 100))
      );
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  // Exit reading mode with the Escape key
  useEffect(() => {
    if (!focusMode) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFocusMode(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [focusMode]);

  // Find course and active lesson
  const course = COURSES.find((c) => c.id === courseId);
  if (!course) return null;

  // Flatten all lessons to locate active lesson
  const allLessons = course.modules.flatMap((m) => m.lessons);
  const lessonIndex = allLessons.findIndex((l) => l.id === lessonId);
  const activeLesson = allLessons[lessonIndex];
  
  if (!activeLesson) return null;

  // Next & Previous lessons
  const prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;

  // Copy code to clipboard handler
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeLesson.codeSnippet);
      setCopied(true);
      showToast("Code snippet copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      showToast("Failed to copy code.");
    }
  };

  // Helper to show custom notification toast
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Toggle completion for the current lesson
  const handleToggleComplete = () => {
    progress.togglelesson(courseId, lessonId);
    showToast(isCompleted ? "Lesson marked as incomplete" : "Lesson marked as complete! 🎉");
  };

  // Toggle (and remember) the desktop syllabus outline collapse state
  const toggleOutline = () => {
    userChoseOutline.current = true;
    setSidebarCollapsed((prev) => {
      const next = !prev;
      window.localStorage.setItem("course-outline-collapsed", next ? "1" : "0");
      return next;
    });
  };

  // Toggle distraction-free reading mode (notes only, ideal measure)
  const toggleFocusMode = () => {
    const next = !focusMode;
    setFocusMode(next);
    showToast(next ? "Reading mode on — press Esc to exit" : "Reading mode off");
  };

  // Wider reading measure: tightest in focus mode, widest with no outline
  const contentWidthClass = focusMode
    ? "max-w-3xl"
    : sidebarCollapsed
      ? "max-w-5xl"
      : "max-w-4xl";

  // Trigger PDF printing (leveraging custom print styles in globals.css)
  const handleDownloadPDF = () => {
    setIsExporting(true);
    showToast("Preparing document styles for PDF export...");
    
    setTimeout(() => {
      window.print();
      setIsExporting(false);
    }, 1200);
  };

  return (
    <div className="flex min-h-[calc(100vh-5rem)] border-t border-border/40 relative">
      {/* Reading progress bar along the bottom edge of the viewport —
          kept at the bottom so it never cuts off the article text */}
      <div
        className="fixed bottom-[env(safe-area-inset-bottom)] left-0 right-0 z-40 h-0.5 pointer-events-none no-print"
        aria-hidden
      >
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-r-full transition-[width] duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-foreground text-background px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 border border-border animate-in fade-in slide-in-from-bottom-5 text-sm font-medium no-print">
          <Check className="h-4 w-4 text-success" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* LEFT SIDEBAR - Course Outline Navigation (hidden on mobile, can slide in) */}
      <aside
        className={cn(
          "w-80 border-r border-border bg-card/50 backdrop-blur-md flex-shrink-0 flex flex-col no-print transition-all duration-300 md:relative md:translate-x-0 fixed inset-y-0 left-0 z-40 top-20 md:top-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          (sidebarCollapsed || focusMode) && "md:w-0 md:border-r-0 md:overflow-hidden"
        )}
      >
        {/* Mobile close button inside sidebar */}
        <div className="p-4 flex items-center justify-between border-b border-border/60 md:hidden bg-background">
          <span className="font-bold text-sm">Course Outline</span>
          <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-md hover:bg-muted">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-4 border-b border-border/60 bg-muted/20">
          <Link
            href={`/courses/${course.id}`}
            className="flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Syllabus Overview
          </Link>
          <h2 className="text-base font-bold text-foreground mt-2 truncate">
            {course.title}
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {course.modules.map((module, mIdx) => {
            const doneInModule = module.lessons.filter((lec) =>
              completedLessons.includes(lec.id)
            ).length;
            return (
              <div key={module.id} className="space-y-2">
                <div className="flex items-center justify-between gap-2 pl-2 pr-1">
                  <h3 className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-primary/10 text-[9px] font-bold text-primary">
                      {mIdx + 1}
                    </span>
                    <span className="truncate">
                      {module.title.split(": ")[1] || module.title}
                    </span>
                  </h3>
                  {mounted && doneInModule > 0 && (
                    <span className="shrink-0 rounded-full bg-success/10 px-1.5 py-0.5 text-[10px] font-semibold text-success">
                      {doneInModule}/{module.lessons.length}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  {module.lessons.map((lec) => {
                    const isActive = lec.id === lessonId;
                    const isDone = completedLessons.includes(lec.id);
                    return (
                      <Link
                        key={lec.id}
                        href={`/courses/${course.id}/${lec.id}`}
                        onClick={() => setSidebarOpen(false)}
                        className={cn(
                          "flex items-start gap-2.5 p-2 rounded-lg text-xs font-medium transition-all",
                          isActive
                            ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {mounted && isDone ? (
                          <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-success" />
                        ) : (
                          <Circle
                            className={cn(
                              "h-3.5 w-3.5 mt-0.5 shrink-0",
                              isActive ? "text-primary-foreground/70" : "text-border"
                            )}
                          />
                        )}
                        <span className="line-clamp-2">{lec.title.split(": ")[1] || lec.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall course progress footer */}
        {mounted && (
          <div className="p-4 border-t border-border/60 bg-muted/20 no-print">
            <div className="flex items-center justify-between mb-1.5 text-[11px] font-medium">
              <span className="text-muted-foreground flex items-center gap-1">
                <Trophy className="h-3 w-3 text-star" />
                Course progress
              </span>
              <span className="font-semibold text-foreground">
                {completedLessons.length}/{allLessons.length}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-border/60 overflow-hidden">
              <div
                className="h-full rounded-full bg-success transition-all duration-500"
                style={{
                  width: `${(completedLessons.length / allLessons.length) * 100}%`,
                }}
              />
            </div>
          </div>
        )}
      </aside>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden no-print"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Floating reopen handle — visible on desktop only while the outline is hidden */}
      {sidebarCollapsed && !focusMode && (
        <button
          onClick={toggleOutline}
          className="hidden md:flex absolute left-1.5 top-1/2 -translate-y-1/2 z-30 h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 backdrop-blur-md text-muted-foreground shadow-lg transition-all hover:text-foreground hover:border-accent/40 hover:shadow-xl no-print group"
          aria-label="Show course outline"
          title="Show course outline"
        >
          <PanelLeftOpen className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>
      )}

      {/* RIGHT CONTENT PANEL */}
      <main className="relative flex-1 flex flex-col items-center overflow-x-hidden min-w-0 bg-background">
        
        {/* Navigation / Action bar */}
        <div
          className={cn(
            "w-full px-4 sm:px-8 py-4 border-b border-border/40 flex items-center justify-between no-print gap-4 transition-[max-width] duration-500 ease-out",
            contentWidthClass
          )}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={cn(
                "p-2 rounded-lg border border-border bg-card hover:bg-muted md:hidden",
                focusMode && "hidden"
              )}
              aria-label="Toggle Syllabus Outline"
            >
              <Menu className="h-4 w-4" />
            </button>
            <button
              onClick={toggleOutline}
              className={cn(
                "hidden md:inline-flex p-2 rounded-lg border border-border bg-card hover:bg-muted transition-colors",
                focusMode && "hidden"
              )}
              aria-label={sidebarCollapsed ? "Show course outline" : "Hide course outline"}
              title={sidebarCollapsed ? "Show course outline (more reading space)" : "Hide course outline (focus on reading)"}
            >
              {sidebarCollapsed ? (
                <PanelLeftOpen className="h-4 w-4" />
              ) : (
                <PanelLeftClose className="h-4 w-4" />
              )}
            </button>
            <div className="text-xs text-muted-foreground hidden sm:flex items-center gap-1">
              <Link href="/courses" className="hover:text-foreground transition-colors">Courses</Link>
              <span>/</span>
              <Link href={`/courses/${course.id}`} className="hover:text-foreground transition-colors truncate max-w-[120px]">{course.title}</Link>
              <span>/</span>
              <span className="text-foreground truncate max-w-[150px]">{activeLesson.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleFocusMode}
              aria-pressed={focusMode}
              className={cn(
                buttonVariants({ variant: focusMode ? "default" : "outline", size: "sm" }),
                "rounded-xl gap-1.5 text-xs h-9 transition-all"
              )}
              title={
                focusMode
                  ? "Exit reading mode (Esc)"
                  : "Focus reading mode — notes only (Esc)"
              }
            >
              {focusMode ? (
                <BookOpenCheck className="h-3.5 w-3.5" />
              ) : (
                <BookOpenText className="h-3.5 w-3.5" />
              )}
              <span className="hidden sm:inline">{focusMode ? "Reading" : "Reading Mode"}</span>
            </button>
            <button
              onClick={handleToggleComplete}
              className={cn(
                buttonVariants({ variant: isCompleted ? "default" : "outline", size: "sm" }),
                "rounded-xl gap-1.5 text-xs h-9 transition-all"
              )}
              aria-pressed={isCompleted}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Completed
                </>
              ) : (
                <>
                  <Circle className="h-3.5 w-3.5" />
                  Mark Complete
                </>
              )}
            </button>
            <button
              onClick={handleDownloadPDF}
              disabled={isExporting}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "rounded-xl gap-1.5 text-xs h-9"
              )}
            >
              {isExporting ? (
                <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              ) : (
                <Download className="h-3.5 w-3.5" />
              )}
              {isExporting ? "Formatting..." : "Download PDF"}
            </button>
          </div>
        </div>

        {/* Note Paper (Print container) */}
        <article
          ref={articleRef}
          className={cn(
            "w-full px-4 sm:px-8 py-8 sm:py-12 print-container flex-grow space-y-8 transition-[max-width] duration-500 ease-out",
            contentWidthClass
          )}
        >
          
          {/* lesson Metadata */}
          <div className="space-y-3 border-b border-border/60 pb-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-primary/70" />
                {activeLesson.duration} lesson duration
              </span>
              <span>•</span>
              <span>{activeLesson.readingTime}</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl leading-tight text-foreground font-bold">
              {activeLesson.title}
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed italic">
              {activeLesson.shortDescription}
            </p>
          </div>

          {/* Documented Notes Content — pre-rendered on the server so the
              full lesson text is present in the initial HTML for crawlers. */}
          <div className="lesson-prose">
            <div
              className="blog-content lesson-content max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>

          {/* Interactive Code Section Widget (no-print on PDF if you wish, or keep it formatted as standard text box) */}
          {!focusMode && (
          <div className="border border-border/80 rounded-2xl bg-card overflow-hidden shadow-xs my-8 no-print">
            <div className="px-5 py-4 border-b border-border/60 bg-muted/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2">
                <FileCode className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Interactive Lesson Code Snippet</span>
              </div>
              
              {/* Tab Selector */}
              <div className="flex rounded-lg bg-background border border-border p-0.5 shrink-0 self-start sm:self-auto">
                <button
                  onClick={() => setActiveTab("code")}
                  className={cn(
                    "px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1",
                    activeTab === "code"
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <FileCode className="h-3 w-3" />
                  Code script
                </button>
                <button
                  onClick={() => setActiveTab("output")}
                  className={cn(
                    "px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1",
                    activeTab === "output"
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Terminal className="h-3 w-3" />
                  Console Output
                </button>
              </div>
            </div>

            {activeTab === "code" ? (
              <div className="relative group">
                <button
                  onClick={handleCopy}
                  className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-card/80 border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                  title="Copy code script"
                >
                  {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
                </button>
                <pre className="p-5 font-mono text-xs sm:text-sm overflow-x-auto bg-code-bg text-code-fg leading-relaxed">
                  <code>{activeLesson.codeSnippet}</code>
                </pre>
              </div>
            ) : (
              <div className="p-5 font-mono text-xs sm:text-sm overflow-x-auto bg-code-bg text-code-accent leading-relaxed border-t border-border/20">
                <div className="text-code-fg/50 mb-2"># Simulated stdout run execution:</div>
                <code>{activeLesson.codeOutput}</code>
              </div>
            )}
            
            <div className="px-5 py-3.5 bg-muted/10 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span>Language: <span className="font-semibold text-foreground capitalize">{activeLesson.codeLanguage}</span></span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 hover:text-foreground transition-colors font-medium"
              >
                <Copy className="h-3.5 w-3.5" />
                Copy script
              </button>
            </div>
          </div>
          )}

          {/* Printable copy of Code snippet for the PDF output (hidden on screen, visible during printing) */}
          {!focusMode && (
          <div className="hidden print:block border border-black/20 p-5 rounded-lg my-8">
            <h4 className="font-bold mb-2">Lesson Code (Python)</h4>
            <pre className="font-mono text-xs p-3 bg-zinc-50 border border-zinc-200 rounded whitespace-pre-wrap">
              <code>{activeLesson.codeSnippet}</code>
            </pre>
            <h4 className="font-bold mt-4 mb-2">Console Output</h4>
            <pre className="font-mono text-xs p-3 bg-zinc-50 border border-zinc-200 rounded whitespace-pre-wrap">
              <code>{activeLesson.codeOutput}</code>
            </pre>
          </div>
          )}

          {/* Live Python Playground — runs the lesson code in-browser */}
          {!focusMode && (
          <div className="my-8 no-print">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-semibold text-foreground">
                Try It Yourself
              </h2>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                No setup · runs in your browser
              </span>
            </div>
            <PythonPlayground
              initialCode={activeLesson.codeSnippet}
              expectedOutput={activeLesson.codeOutput}
            />
          </div>
          )}

          {/* Code Visualization Tips */}
          {!focusMode &&
            activeLesson.visualizationTips &&
            activeLesson.visualizationTips.length > 0 && (
              <section className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs my-8 no-print">
                <div className="px-5 py-4 border-b border-border/60 bg-muted/20 flex items-center gap-2">
                  <Eye className="h-4 w-4 text-primary" />
                  <h2 className="text-sm font-semibold text-foreground">
                    Code Visualization Tips
                  </h2>
                </div>
                <ul className="p-5 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {activeLesson.visualizationTips.map((tip, tipIdx) => (
                    <li key={tipIdx} className="flex gap-3">
                      <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
                        🧠
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

          {/* Tips & Tricks */}
          {!focusMode &&
            activeLesson.tipsAndTricks &&
            activeLesson.tipsAndTricks.length > 0 && (
              <section className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs my-8 no-print">
                <div className="px-5 py-4 border-b border-border/60 bg-muted/20 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-star" />
                  <h2 className="text-sm font-semibold text-foreground">
                    Professional Tips & Tricks
                  </h2>
                </div>
                <ul className="p-5 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {activeLesson.tipsAndTricks.map((tip, tipIdx) => (
                    <li key={tipIdx} className="flex gap-3">
                      <span className="mt-0.5 shrink-0 text-star" aria-hidden>
                        ⚡
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

          {/* Practice Exercises */}
          {!focusMode && activeLesson.practice && activeLesson.practice.length > 0 && (
            <section className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs my-8">
              <div className="px-5 py-4 border-b border-border/60 bg-muted/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ListChecks className="h-4 w-4 text-primary" />
                  <h2 className="text-sm font-semibold text-foreground">
                    Practice Exercises
                  </h2>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {activeLesson.practice.length} exercises
                </span>
              </div>
              <div className="divide-y divide-border/60">
                {activeLesson.practice.map((exercise, exIdx) => (
                  <details key={exercise.id} className="group px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center gap-2.5 text-sm font-semibold text-foreground transition-colors group-open:text-primary">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                          {exIdx + 1}
                        </span>
                        {exercise.title}
                      </span>
                      <span
                        className={cn(
                          "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold",
                          exercise.difficulty === "Easy" && "bg-success/10 text-success",
                          exercise.difficulty === "Medium" && "bg-star/10 text-star",
                          exercise.difficulty === "Hard" && "bg-destructive/10 text-destructive"
                        )}
                      >
                        {exercise.difficulty}
                      </span>
                    </summary>
                    <div className="mt-4 space-y-3 pl-8 sm:pl-9">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {exercise.task}
                      </p>
                      {exercise.hint && (
                        <p className="text-xs text-muted-foreground/80">
                          <span className="font-semibold text-foreground">Hint:</span>{" "}
                          {exercise.hint}
                        </p>
                      )}
                      {exercise.solution && (
                        <div className="rounded-xl border border-border/60 bg-code-bg overflow-hidden">
                          <div className="px-3 py-1.5 bg-muted/40 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Solution
                          </div>
                          <pre className="p-3.5 font-mono text-xs sm:text-sm overflow-x-auto text-code-fg leading-relaxed">
                            <code>{exercise.solution}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Interactive Quiz */}
          {!focusMode && LESSON_QUIZZES[activeLesson.id] && (
            <section className="my-8 no-print">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="h-4 w-4 text-star" />
                <h2 className="text-sm font-semibold text-foreground">
                  Test Your Knowledge
                </h2>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Instant feedback
                </span>
              </div>
              <LessonQuiz
                quiz={LESSON_QUIZZES[activeLesson.id]}
                courseId={courseId}
                lessonId={lessonId}
              />
            </section>
          )}

          {/* Up Next — Continue Learning CTA */}
          {!focusMode && (nextLesson ? (
            <section className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs my-8 no-print">
              <div className="bg-gradient-to-r from-primary/15 via-accent/10 to-transparent px-5 sm:px-6 py-5 border-b border-border/60">
                <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                  Up next · Continue learning
                </p>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground leading-snug">
                  {nextLesson.title.split(": ")[1] || nextLesson.title}
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 max-w-2xl">
                  {nextLesson.shortDescription}
                </p>
              </div>
              <div className="px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-primary/70" />
                    {nextLesson.readingTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary/70" />
                    {nextLesson.duration}
                  </span>
                </div>
                <Link
                  href={`/courses/${course.id}/${nextLesson.id}`}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "rounded-xl gap-2 sm:ml-auto w-full sm:w-auto"
                  )}
                >
                  Start next lesson
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
          ) : (
            <section className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs my-8 no-print">
              <div className="bg-gradient-to-r from-success/15 via-accent/10 to-transparent px-5 sm:px-6 py-5 border-b border-border/60 flex items-start gap-3">
                <Award className="h-6 w-6 text-star shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-success mb-1">
                    Course complete
                  </p>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground leading-snug">
                    You finished {course.title.split(": ")[0]}!
                  </h2>
                  <p className="mt-1.5 text-sm text-muted-foreground max-w-2xl">
                    Review the full syllabus, revisit any lesson, or explore another course in the Learning Hub.
                  </p>
                </div>
              </div>
              <div className="px-5 sm:px-6 py-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/courses/${course.id}`}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "rounded-xl gap-2 w-full sm:w-auto"
                  )}
                >
                  <BookOpen className="h-4 w-4" />
                  View full syllabus
                </Link>
                <Link
                  href="/courses"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "rounded-xl gap-2 w-full sm:w-auto"
                  )}
                >
                  <GraduationCap className="h-4 w-4" />
                  Browse all courses
                </Link>
              </div>
            </section>
          ))}

          {/* Next / Previous lesson Links */}
          {!focusMode && (
          <div className="pt-8 border-t border-border/60 flex items-center justify-between no-print gap-4">
            {prevLesson ? (
              <Link
                href={`/courses/${course.id}/${prevLesson.id}`}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "rounded-xl gap-1 text-xs sm:text-sm text-muted-foreground hover:text-foreground"
                )}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Previous:</span> {prevLesson.title.split(": ")[1] || prevLesson.title}
              </Link>
            ) : (
              <div />
            )}

            {nextLesson ? (
              <Link
                href={`/courses/${course.id}/${nextLesson.id}`}
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "rounded-xl gap-1 text-xs sm:text-sm ml-auto"
                )}
              >
                <span className="hidden sm:inline">Next:</span> {nextLesson.title.split(": ")[1] || nextLesson.title}
                <ChevronRight className="h-4 w-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
          )}

          {/* Made with heart credit */}
          {!focusMode && (
          <div className="flex items-center justify-center pt-10 no-print">
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-4 py-2 text-xs text-muted-foreground transition-all hover:border-accent/30 hover:text-foreground"
            >
              Made with
              <Heart className="h-3.5 w-3.5 fill-destructive text-destructive transition-transform duration-300 group-hover:scale-125 group-hover:animate-pulse" />
              by
              <span className="font-semibold text-foreground group-hover:text-accent">
                {siteConfig.authorName}
              </span>
              <span className="text-border">·</span>
              <span className="font-medium">amolshukla.online</span>
            </Link>
          </div>
          )}
        </article>
      </main>
    </div>
  );
}
