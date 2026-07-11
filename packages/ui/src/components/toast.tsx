'use client'

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ReactNode,
} from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { XIcon } from '../icons'
import { cn } from '../lib/cn'

export type ToastVariant = 'default' | 'success' | 'danger' | 'warning'

export interface ToastOptions {
  title?: ReactNode
  description?: ReactNode
  action?: ReactNode
  variant?: ToastVariant
  duration?: number
}

type ToastItem = ToastOptions & { id: string }

const listeners = new Set<(items: ToastItem[]) => void>()
let items: ToastItem[] = []

function emit() {
  for (const l of listeners) l(items)
}

export function toast(options: ToastOptions) {
  const id = `t${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`
  items = [...items, { id, ...options }]
  emit()
  return id
}

toast.success = (title: ReactNode, options: Omit<ToastOptions, 'title' | 'variant'> = {}) =>
  toast({ ...options, title, variant: 'success' })
toast.error = (title: ReactNode, options: Omit<ToastOptions, 'title' | 'variant'> = {}) =>
  toast({ ...options, title, variant: 'danger' })
toast.warning = (title: ReactNode, options: Omit<ToastOptions, 'title' | 'variant'> = {}) =>
  toast({ ...options, title, variant: 'warning' })
toast.dismiss = (id?: string) => {
  items = id ? items.filter((t) => t.id !== id) : []
  emit()
}

export function useToast() {
  const [state, setState] = useState<ToastItem[]>(items)
  useEffect(() => {
    listeners.add(setState)
    return () => {
      listeners.delete(setState)
    }
  }, [])
  return { toasts: state, toast, dismiss: toast.dismiss }
}

const variantStyles: Record<ToastVariant, string> = {
  default: 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg)]',
  success:
    'border-[var(--color-green-9)]/40 bg-[var(--color-surface)] text-[var(--color-success-fg)]',
  danger:
    'border-[var(--color-red-9)]/40 bg-[var(--color-surface)] text-[var(--color-danger-fg)]',
  warning:
    'border-[var(--color-amber-9)]/40 bg-[var(--color-surface)] text-[var(--color-warning-fg)]',
}

const Root = forwardRef<
  ElementRef<typeof ToastPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Root> & { variant?: ToastVariant }
>(({ className, variant = 'default', ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn(
      'group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden',
      'rounded-[var(--radius-md)] border p-4 shadow-[var(--shadow-lg)]',
      'transition-all duration-[var(--duration-base)] ease-[var(--ease-out)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full',
      'data-[state=open]:slide-in-from-right-full data-[state=open]:sm:slide-in-from-bottom-full',
      variantStyles[variant],
      className,
    )}
    {...props}
  />
))
Root.displayName = 'Toast'

export interface ToasterProps {
  duration?: number
  swipeDirection?: 'right' | 'left' | 'up' | 'down'
}

export function Toaster({ duration = 5000, swipeDirection = 'right' }: ToasterProps = {}) {
  const { toasts, dismiss } = useToast()
  return (
    <ToastPrimitive.Provider swipeDirection={swipeDirection} duration={duration}>
      {toasts.map((t) => (
        <Root
          key={t.id}
          variant={t.variant}
          duration={t.duration ?? duration}
          onOpenChange={(open) => {
            if (!open) dismiss(t.id)
          }}
        >
          <div className="min-w-0 flex-1">
            {t.title && (
              <ToastPrimitive.Title className="text-sm font-semibold">
                {t.title}
              </ToastPrimitive.Title>
            )}
            {t.description && (
              <ToastPrimitive.Description className="mt-1 text-sm text-[var(--color-fg-muted)]">
                {t.description}
              </ToastPrimitive.Description>
            )}
          </div>
          {t.action && (
            <ToastPrimitive.Action asChild altText="Action">
              {t.action}
            </ToastPrimitive.Action>
          )}
          <ToastPrimitive.Close
            aria-label="Dismiss"
            className={cn(
              'shrink-0 rounded-[var(--radius-xs)] p-1 text-[var(--color-fg-muted)]',
              'hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-fg)]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]',
            )}
          >
            <XIcon className="size-4" />
          </ToastPrimitive.Close>
        </Root>
      ))}
      <ToastPrimitive.Viewport
        className={cn(
          'fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col gap-2 p-4',
          'sm:top-auto sm:bottom-0 sm:right-0 sm:max-w-[400px]',
        )}
      />
    </ToastPrimitive.Provider>
  )
}
