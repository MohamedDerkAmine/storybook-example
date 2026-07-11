import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './icon-button'
import { XIcon, ExternalLinkIcon } from '../icons'

const meta = {
  title: 'Actions/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: { 'aria-label': 'Close' },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { icon: <XIcon /> } }
export const Solid: Story = { args: { variant: 'solid', icon: <XIcon /> } }
export const Outline: Story = { args: { variant: 'outline', icon: <ExternalLinkIcon /> } }
