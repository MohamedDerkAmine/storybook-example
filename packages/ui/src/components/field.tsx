'use client'

import {
  Children,
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useId,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react'
import { cn } from '../lib/cn'
import { Label } from './label'

type FieldContextValue = {
  id: string
  descriptionId?: string
  errorId?: string
  invalid: boolean
}

const FieldContext = createContext<FieldContextValue | null>(null)

interface FieldRootProps extends HTMLAttributes<HTMLDivElement> {
  id?: string
  invalid?: boolean
}

const Root = forwardRef<HTMLDivElement, FieldRootProps>(
  ({ id: idProp, invalid = false, className, children, ...props }, ref) => {
    const autoId = useId()
    const id = idProp ?? autoId
    const descriptionId = `${id}-description`
    const errorId = `${id}-error`

    const enhanced = Children.map(children, (child) => {
      if (!isValidElement(child)) return child
      const type = (child.type as { displayName?: string })?.displayName
      if (type === 'FieldControl') {
        return cloneElement(child as ReactElement<{ children?: ReactNode }>, {
          children: Children.map(
            (child.props as { children?: ReactNode }).children,
            (input) => {
              if (!isValidElement(input)) return input
              return cloneElement(input as ReactElement<Record<string, unknown>>, {
                id,
                'aria-describedby': descriptionId,
                'aria-errormessage': invalid ? errorId : undefined,
                'aria-invalid': invalid || undefined,
              })
            },
          ),
        })
      }
      return child
    })

    return (
      <FieldContext.Provider value={{ id, descriptionId, errorId, invalid }}>
        <div ref={ref} className={cn('flex flex-col gap-1.5', className)} {...props}>
          {enhanced}
        </div>
      </FieldContext.Provider>
    )
  },
)
Root.displayName = 'Field'

function useFieldContext() {
  const ctx = useContext(FieldContext)
  if (!ctx) throw new Error('Field.* must be used inside <Field>.')
  return ctx
}

const FieldLabel = forwardRef<
  HTMLLabelElement,
  Omit<React.ComponentPropsWithoutRef<typeof Label>, 'htmlFor'>
>((props, ref) => {
  const { id } = useFieldContext()
  return <Label ref={ref} htmlFor={id} {...props} />
})
FieldLabel.displayName = 'FieldLabel'

const FieldDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { descriptionId } = useFieldContext()
    return (
      <p
        ref={ref}
        id={descriptionId}
        className={cn('text-xs text-[var(--color-fg-muted)]', className)}
        {...props}
      />
    )
  },
)
FieldDescription.displayName = 'FieldDescription'

const FieldError = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { errorId, invalid } = useFieldContext()
    if (!invalid || !children) return null
    return (
      <p
        ref={ref}
        id={errorId}
        className={cn('text-xs text-[var(--color-danger-fg)]', className)}
        {...props}
      >
        {children}
      </p>
    )
  },
)
FieldError.displayName = 'FieldError'

const FieldControl = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('w-full', className)} {...props} />,
)
FieldControl.displayName = 'FieldControl'

export const Field = Object.assign(Root, {
  Label: FieldLabel,
  Description: FieldDescription,
  Error: FieldError,
  Control: FieldControl,
})
