import { useEffect, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Filter } from "../components";

/**
 * Filter 컴포넌트의 스토리 파일입니다.
 * 다양한 옵션 리스트 및 선택 상태를 테스트할 수 있습니다.
 * @author 정선
 */

const meta: Meta<typeof Filter> = {
  title: "Components/Common/Filter",
  component: Filter,
  argTypes: {
    category: {
      control: { type: "select" },
      options: ["part", "generation", "type"],
    },
    value: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Filter>;

const FilterTemplate = (args: React.ComponentProps<typeof Filter>) => {
  const [value, setValue] = useState(args.value || "");

  useEffect(() => {
    setValue(args.value || "");
  }, [args.value]);

  return (
    <Filter
      {...args}
      value={value}
      onChange={(val: string) => {
        setValue(val);
        console.log("선택된 필터:", val);
      }}
    />
  );
};

// 파트 카테고리
export const Default: Story = {
  render: (args) => <FilterTemplate {...args} />,
  args: {
    category: "part",
    value: "전체",
  },
};

// 기수 카테고리
export const Generation: Story = {
  render: (args) => <FilterTemplate {...args} />,
  args: {
    category: "generation",
    value: "전체",
  },
};

// 세미나 유형 카테고리
export const Type: Story = {
  render: (args) => <FilterTemplate {...args} />,
  args: {
    category: "type",
    value: "전체",
  },
};
