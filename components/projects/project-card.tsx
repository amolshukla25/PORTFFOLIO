import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card-hover group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-background">
      <div className="relative h-[190px] w-full flex-shrink-0 overflow-hidden bg-muted">
        <Image
          src={project.companyLogoImg}
          alt={`${project.companyName} project screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>
      <div className="flex flex-grow flex-col gap-3 p-6 pt-4">
        <h5 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 flex-grow text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5">
          <ChipContainer textArr={project.category} />
        </div>
        <Link
          href={`/projects/${project.id}`}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "group/btn mt-2 w-full rounded-xl font-medium"
          )}
          aria-label={`Read more about ${project.companyName} project`}
        >
          Read more
          <Icons.chevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground shadow-sm backdrop-blur">
        {project.type === "Personal" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
