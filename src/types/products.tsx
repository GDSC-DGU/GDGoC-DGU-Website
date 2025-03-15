import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  description: string;
  thumbnail: StaticImageData | string;
  images: StaticImageData[] | string[];
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
  contentKo?: React.ReactNode | string; // 한글 내용
  contentEn?: React.ReactNode | string; // 영어 내용
  experiencePeriod?: string;
  organizationName?: string;
  organizationType?: string;
  created_at: string;
  modified_at: string;
  singleRow?: boolean; // 이미지를 한 줄에 1개씩 표시할지 여부
};
