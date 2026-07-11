import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './spinner'

const meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { size: 24 } }
export const InText: Story = {
  render: () => (
    <p className="flex items-center gap-2">
      <Spinner size={16} /> Loading your workspace…
    </p>
  ),
}
