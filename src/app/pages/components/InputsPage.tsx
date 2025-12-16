import { RNContainer } from '@/components/RNContainer';
import { RNCard } from '@/components/RNCard';
import { RNButton } from '@/components/RNButton';
import { RNInput } from '@/components/RNInput';
import { RNTextarea } from '@/components/RNTextarea';
import { RNSelect } from '@/components/RNSelect';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

export default function InputsPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [country, setCountry] = useState('');

  return (
    <RNContainer className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--RN-Base-100)] mb-4">Input Components</h1>
        <p className="text-[var(--RN-Text-muted)] mb-6">
          Form input components including text fields, textareas, selects, and specialized input
          types.
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
        {/* Basic Text Inputs */}
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">Text Inputs</h2>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Standard text input fields with labels, placeholders, and validation support.
          </p>

          <div className="space-y-4 max-w-md">
            <RNInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <RNInput label="Full Name" placeholder="Enter your full name" />

            <RNInput label="Phone Number" type="tel" placeholder="+1 (555) 123-4567" />
          </div>
        </RNCard>

        {/* Inputs with Icons */}
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">
            Inputs with Icons
          </h2>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Enhanced inputs with left and right icons for better visual hierarchy.
          </p>

          <div className="space-y-4 max-w-md">
            <RNInput label="Username" placeholder="Enter username" leftIcon={<UserIcon />} />

            <RNInput
              label="Search"
              placeholder="Search for anything..."
              leftIcon={<SearchIcon />}
            />

            <RNInput
              label="Website"
              placeholder="https://example.com"
              rightIcon={
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              }
            />
          </div>
        </RNCard>

        {/* Password Input */}
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">Password Input</h2>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Password input with toggle visibility functionality.
          </p>

          <div className="space-y-4 max-w-md">
            <RNInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <RNInput label="Confirm Password" type="password" placeholder="Confirm your password" />
          </div>
        </RNCard>

        {/* Input States */}
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">Input States</h2>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Different input states including error, disabled, and readonly.
          </p>

          <div className="space-y-4 max-w-md">
            <RNInput
              label="Error State"
              placeholder="This has an error"
              error="This field is required"
            />

            <RNInput label="Disabled Input" placeholder="This is disabled" disabled />

            <RNInput label="Readonly Input" value="This is readonly" readOnly />
          </div>
        </RNCard>

        {/* Textarea */}
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">Textarea</h2>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Multi-line text input for longer content.
          </p>

          <div className="space-y-4 max-w-md">
            <RNTextarea
              placeholder="Tell us about yourself..."
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />

            <RNTextarea placeholder="Additional comments" rows={3} />
          </div>
        </RNCard>

        {/* Select Dropdown */}
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">Select Dropdown</h2>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Dropdown selection component for choosing from predefined options.
          </p>

          <div className="space-y-4 max-w-md">
            <RNSelect
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              options={[
                { label: 'Select Country', value: '' },
                { label: 'United States', value: 'us' },
                { label: 'Canada', value: 'ca' },
                { label: 'United Kingdom', value: 'uk' },
                { label: 'Australia', value: 'au' },
                { label: 'Germany', value: 'de' },
                { label: 'France', value: 'fr' },
              ]}
            />

            <RNSelect
              options={[
                { label: 'Choose a category', value: '' },
                { label: 'Technology', value: 'technology' },
                { label: 'Business', value: 'business' },
                { label: 'Design', value: 'design' },
                { label: 'Marketing', value: 'marketing' },
              ]}
            />
          </div>
        </RNCard>

        {/* Input Variations */}
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">Input Variations</h2>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Different input types for various data formats.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <RNInput label="Date" type="date" />

            <RNInput label="Time" type="time" />

            <RNInput label="Number" type="number" placeholder="Enter a number" />

            <RNInput label="URL" type="url" placeholder="https://example.com" />

            <RNInput label="Color" type="color" />

            <RNInput label="Range" type="range" min="0" max="100" />
          </div>
        </RNCard>
      </div>
    </RNContainer>
  );
}
