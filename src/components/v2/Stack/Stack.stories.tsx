import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Stack } from './Stack';

const Item = ({ children }: { children: React.ReactNode }) => (
  <div
    data-testid="stack-item"
    style={{
      padding: 16,
      background: '#e0e7ff',
      border: '1px solid #6366f1',
      borderRadius: 8,
      minWidth: 60,
      textAlign: 'center',
    }}
  >
    {children}
  </div>
);

const meta: Meta<typeof Stack> = {
  title: 'DesignSystem v2/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    direction: { control: 'radio', options: ['row', 'column'] },
    gap: { control: { type: 'range', min: 0, max: 8, step: 1 } },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch'] },
    justify: { control: 'select', options: ['start', 'center', 'end', 'space-between'] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: { direction: 'column', gap: 2 },
  render: (args) => (
    <Stack {...args}>
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Stack>
  ),
};

export const Horizontal: Story = {
  args: { direction: 'row', gap: 3, justify: 'space-between', align: 'center' },
  render: (args) => (
    <Stack {...args}>
      <Item>Left</Item>
      <Item>Middle</Item>
      <Item>Right</Item>
    </Stack>
  ),
};

export const Wrapping: Story = {
  args: { direction: 'row', gap: 2, wrap: true },
  render: (args) => (
    <Stack {...args}>
      {Array.from({ length: 12 }).map((_, i) => (
        <Item key={i}>{i + 1}</Item>
      ))}
    </Stack>
  ),
};

export const RendersAllChildren: Story = {
  args: { direction: 'row', gap: 2 },
  render: (args) => (
    <Stack {...args}>
      <Item>A</Item>
      <Item>B</Item>
      <Item>C</Item>
    </Stack>
  ),
  play: async ({ canvas }) => {
    const items = canvas.getAllByTestId('stack-item');
    await expect(items).toHaveLength(3);

    const container = items[0].parentElement!;
    const styles = window.getComputedStyle(container);
    await expect(styles.display).toBe('flex');
    await expect(styles.flexDirection).toBe('row');
  },
};
