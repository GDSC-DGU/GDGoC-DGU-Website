"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Header from "@/src/app/header/Header";
import { formatDate } from "@/src/function/formatDate";

import { Container } from "./Container.component";
import { Paragraph } from "./Paragraph";
import { Prose } from "./Prose";
import { H1 } from "./Typography.component";

/**
 * 블로그 포스트 레이아웃 컴포넌트입니다.
 * 블로그 포스트의 메타데이터와 컴포넌트를 임포트한 후, 헤더와 컨테이너를 포함하여 렌더링합니다.
 * 멤버들이 게시한 글의 1일 1포스팅의 상세페이지에 활용됩니다.
 * @author 도형
 */

export function BlogLayout({ children, meta, isRssFeed = false, previousPathname }: any) {
  let router = useRouter();

  return (
    <>
      <Header />
      <Container>
        <article>
          <header className='flex flex-col'>
            <div className='flex items-center mb-4'>
              {meta.category && (
                <Link
                  href={`/blog/category/${meta.category.toLowerCase()}`}
                  className='text-sm px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition'
                >
                  {meta.category}
                </Link>
              )}
            </div>

            <H1 className='py-4'>{meta.title}</H1>
            <time dateTime={meta.date} className='flex items-center text-base text-zinc-400 '>
              <Paragraph className='text-gray-700'>{formatDate(meta.date)}</Paragraph>
            </time>
          </header>
          <Prose className='mt-8'>{children}</Prose>
        </article>
      </Container>
    </>
  );
}
