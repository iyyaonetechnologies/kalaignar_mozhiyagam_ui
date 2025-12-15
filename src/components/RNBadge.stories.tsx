import type { Meta, StoryObj } from '@storybook/react';
import { RNBadge } from './RNBadge';

const meta: Meta<typeof RNBadge> = {
  title: 'RN/RNBadge',
  component: RNBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: 'boolean',
    },
    dot: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RNBadge>;

// Basic variants
export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    variant: 'danger',
  },
};

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'info',
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <RNBadge size="sm" variant="primary">
        Small
      </RNBadge>
      <RNBadge size="md" variant="primary">
        Medium
      </RNBadge>
      <RNBadge size="lg" variant="primary">
        Large
      </RNBadge>
    </div>
  ),
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <RNBadge variant="default">Default</RNBadge>
      <RNBadge variant="primary">Primary</RNBadge>
      <RNBadge variant="success">Success</RNBadge>
      <RNBadge variant="warning">Warning</RNBadge>
      <RNBadge variant="danger">Danger</RNBadge>
      <RNBadge variant="info">Info</RNBadge>
    </div>
  ),
};

// Rounded badges
export const Rounded: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <RNBadge variant="primary" rounded>
        Rounded
      </RNBadge>
      <RNBadge variant="success" rounded>
        New
      </RNBadge>
      <RNBadge variant="warning" rounded>
        Beta
      </RNBadge>
      <RNBadge variant="danger" rounded>
        99+
      </RNBadge>
    </div>
  ),
};

// Dot badges
export const Dots: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <RNBadge variant="success" dot />
        <span className="text-sm">Online</span>
      </div>
      <div className="flex items-center gap-2">
        <RNBadge variant="warning" dot />
        <span className="text-sm">Away</span>
      </div>
      <div className="flex items-center gap-2">
        <RNBadge variant="danger" dot />
        <span className="text-sm">Offline</span>
      </div>
      <div className="flex items-center gap-2">
        <RNBadge variant="default" dot />
        <span className="text-sm">Unknown</span>
      </div>
    </div>
  ),
};

// Notification badges
export const NotificationBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-8 h-8 bg-[var(--RN-Base-20)] rounded-full"></div>
          <RNBadge variant="danger" size="sm" rounded className="absolute -top-1 -right-1">
            3
          </RNBadge>
        </div>
        <span className="text-sm">Messages</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-8 h-8 bg-[var(--RN-Base-20)] rounded-full"></div>
          <RNBadge variant="primary" size="sm" rounded className="absolute -top-1 -right-1">
            12
          </RNBadge>
        </div>
        <span className="text-sm">Notifications</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-8 h-8 bg-[var(--RN-Base-20)] rounded-full"></div>
          <RNBadge variant="success" dot className="absolute top-0 right-0" />
        </div>
        <span className="text-sm">Online Status</span>
      </div>
    </div>
  ),
};

// Status badges with icons
export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 border border-[var(--RN-Base-20)] rounded-lg">
        <span className="text-sm font-medium">Production Deployment</span>
        <RNBadge variant="success" rounded>
          Live
        </RNBadge>
      </div>

      <div className="flex items-center justify-between p-3 border border-[var(--RN-Base-20)] rounded-lg">
        <span className="text-sm font-medium">Staging Environment</span>
        <RNBadge variant="warning" rounded>
          Pending
        </RNBadge>
      </div>

      <div className="flex items-center justify-between p-3 border border-[var(--RN-Base-20)] rounded-lg">
        <span className="text-sm font-medium">Development Build</span>
        <RNBadge variant="danger" rounded>
          Failed
        </RNBadge>
      </div>

      <div className="flex items-center justify-between p-3 border border-[var(--RN-Base-20)] rounded-lg">
        <span className="text-sm font-medium">API Health Check</span>
        <RNBadge variant="info" rounded>
          Monitoring
        </RNBadge>
      </div>
    </div>
  ),
};
