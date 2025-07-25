import clsx from "clsx";

const partList = ["전체", "Devrel", "AI/ML", "Server/Cloud", "Web/App"];

export default function PartFilter({
  selectedPart,
  onSelect,
}: {
  selectedPart: string;
  onSelect: (part: string) => void;
}) {
  return (
    <div className='flex items-center gap-4 flex-wrap'>
      {partList.map((part, index) => (
        <div key={part} className='flex items-center'>
          <button
            className={clsx(
              "px-2 whitespace-nowrap",
              selectedPart === part && "underline underline-offset-4",
              part === selectedPart ? "bg-clip-text text-gray-800 text-Body2 " : "text-gray-400 text-Body2R",
            )}
            onClick={() => onSelect(part)}
          >
            {part}
          </button>
          {index < partList.length - 1 && <div className='px-2 text-gray-400 select-none'>|</div>}
        </div>
      ))}
    </div>
  );
}
