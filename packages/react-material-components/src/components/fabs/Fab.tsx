/**
 * Floating action buttons (FABs) help people take primary actions.
 * https://m3.material.io/components/floating-action-button/specs
 */

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Ripple } from "../ripple";
import { cn } from "../../../lib/utils/helpers";


const fabVariants = cva(
	"relative inline-flex items-center justify-center transition-all hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
	{
		variants: {
			color: {
				surface: "bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100",
				primary: "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100",
				secondary: "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100",
				tertiary: "bg-pink-100 text-pink-900 dark:bg-pink-900 dark:text-pink-100",
			},
			size: {
				small: "w-10 h-10 rounded-xl",
				regular: "w-14 h-14 rounded-2xl",
				medium: "w-20 h-20 rounded-3xl", // M3 Expressive
				large: "w-24 h-24 rounded-[28px]",
			},
			variant: {
				standard: "shadow-md hover:shadow-lg focus:shadow-md active:shadow-sm",
				lowered: "shadow-sm hover:shadow-md focus:shadow-sm active:shadow-none",
			},
		},
		defaultVariants: {
			color: "surface",
			size: "regular",
			variant: "standard",
		},
	}
);

export interface FABProps
	extends
		Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
		VariantProps<typeof fabVariants> {
	children?: React.ReactNode;
}

const determineIconSize = (size: "small" | "regular" | "medium" | "large" | null | undefined) => {
	switch (size) {
		case "small":
			return "w-6 h-6";
		case "regular":
			return "w-6 h-6";
		case "medium":
			return "w-7 h-7"; // 28x28dp
		case "large":
			return "w-9 h-9"; // 36x36dp
		default:
			return "w-6 h-6";
	}
};

export const FAB = React.forwardRef<HTMLButtonElement, FABProps>(
	({ className, color, size, variant, children, ...props }, ref) => {
		const iconSize = determineIconSize(size);
		return (
			<button
				className={cn(fabVariants({ color, size, variant, className }))}
				ref={ref}
				{...props}
			>
				<span className={cn("relative z-10 flex items-center justify-center", iconSize)}>
					{children}
				</span>
				<Ripple />
			</button>
		);
	}
);

FAB.displayName = "FAB";
