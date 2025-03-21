import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "../components";

/**
 * Pagination 컴포넌트의 스토리 파일입니다.
 * @author 정선
 */

const meta: Meta<typeof Pagination> = {
  title: "Components/Common/Pagination",
  component: Pagination,
  argTypes: {
    totalPages: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const DefaultPagination: Story = {
  args: {
    totalPages: 5,
  },
};
