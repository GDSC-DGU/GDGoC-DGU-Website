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
      <nav className='flex rounded-[8px] border p-6 gap-6 bg-gray-100'>
        <div className='relative overflow-hidden rounded-[8px] w-[328px] h-[196px]'>
          <Image src={src} alt='블로그 대표 이미지' fill className='object-cover' />
        </div>
        <section className='flex flex-col p-6 gap-2 bg-white'>
          <p className='text-gray-600 font-NotoSansKR font-bold text-caption'>{generation}기</p>
          <p className='text-gray-800 font-NotoSansKR font-medium text-Body1'>{title}</p>
          <p className='text-gray-600 font-NotoSansKR font-medium text-Body3'>{content}</p>
          <div className='flex gap-2'>
            {tags.map((tag, index) => (
              <TechStack key={tag} text={tag} color={colors[index % colors.length]} />
            ))}
          </div>
        </section>
      </nav>
    </Link>
  );
};
