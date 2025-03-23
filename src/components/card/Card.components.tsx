/**
 * 카드 UI 컴포넌트를 구성하는 여러 요소들을 모듈화한 컴포넌트입니다.
 * 카드 컴포넌트를 Compound Component 패턴으로 설계했습니다.
 * @author 태욱
 */
import Image from "next/image";

import clsx from "clsx";

import { PartTag } from "../PartTag";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className='rounded-[16px] border border-gray-300 p-4'>{children}</div>;
};

const SmallCardContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex w-[280px] h-[290px] flex-col justify-center items-start gap-4'>{children}</div>;
};

const LargeCardContainer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const CardBody = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex flex-col justify-center gap-2'>{children}</div>;
};

const CardContentHeader = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const CardContentFooter = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const CardImage = ({ src, alt, size }: { src: string; alt: string; size: "small" | "large" }) => {
  const containerClass = clsx(
    "relative overflow-hidden rounded-[8px] w-[280px]",
    size === "large" ? "h-[194px]" : "h-[155px]",
  );

  return (
    <div className={containerClass}>
      <Image src={src} alt={alt} fill className='object-cover' />
    </div>
  );
};

const Generation = ({ generation }: { generation: number }) => {
  return <div className='text-gray-600 font-NotoSansKR font-bold text-caption'>{generation}기</div>;
};

const Title = ({ title, part }: { title: string; part?: "AI/ML" | "Server/Cloud" | "Web/App" | "Devral" | "Lead" }) => {
  return (
    <div className='text-gray-800 font-NotoSansKR font-medium text-Body1'>
      {title} {part && <PartTag part={part} />}
    </div>
  );
};

const Content = ({ content, type }: { content: string; type: "project" | "seminar" }) => {
  const contentClass = clsx(
    "text-gray-600 font-NotoSansKR font-medium text-Body3",
    type === "project" ? "h-[59px] line-clamp-3" : "h-[40px] line-clamp-2",
  );

  return <div className={contentClass}>{content}</div>;
};

const Speaker = ({ name }: { name: string }) => {
  return <p>{name}</p>;
};

const Category = ({ category }: { category: string }) => {
  return <p>{category}</p>;
};

const StudyLeader = ({ name }: { name: string }) => {
  return <p>{name}</p>;
};

const Status = ({ status }: { status: string }) => {
  return <p>{status}</p>;
};

const MemberContent = ({
  role,
  major,
  github,
  linkedIn,
}: {
  role: string;
  major: string;
  github: string;
  linkedIn: string;
}) => {
  return (
    <div>
      <p>{role}</p>
      <p>{major}</p>
      <div>
        <a href={github} target='_blank' rel='noopener noreferrer'>
          <Image src='/images/svg/github-icon.svg' alt='github-icon' width={20} height={20} />
        </a>
        <a href={linkedIn} target='_blank' rel='noopener noreferrer'>
          <Image src='/images/svg/linkedIn-icon.svg' alt='linkedIn-icon' width={20} height={20} />
        </a>
      </div>
    </div>
  );
};

Card.SmallCardContainer = SmallCardContainer;
Card.LargeCardContainer = LargeCardContainer;
Card.CardBody = CardBody;
Card.CardContentHeader = CardContentHeader;
Card.CardContentFooter = CardContentFooter;
Card.CardImage = CardImage;
Card.Generation = Generation;
Card.Title = Title;
Card.Content = Content;
Card.Speaker = Speaker;
Card.Category = Category;
Card.StudyLeader = StudyLeader;
Card.Status = Status;
Card.MemeberContent = MemberContent;

export { Card };
