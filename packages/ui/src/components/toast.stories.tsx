import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Toaster, toast } from './toast'
import { Button } from './button'

const meta = {
  title: 'Feedback/Toast',
  component: Toaster,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <>
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => toast({ title: 'Saved', description: 'Your changes are live.' })}>
          Default
        </Button>
        <Button variant="soft" onClick={() => toast.success('Deploy succeeded')}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.warning('Quota at 82%')}>
          Warning
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            toast.error('Deploy failed', { description: 'Check the build logs for details.' })
          }
        >
          Error
        </Button>
      </div>
      <Toaster />
    </>
  ),
}

export const AppearsOnCall: Story = {
  render: Playground.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: /^default$/i }))
    await waitFor(async () => {
      await expect(within(document.body).getByText('Saved')).toBeVisible()
    })
    await expect(within(document.body).getByText(/your changes are live/i)).toBeVisible()
  },
}

export const ErrorVariantRenders: Story = {
  render: Playground.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: /^error$/i }))
    await waitFor(async () => {
      await expect(within(document.body).getByText('Deploy failed')).toBeVisible()
    })
  },
}
