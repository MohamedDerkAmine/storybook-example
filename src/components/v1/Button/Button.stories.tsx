import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'DesignSystem v1/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['contained', 'outlined', 'text'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    label: 'Click me',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
    onClick: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Outlined: Story = {
  args: { variant: 'outlined', label: 'Secondary action' },
};

export const Text: Story = {
  args: { variant: 'text', label: 'Cancel' },
};

export const Disabled: Story = {
  args: { disabled: true, label: 'Disabled' },
};

export const WithIcon: Story = {
  args: { label: 'Send', startIcon: <SendIcon /> },
};

export const Danger: Story = {
  args: { label: 'Delete', color: 'error', startIcon: <DeleteIcon /> },
};

export const FullWidth: Story = {
  args: { label: 'Full width', fullWidth: true },
  parameters: { layout: 'padded' },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button label="Small" size="small" variant="contained" />
      <Button label="Medium" size="medium" variant="contained" />
      <Button label="Large" size="large" variant="contained" />
    </div>
  ),
};
