"use client";

import React from "react";
import { useState } from "react";

/**
 * 세미나, 프로젝트, 스터디 페이지에서 조회 시 사용되는 필터 컴포넌트 입니다.
 * @author 정선
 */

interface FilterProps {
  name: string;
  value?: string;
  onChange: (value: string) => void;
  optionList: string[];
}

export const Filter = ({ name, value = "", onChange, optionList }: FilterProps) => {
  const [selectedValue, setSelectedValue] = useState(value);

  // Part 필터의 경우 색깔이 해당 part color로 바뀌도록 하며,
  // part 필터가 아닐 경우 기본 선택 컬러(blue)로 바뀌도록 한다.
  const getColor = (option: string) => {
    switch (option) {
      case "AI/ML":
        return "red";
      case "Server/Cloud":
        return "blue";
      case "Web/App":
        return "green";
      case "Devral":
        return "yellow";
      case "Lead":
        return "black";
      default:
        return "text-blue-400";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    onChange(newValue);
  };

  return (
    <div className='relative inline-block'>
      <select
        className='appearance-none border-2 border-gray-400 rounded-md text-xl text-gray-400 px-4 py-2'
        name={name}
        value={selectedValue}
        onChange={handleChange}
      >
        {optionList.map((opt) => (
          <option key={opt} value={opt} className='bg-white text-gray-400'>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
