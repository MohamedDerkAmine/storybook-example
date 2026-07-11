import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'
import { AlertTriangleIcon, CheckCircleIcon, InfoIcon } from '../icons'

const alertVariants = cva(
  cn(
    'relative flex w-full items-start gap-3 rounded-[var(--radius-md)] border p-4 text-sm',
    'transition-colors duration-[var(--duration-fast)]',
  ),
  {
    variants: {
      tone: {
        info: 'border-[var(--color-blue-6)] bg-[var(--color-blue-2)] text-[var(--color-blue-12)]',
        success:
          'border-[var(--color-green-9)]/30 bg-[var(--color-green-9)]/8 text-[var(--color-success-fg)]',
        warning:
          'border-[var(--color-amber-9)]/40 bg-[var(--color-amber-9)]/10 text-[var(--color-warning-fg)]',
        danger:
          'border-[var(--color-red-9)]/30 bg-[var(--color-red-9)]/8 text-[var(--color-danger-fg)]',
        neutral: 'border-[var(--color-border)] bg-[var(--color-surface-subtle)] text-[var(--color-fg)]',
      },
    },
    defaultVariants: { tone: 'neutral' },
  },
)

const iconFor = {
  info: InfoIcon,
  success: CheckCircleIcon,
  warning: AlertTriangleIcon,
  danger: AlertTriangleIcon,
  neutral: InfoIcon,
} as const

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: ReactNode
  icon?: ReactNode | false
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, tone = 'neutral', title, icon, children, ...props }, ref) => {
    const Icon = iconFor[tone ?? 'neutral']
    return (
      <div ref={ref} role="alert" className={cn(alertVariants({ tone }), className)} {...props}>
        {icon !== false && (
          <div className="mt-0.5 shrink-0">{icon ?? <Icon className="size-4" />}</div>
        )}
        <div className="min-w-0 flex-1">
          {title && <div className="font-medium leading-5">{title}</div>}
          {children && (
            <div
              className={cn(
                'text-[13px] leading-5',
                title ? 'mt-1 opacity-90' : '',
              )}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    )
  },
)
Alert.displayName = 'Alert'
