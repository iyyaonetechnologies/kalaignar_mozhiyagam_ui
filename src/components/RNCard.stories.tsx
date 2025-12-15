import type { Meta, StoryObj } from '@storybook/react';
import { RNButton } from './RNButton';
import { RNCard } from './RNCard';

const meta: Meta<typeof RNCard> = {
  title: 'RN/RNCard',
  component: RNCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined', 'filled'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    hoverable: {
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
type Story = StoryObj<typeof RNCard>;

const SampleContent = () => (
  <>
    <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-2">Card Title</h3>
    <p className="text-[var(--RN-Base-70)] mb-4">
      This is a sample card content that demonstrates how the card component looks with different
      variants and options.
    </p>
    <RNButton size="sm">Learn More</RNButton>
  </>
);

// Basic variants
export const Default: Story = {
  args: {
    children: <SampleContent />,
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: <SampleContent />,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: <SampleContent />,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: <SampleContent />,
  },
};

// Padding variations
export const PaddingVariations: Story = {
  render: () => (
    <div className="space-y-4">
      <RNCard padding="none">
        <div className="p-4 bg-[var(--RN-Blue-10)] text-center">No Padding</div>
      </RNCard>
      <RNCard padding="sm">
        <div className="text-center">Small Padding</div>
      </RNCard>
      <RNCard padding="md">
        <div className="text-center">Medium Padding (Default)</div>
      </RNCard>
      <RNCard padding="lg">
        <div className="text-center">Large Padding</div>
      </RNCard>
      <RNCard padding="xl">
        <div className="text-center">Extra Large Padding</div>
      </RNCard>
    </div>
  ),
};

// Hoverable
export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <>
        <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-2">Hoverable Card</h3>
        <p className="text-[var(--RN-Base-70)]">
          Hover over this card to see the animation effect.
        </p>
      </>
    ),
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <RNCard variant="default">
        <h4 className="font-medium mb-2">Default</h4>
        <p className="text-sm text-[var(--RN-Base-70)]">Standard card with border and shadow</p>
      </RNCard>
      <RNCard variant="elevated">
        <h4 className="font-medium mb-2">Elevated</h4>
        <p className="text-sm text-[var(--RN-Base-70)]">Card with enhanced shadow</p>
      </RNCard>
      <RNCard variant="outlined">
        <h4 className="font-medium mb-2">Outlined</h4>
        <p className="text-sm text-[var(--RN-Base-70)]">Card with thick border</p>
      </RNCard>
      <RNCard variant="filled">
        <h4 className="font-medium mb-2">Filled</h4>
        <p className="text-sm text-[var(--RN-Base-70)]">Card with background fill</p>
      </RNCard>
    </div>
  ),
};

// Product card example
export const ProductCard: Story = {
  render: () => (
    <RNCard variant="elevated" hoverable className="w-64">
      <div className="aspect-video bg-gradient-to-br from-[var(--RN-Blue-50)] to-[var(--RN-Purple-50)] rounded-md mb-4"></div>
      <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-2">Amazing Product</h3>
      <p className="text-[var(--RN-Base-70)] text-sm mb-4">
        This is an amazing product that will solve all your problems and make your life better.
      </p>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-[var(--RN-Blue-100)]">$99.99</span>
        <RNButton size="sm">Add to Cart</RNButton>
      </div>
    </RNCard>
  ),
};

// Dashboard card example
export const DashboardCard: Story = {
  render: () => (
    <RNCard variant="default" className="w-64">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[var(--RN-Base-100)]">Total Sales</h3>
        <div className="w-8 h-8 bg-[var(--RN-Green-100)] rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-[var(--RN-Base-0)]" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="text-3xl font-bold text-[var(--RN-Base-100)] mb-2">$24,567</div>
      <div className="flex items-center text-sm">
        <span className="text-[var(--RN-Green-100)] font-medium">+12.5%</span>
        <span className="text-[var(--RN-Base-60)] ml-1">from last month</span>
      </div>
    </RNCard>
  ),
};
