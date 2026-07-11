'use client'

import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '../lib/cn'

export const TooltipProvider = TooltipPrimitive.Provider

const Root = TooltipPrimitive.Root
const Trigger = TooltipPrimitive.Trigger

const Content = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 rounded-[var(--radius-sm)] bg-[var(--color-slate-12)]',
        'px-2 py-1 text-xs text-[var(--color-slate-1)] shadow-[var(--shadow-md)]',
        'transition-[transform,opacity] duration-[var(--duration-fast)] ease-[var(--ease-out)]',
        'data-[state=delayed-open]:animate-in data-[state=closed]:animate-out',
        'data-[state=delayed-open]:fade-in-0 data-[state=closed]:fade-out-0',
        'data-[state=delayed-open]:zoom-in-95 data-[state=closed]:zoom-out-95',
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
Content.displayName = 'TooltipContent'

export const Tooltip = Object.assign(Root, { Trigger, Content })
