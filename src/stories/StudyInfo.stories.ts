import type { Meta, StoryObj } from "@storybook/react";

import { StudyInfo } from "../components";

/**
 * StudyInfo 컴포넌트의 스토리 파일입니다.
 * 각 파트에 따른 스토리를 각각 만들어두었습니다.
 * @author 정선
 */

const meta: Meta<typeof StudyInfo> = {
  title: "Components/Study/StudyInfo",
  component: StudyInfo,
  argTypes: {
    part: { control: "text" },
    content: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof StudyInfo>;

// AI/ML 파트 스토리 생성
export const AIML: Story = {
  args: {
    part: "AI/ML",
    content: "AI/ML 파트에서는 다양한 스터디를 진행하고 있습니다. 설명 한 줄.",
  },
};

// Server/Cloud 파트 스토리 생성
export const ServerCloud: Story = {
  args: {
    part: "Server/Cloud",
    content: "Server/Cloud 파트에서는 다양한 스터디를 진행하고 있습니다. 설명 한 줄.",
  },
};

// Web/App 파트 스토리 생성
export const WebApp: Story = {
  args: {
    part: "Web/App",
    content: "Web/App 파트에서는 다양한 스터디를 진행하고 있습니다. 설명 한 줄.",
  },
};
