import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/src/function/utils";

/**
 * 사이트 상단 네비게이션 헤더 컴포넌트를 모듈화한 컴포넌트입니다.
 * 반응형 디자인을 지원하며, 데스크톱에서는 가로 메뉴로, 모바일에서는 햄버거 메뉴로 표시됩니다.
 * 현재 페이지 경로에 따라 메뉴 항목이 하이라이트됩니다.
 * Compound Component 패턴으로 설계되었으며, 반응형 디자인을 지원합니다.
 * @author 동현
 */

interface HeaderProps {
  isBlack?: boolean;
  children?: React.ReactNode;
}

const HeaderComponents = ({ isBlack = false, children }: HeaderProps) => {
  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50", isBlack ? "bg-black" : "bg-white")}>
      <div className='w-full h-[93px] px-10 flex justify-between items-center'>{children}</div>
    </header>
  );
};

// 로고 컴포넌트
const HeaderLogo = () => {
  return (
    <div className='flex items-center pl-4 md:pl-0'>
      <Link href='/' className='flex items-center'>
        <Image src='/images/svg/gdg-logo.svg' alt='GDGoC 로고' width={80} height={40} priority />
      </Link>
    </div>
  );
};

// 네비게이션 링크 공통 로직
const isActive = (path: string, pathname: string) => {
  if (path === "/") return pathname === "/";
  return pathname.startsWith(path);
};

// 개별 네비게이션 링크 컴포넌트
const NavLink = ({
  href,
  children,
  isBlack,
  pathname,
}: {
  href: string;
  children: React.ReactNode;
  isBlack: boolean;
  pathname: string;
}) => {
  return (
    <Link
      href={href}
      className={`font-medium ${
        isActive(href, pathname)
          ? isBlack
            ? "text-white"
            : "text-gray-900"
          : isBlack
            ? "text-gray-300 hover:text-gray-100"
            : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
};

// 모바일 네비게이션 링크 공통 로직
const MobileNavLink = ({ href, children, pathname }: { href: string; children: React.ReactNode; pathname: string }) => {
  return (
    <Link
      href={href}
      className={`font-medium text-xl ${isActive(href, pathname) ? "text-[#EC0101]" : "text-gray-800 hover:text-gray-600"}`}
    >
      {children}
    </Link>
  );
};

// 데스크톱 네비게이션 컴포넌트
const DesktopNav = ({ isBlack }: { isBlack: boolean }) => {
  const pathname = usePathname();

  return (
    <div className='flex justify-center items'>
      <nav className='md:flex justify-center space-x-8 items-center font-NotoSansKR'>
        <NavLink href='/seminar' isBlack={isBlack} pathname={pathname}>
          세미나
        </NavLink>
        <NavLink href='/project' isBlack={isBlack} pathname={pathname}>
          프로젝트
        </NavLink>
        <NavLink href='/study' isBlack={isBlack} pathname={pathname}>
          스터디
        </NavLink>
        <NavLink href='/techblog' isBlack={isBlack} pathname={pathname}>
          Techblog
        </NavLink>
        <NavLink href='/member' isBlack={isBlack} pathname={pathname}>
          맴버
        </NavLink>
        <div className='relative inline-flex rounded-full p-[3px] overflow-hidden'>
          <div
            className='absolute inset-0 w-[140px] h-[140px] z-80 rounded-full bg-gradient-to-r from-red-500-P via-yellow-500 via-green-500 to-blue-500 animate-rotateBorder'
            style={{
              top: "-90%",
              transformOrigin: "center",
            }}
          />
          <button
            className={cn(
              "relative z-10 flex items-center justify-center px-6 py-2 rounded-full",
              isBlack ? "bg-black text-gray-300 hover:bg-gray-800" : "bg-white text-gray-600 hover:bg-gray-300",
            )}
          >
            <Link href='/#'>지원하기 →</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

// 모바일 네비게이션 토글 버튼
const MobileToggle = ({ menuOpen, toggleMenu }: { menuOpen: boolean; toggleMenu: () => void }) => {
  return (
    <button
      className='md:hidden p-3 focus:outline-none focus:ring-2 focus:ring-gray-300'
      onClick={toggleMenu}
      aria-label='Toggle Menu'
    >
      {menuOpen ? (
        <svg className='w-6 h-6 text-gray-800' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
      ) : (
        <svg className='w-6 h-6 text-gray-800' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16m-7 6h7' />
        </svg>
      )}
    </button>
  );
};

// 모바일 네비게이션 메뉴
const MobileNav = ({ menuOpen }: { menuOpen: boolean }) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed top-[93px] left-auto right-0 bg-white transform transition-transform duration-500 ease-in-out",
        menuOpen ? "-translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible",
        "h-full shadow-md min-w-[194px] md:hidden",
      )}
    >
      <nav className='flex flex-col items-end space-y-10 pb-6 p-4'>
        <MobileNavLink href='/seminar' pathname={pathname}>
          세미나
        </MobileNavLink>
        <MobileNavLink href='/project' pathname={pathname}>
          프로젝트
        </MobileNavLink>
        <MobileNavLink href='/study' pathname={pathname}>
          스터디
        </MobileNavLink>
        <MobileNavLink href='/techblog' pathname={pathname}>
          Techblog
        </MobileNavLink>
        <MobileNavLink href='/member' pathname={pathname}>
          맴버
        </MobileNavLink>
        <MobileNavLink href='/#' pathname={pathname}>
          지원하기
        </MobileNavLink>
      </nav>
    </div>
  );
};

// Compound Component로 내보내기
HeaderComponents.HeaderLogo = HeaderLogo;
HeaderComponents.DesktopNav = DesktopNav;
HeaderComponents.MobileToggle = MobileToggle;
HeaderComponents.MobileNav = MobileNav;

export default HeaderComponents;
