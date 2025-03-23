/**
 * 카드 컴포넌트 중 세미나 카드 컴포넌트의 스토리 파일입니다.
 * @author 태욱
 */
import type { Meta, StoryObj } from "@storybook/react";

import { SeminarCard } from "../components/card/SeminarCard.component";

const meta: Meta<typeof SeminarCard> = {
  title: "Components/Card/SeminarCard",
  component: SeminarCard,
  parameters: {
    layout: "centered",
  },
  args: {
    generation: 1,
    title: "이푸 (IFU)",
    content:
      "Our project aims to help people with borderline intellectual functioning by raising awareness and providing them with our society and familes",
    src: "https://ifh.cc/g/PrjcTD.png",
    part: "AI/ML",
    name: "김태욱",
    category: "캠핑세미나",
  },
};

export default meta;

type Story = StoryObj<typeof SeminarCard>;

export const Default: Story = {
  args: {
    src: "https://ifh.cc/g/PrjcTD.png",
  },
};
