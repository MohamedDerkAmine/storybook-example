'use client'

import * as React from 'react'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import type { VariantProps } from 'class-variance-authority'
import { toggleVariants } from './toggle'
import { cn } from '../lib/cn'

type ToggleGroupContextValue = VariantProps<typeof toggleVariants>
const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
  variant: 'default',
  size: 'md',
})

type ToggleGroupRootProps = (
  | React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
) &
  VariantProps<typeof toggleVariants>

const ToggleGroupRoot = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupRootProps
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn('inline-flex items-center gap-1', className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))
ToggleGroupRoot.displayName = 'ToggleGroup'

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => {
  const ctx = React.useContext(ToggleGroupContext)
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({ variant: variant ?? ctx.variant, size: size ?? ctx.size }),
        className,
      )}
      {...props}
    />
  )
})
ToggleGroupItem.displayName = 'ToggleGroup.Item'

export const ToggleGroup = Object.assign(ToggleGroupRoot, { Item: ToggleGroupItem })
