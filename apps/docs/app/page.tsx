import { COMPONENTS } from "../lib/component-list";

export default function Home() {
	return (
		<div className="flex flex-col gap-8">
			<div className="space-y-4">
				<h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					Getting Started
				</h1>
				<p className="text-lg text-zinc-600 dark:text-zinc-400">
					Welcome to the React Material Components documentation. This library
					provides a set of modern, accessible, and customizable UI components
					built with Tailwind CSS v4.
				</p>
			</div>

			<div className="prose prose-zinc dark:prose-invert max-w-none">
				<div>
					<h2 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
						Installation
					</h2>

					<div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
						<code className="text-sm">
							npm install @devadeboye/react-material-components
						</code>
					</div>
				</div>

				<div>
					<h2 className="text-2xl font-semibold mt-8 mb-4 text-zinc-800 dark:text-zinc-200">
						Features
					</h2>
					<ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
						<li>Zero dependencies (other than Peer Dependencies)</li>
						<li>Built with Tailwind CSS v4</li>
						<li>Dark mode support out of the box</li>
						<li>Fully typed with TypeScript</li>
						<li>Follows Material Design 3 guidelines</li>
					</ul>
				</div>

				<div>
					<h2>RoadMap</h2>
					<p>
						The purpose of this project is to create react components for
						material design 3. Here are the list of components planned and the
						ones already created.
					</p>

					<div>
						{COMPONENTS.map((component) => (
							<div key={component.label} className="flex items-center gap-2">
								<input type="checkbox" checked={component.checked} />
								<label>{component.label}</label>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
