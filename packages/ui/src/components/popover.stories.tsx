import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from './popover'
import { Button } from './button'
import { Field } from './field'
import { Input } from './input'

const meta = {
  title: 'Overlays/Popover',
  component: Popover as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">Update name</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Field>
          <Field.Label>New name</Field.Label>
          <Field.Control>
            <Input placeholder="Team name" />
          </Field.Control>
        </Field>
      </Popover.Content>
    </Popover>
  ),
}
