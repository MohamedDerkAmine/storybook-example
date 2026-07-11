import { forwardRef, type SVGProps } from 'react'
import { cn } from '../lib/cn'

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

type IconComponent = ReturnType<typeof forwardRef<SVGSVGElement, IconProps>>

const createIcon = (name: string, path: React.ReactNode): IconComponent => {
  const Icon = forwardRef<SVGSVGElement, IconProps>(({ size = 16, className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn('shrink-0', className)}
      {...props}
    >
      {path}
    </svg>
  ))
  Icon.displayName = name
  return Icon
}

export const XIcon = createIcon(
  'XIcon',
  <>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </>,
)

export const CheckIcon = createIcon('CheckIcon', <path d="M20 6 9 17l-5-5" />)

export const ChevronDownIcon = createIcon('ChevronDownIcon', <path d="m6 9 6 6 6-6" />)

export const ChevronRightIcon = createIcon('ChevronRightIcon', <path d="m9 18 6-6-6-6" />)

export const CircleIcon = createIcon(
  'CircleIcon',
  <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />,
)

export const InfoIcon = createIcon(
  'InfoIcon',
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </>,
)

export const AlertTriangleIcon = createIcon(
  'AlertTriangleIcon',
  <>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </>,
)

export const CheckCircleIcon = createIcon(
  'CheckCircleIcon',
  <>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </>,
)

export const SpinnerIcon = createIcon(
  'SpinnerIcon',
  <path
    d="M12 3a9 9 0 1 0 9 9"
    className="origin-center animate-[spin_800ms_linear_infinite]"
  />,
)

export const ExternalLinkIcon = createIcon(
  'ExternalLinkIcon',
  <>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </>,
)
