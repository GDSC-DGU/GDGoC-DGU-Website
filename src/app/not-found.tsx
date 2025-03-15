"use client";

import React from "react";

/**
 * 404 페이지를 처리하는 컴포넌트입니다.
 * @author 도형
 */

export default function CustomNotFound() {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/");
    }
  }, []);
  return <></>;
}
