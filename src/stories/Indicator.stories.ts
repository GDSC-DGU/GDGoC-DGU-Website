import type { Meta, StoryObj } from "@storybook/react";

import { Indicator } from "../components";

/**
 * Indicator 컴포넌트의 스토리 파일입니다.
 * @author 정선
 */

const meta: Meta<typeof Indicator> = {
  title: "Components/Common/Indicator",
  component: Indicator,
  argTypes: {
    totalPages: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof Indicator>;

export const DefaultIndicator: Story = {
  args: {
    totalPages: 5,
  },
};
