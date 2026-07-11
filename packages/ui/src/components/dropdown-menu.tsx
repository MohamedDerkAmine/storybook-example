'use client'

import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from '../icons'
import { cn } from '../lib/cn'

const Root = DropdownPrimitive.Root
const Trigger = DropdownPrimitive.Trigger
const Group = DropdownPrimitive.Group
const Portal = DropdownPrimitive.Portal
const Sub = DropdownPrimitive.Sub
const RadioGroup = DropdownPrimitive.RadioGroup

const menuItemBase = cn(
  'relative flex cursor-default select-none items-center gap-2 rounded-[var(--radius-sm)]',
  'px-2 py-1.5 text-sm outline-none',
  'focus:bg-[var(--color-surface-hover)] focus:text-[var(--color-fg)]',
  'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
)

const SubTrigger = forwardRef<
  ElementRef<typeof DropdownPrimitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger>
>(({ className, children, ...props }, ref) => (
  <DropdownPrimitive.SubTrigger
    ref={ref}
    className={cn(menuItemBase, 'data-[state=open]:bg-[var(--color-surface-hover)]', className)}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto size-4 text-[var(--color-fg-muted)]" />
  </DropdownPrimitive.SubTrigger>
))
SubTrigger.displayName = 'DropdownMenuSubTrigger'

const SubContent = forwardRef<
  ElementRef<typeof DropdownPrimitive.SubContent>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-[var(--radius-md)]',
      'border border-[var(--color-border)] bg-[var(--color-surface)] p-1',
      'shadow-[var(--shadow-lg)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
      'data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95',
      className,
    )}
    {...props}
  />
))
SubContent.displayName = 'DropdownMenuSubContent'

const Content = forwardRef<
  ElementRef<typeof DropdownPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <Portal>
    <DropdownPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[10rem] overflow-hidden rounded-[var(--radius-md)]',
        'border border-[var(--color-border)] bg-[var(--color-surface)] p-1',
        'shadow-[var(--shadow-lg)]',
        'transition-[transform,opacity] duration-[var(--duration-fast)] ease-[var(--ease-out)]',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
        'data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95',
        className,
      )}
      {...props}
    />
  </Portal>
))
Content.displayName = 'DropdownMenuContent'

const Item = forwardRef<
  ElementRef<typeof DropdownPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Item> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <DropdownPrimitive.Item
    ref={ref}
    className={cn(menuItemBase, inset && 'pl-8', className)}
    {...props}
  />
))
Item.displayName = 'DropdownMenuItem'

const CheckboxItem = forwardRef<
  ElementRef<typeof DropdownPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownPrimitive.CheckboxItem
    ref={ref}
    checked={checked}
    className={cn(menuItemBase, 'pl-8', className)}
    {...props}
  >
    <span className="absolute left-2 flex size-4 items-center justify-center">
      <DropdownPrimitive.ItemIndicator>
        <CheckIcon className="size-4" />
      </DropdownPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownPrimitive.CheckboxItem>
))
CheckboxItem.displayName = 'DropdownMenuCheckboxItem'

const RadioItem = forwardRef<
  ElementRef<typeof DropdownPrimitive.RadioItem>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownPrimitive.RadioItem
    ref={ref}
    className={cn(menuItemBase, 'pl-8', className)}
    {...props}
  >
    <span className="absolute left-2 flex size-4 items-center justify-center">
      <DropdownPrimitive.ItemIndicator>
        <CircleIcon className="size-2" />
      </DropdownPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownPrimitive.RadioItem>
))
RadioItem.displayName = 'DropdownMenuRadioItem'

const Label = forwardRef<
  ElementRef<typeof DropdownPrimitive.Label>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-xs font-medium text-[var(--color-fg-muted)]', className)}
    {...props}
  />
))
Label.displayName = 'DropdownMenuLabel'

const Separator = forwardRef<
  ElementRef<typeof DropdownPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Separator
    ref={ref}
    className={cn('mx-1 my-1 h-px bg-[var(--color-border)]', className)}
    {...props}
  />
))
Separator.displayName = 'DropdownMenuSeparator'

const Shortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn('ml-auto text-xs text-[var(--color-fg-subtle)] tracking-widest', className)}
    {...props}
  />
)
Shortcut.displayName = 'DropdownMenuShortcut'

export const DropdownMenu = Object.assign(Root, {
  Trigger,
  Content,
  Item,
  CheckboxItem,
  RadioItem,
  Label,
  Separator,
  Shortcut,
  Group,
  Portal,
  Sub,
  SubTrigger,
  SubContent,
  RadioGroup,
})
