import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from './scroll-area'

const meta = {
  title: 'Data/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 50 }, (_, i) => `Tag ${i + 1}`)

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-64 w-56 rounded-md border border-[--color-border]">
      <div className="p-4">
        <h4 className="mb-3 text-sm font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag} className="border-b border-[--color-border] py-2 text-sm last:border-0">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}
