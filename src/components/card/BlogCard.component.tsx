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
      <a className='block'>
        <nav>
          <Image src={src} alt='블로그 대표 이미지' width={328} height={196} />
          <section>
            <p>{generation}기</p>
            <p>{title}</p>
            <p>{content}</p>
            <div>
              {tags.map((tag, index) => (
                <TechStack key={tag} text={tag} color={colors[index % colors.length]} />
              ))}
            </div>
          </section>
        </nav>
      </a>
    </Link>
  );
};
