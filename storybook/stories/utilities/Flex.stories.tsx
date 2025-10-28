import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Utilities/Flex',
  parameters: {
    docs: {
      description: {
        component: 'Flexbox utilities for creating flexible layouts.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const BasicFlex: Story = {
  render: () => (
    <div className="flex bg-muted p-md gap-md">
      <div className="bg-primary text-white p-sm">Item 1</div>
      <div className="bg-secondary text-white p-sm">Item 2</div>
      <div className="bg-success text-white p-sm">Item 3</div>
    </div>
  ),
};

export const FlexDirection: Story = {
  render: () => (
    <div>
      <div className="flex flex-row bg-muted p-md mb-md gap-sm">
        <div className="bg-primary text-white p-sm">Row 1</div>
        <div className="bg-primary text-white p-sm">Row 2</div>
        <div className="bg-primary text-white p-sm">Row 3</div>
      </div>
      <div className="flex flex-col bg-muted p-md gap-sm">
        <div className="bg-secondary text-white p-sm">Column 1</div>
        <div className="bg-secondary text-white p-sm">Column 2</div>
        <div className="bg-secondary text-white p-sm">Column 3</div>
      </div>
    </div>
  ),
};

export const FlexWrap: Story = {
  render: () => (
    <div>
      <div className="flex flex-wrap bg-muted p-md gap-sm mb-md" style={{width: '300px'}}>
        <div className="bg-primary text-white p-sm">Item 1</div>
        <div className="bg-primary text-white p-sm">Item 2</div>
        <div className="bg-primary text-white p-sm">Item 3</div>
        <div className="bg-primary text-white p-sm">Item 4</div>
        <div className="bg-primary text-white p-sm">Item 5</div>
        <div className="bg-primary text-white p-sm">Item 6</div>
      </div>
      <div className="flex flex-nowrap bg-muted p-md gap-sm" style={{width: '300px'}}>
        <div className="bg-secondary text-white p-sm">No wrap</div>
        <div className="bg-secondary text-white p-sm">Items stay</div>
        <div className="bg-secondary text-white p-sm">In one line</div>
      </div>
    </div>
  ),
};

export const JustifyContent: Story = {
  render: () => (
    <div>
      <div className="flex justify-start bg-muted p-md mb-sm gap-sm">
        <div className="bg-primary text-white p-xs">Start</div>
        <div className="bg-primary text-white p-xs">Justified</div>
      </div>
      <div className="flex justify-center bg-muted p-md mb-sm gap-sm">
        <div className="bg-secondary text-white p-xs">Center</div>
        <div className="bg-secondary text-white p-xs">Justified</div>
      </div>
      <div className="flex justify-end bg-muted p-md mb-sm gap-sm">
        <div className="bg-success text-white p-xs">End</div>
        <div className="bg-success text-white p-xs">Justified</div>
      </div>
      <div className="flex justify-between bg-muted p-md mb-sm gap-sm">
        <div className="bg-warning p-xs">Between</div>
        <div className="bg-warning p-xs">Justified</div>
      </div>
      <div className="flex justify-around bg-muted p-md mb-sm gap-sm">
        <div className="bg-info text-white p-xs">Around</div>
        <div className="bg-info text-white p-xs">Justified</div>
      </div>
      <div className="flex justify-evenly bg-muted p-md gap-sm">
        <div className="bg-danger text-white p-xs">Evenly</div>
        <div className="bg-danger text-white p-xs">Justified</div>
      </div>
    </div>
  ),
};

export const AlignItems: Story = {
  render: () => (
    <div>
      <div className="flex items-start bg-muted p-md mb-sm" style={{height: '100px'}}>
        <div className="bg-primary text-white p-xs">Start</div>
        <div className="bg-primary text-white p-xs">Aligned</div>
      </div>
      <div className="flex items-center bg-muted p-md mb-sm" style={{height: '100px'}}>
        <div className="bg-secondary text-white p-xs">Center</div>
        <div className="bg-secondary text-white p-xs">Aligned</div>
      </div>
      <div className="flex items-end bg-muted p-md mb-sm" style={{height: '100px'}}>
        <div className="bg-success text-white p-xs">End</div>
        <div className="bg-success text-white p-xs">Aligned</div>
      </div>
      <div className="flex items-stretch bg-muted p-md" style={{height: '100px'}}>
        <div className="bg-warning p-xs">Stretch</div>
        <div className="bg-warning p-xs">Aligned</div>
      </div>
    </div>
  ),
};

export const GapSpacing: Story = {
  render: () => (
    <div>
      <div className="flex gap-0 bg-muted p-md mb-sm">
        <div className="bg-primary text-white p-xs">No gap</div>
        <div className="bg-primary text-white p-xs">Between</div>
      </div>
      <div className="flex gap-xs bg-muted p-md mb-sm">
        <div className="bg-secondary text-white p-xs">Extra small</div>
        <div className="bg-secondary text-white p-xs">Gap</div>
      </div>
      <div className="flex gap-sm bg-muted p-md mb-sm">
        <div className="bg-success text-white p-xs">Small gap</div>
        <div className="bg-success text-white p-xs">Between</div>
      </div>
      <div className="flex gap-md bg-muted p-md">
        <div className="bg-warning p-xs">Medium gap</div>
        <div className="bg-warning p-xs">Between items</div>
      </div>
    </div>
  ),
};

export const FlexProperties: Story = {
  render: () => (
    <div className="flex bg-muted p-md gap-sm">
      <div className="flex-1 bg-primary text-white p-sm">Flex 1 (grows)</div>
      <div className="flex-auto bg-secondary text-white p-sm">Flex auto</div>
      <div className="flex-none bg-success text-white p-sm">Flex none</div>
    </div>
  ),
};

export const NavigationBar: Story = {
  render: () => (
    <nav className="flex justify-between items-center bg-primary text-white p-md">
      <div className="font-bold">Logo</div>
      <div className="flex gap-lg">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-white">About</a>
        <a href="#" className="text-white">Contact</a>
      </div>
    </nav>
  ),
};

export const CardLayout: Story = {
  render: () => (
    <div className="flex flex-col bg-white p-lg" style={{border: '1px solid var(--digdir-color-muted)', maxWidth: '300px'}}>
      <img src="https://via.placeholder.com/300x200" alt="Card image" className="mb-md" />
      <h3 className="mb-sm">Card Title</h3>
      <p className="text-muted mb-md flex-1">Card content that can grow or shrink as needed.</p>
      <div className="flex justify-between">
        <button className="bg-primary text-white p-sm">Learn More</button>
        <button className="bg-secondary text-white p-sm">Share</button>
      </div>
    </div>
  ),
};

export const FormLayout: Story = {
  render: () => (
    <form className="flex flex-col gap-md bg-muted p-lg" style={{maxWidth: '400px'}}>
      <div className="flex flex-col gap-sm">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="p-sm" style={{border: '1px solid var(--digdir-color-muted)'}} />
      </div>
      <div className="flex flex-col gap-sm">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="p-sm" style={{border: '1px solid var(--digdir-color-muted)'}} />
      </div>
      <div className="flex justify-between items-center">
        <label className="flex items-center gap-xs">
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#" className="text-primary">Forgot password?</a>
      </div>
      <button type="submit" className="bg-primary text-white p-sm">Sign In</button>
    </form>
  ),
};