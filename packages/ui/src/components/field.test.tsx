import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Field } from './field'
import { Input } from './input'

describe('Field', () => {
  it('associates label with input via id/htmlFor', () => {
    render(
      <Field>
        <Field.Label>Email</Field.Label>
        <Field.Control>
          <Input placeholder="you@example.com" />
        </Field.Control>
      </Field>,
    )
    const input = screen.getByPlaceholderText('you@example.com')
    const label = screen.getByText('Email')
    expect(input.id).toBeTruthy()
    expect(label).toHaveAttribute('for', input.id)
  })

  it('surfaces error text and aria-invalid when invalid', () => {
    render(
      <Field invalid>
        <Field.Label>Bio</Field.Label>
        <Field.Control>
          <Input placeholder="bio" />
        </Field.Control>
        <Field.Error>Required</Field.Error>
      </Field>,
    )
    expect(screen.getByPlaceholderText('bio')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText('Required')).toBeInTheDocument()
  })
})
