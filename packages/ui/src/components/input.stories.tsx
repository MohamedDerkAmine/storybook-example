import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'

const meta = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { placeholder: 'you@example.com' } }
export const Disabled: Story = { args: { disabled: true, value: 'read-only' } }
export const Invalid: Story = { args: { invalid: true, defaultValue: 'not-an-email' } }
export const Password: Story = { args: { type: 'password', placeholder: '••••••••' } }
