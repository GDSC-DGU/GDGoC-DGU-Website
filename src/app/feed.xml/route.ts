import { DefaultMetadata, DefaultOpenGraph } from "@/src/app/shared-metadata";
import { getAllBlogs } from "@/src/function/getAllBlogs";
import RSS from "rss";

/**
 * 블로그 포스트들을 RSS 2.0 형식의 XML로 제공하는 API 엔드포인트입니다.
 * 구독자들이 새 글을 쉽게 확인할 수 있도록 합니다.
 * @author 도형
 */

export async function GET() {
  const feed = new RSS({
    title: DefaultMetadata.title,
    description: DefaultMetadata.description,
    image_url: `${DefaultOpenGraph.url}/images/profile_large.jpg`,
    feed_url: `${DefaultOpenGraph.url}/feed.xml`,
    site_url: DefaultOpenGraph.url,
    copyright: `Copyright ${new Date().getFullYear().toString()}`,
    language: "ko-KR",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  const blogs = await getAllBlogs();

  blogs.map((post: any) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: post.url,
      date: post.date,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
