/**
 * 블로그 카드 UI 컴포넌트입니다.
 * mobile, tablet, desktop일때 각각 다르게 반응형으로 구현했습니다.
 * @author 태욱
 */

import Image from "next/image";
import Link from "next/link";

import { TechStack } from "../TechStack";

interface BlogCardProps {
  src: string;
  generation: number;
  title: string;
  content: string;
  blogUrl: string;
  tags: string[];
}

export const BlogCard = ({ src, generation, title, content, blogUrl, tags }: BlogCardProps) => {
  const colors = ["red", "blue", "green", "yellow"] as const;

  return (
    <Link href={blogUrl} target='_blank' rel='noopener noreferrer'>
      <nav
        className='
          flex flex-col tablet:flex-row items-center
          gap-6 p-6
          w-[360px] tablet:w-[688px] desktop:w-[984px]
          bg-none tablet:bg-gray-100
          rounded-none tablet:rounded-[8px]
          mx-auto
        '
      >
        {/* 이미지 영역 */}
        <div
          className='
            relative overflow-hidden rounded-[8px]
            w-[312px] h-[196px]
            mx-auto tablet:mx-0
          '
        >
          <Image src={src} alt='블로그 대표 이미지' fill className='object-cover' />
        </div>

        {/* 텍스트 영역 */}
        <section
          className='
            flex flex-col p-6 gap-2
            bg-white
            w-[312px] desktop:w-[584px]
            h-[210px]
            border border-gray-300 tablet:border-none
            rounded-[8px]
          '
        >
          <p className='text-gray-600 font-NotoSansKR font-bold text-caption'>{generation}기</p>
          <p className='text-gray-800 font-NotoSansKR font-medium text-Body1'>{title}</p>
          <p className='text-gray-600 h-[60px] font-NotoSansKR font-medium text-Body3 line-clamp-3'>{content}</p>

          {/* 태그 영역 */}
          <div className='flex gap-2 flex-wrap w-[260px] h-[34px] overflow-hidden'>
            {tags.map((tag, index) => (
              <TechStack key={tag} text={tag} color={colors[index % colors.length]} />
            ))}
          </div>
        </section>
      </nav>
    </Link>
  );
};
