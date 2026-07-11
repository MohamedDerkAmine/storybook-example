import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './text'

const meta = {
  title: 'Foundations/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
    weight: { control: 'select', options: ['normal', 'medium', 'semibold', 'bold'] },
    tone: { control: 'select', options: ['default', 'muted', 'subtle', 'accent', 'danger', 'success'] },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { size: 'base', children: 'The quick brown fox jumps over the lazy dog.' },
}

export const Scale: Story = {
  render: () => (
    <div className="space-y-3">
      <Text as="h1" size="5xl" weight="semibold">Display 5xl</Text>
      <Text as="h2" size="4xl" weight="semibold">Heading 4xl</Text>
      <Text as="h3" size="3xl" weight="semibold">Heading 3xl</Text>
      <Text as="h4" size="2xl" weight="medium">Heading 2xl</Text>
      <Text size="xl">Extra Large — xl</Text>
      <Text size="lg">Large — lg</Text>
      <Text size="base">Body — base</Text>
      <Text size="sm" tone="muted">Small muted — sm</Text>
      <Text size="xs" tone="subtle">Extra small — xs</Text>
    </div>
  ),
}
