import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background">
      {/* Visual panel */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-border/40 bg-gradient-to-br from-muted via-background to-background">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
        <Image
          src={project.companyLogoImg}
          alt={`${project.companyName} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Type badge */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/85 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground shadow-sm backdrop-blur">
          {project.type === "Personal" ? (
            <Icons.userFill className="h-3 w-3" />
          ) : (
            <Icons.work className="h-3 w-3" />
          )}
          {project.type}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">
          {project.companyName}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        {/* Tech stack */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.id}`}
          className="group/link mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent"
          aria-label={`View ${project.companyName} case study`}
        >
          View case study
          <Icons.arrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
