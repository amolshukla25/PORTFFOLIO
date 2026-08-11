import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import BlogCard from "@/components/blogs/blog-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { Code } from "lucide-react";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { COURSES } from "@/config/courses";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { SocialLinks } from "@/config/socials";
import { getAllBlogsMeta, getFeaturedBlogs } from "@/lib/blogs";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.svg";

export const metadata: Metadata = {
  title: {
    absolute: "Amol Shukla — AI Developer & Trainer | Agentic AI Expert",
  },
  description:
    "Amol Shukla — AI Developer, Trainer, and Agentic AI Expert. I build agentic AI systems, train on LLMs and generative AI, and ship production software with Python. Explore my projects, experience, and technical blog.",
  alternates: {
    canonical: siteConfig.url,
  },
};

const getCourseIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case "brain":
      return <Icons.brain className={className} />;
    case "network":
      return <Icons.network className={className} />;
    case "activity":
      return <Icons.activity className={className} />;
    case "workflow":
      return <Icons.workflow className={className} />;
    case "code":
      return <Code className={className} />;
    default:
      return <Icons.page className={className} />;
  }
};

const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const end =
    typeof endDate === "string" ? "Present" : endDate.getFullYear().toString();
  return `${startDate.getFullYear()} – ${end}`;
};

export default function IndexPage() {
  const featuredBlogs = getFeaturedBlogs();
  const allBlogsCount = getAllBlogsMeta().length;

  const yearsOfExperience = Math.max(
    1,
    new Date().getFullYear() -
      Math.min(...experiences.map((e) => e.startDate.getFullYear()))
  );

  // Teaching journey began in 2024 — tracked separately from total experience
  const yearsTraining = Math.max(1, new Date().getFullYear() - 2024);

  const stats = [
    { value: `${yearsOfExperience}+`, label: "Years Experience" },
    { value: `${featuredProjects.length}`, label: "Projects" },
    { value: `${COURSES.length}`, label: "Courses" },
    { value: `${allBlogsCount}`, label: "Articles" },
  ];

  const aboutHighlights = [
    {
      icon: Icons.brain,
      title: "AI Developer & Trainer",
      description: `${yearsTraining}+ years training developers and data professionals in Python, machine learning, and generative AI.`,
    },
    {
      icon: Icons.workflow,
      title: "Agentic AI Expert",
      description:
        "Design ReAct-style agent pipelines, tool-calling systems, and safe production LLM workflows.",
    },
    {
      icon: Icons.aurora,
      title: "Generative AI Specialist",
      description:
        "Hands-on LLM and GenAI training that takes learners from prompt engineering to deployment.",
    },
    {
      icon: Icons.react,
      title: "Full-Stack Engineer",
      description:
        "Ship end-to-end products with Next.js, React, TypeScript, Python, and FastAPI.",
    },
  ];

  const tileGradients = [
    "from-primary to-accent",
    "from-accent/90 to-primary/80",
    "from-primary/80 to-accent/70",
  ];

  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    jobTitle: "AI Developer, Trainer & Agentic AI Expert",
    description:
      "AI Developer, Trainer, and Agentic AI Expert building agentic AI systems and training on LLMs and generative AI with Python.",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Backdrop decorations */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_38%,black_30%,transparent_78%)]" />
          <div className="animate-blob absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
          <div className="animate-blob animation-delay-2000 absolute right-[6%] top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="animate-blob animation-delay-4000 absolute bottom-10 left-[8%] h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="container relative flex min-h-[calc(100vh-4rem)] max-w-[64rem] flex-col items-center justify-center py-24 text-center supports-[height:100svh]:min-h-[calc(100svh-4rem)]">
          {/* Status badge */}
          <AnimatedText delay={0.1} className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Available for AI projects & training
            </span>
          </AnimatedText>

          {/* Avatar */}
          <AnimatedText delay={0.2} className="group relative mb-8">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent via-transparent to-primary opacity-25 blur-xl transition-opacity duration-500 group-hover:opacity-60" />
            <div className="relative rounded-full bg-gradient-to-tr from-accent via-primary/40 to-primary p-[3px] shadow-2xl shadow-accent/20 transition-transform duration-500 group-hover:scale-[1.03]">
              <Image
                src={profileImg}
                height={220}
                width={220}
                sizes="(max-width: 768px) 60vw, 220px"
                className="relative h-[180px] w-[180px] rounded-full border-4 border-background object-cover object-[center_35%] sm:h-[200px] sm:w-[200px]"
                alt="Amol Shukla - Applied AI Engineer Portfolio"
                priority
              />
            </div>
          </AnimatedText>

          {/* Name */}
          <AnimatedText
            as="h1"
            delay={0.3}
            className="text-gradient font-heading text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            Amol Shukla
          </AnimatedText>

          {/* Tagline */}
          <AnimatedText
            as="h3"
            delay={0.45}
            className="mt-3 font-heading text-base font-semibold sm:text-xl md:text-2xl"
          >
            AI Trainer <span className="mx-1 text-accent">•</span> Python
            Developer <span className="mx-1 text-accent">•</span> Generative AI
            Specialist
          </AnimatedText>

          {/* Description */}
          <AnimatedText delay={0.6} className="mt-5 max-w-[42rem]">
            <p className="leading-relaxed text-sm text-muted-foreground sm:text-base">
              Results-driven AI trainer and Python developer focused on
              building practical learning systems and real-world AI
              applications.
            </p>
          </AnimatedText>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:space-x-4">
            <AnimatedText delay={0.7}>
              <Link
                href="#about"
                className={cn(
                  buttonVariants({ size: "lg", variant: "default" }),
                  "group w-full rounded-xl bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground shadow-lg shadow-accent/20 hover:opacity-95 sm:w-auto"
                )}
                aria-label="Learn more about Amol Shukla"
              >
                <Icons.userFill className="mr-2 h-4 w-4" /> About Me
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.85}>
              <a
                href={
                  process.env.NEXT_PUBLIC_RESUME_LINK ||
                  siteConfig.links.resume ||
                  "https://drive.google.com/file/d/1BiUASo5wgZyJ2NFJwm8wmsQFNx09_Aov/view?usp=sharing"
                }
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "w-full rounded-xl sm:w-auto"
                )}
                aria-label="View resume"
              >
                <Icons.post className="mr-2 h-4 w-4" /> Resume
              </a>
            </AnimatedText>
            <AnimatedText delay={1.0}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full rounded-xl sm:w-auto"
                )}
                aria-label="Contact Amol Shukla"
              >
                <Icons.contact className="mr-2 h-4 w-4" /> Contact
              </Link>
            </AnimatedText>
          </div>

          {/* Stats */}
          <AnimatedText delay={1.15} className="mt-14 w-full max-w-2xl">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 shadow-sm sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background/80 px-4 py-5 backdrop-blur transition-colors hover:bg-background"
                >
                  <div className="text-gradient font-heading text-2xl font-bold sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedText>

          {/* Scroll indicator */}
          <AnimatedText delay={1.3} className="mt-12">
            <a
              href="#learning"
              className="flex justify-center text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Scroll down to learning hub"
            >
              <Icons.chevronDown className="h-6 w-6 animate-bounce" />
            </a>
          </AnimatedText>
        </div>
      </section>

      {/* ─── Learning Hub (Courses) ───────────────────────────────────── */}
      <AnimatedSection
        direction="up"
        className="container space-y-10 py-16"
        id="learning"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <span className="eyebrow">
            <Icons.brain className="h-3.5 w-3.5" /> Learning Hub
          </span>
          <AnimatedText
            as="h2"
            className="text-gradient font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Structured courses, built for learners
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-relaxed text-muted-foreground sm:text-lg"
          >
            Explore interactive notes, code walk-throughs, and downloadable
            worksheets curated for students and professionals.
          </AnimatedText>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {COURSES.map((course, index) => {
            const totalLessons = course.modules.reduce(
              (acc, module) => acc + module.lessons.length,
              0
            );

            return (
              <AnimatedSection
                key={course.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="h-full w-full min-w-0"
              >
                <Link
                  href={`/courses/${course.id}`}
                  className="card-hover group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-background p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-transparent text-accent transition-transform duration-300 group-hover:scale-105">
                      {getCourseIcon(course.iconName, "h-6 w-6")}
                    </div>
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                      {course.difficulty}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground transition-colors duration-200 group-hover:text-accent">
                      {course.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {course.shortDescription}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Icons.clock className="h-3.5 w-3.5" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Icons.page className="h-3.5 w-3.5" />
                        {totalLessons} lessons
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                      Open
                      <Icons.chevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/courses">
            <Button variant={"outline"} className="group rounded-xl">
              Browse the full Learning Hub
              <Icons.arrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* ─── About ────────────────────────────────────────────────────── */}
      <AnimatedSection direction="up" className="container py-16" id="about">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bio */}
          <div className="space-y-6">
            <span className="eyebrow">
              <Icons.userFill className="h-3.5 w-3.5" /> About Me
            </span>
            <AnimatedText
              as="h2"
              className="text-gradient font-heading text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Turning complex AI into practical skills
            </AnimatedText>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                I&apos;m {siteConfig.authorName} — an AI Developer, Trainer,
                and Agentic AI Expert with {yearsTraining}+ years of
                experience helping developers and data professionals master
                Python, machine learning, and generative AI.
              </p>
              <p>
                As a full-time AI trainer at Ikigai School of AI, I design
                project-based curricula, mentor students through placements,
                and build production applications — from agentic AI pipelines
                to full-stack web products — in parallel.
              </p>
            </div>

            {/* Socials + Resume */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {SocialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-muted/40 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href={
                  process.env.NEXT_PUBLIC_RESUME_LINK ||
                  siteConfig.links.resume
                }
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "ml-1 rounded-xl"
                )}
              >
                <Icons.post className="mr-2 h-4 w-4" /> Resume
              </a>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={0.1 * (i + 1)} direction="up">
                <div className="card-hover h-full rounded-2xl border border-border bg-card p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-transparent text-accent">
                    <h.icon size={22} />
                  </div>
                  <h3 className="mt-4 font-bold text-foreground">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {h.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── Experience ───────────────────────────────────────────────── */}
      <AnimatedSection
        direction="up"
        className="container py-16"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <span className="eyebrow">
            <Icons.work className="h-3.5 w-3.5" /> Experience
          </span>
          <AnimatedText
            as="h2"
            className="text-gradient font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Where I&apos;ve worked
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-relaxed text-muted-foreground sm:text-lg"
          >
            A track record of delivering AI training and building production
            software across companies and startups.
          </AnimatedText>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {experiences.slice(0, 3).map((exp, i) => (
            <AnimatedSection key={exp.id} delay={0.1 * (i + 1)} direction="up">
              <Link
                href={`/experience/${exp.id}`}
                className="card-hover group flex items-start gap-4 rounded-2xl border border-border bg-background p-5"
              >
                <span
                  className={cn(
                    "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br font-heading text-sm font-bold text-primary-foreground shadow-sm",
                    tileGradients[i % tileGradients.length]
                  )}
                >
                  {exp.company
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="font-bold text-foreground transition-colors duration-200 group-hover:text-accent">
                      {exp.position}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      {getDurationText(exp.startDate, exp.endDate)}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="mt-1 line-clamp-1 text-sm text-muted-foreground/80">
                    {exp.description[0]}
                  </p>
                </div>
                <Icons.chevronRight
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </Link>
            </AnimatedSection>
          ))}
          <div className="flex justify-center pt-4">
            <Link href="/experience">
              <Button variant={"outline"} className="group rounded-xl">
                Full career timeline
                <Icons.arrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── Projects ─────────────────────────────────────────────────── */}
      <AnimatedSection
        direction="up"
        className="container space-y-10 py-16"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <span className="eyebrow">
            <Icons.work className="h-3.5 w-3.5" /> Portfolio
          </span>
          <AnimatedText
            as="h2"
            className="text-gradient font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-relaxed text-muted-foreground sm:text-lg"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="grid w-full grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={0.1 * (index + 1)}
              direction="up"
              className="h-full w-full min-w-0"
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="group rounded-xl">
              View All
              <Icons.arrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* ─── Skills ───────────────────────────────────────────────────── */}
      <AnimatedSection
        direction="up"
        className="container space-y-10 py-16"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <span className="eyebrow">
            <Icons.aurora className="h-3.5 w-3.5" /> Expertise
          </span>
          <AnimatedText
            as="h2"
            className="text-gradient font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-relaxed text-muted-foreground sm:text-lg"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="group rounded-xl">
              View All
              <Icons.arrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* ─── Blogs ────────────────────────────────────────────────────── */}
      <AnimatedSection
        direction="up"
        className="container space-y-10 rounded-3xl bg-muted/60 px-6 py-16 md:px-12"
        id="blogs"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <span className="eyebrow">
            <Icons.post className="h-3.5 w-3.5" /> Writing
          </span>
          <AnimatedText
            as="h2"
            className="text-gradient font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {pagesConfig.blogs.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-relaxed text-muted-foreground sm:text-lg"
          >
            {pagesConfig.blogs.description}
          </AnimatedText>
        </div>
        <div className="grid w-full grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBlogs.map((blog, index) => (
            <AnimatedSection
              key={blog.slug}
              delay={0.1 * (index + 1)}
              direction="up"
              className="h-full w-full min-w-0"
            >
              <BlogCard blog={blog} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/blogs">
            <Button variant={"outline"} className="group rounded-xl">
              View All
              <Icons.arrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

    </ClientPageWrapper>
  );
}
