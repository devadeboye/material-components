import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./button";

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["filled", "tonal", "outlined", "text"],
		},
		size: {
			control: "radio",
			options: ["xs", "s", "m", "l", "xl"],
		},
		shape: {
			control: "radio",
			options: ["round", "square"],
		},
		disabled: {
			control: "boolean",
		},
		fullWidth: {
			control: "boolean",
		},
	},
	args: {
		onClick: fn(),
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
	args: {
		variant: "filled",
		children: "Filled Button",
		size: "m",
		shape: "round",
	},
};

export const Tonal: Story = {
	args: {
		variant: "tonal",
		children: "Tonal Button",
		size: "m",
		shape: "round",
	},
};

export const Outlined: Story = {
	args: {
		variant: "outlined",
		children: "Outlined Button",
	},
};

export const Text: Story = {
	args: {
		variant: "text",
		children: "Text Button",
	},
};

export const Small: Story = {
	args: {
		size: "xs",
		children: "Small",
	},
};

export const Large: Story = {
	args: {
		size: "l",
		children: "Large",
		shape: "round",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: "Disabled",
	},
};
