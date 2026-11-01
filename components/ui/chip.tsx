interface ChipProps {
  content: string;
}

export default function Chip({ content }: ChipProps) {
  return (
    <span className="chip select-none">
      {content}
    </span>
  );
}
