import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Ripple } from "./ripple";

// Utils
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
	"relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
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
				sm: "h-8 px-4 text-xs",
				md: "h-10 px-6 text-sm",
				lg: "h-12 px-8 text-base",
				icon: "h-10 w-10 p-0",
			},
			fullWidth: {
				true: "w-full",
			},
		},
		defaultVariants: {
			variant: "filled",
			size: "md",
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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant, size, fullWidth, children, leadingIcon, ...props },
		ref
	) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, fullWidth, className }))}
				ref={ref}
				{...props}
			>
				{/* State Layer (Hover/Reset) handled via hover:bg utilities */}
				<span className="relative z-10 flex items-center justify-center gap-2">
					{leadingIcon}
					{children}
				</span>
				<Ripple />
			</button>
		);
	}
);
Button.displayName = "Button";
