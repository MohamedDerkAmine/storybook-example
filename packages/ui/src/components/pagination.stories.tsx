import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './pagination'

const meta = {
  title: 'Nav/Pagination',
  component: Pagination as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Pagination>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous href="#" />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#" isActive>
            2
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">3</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">10</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Next href="#" />
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  ),
}
