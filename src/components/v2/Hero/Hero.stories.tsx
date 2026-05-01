import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect, userEvent } from 'storybook/test';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'DesignSystem v2/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    eyebrow: "What's new",
    badge: { label: 'v2.0', tone: 'brand' },
    title: 'Design systems that move at startup speed.',
    highlight: 'startup speed',
    subtitle:
      'Ship a coherent product without writing CSS twice. A composable React + MUI library tuned for teams that care about craft.',
    primaryCta: { label: 'Get started', onClick: fn() },
    secondaryCta: { label: 'Read the docs', onClick: fn() },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Minimal: Story = {
  args: {
    eyebrow: undefined,
    badge: undefined,
    title: 'A simpler, sharper landing.',
    highlight: undefined,
    secondaryCta: undefined,
  },
};

export const LeftAligned: Story = {
  args: { align: 'start' },
};

export const NoHighlight: Story = {
  args: { highlight: undefined },
};

export const CtasFireTheirHandlers: Story = {
  args: {
    primaryCta: { label: 'Get started', onClick: fn() },
    secondaryCta: { label: 'Read the docs', onClick: fn() },
  },
  play: async ({ canvas, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Get started' }));
    await expect(args.primaryCta!.onClick).toHaveBeenCalledTimes(1);
    await expect(args.secondaryCta!.onClick).not.toHaveBeenCalled();

    await userEvent.click(canvas.getByRole('button', { name: 'Read the docs' }));
    await expect(args.secondaryCta!.onClick).toHaveBeenCalledTimes(1);
  },
};

export const HasProperHeadingLandmark: Story = {
  play: async ({ canvas }) => {
    const heading = canvas.getByRole('heading', { level: 1 });
    await expect(heading).toBeInTheDocument();
    await expect(heading.textContent).toMatch(/startup speed/);
  },
};

export const KeyboardCanReachBothCtas: Story = {
  play: async ({ canvas }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('button', { name: 'Get started' })).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('button', { name: 'Read the docs' })).toHaveFocus();
  },
};
