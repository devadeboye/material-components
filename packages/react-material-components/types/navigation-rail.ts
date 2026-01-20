import { type FABProps } from "../src/components/fabs/fab";

export interface NavRailVariants {
	expanded?: boolean | null;
}

export interface NavRailDestinationConfig {
	id: string;
	icon: React.ReactNode;
	label: string;
	badge?: string | number;
	hidden?: boolean;
	onClick?: () => void;
	href?: string;
}

export interface FabConfig {
	icon: React.ReactNode;
	label: string;
	onClick?: () => void;
	color?: FABProps["color"];
	variant?: FABProps["variant"];
	className?: string;
}

export interface NavRailProps
	extends React.HTMLAttributes<HTMLDivElement>, NavRailVariants {
	destinations: NavRailDestinationConfig[];
	activeId?: string;
	showMenuButton?: boolean;
	onExpandedChange?: (expanded: boolean) => void;
	/** Whether to show a FAB at the top of the rail */
	showFab?: boolean;
	/** Configuration for the FAB/ExtendedFAB */
	fabConfig?: FabConfig;
	alignment?: "center" | "top";
	backgroundColor?: string;
	textColor?: string;
	activeBgColor?: string;
	activeTextColor?: string;
}

export interface NavRailDestinationProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	icon: React.ReactNode;
	label: string;
	active?: boolean;
	expanded?: boolean;
	badge?: string | number;
	activeBgColor?: string;
	activeTextColor?: string;
}
