/**
 * 기본 메타데이터 설정입니다.
 *
 * @author 도형
 */

export const defaultImages = [
  {
    url: `/images/defaultImage.png`,
    width: 1200,
    height: 630,
    alt: "GDGoC DGU",
  },
];

export const DefaultOpenGraph = {
  type: "website",
  locale: "ko_KR",
  url: "https://gdgoc-dgu.com",
  title: "GDGoC DGU",
  description: "GDGoC DGU ",
  images: defaultImages,
};

export const DefaultMetadata = {
  title: "GDGoC DGU",
  description: "GDGoC DGU",
};
