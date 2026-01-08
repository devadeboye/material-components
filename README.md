# Material Components Monorepo

Welcome to the **React Material Components** project! This is a monorepo containing our shared UI library and the documentation site. We use [TurboRepo](https://turbo.build/) to make our build system blazing fast and [pnpm](https://pnpm.io/) for efficient package management.

## Getting Started

Ready to dive in? Let's get your development environment set up in minutes.

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **pnpm** (we recommend version 9)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/devadeboye/material-components.git

cd material-components
pnpm install
```

### Running the App

To start the development server for all apps and packages:

```bash
pnpm dev
```

This command will spin up:
- The **Documentation App** (usually at `http://localhost:3000`)
- The **UI Package** in watch mode
- **Storybook** (typically at `http://localhost:6006`)

## Project Structure

Here's a quick map of the territory:

- **`apps/docs`**: The Next.js documentation site. This is where we showcase how to use our components.
- **`packages/ui`**: The core UI library. This is where the magic happens! All reusable components live here.
- **`packages/ui/.storybook`**: Our component playground.

## How to Contribute

We love contributions! Whether you're fixing a bug, adding a new component, or improving docs, here's how to help:

1.  **Pick a Task**: Find something you want to work on.
2.  **Create a Branch**: `git checkout -b feature/amazing-new-button`
3.  **Make Changes**:
    *   If editing components, working in `packages/ui` is your best bet.
    *   Use `pnpm run storybook` inside `packages/ui` to verify your components look great in isolation.
4.  **Commit & Push**: We use conventional commits, so keep your messages clear (e.g., `feat: add sparkle effect to button`).
5.  **Open a PR**: Submit your pull request, and we'll review it together!

## Useful Commands

- `pnpm build`: Build all packages and apps.
- `pnpm lint`: Run the linter to keep code style consistent.
- `pnpm clean`: Clean up `node_modules` and compiled assets if things get weird.

Happy coding!
