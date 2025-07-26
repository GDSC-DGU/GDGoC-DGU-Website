/**
 * 기본 메타데이터 설정입니다.
 *
 * @author 동현
 */

export const defaultImages = [
  {
    url: `/images/png/defaultImage.png`,
    width: 1200,
    height: 630,
    alt: "GDGoC DGU - Google Developer Group on Campus Dongguk University",
  },
];

export const DefaultOpenGraph = {
  type: "website",
  locale: "ko_KR",
  url: "https://www.gdgoc-dgu.com",
  title: "GDGoC DGU - Google Developer Group on Campus Dongguk University",
  description:
    "동국대학교 Google Developer Group on Campus (GDGoC) 공식 웹사이트입니다. 개발자 커뮤니티, 세미나, 프로젝트, 스터디 등 다양한 활동을 통해 학생 개발자들의 성장을 지원합니다.",
  siteName: "GDGoC DGU",
  images: defaultImages,
};

export const DefaultMetadata = {
  title: "GDGoC DGU - Google Developer Group on Campus Dongguk University",
  description:
    "동국대학교 Google Developer Group on Campus (GDGoC) 공식 웹사이트입니다. 개발자 커뮤니티, 세미나, 프로젝트, 스터디 등 다양한 활동을 통해 학생 개발자들의 성장을 지원합니다.",
  keywords: ["GDGoC", "Google Developer Group", "동국대학교", "개발자 커뮤니티", "세미나", "프로젝트", "스터디"],
  authors: [{ name: "GDGoC DGU" }],
  creator: "GDGoC DGU",
  publisher: "GDGoC DGU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
