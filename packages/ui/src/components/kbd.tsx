import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export type KbdProps = HTMLAttributes<HTMLElement>

export const Kbd = forwardRef<HTMLElement, KbdProps>(({ className, ...props }, ref) => (
  <kbd
    ref={ref}
    className={cn(
      'inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-[var(--radius-xs)]',
      'border border-[var(--color-border)] bg-[var(--color-surface-subtle)] px-1.5',
      'font-[family-name:var(--font-mono)] text-[11px] font-medium text-[var(--color-fg-muted)]',
      'shadow-[inset_0_-1px_0_0_var(--color-border)]',
      className,
    )}
    {...props}
  />
))
Kbd.displayName = 'Kbd'
