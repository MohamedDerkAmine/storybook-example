import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { TextInput } from './TextField';

const meta: Meta<typeof TextInput> = {
  title: 'DesignSystem v1/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    onChange: fn(),
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: { label: 'Email', required: true, placeholder: 'you@example.com', type: 'email' },
};

export const WithError: Story = {
  args: { label: 'Username', value: 'ab', errorMessage: 'Username must be at least 3 characters' },
};

export const WithHelperText: Story = {
  args: { label: 'Password', type: 'password', helperText: 'Must be at least 8 characters' },
};

export const WithSearchIcon: Story = {
  args: { label: 'Search', placeholder: 'Search...', startAdornment: <SearchIcon /> },
};

export const PasswordWithIcon: Story = {
  args: { label: 'Password', type: 'password', endAdornment: <VisibilityIcon /> },
};

export const Multiline: Story = {
  args: { label: 'Description', multiline: true, rows: 4, placeholder: 'Tell us more...' },
};

export const Disabled: Story = {
  args: { label: 'Disabled field', disabled: true, value: 'Cannot edit this' },
};
