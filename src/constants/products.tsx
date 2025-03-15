/** Intermission */
import { Product } from "@/src/types/products";
import Intermission1 from "@public/images/portfolio/intermission/intermission_1.png";
import Intermission2 from "@public/images/portfolio/intermission/intermission_2.png";
import IntermissionThumbnail from "@public/images/portfolio/intermission/intermission_thumbnail.png";

/** Pickply */
import Pickply1 from "@public/images/portfolio/pickply/pickply_1.png";
import Pickply2 from "@public/images/portfolio/pickply/pickply_2.png";
import Pickply3 from "@public/images/portfolio/pickply/pickply_3.png";
import Pickply4 from "@public/images/portfolio/pickply/pickply_4.png";
import Pickply5 from "@public/images/portfolio/pickply/pickply_5.png";
import PickplyThumbnail from "@public/images/portfolio/pickply/pickply_thumbnail.png";

/** Poppin */
import Poppin1 from "@public/images/portfolio/poppin/poppin_1.png";
import Poppin2 from "@public/images/portfolio/poppin/poppin_2.png";
import Poppin3 from "@public/images/portfolio/poppin/poppin_3.png";
import Poppin4 from "@public/images/portfolio/poppin/poppin_4.png";
import Poppin5 from "@public/images/portfolio/poppin/poppin_5.png";
import Poppin6 from "@public/images/portfolio/poppin/poppin_6.png";
import PoppinThumbnail from "@public/images/portfolio/poppin/poppin_thumbnail.png";

/**
 * 샘플 데이터 목록을 정의하는 상수입니다.
 * 아래의 경우 products를 예시로 들었으며, 세미나 자료, 정적/동적 상수데이터들을 전부 포괄합니다.
 * 실제 활용시 파일명을 변경하여 사용해주세요!
 *
 * @author 도형
 */

export const products: Product[] = [
  {
    href: "https://example.com/product1",
    title: "Sample Project 1",
    created_at: "2025-04-01 12:00:00",
    modified_at: "2025-04-01 12:00:00",
    description: "이 프로젝트는 예제 데이터로 채워진 가상의 프로젝트입니다.",
    thumbnail: PickplyThumbnail,
    images: [PickplyThumbnail, Pickply1, Pickply2, Pickply3, Pickply4, Pickply5],
    stack: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    organizationName: "Example Corp",
    organizationType: "Company",
    slug: "sample-project-1",
    experiencePeriod: "2023.01 ~ Present",
    singleRow: false,
    contentKo: (
      <div className='text-gray-600 mb-8 leading-relaxed text-base'>
        <ul className='space-y-4 list-disc'>
          <li>React와 Next.js를 사용하여 제작된 예제 프로젝트입니다.</li>
          <li>TailwindCSS를 활용하여 반응형 UI를 구현했습니다.</li>
          <li>TypeScript 기반으로 프로젝트를 구성하여 유지보수성을 높였습니다.</li>
        </ul>
      </div>
    ),
    contentEn: (
      <div className='text-gray-700 mt-5 mb-4 leading-relaxed text-lg'>
        <ul className='space-y-4 list-disc'>
          <li>This is a sample project built with React and Next.js.</li>
          <li>Implemented a responsive UI using TailwindCSS.</li>
          <li>Built with TypeScript to improve maintainability.</li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://example.com/product2",
    title: "Sample Project 2",
    created_at: "2024-10-10 08:30:00",
    modified_at: "2024-10-10 08:30:00",
    description: "이 프로젝트는 Vue.js 기반으로 제작된 샘플 프로젝트입니다.",
    thumbnail: IntermissionThumbnail,
    images: [IntermissionThumbnail, Intermission1, Intermission2],
    stack: ["Vue.js", "Nuxt.js", "SCSS", "Firebase"],
    organizationName: "Sample Inc.",
    organizationType: "Project",
    slug: "sample-project-2",
    experiencePeriod: "2022.06 ~ 2024.10",
    singleRow: true,
    contentKo: (
      <div className='text-gray-600 mb-8 leading-relaxed text-base'>
        <ul className='space-y-4 list-disc'>
          <li>Vue.js와 Nuxt.js를 활용한 프론트엔드 프로젝트입니다.</li>
          <li>Firebase를 연동하여 백엔드 없이 빠른 개발을 진행했습니다.</li>
          <li>SCSS를 활용하여 디자인 및 스타일링을 최적화했습니다.</li>
        </ul>
      </div>
    ),
    contentEn: (
      <div className='text-gray-700 mt-5 mb-4 leading-relaxed text-lg'>
        <ul className='space-y-4 list-disc'>
          <li>A frontend project using Vue.js and Nuxt.js.</li>
          <li>Integrated Firebase for quick backend-less development.</li>
          <li>Optimized design and styling using SCSS.</li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://example.com/product3",
    title: "Sample Project 3",
    created_at: "2025-01-15 10:45:00",
    modified_at: "2025-01-15 10:45:00",
    description: "React Native를 기반으로 한 모바일 애플리케이션 예제입니다.",
    thumbnail: PoppinThumbnail,
    images: [PoppinThumbnail, Poppin1, Poppin2, Poppin3, Poppin4, Poppin5, Poppin6],
    stack: ["React Native", "Expo", "Firebase", "Zustand"],
    organizationName: "Mobile Devs",
    organizationType: "Startup",
    slug: "sample-project-3",
    experiencePeriod: "2024.05 ~ 2025.01",
    singleRow: false,
    contentKo: (
      <div className='text-gray-600 mb-8 leading-relaxed text-base'>
        <ul className='space-y-4 list-disc'>
          <li>React Native 기반의 크로스 플랫폼 모바일 앱 프로젝트입니다.</li>
          <li>Firebase를 연동하여 실시간 데이터 관리를 구현했습니다.</li>
          <li>Zustand를 활용한 글로벌 상태 관리를 적용하였습니다.</li>
        </ul>
      </div>
    ),
    contentEn: (
      <div className='text-gray-700 mt-5 mb-4 leading-relaxed text-lg'>
        <ul className='space-y-4 list-disc'>
          <li>A cross-platform mobile app built with React Native.</li>
          <li>Integrated Firebase for real-time data management.</li>
          <li>Used Zustand for global state management.</li>
        </ul>
      </div>
    ),
  },
];
