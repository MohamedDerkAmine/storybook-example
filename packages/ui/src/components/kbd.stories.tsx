import type { Meta, StoryObj } from '@storybook/react'
import { Kbd } from './kbd'

const meta = {
  title: 'Foundations/Kbd',
  component: Kbd,
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: 'K' } }

export const Combo: Story = {
  render: () => (
    <p className="flex items-center gap-1 text-sm text-[var(--color-fg-muted)]">
      Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to search
    </p>
  ),
}
