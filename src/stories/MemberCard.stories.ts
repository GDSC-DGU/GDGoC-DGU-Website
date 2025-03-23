/**
 * 카드 컴포넌트 중 멤버 카드 컴포넌트의 스토리 파일입니다.
 * @author 태욱
 */
import type { Meta, StoryObj } from "@storybook/react";

import { MemberCard } from "../components/card/MemberCard.component";

const meta: Meta<typeof MemberCard> = {
  title: "Components/Card/MemberCard",
  component: MemberCard,
  parameters: {
    layout: "centered",
  },
  args: {
    generation: 1,
    title: "세미나 제목",
    src: "https://ifh.cc/g/PrjcTD.png",
    part: "AI/ML",
    role: "General",
    major: "컴퓨터공학과",
    githubLink: "https://github.com/Taew00k",
    linkedInLink: "https://www.instagram.com/taednr/",
  },
};

export default meta;

type Story = StoryObj<typeof MemberCard>;

export const Default: Story = {
  args: {
    src: "https://ifh.cc/g/PrjcTD.png",
  },
};
