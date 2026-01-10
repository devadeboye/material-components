import type { Meta, StoryObj } from "@storybook/react";
import { NavigationRail, type NavRailDestinationConfig } from ".";
import { useState } from "react";

const meta: Meta<typeof NavigationRail> = {
	title: "Components/NavigationRail",
	component: NavigationRail,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;

const HomeIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
	</svg>
);

const SearchIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
	</svg>
);

const InboxIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.44 2s2.75-.81 3.44-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" />
	</svg>
);

const SettingsIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
	</svg>
);

const demoDestinations: NavRailDestinationConfig[] = [
	{ id: "home", icon: <HomeIcon />, label: "Home" },
	{ id: "search", icon: <SearchIcon />, label: "Search" },
	{ id: "inbox", icon: <InboxIcon />, label: "Inbox", badge: 3 },
	{ id: "settings", icon: <SettingsIcon />, label: "Settings" },
];

export const Interactive: StoryObj<typeof NavigationRail> = {
	render: () => {
		const [active, setActive] = useState("home");

		const destinationsWithClick = demoDestinations.map((d) => ({
			...d,
			onClick: () => setActive(d.id),
		}));

		return (
			<div className="flex h-screen bg-surface-container-low">
				<NavigationRail destinations={destinationsWithClick} activeId={active} />
				<main className="flex-1 p-8">
					<h1 className="text-2xl font-bold">Content Area</h1>
					<p className="mt-4 text-on-surface-variant">The menu button is built-in and state-aware.</p>
				</main>
			</div>
		);
	},
};

export const Collapsed: StoryObj<typeof NavigationRail> = {
	args: {
		expanded: false,
		destinations: demoDestinations,
		activeId: "home",
	},
};

export const Expanded: StoryObj<typeof NavigationRail> = {
	args: {
		expanded: true,
		destinations: demoDestinations,
		activeId: "home",
	},
};

export const HiddenSlots: StoryObj<typeof NavigationRail> = {
	args: {
		expanded: false,
		destinations: [
			...demoDestinations,
			{ id: "hidden", icon: <SettingsIcon />, label: "Hidden", hidden: true },
		],
		activeId: "home",
	},
};

export const NoMenuButton: StoryObj<typeof NavigationRail> = {
	args: {
		showMenuButton: false,
		destinations: demoDestinations,
		activeId: "home",
	},
};
