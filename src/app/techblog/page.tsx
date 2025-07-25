"use client";

import { useEffect } from "react";

import { BlogCard } from "@/src/components/card/BlogCard.component";
import { TwoCircleComponent } from "@/src/components/page/TwoCircle.components";

import { blogCardData } from "./blogData";

export default function TechblogPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className='flex flex-col px-6 tablet:px-10 desktop:px-24  py-6 tablet:py-12 desktop:py-24 gap-6 desktop:gap-12 bg-white items-center'>
      <TwoCircleComponent
        TwoCircle={{
          circleColor: "border-red",
          text: "TechBlog",
          textColor: "text-red",
          size: 150,
          textSize: 24,
        }}
      />
      {blogCardData &&
        blogCardData.map((item) => (
          <BlogCard
            key={item.blogUrl}
            blogUrl={item.blogUrl}
            src={item.src}
            generation={item.generation}
            title={item.title}
            content={item.content}
            tags={item.tags}
          />
        ))}
    </div>
  );
}
