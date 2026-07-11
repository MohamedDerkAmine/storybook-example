import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Toggle } from './toggle'

const meta = {
  title: 'Actions/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: 'Bold', 'aria-label': 'Toggle bold' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: 'Italic', 'aria-label': 'Toggle italic' },
}

export const TogglesOnClick: Story = {
  args: { children: 'Bold', 'aria-label': 'Toggle bold' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const btn = canvas.getByRole('button', { name: /toggle bold/i })
    await expect(btn).toHaveAttribute('data-state', 'off')
    await userEvent.click(btn)
    await expect(btn).toHaveAttribute('data-state', 'on')
    await userEvent.click(btn)
    await expect(btn).toHaveAttribute('data-state', 'off')
  },
}
