import type { Meta, StoryObj } from '@storybook/react';
import { RNAlert } from './RNAlert';
import { RNButton } from './RNButton';

const meta: Meta<typeof RNAlert> = {
  title: 'RN/RNAlert',
  component: RNAlert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
    },
    dismissible: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RNAlert>;

// Basic variants
export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Your changes have been saved successfully!',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Please review your information before proceeding.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'There was an error processing your request. Please try again.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'New features are available in this update. Check them out!',
  },
};

// With titles
export const WithTitle: Story = {
  args: {
    variant: 'warning',
    title: 'Attention Required',
    children: 'Your subscription expires in 3 days. Renew now to avoid service interruption.',
  },
};

// Dismissible alerts
export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'New Update Available',
    dismissible: true,
    children: 'Version 2.0 is now available with new features and improvements.',
  },
};

// Without icons
export const WithoutIcon: Story = {
  args: {
    variant: 'success',
    showIcon: false,
    children: 'This is a success message without an icon.',
  },
};

// Custom icon
export const CustomIcon: Story = {
  args: {
    variant: 'info',
    title: 'Backup Complete',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
        />
      </svg>
    ),
    children: 'Your data has been successfully backed up to the cloud.',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <RNAlert variant="success" title="Success">
        Operation completed successfully.
      </RNAlert>

      <RNAlert variant="warning" title="Warning">
        Please verify your email address.
      </RNAlert>

      <RNAlert variant="error" title="Error">
        Failed to connect to the server.
      </RNAlert>

      <RNAlert variant="info" title="Information">
        System maintenance scheduled for tonight.
      </RNAlert>
    </div>
  ),
};

// Complex content
export const ComplexContent: Story = {
  render: () => (
    <RNAlert variant="warning" title="Action Required" dismissible>
      <div className="space-y-2">
        <p>
          Your payment method will expire soon. Update your billing information to avoid service
          interruption.
        </p>
        <div className="flex gap-2 mt-3">
          <RNButton size="sm" variant="outline">
            Update Payment
          </RNButton>
          <RNButton size="sm" variant="ghost">
            Remind Later
          </RNButton>
        </div>
      </div>
    </RNAlert>
  ),
};

// Multiple alerts
export const MultipleAlerts: Story = {
  render: () => (
    <div className="space-y-3">
      <RNAlert variant="error" title="Connection Lost" dismissible>
        Unable to connect to the server. Trying to reconnect...
      </RNAlert>

      <RNAlert variant="warning" title="Unsaved Changes">
        You have unsaved changes. Save your work to avoid losing data.
      </RNAlert>

      <RNAlert variant="success" title="Auto-save Enabled">
        Your work is being automatically saved every 30 seconds.
      </RNAlert>

      <RNAlert variant="info" title="Tip" dismissible>
        Press Ctrl+S to manually save your work at any time.
      </RNAlert>
    </div>
  ),
};

// Form validation alerts
export const FormValidation: Story = {
  render: () => (
    <div className="space-y-4">
      <RNAlert variant="error" title="Form Validation Errors">
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>Email address is required</li>
          <li>Password must be at least 8 characters</li>
          <li>Please accept the terms and conditions</li>
        </ul>
      </RNAlert>

      <RNAlert variant="warning">
        Some fields are missing. Please complete all required fields before submitting.
      </RNAlert>
    </div>
  ),
};

// System status alerts
export const SystemStatus: Story = {
  render: () => (
    <div className="space-y-3">
      <RNAlert
        variant="success"
        title="All Systems Operational"
        icon={
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
        }
      >
        All services are running normally.
      </RNAlert>

      <RNAlert
        variant="warning"
        title="Scheduled Maintenance"
        icon={
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
        }
      >
        System maintenance scheduled for December 15, 2024 from 2:00 AM to 4:00 AM EST.
      </RNAlert>
    </div>
  ),
};
