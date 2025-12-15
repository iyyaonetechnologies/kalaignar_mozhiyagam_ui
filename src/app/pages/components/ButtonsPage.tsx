import { RNContainer } from '@/components/RNContainer';
import { RNCard } from '@/components/RNCard';
import { RNButton } from '@/components/RNButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons for Trust Actions
const DonateIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const VolunteerIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const ProgramIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

export default function ButtonsPage() {
  const [loading, setLoading] = useState(false);

  const handleDonationDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <RNContainer className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--RN-Base-100)] mb-4">Trust Action Buttons</h1>
        <p className="text-[var(--RN-Text-muted)] mb-6">
          Button components designed specifically for Kalaignar Mozhiyagam Trust operations -
          donations, volunteer registration, program enrollment, and community engagement.
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
        {/* Trust Action Variants */}
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">
            Trust Action Variants
          </h2>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Different button styles for various trust operations and community engagement
            activities.
          </p>

          <div className="flex flex-wrap gap-4">
            <RNButton
              variant="solid"
              className="bg-[var(--RN-Blue-100)] hover:bg-[var(--RN-Blue-200)]"
            >
              Donate Now
            </RNButton>
            <RNButton
              variant="outline"
              className="border-[var(--RN-Green-100)] text-[var(--RN-Green-100)]"
            >
              Join as Volunteer
            </RNButton>
            <RNButton
              variant="ghost"
              className="text-[var(--RN-Orange-100)] hover:bg-[var(--RN-Orange-10)]"
            >
              Apply for Program
            </RNButton>
            <RNButton variant="link" className="text-[var(--RN-Blue-100)]">
              Learn More
            </RNButton>
            <RNButton variant="destructive">Emergency Support</RNButton>
          </div>
        </RNCard>

        {/* Button Sizes for Trust Actions */}
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">
            Action Button Sizes
          </h2>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Multiple size options for different trust interface contexts and layouts.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <RNButton variant="solid" size="xs" className="bg-[var(--RN-Blue-100)]">
              Quick Donate
            </RNButton>
            <RNButton variant="solid" size="sm" className="bg-[var(--RN-Green-100)]">
              Volunteer
            </RNButton>
            <RNButton variant="solid" size="md" className="bg-[var(--RN-Orange-100)]">
              Apply for Aid
            </RNButton>
            <RNButton variant="solid" size="lg" className="bg-[var(--RN-Blue-100)]">
              Major Donation
            </RNButton>
            <RNButton variant="solid" size="xl" className="bg-[var(--RN-Purple-100)]">
              Become Patron
            </RNButton>
          </div>
        </RNCard>

        {/* Button States for Trust Operations */}
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">
            Trust Operation States
          </h2>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Loading states and feedback for trust transactions and applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <RNButton
              variant="solid"
              onClick={handleDonationDemo}
              loading={loading}
              className="bg-[var(--RN-Blue-100)]"
            >
              {loading ? 'Processing Donation...' : 'Donate ₹1000'}
            </RNButton>
            <RNButton
              variant="outline"
              disabled
              className="border-[var(--RN-Base-40)] text-[var(--RN-Base-40)]"
            >
              Application Closed
            </RNButton>
            <RNButton variant="solid" loading className="bg-[var(--RN-Green-100)]">
              Submitting Application
            </RNButton>
          </div>
        </RNCard>

        {/* Trust Action Buttons with Icons */}
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">
            Trust Actions with Icons
          </h2>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Icon-enhanced buttons for clear visual communication of trust services.
          </p>

          <div className="flex flex-wrap gap-4">
            <RNButton variant="solid" leftIcon={<DonateIcon />} className="bg-[var(--RN-Blue-100)]">
              Make Donation
            </RNButton>
            <RNButton
              variant="outline"
              rightIcon={<VolunteerIcon />}
              className="border-[var(--RN-Green-100)] text-[var(--RN-Green-100)]"
            >
              Volunteer Registration
            </RNButton>
            <RNButton
              variant="ghost"
              leftIcon={<ProgramIcon />}
              className="text-[var(--RN-Orange-100)]"
            >
              View Programs
            </RNButton>
            <RNButton
              variant="solid"
              leftIcon={<DonateIcon />}
              rightIcon={<VolunteerIcon />}
              className="bg-[var(--RN-Purple-100)]"
            >
              Support & Volunteer
            </RNButton>
          </div>
        </RNCard>

        {/* Full Width Trust Actions */}
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">
            Full Width Trust Actions
          </h2>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Full-width buttons for important trust actions and form submissions.
          </p>

          <div className="space-y-3">
            <RNButton
              variant="solid"
              fullWidth
              className="bg-[var(--RN-Blue-100)] hover:bg-[var(--RN-Blue-200)]"
            >
              Submit Donation Application
            </RNButton>
            <RNButton
              variant="outline"
              fullWidth
              className="border-[var(--RN-Green-100)] text-[var(--RN-Green-100)]"
            >
              Register for Program Updates
            </RNButton>
          </div>
        </RNCard>

        {/* Trust Action Groups */}
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">
            Trust Action Groups
          </h2>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Common button groupings for trust operations and beneficiary interactions.
          </p>

          <div className="space-y-6">
            {/* Donation Actions */}
            <div>
              <h3 className="text-lg font-medium text-[var(--RN-Base-100)] mb-3">
                Donation Actions
              </h3>
              <div className="flex gap-3">
                <RNButton variant="solid" className="bg-[var(--RN-Blue-100)]">
                  Confirm Donation
                </RNButton>
                <RNButton
                  variant="outline"
                  className="border-[var(--RN-Base-40)] text-[var(--RN-Base-70)]"
                >
                  Review Details
                </RNButton>
              </div>
            </div>

            {/* Application Management */}
            <div>
              <h3 className="text-lg font-medium text-[var(--RN-Base-100)] mb-3">
                Application Management
              </h3>
              <div className="flex flex-wrap gap-2">
                <RNButton
                  variant="ghost"
                  size="sm"
                  className="text-[var(--RN-Green-100)] hover:bg-[var(--RN-Green-10)]"
                >
                  Approve
                </RNButton>
                <RNButton
                  variant="ghost"
                  size="sm"
                  className="text-[var(--RN-Orange-100)] hover:bg-[var(--RN-Orange-10)]"
                >
                  Review
                </RNButton>
                <RNButton
                  variant="ghost"
                  size="sm"
                  className="text-[var(--RN-Blue-100)] hover:bg-[var(--RN-Blue-10)]"
                >
                  Contact Applicant
                </RNButton>
                <RNButton variant="destructive" size="sm">
                  Reject Application
                </RNButton>
              </div>
            </div>

            {/* Program Navigation */}
            <div>
              <h3 className="text-lg font-medium text-[var(--RN-Base-100)] mb-3">
                Program Navigation
              </h3>
              <div className="flex justify-between">
                <RNButton
                  variant="outline"
                  leftIcon={
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  }
                  className="border-[var(--RN-Base-40)] text-[var(--RN-Base-70)]"
                >
                  Previous Program
                </RNButton>
                <RNButton
                  variant="solid"
                  rightIcon={<ProgramIcon />}
                  className="bg-[var(--RN-Blue-100)]"
                >
                  Next Program
                </RNButton>
              </div>
            </div>
          </div>
        </RNCard>
      </div>
    </RNContainer>
  );
}
