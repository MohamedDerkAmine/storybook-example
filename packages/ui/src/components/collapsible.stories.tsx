import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Collapsible } from './collapsible'
import { Button } from './button'

const meta = {
  title: 'Data/Collapsible',
  component: Collapsible as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

const render = () => (
  <Collapsible className="w-[320px] space-y-2">
    <div className="flex items-center justify-between rounded-md border border-[--color-border] px-3 py-2 text-sm">
      <span>@ada starred 3 repositories</span>
      <Collapsible.Trigger asChild>
        <Button variant="ghost" size="sm">
          Toggle
        </Button>
      </Collapsible.Trigger>
    </div>
    <Collapsible.Content className="space-y-2">
      {['radix-ui/primitives', 'vercel/next.js', 'tailwindlabs/tailwindcss'].map((repo) => (
        <div
          key={repo}
          className="rounded-md border border-[--color-border] px-3 py-2 font-mono text-sm text-[--color-fg-muted]"
        >
          {repo}
        </div>
      ))}
    </Collapsible.Content>
  </Collapsible>
)

export const Default: Story = { render }

export const TogglesOnTrigger: Story = {
  render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: /toggle/i })
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(trigger)
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getByText('radix-ui/primitives')).toBeVisible()
  },
}
