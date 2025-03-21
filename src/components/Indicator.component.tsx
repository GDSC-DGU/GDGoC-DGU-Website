import React, { useState } from "react";

/**
 * 페이지네이션 기능을 하는 원형 모양의 indiactor 컴포넌트입니다.
 * @author 정선
 */

interface PaginationProps {
  totalPages: number;
}

export const Indicator = ({ totalPages }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='flex items-center justify-center space-x-2'>
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentPage === pageNumber ? "bg-gray-600" : "bg-gray-300 hover:opacity-75"
            }`}
            onClick={() => handleChange(pageNumber)}
          />
        );
      })}
    </div>
  );
};
