import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Ripple } from "./ripple";

// Utils
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const cardVariants = cva(
	"relative overflow-hidden transition-all duration-200",
	{
		variants: {
			variant: {
				elevated:
					"bg-surface-container-low shadow-elevation-1 hover:shadow-elevation-2 dark:bg-gray-900 dark:text-gray-100",
				filled:
					"bg-surface-container-highest dark:bg-gray-800 dark:text-gray-100",
				outlined:
					"border border-outline bg-transparent dark:border-gray-700 dark:text-gray-100",
			},
			padding: {
				none: "p-0",
				sm: "p-4",
				md: "p-6",
				lg: "p-8",
			},
			radius: {
				none: "rounded-none",
				sm: "rounded-sm",
				md: "rounded-md",
				lg: "rounded-lg",
				xl: "rounded-xl", // M3 default (12px)
				"2xl": "rounded-2xl",
			},
		},
		defaultVariants: {
			variant: "elevated",
			padding: "md",
			radius: "xl",
		},
	}
);

export interface CardProps
	extends
		React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardVariants> {
	interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
	(
		{
			className,
			variant,
			padding,
			radius,
			interactive,
			children,
			onClick,
			...props
		},
		ref
	) => {
		const isInteractive = interactive || !!onClick;

		return (
			<div
				ref={ref}
				onClick={onClick}
				className={cn(
					cardVariants({ variant, padding, radius, className }),
					isInteractive && "hover:cursor-pointer group"
				)}
				{...props}
			>
				{/* State Layer for interactive cards */}
				{isInteractive && (
					<div className="absolute inset-0 z-0 bg-current opacity-0 transition-opacity group-hover:opacity-[0.08] group-focus:opacity-[0.12] group-active:opacity-[0.12]" />
				)}

				<div className="relative z-10 w-full h-full">{children}</div>

				{isInteractive && <Ripple />}
			</div>
		);
	}
);
Card.displayName = "Card";
