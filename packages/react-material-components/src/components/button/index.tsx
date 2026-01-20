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
					"bg-primary text-on-primary hover:bg-primary/90 shadow-sm hover:shadow-md",
				tonal:
					"bg-secondary-container text-on-secondary-container hover:bg-secondary-container/90",
				outlined:
					"border border-outline bg-transparent text-primary hover:bg-primary/10 active:bg-primary/10",
				text: "bg-transparent text-primary hover:bg-primary/10 active:bg-primary/10",
				elevated:
					"bg-surface-container-low text-primary shadow-elevation-1 hover:shadow-elevation-2 hover:bg-surface-container-low/80",
			},

			size: {
				/** extra small */
				xs: "h-8 px-3 text-label-s",
				/** small */
				s: "h-9 px-3 text-label-l",
				/** medium (M3 Default) */
				m: "h-10 px-6 text-label-l",
				/** large */
				l: "h-12 px-8 text-label-l",
				/** extra large */
				xl: "h-14 px-10 text-title-m",
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
				{/* State Layer (Hover/Reset) handled via hover:bg utilities or overlay below */}
				<div className="absolute inset-0 z-0 bg-current opacity-0 transition-opacity hover:opacity-[0.08] focus:opacity-[0.12] active:opacity-[0.12]" />
				
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
