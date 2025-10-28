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
      <p className="text-primary">This is primary text color</p>
      <p className="text-secondary">This is secondary text color</p>
      <p className="text-success">This is success text color</p>
      <p className="text-danger">This is danger text color</p>
      <p className="text-warning">This is warning text color</p>
      <p className="text-info">This is info text color</p>
      <p className="text-muted">This is muted text color</p>
      <p className="text-white bg-black p-sm">This is white text color</p>
      <p className="text-black">This is black text color</p>
    </div>
  ),
};

export const BackgroundColors: Story = {
  render: () => (
    <div className="grid grid-3 gap-md">
      <div className="bg-primary text-white p-md">Primary background</div>
      <div className="bg-secondary text-white p-md">Secondary background</div>
      <div className="bg-success text-white p-md">Success background</div>
      <div className="bg-danger text-white p-md">Danger background</div>
      <div className="bg-warning p-md">Warning background</div>
      <div className="bg-info text-white p-md">Info background</div>
      <div className="bg-muted p-md">Muted background</div>
      <div className="bg-white p-md">White background</div>
      <div className="bg-black text-white p-md">Black background</div>
    </div>
  ),
};