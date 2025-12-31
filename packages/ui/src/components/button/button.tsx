/**
 * Buttons prompt most actions in a UI
 * https://m3.material.io/components/buttons/specs
 */

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Ripple } from "../ripple";

// Utils
function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const buttonVariants = cva(
	"relative inline-flex items-center justify-center gap-2 font-medium transition-all hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
	{
		variants: {
			variant: {
				filled:
					"bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 shadow-sm hover:shadow-md",
				tonal:
					"bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
				outlined:
					"border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800",
				text: "bg-transparent text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800",
				elevated:
					"bg-white text-gray-900 shadow-md hover:shadow-lg dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800",
			},

			size: {
				/** extra small */
				xs: "h-8 px-3 font-medium text-sm",
				/** small */
				s: "h-10 px-4 font-medium text-sm",
				/** medium */
				m: "h-14 px-6 font-medium text-base",
				/** large */
				l: "h-24 px-12 font-normal text-2xl",
				/** extra large */
				xl: "h-34 px-16 font-normal text-[32px]/10",
			},

			shape: {
				round: "rounded-full",
				square: "",
			},
			fullWidth: {
				true: "w-full",
			},
		},

		compoundVariants: [
			{
				shape: "square",
				size: "xs",
				className: "rounded-xl active:rounded-lg",
			},
			{
				shape: "square",
				size: "s",
				className: "rounded-lg active:rounded-lg",
			},
			{
				shape: "square",
				size: "m",
				className: "rounded-2xl active:rounded-xl",
			},
			{
				shape: "square",
				size: "l",
				className: "rounded-[28px] active:rounded-2xl",
			},
			{
				shape: "square",
				size: "xl",
				className: "rounded-[28px] active:rounded-2xl",
			},
		],

		defaultVariants: {
			variant: "filled",
			size: "m",
			shape: "round",
		},
	}
);

export interface ButtonProps
	extends
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	leadingIcon?: React.ReactNode;
}

/** determines the gap between leading icon and button text */
const determineGapAndIconSize = (
	size: "xs" | "s" | "m" | "l" | "xl" | null | undefined
) => {
	switch (size) {
		case "xs":
			return ["gap-1", "w-5 h-5"];
		case "s":
			return ["gap-2", "w-5 h-5"];
		case "m":
			return ["gap-2", "w-6 h-6"];
		case "l":
			return ["gap-3", "w-8 h-8"];
		case "xl":
			return ["gap-4", "w-10 h-10"];
		default:
			return ["gap-2", "w-6 h-6"];
	}
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			shape,
			fullWidth,
			children,
			leadingIcon,
			...props
		},
		ref
	) => {
		let [gap, iconSize] = determineGapAndIconSize(size);
		return (
			<button
				className={cn(
					buttonVariants({ variant, size, shape, fullWidth, className })
				)}
				ref={ref}
				{...props}
			>
				{/* State Layer (Hover/Reset) handled via hover:bg utilities */}
				<span
					className={`relative z-10 flex items-center justify-center ${gap}`}
				>
					{leadingIcon && (
						<div className={`flex items-center justify-center ${iconSize}`}>
							{leadingIcon}
						</div>
					)}

					{children}
				</span>
				<Ripple />
			</button>
		);
	}
);
Button.displayName = "Button";
