import type { Meta, StoryObj } from "@storybook/react";
import { TitleBar } from "./TitleBar";

const meta = {
  title: "Molecules/TitleBar",
  component: TitleBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TitleBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconSrc: "./src/assets/images/minesweeper-0.png",
    title: "Window title here",
  },
};
