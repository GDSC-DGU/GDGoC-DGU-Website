import type { Meta, StoryObj } from "@storybook/react";

import { PartTag } from "../components";

/**
 * PartTag 컴포넌트의 스토리 파일입니다.
 * 각 파트에 따른 스토리를 각각 만들어두었습니다.
 * @author 정선
 */

const meta: Meta<typeof PartTag> = {
  title: "Components/Common/PartTag",
  component: PartTag,
  argTypes: {
    part: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof PartTag>;

// AI/ML 파트 스토리 생성
export const AIML: Story = {
  args: {
    part: "AI/ML",
  },
};

// Server/Cloud 파트 스토리 생성
export const ServerCloud: Story = {
  args: {
    part: "Server/Cloud",
  },
};

// Web/App 파트 스토리 생성
export const WebApp: Story = {
  args: {
    part: "Web/App",
  },
};

// Devrel 파트 스토리 생성
export const Devrel: Story = {
  args: {
    part: "Devrel",
  },
};

// Lead 파트 스토리 생성
export const Lead: Story = {
  args: {
    part: "Lead",
  },
};
