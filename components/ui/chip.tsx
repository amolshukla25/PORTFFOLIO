interface ChipProps {
  content: string;
}

export default function Chip({ content }: ChipProps) {
  return (
    <span className="inline-flex select-none items-center whitespace-nowrap rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-[11px] font-medium leading-none text-muted-foreground transition-colors hover:border-accent/30 hover:text-foreground">
      {content}
    </span>
  );
}
