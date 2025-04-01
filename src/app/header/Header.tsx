"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { isMobile } from "@/src/function/utils";

import HeaderComponents from "../../components/header/Header.components";

/**
 * Header Component를 조합한 공통 Header입니다.
 * 경로에 맞추어 header의 색상을 지정합니다.
 * @author 동현
 */

const BLACK_HEADER_PATHS = ["/"];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const isBlack = BLACK_HEADER_PATHS.includes(pathname);

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
      {!isMobileView && <HeaderComponents.DesktopNav isBlack={isBlack} />}
      {isMobileView && (
        <>
          <HeaderComponents.MobileToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <HeaderComponents.MobileNav menuOpen={menuOpen} />
        </>
      )}
    </HeaderComponents>
  );
};

export default Header;
