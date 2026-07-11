import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Dialog } from './dialog'
import { Button } from './button'
import { Input } from './input'
import { Field } from './field'

const meta = {
  title: 'Overlays/Dialog',
  component: Dialog as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

const render = () => (
  <Dialog>
    <Dialog.Trigger asChild>
      <Button>Rename workspace</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Rename workspace</Dialog.Title>
        <Dialog.Description>
          Choose a new name. Existing links will keep working.
        </Dialog.Description>
      </Dialog.Header>
      <Dialog.Body>
        <Field>
          <Field.Label>Name</Field.Label>
          <Field.Control>
            <Input defaultValue="Acme Inc." />
          </Field.Control>
        </Field>
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.Close asChild>
          <Button variant="outline">Cancel</Button>
        </Dialog.Close>
        <Button>Save</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog>
)

export const Default: Story = { render }

export const OpensOnTriggerClick: Story = {
  render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: /rename workspace/i }))
    await waitFor(async () => {
      await expect(within(document.body).getByRole('dialog')).toBeVisible()
    })
    await expect(
      within(document.body).getByRole('heading', { name: /rename workspace/i }),
    ).toBeInTheDocument()
  },
}

export const ClosesOnEscape: Story = {
  render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: /rename workspace/i }))
    await waitFor(async () => {
      await expect(within(document.body).getByRole('dialog')).toBeVisible()
    })
    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(within(document.body).queryByRole('dialog')).not.toBeInTheDocument()
    })
  },
}
