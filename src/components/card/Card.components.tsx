/**
 * 카드 UI 컴포넌트를 구성하는 여러 요소들을 모듈화한 컴포넌트입니다.
 * 카드 컴포넌트를 Compound Component 패턴으로 설계했습니다.
 * @author 태욱
 */
import Image from "next/image";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const SmallCardContainer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const LargeCardContainer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const CardBody = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const CardContentHeader = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const CardContentFooter = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const CardImage = ({ src, alt, size }: { src: string; alt: string; size: "small" | "large" }) => {
  const dimensions = size === "large" ? { width: 280, height: 194 } : { width: 280, height: 155 };

  return <Image src={src} alt={alt} {...dimensions} />;
};

const Generation = ({ generation }: { generation: number }) => {
  return <div>{generation}기</div>;
};

const Title = ({ title }: { title: string }) => {
  return <p>{title}</p>;
};

const Content = ({ content }: { content: string }) => {
  return <div>{content}</div>;
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
Card.Cateogry = Category;
Card.StudyLeader = StudyLeader;
Card.Status = Status;
Card.MemeberContent = MemberContent;

export { Card };
