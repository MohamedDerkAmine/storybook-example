import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './aspect-ratio'

const meta = {
  title: 'Data/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Sixteen9: Story = {
  render: () => (
    <div className="w-[420px]">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-[--color-surface-subtle]">
        <div className="flex size-full items-center justify-center text-sm text-[--color-fg-muted]">
          16 : 9
        </div>
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  render: () => (
    <div className="w-[240px]">
      <AspectRatio ratio={1} className="overflow-hidden rounded-lg bg-[--color-surface-subtle]">
        <div className="flex size-full items-center justify-center text-sm text-[--color-fg-muted]">
          1 : 1
        </div>
      </AspectRatio>
    </div>
  ),
}
