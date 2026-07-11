'use client'

import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cn } from '../lib/cn'

const Root = PopoverPrimitive.Root
const Trigger = PopoverPrimitive.Trigger
const Anchor = PopoverPrimitive.Anchor

const Content = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 6, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-72 rounded-[var(--radius-md)] border border-[var(--color-border)]',
        'bg-[var(--color-surface)] p-4 text-sm text-[var(--color-fg)]',
        'shadow-[var(--shadow-lg)] outline-none',
        'transition-[transform,opacity] duration-[var(--duration-base)] ease-[var(--ease-out)]',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
        'data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
        'data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2',
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
Content.displayName = 'PopoverContent'

export const Popover = Object.assign(Root, { Trigger, Anchor, Content })
