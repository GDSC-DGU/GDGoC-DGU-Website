import type { Meta, StoryObj } from "@storybook/react";

import { TechStack } from "../components";

/**
 * TechStack 컴포넌트의 스토리 파일입니다.
 * 기술스텍 태그에 쓰이는 red, blue, green, yellow 색상 태그 스토리를 만들었습니다.
 * @author 정선
 */

const meta: Meta<typeof TechStack> = {
  title: "Components/Common/TechStack",
  component: TechStack,
  argTypes: {
    text: { control: "text" },
    color: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof TechStack>;

export const RedTag: Story = {
  args: {
    text: "redTag",
    color: "red",
  },
};

export const BlueTag: Story = {
  args: {
    text: "blueTag",
    color: "blue",
  },
};

export const GreenTag: Story = {
  args: {
    text: "greenTag",
    color: "green",
  },
};

export const YellowTag: Story = {
  args: {
    text: "yellowTag",
    color: "yellow",
  },
};
