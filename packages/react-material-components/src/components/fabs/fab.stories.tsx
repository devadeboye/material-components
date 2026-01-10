import type { Meta, StoryObj } from "@storybook/react";
import { FAB } from "./fab";

const meta: Meta<typeof FAB> = {
	title: "Components/FAB",
	component: FAB,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		color: {
			control: "select",
			options: ["surface", "primary", "secondary", "tertiary"],
		},
		size: {
			control: "select",
			options: ["small", "regular", "medium", "large"],
		},
		variant: {
			control: "select",
			options: ["standard", "lowered"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof FAB>;

const PlusIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M5 12h14" />
		<path d="M12 5v14" />
	</svg>
);

export const Regular: Story = {
	args: {
		size: "regular",
		children: PlusIcon,
	},
};

export const Small: Story = {
	args: {
		size: "small",
		children: PlusIcon,
	},
};

export const MediumExpressive: Story = {
	args: {
		size: "medium",
		children: PlusIcon,
	},
};

export const Large: Story = {
	args: {
		size: "large",
		children: PlusIcon,
	},
};

export const Primary: Story = {
	args: {
		color: "primary",
		children: PlusIcon,
	},
};

export const Secondary: Story = {
	args: {
		color: "secondary",
		children: PlusIcon,
	},
};

export const Tertiary: Story = {
	args: {
		color: "tertiary",
		children: PlusIcon,
	},
};

export const Lowered: Story = {
	args: {
		variant: "lowered",
		children: PlusIcon,
	},
};
