import Image from "next/image";

import Header from "../header/Header";

export default function TechblogPage() {
  return (
    <div className='min-h-screen flex flex-col bg-black text-white'>
      {/* 헤더 */}
      <Header isBlack={false} />
      <header className='w-full py-4 px-8 flex justify-between items-center border-b border-gray-800'>
        {/* 로고 */}

        {/* 네비게이션 메뉴 */}
        <nav className='hidden md:flex gap-6 text-sm'>
          <a href='#' className='hover:text-gray-300 transition'>
            세미나
          </a>
          <a href='#' className='hover:text-gray-300 transition'>
            프로젝트
          </a>
          <a href='#' className='hover:text-gray-300 transition'>
            스터디
          </a>
          <a href='#' className='hover:text-gray-300 transition'>
            Techblog
          </a>
          <a href='#' className='hover:text-gray-300 transition'>
            멤버
          </a>
        </nav>

        {/* 지원하기 버튼 */}
        <a
          href='#'
          className='hidden md:flex items-center px-4 py-2 border border-gray-600 rounded-full hover:bg-gray-800 transition'
        >
          지원하기 →
        </a>

        {/* 모바일 메뉴 (햄버거) */}
        <button className='md:hidden text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            width={28}
            height={28}
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </header>

      {/* 메인 컨텐츠 */}
      <main className='flex flex-col items-center justify-center flex-1 text-center px-8 py-20'>
        <h1 className='text-4xl font-bold mb-4'>막간의 여행, GDGoC</h1>
        <p className='text-gray-400 max-w-lg'>
          개발자와 함께하는 다양한 프로젝트, 세미나, 그리고 네트워킹의 장. 지금 GDGoC와 함께하세요!
        </p>
        <a
          href='#'
          className='mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition'
        >
          지금 참여하기 →
        </a>
      </main>
      {/* 푸터 */}
      <footer className='py-6 text-center text-gray-500 text-sm border-t border-gray-800'>
        © 2025 GDGoC. All rights reserved.
      </footer>
    </div>
  );
}
