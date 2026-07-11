import * as React from 'react'
import { cn } from '../lib/cn'

const EmptyStateRoot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-[--color-border] px-6 py-12 text-center',
        className,
      )}
      {...props}
    />
  ),
)
EmptyStateRoot.displayName = 'EmptyState'

const EmptyStateIcon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex size-10 items-center justify-center rounded-full bg-[--color-surface-subtle] text-[--color-fg-muted]',
        className,
      )}
      {...props}
    />
  ),
)
EmptyStateIcon.displayName = 'EmptyState.Icon'

const EmptyStateTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-sm font-semibold text-[--color-fg]', className)} {...props} />
))
EmptyStateTitle.displayName = 'EmptyState.Title'

const EmptyStateDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('max-w-sm text-sm text-[--color-fg-muted]', className)}
    {...props}
  />
))
EmptyStateDescription.displayName = 'EmptyState.Description'

const EmptyStateActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-1 flex items-center gap-2', className)} {...props} />
  ),
)
EmptyStateActions.displayName = 'EmptyState.Actions'

export const EmptyState = Object.assign(EmptyStateRoot, {
  Icon: EmptyStateIcon,
  Title: EmptyStateTitle,
  Description: EmptyStateDescription,
  Actions: EmptyStateActions,
})
