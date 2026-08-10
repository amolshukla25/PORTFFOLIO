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
  FileCode
} from "lucide-react";
import { COURSES } from "@/config/courses";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Lightweight Markdown Renderer for Note Content
function RenderMarkdown({ content }: { content: string }) {
  const paragraphs = content.split("\n\n");
  
  return (
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      {paragraphs.map((para, pIdx) => {
        const trimmed = para.trim();
        if (!trimmed) return null;

        // Header 3
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={pIdx} className="font-heading text-2xl text-foreground font-bold pt-6 pb-2 border-b border-border/50">
              {trimmed.replace("### ", "")}
            </h3>
          );
        }

        // Header 4
        if (trimmed.startsWith("#### ")) {
          return (
            <h4 key={pIdx} className="font-heading text-xl text-foreground font-semibold pt-4 pb-1">
              {trimmed.replace("#### ", "")}
            </h4>
          );
        }

        // Unordered List Items
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const items = trimmed.split("\n").map(li => li.replace(/^[-*]\s+/, ""));
          return (
            <ul key={pIdx} className="list-disc pl-6 space-y-2 my-4 text-sm sm:text-base">
              {items.map((item, iIdx) => (
                <li key={iIdx} className="marker:text-primary">
                  {/* Parse inline backticks inside lists */}
                  {parseInlineFormatting(item)}
                </li>
              ))}
            </ul>
          );
        }

        // Code block
        if (trimmed.startsWith("```")) {
          const lines = trimmed.split("\n");
          // Remove backticks line and last line
          const codeLines = lines.slice(1, lines.length - 1).join("\n");
          return (
            <pre key={pIdx} className="p-4 rounded-xl bg-muted/60 border border-border/80 font-mono text-xs sm:text-sm overflow-x-auto my-4 text-foreground">
              <code>{codeLines}</code>
            </pre>
          );
        }

        // Normal paragraph
        return (
          <p key={pIdx} className="my-3 text-sm sm:text-base">
            {parseInlineFormatting(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

// Simple inline formatting parser (bold, inline code, latex math equations)
function parseInlineFormatting(text: string) {
  // Regex for inline code: `code`
  // Regex for bold: **bold**
  // Regex for simple LaTeX math: $$math$$ or $math$
  
  let parts: React.ReactNode[] = [text];
  
  // 1. Parse bold: **text**
  parts = parts.flatMap((part) => {
    if (typeof part !== "string") return part;
    const split = part.split(/\*\*([^*]+)\*\*/g);
    return split.map((sub, idx) => (idx % 2 === 1 ? <strong key={idx} className="font-bold text-foreground">{sub}</strong> : sub));
  });

  // 2. Parse inline code: `code`
  parts = parts.flatMap((part) => {
    if (typeof part !== "string") return part;
    const split = part.split(/`([^`]+)`/g);
    return split.map((sub, idx) => (idx % 2 === 1 ? <code key={idx} className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs text-primary font-medium">{sub}</code> : sub));
  });

  // 3. Parse Math variables like $MSE$
  parts = parts.flatMap((part) => {
    if (typeof part !== "string") return part;
    const split = part.split(/\$\$([^$]+)\$\$/g);
    return split.map((sub, idx) => (idx % 2 === 1 ? <span key={idx} className="font-serif italic text-foreground bg-muted/30 px-1 rounded">{sub}</span> : sub));
  });

  return parts;
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
          <Check className="h-4 w-4 text-green-500" />
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
          <div className="prose dark:prose-invert max-w-none">
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
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </button>
                <pre className="p-5 font-mono text-xs sm:text-sm overflow-x-auto bg-zinc-950 text-zinc-100 leading-relaxed max-h-[350px]">
                  <code>{activeLecture.codeSnippet}</code>
                </pre>
              </div>
            ) : (
              <div className="p-5 font-mono text-xs sm:text-sm overflow-x-auto bg-zinc-950 text-emerald-400 leading-relaxed border-t border-border/20 max-h-[350px]">
                <div className="text-zinc-500 mb-2"># Simulated stdout run execution:</div>
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
          
        </article>
      </main>
    </div>
  );
}
