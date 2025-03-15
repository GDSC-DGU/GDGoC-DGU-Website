import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import React from "react";

import { JSDOM } from "jsdom";

/**
 * 특정 경로의 페이지에 대한 오픈 그래프 이미지를 생성하는 API 엔드포인트입니다.
 * 블로그 포스트들의 썸네일 이미지를 생성하는 데 사용되며 콘텐츠 공유 시 유용하게 사용됩니다.
 * @author 도형
 */

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const { path } = Object.fromEntries(searchParams);

    const url = new URL(
      process.env.NODE_ENV === "development" ? `http://localhost:3000${path}` : `https://gdgoc-dgu.com${path}`,
    );

    const response = await fetch(url.toString());
    const html = await response.text();

    const dom = new JSDOM(html);
    const title = dom.window.document.querySelector("title")?.textContent || "No title";
    const description =
      dom.window.document.querySelector("meta[name='description']")?.getAttribute("content") || "No description";
    const keywords = (dom.window.document.querySelector("meta[name='keywords']")?.getAttribute("content") || "").split(
      ",",
    );
    const lastModified = dom.window.document.querySelector("time")?.getAttribute("datetime") || "";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            padding: "46px",
            backgroundImage: "linear-gradient(to top, #ff9a9e 0%, #fad0c4 100%)",
            color: "black",
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              height: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1 style={{ fontSize: "46px", fontWeight: "bold", paddingTop: "24px", whiteSpace: "pre-wrap" }}>
                {title}
              </h1>
              <p style={{ fontSize: "20px", opacity: 0.8, whiteSpace: "pre-wrap" }}>{description}</p>
              <div style={{ display: "flex", fontSize: "18px", opacity: 0.6 }}>
                {keywords.map((tag: string, i: number) => (
                  <div key={tag} style={{ display: "flex", marginRight: keywords.length === i + 1 ? "" : "10px" }}>
                    #{tag}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={
                    process.env.NODE_ENV === "development"
                      ? "http://localhost:3000/images/profile_large.jpg"
                      : `https://gdgoc-dgu.com/images/profile_large.jpg`
                  }
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "10px",
                    marginRight: "16px",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: 20,
                    }}
                  >
                    <div style={{ fontSize: "32px", opacity: 0.8 }}>이도형 - GDGoC DGU</div>
                    <div style={{ fontSize: "20px", opacity: 0.8 }}>{url.href}</div>
                  </div>
                  {lastModified && <div style={{ fontSize: "20px", opacity: 0.8 }}>{lastModified}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
