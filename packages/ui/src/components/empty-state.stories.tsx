import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState } from './empty-state'
import { Button } from './button'
import { InfoIcon } from '../icons'

const meta = {
  title: 'Data/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <EmptyState className="w-[480px]">
      <EmptyState.Icon>
        <InfoIcon />
      </EmptyState.Icon>
      <EmptyState.Title>No projects yet</EmptyState.Title>
      <EmptyState.Description>
        Create your first project to get started. You can invite team members afterwards.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button variant="outline">Read docs</Button>
        <Button>Create project</Button>
      </EmptyState.Actions>
    </EmptyState>
  ),
}
