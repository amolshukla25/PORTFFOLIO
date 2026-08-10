import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, Award, Star, ArrowRight, Brain, Network, Activity, Workflow } from "lucide-react";
import PageContainer from "@/components/common/page-container";
import { COURSES } from "@/config/courses";
import { siteConfig } from "@/config/site";
import ChipContainer from "@/components/ui/chip-container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Learning Hub & Courses | Amol Shukla",
  description: "Access high-quality interactive notes, python code guides, and lectures for university students and developers.",
  alternates: {
    canonical: `${siteConfig.url}/courses`,
  },
};

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
    default:
      return <BookOpen className="h-8 w-8 text-primary" />;
  }
};

export default function CoursesPage() {
  return (
    <PageContainer
      title="Student Learning Hub"
      description="Access comprehensive documented notes, code walk-throughs, and PDF worksheets curated for students and learners."
    >
      <div className="py-8">
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
                {/* Visual hover background accent */}
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
      </div>
    </PageContainer>
  );
}
