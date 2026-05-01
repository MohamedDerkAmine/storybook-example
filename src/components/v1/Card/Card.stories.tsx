import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button as MuiButton } from '@mui/material';
import { InfoCard } from './Card';

const meta: Meta<typeof InfoCard> = {
  title: 'DesignSystem v1/InfoCard',
  component: InfoCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    maxWidth: {
      control: { type: 'range', min: 200, max: 600, step: 10 },
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Design System',
    description:
      'A design system is a collection of reusable components and guidelines that help teams build consistent user interfaces.',
  },
};

export const WithActions: Story = {
  args: {
    title: 'New Feature',
    description: 'This card has action buttons at the bottom for user interaction.',
    actions: (
      <>
        <MuiButton size="small" color="primary">Learn More</MuiButton>
        <MuiButton size="small" color="secondary">Share</MuiButton>
      </>
    ),
  },
};

export const Narrow: Story = {
  args: {
    title: 'Compact',
    description: 'A narrower card for tighter layouts.',
    maxWidth: 220,
  },
};
