import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "filled", "outlined"],
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl", "2xl"],
    },
    interactive: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: (
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium">Elevated Card</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This is an elevated card with a default shadow and color.
        </p>
      </div>
    ),
    className: "w-[300px]",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    children: (
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium">Filled Card</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This is a filled card with a darker background.
        </p>
      </div>
    ),
    className: "w-[300px]",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: (
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium">Outlined Card</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This is an outlined card with a thin border.
        </p>
      </div>
    ),
    className: "w-[300px]",
  },
};

export const Interactive: Story = {
  args: {
    variant: "elevated",
    interactive: true,
    children: (
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium">Interactive Card</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Click me to see the ripple effect and state layer!
        </p>
      </div>
    ),
    className: "w-[300px]",
    onClick: () => alert("Card clicked!"),
  },
};

export const CustomPadding: Story = {
  args: {
    variant: "filled",
    padding: "lg",
    children: (
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium">Large Padding</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This card has extra padding for a more spacious feel.
        </p>
      </div>
    ),
    className: "w-[300px]",
  },
};
