import Image from "next/image";
import Link from "next/link";

import { CardFlip } from "./CardFlip.component";

interface WeeklyActivityCardProps {
  src: string;
  generation: number;
  title: string;
  content: string;
  link: string;
}

export const WeeklyActivityCard = ({ src, generation, title, content, link }: WeeklyActivityCardProps) => {
  return (
    <Link
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='block w-[312px] h-[220px] group [perspective:700px] cursor-pointer'
    >
      <div className='relative group-hover:rotate-y-180 w-full h-full duration-500 [transform-style:preserve-3d]'>
        <div className='card-dynamic-size card-front-back'>
          <Image src={src} alt='주간활동 대표 이미지' fill className='object-cover rounded-[8px]' />
        </div>
        <div className='card-dynamic-size card-front-back rotate-y-180'>
          <CardFlip generation={generation} title={title} content={content} />
        </div>
      </div>
    </Link>
  );
};
