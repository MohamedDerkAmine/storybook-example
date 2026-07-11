import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { DropdownMenu } from './dropdown-menu'
import { Button } from './button'

const meta = {
  title: 'Overlays/DropdownMenu',
  component: DropdownMenu as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

const render = () => (
  <DropdownMenu>
    <DropdownMenu.Trigger asChild>
      <Button variant="outline">Actions</Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="start">
      <DropdownMenu.Label>My account</DropdownMenu.Label>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>
        Profile <DropdownMenu.Shortcut>⌘P</DropdownMenu.Shortcut>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        Billing <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
      </DropdownMenu.Item>
      <DropdownMenu.Item disabled>Settings</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>Log out</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu>
)

export const Default: Story = { render }

export const OpensOnTriggerClick: Story = {
  render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: /actions/i }))
    await waitFor(async () => {
      await expect(within(document.body).getByRole('menu')).toBeVisible()
    })
    await expect(within(document.body).getByRole('menuitem', { name: /profile/i })).toBeVisible()
  },
}

export const DisabledItemIsNotSelectable: Story = {
  render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: /actions/i }))
    await waitFor(async () => {
      await expect(within(document.body).getByRole('menu')).toBeVisible()
    })
    const settings = within(document.body).getByRole('menuitem', { name: /settings/i })
    await expect(settings).toHaveAttribute('data-disabled')
  },
}
