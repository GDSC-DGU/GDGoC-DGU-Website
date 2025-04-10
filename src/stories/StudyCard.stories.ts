/**
 * 카드 컴포넌트 중 스터디 카드 컴포넌트의 스토리 파일입니다.
 * @author 태욱
 */
import type { Meta, StoryObj } from "@storybook/react";

import { StudyCard } from "../components/card/StudyCard.component";
import { Study } from "../types";

const meta: Meta<typeof StudyCard> = {
  title: "Components/Card/StudyCard",
  component: StudyCard,
  parameters: {
    layout: "centered",
  },
  args: {
    study: {
      generation: 1,
      title: "스터디 이름",
      content: "공부하는 스터디",
      src: "https://ifh.cc/g/PrjcTD.png",
      part: "Server/Cloud",
      name: "김태욱",
      status: "진행중",
    } as Study,
  },
};

export default meta;

type Story = StoryObj<typeof StudyCard>;

export const Default: Story = {};
