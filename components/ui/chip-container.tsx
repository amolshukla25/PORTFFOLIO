import Chip from "./chip";

interface ChipContainerProps {
  textArr: string[];
}

export default function ChipContainer({ textArr }: ChipContainerProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {textArr.map((it, ind) => (
        <Chip key={ind} content={it} />
      ))}
    </div>
  );
}
