import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

/** Turns a 1–5 rating into a label a reader can act on. */
function proficiencyLabel(rating: number) {
  switch (rating) {
    case 5:
      return "Expert";
    case 4:
      return "Advanced";
    case 3:
      return "Proficient";
    case 2:
      return "Working knowledge";
    default:
      return "Learning";
  }
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className={`surface-card hover-lift group flex flex-col p-5 sm:p-6 tone-${
            (id % 6) + 1
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="tile-tone h-10 w-10 shrink-0">
              <skill.icon size={18} />
            </span>
            <h3 className="card-title transition-colors group-hover:text-accent">
              {skill.name}
            </h3>
          </div>

          <p className="card-body mt-2.5 line-clamp-3">{skill.description}</p>

          <div className="mt-auto border-t border-border/70 pt-3.5">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[11px] font-semibold text-foreground">
                {proficiencyLabel(skill.rating)}
              </span>
              <span className="text-[11px] tabular-nums text-muted-foreground">
                {skill.rating} / 5
              </span>
            </div>
            <div
              className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted"
              role="img"
              aria-label={`${skill.name}: ${proficiencyLabel(
                skill.rating
              )}, ${skill.rating} out of 5`}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(skill.rating / 5) * 100}%`,
                  backgroundColor: "hsl(var(--tone, var(--accent)))",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
