import { RNAccordion } from '@/components/RNAccordion';
import { RNAlert } from '@/components/RNAlert';
import { RNAvatar } from '@/components/RNAvatar';
import { RNBadge } from '@/components/RNBadge';
import { RNButton } from '@/components/RNButton';
import { RNCard } from '@/components/RNCard';
import { RNCarousel } from '@/components/RNCarousal';
import { RNContainer } from '@/components/RNContainer';
import RNHelpRequestCard from '@/components/RNHelpRequestCard';
import { RNImage } from '@/components/RNImage';
import { RNInput } from '@/components/RNInput';
import { RNLabel } from '@/components/RNLabel';
import { RNModal } from '@/components/RNModal';
import { RNQuoteCard } from '@/components/RNQuote';
import { RNSeparator } from '@/components/RNSeparator';
import { RNSwitch } from '@/components/RNSwitch';
import { RNTextarea } from '@/components/RNTextarea';
import Footer from '@/components/ui/Footer';
import GoalsPanel from '@/components/ui/GoalsPanel';
import ProjectCard from '@/components/ui/ProjectCard';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons for better visual appeal
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

const HeartIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
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

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <RNContainer className="py-8 space-y-8">
      <RNCard>
        <GoalsPanel />
      </RNCard>
      <RNCarousel
        arrows={false}
        autoPlay={true}
        slidesToShow={2}
        children={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, key) => (
          <ProjectCard
            key={key}
            imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
        ))}
      ></RNCarousel>

      <Footer></Footer>
      <RNHelpRequestCard
        imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        name="John Doe"
        age={30}
        gender="Male"
        amountRequested={5000}
        ailment="Back Pain"
        currency="INR"
      ></RNHelpRequestCard>
      <RNCarousel
        arrows={false}
        autoPlay={true}
        slidesToShow={2}
        children={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
          <RNQuoteCard
            key={key}
            text="The best way to predict the future is to create it."
            author="Peter Drucker"
          />
        ))}
      ></RNCarousel>
      <div>
        <RNLabel label="title::description" />
        <RNImage
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="sample"
          className="rounded-md object-cover w-96 h-96"
        />
        <RNAccordion
          items={[
            {
              title: 'Accordion 1',
              content: <h1 className="text-2xl">Hello Accordion1</h1>,
            },
            {
              title: 'Accordion 2',
              content: <h1 className="text-2xl">Hello Accordion2</h1>,
            },
            {
              title: 'Accordion 3',
              content: <h1 className="text-2xl">Hello Accordion3</h1>,
            },
          ]}
        />
      </div>
      {/* Header Section */}
      <section>
        <RNCard variant="elevated" className="text-center">
          <div className="py-8">
            <h1 className="text-4xl font-bold text-[var(--RN-Base-100)] mb-4">RN Design System</h1>
            <p className="text-[var(--RN-Text-muted)] text-lg mb-6">
              A comprehensive React component library with TypeScript, Tailwind CSS v4, and modern
              best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/components">
                <RNButton variant="solid" size="lg" rightIcon={<ArrowRightIcon />}>
                  Explore Components
                </RNButton>
              </Link>
              <RNButton
                variant="outline"
                size="lg"
                leftIcon={<SearchIcon />}
                onClick={() => setModalOpen(true)}
              >
                Quick Demo
              </RNButton>
            </div>
          </div>
        </RNCard>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--RN-Base-100)] mb-6 text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RNCard variant="outlined" hoverable>
            <div className="p-6">
              <div className="bg-[var(--RN-Blue-100)] p-3 rounded-lg w-fit mb-4">
                <UserIcon />
              </div>
              <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-2">
                TypeScript Ready
              </h3>
              <p className="text-[var(--RN-Text-muted)]">
                Full type safety with comprehensive interfaces and excellent developer experience.
              </p>
            </div>
          </RNCard>

          <RNCard variant="outlined" hoverable>
            <div className="p-6">
              <div className="bg-[var(--RN-Green-100)] p-3 rounded-lg w-fit mb-4">
                <HeartIcon />
              </div>
              <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-2">
                Accessible Design
              </h3>
              <p className="text-[var(--RN-Text-muted)]">
                WCAG compliant components with proper ARIA attributes and keyboard navigation.
              </p>
            </div>
          </RNCard>

          <RNCard variant="outlined" hoverable>
            <div className="p-6">
              <div className="bg-[var(--RN-Orange-100)] p-3 rounded-lg w-fit mb-4">
                <SearchIcon />
              </div>
              <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-2">
                Modern Tooling
              </h3>
              <p className="text-[var(--RN-Text-muted)]">
                Built with Vite, Tailwind CSS v4, Storybook, and comprehensive testing.
              </p>
            </div>
          </RNCard>
        </div>
      </section>

      {/* Quick Examples */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--RN-Base-100)] mb-6 text-center">
          Component Showcase
        </h2>

        <div className="space-y-8">
          {/* Buttons */}
          <RNCard variant="outlined">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-4">
                Buttons & Actions
              </h3>
              <div className="flex flex-wrap gap-3">
                <RNButton variant="solid" onClick={handleLoadingDemo} loading={loading}>
                  Primary Action
                </RNButton>
                <RNButton variant="outline">Secondary</RNButton>
                <RNButton variant="ghost" leftIcon={<HeartIcon />}>
                  With Icon
                </RNButton>
                <RNButton variant="destructive" size="sm">
                  Destructive
                </RNButton>
              </div>
            </div>
          </RNCard>

          {/* Form Example */}
          <RNCard variant="outlined">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-4">
                Form Controls
              </h3>
              <div className="space-y-4 max-w-md">
                <RNInput
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  leftIcon={<UserIcon />}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <RNInput
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <RNTextarea
                  placeholder="Tell us about yourself..."
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <RNSwitch checked={checked} onChange={setChecked} />
                    <span className="text-sm text-[var(--RN-Base-100)]">Remember me</span>
                  </div>

                  <RNButton variant="solid">Submit Form</RNButton>
                </div>
              </div>
            </div>
          </RNCard>

          {/* Feedback Components */}
          <RNCard variant="outlined">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[var(--RN-Base-100)] mb-4">
                Feedback & Status
              </h3>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <RNBadge variant="primary">Primary</RNBadge>
                  <RNBadge variant="success">Success</RNBadge>
                  <RNBadge variant="warning">Warning</RNBadge>
                  <RNBadge variant="danger">Danger</RNBadge>
                  <RNBadge variant="info">Info</RNBadge>
                </div>

                <RNSeparator />

                <div className="space-y-3">
                  <RNAlert variant="success">
                    <strong>Success!</strong> Your changes have been saved successfully.
                  </RNAlert>

                  <RNAlert variant="warning">
                    <strong>Warning!</strong> Please review your information before proceeding.
                  </RNAlert>

                  <RNAlert variant="info">
                    <strong>Info:</strong> New features are now available in the component library.
                  </RNAlert>
                </div>

                <div className="flex gap-3">
                  <RNButton variant="outline" onClick={() => setProfileModalOpen(true)}>
                    Open Modal
                  </RNButton>
                </div>
              </div>
            </div>
          </RNCard>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <RNCard variant="filled" className="text-center">
          <div className="py-8">
            <h2 className="text-2xl font-semibold text-[var(--RN-Base-100)] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[var(--RN-Text-muted)] mb-6">
              Explore our complete component library and start building amazing user interfaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/components">
                <RNButton variant="solid" size="lg">
                  View All Components
                </RNButton>
              </Link>
              <RNButton variant="outline" size="lg">
                Documentation
              </RNButton>
            </div>
          </div>
        </RNCard>
      </section>

      {/* Demo Modal */}
      <RNModal open={modalOpen} onClose={() => setModalOpen(false)} title="Welcome!" size="md">
        <div className="space-y-4">
          <p className="text-[var(--RN-Text-muted)]">
            This is a demo modal showcasing the RNModal component. It includes proper focus
            management, keyboard navigation, and accessible design patterns.
          </p>

          <div className="space-y-2">
            <RNAvatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
              size={64}
            />
            <p className="text-sm text-[var(--RN-Text-muted)]">
              Components work seamlessly together with consistent theming.
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <RNButton variant="ghost" onClick={() => setModalOpen(false)}>
            Cancel
          </RNButton>
          <RNButton variant="solid" onClick={() => setModalOpen(false)}>
            Got it!
          </RNButton>
        </div>
      </RNModal>

      {/* Profile Modal */}
      <RNModal
        open={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        title="User Profile"
        size="lg"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <RNAvatar
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              size={80}
            />
            <div>
              <h3 className="text-lg font-semibold text-[var(--RN-Base-100)]">Sarah Johnson</h3>
              <p className="text-[var(--RN-Text-muted)]">Senior UI/UX Designer</p>
              <div className="flex gap-2 mt-2">
                <RNBadge variant="success" size="sm">
                  Active
                </RNBadge>
                <RNBadge variant="info" size="sm">
                  Pro User
                </RNBadge>
              </div>
            </div>
          </div>

          <RNSeparator />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-[var(--RN-Base-100)] mb-2">Contact</h4>
              <p className="text-sm text-[var(--RN-Text-muted)]">sarah.johnson@example.com</p>
              <p className="text-sm text-[var(--RN-Text-muted)]">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-medium text-[var(--RN-Base-100)] mb-2">Location</h4>
              <p className="text-sm text-[var(--RN-Text-muted)]">San Francisco, CA</p>
              <p className="text-sm text-[var(--RN-Text-muted)]">United States</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <RNButton variant="outline" onClick={() => setProfileModalOpen(false)}>
            Close
          </RNButton>
          <RNButton variant="solid">Edit Profile</RNButton>
        </div>
      </RNModal>
    </RNContainer>
  );
}
