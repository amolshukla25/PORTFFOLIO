import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj, truncateMetaTitle } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

const githubUsername = "amolshukla";

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = Projects.find((val) => val.id === projectId);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const description =
    project.shortDescription || project.descriptionDetails.paragraphs[0];

  return {
    title: `${project.companyName} — ${project.category.join(", ")} | Projects`,
    description,
    keywords: [
      ...project.techStack,
      ...project.category,
      siteConfig.authorName,
      "Amol Shukla projects",
    ],
    alternates: {
      canonical: `${siteConfig.url}/projects/${projectId}`,
    },
    openGraph: {
      title: truncateMetaTitle(project.companyName),
      description,
      url: `${siteConfig.url}/projects/${projectId}`,
      siteName: siteConfig.name,
      type: "article",
      images: [
        {
          url: project.companyLogoImg,
          width: 720,
          height: 405,
          alt: project.companyName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: truncateMetaTitle(project.companyName),
      description,
      images: [project.companyLogoImg],
      creator: `@${siteConfig.username}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  };
}

export default async function Project({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = Projects.find((val) => val.id === projectId);
  if (!project) {
    notFound();
  }

  // Related projects: same category overlap, ranked by overlap count
  const relatedProjects = Projects
    .filter((p) => p.id !== project.id)
    .map((p) => ({
      project: p,
      overlap: p.category.filter((c) => project.category.includes(c)).length,
    }))
    .filter((r) => r.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 3)
    .map((r) => r.project);

  const description =
    project.shortDescription || project.descriptionDetails.paragraphs[0];

  // Project structured data
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.companyName,
    description,
    url: `${siteConfig.url}/projects/${project.id}`,
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
    keywords: [...project.techStack, ...project.category].join(", "),
    image: project.companyLogoImg,
    dateCreated: project.startDate.toISOString(),
    dateModified: project.endDate.toISOString(),
    ...(project.websiteLink && { sameAs: project.websiteLink }),
    ...(project.githubLink && { codeRepository: project.githubLink }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteConfig.url}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.companyName,
        item: `${siteConfig.url}/projects/${project.id}`,
      },
    ],
  };

  return (
    <article className="container relative max-w-4xl py-6 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Projects
      </Link>
      <div>
        <time
          dateTime={project.startDate.toISOString()}
          className="block text-sm text-muted-foreground"
        >
          {formatDateFromObj(project.startDate)}
        </time>
        <h1 className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mt-2 font-heading text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {project.companyName}
          <div className="flex items-center">
            {project.githubLink && (
              <CustomTooltip text="Link to the source code.">
                <Link href={project.githubLink} target="_blank">
                  <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {project.websiteLink && (
              <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                <Link href={project.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground " />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        <ChipContainer textArr={project.category} />
        <div className="mt-4 flex space-x-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src={profileImg}
              alt="Amol Shukla"
              width={42}
              height={42}
              className="rounded-full bg-background"
            />

            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">{"Amol shukla"}</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <Image
        src={project.companyLogoImg}
        alt={project.companyName}
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Tech Stack
        </h2>
        <ChipContainer textArr={project.techStack} />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Description
        </h2>
        {/* {<project.descriptionComponent />} */}
        <ProjectDescription
          paragraphs={project.descriptionDetails.paragraphs}
          bullets={project.descriptionDetails.bullets}
        />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-5">
          Page Info
        </h2>
        {project.pagesInfoArr.map((page, ind) => (
          <div key={ind}>
            <h3 className="flex items-center font-heading text-xl leading-tight lg:text-xl mt-3">
              <Icons.star className="h-5 w-5 mr-2" /> {page.title}
            </h3>
            <div>
              <p>{page.description}</p>
              {page.imgArr.map((img, ind) => (
                <Image
                  src={img}
                  key={ind}
                  alt={page.description || `${page.title} — ${project.companyName}`}
                  width={720}
                  height={405}
                  className="my-4 rounded-md border bg-muted transition-colors"
                  priority
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Related projects — strong internal linking for SEO */}
      {relatedProjects.length > 0 && (
        <section className="mt-14 border-t border-border pt-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Related projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedProjects.map((rp) => (
              <Link
                key={rp.id}
                href={`/projects/${rp.id}`}
                className="card-hover group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative h-24 w-full overflow-hidden bg-muted">
                  <Image
                    src={rp.companyLogoImg}
                    alt={rp.companyName}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-3.5">
                  <h3 className="line-clamp-2 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    {rp.companyName}
                  </h3>
                  <span className="mt-auto pt-2 text-[11px] text-muted-foreground">
                    {rp.category.join(" · ")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Projects
        </Link>
      </div>
    </article>
  );
}
