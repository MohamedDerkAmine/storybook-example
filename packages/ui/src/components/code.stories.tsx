import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './code'

const meta = {
  title: 'Foundations/Code',
  component: Code,
  tags: ['autodocs'],
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: 'pnpm install @mohamedd/ui' } }

export const Inline: Story = {
  render: () => (
    <p>
      Import once via <Code>import '@mohamedd/ui/styles.css'</Code> at the root of your app.
    </p>
  ),
}
