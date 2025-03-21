"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * 세미나, 프로젝트, 스터디 페이지에서 조회 시 사용되는 필터 컴포넌트 입니다.
 * select box를 커스텀하여 제작하였습니다.
 * @author 정선
 */

interface FilterProps {
  name: string;
  value?: string;
  onChange: (value: string) => void;
  optionList: string[];
}

export const Filter = ({ name, value = "", onChange, optionList }: FilterProps) => {
  const [selectedValue, setSelectedValue] = useState(value || "전체");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedValue(value || "전체");
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    onChange(option);
    setIsOpen(false);
  };

  // Part 필터의 경우 색깔이 해당 part color로 바뀌도록 하며,
  // Part 필터가 아닐 경우 기본 선택 컬러(blue-400)로 바뀌도록 한다.
  const getColorClass = (option: string) => {
    if (option === "" || option === "전체") return "text-gray-400 border-gray-400";
    switch (option) {
      case "AI/ML":
        return "text-red border-red";
      case "Server/Cloud":
        return "text-blue border-blue";
      case "Web/App":
        return "text-green border-green";
      case "Devral":
        return "text-yellow border-yellow";
      case "Lead":
        return "text-black border-black";
      default:
        return "text-blue-400 border-blue-400";
    }
  };

  const isAll = selectedValue === "전체" || selectedValue === "";
  const displayValue = isAll ? name : selectedValue; // "전체"일 땐 기본 표시

  return (
    <div className='relative inline-block w-40' ref={dropdownRef}>
      <div
        className={`w-full border-2 rounded-lg px-4 py-2 text-xl cursor-pointer flex justify-between items-center ${getColorClass(selectedValue)} bg-white`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{displayValue}</span>
        <span className='text-sm'>▾</span>
      </div>

      {isOpen && (
        <ul className='absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-auto'>
          {[...optionList].map((opt) => (
            <li
              key={opt}
              className={`px-4 py-2 m-1 rounded-md text-lg hover:bg-gray-100 cursor-pointer text-gray-400  ${
                selectedValue === opt ? "bg-gray-100" : ""
              }`}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
