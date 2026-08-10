"use client";

import React, { useState, useEffect } from "react";
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
  GraduationCap
} from "lucide-react";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { COURSES } from "@/config/courses";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Full GFM markdown renderer (tables, blockquotes, links, code blocks,
// task lists, strikethrough) — same pipeline the blog pages use.
function RenderMarkdown({ content }: { content: string }) {
  const [html, setHtml] = React.useState("");

  React.useEffect(() => {
    let active = true;
    remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(content)
      .then((file) => {
        if (active) setHtml(String(file));
      })
      .catch(() => {
        if (active) setHtml(`<p>Could not render this section.</p>`);
      });
    return () => {
      active = false;
    };
  }, [content]);

  return (
    <div
      className="blog-content lecture-content max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function LectureNotesPage() {
  const router = useRouter();
  const params = useParams();
  const courseId = params.courseId as string;
  const lectureId = params.lectureId as string;

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "output">("code");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  // Find course and active lecture
  const course = COURSES.find((c) => c.id === courseId);
  if (!course) return null;

  // Flatten all lectures to locate active lecture
  const allLectures = course.modules.flatMap((m) => m.lectures);
  const lectureIndex = allLectures.findIndex((l) => l.id === lectureId);
  const activeLecture = allLectures[lectureIndex];
  
  if (!activeLecture) return null;

  // Next & Previous Lectures
  const prevLecture = lectureIndex > 0 ? allLectures[lectureIndex - 1] : null;
  const nextLecture = lectureIndex < allLectures.length - 1 ? allLectures[lectureIndex + 1] : null;

  // Copy code to clipboard handler
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeLecture.codeSnippet);
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
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
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
          {course.modules.map((module, mIdx) => (
            <div key={module.id} className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 pl-2">
                M{mIdx + 1}: {module.title.split(": ")[1] || module.title}
              </h3>
              <div className="space-y-1">
                {module.lectures.map((lec) => {
                  const isActive = lec.id === lectureId;
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
                      <FileText className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                      <span className="line-clamp-2">{lec.title.split(": ")[1] || lec.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden no-print"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* RIGHT CONTENT PANEL */}
      <main className="flex-1 flex flex-col items-center overflow-x-hidden min-w-0 bg-background">
        
        {/* Navigation / Action bar */}
        <div className="w-full max-w-4xl px-4 sm:px-8 py-4 border-b border-border/40 flex items-center justify-between no-print gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg border border-border bg-card hover:bg-muted md:hidden"
              aria-label="Toggle Syllabus Outline"
            >
              <Menu className="h-4 w-4" />
            </button>
            <div className="text-xs text-muted-foreground hidden sm:flex items-center gap-1">
              <Link href="/courses" className="hover:text-foreground transition-colors">Courses</Link>
              <span>/</span>
              <Link href={`/courses/${course.id}`} className="hover:text-foreground transition-colors truncate max-w-[120px]">{course.title}</Link>
              <span>/</span>
              <span className="text-foreground truncate max-w-[150px]">{activeLecture.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
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
        <article className="w-full max-w-4xl px-4 sm:px-8 py-8 sm:py-12 print-container flex-grow space-y-8">
          
          {/* Lecture Metadata */}
          <div className="space-y-3 border-b border-border/60 pb-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-primary/70" />
                {activeLecture.duration} lecture duration
              </span>
              <span>•</span>
              <span>{activeLecture.readingTime}</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl leading-tight text-foreground font-bold">
              {activeLecture.title}
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed italic">
              {activeLecture.shortDescription}
            </p>
          </div>

          {/* Documented Notes Content */}
          <div className="lecture-prose">
            <RenderMarkdown content={activeLecture.contentMarkdown} />
          </div>

          {/* Interactive Code Section Widget (no-print on PDF if you wish, or keep it formatted as standard text box) */}
          <div className="border border-border/80 rounded-2xl bg-card overflow-hidden shadow-xs my-8 no-print">
            <div className="px-5 py-4 border-b border-border/60 bg-muted/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2">
                <FileCode className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Interactive Lecture Code Snippet</span>
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
                <pre className="p-5 font-mono text-xs sm:text-sm overflow-x-auto bg-code-bg text-code-fg leading-relaxed max-h-[350px]">
                  <code>{activeLecture.codeSnippet}</code>
                </pre>
              </div>
            ) : (
              <div className="p-5 font-mono text-xs sm:text-sm overflow-x-auto bg-code-bg text-code-accent leading-relaxed border-t border-border/20 max-h-[350px]">
                <div className="text-code-fg/50 mb-2"># Simulated stdout run execution:</div>
                <code>{activeLecture.codeOutput}</code>
              </div>
            )}
            
            <div className="px-5 py-3.5 bg-muted/10 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span>Language: <span className="font-semibold text-foreground capitalize">{activeLecture.codeLanguage}</span></span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 hover:text-foreground transition-colors font-medium"
              >
                <Copy className="h-3.5 w-3.5" />
                Copy script
              </button>
            </div>
          </div>

          {/* Printable copy of Code snippet for the PDF output (hidden on screen, visible during printing) */}
          <div className="hidden print:block border border-black/20 p-5 rounded-lg my-8">
            <h4 className="font-bold mb-2">Lecture Code (Python)</h4>
            <pre className="font-mono text-xs p-3 bg-zinc-50 border border-zinc-200 rounded whitespace-pre-wrap">
              <code>{activeLecture.codeSnippet}</code>
            </pre>
            <h4 className="font-bold mt-4 mb-2">Console Output</h4>
            <pre className="font-mono text-xs p-3 bg-zinc-50 border border-zinc-200 rounded whitespace-pre-wrap">
              <code>{activeLecture.codeOutput}</code>
            </pre>
          </div>

          {/* Code Visualization Tips */}
          {activeLecture.visualizationTips &&
            activeLecture.visualizationTips.length > 0 && (
              <section className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs my-8 no-print">
                <div className="px-5 py-4 border-b border-border/60 bg-muted/20 flex items-center gap-2">
                  <Eye className="h-4 w-4 text-primary" />
                  <h2 className="text-sm font-semibold text-foreground">
                    Code Visualization Tips
                  </h2>
                </div>
                <ul className="p-5 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {activeLecture.visualizationTips.map((tip, tipIdx) => (
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
          {activeLecture.tipsAndTricks &&
            activeLecture.tipsAndTricks.length > 0 && (
              <section className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs my-8 no-print">
                <div className="px-5 py-4 border-b border-border/60 bg-muted/20 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-star" />
                  <h2 className="text-sm font-semibold text-foreground">
                    Professional Tips & Tricks
                  </h2>
                </div>
                <ul className="p-5 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {activeLecture.tipsAndTricks.map((tip, tipIdx) => (
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
          {activeLecture.practice && activeLecture.practice.length > 0 && (
            <section className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs my-8">
              <div className="px-5 py-4 border-b border-border/60 bg-muted/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ListChecks className="h-4 w-4 text-primary" />
                  <h2 className="text-sm font-semibold text-foreground">
                    Practice Exercises
                  </h2>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {activeLecture.practice.length} exercises
                </span>
              </div>
              <div className="divide-y divide-border/60">
                {activeLecture.practice.map((exercise, exIdx) => (
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

          {/* Up Next — Continue Learning CTA */}
          {nextLecture ? (
            <section className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs my-8 no-print">
              <div className="bg-gradient-to-r from-primary/15 via-accent/10 to-transparent px-5 sm:px-6 py-5 border-b border-border/60">
                <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                  Up next · Continue learning
                </p>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground leading-snug">
                  {nextLecture.title.split(": ")[1] || nextLecture.title}
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 max-w-2xl">
                  {nextLecture.shortDescription}
                </p>
              </div>
              <div className="px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-primary/70" />
                    {nextLecture.readingTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary/70" />
                    {nextLecture.duration}
                  </span>
                </div>
                <Link
                  href={`/courses/${course.id}/${nextLecture.id}`}
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
          )}

          {/* Next / Previous Lecture Links */}
          <div className="pt-8 border-t border-border/60 flex items-center justify-between no-print gap-4">
            {prevLecture ? (
              <Link
                href={`/courses/${course.id}/${prevLecture.id}`}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "rounded-xl gap-1 text-xs sm:text-sm text-muted-foreground hover:text-foreground"
                )}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Previous:</span> {prevLecture.title.split(": ")[1] || prevLecture.title}
              </Link>
            ) : (
              <div />
            )}

            {nextLecture ? (
              <Link
                href={`/courses/${course.id}/${nextLecture.id}`}
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "rounded-xl gap-1 text-xs sm:text-sm ml-auto"
                )}
              >
                <span className="hidden sm:inline">Next:</span> {nextLecture.title.split(": ")[1] || nextLecture.title}
                <ChevronRight className="h-4 w-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Made with heart credit */}
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
        </article>
      </main>
    </div>
  );
}
