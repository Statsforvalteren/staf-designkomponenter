import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Utilities/Table',
  parameters: {
    docs: {
      description: {
        component: 'Table utilities for creating responsive and accessible data tables.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const BasicTable: Story = {
  render: () => (
    <div className="table-responsive">
      <table className="table" role="table" aria-label="Basic table example">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>Administrator</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>jane.smith@example.com</td>
            <td>User</td>
            <td>Inactive</td>
          </tr>
          <tr>
            <td>Bob Johnson</td>
            <td>bob.johnson@example.com</td>
            <td>Moderator</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const TableWithHover: Story = {
  render: () => (
    <div className="table-responsive">
      <table className="table table-hover" role="table" aria-label="Table with hover effect">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Laptop</td>
            <td>$999</td>
            <td>Electronics</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Book</td>
            <td>$20</td>
            <td>Education</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Chair</td>
            <td>$150</td>
            <td>Furniture</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const StripedTable: Story = {
  render: () => (
    <div className="table-responsive">
      <table className="table table-striped" role="table" aria-label="Striped table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Position</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice Wilson</td>
            <td>Engineering</td>
            <td>Senior Developer</td>
            <td>$120,000</td>
          </tr>
          <tr>
            <td>Charlie Brown</td>
            <td>Marketing</td>
            <td>Marketing Manager</td>
            <td>$85,000</td>
          </tr>
          <tr>
            <td>Diana Prince</td>
            <td>HR</td>
            <td>HR Specialist</td>
            <td>$70,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const ResponsiveStackedTable: Story = {
  render: () => (
    <div className="table-responsive">
      <table className="table table-stacked" role="table" aria-label="Responsive stacked table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">John Doe</td>
            <td data-label="Email">john.doe@example.com</td>
            <td data-label="Phone">+1 234 567 8900</td>
            <td data-label="Department">Engineering</td>
          </tr>
          <tr>
            <td data-label="Name">Jane Smith</td>
            <td data-label="Email">jane.smith@example.com</td>
            <td data-label="Phone">+1 234 567 8901</td>
            <td data-label="Department">Marketing</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const TableWithCaption: Story = {
  render: () => (
    <div className="table-responsive">
      <table className="table table-hover" role="table" aria-label="Employee information table">
        <caption>Employee Information - Q4 2023</caption>
        <thead>
          <tr>
            <th scope="col">Employee ID</th>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Start Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Alice Johnson</td>
            <td>Engineering</td>
            <td>2023-01-15</td>
          </tr>
          <tr>
            <td>002</td>
            <td>Bob Wilson</td>
            <td>Marketing</td>
            <td>2023-02-20</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const ComplexTable: Story = {
  render: () => (
    <div className="table-responsive">
      <table className="table table-hover table-striped" role="table" aria-label="Project status table">
        <caption>Current Project Status Overview</caption>
        <thead>
          <tr>
            <th scope="col">Project</th>
            <th scope="col">Status</th>
            <th scope="col">Progress</th>
            <th scope="col">Team Size</th>
            <th scope="col">Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>E-commerce Platform</td>
            <td><span className="text-success">✓ On Track</span></td>
            <td>85%</td>
            <td>12</td>
            <td>2023-12-31</td>
          </tr>
          <tr>
            <td>Mobile App Redesign</td>
            <td><span className="text-warning">⚠ At Risk</span></td>
            <td>60%</td>
            <td>8</td>
            <td>2024-01-15</td>
          </tr>
          <tr>
            <td>Data Analytics Dashboard</td>
            <td><span className="text-info">⟳ In Progress</span></td>
            <td>40%</td>
            <td>6</td>
            <td>2024-02-28</td>
          </tr>
          <tr>
            <td>API Integration</td>
            <td><span className="text-success">✓ Completed</span></td>
            <td>100%</td>
            <td>4</td>
            <td>2023-11-30</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const DataTable: Story = {
  render: () => (
    <div className="table-responsive">
      <table className="table table-hover" role="table" aria-label="User management table">
        <caption>User Management System</caption>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Last Login</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>admin</td>
            <td>admin@example.com</td>
            <td>Administrator</td>
            <td>2023-12-01</td>
            <td>
              <button className="bg-primary text-white p-xs mr-sm">Edit</button>
              <button className="bg-danger text-white p-xs">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>jdoe</td>
            <td>john.doe@example.com</td>
            <td>User</td>
            <td>2023-11-28</td>
            <td>
              <button className="bg-primary text-white p-xs mr-sm">Edit</button>
              <button className="bg-danger text-white p-xs">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const ComparisonTable: Story = {
  render: () => (
    <div className="table-responsive">
      <table className="table table-striped" role="table" aria-label="Plan comparison table">
        <caption>Subscription Plan Comparison</caption>
        <thead>
          <tr>
            <th scope="col">Feature</th>
            <th scope="col">Basic</th>
            <th scope="col">Pro</th>
            <th scope="col">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Users</td>
            <td>1</td>
            <td>10</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>5GB</td>
            <td>100GB</td>
            <td>1TB</td>
          </tr>
          <tr>
            <td>Support</td>
            <td>Email</td>
            <td>Priority</td>
            <td>24/7 Phone</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>$9/month</td>
            <td>$29/month</td>
            <td>$99/month</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};