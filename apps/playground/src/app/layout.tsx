import type { Metadata } from 'next'
import { ThemeProvider, ThemeScript } from '@mohamedd/ui'
import '@mohamedd/ui/styles.css'
import './globals.css'

export const metadata: Metadata = {
  title: '@mohamedd/ui — playground',
  description: 'Smoke-test surface for the @mohamedd/ui component library.',
}

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
