"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import Header from "@/src/app/header/Header";
import { formatDate } from "@/src/function/formatDate";
import { Product } from "@/src/types/products";
import { motion } from "framer-motion";

import { Paragraph } from "./Paragraph";
import { H1, H2, H4, SmallText } from "./Typography.component";


function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
      <path
        d='M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(product.thumbnail);
  const [modalImage, setModalImage] = useState<StaticImageData | string | null>(null);

  const openImageModal = (image: StaticImageData | string) => {
    setModalImage(image);
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  return (
    <main className='min-h-screen bg-white'>
      {" "}
      {/* ✅ 기존 Info.tsx 구조 유지 */}
      <Header /> {/* ✅ 헤더 추가 */}
      <header className='flex flex-col'>
        <Link
          type='button'
          href='/portfolio'
          aria-label='Go back to articles'
          className='group mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition'
        >
          <ArrowLeftIcon className='h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 d' />
        </Link>
      </header>
      <div className='text-center mb-6'>
        <H1 className='font-black mb-2'>{product.title}</H1>
        <div className='flex justify-center items-center space-x-4 text-gray-500 text-sm'>
          {product.organizationName && (
            <>
              <SmallText>{product.organizationName}</SmallText>
              <span className='text-gray-300'>|</span>
            </>
          )}
          <SmallText>{product.organizationType}</SmallText>
          <span className='text-gray-300'>|</span>

          <SmallText>{product.experiencePeriod}</SmallText>
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={product.slug}
        className='relative flex justify-center mt-4'
      >
        <Image
          src={activeImage}
          alt='thumbnail'
          height='1200'
          width='630'
          className='rounded-md object-contain max-lg:w-full lg:w-[1200px] lg:h-[430px] cursor-pointer'
          onClick={() => openImageModal(activeImage)}
        />
        <div className='absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]' />
      </motion.div>
      {/* 이미지 리스트 */}
      <div className='flex flex-row justify-center my-8 flex-wrap gap-4'>
        {product.images.map((image: StaticImageData | string, idx: number) => (
          <button
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
            className={product.singleRow ? "w-full" : "w-[48%]"}
          >
            <Image
              src={image}
              alt='product thumbnail'
              height='1200'
              width='600'
              className={`${product.singleRow ? "w-full" : "w-full"} md:h-70 object-cover object-top border rounded-lg `}
              onClick={(e) => {
                e.stopPropagation();
                openImageModal(image);
              }}
            />
          </button>
        ))}
      </div>
      <div className='mt-8'>
        <H4 className='font-semibold mb-4'>TECHNOLOGIES & TOOLS</H4>
        <div className='flex gap-2 flex-wrap mb-6'>
          {product.stack?.map((stack: string) => (
            <span key={stack} className='text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary'>
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div className='mt-8'>
        <H4 className='font-semibold mb-4'>CONTRIBUTION & ACHIEVEMENT</H4>
        <div className='prose prose-sm md:prose-base max-w-none text-neutral-600'>{product?.contentEn}</div>
        <div className='prose prose-sm md:prose-base max-w-none text-neutral-600'>{product?.contentKo}</div>
      </div>
      {/* 이미지 확대 모달 */}
      {modalImage && (
        <div
          className='fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4'
          onClick={closeImageModal}
        >
          <div className='relative max-w-4xl max-h-[90vh] w-full'>
            <button
              className='absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2'
              onClick={(e) => {
                e.stopPropagation();
                closeImageModal();
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18'></line>
                <line x1='6' y1='6' x2='18' y2='18'></line>
              </svg>
            </button>
            <Image
              src={modalImage}
              alt='enlarged image'
              height='1200'
              width='630'
              className='w-full h-auto object-contain'
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  );
};
