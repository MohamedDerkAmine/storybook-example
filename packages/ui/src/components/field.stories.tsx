import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Field } from './field'
import { Input } from './input'
import { Textarea } from './textarea'

const meta = {
  title: 'Forms/Field',
  component: Field as unknown as React.ComponentType,
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Field className="w-80">
      <Field.Label>Email address</Field.Label>
      <Field.Control>
        <Input placeholder="you@example.com" />
      </Field.Control>
      <Field.Description>We&apos;ll never share your email.</Field.Description>
    </Field>
  ),
}

export const Invalid: Story = {
  render: () => (
    <Field invalid className="w-80">
      <Field.Label>Bio</Field.Label>
      <Field.Control>
        <Textarea defaultValue="Hi" />
      </Field.Control>
      <Field.Error>Please tell us a bit more — at least 20 characters.</Field.Error>
    </Field>
  ),
}

export const WiresLabelToControl: Story = {
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText('you@example.com')
    const label = canvas.getByText('Email address')

    // clicking the label focuses the input (htmlFor/id wiring)
    await userEvent.click(label)
    await expect(input).toHaveFocus()

    // aria-describedby points at the description
    const describedBy = input.getAttribute('aria-describedby')
    await expect(describedBy).toBeTruthy()
    await expect(canvas.getByText(/never share your email/i).id).toBe(describedBy)
  },
}

export const PropagatesInvalidState: Story = {
  render: Invalid.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const control = canvas.getByRole('textbox')
    await expect(control).toHaveAttribute('aria-invalid', 'true')
    await expect(control.getAttribute('aria-errormessage')).toBeTruthy()
  },
}
