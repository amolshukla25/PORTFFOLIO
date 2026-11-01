import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className={`surface-card hover-lift group flex flex-col p-5 sm:p-6 tone-${(id % 6) + 1}`}
        >
          <div className="flex items-center gap-3">
            <span className="tile-tone h-10 w-10 shrink-0">
              <skill.icon size={18} />
            </span>
            <h3 className="card-title transition-colors group-hover:text-accent">
              {skill.name}
            </h3>
          </div>

          <p className="card-body mt-2.5 line-clamp-3">
            {skill.description}
          </p>

          <div className="mt-auto border-t border-border/70 pt-3.5">
            <Rating stars={skill.rating} />
          </div>
        </div>
      ))}
    </div>
  );
}
