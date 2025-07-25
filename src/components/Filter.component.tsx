"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * 세미나, 프로젝트, 스터디 페이지에서 조회 시 사용되는 필터 컴포넌트 입니다.
 * select box를 커스텀하여 제작하였습니다.
 * @author 정선
 */

interface FilterProps {
  // 필터 카테고리를 기수, 파트, 타입으로 한정합니다.
  category: "generation" | "part" | "type" | "simplePart";
  value?: string;
  onChange: (value: string) => void;
}

interface FilterType {
  name: string;
  options: string[];
}

export const Filter = ({ category, value = "", onChange }: FilterProps) => {
  const [selectedValue, setSelectedValue] = useState(value || "전체");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getFilterConfig = (category: string): FilterType => {
    switch (category) {
      case "generation":
        return {
          name: "기수",
          options: ["전체", "1기", "2기"],
        };
      case "part":
        return {
          name: "파트",
          options: ["전체", "AI/ML", "Server/Cloud", "Web/App", "Devrel"],
        };
      case "simplePart":
        return {
          name: "파트",
          options: ["전체", "AI/ML", "Server/Cloud", "Web/App"],
        };

      case "type":
        return {
          name: "타입",
          options: ["전체", "오픈 세미나", "캠핑 세미나"],
        };
      default:
        return { name: "필터", options: ["전체"] };
    }
  };
  const { name, options } = getFilterConfig(category);

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
    if (category === "generation" && option !== "전체") {
      const numeric = parseInt(option.replace("기", ""));
      onChange(String(numeric));
    } else {
      onChange(option);
    }
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
      case "Devrel":
        return "text-yellow border-yellow";
      case "Lead":
        return "text-black border-black";
      default:
        return "text-blue-400 border-blue-400";
    }
  };

  const isAll = selectedValue === "전체" || selectedValue === "";
  const displayValue = isAll ? name : category === "generation" ? `${selectedValue}기` : selectedValue;

  return (
    <div className={`relative inline-block `} ref={dropdownRef}>
      <div
        className={`inline-flex border-2 rounded-lg cursor-pointer justify-between items-center ${getColorClass(selectedValue)} bg-white px-3 py-1 text-Body2 tablet:px-4 tablet:py-2 tablet:text-Body1 whitespace-nowrap`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{displayValue}</span>
        <span className='ml-1 text-sm'>▾</span>
      </div>

      {isOpen && (
        <ul className='absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-auto whitespace-nowrap min-w-max'>
          {[...options].map((opt) => (
            <li
              key={opt}
              className={`px-3 py-1 text-Body2 m-1 tablet:px-4 tablet:py-2 tablet:text-Body1 rounded-md hover:bg-gray-100 cursor-pointer text-gray-400  ${
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
