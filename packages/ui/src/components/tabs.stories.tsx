import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Tabs } from './tabs'
import { Text } from './text'

const meta = {
  title: 'Nav/Tabs',
  component: Tabs as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

const render = () => (
  <Tabs defaultValue="overview" className="w-[420px]">
    <Tabs.List>
      <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
      <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
      <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="overview">
      <Text tone="muted">A high-level summary of the workspace.</Text>
    </Tabs.Content>
    <Tabs.Content value="activity">
      <Text tone="muted">Recent activity across projects.</Text>
    </Tabs.Content>
    <Tabs.Content value="settings">
      <Text tone="muted">Manage workspace preferences.</Text>
    </Tabs.Content>
  </Tabs>
)

export const Default: Story = { render }

export const SwitchesOnTriggerClick: Story = {
  render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // default panel is Overview
    await expect(canvas.getByText(/high-level summary/i)).toBeInTheDocument()

    // click Activity → its panel shows
    await userEvent.click(canvas.getByRole('tab', { name: /activity/i }))
    await expect(canvas.getByText(/recent activity/i)).toBeInTheDocument()
    await expect(canvas.queryByText(/high-level summary/i)).not.toBeInTheDocument()

    // click Settings
    await userEvent.click(canvas.getByRole('tab', { name: /settings/i }))
    await expect(canvas.getByText(/manage workspace preferences/i)).toBeInTheDocument()
  },
}
