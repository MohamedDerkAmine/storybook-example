import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, rows = 4, ...props }, ref) => (
    <textarea
      ref={ref}
      rows={rows}
      aria-invalid={invalid || undefined}
      className={cn(
        'flex min-h-20 w-full rounded-[var(--radius-md)] border px-3 py-2 text-sm',
        'bg-[var(--color-surface)] text-[var(--color-fg)] resize-y',
        'border-[var(--color-border)] placeholder:text-[var(--color-fg-subtle)]',
        'transition-[border-color,box-shadow]',
        'duration-[var(--duration-fast)] ease-[var(--ease-out)]',
        'hover:border-[var(--color-border-strong)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-[invalid=true]:border-[var(--color-danger)] aria-[invalid=true]:focus-visible:outline-[var(--color-danger)]',
        className,
      )}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'
