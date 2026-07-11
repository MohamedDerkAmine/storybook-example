import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './table'
import { Badge } from './badge'

const meta = {
  title: 'Data/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const rows = [
  { id: 'inv-001', status: 'paid', amount: '$250.00', method: 'Credit card' },
  { id: 'inv-002', status: 'pending', amount: '$150.00', method: 'ACH' },
  { id: 'inv-003', status: 'failed', amount: '$350.00', method: 'Credit card' },
  { id: 'inv-004', status: 'paid', amount: '$450.00', method: 'Wire' },
]

export const Default: Story = {
  render: () => (
    <div className="w-[640px]">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head className="text-right">Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell className="font-medium">{row.id}</Table.Cell>
              <Table.Cell>
                <Badge
                  variant={
                    row.status === 'paid'
                      ? 'success'
                      : row.status === 'pending'
                        ? 'warning'
                        : 'danger'
                  }
                >
                  {row.status}
                </Badge>
              </Table.Cell>
              <Table.Cell className="text-[--color-fg-muted]">{row.method}</Table.Cell>
              <Table.Cell className="text-right font-medium">{row.amount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={3}>Total</Table.Cell>
            <Table.Cell className="text-right">$1,200.00</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  ),
}
