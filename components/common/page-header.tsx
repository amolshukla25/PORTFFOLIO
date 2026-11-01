interface PageHeaderProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export default function PageHeader({
  title,
  description,
  eyebrow,
}: PageHeaderProps) {
  return (
    <>
      <div className="flex flex-col items-start gap-5 pt-10 md:pt-16">
        {eyebrow ? (
          <span className="eyebrow">{eyebrow}</span>
        ) : null}
        <div className="flex-1 space-y-3">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </div>
      <div className="my-8 h-px w-full bg-gradient-to-r from-border via-border to-transparent" />
    </>
  );
}
