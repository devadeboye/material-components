/**
 * Extended Floating Action Buttons (FABs) help people take primary actions.
 * https://m3.material.io/components/extended-fab/specs
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

const extendedFabVariants = cva(
	"relative inline-flex flex-row items-center justify-center transition-all hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 overflow-hidden h-14 w-fit rounded-2xl pr-5 pl-4 gap-2",
	{
		variants: {
			color: {
				surface: "bg-surface-container-high text-primary hover:bg-surface-container-highest", // M3 default for surface-colored FAB
				primary: "bg-primary-container text-on-primary-container hover:bg-primary-container/90",
				secondary: "bg-secondary-container text-on-secondary-container hover:bg-secondary-container/90",
				tertiary: "bg-tertiary-container text-on-tertiary-container hover:bg-tertiary-container/90",
			},
			size: {
				small: "h-14 rounded-2xl px-4 text-[16px] font-medium tracking-[0.15px]",
				medium: "h-20 rounded-[20px] px-6.5 text-[22px] font-normal tracking-normal",
				large: "h-24 rounded-[28px] px-7 text-2xl font-medium tracking-normal"
			},
			variant: {
				standard: "shadow-md hover:shadow-lg focus:shadow-md active:shadow-sm",
				lowered: "shadow-sm hover:shadow-md focus:shadow-sm active:shadow-none",
			},
		},
		defaultVariants: {
			color: "primary",
			variant: "standard",
			size: "medium"
		},
	}
);

export interface ExtendedFABProps
	extends
		Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
		VariantProps<typeof extendedFabVariants> {
	icon?: React.ReactNode;
	label: string;
	size?: "small" | "medium" | "large";
}

const determineGapAndIconSize = (
	size: "small" | "medium" | "large" | null | undefined
) => {
	switch (size) {
		case "small":
			return ["gap-2", "w-6 h-6"];
		case "medium":
			return ["gap-3", "w-7 h-7"];
		case "large":
			return ["gap-4", "w-9 h-9"];
		default:
			return ["gap-3", "w-7 h-7"];
	}
};

export const ExtendedFAB = React.forwardRef<HTMLButtonElement, ExtendedFABProps>(
	({ className, color, variant, icon, label, size, ...props }, ref) => {
		let [gap, iconSize] = determineGapAndIconSize(size);

		return (
			<button
				className={`${cn(extendedFabVariants({ color, variant, size, className }))} ${gap}`}
				ref={ref}
				{...props}
			>
				{/* State Layer (Hover/Reset) handled via hover:bg utilities */}
				{icon && (
					<span
						className={`relative z-10 flex items-center justify-center ${iconSize}`}
					>
						{icon}
					</span>
				)}
				<span className="relative z-10 font-medium text-sm tracking-wide">
					{label}
				</span>
				<Ripple />
			</button>
		);
	}
);

ExtendedFAB.displayName = "ExtendedFAB";
