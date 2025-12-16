import { RNAlert } from '@/components/RNAlert';
import { RNAvatar } from '@/components/RNAvatar';
import { RNBadge } from '@/components/RNBadge';
import { RNButton } from '@/components/RNButton';
import { RNCard } from '@/components/RNCard';
import { RNContainer } from '@/components/RNContainer';
import { RNFooter } from '@/components/RNFooter';
import { RNInput } from '@/components/RNInput';
import { RNModal } from '@/components/RNModal';
import { RNNavbar } from '@/components/RNNavbar';
import { RNSeparator } from '@/components/RNSeparator';
import { RNSwitch } from '@/components/RNSwitch';
import { RNTextarea } from '@/components/RNTextarea';
import { RNToast } from '@/components/RNToast';
import { ArrowRight, Heart, Search, User } from 'lucide-react';
import { useState } from 'react';

const UserIcon = () => <User className="h-4 w-4" strokeWidth={2} aria-hidden="true" />;

const SearchIcon = () => <Search className="h-4 w-4" strokeWidth={2} aria-hidden="true" />;

const HeartIcon = () => <Heart className="h-4 w-4" strokeWidth={2} aria-hidden="true" />;

const ArrowRightIcon = () => <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />;

export default function AppIndex() {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--RN-Base-5)]">
      <RNNavbar />
      <main className="flex-1">
        <RNContainer className="py-8 space-y-8">
          {/* Header Section */}
          <section>
            <RNCard variant="elevated" className="text-center">
              <div className="py-8">
                <h1 className="text-4xl font-bold text-[var(--RN-Base-100)] mb-4">
                  RN Design System
                </h1>
                <p className="text-lg text-[var(--RN-Base-80)] mb-6 max-w-2xl mx-auto">
                  A comprehensive collection of reusable components built with React, TypeScript,
                  and Tailwind CSS. Featuring improved accessibility, animations, and comprehensive
                  testing.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <RNBadge variant="primary" size="lg">
                    React 18
                  </RNBadge>
                  <RNBadge variant="success" size="lg">
                    TypeScript
                  </RNBadge>
                  <RNBadge variant="info" size="lg">
                    Tailwind v4
                  </RNBadge>
                  <RNBadge variant="warning" size="lg">
                    Storybook
                  </RNBadge>
                </div>
              </div>
            </RNCard>
          </section>

          {/* System Alerts */}
          <section className="space-y-4">
            <RNAlert variant="success" title="System Status" dismissible>
              All components are functioning properly. The design system is ready for production
              use.
            </RNAlert>
          </section>

          {/* Button Showcase */}
          <section className="grid gap-6 lg:grid-cols-2">
            <RNCard variant="default">
              <h2 className="text-xl font-semibold mb-4 text-[var(--RN-Base-100)]">
                Button Variants
              </h2>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <RNButton variant="solid">Solid</RNButton>
                  <RNButton variant="outline">Outline</RNButton>
                  <RNButton variant="ghost">Ghost</RNButton>
                  <RNButton variant="link">Link</RNButton>
                  <RNButton variant="destructive">Delete</RNButton>
                </div>
                <div className="flex flex-wrap gap-2">
                  <RNButton size="xs">Extra Small</RNButton>
                  <RNButton size="sm">Small</RNButton>
                  <RNButton size="md">Medium</RNButton>
                  <RNButton size="lg">Large</RNButton>
                </div>
                <div className="flex flex-wrap gap-2">
                  <RNButton leftIcon={<UserIcon />}>With Icon</RNButton>
                  <RNButton rightIcon={<ArrowRightIcon />}>Continue</RNButton>
                  <RNButton loading={loading} onClick={handleLoadingDemo}>
                    {loading ? 'Processing...' : 'Load Demo'}
                  </RNButton>
                </div>
              </div>
            </RNCard>

            <RNCard variant="default">
              <h2 className="text-xl font-semibold mb-4 text-[var(--RN-Base-100)]">
                Form Components
              </h2>
              <div className="space-y-4">
                <RNInput
                  label="Full Name"
                  placeholder="Enter your full name"
                  leftIcon={<UserIcon />}
                />
                <RNInput
                  label="Search"
                  placeholder="Search anything..."
                  rightIcon={<SearchIcon />}
                />
                <RNInput
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  showPasswordToggle
                />
                <RNInput
                  label="Email with Error"
                  placeholder="Enter email"
                  error="Please enter a valid email address"
                  value="invalid-email"
                />
              </div>
            </RNCard>
          </section>

          {/* Alert & Badge Showcase */}
          <section className="grid gap-6 lg:grid-cols-2">
            <RNCard variant="default">
              <h2 className="text-xl font-semibold mb-4 text-[var(--RN-Base-100)]">
                Alerts & Feedback
              </h2>
              <div className="space-y-3">
                <RNAlert variant="info" title="Information">
                  This is an informational alert with additional context.
                </RNAlert>
                <RNAlert variant="warning" dismissible>
                  Warning: Please review your settings before proceeding.
                </RNAlert>
                <RNAlert variant="error" title="Error Occurred">
                  Failed to save changes. Please try again.
                </RNAlert>
              </div>
            </RNCard>

            <RNCard variant="default">
              <h2 className="text-xl font-semibold mb-4 text-[var(--RN-Base-100)]">
                Badges & Status
              </h2>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <RNBadge variant="default">Default</RNBadge>
                  <RNBadge variant="primary" rounded>
                    Primary
                  </RNBadge>
                  <RNBadge variant="success">Success</RNBadge>
                  <RNBadge variant="warning">Warning</RNBadge>
                  <RNBadge variant="danger" rounded>
                    Danger
                  </RNBadge>
                </div>
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
                </div>
              </div>
            </RNCard>
          </section>

          {/* Card Variants */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[var(--RN-Base-100)]">Card Variants</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <RNCard variant="default">
                <h3 className="font-semibold mb-2">Default Card</h3>
                <p className="text-sm text-[var(--RN-Base-70)]">
                  Standard card with border and background
                </p>
              </RNCard>

              <RNCard variant="elevated">
                <h3 className="font-semibold mb-2">Elevated Card</h3>
                <p className="text-sm text-[var(--RN-Base-70)]">Card with enhanced shadow effect</p>
              </RNCard>

              <RNCard variant="outlined">
                <h3 className="font-semibold mb-2">Outlined Card</h3>
                <p className="text-sm text-[var(--RN-Base-70)]">Card with prominent border</p>
              </RNCard>

              <RNCard variant="filled" hoverable>
                <h3 className="font-semibold mb-2">Hoverable Card</h3>
                <p className="text-sm text-[var(--RN-Base-70)]">Hover to see animation effect</p>
              </RNCard>
            </div>
          </section>

          {/* Interactive Examples */}
          <section className="grid gap-6 lg:grid-cols-2">
            <RNCard variant="elevated">
              <h2 className="text-xl font-semibold mb-4 text-[var(--RN-Base-100)]">
                Modal Examples
              </h2>
              <div className="space-y-3">
                <RNButton fullWidth onClick={() => setModalOpen(true)}>
                  Open Simple Modal
                </RNButton>
                <RNButton variant="outline" fullWidth onClick={() => setProfileModalOpen(true)}>
                  Open Profile Modal
                </RNButton>
                <RNButton variant="ghost" fullWidth onClick={handleShowToast}>
                  Show Toast Notification
                </RNButton>
              </div>
            </RNCard>

            <RNCard variant="elevated">
              <h2 className="text-xl font-semibold mb-4 text-[var(--RN-Base-100)]">
                Interactive Components
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Enable notifications</span>
                  <RNSwitch checked={checked} onChange={setChecked} />
                </div>
                <RNSeparator />
                <div className="flex items-center gap-3">
                  <RNAvatar name="John Doe" />
                  <div>
                    <p className="font-medium text-sm">John Doe</p>
                    <p className="text-xs text-[var(--RN-Base-60)]">Software Engineer</p>
                  </div>
                  <RNBadge variant="success" size="sm" className="ml-auto">
                    Active
                  </RNBadge>
                </div>
              </div>
            </RNCard>
          </section>

          {/* Form Example */}
          <section>
            <RNCard variant="elevated" className="max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold mb-6 text-[var(--RN-Base-100)] text-center">
                Contact Form (Formik + Yup)
              </h2>
            </RNCard>
          </section>
        </RNContainer>

        {/* Modals */}
        <RNModal open={modalOpen} onClose={() => setModalOpen(false)} title="Welcome!" size="md">
          <div className="space-y-4">
            <p className="text-[var(--RN-Base-80)]">
              This is a simple modal example showcasing the improved modal component with better
              accessibility, animations, and focus management.
            </p>
            <div className="flex justify-end gap-2">
              <RNButton variant="outline" onClick={() => setModalOpen(false)}>
                Cancel
              </RNButton>
              <RNButton onClick={() => setModalOpen(false)}>Continue</RNButton>
            </div>
          </div>
        </RNModal>

        <RNModal
          open={profileModalOpen}
          onClose={() => setProfileModalOpen(false)}
          title="Edit Profile"
          size="lg"
          footer={
            <div className="flex justify-end gap-2">
              <RNButton variant="outline" onClick={() => setProfileModalOpen(false)}>
                Cancel
              </RNButton>
              <RNButton onClick={() => setProfileModalOpen(false)}>Save Changes</RNButton>
            </div>
          }
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
            <RNTextarea placeholder="Tell us about yourself" rows={3} />
          </div>
        </RNModal>

        {/* Toast */}
        {showToast && (
          <RNToast>
            <div className="flex items-center gap-2">
              <HeartIcon />
              <span>Action completed successfully!</span>
            </div>
          </RNToast>
        )}
      </main>
      <RNFooter />
    </div>
  );
}
