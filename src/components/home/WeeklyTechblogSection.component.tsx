import Link from "next/link";

import { blogCardData } from "@/src/app/techblog/blogData";
import { BlogCard } from "@/src/components/card/BlogCard.component";

/**
 * 배열에서 랜덤으로 n개의 요소를 선택하는 함수
 * @author 동현
 * @param array - 원본 배열
 * @param n - 선택할 요소의 개수
 * @returns 랜덤으로 선택된 n개의 요소 배열
 */
const getRandomItems = <T,>(array: T[], n: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

export const WeeklyTechblogSection = () => {
  // 랜덤한 1개의 블로그 카드 선택
  const randomBlog = getRandomItems(blogCardData, 1)[0];

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center mb-8 px-10 tablet:px-4'>
        <div className='text-gray-600 font-bold text-[24px] font-notosanskr'>Weekly Techblog</div>
        <button className='bg-blue-100 text-blue px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors'>
          <Link href='/techblog'>For More</Link>
        </button>
      </div>
      <section className='w-full flex justify-center'>
        <div className='w-fit max-w-screen-xl place-items-center px-4 flex justify-center'>
          <BlogCard
            key={randomBlog.blogUrl}
            blogUrl={randomBlog.blogUrl}
            src={randomBlog.src}
            generation={randomBlog.generation}
            title={randomBlog.title}
            content={randomBlog.content}
            tags={randomBlog.tags}
          />
        </div>
      </section>
    </div>
  );
};
