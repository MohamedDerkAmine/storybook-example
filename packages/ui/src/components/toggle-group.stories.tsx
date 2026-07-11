import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { ToggleGroup } from './toggle-group'

const meta = {
  title: 'Actions/ToggleGroup',
  component: ToggleGroup as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

export const Single: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="left" aria-label="Text alignment" variant="outline">
      <ToggleGroup.Item value="left" aria-label="Align left">L</ToggleGroup.Item>
      <ToggleGroup.Item value="center" aria-label="Align center">C</ToggleGroup.Item>
      <ToggleGroup.Item value="right" aria-label="Align right">R</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple" aria-label="Formatting" variant="outline">
      <ToggleGroup.Item value="bold" aria-label="Bold">B</ToggleGroup.Item>
      <ToggleGroup.Item value="italic" aria-label="Italic">I</ToggleGroup.Item>
      <ToggleGroup.Item value="underline" aria-label="Underline">U</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const SwapsSelectionOnClick: Story = {
  render: Single.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('radio', { name: /align center/i }))
    await expect(canvas.getByRole('radio', { name: /align center/i })).toHaveAttribute(
      'data-state',
      'on',
    )
    await expect(canvas.getByRole('radio', { name: /align left/i })).toHaveAttribute(
      'data-state',
      'off',
    )
  },
}
