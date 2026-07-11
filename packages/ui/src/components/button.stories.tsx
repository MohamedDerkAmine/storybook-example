import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Button } from './button'
import { ExternalLinkIcon } from '../icons'

const meta = {
  title: 'Actions/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'soft', 'destructive', 'link'],
    },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Solid: Story = { args: { children: 'Continue' } }
export const Outline: Story = { args: { variant: 'outline', children: 'Cancel' } }
export const Ghost: Story = { args: { variant: 'ghost', children: 'Dismiss' } }
export const Soft: Story = { args: { variant: 'soft', children: 'Details' } }
export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Delete workspace' },
}
export const Link: Story = { args: { variant: 'link', children: 'Read the docs' } }
export const Loading: Story = { args: { loading: true, children: 'Saving' } }
export const Disabled: Story = { args: { disabled: true, children: 'Disabled' } }
export const WithIcon: Story = {
  args: {
    children: 'Open in new tab',
    trailingIcon: <ExternalLinkIcon />,
    variant: 'outline',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="xs">xs</Button>
      <Button size="sm">sm</Button>
      <Button size="md">md</Button>
      <Button size="lg">lg</Button>
      <Button size="xl">xl</Button>
    </div>
  ),
}

export const FiresOnClick: Story = {
  args: { children: 'Click me', onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /click me/i })
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalledOnce()
  },
}

export const DoesNotFireWhenDisabled: Story = {
  args: { children: 'Disabled', disabled: true, onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /disabled/i })
    await expect(button).toBeDisabled()
    await userEvent.click(button)
    await expect(args.onClick).not.toHaveBeenCalled()
  },
}

export const DoesNotFireWhenLoading: Story = {
  args: { children: 'Saving', loading: true, onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await expect(button).toBeDisabled()
    await userEvent.click(button)
    await expect(args.onClick).not.toHaveBeenCalled()
  },
}
