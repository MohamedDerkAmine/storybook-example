import { Fragment } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'DesignSystem v2/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    tone: { control: 'select', options: ['brand', 'neutral', 'success', 'danger', 'warning'] },
    variant: { control: 'radio', options: ['soft', 'solid'] },
    size: { control: 'radio', options: ['sm', 'md'] },
  },
  args: { children: 'Beta', tone: 'brand', variant: 'soft' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Solid: Story = { args: { variant: 'solid' } };

export const Success: Story = { args: { tone: 'success', children: 'Live' } };

export const Danger: Story = { args: { tone: 'danger', children: 'Failed' } };

export const Matrix: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr 1fr',
        gap: 16,
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      <span />
      <strong>Soft</strong>
      <strong>Solid</strong>
      {(['brand', 'neutral', 'success', 'danger', 'warning'] as const).map((tone) => (
        <Fragment key={tone}>
          <span style={{ fontSize: 14, justifySelf: 'start' }}>{tone}</span>
          <Badge tone={tone} variant="soft">{tone}</Badge>
          <Badge tone={tone} variant="solid">{tone}</Badge>
        </Fragment>
      ))}
    </div>
  ),
};

export const RendersChildren: Story = {
  args: { children: 'New release' },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('New release')).toBeInTheDocument();
  },
};
