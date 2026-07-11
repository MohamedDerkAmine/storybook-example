import { forwardRef, type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

export const badgeVariants = cva(
  cn(
    'inline-flex items-center gap-1 whitespace-nowrap',
    'rounded-[var(--radius-full)] font-medium',
    'transition-colors duration-[var(--duration-fast)]',
  ),
  {
    variants: {
      variant: {
        neutral: 'bg-[var(--color-surface-subtle)] text-[var(--color-fg-muted)]',
        accent: 'bg-[var(--color-blue-3)] text-[var(--color-blue-11)]',
        success: 'bg-[var(--color-green-9)]/12 text-[var(--color-success-fg)]',
        warning: 'bg-[var(--color-amber-9)]/15 text-[var(--color-warning-fg)]',
        danger: 'bg-[var(--color-red-9)]/12 text-[var(--color-danger-fg)]',
        outline: 'border border-[var(--color-border-strong)] text-[var(--color-fg-muted)]',
        solid: 'bg-[var(--color-fg)] text-[var(--color-bg)]',
      },
      size: {
        sm: 'h-5 px-2 text-[11px]',
        md: 'h-6 px-2.5 text-xs',
        lg: 'h-7 px-3 text-sm',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'md',
    },
  },
)

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props} />
  ),
)
Badge.displayName = 'Badge'
