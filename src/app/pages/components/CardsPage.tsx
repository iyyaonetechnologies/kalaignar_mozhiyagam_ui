import { RNContainer } from '@/components/RNContainer';
import { RNCard } from '@/components/RNCard';
import { RNButton } from '@/components/RNButton';
import { RNBadge } from '@/components/RNBadge';
import { Link } from 'react-router-dom';

export default function CardsPage() {
  return (
    <RNContainer className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--RN-Base-100)] mb-4">Card Components</h1>
        <p className="text-[var(--RN-Text-muted)] mb-6">
          Flexible card containers for organizing and displaying content with different styles and
          layouts.
        </p>

        <div className="mb-6">
          <Link to="/components">
            <RNButton variant="ghost" size="sm">
              ← Back to Components
            </RNButton>
          </Link>
        </div>
      </div>

      <div className="space-y-8">
        {/* Card Variants */}
        <div>
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-6">Card Variants</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RNCard variant="default" padding="lg">
              <h3 className="text-lg font-medium text-[var(--RN-Base-100)] mb-2">Default Card</h3>
              <p className="text-[var(--RN-Text-muted)] text-sm">
                Basic card with subtle background and border.
              </p>
            </RNCard>

            <RNCard variant="elevated" padding="lg">
              <h3 className="text-lg font-medium text-[var(--RN-Base-100)] mb-2">Elevated Card</h3>
              <p className="text-[var(--RN-Text-muted)] text-sm">
                Card with shadow for more prominence.
              </p>
            </RNCard>

            <RNCard variant="outlined" padding="lg">
              <h3 className="text-lg font-medium text-[var(--RN-Base-100)] mb-2">Outlined Card</h3>
              <p className="text-[var(--RN-Text-muted)] text-sm">Clean card with visible border.</p>
            </RNCard>

            <RNCard variant="filled" padding="lg">
              <h3 className="text-lg font-medium text-[var(--RN-Base-100)] mb-2">Filled Card</h3>
              <p className="text-[var(--RN-Text-muted)] text-sm">
                Card with solid background color.
              </p>
            </RNCard>
          </div>
        </div>

        {/* Card Padding Options */}
        <div>
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-6">Padding Options</h2>

          <div className="space-y-4">
            <RNCard variant="outlined" padding="none">
              <div className="bg-blue-100 h-8 flex items-center justify-center text-sm">
                No Padding
              </div>
            </RNCard>

            <RNCard variant="outlined" padding="sm">
              <div className="bg-blue-100 h-8 flex items-center justify-center text-sm">
                Small Padding
              </div>
            </RNCard>

            <RNCard variant="outlined" padding="md">
              <div className="bg-blue-100 h-8 flex items-center justify-center text-sm">
                Medium Padding (Default)
              </div>
            </RNCard>

            <RNCard variant="outlined" padding="lg">
              <div className="bg-blue-100 h-8 flex items-center justify-center text-sm">
                Large Padding
              </div>
            </RNCard>

            <RNCard variant="outlined" padding="xl">
              <div className="bg-blue-100 h-8 flex items-center justify-center text-sm">
                Extra Large Padding
              </div>
            </RNCard>
          </div>
        </div>

        {/* Interactive Cards */}
        <div>
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-6">
            Interactive Cards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RNCard variant="outlined" padding="lg" hoverable>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[var(--RN-Base-100)] mb-2">
                  Fast Performance
                </h3>
                <p className="text-[var(--RN-Text-muted)] text-sm">
                  Lightning-fast components built for performance.
                </p>
              </div>
            </RNCard>

            <RNCard variant="outlined" padding="lg" hoverable>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[var(--RN-Base-100)] mb-2">Accessible</h3>
                <p className="text-[var(--RN-Text-muted)] text-sm">
                  WCAG compliant with proper accessibility features.
                </p>
              </div>
            </RNCard>

            <RNCard variant="outlined" padding="lg" hoverable>
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[var(--RN-Base-100)] mb-2">Customizable</h3>
                <p className="text-[var(--RN-Text-muted)] text-sm">
                  Easily customizable with Tailwind CSS theming.
                </p>
              </div>
            </RNCard>
          </div>
        </div>

        {/* Complex Card Examples */}
        <div>
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-6">
            Complex Card Examples
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Product Card */}
            <RNCard variant="outlined" padding="none" hoverable>
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg"></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-[var(--RN-Base-100)]">
                    Modern UI Components
                  </h3>
                  <RNBadge variant="success">New</RNBadge>
                </div>
                <p className="text-[var(--RN-Text-muted)] text-sm mb-4">
                  A comprehensive collection of modern UI components built with React and
                  TypeScript.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[var(--RN-Base-100)]">$49</span>
                  <RNButton variant="solid" size="sm">
                    Get Started
                  </RNButton>
                </div>
              </div>
            </RNCard>

            {/* Profile Card */}
            <RNCard variant="elevated" padding="lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-[var(--RN-Base-0)] font-semibold text-xl">
                  JS
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--RN-Base-100)]">John Smith</h3>
                  <p className="text-[var(--RN-Text-muted)] text-sm">Senior Frontend Developer</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--RN-Text-muted)]">Projects</span>
                  <span className="font-medium text-[var(--RN-Base-100)]">24</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--RN-Text-muted)]">Experience</span>
                  <span className="font-medium text-[var(--RN-Base-100)]">5 years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--RN-Text-muted)]">Location</span>
                  <span className="font-medium text-[var(--RN-Base-100)]">San Francisco</span>
                </div>
              </div>

              <div className="flex gap-2">
                <RNButton variant="solid" size="sm" fullWidth>
                  Message
                </RNButton>
                <RNButton variant="outline" size="sm" fullWidth>
                  View Profile
                </RNButton>
              </div>
            </RNCard>
          </div>
        </div>

        {/* Card with Actions */}
        <div>
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-6">
            Cards with Actions
          </h2>

          <RNCard variant="outlined" padding="lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-2">
                  Design System Update
                </h3>
                <p className="text-[var(--RN-Text-muted)] text-sm">
                  New components and improvements have been added to the design system. This
                  includes better accessibility features and performance optimizations.
                </p>
              </div>
              <RNBadge variant="info">Update</RNBadge>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[var(--RN-Base-20)]">
              <div className="flex items-center gap-4 text-sm text-[var(--RN-Text-muted)]">
                <span>2 hours ago</span>
                <span>•</span>
                <span>Design Team</span>
              </div>

              <div className="flex gap-2">
                <RNButton variant="ghost" size="sm">
                  Dismiss
                </RNButton>
                <RNButton variant="solid" size="sm">
                  View Details
                </RNButton>
              </div>
            </div>
          </RNCard>
        </div>
      </div>
    </RNContainer>
  );
}
