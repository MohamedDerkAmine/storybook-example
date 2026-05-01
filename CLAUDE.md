# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run storybook` — start Storybook dev server on port 6006
- `npm run build-storybook` — build static Storybook for deployment
- `npm run dev` — start the Vite dev server (the app itself)
- `npm run build` — TypeScript check + Vite production build
- `npm run lint` — ESLint

## Architecture

This is a **React design system** built with **Material UI v9** and documented with **Storybook v10**.

### Stack

- **Vite** — build tool and dev server
- **React 19 + TypeScript** — UI framework
- **MUI v9 + Emotion** — component library and CSS-in-JS engine
- **Storybook 10** — component development, documentation, and visual testing

### Design System Structure

The design system ships in **two coexisting versions** (v1 and v2). v1 is the legacy set; v2 is the redesign. Both are exported so consumers can migrate file-by-file.

```
src/
  theme/
    v1/theme.ts                 — v1 theme (legacy MUI-style, blue, radius 8)
    v2/tokens.ts                — shared raw tokens (colors, spacing, radius)
    v2/lightTheme.ts            — v2 light mode
    v2/darkTheme.ts             — v2 dark mode
    index.ts                    — barrel: v1Theme, v2LightTheme, v2DarkTheme
  components/
    v1/                         — original Button, InfoCard, TextInput
      Button/Button.tsx
      Button/Button.stories.tsx — title: "DesignSystem v1/Button"
      ...
      index.ts
    v2/                         — new component set
      Stack/  Heading/  Eyebrow/  Button/  Badge/  Hero/
      index.ts                  — title: "DesignSystem v2/<Component>"
    index.ts                    — `import { v1, v2 } from './components'`
.storybook/
  main.ts                       — Storybook config
  preview.tsx                   — theme global toolbar + ThemeProvider decorator
```

### Key Patterns

**Wrap MUI, don't use it directly.** Each design system component wraps an MUI component, exposing only the props the team allows via `Pick<>` or a hand-written interface. Use `ComponentProps<typeof MuiComponent>` to extract prop types when picking from MUI directly.

**Two-tier tokens (v2).** `src/theme/v2/tokens.ts` holds raw primitives (colors, spacing, radius). `lightTheme.ts` / `darkTheme.ts` map those primitives to semantic roles. Both themes share structure; only color assignments differ.

**Storybook theme switching.** `.storybook/preview.tsx` registers a `theme` global with a top-bar dropdown (`v1`, `v2-light`, `v2-dark`). Every story renders against the selected theme. Do not import a theme directly inside a story file.

**v1 vs v2 vocabulary.** v2 deliberately renames props (`color`→`tone`, `variant: 'contained'`→`variant: 'solid'`, `label`→`children`). This is the point of versioning — v1 keeps its API; v2 gets the cleaner one.

**Story structure:** Each story file exports a `meta` (default export) with `title`, `component`, `tags: ['autodocs']`, `argTypes`, and `args`. Named exports are individual stories. Use `render()` for custom layouts. For interactive components, ALSO add `play` functions using `userEvent` and `expect` from `storybook/test` to assert behavior (clicks, keyboard, disabled/loading guards, role-based queries).

## Storybook MCP

When working on components, use the `my-project-sb-mcp` MCP tools (`list-all-documentation`, `get-documentation`, `run-story-tests`) to check real component props before writing or changing code. Don't guess prop names — query the MCP first. Requires `npm run storybook` to be running.
