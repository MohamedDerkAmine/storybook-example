import { forwardRef, type SVGProps } from 'react'
import { cn } from '../lib/cn'

export interface SpinnerProps extends SVGProps<SVGSVGElement> {
  size?: number | string
  label?: string
}

export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ size = 16, className, label = 'Loading', ...props }, ref) => (
    <svg
      ref={ref}
      role="status"
      aria-label={label}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      className={cn('inline-block', className)}
      {...props}
    >
      <circle cx="12" cy="12" r="9" opacity="0.25" />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        className="origin-center animate-[spin_800ms_linear_infinite]"
      />
    </svg>
  ),
)
Spinner.displayName = 'Spinner'
