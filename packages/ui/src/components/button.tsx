'use client'

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'
import { SpinnerIcon } from '../icons'

export const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'font-medium select-none',
    'transition-[background-color,color,border-color,box-shadow,opacity]',
    'duration-[var(--duration-fast)] ease-[var(--ease-out)]',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]',
    "[&_svg:not([class*='size-'])]:size-4",
  ),
  {
    variants: {
      variant: {
        solid: cn(
          'bg-[var(--color-accent)] text-[var(--color-accent-fg)]',
          'hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent-hover)]',
        ),
        outline: cn(
          'border border-[var(--color-border-strong)] bg-[var(--color-surface)]',
          'text-[var(--color-fg)] hover:bg-[var(--color-surface-hover)]',
          'active:bg-[var(--color-surface-active)]',
        ),
        ghost: cn(
          'bg-transparent text-[var(--color-fg)]',
          'hover:bg-[var(--color-surface-hover)] active:bg-[var(--color-surface-active)]',
        ),
        soft: cn(
          'bg-[var(--color-surface-subtle)] text-[var(--color-fg)]',
          'hover:bg-[var(--color-surface-hover)] active:bg-[var(--color-surface-active)]',
        ),
        destructive: cn(
          'bg-[var(--color-danger)] text-white',
          'hover:brightness-95 active:brightness-90',
        ),
        link: cn(
          'bg-transparent text-[var(--color-accent)] underline-offset-4 hover:underline',
          'h-auto p-0',
        ),
      },
      size: {
        xs: 'h-7 rounded-[var(--radius-sm)] px-2.5 text-xs',
        sm: 'h-8 rounded-[var(--radius-sm)] px-3 text-sm',
        md: 'h-10 rounded-[var(--radius-md)] px-4 text-sm',
        lg: 'h-11 rounded-[var(--radius-md)] px-5 text-base',
        xl: 'h-12 rounded-[var(--radius-lg)] px-6 text-base',
      },
      block: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      block,
      asChild = false,
      loading = false,
      leadingIcon,
      trailingIcon,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        aria-busy={loading || undefined}
        disabled={disabled || loading}
        className={cn(buttonVariants({ variant, size, block }), className)}
        {...props}
      >
        {loading ? <SpinnerIcon /> : leadingIcon}
        {children}
        {!loading && trailingIcon}
      </Comp>
    )
  },
)
Button.displayName = 'Button'
