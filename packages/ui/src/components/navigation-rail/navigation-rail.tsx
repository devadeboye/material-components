"use client";

/**
 * Navigation rails provide access to primary destinations in apps.
 * https://m3.material.io/components/navigation-rail/overview
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

const navRailVariants = cva(
	"flex flex-col bg-surface text-on-surface h-full transition-[width] duration-300 ease-[cubic-bezier(0.2,0,0,1)] overflow-hidden",
	{
		variants: {
			expanded: {
				true: "w-70", // 280dp default
				false: "w-24", // 96dp as per M3 Expressive
			},
		},
		defaultVariants: {
			expanded: false,
		},
	}
);

export interface NavRailDestinationConfig {
	id: string;
	icon: React.ReactNode;
	label: string;
	badge?: string | number;
	hidden?: boolean;
	onClick?: () => void;
}

const MenuIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z" />
	</svg>
);

const MenuOpenIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M0 12V10H13V12H0ZM16.6 11L11.6 6L16.6 1L18 2.4L14.4 6L18 9.6L16.6 11ZM0 7V5H10V7H0ZM0 2V0H13V2H0Z" />
	</svg>
);

interface NavRailProps
	extends
		React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof navRailVariants> {
	destinations: NavRailDestinationConfig[];
	activeId?: string;
	header?: React.ReactNode;
	action?: React.ReactNode;
	showMenuButton?: boolean;
	onExpandedChange?: (expanded: boolean) => void;
}

export const NavigationRail = ({
	expanded: expandedProp,
	destinations,
	activeId,
	header,
	action,
	showMenuButton = true,
	onExpandedChange,
	className,
	...props
}: NavRailProps) => {
	const [internalExpanded, setInternalExpanded] = React.useState(false);
	const isExpanded = expandedProp ?? internalExpanded;

	const handleToggle = () => {
		const newState = !isExpanded;
		if (expandedProp == null) {
			setInternalExpanded(newState);
		}
		onExpandedChange?.(newState);
	};

	const visibleDestinations = destinations.filter((d) => !d.hidden).slice(0, 6);

	return (
		<nav
			className={cn(navRailVariants({ expanded: isExpanded, className }))}
			{...props}
		>
			{showMenuButton && (
				<div className="p-4 flex flex-col items-center">
					<button
						onClick={handleToggle}
						className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-on-surface/10 transition-colors cursor-pointer relative overflow-hidden"
						aria-label={
							isExpanded ? "Collapse navigation" : "Expand navigation"
						}
					>
						<div className="relative z-10">
							{isExpanded ? <MenuOpenIcon /> : <MenuIcon />}
						</div>
						<Ripple />
					</button>
				</div>
			)}
			{header && (
				<div className="px-4 py-2 flex flex-col items-center">{header}</div>
			)}
			{action && (
				<div className="px-4 py-2 flex flex-col items-center">{action}</div>
			)}
			<div className="flex-1 flex flex-col gap-1 py-4">
				{visibleDestinations.map((dest) => (
					<NavigationRailDestination
						key={dest.id}
						icon={dest.icon}
						label={dest.label}
						badge={dest.badge}
						active={dest.id === activeId}
						expanded={isExpanded}
						onClick={dest.onClick}
					/>
				))}
			</div>
		</nav>
	);
};

const navItemVariants = cva(
	"relative flex items-center group cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.2,0,1)] px-4 py-3 outline-none focus-visible:outline-2 focus-visible:outline-primary",
	{
		variants: {
			active: {
				true: "text-on-secondary-container",
				false: "text-on-surface-variant hover:text-on-surface",
			},
			expanded: {
				true: "flex-row gap-4 h-14 rounded-full mx-3",
				false: "flex-col gap-1 h-auto min-h-14 justify-center",
			},
		},
		defaultVariants: {
			active: false,
			expanded: false,
		},
	}
);

const activeIndicatorVariants = cva(
	"absolute bg-secondary-container rounded-full z-0 transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
	{
		variants: {
			active: {
				true: "opacity-100",
				false: "opacity-0 scale-x-50",
			},
			expanded: {
				true: "inset-0 h-full w-full",
				false: "inset-x-0 mx-auto top-0 h-8 w-14", // 56dp indicator in collapsed
			},
		},
	}
);

interface NavRailDestinationProps extends React.HTMLAttributes<HTMLDivElement> {
	icon: React.ReactNode;
	label: string;
	active?: boolean;
	expanded?: boolean;
	badge?: string | number;
}

export const NavigationRailDestination = ({
	icon,
	label,
	active = false,
	expanded = false,
	badge,
	className,
	...props
}: NavRailDestinationProps) => {
	return (
		<div
			className={cn(navItemVariants({ active, expanded, className }))}
			{...props}
			tabIndex={0}
			role="button"
		>
			<div className={cn(activeIndicatorVariants({ active, expanded }))} />

			<div className="relative z-10 flex items-center justify-center w-14 h-8">
				<div className="relative">
					{icon}
					{badge !== undefined && (
						<span className="absolute -top-1 -right-1 flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-error text-on-error text-[10px] font-medium border-2 border-surface">
							{badge}
						</span>
					)}
				</div>
			</div>

			<span
				className={cn(
					"relative z-10 transition-all duration-300 font-medium text-center",
					expanded
						? "text-base whitespace-nowrap overflow-hidden text-ellipsis"
						: "text-xs"
				)}
			>
				{label}
			</span>
			<Ripple />
		</div>
	);
};
