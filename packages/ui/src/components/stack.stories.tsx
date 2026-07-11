import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from './stack'

const box = (n: number) => (
  <div
    key={n}
    className="grid h-12 w-12 place-items-center rounded-[var(--radius-md)] bg-[var(--color-accent)] text-[var(--color-accent-fg)] text-sm font-medium"
  >
    {n}
  </div>
)

const meta = {
  title: 'Foundations/Stack',
  component: Stack,
  tags: ['autodocs'],
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

export const Column: Story = {
  args: { direction: 'column', gap: 3 },
  render: (args) => <Stack {...args}>{[1, 2, 3].map(box)}</Stack>,
}

export const Row: Story = {
  args: { direction: 'row', gap: 4, align: 'center' },
  render: Column.render,
}

export const JustifyBetween: Story = {
  args: { direction: 'row', justify: 'between' },
  render: (args) => (
    <Stack {...args} className="w-96">
      {box(1)}
      {box(2)}
      {box(3)}
    </Stack>
  ),
}
