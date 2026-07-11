import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export type CodeProps = HTMLAttributes<HTMLElement>

export const Code = forwardRef<HTMLElement, CodeProps>(({ className, ...props }, ref) => (
  <code
    ref={ref}
    className={cn(
      'inline-block rounded-[var(--radius-xs)] border border-[var(--color-border)]',
      'bg-[var(--color-surface-subtle)] px-1.5 py-0.5',
      'font-[family-name:var(--font-mono)] text-[0.875em] text-[var(--color-fg)]',
      className,
    )}
    {...props}
  />
))
Code.displayName = 'Code'
