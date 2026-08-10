import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BookOpen, Clock, Award, ChevronRight, FileText, ArrowLeft, GraduationCap } from "lucide-react";
import PageContainer from "@/components/common/page-container";
import { COURSES } from "@/config/courses";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CoursePageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { courseId } = await params;
  const course = COURSES.find((c) => c.id === courseId);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} — Notes & Syllabus | Amol Shukla`,
    description: course.shortDescription,
    alternates: {
      canonical: `${siteConfig.url}/courses/${courseId}`,
    },
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const course = COURSES.find((c) => c.id === courseId);

  if (!course) {
    redirect("/courses");
  }

  return (
    <div className="container py-8 max-w-4xl">
      {/* Back button */}
      <Link
        href="/courses"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "mb-6 rounded-xl text-muted-foreground hover:text-foreground gap-2"
        )}
      >
        <ArrowLeft className="h-4 w-4" />
        All Courses
      </Link>

      {/* Course Header */}
      <div className="space-y-4 mb-10 pb-8 border-b border-border">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {course.difficulty}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {course.duration} estimated content
          </span>
        </div>

        <h1 className="font-heading text-4xl leading-tight md:text-5xl flex items-center gap-3">
          <GraduationCap className="h-10 w-10 text-primary hidden sm:block" />
          {course.title}
        </h1>

        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          {course.detailedDescription}
        </p>

        <div className="flex items-center gap-4 text-sm pt-2">
          <span className="font-semibold text-foreground">
            Instructor: <span className="font-normal text-muted-foreground">{course.instructor}</span>
          </span>
        </div>
      </div>

      {/* Syllabus Modules Grid (Card Inside Card Layout) */}
      <div className="space-y-8">
        <h2 className="font-heading text-3xl mb-6">Course Modules</h2>
        
        {course.modules.map((module, mIdx) => (
          <div
            key={module.id}
            className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm relative overflow-hidden"
          >
            {/* Soft decorative background tint for module */}
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Module {mIdx + 1}
              </span>
              <h3 className="text-2xl font-bold text-foreground">
                {module.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {module.description}
              </p>
            </div>

            {/* Inner Lecture Cards (Card inside Card) */}
            <div className="grid grid-cols-1 gap-4">
              {module.lectures.map((lecture) => (
                <div
                  key={lecture.id}
                  className="group relative p-4 rounded-xl bg-background border border-border/60 hover:border-primary/30 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div className="space-y-1.5 max-w-xl">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary/70 shrink-0" />
                      <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                        {lecture.title}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 pl-6">
                      {lecture.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pl-6 sm:pl-0 shrink-0">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs font-medium text-foreground">{lecture.duration}</p>
                      <p className="text-[10px] text-muted-foreground">{lecture.readingTime}</p>
                    </div>
                    <Link
                      href={`/courses/${course.id}/${lecture.id}`}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "rounded-xl gap-1 text-xs py-1.5 h-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      )}
                    >
                      Read Notes
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
