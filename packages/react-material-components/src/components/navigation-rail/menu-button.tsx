import { MenuIcon } from "../../../lib/icons/menu-icon";
import { MenuOpenIcon } from "../../../lib/icons/menu-open-icon";
import { Ripple } from "../ripple";
import { clsx } from "clsx";

interface MenuButtonProps {
	isExpanded: boolean;
	showMenuButton?: boolean;
	handleToggle: () => void;
}

export const MenuButton = ({
	isExpanded,
	showMenuButton = true,
	handleToggle,
}: MenuButtonProps) => {
	return (
		<div
			className={`p-4 flex flex-col ${clsx({ "items-center": !isExpanded, "block md:hidden": !showMenuButton })}`}
		>
			<button
				onClick={handleToggle}
				className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-on-surface/10 transition-colors cursor-pointer relative overflow-hidden"
				aria-label={isExpanded ? "Collapse navigation" : "Expand navigation"}
			>
				<div className="relative z-10">
					{isExpanded ? <MenuOpenIcon /> : <MenuIcon />}
				</div>
				<Ripple />
			</button>
		</div>
	);
};
