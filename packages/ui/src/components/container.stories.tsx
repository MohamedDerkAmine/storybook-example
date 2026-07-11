import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './container'

const meta = {
  title: 'Foundations/Container',
  component: Container,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
  },
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { size: 'lg' },
  render: (args) => (
    <Container {...args}>
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-subtle)] p-6 my-8">
        Content clamped to the {args.size} container size.
      </div>
    </Container>
  ),
}

export const Small: Story = { args: { size: 'sm' }, render: Default.render }
export const Extra: Story = { args: { size: 'xl' }, render: Default.render }
