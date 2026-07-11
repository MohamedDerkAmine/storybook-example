'use client'

import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDownIcon } from '../icons'
import { cn } from '../lib/cn'

const Root = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn('relative z-10 flex flex-1 items-center justify-center', className)}
    {...props}
  >
    {children}
    <Viewport />
  </NavigationMenuPrimitive.Root>
))
Root.displayName = 'NavigationMenu'

const List = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn('group flex flex-1 list-none items-center justify-center gap-1', className)}
    {...props}
  />
))
List.displayName = 'NavigationMenu.List'

const Item = NavigationMenuPrimitive.Item

const triggerStyle = cva(
  cn(
    'inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium',
    'text-[--color-fg-muted] hover:text-[--color-fg] hover:bg-[--color-surface-hover]',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]',
    'transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)]',
    'data-[state=open]:bg-[--color-surface-hover] data-[state=open]:text-[--color-fg]',
    'data-[active]:bg-[--color-surface-hover]',
    'disabled:pointer-events-none disabled:opacity-50',
  ),
)

const Trigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(triggerStyle(), 'group', className)}
    {...props}
  >
    {children}
    <ChevronDownIcon
      aria-hidden="true"
      className="size-3.5 transition-transform duration-[var(--duration-base)] group-data-[state=open]:rotate-180"
    />
  </NavigationMenuPrimitive.Trigger>
))
Trigger.displayName = 'NavigationMenu.Trigger'

const Content = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'left-0 top-0 w-full p-4 md:absolute md:w-auto',
      'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out',
      'data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out',
      className,
    )}
    {...props}
  />
))
Content.displayName = 'NavigationMenu.Content'

const Link = NavigationMenuPrimitive.Link

const Viewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={cn(
        'origin-top-center relative mt-2 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border border-[--color-border] bg-[--color-surface] shadow-[var(--shadow-md)] md:w-[--radix-navigation-menu-viewport-width]',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        className,
      )}
      {...props}
    />
  </div>
))
Viewport.displayName = 'NavigationMenu.Viewport'

export const NavigationMenu = Object.assign(Root, {
  List,
  Item,
  Trigger,
  Content,
  Link,
  triggerStyle,
})
