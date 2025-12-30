import Link from "next/link";
import { ReactNode } from "react";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 p-6 hidden md:block fixed h-full overflow-y-auto">
        <nav className="flex flex-col gap-4">
          <Link href="/" className="font-bold text-xl mb-4 block">Material UI</Link>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Components</span>
            <Link href="/docs/button" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Button</Link>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-8 max-w-4xl mx-auto md:ml-64">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          {children}
        </div>
      </main>
    </div>
  );
}
