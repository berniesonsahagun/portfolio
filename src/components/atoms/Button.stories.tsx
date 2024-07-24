import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
    },
    disabled: {
      type: "boolean",
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Taskbar: Story = {
  args: {
    icon: "./src/assets/images/directory_open_cabinet_fc-1.png",
    children: "Your text here",
  },
};

export const Start: Story = {
  args: {
    icon: "./src/assets/images/utopia_smiley.png",
    variant: "flat",
    children: "Twitter",
  },
};

export const Desktop: Story = {
  args: {
    icon: "./src/assets/images/html2-2.png",
    variant: "desktop",
    children: "MCGI Hub Translate",
  },
};
