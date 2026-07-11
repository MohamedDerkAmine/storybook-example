import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRightIcon } from '../icons'
import { cn } from '../lib/cn'

const BreadcrumbsRoot = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & { separator?: React.ReactNode }
>(({ className, children, separator, ...props }, ref) => {
  const items = React.Children.toArray(children)
  const sep = separator ?? <ChevronRightIcon className="size-3.5 text-[--color-fg-subtle]" />
  return (
    <nav ref={ref} aria-label="Breadcrumb" className={className} {...props}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            {item}
            {i < items.length - 1 && (
              <li aria-hidden="true" className="flex items-center">
                {sep}
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
})
BreadcrumbsRoot.displayName = 'Breadcrumbs'

interface BreadcrumbsItemProps extends React.HTMLAttributes<HTMLLIElement> {
  current?: boolean
}

const BreadcrumbsItem = React.forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  ({ className, current, ...props }, ref) => (
    <li
      ref={ref}
      aria-current={current ? 'page' : undefined}
      className={cn(
        current ? 'font-medium text-[--color-fg]' : 'text-[--color-fg-muted]',
        className,
      )}
      {...props}
    />
  ),
)
BreadcrumbsItem.displayName = 'Breadcrumbs.Item'

interface BreadcrumbsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
}

const BreadcrumbsLink = React.forwardRef<HTMLAnchorElement, BreadcrumbsLinkProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a'
    return (
      <Comp
        ref={ref}
        className={cn(
          'rounded-sm underline-offset-4 transition-colors',
          'text-[--color-fg-muted] hover:text-[--color-fg] hover:underline',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]',
          className,
        )}
        {...props}
      />
    )
  },
)
BreadcrumbsLink.displayName = 'Breadcrumbs.Link'

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
  Item: BreadcrumbsItem,
  Link: BreadcrumbsLink,
})
