import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './breadcrumbs'

const meta = {
  title: 'Nav/Breadcrumbs',
  component: Breadcrumbs as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Workspaces</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item current>Acme Inc.</Breadcrumbs.Item>
    </Breadcrumbs>
  ),
}
