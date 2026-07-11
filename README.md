# @mohamedd/ui

A minimalist React design system. Ships as a single npm package with a compiled CSS stylesheet — no Tailwind required in your app.

- **24 components** covering Foundations, Actions, Forms, Feedback, Overlays, Nav, and Data.
- **Light + dark** built-in, themed via CSS custom properties on `[data-theme]`.
- **Accessible** — every interactive component is built on [Radix UI](https://www.radix-ui.com/) primitives.
- **Server Component friendly** — presentational components render on the server; only interactive ones cross the client boundary.
- **Tiny** — one CSS file, tree-shakeable exports, ESM + CJS output.

## Install

```bash
npm install @mohamedd/ui
```

Peer deps: `react ^18 || ^19`, `react-dom ^18 || ^19`.

## Use

```tsx
import '@mohamedd/ui/styles.css'
import { Button, ThemeProvider } from '@mohamedd/ui'

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Button>Click me</Button>
    </ThemeProvider>
  )
}
```

### No-flash theme in SSR (Next.js App Router)

```tsx
// app/layout.tsx
import { ThemeProvider, ThemeScript } from '@mohamedd/ui'
import '@mohamedd/ui/styles.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
```

### Fonts

Fonts are **not bundled**. The default token stack falls back through Geist → system:

```
'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif
```

To get the exact aesthetic, install Geist:

```bash
npm install geist
```

```tsx
import { GeistSans, GeistMono } from 'geist/font'
// then use GeistSans.className / GeistMono.className on <html>
```

## Components

| Family      | Components                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| Foundations | `Container`, `Stack`, `Separator`, `Text`, `Kbd`, `Code`, `AspectRatio`                                             |
| Actions     | `Button`, `IconButton`, `Toggle`, `ToggleGroup`                                                                     |
| Forms       | `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `RadioGroup`, `Slider`, `Label`, `Field`                       |
| Feedback    | `Alert`, `Badge`, `Spinner`, `Skeleton`, `Progress`, `EmptyState`, `Toaster` + `toast()`                            |
| Overlays    | `Dialog`, `AlertDialog`, `Sheet`, `Popover`, `Tooltip`, `HoverCard`, `DropdownMenu`, `ContextMenu`, `Command`       |
| Nav / Data  | `Tabs`, `Avatar`, `Card`, `Accordion`, `Collapsible`, `Breadcrumbs`, `Pagination`, `NavigationMenu`, `Table`, `ScrollArea` |

All interactive components accept `asChild`, forward refs, spread `className` + `data-*`, and expose their internal parts via compound access (e.g. `<Dialog.Content>`).

## Repository layout

```
apps/
  playground/          Next.js 15 sandbox that consumes the built library
packages/
  ui/                  → published as @mohamedd/ui (contains Storybook)
  tsconfig/            → shared internal TypeScript configs
  eslint-config/       → shared internal ESLint config
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Publishing is documented in [PUBLISHING.md](./PUBLISHING.md).

## License

[MIT](./LICENSE) © Mohamed D.
