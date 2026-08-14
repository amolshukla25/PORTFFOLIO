"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Award,
  BookOpen,
  BookOpenCheck,
  Brain,
  ChevronRight,
  Clock,
  Code,
  Compass,
  FileText,
  GraduationCap,
  Layers,
  Network,
  Search,
  Star,
  Workflow,
  X,
} from "lucide-react";

import PageContainer from "@/components/common/page-container";
import { COURSES } from "@/config/courses";
import ChipContainer from "@/components/ui/chip-container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "brain":
      return <Brain className="h-8 w-8 text-primary" />;
    case "network":
      return <Network className="h-8 w-8 text-primary" />;
    case "activity":
      return <Activity className="h-8 w-8 text-primary" />;
    case "workflow":
      return <Workflow className="h-8 w-8 text-primary" />;
    case "code":
      return <Code className="h-8 w-8 text-primary" />;
    default:
      return <BookOpen className="h-8 w-8 text-primary" />;
  }
};const roadmapSteps = [
  {
    step: 1,
    title: "Python Foundations",
    subtitle: "Course: Complete Python Course — 25 lessons",
    description:
      "Master variables, data casting, logic checks, conditional routes, loops, and OOP constructors.",
    skills: ["Syntax", "Conditionals", "Iteration", "OOP basics"],
    duration: "12 hours of notes & code",
    link: "/courses/python-basics",
    linkLabel: "Start Foundations",
    level: "Beginner",
  },
  {
    step: 2,
    title: "Vectorized Computing & Wrangling",
    subtitle: "Applied Data Science Hub — Module 2",
    description:
      "Learn how to use NumPy multidimensional arrays and perform data transformations, cleaning, and aggregates in Pandas.",
    skills: ["NumPy arrays", "Pandas DataFrames", "Data Imputations", "Groupby aggregations"],
    duration: "4 hours content",
    link: "/courses/data-science/numpy-pandas",
    linkLabel: "Study Wrangling",
    level: "Intermediate",
  },
  {
    step: 3,
    title: "Statistical & Predictive Modeling",
    subtitle: "Applied Data Science Hub — Module 4",
    description:
      "Fit predictive mathematical algorithms to train dataset splits, scale numerical values, and check cost errors.",
    skills: ["Supervised ML", "Scikit-Learn workflow", "Train-Test splits", "Loss evaluations"],
    duration: "5 hours content",
    link: "/courses/data-science/supervised-learning",
    linkLabel: "Study Machine Learning",
    level: "Intermediate",
  },
  {
    step: 4,
    title: "Intelligent Agentic AI Pipelines",
    subtitle: "Applied Data Science Hub — Module 5",
    description:
      "Deploy large language models in tool-calling ReAct planning loops to compile and run analytical code dynamically.",
    skills: ["Agentic Loops", "ReAct Framework", "Tool structures", "Environment safety"],
    duration: "6 hours content",
    link: "/courses/data-science/agentic-ai",
    linkLabel: "Master Agentic AI",
    level: "Advanced",
  },
  {
    step: 5,
    title: "Digital Marketing Mastery",
    subtitle: "Course: Complete Digital Marketing Course",
    description:
      "Learn SEO fundamentals, keyword research, on-page optimization, content marketing, and social media strategies.",
    skills: ["SEO", "Keyword Research", "Content Marketing", "Social Media"],
    duration: "35 hours of content",
    link: "/courses/digital-marketing",
    linkLabel: "Start Digital Marketing",
    level: "Beginner",
  },
  {
    step: 6,
    title: "Stock Market Investing",
    subtitle: "Course: Complete Stock Market Course",
    description:
      "Understand how the stock market works, analyze companies with fundamental analysis, and build a diversified portfolio.",
    skills: ["Stock Analysis", "Portfolio Management", "Risk Assessment", "Investment Strategy"],
    duration: "30 hours of content",
    link: "/courses/stock-marketing",
    linkLabel: "Start Investing",
    level: "Beginner",
  },
  {
    step: 7,
    title: "Prompt Engineering",
    subtitle: "Course: Complete Prompt Engineering Course",
    description:
      "Master the art of crafting effective prompts for AI models to 10x your productivity with ChatGPT, Claude, and more.",
    skills: ["Prompt Design", "Chain-of-Thought", "Few-Shot Learning", "AI Communication"],
    duration: "20 hours of content",
    link: "/courses/prompt-engineering",
    linkLabel: "Start Prompt Engineering",
    level: "Beginner",
  },
];

const DIFFICULTIES = ["Beginner", "Intermediate", "Advanced"] as const;

export default function CoursesExplorer() {
  const [activeTab, setActiveTab] = useState<"courses" | "roadmap">("courses");
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  // Aggregate stats across the whole hub
  const stats = useMemo(() => {
    const totalLessons = COURSES.reduce(
      (acc, c) => acc + c.modules.reduce((a, m) => a + m.lessons.length, 0),
      0
    );
    const totalModules = COURSES.reduce((acc, c) => acc + c.modules.length, 0);
    const totalHours = COURSES.reduce((acc, c) => {
      const parsed = parseInt(c.duration, 10);
      return acc + (Number.isNaN(parsed) ? 0 : parsed);
    }, 0);
    return { courses: COURSES.length, lessons: totalLessons, modules: totalModules, hours: totalHours };
  }, []);

  // Category options derived from the course data
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    COURSES.forEach((c) =>
      c.category.forEach((cat) => counts.set(cat, (counts.get(cat) ?? 0) + 1))
    );
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  }, []);

  const filteredCourses = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COURSES.filter((course) => {
      if (difficulty && course.difficulty !== difficulty) return false;
      if (category && !course.category.includes(category)) return false;
      if (q) {
        const haystack = [course.title, course.shortDescription, ...course.category]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [query, difficulty, category]);

  // lesson-level search: jump straight to any lesson that matches the query
  const lessonResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return COURSES.flatMap((course) =>
      course.modules.flatMap((module) =>
        module.lessons
          .filter((lec) =>
            [lec.title, lec.shortDescription, module.title]
              .join(" ")
              .toLowerCase()
              .includes(q)
          )
          .map((lec) => ({
            course,
            module,
            lesson: lec,
          }))
      )
    ).slice(0, 12);
  }, [query]);

  const hasFilters = Boolean(query || difficulty || category);

  return (
    <PageContainer
      title="Amol Shukla's Student Learning Hub"
      description="Access Amol Shukla's comprehensive documented notes, code walk-throughs, and PDF worksheets curated for students and learners."
      eyebrow="Learning"
    >
      <div className="py-8">
        {/* Stats bar */}
        <div className="grid grid-cols-2 gap-3 mb-8 sm:grid-cols-4">
          {[
            { icon: GraduationCap, label: "Courses", value: stats.courses },
            { icon: BookOpen, label: "Lessons", value: stats.lessons },
            { icon: Layers, label: "Modules", value: stats.modules },
            { icon: Clock, label: "Hours of content", value: stats.hours },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-accent/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-transparent text-accent">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-gradient font-heading text-xl font-bold leading-none">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* State-based Tab Switcher */}
        <div className="flex items-center justify-center mb-8 no-print">
          <div className="flex rounded-xl bg-muted p-1 border border-border">
            <button
              onClick={() => setActiveTab("courses")}
              className={cn(
                "px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2",
                activeTab === "courses"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <BookOpenCheck className="h-4 w-4" />
              Available Courses
            </button>
            <button
              onClick={() => setActiveTab("roadmap")}
              className={cn(
                "px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2",
                activeTab === "roadmap"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Compass className="h-4 w-4" />
              Learning Roadmap
            </button>
          </div>
        </div>

        {/* Tab 1: Available Courses Grid */}
        {activeTab === "courses" ? (
          <>
            {/* Search + filters */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search courses by title, topic, or keyword…"
                  aria-label="Search courses"
                  className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-10 text-sm shadow-sm transition-all outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 placeholder:text-muted-foreground"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Clear course search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Level
                </span>
                <button
                  onClick={() => setDifficulty("")}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-medium transition-all",
                    !difficulty
                      ? "border-accent/40 bg-accent text-accent-foreground"
                      : "border-border/60 bg-muted/40 text-muted-foreground hover:border-accent/30 hover:text-foreground"
                  )}
                >
                  All
                </button>
                {DIFFICULTIES.map((level) => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(difficulty === level ? "" : level)}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium transition-all",
                      difficulty === level
                        ? "border-accent/40 bg-accent text-accent-foreground"
                        : "border-border/60 bg-muted/40 text-muted-foreground hover:border-accent/30 hover:text-foreground"
                    )}
                  >
                    {level}
                  </button>
                ))}
                <span className="ml-3 mr-1 hidden text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:inline">
                  Topic
                </span>
                {categories.map(([cat, count]) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(category === cat ? "" : cat)}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium transition-all",
                      category === cat
                        ? "border-accent/40 bg-accent text-accent-foreground"
                        : "border-border/60 bg-muted/40 text-muted-foreground hover:border-accent/30 hover:text-foreground"
                    )}
                  >
                    {cat} <span className="opacity-60">{count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* lesson results from the search query */}
            {lessonResults.length > 0 && (
              <div className="mb-8 rounded-2xl border border-border/80 bg-card shadow-sm overflow-hidden">
                <div className="px-5 py-3.5 border-b border-border/60 bg-muted/20 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    lessons found
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {lessonResults.length} result{lessonResults.length > 1 ? "s" : ""}
                  </span>
                </div>
                <ul className="divide-y divide-border/50">
                  {lessonResults.map(({ course, module, lesson }) => (
                    <li key={lesson.id}>
                      <Link
                        href={`/courses/${course.id}/${lesson.id}`}
                        className="flex items-start gap-3 px-5 py-3.5 transition-colors hover:bg-muted/40"
                      >
                        <FileText className="h-4 w-4 mt-0.5 shrink-0 text-primary/60" />
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-foreground truncate">
                            {lesson.title}
                          </span>
                          <span className="block text-xs text-muted-foreground truncate mt-0.5">
                            {course.title} · {module.title.split(": ")[1] || module.title}
                          </span>
                        </span>
                        <ChevronRight className="h-4 w-4 ml-auto shrink-0 text-muted-foreground/50" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {filteredCourses.length === 0 && lessonResults.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 px-6 py-20 text-center">
                <p className="mb-2 text-4xl">🎓</p>
                <h3 className="text-lg font-semibold text-foreground">No courses match</h3>
                <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                  Try a different keyword or clear the filters.
                </p>
                {hasFilters && (
                  <button
                    onClick={() => {
                      setQuery("");
                      setDifficulty("");
                      setCategory("");
                    }}
                    className="mt-5 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:text-accent"
                  >
                    Reset filters
                  </button>
                )}
              </div>
            ) : filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredCourses.map((course) => {
                  const totalLessons = course.modules.reduce(
                    (acc, module) => acc + module.lessons.length,
                    0
                  );

                  return (
                    <div
                      key={course.id}
                      className="relative group p-6 rounded-2xl bg-card border border-border shadow-md transition-all duration-300 hover:shadow-xl hover:border-primary/30 flex flex-col justify-between"
                    >
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="relative space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="p-3 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                            {getIcon(course.iconName)}
                          </div>
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                            {course.difficulty}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                            {course.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {course.shortDescription}
                          </p>
                        </div>

                        <div className="flex gap-2 flex-wrap pt-2">
                          <ChipContainer textArr={course.category} />
                        </div>

                        <div className="grid grid-cols-3 gap-2 py-4 border-y border-border/60 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <BookOpen className="h-3.5 w-3.5" />
                            <span>{totalLessons} lessons</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Star className="h-3.5 w-3.5 text-star fill-star" />
                            <span>{course.rating} / 5</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative pt-6 flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground">
                          Instructor: {course.instructor}
                        </span>
                        <Link
                          href={`/courses/${course.id}`}
                          className={cn(
                            buttonVariants({ variant: "default" }),
                            "rounded-xl gap-2 font-medium"
                          )}
                        >
                          View Syllabus
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </>
        ) : (
          /* Tab 2: Learning Roadmap Timeline */
          <div className="max-w-3xl mx-auto py-4 relative">
            {/* Visual vertical connection line */}
            <div className="absolute left-6 md:left-1/2 top-10 bottom-10 w-0.5 bg-border/80 -translate-x-1/2 hidden sm:block" />

            <div className="space-y-12">
              {roadmapSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={step.step}
                    className={cn(
                      "flex flex-col sm:flex-row items-stretch gap-8 relative",
                      isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                    )}
                  >
                    {/* Timeline Node Dot */}
                    <div className="absolute left-6 md:left-1/2 top-4 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center -translate-x-1/2 z-10 shadow-md">
                      <span className="text-[10px] font-bold text-primary-foreground">
                        {step.step}
                      </span>
                    </div>

                    {/* Left/Right space filler for desktop alignment */}
                    <div className="w-full md:w-1/2 hidden md:block" />

                    {/* Step Card */}
                    <div className="w-full md:w-1/2 p-6 rounded-2xl bg-card border border-border/80 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-200 pl-12 sm:pl-6">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                          {step.level}
                        </span>
                        <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {step.duration}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h4>
                      <p className="text-xs text-primary/80 font-semibold mb-3">
                        {step.subtitle}
                      </p>

                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {step.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] bg-muted font-medium text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={step.link}
                        className={cn(
                          buttonVariants({ variant: "outline", size: "sm" }),
                          "rounded-xl text-xs gap-1.5 w-full justify-center group-hover:bg-primary group-hover:text-primary-foreground"
                        )}
                      >
                        {step.linkLabel}
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <p className="text-xs text-muted-foreground">
                <Award className="mr-1 inline h-3.5 w-3.5" />
                Follow the roadmap top-to-bottom to go from beginner to agentic AI.
              </p>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
