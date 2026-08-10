import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import BlogCard from "@/components/blogs/blog-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { COURSES } from "@/config/courses";
import { getFeaturedBlogs } from "@/lib/blogs";
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

export default function IndexPage() {
  const featuredBlogs = getFeaturedBlogs();
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

      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          <div className="relative group mb-2">
            {/* Soft decorative gradient glow behind the avatar */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-md group-hover:opacity-40 transition duration-500 pointer-events-none" />
            <Image
              src={profileImg}
              height={220}
              width={220}
              sizes="(max-width: 768px) 60vw, 220px"
              className="relative mb-0 h-[220px] w-[220px] rounded-full border-4 border-background ring-4 ring-primary/10 object-cover object-[center_35%] shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:ring-primary/30"
              alt="Amol Shukla - Applied AI Engineer Portfolio"
              priority
            />
          </div>
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Amol Shukla
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            AI Trainer • Python Developer • Generative AI Specialist
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              Results-driven AI trainer and Python developer focused on building practical learning systems and real-world AI applications.
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href="/courses"
                className={cn(buttonVariants({ size: "lg", variant: "default" }), "bg-gradient-to-r from-primary to-accent hover:opacity-90 rounded-xl")}
                aria-label="Enter Learning Hub"
              >
                <Icons.page className="w-4 h-4 mr-2" /> Learning Hub
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <a
                href={process.env.NEXT_PUBLIC_RESUME_LINK || siteConfig.links.resume || "https://drive.google.com/file/d/1BiUASo5wgZyJ2NFJwm8wmsQFNx09_Aov/view?usp=sharing"}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-xl")}
                aria-label="View resume"
              >
                <Icons.post className="w-4 h-4 mr-2" /> Resume
              </a>
            </AnimatedText>
            <AnimatedText delay={1.0}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "rounded-xl"
                )}
                aria-label="Contact Amol Shukla"
              >
                <Icons.contact className="w-4 h-4 mr-2" /> Contact
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <a
              href="#projects"
              className="flex justify-center cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll down to projects"
            >
              <Icons.chevronDown className="h-6 w-6 mt-10 animate-bounce" />
            </a>
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
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
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="courses"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Syllabus & Courses
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Access interactive notes, code walk-throughs, and downloadable PDF worksheets curated for students and learners.
          </AnimatedText>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
            {COURSES.map((course, index) => {
              const totalLectures = course.modules.reduce(
                (acc, module) => acc + module.lectures.length,
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
                    className="group relative flex flex-col bg-background border border-border rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5"
                  >
                    <article className="flex flex-col h-full">
                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow gap-3">
                        {/* Category tags */}
                        <div className="flex flex-wrap gap-1.5" aria-label="Tags">
                          {course.category.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
                          {course.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground line-clamp-3 flex-grow leading-relaxed">
                          {course.shortDescription}
                        </p>

                        {/* Stats footer */}
                        <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Icons.clock className="w-3.5 h-3.5" />
                              {course.duration}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Icons.page className="w-3.5 h-3.5" />
                              {totalLectures} lectures
                            </span>
                          </div>
                          <span
                            className="inline-flex items-center gap-0.5 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200"
                            aria-hidden="true"
                          >
                            Learn
                            <Icons.chevronRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/courses">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Courses
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="blogs"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.blogs.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.blogs.description}
          </AnimatedText>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
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
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
