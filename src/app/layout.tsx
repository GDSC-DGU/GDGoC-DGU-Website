import type { Metadata } from "next";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import { Footer } from "../components/Footer.component";
import { TanstackQueryProvider } from "../lib/query/TanstackQueryProvider";
import "./globals.css";
import Header from "./header/Header";
import { DefaultMetadata, DefaultOpenGraph } from "./shared-metadata";

/**
 * 애플리케이션의 루트 레이아웃 컴포넌트로 SEO 메타데이터, 분석 도구(GA, GTM),
 * 성능 모니터링 및 전체 페이지 공통 UI 구조를 정의합니다.
 * @author 도형
 */

export const metadata: Metadata = {
  ...DefaultMetadata,
  openGraph: DefaultOpenGraph,
};

const GTM_ID = process.env.GTM_ID;
const GA_ID = process.env.GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='kr'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />

        {/* <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        /> */}

        <meta name='author' content='GDGoC DGU' />
        <meta name='robots' content='index,follow' />
        <meta property='og:type' content='website' />
        <link rel='manifest' href={`/site.webmanifest`} crossOrigin='use-credentials' />
        <link rel='icon' type='image/svg' href='/icon.svg' />
        <meta name='msapplication-TileColor' content='#4285f4' />
        <meta name='msapplication-TileImage' content={`/icon.png`} />
        <meta name='theme-color' content='#4285f4' />
      </head>

      <body className='flex flex-col antialiased h-screen overflow-hidden font-NotoSansKR bg-gray-100'>
        <Header />

        {/* GTM 컴포넌트를 조건부로 배포 환경에서만 적용 */}
        {GTM_ID && process.env.NODE_ENV === "production" && <GoogleTagManager gtmId={GTM_ID} />}
        {/* Google Tag Manager (noscript) - <body> 바로 뒤 */}
        {/* 테스트후 제거 예정 */}
        {/* <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height='0'
            width='0'
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> */}

        <div className='lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto pt-24'>
          <div className='flex-1 bg-[#FCFCFC] min-h-screen lg:rounded-tl-xl border-transparent lg:border-neutral-200'>
            {/*  GA 컴포넌트를 조건부로 배포 환경에서만 적용 */}
            {GA_ID && process.env.NODE_ENV === "production" && <GoogleAnalytics gaId={GA_ID} />}
            <TanstackQueryProvider>{children}</TanstackQueryProvider>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
