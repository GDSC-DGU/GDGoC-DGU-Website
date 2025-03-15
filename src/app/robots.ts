import { MetadataRoute } from "next";

/**
 * 웹 크롤러와 검색 엔진을 위한 robots.txt 파일을 생성하는 API 라우트입니다.
 * SEO 최적화에 중요한 역할을 합니다. 현재 모든 사용자 에이전트에게 전체 사이트 접근을 허용합니다
 * @author 도형
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://gdgoc-dgu.com/sitemap.xml",
  };
}
