import Image from "next/image";
import React, { useState } from "react";

/**
 * 세미나, 스터디, 프로젝트 페이지에 사용될 페이지네이션 컴포넌트입니다.
 * @author 정선
 */

interface PaginationProps {
  totalPages: number;
}

// 페이지 범위 5개로 제한
const PAGE_RANGE = 5;

export const Pagination = ({ totalPages }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentPageGroup = Math.floor((currentPage - 1) / PAGE_RANGE);
  const startPage = currentPageGroup * PAGE_RANGE + 1;
  const endPage = Math.min(startPage + PAGE_RANGE - 1, totalPages);

  const handleChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goPrevGroup = () => {
    const prevGroupLastPage = startPage - 1;
    if (prevGroupLastPage >= 1) handleChange(prevGroupLastPage);
  };

  const goNextGroup = () => {
    const nextGroupFirstPage = endPage + 1;
    if (nextGroupFirstPage <= totalPages) handleChange(nextGroupFirstPage);
  };

  return (
    <div className='flex items-center justify-center space-x-2'>
      {/* 이전 블록 (<) */}
      {startPage > 1 && (
        <button className='p-2 text-gray-400' onClick={goPrevGroup}>
          <Image src='/images/svg/arrow.svg' alt='prev' width={16} height={16} className='rotate-180 w-4 h-4' />
        </button>
      )}

      {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
        const pageNumber = startPage + i;
        return (
          <button
            key={pageNumber}
            className={`w-8 h-8 flex items-center justify-center rounded-md ${
              currentPage === pageNumber ? "bg-blue text-white" : "text-gray-400"
            }`}
            onClick={() => handleChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* 다음 블록 (>) */}
      {endPage < totalPages && (
        <button className='p-2 text-gray-400' onClick={goNextGroup}>
          <Image src='/images/svg/arrow.svg' alt='next' width={16} height={16} className='w-4 h-4' />
        </button>
      )}
    </div>
  );
};
