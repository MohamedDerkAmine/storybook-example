export interface ThemeScriptProps {
  storageKey?: string
  defaultTheme?: 'light' | 'dark' | 'system'
  attribute?: 'data-theme'
}

/**
 * Inline script that runs before hydration to set data-theme, avoiding FOUC.
 * Consumers should place <ThemeScript /> inside <head>. In Next.js App Router,
 * put it inside <head> of app/layout.tsx.
 */
export function ThemeScript({
  storageKey = 'mohamedd-ui-theme',
  defaultTheme = 'system',
  attribute = 'data-theme',
}: ThemeScriptProps) {
  const code = `(function(){try{var k=${JSON.stringify(storageKey)};var d=${JSON.stringify(defaultTheme)};var a=${JSON.stringify(attribute)};var s=localStorage.getItem(k)||d;var t=s==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):s;document.documentElement.setAttribute(a,t);}catch(e){}})();`
  return <script dangerouslySetInnerHTML={{ __html: code }} suppressHydrationWarning />
}
