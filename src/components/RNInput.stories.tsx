import type { Meta, StoryObj } from '@storybook/react';
import { RNInput } from './RNInput';

const meta: Meta<typeof RNInput> = {
  title: 'RN/RNInput',
  component: RNInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
    showPasswordToggle: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RNInput>;

// Basic input
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

// With label
export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

// With helper text
export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters long',
  },
};

// With error
export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

// Password with toggle
export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    showPasswordToggle: true,
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

const SearchIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export const WithLeftIcon: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    leftIcon: <UserIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    rightIcon: <SearchIcon />,
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This is disabled',
    disabled: true,
    value: 'Disabled value',
  },
};

// Form example
export const FormExample: Story = {
  render: () => (
    <div className="space-y-4">
      <RNInput
        label="First Name"
        placeholder="Enter your first name"
        helperText="As it appears on your ID"
      />
      <RNInput
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        leftIcon={
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        }
      />
      <RNInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        showPasswordToggle
        helperText="Must be at least 8 characters"
      />
    </div>
  ),
};

// Different types
export const InputTypes: Story = {
  render: () => (
    <div className="space-y-4">
      <RNInput label="Text" type="text" placeholder="Text input" />
      <RNInput label="Email" type="email" placeholder="email@example.com" />
      <RNInput label="Password" type="password" placeholder="Password" showPasswordToggle />
      <RNInput label="Number" type="number" placeholder="123" />
      <RNInput label="Tel" type="tel" placeholder="+1 (555) 123-4567" />
      <RNInput label="URL" type="url" placeholder="https://example.com" />
    </div>
  ),
};
