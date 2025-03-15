"use client";

import React, { useState } from "react";

import { BodyText } from "./Typography.component";

interface PDFModalProps {
  pdfUrl: string;
  buttonText: string;
}

/**
 * PDF 모달 컴포넌트입니다.
 * 버튼을 클릭하면 PDF 파일을 모달로 표시합니다.
 * @author 도형
 */

export const PDFModal: React.FC<PDFModalProps> = ({ pdfUrl, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* 버튼 */}
      <div
        className='inline-flex items-center gap-1 group/button rounded-md hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gradient-to-r from-gray-600 to-gray-400 text-white shadow-lg shadow-gray-500/20 sm:backdrop-blur-sm group-hover/button:bg-gradient-to-r group-hover/button:from-gray-500 group-hover/button:to-gray-300 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-400/60 text-sm font-medium px-4 py-2 origin-left cursor-pointer'
        onClick={openModal}
      >
        {buttonText}
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
          className='w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform'
        >
          <path d='M5 12l14 0'></path>
          <path d='M13 18l6 -6'></path>
          <path d='M13 6l6 6'></path>
        </svg>
      </div>

      {/* 모달 */}
      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'
          onClick={closeModal}
        >
          <div className='relative w-[95vw] h-[95vh] max-w-[1400px]' onClick={(e) => e.stopPropagation()}>
            {/* 닫기 버튼 */}
            <button
              className='absolute top-3 right-3 z-10 bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors'
              onClick={closeModal}
            >
              ✕
            </button>

            {/* PDF iframe - 사이드바 메뉴 닫힌 상태로 표시 */}
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=0`}
              className='w-full h-full'
              style={{ border: "none" }}
              title='PDF Viewer'
            />
          </div>
        </div>
      )}
    </>
  );
};
