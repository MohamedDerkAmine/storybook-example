import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './card'
import { Button } from './button'
import { Badge } from './badge'
import { Text } from './text'

const meta = {
  title: 'Data/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[380px]">
      <Card.Header>
        <div className="flex items-center justify-between">
          <Card.Title>Production</Card.Title>
          <Badge variant="success">Live</Badge>
        </div>
        <Card.Description>Deployed 4 minutes ago from main.</Card.Description>
      </Card.Header>
      <Card.Body>
        <Text tone="muted" size="sm">
          Traffic is nominal. Last 100 requests averaged 214 ms.
        </Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline" size="sm">
          View logs
        </Button>
        <Button size="sm">Promote</Button>
      </Card.Footer>
    </Card>
  ),
}
