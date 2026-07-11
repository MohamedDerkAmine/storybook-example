'use client'

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'
import { SpinnerIcon } from '../icons'

const iconButtonVariants = cva(
  cn(
    'inline-flex items-center justify-center shrink-0',
    'transition-[background-color,color,box-shadow,opacity]',
    'duration-[var(--duration-fast)] ease-[var(--ease-out)]',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]',
    "[&_svg:not([class*='size-'])]:size-4",
  ),
  {
    variants: {
      variant: {
        solid: 'bg-[var(--color-accent)] text-[var(--color-accent-fg)] hover:bg-[var(--color-accent-hover)]',
        outline:
          'border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-fg)] hover:bg-[var(--color-surface-hover)]',
        ghost: 'bg-transparent text-[var(--color-fg)] hover:bg-[var(--color-surface-hover)]',
        soft: 'bg-[var(--color-surface-subtle)] text-[var(--color-fg)] hover:bg-[var(--color-surface-hover)]',
      },
      size: {
        xs: 'size-6 rounded-[var(--radius-sm)]',
        sm: 'size-8 rounded-[var(--radius-sm)]',
        md: 'size-10 rounded-[var(--radius-md)]',
        lg: 'size-11 rounded-[var(--radius-md)]',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'md',
    },
  },
)

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean
  loading?: boolean
  'aria-label': string
  icon?: ReactNode
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, icon, children, disabled, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        aria-busy={loading || undefined}
        disabled={disabled || loading}
        className={cn(iconButtonVariants({ variant, size }), className)}
        {...props}
      >
        {loading ? <SpinnerIcon /> : (icon ?? children)}
      </Comp>
    )
  },
)
IconButton.displayName = 'IconButton'
