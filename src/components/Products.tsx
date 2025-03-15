import { Product } from "@/src/types/products";

/**
 * 샘플 데이터 목록을 정의하는 상수입니다.
 * 아래의 경우 products를 예시로 들었으며, 세미나 자료, 정적/동적 상수데이터들을 전부 포괄합니다.
 * 실제 활용시 파일명을 변경하여 사용해주세요!
 *
 * @author 도형
 */
export const products: Product[] = [
  {
    href: "https://example.com/sample1",
    title: "Sample Product 1",
    created_at: "2025-03-29 00:00:00",
    modified_at: "2025-03-29 00:00:00",
    description: "This is a sample description for Product 1.",
    thumbnail: "/images/sample_thumbnail.png",
    images: ["/images/sample1.png", "/images/sample2.png"],
    stack: ["React", "Next.js", "TailwindCSS"],
    organizationName: "Sample Company",
    organizationType: "Company",
    slug: "sample1",
    experiencePeriod: "2024.07 ~ Present",
    contentKo: (
      <div className='text-gray-600 mb-8 leading-relaxed text-base'>
        <ul className='space-y-4 list-disc'>
          <li>
            <p>Sample Product 1의 주요 기능을 설명하는 내용입니다.</p>
          </li>
          <li>
            <p>이 제품은 React와 Next.js 기반으로 개발되었습니다.</p>
          </li>
        </ul>
      </div>
    ),
    contentEn: (
      <div className='text-gray-700 mt-5 mb-4 leading-relaxed text-lg'>
        <ul className='space-y-4 list-disc'>
          <li>
            <p>This is a key feature description for Sample Product 1.</p>
          </li>
          <li>
            <p>This product is built using React and Next.js.</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://example.com/sample2",
    title: "Sample Product 2",
    created_at: "2024-08-25 00:00:00",
    modified_at: "2024-08-25 00:00:00",
    description: "This is a sample description for Product 2.",
    thumbnail: "/images/sample_thumbnail.png",
    images: ["/images/sample3.png", "/images/sample4.png"],
    stack: ["Vue", "Nuxt.js", "SCSS"],
    organizationName: "Another Sample Org",
    organizationType: "Project",
    slug: "sample2",
    experiencePeriod: "2023.08 ~ 2024.07",
    contentKo: (
      <div className='text-gray-600 mb-8 leading-relaxed text-base'>
        <ul className='space-y-4 list-disc'>
          <li>
            <p>Sample Product 2는 Vue와 Nuxt.js로 개발되었습니다.</p>
          </li>
          <li>
            <p>이 프로젝트는 프론트엔드 성능 최적화에 초점을 맞추었습니다.</p>
          </li>
        </ul>
      </div>
    ),
    contentEn: (
      <div className='text-gray-700 mt-5 mb-4 leading-relaxed text-lg'>
        <ul className='space-y-4 list-disc'>
          <li>
            <p>Sample Product 2 is built using Vue and Nuxt.js.</p>
          </li>
          <li>
            <p>This project focused on frontend performance optimization.</p>
          </li>
        </ul>
      </div>
    ),
  },
];
