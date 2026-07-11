import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Sheet } from './sheet'
import { Button } from './button'
import { Field } from './field'
import { Input } from './input'

const meta = {
  title: 'Overlays/Sheet',
  component: Sheet as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

const render = (side: 'top' | 'right' | 'bottom' | 'left' = 'right') => () => (
  <Sheet>
    <Sheet.Trigger asChild>
      <Button variant="outline">Open {side}</Button>
    </Sheet.Trigger>
    <Sheet.Content side={side}>
      <Sheet.Header>
        <Sheet.Title>Edit profile</Sheet.Title>
        <Sheet.Description>Make changes to your profile here. Save when you&apos;re done.</Sheet.Description>
      </Sheet.Header>
      <div className="flex flex-col gap-3">
        <Field>
          <Field.Label>Name</Field.Label>
          <Field.Control>
            <Input defaultValue="Ada Lovelace" />
          </Field.Control>
        </Field>
        <Field>
          <Field.Label>Email</Field.Label>
          <Field.Control>
            <Input defaultValue="ada@example.com" />
          </Field.Control>
        </Field>
      </div>
      <Sheet.Footer>
        <Sheet.Close asChild>
          <Button variant="outline">Cancel</Button>
        </Sheet.Close>
        <Button>Save</Button>
      </Sheet.Footer>
    </Sheet.Content>
  </Sheet>
)

export const Right: Story = { render: render('right') }
export const Left: Story = { render: render('left') }
export const Top: Story = { render: render('top') }
export const Bottom: Story = { render: render('bottom') }

export const OpensOnTriggerClick: Story = {
  render: render('right'),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: /open right/i }))
    await waitFor(async () => {
      await expect(within(document.body).getByRole('dialog')).toBeVisible()
    })
  },
}
