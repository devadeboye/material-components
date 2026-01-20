"use client";

/**
 * Navigation rails provide access to primary destinations in apps.
 * https://m3.material.io/components/navigation-rail/overview
 */

import React from "react";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import {
	NavRailProps,
	NavRailDestinationConfig,
} from "../../../types/navigation-rail";
export type { NavRailProps, NavRailDestinationConfig };
import { NavigationRailDestination } from "./navigation-rail-destination";
import { cn } from "../../../lib/utils/helpers";
import { MenuButton } from "./menu-button";
import { Action } from "./action";

export const NavigationRail = ({
	expanded: expandedProp,
	destinations,
	activeId,
	showFab = false,
	fabConfig,
	showMenuButton = true,
	onExpandedChange,
	className,
	alignment = "center",
	backgroundColor = "bg-surface",
	textColor = "text-on-surface hover:text-on-surface",
	activeBgColor,
	activeTextColor,
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

	// Handle backdrop click to close on mobile
	const handleBackdropClick = () => {
		if (expandedProp == null) {
			setInternalExpanded(false);
		}
		onExpandedChange?.(false);
	};

	const navRailVariants = cva(
		"flex flex-col transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] z-50 scrollbar-none py-4",
		{
			variants: {
				expanded: {
					true: `fixed ${backgroundColor} inset-y-0 left-0 w-72 shadow-2xl h-dvh md:relative md:w-80 md:shadow-none`, // Mobile: Fixed Drawer. Desktop: Relative Rail.
					false: `w-fit h-auto bg-transparent absolute md:relative md:w-24 md:${backgroundColor} md:h-dvh`, // Mobile: Just button. Desktop: Standard Rail.
				},
			},
			defaultVariants: {
				expanded: false,
			},
		}
	);

	return (
		<>
			{/* Mobile Backdrop */}
			{isExpanded && (
				<div
					className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300"
					onClick={handleBackdropClick}
					aria-hidden="true"
				/>
			)}

			<nav
				className={cn(navRailVariants({ expanded: isExpanded, className }))}
				{...props}
			>
				<div className="flex flex-col gap-2">
					<MenuButton
						isExpanded={isExpanded}
						showMenuButton={showMenuButton}
						handleToggle={handleToggle}
					/>

					{/* FAB - Hidden on mobile collapsed */}
					{showFab && fabConfig && (
						<Action isExpanded={isExpanded} fabConfig={fabConfig} />
					)}
				</div>

				{/* destinations - Hidden on mobile collapsed */}
				<div
					className={cn(
						`flex-1 flex-col gap-1 py-4 ${clsx({ "justify-center": alignment === "center" })}`,
						!isExpanded ? "hidden md:flex" : "flex"
					)}
				>
					<div>
						{visibleDestinations.map((dest) => (
							<NavigationRailDestination
								key={dest.id}
								icon={dest.icon}
								label={dest.label}
								badge={dest.badge}
								active={dest.id === activeId}
								expanded={isExpanded}
								onClick={dest.onClick}
								href={dest.href}
							/>
						))}
					</div>
				</div>
			</nav>
		</>
	);
};
