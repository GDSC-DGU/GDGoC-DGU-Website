import type { MetadataRoute } from "next";

/**
 * 검색 엔진 최적화(SEO)를 위한 sitemap.xml 파일을 동적으로 생성하는 API 라우트입니다.
 * 메인 페이지, 정보 페이지, 각종 페이지, 블로그 등 사이트의 모든 중요 URL을 포함하며,
 * 각 URL의 마지막 수정일, 변경 빈도, 우선순위 정보를 제공합니다.
 * 이를 통해 검색 엔진이 사이트 구조를 효율적으로 파악하고 색인화할 수 있도록 합니다.
 * @author 도형
 */

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gdgoc-dgu.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://gdgoc-dgu.com/info",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://gdgoc-dgu.com/portfolio",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://gdgoc-dgu.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
