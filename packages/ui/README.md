# @mohamedd/ui

A minimalist React design system. Radix primitives, Tailwind-authored, ships a compiled CSS file.

## Install

```bash
npm install @mohamedd/ui
```

Peer deps: `react ^18 || ^19`, `react-dom ^18 || ^19`.

## Setup

Import the compiled stylesheet once at the root of your app:

```tsx
import '@mohamedd/ui/styles.css'
```

Wrap your app with `ThemeProvider` and add `ThemeScript` to `<head>` to avoid a light-mode flash on load:

**Next.js App Router (`app/layout.tsx`)**

```tsx
import { ThemeProvider, ThemeScript } from '@mohamedd/ui'
import '@mohamedd/ui/styles.css'

export default function RootLayout({ children }) {
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

**Vite / plain React**

```tsx
import { ThemeProvider } from '@mohamedd/ui'
import '@mohamedd/ui/styles.css'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
```

## Fonts (optional but recommended)

The tokens use **Geist** as the default sans and mono. Install once:

```bash
# Next.js
npm install geist
# Vite / any framework
npm install @fontsource/geist-sans @fontsource/geist-mono
```

Then import in your entry file. Without this, the stack falls back to `system-ui` cleanly.

## Theming

`ThemeProvider` sets a `data-theme` attribute on `<html>`. Everything is themed via CSS custom properties — no re-renders on theme switch.

```tsx
import { useTheme } from '@mohamedd/ui'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle</button>
}
```

## Components

See the [Storybook](https://github.com/MohamedDerkAmine/ui#storybook) for live examples and props.

- **Foundations**: `Container`, `Stack`, `Separator`, `Text`, `Kbd`, `Code`
- **Actions**: `Button`, `IconButton`
- **Forms**: `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `Label`, `Field`
- **Feedback**: `Toast` (`Toaster` + `toast()`), `Alert`, `Spinner`, `Badge`
- **Overlays**: `Dialog`, `Popover`, `Tooltip`, `DropdownMenu`
- **Nav & Data**: `Tabs`, `Avatar`, `Card`, `Skeleton`

## License

[MIT](../../LICENSE) © Mohamed D.
