"use client";

import { useEffect, useState } from "react";

import { isMobile } from "@/src/function/utils";

import HeaderComponents from "../../components/header/Header.components";

/**
 * 사이트 상단 네비게이션 헤더 컴포넌트입니다.
 * 반응형 디자인을 지원하며, 데스크톱에서는 가로 메뉴로, 모바일에서는 햄버거 메뉴로 표시됩니다.
 * 현재 페이지 경로에 따라 메뉴 항목이 하이라이트됩니다.
 * @author 도형
 * 컴파운드 컴포넌트로 구성된 모듈들의 조합입니다.
 * @author 동현
 */

interface HeaderProps {
  isBlack?: boolean;
}

const Header = ({ isBlack = false }: HeaderProps) => {
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

  return (
    <HeaderComponents isBlack={isBlack}>
      <HeaderComponents.HeaderLogo />
      <HeaderComponents.DesktopNav isBlack={isBlack} />
      {isMobileView && <HeaderComponents.MobileToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />}
      {isMobileView && <HeaderComponents.MobileNav menuOpen={menuOpen} />}
    </HeaderComponents>
  );
};

export default Header;
