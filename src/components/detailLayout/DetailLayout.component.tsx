/**
 * Detail 페이지에 사용되는 내부 UI 컴포넌트를 구성하는 모듈형 컴포넌트입니다.
 * Compound Component 패턴으로 설계했습니다.
 * @author 정선
 */
import Image from "next/image";
import { useRouter } from "next/navigation";

import { SeminarCategory } from "@/src/types";
import { formatDateWithDay } from "@/src/utils/formatDate";

import { PartTag } from "../PartTag";

type PageType = "project" | "seminar" | "study";

const DetailLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className='w-full tablet:w-[672px] desktop:w-[984px] flex flex-col items-center gap-12'>{children}</div>;
};

const TitleContainer = ({
  title,
  type,
  part,
  generation,
}: {
  title: string;
  type: PageType;
  part?: string;
  generation: number;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  return (
    <div className={`flex w-full flex-row justify-start items-center gap-4`}>
      <Image onClick={handleClick} src='/images/svg/back_arrow.svg' alt='back' width={28} height={28} />
      <h1 className='break-words text-Head3 tablet:text-Head1 text-black'>{title}</h1>
      {type !== "project" && part && <PartTag part={part} />}
      <PartTag part={String(generation) + "기"} />
    </div>
  );
};

const ImageBox = ({ src, alt }: { src?: string; alt: string }) => {
  const defaultImage = "/images/png/defaultImage.png";

  return (
    <div className='relative overflow-hidden rounded-[8px] w-full tablet:w-[672px] desktop:w-[984px]'>
      <Image src={src || defaultImage} alt={alt} className='object-cover max-h-[500px]' width={980} height={0} />
    </div>
  );
};

const ContentContainer = ({
  content,
  type,
  children,
}: {
  content: string;
  type: PageType;
  children: React.ReactNode;
}) => {
  const TypeToText = type === "project" ? "프로젝트" : type === "seminar" ? "세미나" : type === "study" ? "스터디" : "";

  return (
    <div className='w-full flex flex-col tablet:grid tablet:grid-cols-2 items-start rounded-[8px] border-gray-300 border-2 py-10 px-8 gap-16'>
      {children}
      <div className='w-full flex flex-col items-start gap-4'>
        <h2 className='whitespace-nowrap text-Button1 tablet:text-Head3 text-black'>{TypeToText} 내용</h2>
        <p className='text-Body3 tablet:text-Body2R text-black'>{content}</p>
      </div>
    </div>
  );
};

const ProjectInfo = ({
  leader,
  members,
  githubLink,
  youtubeLink,
}: {
  leader: string;
  members: string[] | string;
  githubLink: string;
  youtubeLink?: string;
}) => {
  const handleGithub = () => {
    window.open(githubLink, "_blank");
  };

  const handleYoutube = () => {
    window.open(youtubeLink, "_blank");
  };
  return (
    <div className='flex flex-col items-start gap-6'>
      <h2 className='whitespace-nowrap text-Button1 tablet:text-Head3 text-black'>프로젝트 설명</h2>
      <div className='flex w-full flex-row gap-6 items-center'>
        <h3 className='whitespace-nowrap w-[110px] text-Body3 tablet:text-Body2 text-black'>프로젝트 리드</h3>
        <p className='text-black text-Body3 tablet:text-Body2 flex-1'>{leader}</p>
      </div>
      <div className='flex flex-row w-full gap-6 items-start'>
        <h3 className='whitespace-nowrap w-[110px] text-Body3 tablet:text-Body2 text-black'>프로젝트 멤버</h3>
        <div className='flex flex-col gap-4 items-start flex-1'>
          {Array.isArray(members) ? (
            members.map((member, index) => (
              <p className='text-black text-Body3 tablet:text-Body2 whitespace-nowrap' key={index}>
                {member}
              </p>
            ))
          ) : (
            <p className='text-black text-Body3 tablet:text-Body2 whitespace-nowrap'>{members}</p>
          )}
        </div>
      </div>
      <div className='flex flex-row gap-6 items-center'>
        <h3 className='whitespace-nowrap w-[110px] text-Body3 tablet:text-Body2 text-black'>프로젝트 링크</h3>
        <Image
          className='cursor-pointer'
          onClick={handleGithub}
          alt='github 바로가기'
          src='/images/svg/github-icon.svg'
          width={20}
          height={20}
        />
        <Image
          className='cursor-pointer'
          onClick={handleYoutube}
          alt='youtube 바로가기'
          src='/images/svg/youtube-icon.svg'
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

const SeminarInfo = ({
  title,
  name,
  category,
  date,
}: {
  title: string;
  name: string;
  category: SeminarCategory;
  date: string;
}) => {
  return (
    <div className='flex flex-col items-start gap-6'>
      <h2 className=' whitespace-nowrap text-Button1 tablet:text-Head3 text-black'>세미나 설명</h2>
      <div className='flex flex-row w-full gap-6 items-center'>
        <h3 className='whitespace-nowrap w-[110px] text-Body3 tablet:text-Body2 text-black'>세미나 주제</h3>
        <p className='text-black text-Body3 tablet:text-Body2 flex-1'>{title}</p>
      </div>
      <div className='flex flex-row w-full gap-6 items-center'>
        <h3 className='whitespace-nowrap w-[110px] text-Body3 tablet:text-Body2 text-black'>세미나 진행자</h3>
        <p className='text-black text-Body3 tablet:text-Body2 flex-1'>{name}</p>
      </div>
      <div className='flex flex-row w-full gap-6 items-center'>
        <h3 className='whitespace-nowrap w-[110px] text-Body3 tablet:text-Body2 text-black'>세미나 카테고리</h3>
        <p className='text-black text-Body3 tablet:text-Body2 flex-1'>{category}</p>
      </div>
      <div className='flex flex-row w-full gap-6 items-center'>
        <h3 className='whitespace-nowrap w-[110px] text-Body3 tablet:text-Body2 text-black'>세미나 일시</h3>
        <p className='text-black text-Body3 tablet:text-Body2 flex-1'>{formatDateWithDay(date)}</p>
      </div>
    </div>
  );
};

const StudyInfo = ({ name, status, members }: { name: string; status: string; members: string[] | string }) => {
  return (
    <div className='flex flex-col items-start gap-6'>
      <h2 className='whitespace-nowrap text-Button1 tablet:text-Head3 text-black'>스터디 설명</h2>
      <div className='flex w-full flex-row gap-6 items-center'>
        <h3 className='whitespace-nowrap w-[110px] text-Body3 tablet:text-Body2 text-black'>스터디 리드</h3>
        <p className='text-black text-Body3 tablet:text-Body2 flex-1'>{name}</p>
      </div>
      <div className='flex flex-row gap-6 items-start'>
        <h3 className='whitespace-nowrap w-[110px] text-Body3 tablet:text-Body2 text-black'>스터디 멤버</h3>
        <div className='flex flex-col gap-4 items-start'>
          {Array.isArray(members) ? (
            members.map((member, index) => (
              <p className='text-black text-Body3 tablet:text-Body2' key={index}>
                {member}
              </p>
            ))
          ) : (
            <p className='text-black text-Body3 tablet:text-Body2'>{members}</p>
          )}
        </div>
      </div>
      <div className='flex w-full flex-row gap-6 items-center'>
        <h3 className='whitespace-nowrap w-[110px] text-Body3 tablet:text-Body2 text-black'>스터디 상태</h3>
        <p className='text-black text-Body3 tablet:text-Body2 flex-1'>{status}</p>
      </div>
    </div>
  );
};

DetailLayout.TitleContainer = TitleContainer;
DetailLayout.ImageBox = ImageBox;
DetailLayout.ContentContainer = ContentContainer;
DetailLayout.ProjectInfo = ProjectInfo;
DetailLayout.SeminarInfo = SeminarInfo;
DetailLayout.StudyInfo = StudyInfo;

export { DetailLayout };
