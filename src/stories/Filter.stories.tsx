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
    name: { control: "text" },
    value: { control: "text" },
    optionList: { control: "object" },
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
    name: "파트",
    value: "전체",
    optionList: ["전체", "AI/ML", "Server/Cloud", "Web/App", "Devral", "Lead"],
  },
};

// 기수 카테고리
export const Generation: Story = {
  render: (args) => <FilterTemplate {...args} />,
  args: {
    name: "기수",
    value: "전체",
    optionList: ["전체", "1기", "2기"],
  },
};
