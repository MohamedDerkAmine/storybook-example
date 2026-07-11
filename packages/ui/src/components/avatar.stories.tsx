import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar'

const meta = {
  title: 'Data/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/80?img=12" alt="Ada Lovelace" />
      <Avatar.Fallback>AL</Avatar.Fallback>
    </Avatar>
  ),
}

export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <Avatar.Fallback>MD</Avatar.Fallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Avatar key={size} size={size}>
          <Avatar.Fallback>MD</Avatar.Fallback>
        </Avatar>
      ))}
    </div>
  ),
}
