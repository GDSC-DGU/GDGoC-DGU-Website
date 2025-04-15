interface PartIntroduceProps {
  part: "AI/ML" | "Server/Cloud" | "Web/App";
  icon: JSX.Element;
  content: string;
  small_icon: JSX.Element;
  preferContent: string;
  tags: readonly string[];
}

export const PartIntroduceCard = ({ part, icon, content, preferContent, small_icon, tags }: PartIntroduceProps) => {
  const partStyleMap = {
    "AI/ML": {
      shadow: "shadow-red-gradiate",
      bg: "bg-gradient-red",
      text: "text-red",
      border: "border-red",
    },
    "Server/Cloud": {
      shadow: "shadow-blue-gradiate",
      bg: "bg-gradient-blue",
      text: "text-blue",
      border: "border-blue",
    },
    "Web/App": {
      shadow: "shadow-lightgreen-gradiate",
      bg: "bg-gradient-green",
      text: "text-green",
      border: "border-green",
    },
  };
  const { shadow, bg, text: color, border } = partStyleMap[part];

  return (
    <div className={`rounded-[16px] w-[375px] h-[436px] py-[10px] px-[26px] ${shadow} ${bg}`}>
      <div className='flex flex-col gap-4 py-2'>
        <div>{icon}</div>
        <h2 className='font-NotoSansKR font-bold text-Head3 text-black '>{part}</h2>
        <p className='font-NotoSansKR font-regular text-Body6 text-gray-500'>{content}</p>
        <div className='flex gap-2 py-1'>
          {small_icon}
          <p className={`w-[300px] font-NotoSansKR font-regular text-Body7 ${color}`}>{preferContent}</p>
        </div>
        <div className='flex flex-wrap gap-[5px]'>
          {tags.map((tag, index) => (
            <div
              key={index}
              className={`rounded-[20px] border-[3px] ${border} px-[15px] py-1 font-NotoSansKR font-bold text-Body8 ${color}`}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
