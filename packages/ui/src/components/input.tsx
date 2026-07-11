import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, type = 'text', ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      aria-invalid={invalid || undefined}
      className={cn(
        'flex h-10 w-full rounded-[var(--radius-md)] border px-3 py-2 text-sm',
        'bg-[var(--color-surface)] text-[var(--color-fg)]',
        'border-[var(--color-border)] placeholder:text-[var(--color-fg-subtle)]',
        'transition-[border-color,box-shadow]',
        'duration-[var(--duration-fast)] ease-[var(--ease-out)]',
        'hover:border-[var(--color-border-strong)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        "file:mr-2 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--color-fg)]",
        'aria-[invalid=true]:border-[var(--color-danger)] aria-[invalid=true]:focus-visible:outline-[var(--color-danger)]',
        className,
      )}
      {...props}
    />
  ),
)
Input.displayName = 'Input'
