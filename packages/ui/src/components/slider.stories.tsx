import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Slider } from './slider'

const meta = {
  title: 'Forms/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Slider defaultValue={[40]} max={100} step={1} aria-label="Volume" />
    </div>
  ),
}

export const Range: Story = {
  render: () => (
    <div className="w-80">
      <Slider defaultValue={[20, 70]} max={100} step={1} aria-label="Range" />
    </div>
  ),
}

export const KeyboardIncrement: Story = {
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const thumb = canvas.getByRole('slider')
    thumb.focus()
    await userEvent.keyboard('{ArrowRight}{ArrowRight}{ArrowRight}')
    await expect(thumb).toHaveAttribute('aria-valuenow', '43')
  },
}
