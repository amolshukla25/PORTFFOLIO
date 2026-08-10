import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6"
        >
          {/* Accent hairline on hover */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-transparent text-accent transition-transform duration-300 group-hover:scale-105">
              <skill.icon size={22} />
            </div>
            <h3 className="font-bold text-foreground transition-colors duration-300 group-hover:text-accent">
              {skill.name}
            </h3>
          </div>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {skill.description}
          </p>

          <div className="mt-auto pt-4">
            <Rating stars={skill.rating} />
          </div>
        </div>
      ))}
    </div>
  );
}
