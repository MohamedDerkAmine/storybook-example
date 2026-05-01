import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect, userEvent } from 'storybook/test';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'DesignSystem v2/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'radio', options: ['solid', 'outline', 'ghost'] },
    tone: { control: 'radio', options: ['brand', 'neutral', 'danger'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    children: 'Get started',
    variant: 'solid',
    tone: 'brand',
    size: 'md',
    onClick: fn(),
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {};

export const Outline: Story = { args: { variant: 'outline', children: 'Learn more' } };

export const Ghost: Story = { args: { variant: 'ghost', children: 'Sign in' } };

export const Danger: Story = { args: { tone: 'danger', children: 'Delete account' } };

export const Loading: Story = { args: { loading: true } };

export const Disabled: Story = { args: { disabled: true } };

export const WithEndIcon: Story = {
  args: { children: 'Get started', endIcon: <ArrowForwardIcon /> },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const ClickFiresHandler: Story = {
  args: { children: 'Press me', onClick: fn() },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: 'Press me' });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const KeyboardActivation: Story = {
  args: { children: 'Submit', onClick: fn() },
  play: async ({ canvas, args }) => {
    await userEvent.tab();
    const button = canvas.getByRole('button', { name: 'Submit' });
    await expect(button).toHaveFocus();

    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    await userEvent.keyboard(' ');
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};

export const DisabledDoesNotFire: Story = {
  args: { children: 'Locked', disabled: true, onClick: fn() },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: 'Locked' });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const LoadingSuppressesClick: Story = {
  args: { children: 'Saving', loading: true, onClick: fn() },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-busy', 'true');
    await expect(canvas.getByRole('progressbar')).toBeInTheDocument();

    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const MultipleClicksAreCounted: Story = {
  args: { children: 'Tap me', onClick: fn() },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(3);
  },
};
