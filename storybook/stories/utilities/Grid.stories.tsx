import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Utilities/Grid',
  parameters: {
    docs: {
      description: {
        component: 'CSS Grid utilities for creating two-dimensional layouts.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const BasicGrid: Story = {
  render: () => (
    <div className="grid grid-3 gap-md">
      <div className="bg-primary text-white p-md text-center">Grid Item 1</div>
      <div className="bg-secondary text-white p-md text-center">Grid Item 2</div>
      <div className="bg-success text-white p-md text-center">Grid Item 3</div>
      <div className="bg-warning p-md text-center">Grid Item 4</div>
      <div className="bg-info text-white p-md text-center">Grid Item 5</div>
      <div className="bg-muted p-md text-center">Grid Item 6</div>
    </div>
  ),
};

export const GridColumns: Story = {
  render: () => (
    <div>
      <div className="grid grid-1 gap-sm mb-md">
        <div className="bg-primary text-white p-md text-center">1 Column</div>
      </div>
      <div className="grid grid-2 gap-sm mb-md">
        <div className="bg-secondary text-white p-md text-center">2 Columns</div>
        <div className="bg-secondary text-white p-md text-center">2 Columns</div>
      </div>
      <div className="grid grid-3 gap-sm mb-md">
        <div className="bg-success text-white p-md text-center">3 Columns</div>
        <div className="bg-success text-white p-md text-center">3 Columns</div>
        <div className="bg-success text-white p-md text-center">3 Columns</div>
      </div>
      <div className="grid grid-4 gap-sm">
        <div className="bg-warning p-md text-center">4 Columns</div>
        <div className="bg-warning p-md text-center">4 Columns</div>
        <div className="bg-warning p-md text-center">4 Columns</div>
        <div className="bg-warning p-md text-center">4 Columns</div>
      </div>
    </div>
  ),
};

export const AutofitGrid: Story = {
  render: () => (
    <div className="grid-auto gap-md">
      <div className="bg-primary text-white p-md text-center">Auto-fit Item 1</div>
      <div className="bg-secondary text-white p-md text-center">Auto-fit Item 2</div>
      <div className="bg-success text-white p-md text-center">Auto-fit Item 3</div>
      <div className="bg-warning p-md text-center">Auto-fit Item 4</div>
      <div className="bg-info text-white p-md text-center">Auto-fit Item 5</div>
      <div className="bg-muted p-md text-center">Auto-fit Item 6</div>
      <div className="bg-danger text-white p-md text-center">Auto-fit Item 7</div>
    </div>
  ),
};

export const GridGap: Story = {
  render: () => (
    <div>
      <div className="grid grid-3 grid-gap-0 mb-md">
        <div className="bg-primary text-white p-md text-center">No Gap</div>
        <div className="bg-primary text-white p-md text-center">No Gap</div>
        <div className="bg-primary text-white p-md text-center">No Gap</div>
      </div>
      <div className="grid grid-3 grid-gap-xs mb-md">
        <div className="bg-secondary text-white p-md text-center">Extra Small</div>
        <div className="bg-secondary text-white p-md text-center">Gap</div>
        <div className="bg-secondary text-white p-md text-center">Extra Small</div>
      </div>
      <div className="grid grid-3 grid-gap-sm mb-md">
        <div className="bg-success text-white p-md text-center">Small Gap</div>
        <div className="bg-success text-white p-md text-center">Small Gap</div>
        <div className="bg-success text-white p-md text-center">Small Gap</div>
      </div>
      <div className="grid grid-3 grid-gap-md">
        <div className="bg-warning p-md text-center">Medium Gap</div>
        <div className="bg-warning p-md text-center">Medium Gap</div>
        <div className="bg-warning p-md text-center">Medium Gap</div>
      </div>
    </div>
  ),
};

export const GridRows: Story = {
  render: () => (
    <div className="grid grid-2 grid-rows-3 gap-sm" style={{height: '200px'}}>
      <div className="bg-primary text-white p-sm text-center">Row 1</div>
      <div className="bg-secondary text-white p-sm text-center">Row 1</div>
      <div className="bg-success text-white p-sm text-center">Row 2</div>
      <div className="bg-warning p-sm text-center">Row 2</div>
      <div className="bg-info text-white p-sm text-center">Row 3</div>
      <div className="bg-muted p-sm text-center">Row 3</div>
    </div>
  ),
};

export const GridSpanning: Story = {
  render: () => (
    <div className="grid grid-4 gap-sm">
      <div className="grid-col-span-2 bg-primary text-white p-md text-center">Spans 2 columns</div>
      <div className="bg-secondary text-white p-md text-center">Normal</div>
      <div className="bg-success text-white p-md text-center">Normal</div>
      <div className="bg-warning p-md text-center">Normal</div>
      <div className="bg-info text-white p-md text-center">Normal</div>
      <div className="grid-col-span-3 bg-muted p-md text-center">Spans 3 columns</div>
    </div>
  ),
};

export const DashboardLayout: Story = {
  render: () => (
    <div className="grid grid-3 gap-lg">
      <div className="bg-white p-lg" style={{border: '1px solid var(--digdir-color-muted)'}}>
        <h3 className="mb-md">Analytics</h3>
        <div className="text-2xl font-bold text-primary">1,234</div>
        <p className="text-muted">Total Users</p>
      </div>
      <div className="bg-white p-lg" style={{border: '1px solid var(--digdir-color-muted)'}}>
        <h3 className="mb-md">Revenue</h3>
        <div className="text-2xl font-bold text-success">$12,345</div>
        <p className="text-muted">This Month</p>
      </div>
      <div className="bg-white p-lg" style={{border: '1px solid var(--digdir-color-muted)'}}>
        <h3 className="mb-md">Orders</h3>
        <div className="text-2xl font-bold text-warning">567</div>
        <p className="text-muted">Pending</p>
      </div>
    </div>
  ),
};

export const ImageGallery: Story = {
  render: () => (
    <div className="grid grid-3 gap-md">
      <div className="bg-muted p-lg text-center">Image 1</div>
      <div className="bg-muted p-lg text-center">Image 2</div>
      <div className="bg-muted p-lg text-center">Image 3</div>
      <div className="grid-col-span-2 bg-muted p-lg text-center">Wide Image 4</div>
      <div className="bg-muted p-lg text-center">Image 5</div>
      <div className="bg-muted p-lg text-center">Image 6</div>
      <div className="bg-muted p-lg text-center">Image 7</div>
      <div className="bg-muted p-lg text-center">Image 8</div>
    </div>
  ),
};

export const ContentLayout: Story = {
  render: () => (
    <div className="grid grid-4 gap-lg">
      <div className="grid-col-span-3">
        <article className="bg-white p-lg" style={{border: '1px solid var(--digdir-color-muted)'}}>
          <h1 className="text-xl mb-md">Main Article Title</h1>
          <p className="mb-md">This is the main content area that spans 3 columns of the 4-column grid layout.</p>
          <p>Grid layouts provide excellent control over two-dimensional space, making them perfect for complex layouts like this content-sidebar arrangement.</p>
        </article>
      </div>
      <div>
        <aside className="bg-muted p-lg" style={{border: '1px solid var(--digdir-color-muted)'}}>
          <h3 className="mb-md">Sidebar</h3>
          <ul>
            <li className="mb-sm">Related Link 1</li>
            <li className="mb-sm">Related Link 2</li>
            <li className="mb-sm">Related Link 3</li>
          </ul>
        </aside>
      </div>
    </div>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <div className="grid-auto gap-md">
      <div className="bg-primary text-white p-lg text-center">Responsive Item 1</div>
      <div className="bg-secondary text-white p-lg text-center">Responsive Item 2</div>
      <div className="bg-success text-white p-lg text-center">Responsive Item 3</div>
      <div className="bg-warning p-lg text-center">Responsive Item 4</div>
      <div className="bg-info text-white p-lg text-center">Responsive Item 5</div>
      <div className="bg-muted p-lg text-center">Responsive Item 6</div>
      <div className="bg-danger text-white p-lg text-center">Responsive Item 7</div>
      <div className="bg-primary text-white p-lg text-center">Responsive Item 8</div>
    </div>
  ),
};