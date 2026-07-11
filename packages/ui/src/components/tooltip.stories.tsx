import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProvider } from './tooltip'
import { Button } from './button'

const meta = {
  title: 'Overlays/Tooltip',
  component: Tooltip as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={200}>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="outline">Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Keyboard shortcut: ⌘K</Tooltip.Content>
    </Tooltip>
  ),
}
