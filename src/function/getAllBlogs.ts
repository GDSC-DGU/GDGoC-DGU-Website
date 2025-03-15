import * as path from "path";
import glob from "fast-glob";

/**
 * 모든 블로그 포스트를 찾아 메타데이터와 함께 불러오는 함수입니다.
 * MDX 형식의 블로그 파일들을 검색하고, 각 포스트의 메타데이터와 컴포넌트를 임포트한 후
 * 날짜를 기준으로 최신순으로 정렬하여 반환합니다.
 * @author 도형
 */

async function importBlog(blogFileNames: any) {
  let { meta, default: component } = await import(`@/app/blog/${blogFileNames}`);
  return {
    slug: blogFileNames.replace(/(\/content)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getAllBlogs() {
  let blogFileNames = await glob(["*.mdx", "*/content.mdx"], {
    cwd: path.join(process.cwd(), "src/app/blog"),
  });

  let blogs = await Promise.all(blogFileNames.map(importBlog));

  return blogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}
