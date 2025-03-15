"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Blog } from "@/src/types/blog";
import { AnimatePresence, motion } from "framer-motion";

import { Paragraph } from "./Paragraph";
import { H1 } from "./Typography.component";

/**
 *  블로그 포스트 목록을 애니메이션 효과와 함께 렌더링하는 클라이언트 컴포넌트입니다.
 * 각 블로그 포스트는 썸네일 이미지, 제목, 설명, 태그를 포함하며,
 * 마우스 호버 시 시각적 피드백을 제공합니다.
 * Framer Motion을 활용한 진입 애니메이션과 호버 효과가 적용되어 있습니다.
 *
 * @author 도형
 */

export const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className='max-w-5xl mx-auto my-10'>
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.slug}
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Link
            key={`blog-${blog.title}`}
            href={`/blog/${blog.slug}`}
            className='relative my-10 block'
            onMouseEnter={() => setHovered(blog.slug)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence mode='wait'>
              {hovered === blog.slug && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1.05,
                    scaleY: 1.2,
                  }}
                  exit={{
                    opacity: 0,

                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  className='absolute z-0 pointer-events-none bg-gray-50 inset-0 h-full w-full rounded-md '
                />
              )}
            </AnimatePresence>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20'>
              <Image
                src={blog.image}
                alt='thumbnail'
                height='200'
                width='200'
                objectFit='cover'
                className='rounded-md object-contain h-40 w-60'
              />
              <div className='flex flex-col col-span-3'>
                <H1 className='font-medium text-lg md:text-lg lg:text-lg'>{blog.title}</H1>
                <Paragraph className='text-sm md:text-sm lg:text-sm mt-2'>{blog.description}</Paragraph>
                <div className='flex space-x-2 flex-wrap mt-4'>
                  {blog.tags?.map((tag, index) => (
                    <span
                      key={`tag-${blog.slug}`}
                      className='text-xs px-1 py-0.5 text-secondary border border-neutral-200 bg-white rounded-md'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
