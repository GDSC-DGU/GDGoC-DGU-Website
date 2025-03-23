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

const CardContainer = ({ children, type }: { children: React.ReactNode; type?: "member" }) => {
  const heightClass = type === "member" ? "h-[346px]" : "h-[295px]";
  return <div className={`flex w-[280px] ${heightClass} flex-col justify-center items-start gap-4`}>{children}</div>;
};

const CardBody = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex w-[280px] flex-col justify-center gap-2'>{children}</div>;
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
    <div className='flex text-gray-800 font-NotoSansKR font-medium text-Body1 gap-[10px] justify-between'>
      <div className='w-[213px] line-clamp-1'>{title}</div>
      <div>{part && <PartTag part={part} />}</div>
    </div>
  );
};

const Content = ({ content, type }: { content: string; type: string }) => {
  const contentClass = clsx(
    "text-gray-600 font-NotoSansKR font-medium text-Body3",
    type === "project" ? "h-[59px] line-clamp-3" : "h-[40px] line-clamp-2",
  );

  return <div className={contentClass}>{content}</div>;
};

const SeminarInfo = ({ name, category }: { name: string; category: string }) => {
  return (
    <div className='flex text-gray-600 font-NotoSansKR font-medium text-caption gap-2'>
      <p>{name}</p>
      <p>{category}</p>
    </div>
  );
};

const StudyInfo = ({ name, status }: { name: string; status: string }) => {
  return (
    <div className='flex justify-between'>
      <div className='flex text-gray-600 font-NotoSansKR font-medium text-caption gap-2'>
        <p>팀장</p> <p>{name}</p>
      </div>
      <div className='text-blue font-NotoSansKR font-medium text-caption'>{status}</div>
    </div>
  );
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
    <div className='flex text-gray-600 font-NotoSansKR font-medium text-Body3 flex-col justify-center gap-2'>
      <p>{role}</p>
      <p>{major}</p>
      <div className='flex gap-2'>
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

Card.CardContainer = CardContainer;
Card.CardBody = CardBody;
Card.CardImage = CardImage;
Card.Generation = Generation;
Card.Title = Title;
Card.Content = Content;
Card.SeminarInfo = SeminarInfo;
Card.StudyInfo = StudyInfo;
Card.MemeberContent = MemberContent;

export { Card };
