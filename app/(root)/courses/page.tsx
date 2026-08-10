"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Clock, Award, Star, ArrowRight, ChevronRight, Brain, Network, Activity, Workflow, Code, Map, Compass, BookOpenCheck } from "lucide-react";
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
};

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState<"courses" | "roadmap">("courses");

  const roadmapSteps = [
    {
      step: 1,
      title: "Python Foundations",
      subtitle: "Course: Python Foundations for Engineers",
      description: "Master variables, data casting, logic checks, conditional routes, loops, and OOP constructors.",
      skills: ["Syntax", "Conditionals", "Iteration", "OOP basics"],
      duration: "12 hours of notes & code",
      link: "/courses/python-basics",
      linkLabel: "Start Foundations",
      level: "Beginner"
    },
    {
      step: 2,
      title: "Vectorized Computing & Wrangling",
      subtitle: "Applied Data Science Hub — Module 2",
      description: "Learn how to use NumPy multidimensional arrays and perform data transformations, cleaning, and aggregates in Pandas.",
      skills: ["NumPy arrays", "Pandas DataFrames", "Data Imputations", "Groupby aggregations"],
      duration: "4 hours content",
      link: "/courses/data-science/numpy-pandas",
      linkLabel: "Study Wrangling",
      level: "Intermediate"
    },
    {
      step: 3,
      title: "Statistical & Predictive Modeling",
      subtitle: "Applied Data Science Hub — Module 4",
      description: "Fit predictive mathematical algorithms to train dataset splits, scale numerical values, and check cost errors.",
      skills: ["Supervised ML", "Scikit-Learn workflow", "Train-Test splits", "Loss evaluations"],
      duration: "5 hours content",
      link: "/courses/data-science/supervised-learning",
      linkLabel: "Study Machine Learning",
      level: "Intermediate"
    },
    {
      step: 4,
      title: "Intelligent Agentic AI Pipelines",
      subtitle: "Applied Data Science Hub — Module 5",
      description: "Deploy large language models in tool-calling ReAct planning loops to compile and run analytical code dynamically.",
      skills: ["Agentic Loops", "ReAct Framework", "Tool structures", "Environment safety"],
      duration: "6 hours content",
      link: "/courses/data-science/agentic-ai",
      linkLabel: "Master Agentic AI",
      level: "Advanced"
    }
  ];

  return (
    <PageContainer
      title="Student Learning Hub"
      description="Access comprehensive documented notes, code walk-throughs, and PDF worksheets curated for students and learners."
      eyebrow="Learning"
    >
      <div className="py-8">
        
        {/* State-based Tab Switcher */}
        <div className="flex items-center justify-center mb-10 no-print">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COURSES.map((course) => {
              const totalLectures = course.modules.reduce(
                (acc, module) => acc + module.lectures.length,
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
                        <span>{totalLectures} lectures</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
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
                      <span className="text-[10px] font-bold text-primary-foreground">{step.step}</span>
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
          </div>
        )}

      </div>
    </PageContainer>
  );
}
