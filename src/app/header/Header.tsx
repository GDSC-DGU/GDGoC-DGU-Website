"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { H4 } from "@/src/components/Typography.component";
import { cn, isMobile } from "@/src/function/utils";
import { twMerge } from "tailwind-merge";

/**
 * 사이트 상단 네비게이션 헤더 컴포넌트입니다.
반응형 디자인을 지원하며, 데스크톱에서는 가로 메뉴로, 모바일에서는 햄버거 메뉴로 표시됩니다.
현재 페이지 경로에 따라 메뉴 항목이 하이라이트됩니다.
@author 도형
 * @author 도형
 */

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // 모바일 여부 업데이트
  useEffect(() => {
    setIsMobileView(isMobile());
    const handleResize = () => {
      setIsMobileView(isMobile());
      if (!isMobile()) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // `startsWith` 사용하여 하위 경로도 포함하도록 수정
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"; // INFO는 루트에서만 활성화
    }
    return pathname.startsWith(path);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white'>
      <div className='container mx-auto flex justify-between items-center py-4 md:px-8'>
        {/* ✅ 로고 */}
        <div className='flex items-center pl-4 md:pl-0'>
          <Link href='/' className='flex items-center'>
            <H4 as='span' className={twMerge("font-['KoPub_Batang'] text-xl md:text-1xl font-500")}>
              Dohyeong
              <br />
              Lee <span>•</span>
            </H4>
          </Link>
        </div>

        {/* ✅ 데스크톱 네비게이션 */}
        <nav className='hidden md:flex space-x-8'>
          <Link
            href='/'
            className={`font-medium ${isActive("/") ? "text-[#EC0101]" : "text-gray-800 hover:text-gray-600"}`}
          >
            INFO
          </Link>
          <Link
            href='/portfolio'
            className={`font-medium ${isActive("/portfolio") ? "text-[#EC0101]" : "text-gray-800 hover:text-gray-600"}`}
          >
            PORTFOLIO
          </Link>
          <Link
            href='/blog'
            className={`font-medium ${isActive("/blog") ? "text-[#EC0101]" : "text-gray-800 hover:text-gray-600"}`}
          >
            BLOG
          </Link>
        </nav>

        {/* ✅ 모바일 햄버거 버튼 */}
        <button
          className='md:hidden px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300'
          onClick={toggleMenu}
          aria-label='Toggle Menu'
        >
          {menuOpen ? (
            // X 버튼 (닫기)
            <svg
              className='w-6 h-6 text-gray-800'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          ) : (
            // ☰ 햄버거 버튼
            <svg
              className='w-6 h-6 text-gray-800'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          )}
        </button>
      </div>

      {/* ✅ 모바일 네비게이션 */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 bg-white transform transition-transform duration-500 ease-in-out",
          menuOpen ? "translate-y-0" : "-translate-y-full",
          "h-auto max-h-[250px] shadow-md",
        )}
      >
        <div className='flex justify-end p-4'>
          <button className='focus:outline-none' onClick={toggleMenu} aria-label='Close Menu'>
            <svg
              className='w-6 h-6 text-gray-800'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>
        </div>
        <nav className='flex flex-col items-center space-y-5 pb-6'>
          <Link
            href='/'
            className={`font-medium text-xl ${isActive("/") ? "text-[#EC0101]" : "text-gray-800 hover:text-gray-600"}`}
            onClick={toggleMenu}
          >
            INFO
          </Link>
          <Link
            href='/portfolio'
            className={`font-medium text-xl ${isActive("/portfolio") ? "text-[#EC0101]" : "text-gray-800 hover:text-gray-600"}`}
            onClick={toggleMenu}
          >
            PORTFOLIO
          </Link>
          <Link
            href='/blog'
            className={`font-medium text-xl ${isActive("/blog") ? "text-[#EC0101]" : "text-gray-800 hover:text-gray-600"}`}
            onClick={toggleMenu}
          >
            BLOG
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
