interface CardFlipProps {
  generation: number;
  title: string;
  content: string;
}

export const CardFlip = ({ generation, title, content }: CardFlipProps) => {
  return (
    <section className='flex flex-col w-[276px] h-[184px] gap-2'>
      <p className='text-gray-600 font-NotoSansKR font-bold text-caption'>{generation}기</p>
      <p className='text-gray-800 font-NotoSansKR font-medium text-Body1'>{title}</p>
      <p className='text-gray-600 font-NotoSansKR font-medium text-Body3 line-clamp-5'>{content}</p>
    </section>
  );
};
