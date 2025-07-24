interface TargetComponentProps {
  text: string;
  boldList: string[];
}

export const TargetComponent = ({ text, boldList }: TargetComponentProps) => {
  if (!boldList || boldList.length === 0) return text;
  const pattern = new RegExp(`(${boldList.join("|")})`, "g");
  const parts = text.split(pattern);

  return (
    <>
      <div className='border border-green rounded-[20px] w-[860px] h-[80px] flex items-center justify-center font-NotoSansKR font-normal text-Body8 text-black'>
        {parts.map((part, idx) => (boldList.includes(part) ? <strong key={idx}>{part}</strong> : part))}
      </div>
    </>
  );
};
