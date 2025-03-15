"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ImageModalProps {
  thumbnailSrc: string;
  fullSrc: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * 이미지 모달 컴포넌트입니다.
 * @author 도형
 */

export const ImageModal: React.FC<ImageModalProps> = ({ thumbnailSrc, fullSrc, alt, width = 200, height = 200 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setScale(1); // 모달 닫을 때 확대/축소 초기화
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));

  return (
    <>
      {/* 썸네일 이미지 */}
      <div className='cursor-pointer' onClick={openModal}>
        <Image src={thumbnailSrc} alt={alt} width={width} height={height} className='rounded-xl object-cover' />
      </div>

      {/* 모달 */}
      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'
          onClick={closeModal}
        >
          <div className='relative bg-white p-2 rounded-lg max-w-4xl max-h-[90vh]' onClick={(e) => e.stopPropagation()}>
            {/* 닫기 버튼 */}
            <button
              className='absolute top-3 right-3 z-10 bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center'
              onClick={closeModal}
            >
              ✕
            </button>

            {/* 확대/축소 컨트롤 */}
            <div className='absolute top-3 left-3 z-10 bg-gray-800 bg-opacity-75 text-white rounded-lg flex items-center p-1'>
              <button className='px-3 py-1 hover:bg-gray-700 rounded' onClick={zoomOut}>
                -
              </button>
              <span className='px-2'>{Math.round(scale * 100)}%</span>
              <button className='px-3 py-1 hover:bg-gray-700 rounded' onClick={zoomIn}>
                +
              </button>
            </div>

            {/* 이미지 컨테이너 */}
            <div className='overflow-auto max-h-[calc(90vh-4rem)] max-w-[calc(100vw-4rem)]'>
              <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", transition: "transform 0.2s" }}>
                <Image src={fullSrc} alt={alt} width={1000} height={1400} className='object-contain' />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
