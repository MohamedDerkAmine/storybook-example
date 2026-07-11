'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
  disableTransitionOnChange?: boolean
  attribute?: 'data-theme'
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function readStoredTheme(storageKey: string, fallback: Theme): Theme {
  if (typeof window === 'undefined') return fallback
  try {
    const stored = window.localStorage.getItem(storageKey)
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
  } catch {
    /* localStorage unavailable */
  }
  return fallback
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'mohamedd-ui-theme',
  disableTransitionOnChange = true,
  attribute = 'data-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light')

  useEffect(() => {
    setThemeState(readStoredTheme(storageKey, defaultTheme))
  }, [defaultTheme, storageKey])

  useEffect(() => {
    const root = document.documentElement
    const active = theme === 'system' ? getSystemTheme() : theme

    if (disableTransitionOnChange) {
      const css = document.createElement('style')
      css.appendChild(document.createTextNode('*{transition:none!important}'))
      document.head.appendChild(css)
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => document.head.removeChild(css))
      })
    }

    root.setAttribute(attribute, active)
    setResolvedTheme(active)
  }, [theme, attribute, disableTransitionOnChange])

  useEffect(() => {
    if (theme !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = () => setResolvedTheme(media.matches ? 'dark' : 'light')
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [theme])

  const setTheme = useCallback(
    (next: Theme) => {
      try {
        window.localStorage.setItem(storageKey, next)
      } catch {
        /* localStorage unavailable */
      }
      setThemeState(next)
    },
    [storageKey],
  )

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>.')
  return ctx
}
