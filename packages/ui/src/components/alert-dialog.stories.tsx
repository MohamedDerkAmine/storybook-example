import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { AlertDialog } from './alert-dialog'
import { Button } from './button'

const meta = {
  title: 'Overlays/AlertDialog',
  component: AlertDialog as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

const render = () => (
  <AlertDialog>
    <AlertDialog.Trigger asChild>
      <Button variant="destructive">Delete workspace</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content>
      <AlertDialog.Header>
        <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
        <AlertDialog.Description>
          This will permanently delete the workspace and all its data. This action cannot be undone.
        </AlertDialog.Description>
      </AlertDialog.Header>
      <AlertDialog.Footer>
        <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Yes, delete</AlertDialog.Action>
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog>
)

export const Default: Story = { render }

export const OpensAndCancels: Story = {
  render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: /delete workspace/i }))
    await waitFor(async () => {
      await expect(within(document.body).getByRole('alertdialog')).toBeVisible()
    })
    await userEvent.click(within(document.body).getByRole('button', { name: /cancel/i }))
    await waitFor(async () => {
      await expect(within(document.body).queryByRole('alertdialog')).not.toBeInTheDocument()
    })
  },
}
