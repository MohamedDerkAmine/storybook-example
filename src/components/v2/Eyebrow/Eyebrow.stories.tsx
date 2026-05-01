import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Eyebrow } from './Eyebrow';

const meta: Meta<typeof Eyebrow> = {
  title: 'DesignSystem v2/Eyebrow',
  component: Eyebrow,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    tone: { control: 'radio', options: ['brand', 'muted'] },
    withDot: { control: 'boolean' },
  },
  args: { children: "What's new" },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Brand: Story = {};

export const Muted: Story = { args: { tone: 'muted', children: 'Featured' } };

export const NoDot: Story = { args: { withDot: false, children: 'Introducing' } };

export const HasContentAndHidesDecorationFromScreenReaders: Story = {
  args: { children: 'Featured', withDot: true },
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByText('Featured')).toBeInTheDocument();
    const dot = canvasElement.querySelector('[aria-hidden="true"]');
    await expect(dot).not.toBeNull();
  },
};
