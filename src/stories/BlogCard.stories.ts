/**
 * 카드 컴포넌트 중 블로그 카드 컴포넌트의 스토리 파일입니다.
 * @author 태욱
 */
import type { Meta, StoryObj } from "@storybook/react";

import { BlogCard } from "../components/card/BlogCard.component";

const meta: Meta<typeof BlogCard> = {
  title: "Components/Card/BlogCard",
  component: BlogCard,
  parameters: {
    layout: "centered",
  },
  args: {
    src: "https://ifh.cc/g/PrjcTD.png",
    generation: 2,
    title: "태욱의 공부 블로그",
    content: "Next.js와 TailwindCSS를 활용하여 나만의 기술 블로그를 만드는 과정을 소개합니다.",
    blogUrl: "https://taewook2.tistory.com/",
    tags: ["Next.js", "Tailwind", "TypeScript", "Vercel"],
  },
};

export default meta;

type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {};
