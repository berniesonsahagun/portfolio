import type { Meta, StoryObj } from "@storybook/react";
import { ChevronDown } from "lucide-react";
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

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const RegularWithDot: Story = {
  args: {
    children: "Button",
  },
};

export const Pill: Story = {
  args: {
    children: "Button",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: <ChevronDown />,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const OutlineWithIcon: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: <ChevronDown />,
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const GhostWithDot: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};
