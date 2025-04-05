/**
 * 카드 컴포넌트 중 활동 카드 컴포넌트의 스토리 파일입니다.
 * @author 태욱
 */
import type { Meta, StoryObj } from "@storybook/react";

import { ActivityCard } from "../components/card/ActivityCard.component";

const meta: Meta<typeof ActivityCard> = {
  title: "Components/Card/ActivityCard",
  component: ActivityCard,
  parameters: {
    layout: "centered",
  },
  args: {
    src: "https://ifh.cc/g/PrjcTD.png",
    title: "Solution Challenge",
    content:
      "GDSC의 가장 큰 공식행사, 세계 각지의 GDSC 모든 멤버들이 참여하는 Solution Challenge 대회입니다. UN이 제시하는 17가지 문제점을 해결하는 서비스를 만드는 행사입니다.",
  },
};

export default meta;

type Story = StoryObj<typeof ActivityCard>;

export const Default: Story = {};
