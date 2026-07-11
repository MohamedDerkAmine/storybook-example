import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Command } from './command'

const meta = {
  title: 'Overlays/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

const render = () => (
  <Command className="w-[420px]">
    <Command.Input placeholder="Type a command or search…" />
    <Command.List>
      <Command.Empty>No results found.</Command.Empty>
      <Command.Group heading="Suggestions">
        <Command.Item>Calendar</Command.Item>
        <Command.Item>Search emoji</Command.Item>
        <Command.Item>Launch calculator</Command.Item>
      </Command.Group>
      <Command.Separator />
      <Command.Group heading="Settings">
        <Command.Item>
          Profile <Command.Shortcut>⌘P</Command.Shortcut>
        </Command.Item>
        <Command.Item>
          Billing <Command.Shortcut>⌘B</Command.Shortcut>
        </Command.Item>
      </Command.Group>
    </Command.List>
  </Command>
)

export const Default: Story = { render }

export const FiltersOnInput: Story = {
  render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText(/type a command/i)
    await userEvent.type(input, 'cal')
    await expect(canvas.getByText('Calendar')).toBeInTheDocument()
    await expect(canvas.queryByText('Search emoji')).not.toBeInTheDocument()
  },
}
