import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'DesignSystem v2/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    as: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    size: { control: 'select', options: ['display', 'xl', 'lg', 'md', 'sm'] },
    align: { control: 'radio', options: ['start', 'center', 'end'] },
    gradient: { control: 'boolean' },
  },
  args: {
    children: 'Designing with intention',
    as: 'h2',
    size: 'lg',
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Display: Story = {
  args: { children: 'Build faster. Ship sharper.', size: 'display', as: 'h1' },
};

export const Gradient: Story = {
  args: { children: 'Build faster. Ship sharper.', size: 'display', as: 'h1', gradient: true },
};

export const CenteredMedium: Story = {
  args: { children: 'A section title', size: 'md', align: 'center' },
};

export const SizesScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Heading as="h2" size="display">Display</Heading>
      <Heading as="h2" size="xl">Extra large</Heading>
      <Heading as="h2" size="lg">Large</Heading>
      <Heading as="h2" size="md">Medium</Heading>
      <Heading as="h2" size="sm">Small</Heading>
    </div>
  ),
};

export const SemanticTagIsCorrect: Story = {
  args: { children: 'I am an H1', as: 'h1', size: 'sm' },
  play: async ({ canvas }) => {
    const heading = canvas.getByRole('heading', { level: 1 });
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveTextContent('I am an H1');
    await expect(heading.tagName).toBe('H1');
  },
};
