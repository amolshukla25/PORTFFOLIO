import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface-card hover-lift group flex h-full flex-col overflow-hidden">
      {/* Visual panel — fixed ratio so every card in the row lines up. */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border/60 bg-muted">
        <Image
          src={project.companyLogoImg}
          alt={`${project.companyName} project preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/85 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground shadow-sm backdrop-blur">
          {project.type === "Personal" ? (
            <Icons.userFill className="h-3 w-3" />
          ) : (
            <Icons.work className="h-3 w-3" />
          )}
          {project.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="card-title transition-colors group-hover:text-accent">
          {project.companyName}
        </h3>
        <p className="card-body mt-2 line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="mt-3 flex flex-wrap gap-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 border-t border-border/70 pt-3.5">
          <Link
            href={`/projects/${project.id}`}
            className="group/link inline-flex h-9 items-center gap-1.5 text-xs font-semibold text-foreground transition-colors hover:text-accent"
            aria-label={`View ${project.companyName} case study`}
          >
            View case study
            <Icons.arrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
