import { ExtendedFAB, ExtendedFABProps } from "../fabs/extended-fab";
import { FAB } from "../fabs/fab";
import { cn } from "../../../lib/utils/helpers";
import { clsx } from "clsx";
import { FabConfig } from "../../../types/navigation-rail";

interface ActionProps {
	isExpanded: boolean;
	fabConfig: FabConfig;
}

export const Action = ({ isExpanded, fabConfig }: ActionProps) => {
	return (
		<div
			className={cn(
				`px-4 py-2 flex-col ${clsx({ "items-center": !isExpanded })} min-h-14 transition-all duration-300`,
				!isExpanded ? "hidden md:flex" : "flex"
			)}
		>
			{isExpanded ? (
				<ExtendedFAB
					icon={fabConfig.icon}
					label={fabConfig.label}
					onClick={fabConfig.onClick}
					color={fabConfig.color as ExtendedFABProps["color"]}
					variant={fabConfig.variant}
					size={"small"}
					className={fabConfig.className}
				/>
			) : (
				<FAB
					size="regular" // Standard 56dp container
					color={fabConfig.color}
					variant={fabConfig.variant}
					onClick={fabConfig.onClick}
					aria-label={fabConfig.label}
					className={fabConfig.className}
				>
					{fabConfig.icon}
				</FAB>
			)}
		</div>
	);
};
