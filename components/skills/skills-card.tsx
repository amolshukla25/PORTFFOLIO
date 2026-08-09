import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/45"
        >
          {/* Subtle gradient glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex h-[230px] flex-col justify-between rounded-xl p-6 sm:h-[230px] relative z-10">
            {/* Icon Wrapper Badge */}
            <div className="p-3 bg-muted/40 rounded-xl w-fit text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
              <skill.icon size={36} />
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {skill.description}
              </p>
              <div className="pt-2">
                <Rating stars={skill.rating} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
