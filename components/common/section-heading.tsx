import { type ComponentType } from "react";

import { AnimatedText } from "@/components/common/animated-text";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: ComponentType<{ className?: string }>;
  align?: "center" | "start";
  className?: string;
}

/**
 * One heading shape for every landing section.
 *
 * The landing page used to repeat an eyebrow + gradient h2 + paragraph with a
 * slightly different width and gradient per section, which is what made the
 * page feel stitched together. Keeping the shape in one component means the
 * rhythm stays identical when a section is added or reworded.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <span className="eyebrow">
        {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
        {eyebrow}
      </span>

      <AnimatedText
        as="h2"
        className="max-w-[24ch] font-heading text-[1.6rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-3xl lg:text-4xl"
      >
        {title}
      </AnimatedText>

      {description ? (
        <AnimatedText
          as="p"
          delay={0.15}
          className={cn(
            "text-sm leading-relaxed text-muted-foreground sm:text-[15px]",
            centered ? "mx-auto max-w-[54ch]" : "max-w-[58ch]"
          )}
        >
          {description}
        </AnimatedText>
      ) : null}
    </div>
  );
}
