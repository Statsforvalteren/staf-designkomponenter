import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: {
    docs: {
      description: {
        component: 'Color tokens and utilities available in the design system.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const TextColors: Story = {
  render: () => (
    <div>
      <div className="bg-brand1">
        <p className="text-brand1">Brand 1 text color</p>
      </div>
      <div className="bg-brand2">
        <p className="text-brand2">Brand 2 text color</p>
      </div>
      <div className="bg-brand3">
        <p className="text-brand3">Brand 3 text color</p>
      </div>
      <div className="bg-accent">
        <p className="text-accent">Accent text color</p>
      </div>
      <div className="bg-neutral">
        <p className="text-neutral">Neutral text color</p>
      </div>
      <div className="bg-info">
        <p className="text-info">Info text color</p>
      </div>
      <div className="bg-success">
        <p className="text-success">Success text color</p>
      </div>
      <div className="bg-warning">
        <p className="text-warning">Warning text color</p>
      </div>
      <div className="bg-danger">
        <p className="text-danger">Danger text color</p>
      </div>
    </div>
  ),
};

export const BackgroundColors: Story = {
  render: () => (
    <div className="grid grid-3 gap-md">
      <div className="bg-brand1 text-brand1 p-md">Brand 1 background</div>
      <div className="bg-brand2 text-brand2 p-md">Brand 2 background</div>
      <div className="bg-brand3 text-brand3 p-md">Brand 3 background</div>
      <div className="bg-accent text-accent p-md">Accent background</div>
      <div className="bg-neutral text-neutral p-md">Neutral background</div>
      <div className="bg-info text-info p-md">Info background</div>
      <div className="bg-success text-success p-md">Success background</div>
      <div className="bg-warning text-warning p-md">Warning background</div>
      <div className="bg-danger text-danger p-md">Danger background</div>
    </div>
  ),
};