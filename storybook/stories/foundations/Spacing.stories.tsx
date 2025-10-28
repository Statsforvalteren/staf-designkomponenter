import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: {
    docs: {
      description: {
        component: 'Spacing tokens and utilities available in the design system.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const MarginExamples: Story = {
  render: () => (
    <div>
      <div className="bg-muted p-sm mb-md">
        <p>Element with margin-bottom medium</p>
      </div>
      <div className="bg-primary text-white p-sm mb-lg">
        <p>Element with margin-bottom large</p>
      </div>
      <div className="bg-secondary text-white p-sm">
        <p>No additional margin</p>
      </div>
    </div>
  ),
};

export const PaddingExamples: Story = {
  render: () => (
    <div className="grid grid-3 gap-md">
      <div className="bg-muted p-xs">Extra small padding</div>
      <div className="bg-muted p-sm">Small padding</div>
      <div className="bg-muted p-md">Medium padding</div>
      <div className="bg-muted p-lg">Large padding</div>
      <div className="bg-muted p-xl">Extra large padding</div>
      <div className="bg-muted p-0">No padding</div>
    </div>
  ),
};

export const CardLayout: Story = {
  render: () => (
    <div className="grid grid-2 gap-lg">
      <div className="bg-white p-lg mb-md" style={{border: '1px solid var(--digdir-color-muted)'}}>
        <h3 className="mb-sm">Card Title</h3>
        <p className="text-muted mb-md">This is a card with proper spacing using the design system utilities.</p>
        <button className="bg-primary text-white p-sm">Learn More</button>
      </div>
      <div className="bg-white p-lg" style={{border: '1px solid var(--digdir-color-muted)'}}>
        <h3 className="mb-sm">Another Card</h3>
        <p className="text-muted mb-md">Consistent spacing creates a harmonious layout.</p>
        <button className="bg-secondary text-white p-sm">Read More</button>
      </div>
    </div>
  ),
};