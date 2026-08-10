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
        className="container space-y-6 bg-muted/40 py-10 my-14 rounded-3xl border border-border/50 p-6 md:p-10"
        id="courses"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Icons.star className="h-3.5 w-3.5 fill-current" /> Education & Training
          </span>
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Student Study Hub
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            I create and share comprehensive documented notes, interactive code workbooks, and downloadable PDF worksheets to help my students master Python, Data Science, and Agentic AI.
          </AnimatedText>
        </div>

        <div className="w-full max-w-2xl mx-auto pt-6">
          <div className="group relative p-6 rounded-2xl bg-card border border-border shadow-md transition-all duration-300 hover:shadow-xl hover:border-primary/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3 max-w-md">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-muted text-primary">
                  <Icons.brain className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Applied Data Science & Generative AI Hub
                </h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Our first course covers data wrangling, advanced computations, predictive statistical modeling, and agentic loop pipeline architectures.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-[10px] bg-muted px-2 py-0.5 rounded-md font-medium text-muted-foreground">5 Lectures</span>
                <span className="text-[10px] bg-muted px-2 py-0.5 rounded-md font-medium text-muted-foreground">Python & sklearn</span>
                <span className="text-[10px] bg-muted px-2 py-0.5 rounded-md font-medium text-muted-foreground">Agentic Workflows</span>
              </div>
            </div>

            <Link
              href="/courses/data-science"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-xl gap-2 font-medium shrink-0 w-full sm:w-auto text-center justify-center"
              )}
            >
              Start Learning
              <Icons.chevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <AnimatedText delay={0.4} className="flex justify-center pt-2">
          <Link href="/courses">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.page className="mr-2 h-4 w-4" /> View All Courses
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
