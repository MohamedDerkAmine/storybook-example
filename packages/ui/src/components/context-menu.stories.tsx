import type { Meta, StoryObj } from '@storybook/react'
import { ContextMenu } from './context-menu'
import { Text } from './text'

const meta = {
  title: 'Overlays/ContextMenu',
  component: ContextMenu as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenu.Trigger asChild>
        <div className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed border-[--color-border] text-[--color-fg-muted]">
          <Text tone="muted" size="sm">
            Right-click here
          </Text>
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Label>Actions</ContextMenu.Label>
        <ContextMenu.Separator />
        <ContextMenu.Item>
          Copy <ContextMenu.Shortcut>⌘C</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item>
          Cut <ContextMenu.Shortcut>⌘X</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item>
          Paste <ContextMenu.Shortcut>⌘V</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.CheckboxItem checked>Show grid</ContextMenu.CheckboxItem>
        <ContextMenu.CheckboxItem>Snap to guides</ContextMenu.CheckboxItem>
      </ContextMenu.Content>
    </ContextMenu>
  ),
}
