import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import BlogCard from "@/components/blogs/blog-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { SectionHeading } from "@/components/common/section-heading";
import { Code } from "lucide-react";
import ProjectCard from "@/components/projects/project-card";
import { PromptsSection } from "@/components/prompts/prompts-section";
import SkillsCard from "@/components/skills/skills-card";
import { buttonVariants } from "@/components/ui/button";
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

  const totalLessons = COURSES.reduce(
    (total, course) =>
      total + course.modules.reduce((sum, module) => sum + module.lessons.length, 0),
    0
  );

  const stats = [
    { value: `${yearsOfExperience}+`, label: "Years experience" },
    { value: `${COURSES.length}`, label: "Free courses" },
    { value: `${totalLessons}`, label: "Lessons" },
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

  // Structured data for the homepage — WebSite + Organization + Person in a
  // single @graph. Rendered as a plain <script> tag so it ships in the initial
  // server HTML crawlers read (next/script would inject it only after hydration).
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-US",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.authorName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}${siteConfig.logoIcon}`,
        },
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        description:
          "AI Developer, Trainer, and Agentic AI Expert building agentic AI systems and training on LLMs and generative AI with Python.",
        sameAs: [siteConfig.links.github, siteConfig.links.twitter],
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.authorName,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        jobTitle: "AI Developer, Trainer & Agentic AI Expert",
        description:
          "AI Developer, Trainer, and Agentic AI Expert building agentic AI systems and training on LLMs and generative AI with Python.",
        sameAs: [siteConfig.links.github, siteConfig.links.twitter],
        worksFor: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <ClientPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />

      {/* ─── Hero ───────────────────────────────────────────────────────
          One primary action, two supporting ones, and the portrait in a
          framed card. The four portal links used to sit here as large
          buttons and drowned the actual call to action; they now live in
          the slim strip below. */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_20%,black_25%,transparent_75%)]" />
          <div className="absolute -top-32 right-[-12%] h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl sm:h-[460px] sm:w-[460px]" />
          <div className="absolute bottom-[-10%] left-[-14%] h-[300px] w-[300px] rounded-full bg-accent/[0.06] blur-3xl" />
        </div>

        <div className="relative grid items-center gap-9 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14 lg:py-20">
          {/* Copy */}
          <div className="min-w-0">
            <AnimatedText delay={0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3 py-1.5 text-[11px] font-medium text-muted-foreground shadow-sm backdrop-blur sm:text-xs">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                </span>
                Available for AI projects & training
              </span>
            </AnimatedText>

            <AnimatedText
              as="h1"
              delay={0.1}
              className="mt-5 font-heading text-[2.1rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]"
            >
              Amol Shukla
            </AnimatedText>

            <AnimatedText
              as="p"
              delay={0.18}
              className="mt-3 font-heading text-base font-semibold leading-snug text-foreground/90 sm:text-lg"
            >
              AI Trainer
              <span className="mx-2 text-accent" aria-hidden>
                /
              </span>
              Python Developer
              <span className="mx-2 text-accent" aria-hidden>
                /
              </span>
              Generative AI Specialist
            </AnimatedText>

            <AnimatedText delay={0.26} className="mt-4 max-w-[54ch]">
              <span className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                I build agentic AI systems and teach the engineers who ship
                them — {COURSES.length} free courses, {totalLessons} lessons, and
                production LLM work in between.
              </span>
            </AnimatedText>

            {/* CTAs: one filled action, one outline, one quiet text link. */}
            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/courses"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group h-11 w-full gap-2 rounded-xl px-5 text-sm sm:w-auto"
                )}
              >
                <Icons.page className="h-4 w-4" />
                Explore courses
                <Icons.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 w-full rounded-xl px-5 text-sm sm:w-auto"
                )}
              >
                <Icons.contact className="h-4 w-4" />
                Contact me
              </Link>

              <a
                href={
                  process.env.NEXT_PUBLIC_RESUME_LINK ||
                  siteConfig.links.resume
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent sm:justify-start"
              >
                <Icons.post className="h-4 w-4" />
                <span className="link-underline">Resume</span>
              </a>
            </div>
          </div>

          {/* Portrait card */}
          <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[330px] lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border/80 bg-card p-2 shadow-sm">
              <div className="relative aspect-square overflow-hidden rounded-[1.15rem] bg-muted">
                <Image
                  src={profileImg}
                  alt="Amol Shukla — AI Developer and Trainer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 330px, 320px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <p className="font-heading text-sm font-semibold text-white">
                      Amol Shukla
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/75">
                      AI Developer · Trainer
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur">
                    {yearsOfExperience}+ yrs
                  </span>
                </div>
              </div>
            </div>

            {/* Floating facts — desktop only, so mobile stays uncluttered. */}
            <div className="pointer-events-none absolute -left-7 top-10 hidden rounded-xl border border-border/80 bg-card/95 px-3 py-2 shadow-sm backdrop-blur lg:block">
              <p className="font-heading text-base font-bold tabular-nums text-foreground">
                {totalLessons}
              </p>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                Free lessons
              </p>
            </div>
            <div className="pointer-events-none absolute -right-5 bottom-16 hidden rounded-xl border border-border/80 bg-card/95 px-3 py-2 shadow-sm backdrop-blur lg:block">
              <p className="font-heading text-base font-bold tabular-nums text-foreground">
                {COURSES.length}
              </p>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                Courses
              </p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <AnimatedText delay={0.34} className="relative pb-2">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card px-4 py-4 sm:px-5">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-heading text-xl font-bold tabular-nums text-foreground sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedText>
      </section>

      {/* ─── Training portal strip ──────────────────────────────────────
          Demoted from the hero: real but secondary traffic. */}
      <section aria-labelledby="portal-heading" className="pt-8 sm:pt-10">
        <div className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card/70 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="max-w-[46ch]">
            <h2
              id="portal-heading"
              className="text-sm font-semibold text-foreground"
            >
              Training portal
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              For students in my batches: sign in to log a session, or register
              and wait for approval.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
            <Link
              href="/student/login"
              className={cn(
                buttonVariants({ size: "sm" }),
                "h-10 justify-center rounded-xl px-3.5 text-xs"
              )}
            >
              Student sign-in
            </Link>
            <Link
              href="/student/register"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "h-10 justify-center rounded-xl px-3.5 text-xs"
              )}
            >
              Register
            </Link>
            <Link
              href="/admin/login"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "h-10 justify-center rounded-xl px-3 text-xs"
              )}
            >
              Trainer sign-in
            </Link>
            <Link
              href="/admin/batches"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "h-10 justify-center rounded-xl px-3 text-xs"
              )}
            >
              Batches
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Syllabus & courses ───────────────────────────────────────── */}
      <AnimatedSection direction="up" className="section" id="courses">
        <SectionHeading
          icon={Icons.brain}
          eyebrow="Learning hub"
          title="Syllabus & courses"
          description="Interactive notes, code walk-throughs and downloadable worksheets. Every lesson is free and readable without an account."
        />

        <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {COURSES.map((course, index) => {
            const lessons = course.modules.reduce(
              (acc, module) => acc + module.lessons.length,
              0
            );

            return (
              <AnimatedSection
                key={course.id}
                delay={0.06 * (index + 1)}
                direction="up"
                className="h-full min-w-0"
              >
                <Link
                  href={`/courses/${course.id}`}
                  className={cn(
                    "surface-card hover-lift group flex h-full flex-col p-5 sm:p-6",
                    `tone-${(index % 6) + 1}`
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="tile-tone h-10 w-10 shrink-0">
                      {getCourseIcon(course.iconName, "h-5 w-5")}
                    </span>
                    <span className="chip shrink-0">{course.difficulty}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {course.category.slice(0, 3).map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="card-title mt-3 line-clamp-2 transition-colors group-hover:text-accent">
                    {course.title}
                  </h3>
                  <p className="card-body mt-2 line-clamp-3">
                    {course.shortDescription}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/70 pt-3.5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Icons.clock className="h-3.5 w-3.5" />
                        {course.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Icons.page className="h-3.5 w-3.5" />
                        {lessons} lessons
                      </span>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold text-accent">
                      Syllabus
                      <Icons.chevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/courses"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "h-10 rounded-xl px-4 text-xs"
            )}
          >
            <Icons.page className="mr-2 h-3.5 w-3.5" />
            View all courses
            <Icons.arrowRight className="ml-2 h-3.5 w-3.5" />
          </Link>
        </div>
      </AnimatedSection>

      {/* ─── About ────────────────────────────────────────────────────── */}
      <AnimatedSection direction="up" className="section" id="about">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              icon={Icons.userFill}
              eyebrow="About me"
              title="Turning complex AI into practical skills"
              align="start"
            />

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              <p>
                I&apos;m {siteConfig.authorName} — an AI Developer, Trainer and
                Agentic AI Expert with {yearsTraining}+ years of experience
                helping developers and data professionals master Python, machine
                learning and generative AI.
              </p>
              <p>
                As a full-time AI trainer at Ikigai School of AI, I design
                project-based curricula, mentor students through placements, and
                build production applications — from agentic AI pipelines to
                full-stack web products — in parallel.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {SocialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border/70 bg-card text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href={
                  process.env.NEXT_PUBLIC_RESUME_LINK || siteConfig.links.resume
                }
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "h-10 rounded-xl px-3.5 text-xs"
                )}
              >
                <Icons.post className="mr-2 h-3.5 w-3.5" />
                Resume
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {aboutHighlights.map((h, i) => (
              <AnimatedSection
                key={h.title}
                delay={0.06 * (i + 1)}
                direction="up"
                className="h-full"
              >
                <div
                  className={cn(
                    "surface-card hover-lift h-full p-4 sm:p-5",
                    `tone-${i + 1}`
                  )}
                >
                  <span className="tile-tone h-9 w-9">
                    <h.icon size={18} />
                  </span>
                  <h3 className="card-title mt-3">{h.title}</h3>
                  <p className="card-body mt-1.5">{h.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── Prompt vault ─────────────────────────────────────────────── */}
      <PromptsSection />

      {/* ─── Experience ───────────────────────────────────────────────── */}
      <AnimatedSection direction="up" className="section" id="experience">
        <SectionHeading
          icon={Icons.work}
          eyebrow="Experience"
          title="Where I've worked"
          description="A track record of delivering AI training and building production software across companies and startups."
        />

        <div className="mx-auto mt-8 max-w-3xl space-y-3 sm:mt-10">
          {experiences.slice(0, 3).map((exp, i) => (
            <AnimatedSection
              key={exp.id}
              delay={0.06 * (i + 1)}
              direction="up"
            >
              <Link
                href={`/experience/${exp.id}`}
                className={cn(
                  "surface-card hover-lift group flex items-start gap-3 p-4 sm:gap-4 sm:p-5",
                  `tone-${i + 1}`
                )}
              >
                <span className="tile-tone h-10 w-10 shrink-0 font-heading text-xs font-bold">
                  {exp.company
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <h3 className="card-title transition-colors group-hover:text-accent">
                      {exp.position}
                    </h3>
                    <span className="chip">
                      {getDurationText(exp.startDate, exp.endDate)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-[13px]">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="card-body mt-1 line-clamp-2">
                    {exp.description[0]}
                  </p>
                </div>
                <Icons.chevronRight
                  aria-hidden
                  className="mt-1 hidden h-4 w-4 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-accent sm:block"
                />
              </Link>
            </AnimatedSection>
          ))}

          <div className="flex justify-center pt-3">
            <Link
              href="/experience"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "h-10 rounded-xl px-4 text-xs"
              )}
            >
              Full career timeline
              <Icons.arrowRight className="ml-2 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── Projects ─────────────────────────────────────────────────── */}
      <AnimatedSection direction="up" className="section" id="projects">
        <SectionHeading
          icon={Icons.work}
          eyebrow="Portfolio"
          title={pagesConfig.projects.title}
          description={pagesConfig.projects.description}
        />

        <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={0.06 * (index + 1)}
              direction="up"
              className="h-full min-w-0"
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "h-10 rounded-xl px-4 text-xs"
            )}
          >
            View all projects
            <Icons.arrowRight className="ml-2 h-3.5 w-3.5" />
          </Link>
        </div>
      </AnimatedSection>

      {/* ─── Skills ───────────────────────────────────────────────────── */}
      <AnimatedSection direction="up" className="section" id="skills">
        <SectionHeading
          icon={Icons.aurora}
          eyebrow="Expertise"
          title={pagesConfig.skills.title}
          description={pagesConfig.skills.description}
        />

        <div className="mt-8 sm:mt-10">
          <SkillsCard skills={featuredSkills} />
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/skills"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "h-10 rounded-xl px-4 text-xs"
            )}
          >
            View all skills
            <Icons.arrowRight className="ml-2 h-3.5 w-3.5" />
          </Link>
        </div>
      </AnimatedSection>

      {/* ─── Writing ──────────────────────────────────────────────────── */}
      <AnimatedSection
        direction="up"
        className="section section-band mt-6 px-4 py-10 sm:px-6 sm:py-14 lg:px-10"
        id="blogs"
      >
        <SectionHeading
          icon={Icons.post}
          eyebrow="Writing"
          title={pagesConfig.blogs.title}
          description={pagesConfig.blogs.description}
        />

        <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {featuredBlogs.map((blog, index) => (
            <AnimatedSection
              key={blog.slug}
              delay={0.06 * (index + 1)}
              direction="up"
              className="h-full min-w-0"
            >
              <BlogCard blog={blog} />
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/blogs"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "h-10 rounded-xl px-4 text-xs"
            )}
          >
            Read all articles
            <Icons.arrowRight className="ml-2 h-3.5 w-3.5" />
          </Link>
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
