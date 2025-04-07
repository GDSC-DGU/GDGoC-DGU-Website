/**
 * 카드 컴포넌트 중 프로젝트 카드 컴포넌트의 스토리 파일입니다.
 * @author 태욱
 */
import type { Meta, StoryObj } from "@storybook/react";

import { ProjectCard } from "../components/card/ProjectCard.component";
import { Project } from "../types";

const meta: Meta<typeof ProjectCard> = {
  title: "Components/Card/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
  },
  args: {
    project: {
      generation: 1,
      title: "이푸 (IFU)",
      content:
        "Our project aims to help people with borderline intellectual functioning by raising awareness and providing them with our society and familes",
      src: "https://ifh.cc/g/PrjcTD.png",
    } as Project,
  },
};

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {};
