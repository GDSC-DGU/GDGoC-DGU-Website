// PartIntroduceCard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";

import { PartIntroduceCard } from "../components/card/PartIntroduceCard.component";
import { PART_INTRODUCE } from "../constants/partIntroduce";

const meta: Meta<typeof PartIntroduceCard> = {
  title: "Components/Card/PartIntroduceCard",
  component: PartIntroduceCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof PartIntroduceCard>;

export const AIML: Story = {
  args: PART_INTRODUCE[0],
};

export const ServerCloud: Story = {
  args: PART_INTRODUCE[1],
};

export const WebApp: Story = {
  args: PART_INTRODUCE[2],
};
