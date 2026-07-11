import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cn } from '../lib/cn'

export type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>

export const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        'text-sm font-medium text-[var(--color-fg)]',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
)
Label.displayName = 'Label'
