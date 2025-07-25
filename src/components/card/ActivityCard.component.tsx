/**
 * 활동 카드 UI 컴포넌트입니다.
 * mobile,tablet과 desktop일때 크기가 각각 다르게 반응형으로 구현했습니다.
 * @author 태욱
 */
import Image from "next/image";

interface ActivityCardProps {
  src: string;
  title: string;
  content: string;
}

export const ActivityCard = ({ src, title, content }: ActivityCardProps) => {
  return (
    <section
      className='
        group
        flex flex-col
        w-[254px] h-[243px] tablet:w-[497px] tablet:h-[475px]
        p-2.5 gap-2.5 tablet:p-5 tablet:gap-5
        rounded-[10px] shadow-gray-gradiate
        hover:shadow-green-gradiate
        transition-shadow duration-300
      '
    >
      <div className='relative w-[234px] h-[128px] tablet:w-[457px] tablet:h-[250px]'>
        <Image src={src} alt='활동 이미지' fill className='object-cover rounded-[8px]' />
      </div>
      <div className='flex flex-col w-[234px] h-[84px] tablet:w-[457px] tablet:h-[165px] gap-1 tablet:gap-2.5'>
        <h2
          className='
            text-gray-800
            group-hover:text-green
            font-NotoSansKR font-medium text-Body4 tablet:text-Head2
            transition-colors duration-300
          '
        >
          {title}
        </h2>
        <p className='text-gray-600 font-NotoSansKR font-normal text-Body5 tablet:text-Body1 h-[120px] line-clamp-4'>
          {content}
        </p>
      </div>
    </section>
  );
};
