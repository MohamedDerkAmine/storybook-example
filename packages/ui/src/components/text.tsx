import { forwardRef, type HTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const textVariants = cva('text-[var(--color-fg)]', {
  variants: {
    size: {
      xs: 'text-xs leading-4',
      sm: 'text-sm leading-5',
      base: 'text-base leading-6',
      lg: 'text-lg leading-7',
      xl: 'text-xl leading-7',
      '2xl': 'text-2xl leading-8 tracking-tight',
      '3xl': 'text-3xl leading-9 tracking-tight',
      '4xl': 'text-4xl leading-10 tracking-tight',
      '5xl': 'text-5xl leading-none tracking-tighter',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    tone: {
      default: 'text-[var(--color-fg)]',
      muted: 'text-[var(--color-fg-muted)]',
      subtle: 'text-[var(--color-fg-subtle)]',
      accent: 'text-[var(--color-accent)]',
      danger: 'text-[var(--color-danger-fg)]',
      success: 'text-[var(--color-success-fg)]',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    truncate: {
      true: 'truncate',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    tone: 'default',
  },
})

export interface TextProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'strong' | 'em'
  asChild?: boolean
}

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    { className, as: Tag = 'p', asChild = false, size, weight, tone, align, truncate, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : Tag
    return (
      // @ts-expect-error — polymorphic ref
      <Comp
        ref={ref}
        className={cn(textVariants({ size, weight, tone, align, truncate }), className)}
        {...props}
      />
    )
  },
)
Text.displayName = 'Text'
