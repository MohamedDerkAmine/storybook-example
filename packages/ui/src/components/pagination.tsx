import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRightIcon } from '../icons'
import { cn } from '../lib/cn'
import { buttonVariants } from './button'

const PaginationRoot = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <nav
    aria-label="Pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)
PaginationRoot.displayName = 'Pagination'

const PaginationContent = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
  ),
)
PaginationContent.displayName = 'Pagination.Content'

const PaginationItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />,
)
PaginationItem.displayName = 'Pagination.Item'

interface PaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
  asChild?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, asChild, size = 'sm', ...props }, ref) => {
    const Comp = asChild ? Slot : 'a'
    return (
      <Comp
        ref={ref}
        aria-current={isActive ? 'page' : undefined}
        className={cn(
          buttonVariants({
            variant: isActive ? 'outline' : 'ghost',
            size,
          }),
          'min-w-9 justify-center',
          className,
        )}
        {...props}
      />
    )
  },
)
PaginationLink.displayName = 'Pagination.Link'

const PaginationPrevious = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, ...props }, ref) => (
    <PaginationLink
      ref={ref}
      aria-label="Go to previous page"
      className={cn('gap-1 pl-2.5', className)}
      {...props}
    >
      <ChevronRightIcon className="size-3.5 rotate-180" />
      <span>Previous</span>
    </PaginationLink>
  ),
)
PaginationPrevious.displayName = 'Pagination.Previous'

const PaginationNext = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, ...props }, ref) => (
    <PaginationLink
      ref={ref}
      aria-label="Go to next page"
      className={cn('gap-1 pr-2.5', className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRightIcon className="size-3.5" />
    </PaginationLink>
  ),
)
PaginationNext.displayName = 'Pagination.Next'

const PaginationEllipsis = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    aria-hidden="true"
    className={cn('flex size-9 items-center justify-center text-[--color-fg-muted]', className)}
    {...props}
  >
    …
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'Pagination.Ellipsis'

export const Pagination = Object.assign(PaginationRoot, {
  Content: PaginationContent,
  Item: PaginationItem,
  Link: PaginationLink,
  Previous: PaginationPrevious,
  Next: PaginationNext,
  Ellipsis: PaginationEllipsis,
})
