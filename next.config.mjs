/** @type {import("next").NextConfig} */
import rehypePrism from "@mapbox/rehype-prism";
import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

/**
 * Next.js 프로젝트 설정 파일입니다.
 * MDX 지원, 코드 하이라이팅, 이미지 최적화, SVG 임포트 등의 기능을 설정합니다.
 * @author 도형
 */

const options = {
  theme: "github-dark",
  keepBackground: true,
  // 기타 옵션들...
};

const nextConfig = {
  images: {
    domains: [
      "www.notion.so",
      "api.microlink.io",
      "images.unsplash.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    mdxRs: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/, // mdx 확장자를 가진 파일을 페이지나 컴포넌트처럼 사용할 수 있도록 설정
  options: {
    remarkPlugins: [remarkGfm], // GitHub Flavored Markdown(GFM) 지원
    rehypePlugins: [rehypePrism, rehypePrettyCode, options], // Markdown 내 코드 하이라이팅 (rehypePlugins)
  },
});

export default withMDX(nextConfig); // MDX 설정과 Next.js 설정 합치기
