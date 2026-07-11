import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Accordion } from './accordion'

const meta = {
  title: 'Data/Accordion',
  component: Accordion as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

const render = () => (
  <Accordion type="single" collapsible className="w-[420px]">
    <Accordion.Item value="ship">
      <Accordion.Trigger>Do you ship to my country?</Accordion.Trigger>
      <Accordion.Content>
        We ship worldwide. Delivery times vary by region.
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="returns">
      <Accordion.Trigger>What is your return policy?</Accordion.Trigger>
      <Accordion.Content>Returns are accepted within 30 days of purchase.</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="support">
      <Accordion.Trigger>How do I contact support?</Accordion.Trigger>
      <Accordion.Content>Email support@example.com and we&apos;ll get back within a day.</Accordion.Content>
    </Accordion.Item>
  </Accordion>
)

export const Default: Story = { render }

export const OpensOnClick: Story = {
  render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: /ship to my country/i })
    await userEvent.click(trigger)
    await waitFor(async () => {
      await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    })
    await expect(canvas.getByText(/ship worldwide/i)).toBeVisible()
  },
}
