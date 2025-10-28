import type { Meta, StoryObj } from '@storybook/react';
import ResponsiveTable from '../../../src/components/react/ResponsiveTable';

const meta: Meta<typeof ResponsiveTable> = {
  title: 'Components/ResponsiveTable',
  component: ResponsiveTable,
  parameters: {
    docs: {
      description: {
        component: 'A flexible and accessible component for displaying tabular data with built-in responsive behavior.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResponsiveTable>;

export const Basic: Story = {
  args: {
    data: [
      { name: 'John Doe', email: 'john.doe@example.com', role: 'Administrator', status: 'Active' },
      { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Inactive' },
      { name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'Moderator', status: 'Active' },
    ],
    headers: [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'role', label: 'Role' },
      { key: 'status', label: 'Status' },
    ],
    caption: 'User Management Table',
  },
};

export const WithHover: Story = {
  args: {
    data: [
      { product: 'Laptop', price: '$999', category: 'Electronics', stock: '15' },
      { product: 'Book', price: '$20', category: 'Education', stock: '50' },
      { product: 'Chair', price: '$150', category: 'Furniture', stock: '8' },
    ],
    headers: [
      { key: 'product', label: 'Product' },
      { key: 'price', label: 'Price' },
      { key: 'category', label: 'Category' },
      { key: 'stock', label: 'Stock' },
    ],
    hover: true,
    caption: 'Product Catalog with Hover Effect',
  },
};

export const Striped: Story = {
  args: {
    data: [
      { name: 'Alice Wilson', department: 'Engineering', position: 'Senior Developer', salary: '$120,000' },
      { name: 'Charlie Brown', department: 'Marketing', position: 'Marketing Manager', salary: '$85,000' },
      { name: 'Diana Prince', department: 'HR', position: 'HR Specialist', salary: '$70,000' },
      { name: 'Eve Adams', department: 'Finance', position: 'Accountant', salary: '$75,000' },
    ],
    headers: [
      { key: 'name', label: 'Name' },
      { key: 'department', label: 'Department' },
      { key: 'position', label: 'Position' },
      { key: 'salary', label: 'Salary' },
    ],
    striped: true,
    caption: 'Employee Information with Striped Rows',
  },
};

export const CombinedFeatures: Story = {
  args: {
    data: [
      { project: 'E-commerce Platform', status: 'On Track', progress: '85%', team: '12', deadline: '2023-12-31' },
      { project: 'Mobile App Redesign', status: 'At Risk', progress: '60%', team: '8', deadline: '2024-01-15' },
      { project: 'Data Analytics Dashboard', status: 'In Progress', progress: '40%', team: '6', deadline: '2024-02-28' },
      { project: 'API Integration', status: 'Completed', progress: '100%', team: '4', deadline: '2023-11-30' },
    ],
    headers: [
      { key: 'project', label: 'Project' },
      { key: 'status', label: 'Status' },
      { key: 'progress', label: 'Progress' },
      { key: 'team', label: 'Team Size' },
      { key: 'deadline', label: 'Deadline' },
    ],
    hover: true,
    striped: true,
    caption: 'Project Status Overview',
  },
};

export const CustomStyling: Story = {
  args: {
    data: [
      { id: '1', username: 'admin', email: 'admin@example.com', role: 'Administrator', lastLogin: '2023-12-01' },
      { id: '2', username: 'jdoe', email: 'john.doe@example.com', role: 'User', lastLogin: '2023-11-28' },
      { id: '3', username: 'jsmith', email: 'jane.smith@example.com', role: 'Moderator', lastLogin: '2023-11-25' },
    ],
    headers: [
      { key: 'id', label: 'ID' },
      { key: 'username', label: 'Username' },
      { key: 'email', label: 'Email' },
      { key: 'role', label: 'Role' },
      { key: 'lastLogin', label: 'Last Login' },
    ],
    hover: true,
    className: 'custom-table',
    caption: 'User Management with Custom Styling',
  },
};

export const WithReactElements: Story = {
  render: () => (
    <ResponsiveTable
      data={[
        {
          name: 'John Doe',
          email: 'john.doe@example.com',
          status: <span className="text-success">✓ Active</span>,
          actions: (
            <div className="flex gap-sm">
              <button className="bg-primary text-white p-xs">Edit</button>
              <button className="bg-danger text-white p-xs">Delete</button>
            </div>
          ),
        },
        {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          status: <span className="text-muted">Inactive</span>,
          actions: (
            <div className="flex gap-sm">
              <button className="bg-primary text-white p-xs">Edit</button>
              <button className="bg-danger text-white p-xs">Delete</button>
            </div>
          ),
        },
      ]}
      headers={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'status', label: 'Status' },
        { key: 'actions', label: 'Actions' },
      ]}
      hover={true}
      caption="Table with React Elements"
    />
  ),
};

export const NonResponsive: Story = {
  args: {
    data: [
      { code: 'USD', name: 'US Dollar', symbol: '$', rate: '1.00' },
      { code: 'EUR', name: 'Euro', symbol: '€', rate: '0.85' },
      { code: 'GBP', name: 'British Pound', symbol: '£', rate: '0.73' },
      { code: 'JPY', name: 'Japanese Yen', symbol: '¥', rate: '110.25' },
    ],
    headers: [
      { key: 'code', label: 'Code' },
      { key: 'name', label: 'Currency Name' },
      { key: 'symbol', label: 'Symbol' },
      { key: 'rate', label: 'Exchange Rate' },
    ],
    responsive: false,
    striped: true,
    caption: 'Currency Exchange Rates (Non-Responsive)',
  },
};