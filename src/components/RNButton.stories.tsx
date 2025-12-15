import type { Meta, StoryObj } from '@storybook/react';
import { RNButton } from './RNButton';

const meta: Meta<typeof RNButton> = {
  title: 'RN/RNButton',
  component: RNButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'link', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RNButton>;

// Basic variants
export const Solid: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <RNButton size="xs">Extra Small</RNButton>
      <RNButton size="sm">Small</RNButton>
      <RNButton size="md">Medium</RNButton>
      <RNButton size="lg">Large</RNButton>
      <RNButton size="xl">Extra Large</RNButton>
    </div>
  ),
};

// States
export const Loading: Story = {
  args: {
    children: 'Save Changes',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

// With icons
const UserIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

export const WithLeftIcon: Story = {
  args: {
    children: 'Profile',
    leftIcon: <UserIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Continue',
    rightIcon: <ArrowRightIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Next Step',
    leftIcon: <UserIcon />,
    rightIcon: <ArrowRightIcon />,
  },
};

// Full width
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      <RNButton variant="solid">Solid</RNButton>
      <RNButton variant="outline">Outline</RNButton>
      <RNButton variant="ghost">Ghost</RNButton>
      <RNButton variant="link">Link</RNButton>
      <RNButton variant="destructive">Destructive</RNButton>
      <RNButton variant="solid" disabled>
        Disabled
      </RNButton>
    </div>
  ),
};
