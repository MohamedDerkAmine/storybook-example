import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './alert'

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    tone: 'info',
    title: 'New API version available',
    children: 'v2.3 is now available. Migration takes about 10 minutes.',
  },
}
export const Success: Story = {
  args: { tone: 'success', title: 'Deploy succeeded', children: 'All checks passed.' },
}
export const Warning: Story = {
  args: {
    tone: 'warning',
    title: 'Approaching quota',
    children: 'You have used 82% of your monthly build minutes.',
  },
}
export const Danger: Story = {
  args: {
    tone: 'danger',
    title: 'Deploy failed',
    children: '3 checks failed. Review the logs before retrying.',
  },
}
