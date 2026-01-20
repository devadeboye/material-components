import { cva } from "class-variance-authority";
import { Ripple } from "../ripple";
import { NavRailDestinationProps } from "../../../types/navigation-rail";
import {cn} from "../../../lib/utils/helpers";

const navItemVariants = cva(
	"relative flex items-center group cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.2,0,1)] px-4 py-3 outline-none focus-visible:outline-2 focus-visible:outline-primary w-fit",
	{
		variants: {
			expanded: {
				true: "flex-row gap-4 h-14 rounded-full mx-3",
				false: "flex-col gap-1 h-auto min-h-14 justify-center",
			},
		},
		defaultVariants: {
			expanded: false,
		},
	}
);

export const NavigationRailDestination = ({
	icon,
	label,
	active = false,
	expanded = false,
	badge,
	activeBgColor = "bg-secondary-container",
	activeTextColor = "text-on-secondary-container",
	className,
	href,
	...props
}: NavRailDestinationProps) => {
	const Component = href ? "a" : "div";
	const activeIndicatorVariants = cva(
		"absolute rounded-full z-0 transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]" +
			` ${activeBgColor} ${activeTextColor}`,
		{
			variants: {
				active: {
					true: "opacity-100",
					false: "opacity-0 scale-x-50",
				},
				expanded: {
					true: "inset-0 h-14 px-4 w-full",
					false: "inset-x-0 mx-auto top-3 h-8 w-14", // 56dp indicator in collapsed
				},
			},
		}
	);

	return (
		<Component
			className={cn(navItemVariants({ expanded, className }), "no-underline")}
			href={href}
			{...(props as any)}
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
		</Component>
	);
};
