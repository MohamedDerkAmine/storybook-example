import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { RadioGroup } from './radio-group'

const meta = {
  title: 'Forms/RadioGroup',
  component: RadioGroup as unknown as React.ComponentType,
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj

const render = () => (
  <RadioGroup defaultValue="hobby" aria-label="Plan">
    {(['hobby', 'pro', 'team'] as const).map((v) => (
      <label key={v} className="flex items-center gap-2 text-sm capitalize">
        <RadioGroup.Item value={v} id={v} />
        {v}
      </label>
    ))}
  </RadioGroup>
)

export const Default: Story = { render }

export const ClickSelects: Story = {
  render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const proRadio = canvas.getByRole('radio', { name: /pro/i })
    await userEvent.click(proRadio)
    await expect(proRadio).toBeChecked()
    await expect(canvas.getByRole('radio', { name: /hobby/i })).not.toBeChecked()
  },
}
