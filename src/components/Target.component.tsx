import React from "react";

interface TargetComponentProps {
  text: string;
  boldList: string[];
}

export const TargetComponent = ({ text, boldList }: TargetComponentProps) => {
  if (!boldList || boldList.length === 0) return <>{text}</>;

  const escapedBoldList = boldList.map((s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
  const pattern = new RegExp(`(${escapedBoldList.join("|")})`, "gi");

  const elements = [];
  let lastIndex = 0;

  const matches = text.matchAll(pattern);

  for (const match of matches) {
    const matchIndex = match.index ?? 0;
    const matchText = match[0];

    if (lastIndex < matchIndex) {
      elements.push(text.slice(lastIndex, matchIndex));
    }

    elements.push(
      <strong key={matchIndex} className='font-semibold'>
        {matchText}
      </strong>,
    );

    lastIndex = matchIndex + matchText.length;
  }

  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return (
    <div className='border border-green rounded-[20px] w-[860px] h-[80px] flex items-center justify-center font-NotoSansKR font-normal text-Body8 text-black whitespace-pre-wrap'>
      {elements.map((el, idx) => (
        <React.Fragment key={idx}>
          {el}
          {idx !== elements.length - 1 && " "}
        </React.Fragment>
      ))}
    </div>
  );
};
