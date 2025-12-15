import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RNModal } from './RNModal';
import { RNButton } from './RNButton';
import { RNInput } from './RNInput';

const meta: Meta<typeof RNModal> = {
  title: 'RN/RNModal',
  component: RNModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    open: {
      control: 'boolean',
    },
    showCloseButton: {
      control: 'boolean',
    },
    closeOnOverlayClick: {
      control: 'boolean',
    },
    closeOnEscape: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RNModal>;

const ModalTrigger = ({
  buttonText = 'Open Modal',
  modalProps = {},
  children,
}: {
  buttonText?: string;
  modalProps?: Partial<React.ComponentProps<typeof RNModal>>;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <RNButton onClick={() => setOpen(true)}>{buttonText}</RNButton>
      <RNModal open={open} onClose={() => setOpen(false)} {...modalProps}>
        {children}
      </RNModal>
    </>
  );
};

// Basic modal
export const Default: Story = {
  render: () => (
    <ModalTrigger modalProps={{ title: 'Default Modal' }}>
      <p className="text-[var(--RN-Base-80)]">
        This is a default modal with basic content. You can put any content here.
      </p>
    </ModalTrigger>
  ),
};

// Different sizes
export const Small: Story = {
  render: () => (
    <ModalTrigger buttonText="Small Modal" modalProps={{ title: 'Small Modal', size: 'sm' }}>
      <p className="text-[var(--RN-Base-80)]">
        This is a small modal perfect for simple confirmations or brief messages.
      </p>
    </ModalTrigger>
  ),
};

export const Large: Story = {
  render: () => (
    <ModalTrigger buttonText="Large Modal" modalProps={{ title: 'Large Modal', size: 'lg' }}>
      <div className="space-y-4">
        <p className="text-[var(--RN-Base-80)]">
          This is a large modal that can accommodate more content. It's perfect for forms, detailed
          information, or complex interactions.
        </p>
        <p className="text-[var(--RN-Base-80)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris.
        </p>
      </div>
    </ModalTrigger>
  ),
};

// With footer
export const WithFooter: Story = {
  render: () => (
    <ModalTrigger
      buttonText="Modal with Footer"
      modalProps={{
        title: 'Confirm Action',
        footer: (
          <div className="flex justify-end gap-2">
            <RNButton variant="outline">Cancel</RNButton>
            <RNButton variant="destructive">Delete</RNButton>
          </div>
        ),
      }}
    >
      <p className="text-[var(--RN-Base-80)]">
        Are you sure you want to delete this item? This action cannot be undone.
      </p>
    </ModalTrigger>
  ),
};

// Form modal
export const FormModal: Story = {
  render: () => (
    <ModalTrigger
      buttonText="Edit Profile"
      modalProps={{
        title: 'Edit Profile',
        size: 'md',
        footer: (
          <div className="flex justify-end gap-2">
            <RNButton variant="outline">Cancel</RNButton>
            <RNButton>Save Changes</RNButton>
          </div>
        ),
      }}
    >
      <div className="space-y-4">
        <RNInput label="First Name" placeholder="Enter your first name" defaultValue="John" />
        <RNInput label="Last Name" placeholder="Enter your last name" defaultValue="Doe" />
        <RNInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          defaultValue="john.doe@example.com"
        />
        <RNInput
          label="Bio"
          placeholder="Tell us about yourself"
          helperText="Optional - up to 500 characters"
        />
      </div>
    </ModalTrigger>
  ),
};

// Without close button
export const NoCloseButton: Story = {
  render: () => (
    <ModalTrigger
      buttonText="Modal without Close"
      modalProps={{
        title: 'Important Notice',
        showCloseButton: false,
        closeOnOverlayClick: false,
        closeOnEscape: false,
        footer: (
          <div className="flex justify-center">
            <RNButton>I Understand</RNButton>
          </div>
        ),
      }}
    >
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-[var(--RN-Orange-100)] rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-[var(--RN-Base-0)]" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[var(--RN-Base-100)]">
          Terms and Conditions Updated
        </h3>
        <p className="text-[var(--RN-Base-80)]">
          We have updated our terms and conditions. Please review and accept the changes to continue
          using our service.
        </p>
      </div>
    </ModalTrigger>
  ),
};

// Content with scrolling
export const ScrollableContent: Story = {
  render: () => (
    <ModalTrigger
      buttonText="Long Content Modal"
      modalProps={{
        title: 'Terms of Service',
        size: 'lg',
        footer: (
          <div className="flex justify-end gap-2">
            <RNButton variant="outline">Decline</RNButton>
            <RNButton>Accept</RNButton>
          </div>
        ),
      }}
    >
      <div className="space-y-4 text-[var(--RN-Base-80)]">
        <section>
          <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-2">
            1. Acceptance of Terms
          </h3>
          <p>
            By accessing and using this service, you accept and agree to be bound by the terms and
            provision of this agreement. If you do not agree to abide by the above, please do not
            use this service.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-2">2. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials on our website
            for personal, non-commercial transitory viewing only. This is the grant of a license,
            not a transfer of title, and under this license you may not modify or copy the
            materials.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-2">3. Disclaimer</h3>
          <p>
            The materials on our website are provided on an 'as is' basis. We make no warranties,
            expressed or implied, and hereby disclaim and negate all other warranties including
            without limitation, implied warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or other violation of
            rights.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-2">4. Limitations</h3>
          <p>
            In no event shall our company or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on our website, even if we or
            our authorized representative has been notified orally or in writing of the possibility
            of such damage.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-2">
            5. Privacy Policy
          </h3>
          <p>
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and
            protect your information when you use our service. By using our service, you agree to
            the collection and use of information in accordance with our Privacy Policy.
          </p>
        </section>
      </div>
    </ModalTrigger>
  ),
};
