"use client";

import { useEffect, useState } from "react";

import { isMobile } from "@/src/function/utils";

import HeaderComponents from "../../components/header/Header.components";

/**
 * Header Component를 조합한 공통 Header입니다.
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
