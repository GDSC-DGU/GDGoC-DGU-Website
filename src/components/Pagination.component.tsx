import React, { useState } from "react";

/**
 * 세미나, 스터디, 프로젝트 페이지에 사용될 페이지네이션 컴포넌트입니다.
 * @author 정선
 */

interface PaginationProps {
  totalPages: number;
}

export const Pagination = ({ totalPages }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='flex items-center'>
      {/*왼쪽 화살표*/}
      <button
        className={`p-2 rounded-md ${currentPage === 1 ? "hidden" : "text-gray-400"}`}
        onClick={() => handleChange(currentPage - 1)}
      >
        <img src='/images/svg/next.svg' alt='next' className='rotate-180 w-4 h-4' />
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`w-8 h-8 flex items-center justify-center rounded-md ${
              currentPage === pageNumber ? "bg-blue text-white font-bold" : "text-gray-400"
            }`}
            onClick={() => handleChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      {/*오른쪽 화살표*/}
      <button
        className={`p-2 rounded-md ${currentPage === totalPages ? "hidden" : "text-gray-400"}`}
        onClick={() => handleChange(currentPage + 1)}
      >
        <img src='/images/svg/next.svg' alt='next' className='w-4 h-4' />
      </button>
    </div>
  );
};
