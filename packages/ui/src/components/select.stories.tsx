import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './select'

const meta = {
  title: 'Forms/Select',
  component: Select as unknown as React.ComponentType,
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Choose a fruit…" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>
    </div>
  ),
}
