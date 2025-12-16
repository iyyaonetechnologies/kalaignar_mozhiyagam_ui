import { RNContainer } from '@/components/RNContainer';
import { RNCard } from '@/components/RNCard';
import { RNButton } from '@/components/RNButton';
import { RNBadge } from '@/components/RNBadge';
import { RNAlert } from '@/components/RNAlert';
import { RNSeparator } from '@/components/RNSeparator';
import { Link } from 'react-router-dom';

const componentCategories = [
  {
    title: 'Trust Management Forms',
    description: 'Forms and interfaces for managing trust operations',
    items: [
      {
        name: 'Donation Forms',
        path: '/components/buttons',
        description: 'Various donation button styles and payment forms',
      },
      {
        name: 'Beneficiary Applications',
        path: '/components/inputs',
        description: 'Application forms for beneficiaries and grant requests',
      },
      {
        name: 'Volunteer Registration',
        path: '/components/forms',
        description: 'Complete registration forms for volunteers and staff',
      },
    ],
  },
  {
    title: 'Trust Communication Components',
    description: 'Components for trust announcements and information display',
    items: [
      {
        name: 'Program Cards',
        path: '/components/cards',
        description: 'Information cards for trust programs and initiatives',
      },
      {
        name: 'Impact Modals',
        path: '/components/modals',
        description: 'Success stories and impact presentation',
      },
      {
        name: 'Trust Navigation',
        path: '/components/navigation',
        description: 'Navigation for trust departments and services',
      },
    ],
  },
  {
    title: 'Status & Notification Components',
    description: 'Components for trust updates and beneficiary status',
    items: [
      {
        name: 'Program Alerts',
        path: '/components/alerts',
        description: 'Announcements and program notifications',
      },
      {
        name: 'Status Badges',
        path: '/components/badges',
        description: 'Application status and program enrollment indicators',
      },
    ],
  },
  {
    title: 'Data Management',
    description: 'Components for displaying trust data and beneficiary information',
    items: [
      {
        name: 'Beneficiary Tables',
        path: '/components/tables',
        description: 'Tables for beneficiary lists and program data',
      },
    ],
  },
];

export default function ComponentsPage() {
  return (
    <RNContainer className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--RN-Base-100)] mb-4">
          Kalaignar Mozhiyagam Trust - Component Library
        </h1>
        <p className="text-[var(--RN-Text-muted)] mb-6">
          Explore our comprehensive collection of trust-specific React components built for managing
          trust operations, beneficiary services, and community programs with TypeScript and
          Tailwind CSS.
        </p>

        <RNAlert variant="info" className="mb-6">
          <p className="text-sm">
            Each component is designed specifically for trust management with accessibility,
            cultural sensitivity, and community needs in mind. Click on any component category below
            to see detailed examples and usage patterns for trust operations.
          </p>
        </RNAlert>
      </div>

      <div className="space-y-8">
        {componentCategories.map((category, index) => (
          <div key={category.title}>
            <h2 className="text-2xl font-semibold text-[var(--RN-Base-100)] mb-3">
              {category.title}
            </h2>
            <p className="text-[var(--RN-Text-muted)] mb-4">{category.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {category.items.map((item) => (
                <Link key={item.name} to={item.path} className="block">
                  <RNCard
                    variant="outlined"
                    padding="lg"
                    hoverable
                    className="h-full transition-all duration-200 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-medium text-[var(--RN-Primary-500)]">
                        {item.name}
                      </h4>
                      <RNBadge variant="primary">View</RNBadge>
                    </div>
                    <p className="text-sm text-[var(--RN-Text-muted)]">{item.description}</p>
                  </RNCard>
                </Link>
              ))}
            </div>

            {index < componentCategories.length - 1 && <RNSeparator />}
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-[var(--RN-Base-0)] rounded-lg border">
        <h3 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-4">Getting Started</h3>
        <p className="text-[var(--RN-Text-muted)] mb-4">
          All components follow consistent naming conventions with RN prefixes and support
          dark/light theming. Each component includes TypeScript interfaces for props and
          comprehensive accessibility features.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link to="/">
            <RNButton variant="outline" size="sm">
              ← Back to Home
            </RNButton>
          </Link>
          <RNButton variant="ghost" size="sm">
            View on GitHub
          </RNButton>
        </div>
      </div>
    </RNContainer>
  );
}
