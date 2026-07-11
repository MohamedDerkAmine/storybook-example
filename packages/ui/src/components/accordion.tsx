'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '../icons'
import { cn } from '../lib/cn'

const AccordionRoot = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b border-[--color-border] last:border-b-0', className)}
    {...props}
  />
))
AccordionItem.displayName = 'Accordion.Item'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex flex-1 items-center justify-between gap-3 py-3 text-left text-sm font-medium',
        'text-[--color-fg] transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)]',
        'hover:text-[--color-fg]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg] rounded-md',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className={cn(
          'size-4 shrink-0 text-[--color-fg-muted]',
          'transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)]',
          'group-data-[state=open]:rotate-180',
        )}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = 'Accordion.Trigger'

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden text-sm text-[--color-fg-muted]',
      'data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up',
    )}
    {...props}
  >
    <div className={cn('pt-0 pb-3', className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = 'Accordion.Content'

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
})
