# Contributing

Thanks for taking the time to contribute.

## Prerequisites

- **Node** 22 LTS (`.nvmrc` pins the version)
- **pnpm** 9.15+

```bash
corepack enable
corepack prepare pnpm@9.15.0 --activate
pnpm install
```

## Repository layout

```
apps/
  playground/          Next.js 15 sandbox that consumes @mohamedd/ui via workspace:*
packages/
  ui/                  → published as @mohamedd/ui (contains Storybook, tests, tokens)
  tsconfig/            → shared internal TypeScript configs
  eslint-config/       → shared internal ESLint config
```

Turborepo drives every task. All commands can be run from the repo root.

## Common commands

```bash
pnpm dev                # runs playground + storybook in parallel via turbo
pnpm build              # builds every package (ui: types + ESM + CJS + styles.css)
pnpm lint               # lints everything
pnpm typecheck          # tsc --noEmit across the graph
pnpm test               # vitest across packages
pnpm storybook          # storybook dev server on port 6006
pnpm build:storybook    # static build for Chromatic
```

To run a task in a single workspace, pass a filter:

```bash
pnpm --filter @mohamedd/ui test
pnpm --filter @mohamedd/ui-playground dev
```

## Adding a component

1. Add the source under `packages/ui/src/components/<name>.tsx`.
2. Export it from `packages/ui/src/index.ts` (grouped by family).
3. Add a story next to it: `<name>.stories.tsx`.
4. Add a test if there is meaningful behavior: `<name>.test.tsx`.
5. Run `pnpm --filter @mohamedd/ui storybook` and eyeball light + dark.

### Component API rules

- Wrap style variance with **cva**; merge caller `className` with **tailwind-merge** (via `cn`).
- Forward refs.
- Support `asChild` on any component whose behavior is composable (uses `@radix-ui/react-slot`).
- Spread `className` + `data-*` + `aria-*` — never swallow user-provided props.
- Add `'use client'` **only** on files that need it (state, effects, event handlers, Radix primitives with interactive state).

## Changesets

Every user-facing change must ship a changeset:

```bash
pnpm changeset
```

Pick the packages that changed and the semver bump (patch / minor / major), write a one-liner that will land in the changelog, and commit the generated file under `.changeset/`.

## Style

- Prettier + `prettier-plugin-tailwindcss` — run `pnpm format` before pushing.
- ESLint flat config; strict TypeScript (`noUncheckedIndexedAccess`, `verbatimModuleSyntax`).
- Named exports only from the package barrel.
