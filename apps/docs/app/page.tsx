import { Button } from "@material/ui";

export default function Home() {
  return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-zinc-50 p-8 dark:bg-zinc-950">
			<div className="text-center">
				<h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					Material Components
				</h1>
				<p className="mt-2 text-zinc-600 dark:text-zinc-400">
					A modern, zero-dependency implementation styling with Tailwind v4.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<section className="flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
					<h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
						Filled
					</h2>
					<div className="flex flex-wrap gap-4">
						<Button variant="filled">Filled</Button>
						<Button variant="filled" disabled>
							Disabled
						</Button>
					</div>
				</section>

				<section className="flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
					<h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
						Tonal
					</h2>
					<div className="flex flex-wrap gap-4">
						<Button variant="tonal">Tonal</Button>
						<Button variant="tonal" disabled>
							Disabled
						</Button>
					</div>
				</section>

				<section className="flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
					<h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
						Outlined
					</h2>
					<div className="flex flex-wrap gap-4">
						<Button variant="outlined">Outlined</Button>
						<Button variant="outlined" disabled>
							Disabled
						</Button>
					</div>
				</section>

				<section className="flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
					<h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
						Text
					</h2>
					<div className="flex flex-wrap gap-4">
						<Button variant="text">Text Button</Button>
						<Button variant="text" disabled>
							Disabled
						</Button>
					</div>
				</section>
			</div>
		</div>
	);
}
