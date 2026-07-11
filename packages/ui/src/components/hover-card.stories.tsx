import type { Meta, StoryObj } from '@storybook/react'
import { HoverCard } from './hover-card'
import { Avatar } from './avatar'
import { Text } from './text'

const meta = {
  title: 'Overlays/HoverCard',
  component: HoverCard as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCard.Trigger asChild>
        <button className="text-sm font-medium text-[--color-accent] underline-offset-4 hover:underline">
          @ada
        </button>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <div className="flex gap-3">
          <Avatar>
            <Avatar.Fallback>AL</Avatar.Fallback>
          </Avatar>
          <div className="space-y-1">
            <Text weight="semibold" size="sm">
              Ada Lovelace
            </Text>
            <Text tone="muted" size="sm">
              First programmer. Joined the workspace in 1843.
            </Text>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard>
  ),
}
