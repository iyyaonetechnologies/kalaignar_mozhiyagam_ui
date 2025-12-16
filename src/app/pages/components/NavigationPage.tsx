import { RNContainer } from '@/components/RNContainer';
import { RNCard } from '@/components/RNCard';
import { RNButton } from '@/components/RNButton';
import { RNBreadCrumb } from '@/components/RNBreadCrumb';
import { RNTabs } from '@/components/RNTabs';
import { Link } from 'react-router-dom';

export default function NavigationPage() {
  return (
    <RNContainer className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--RN-Base-100)] mb-4">Navigation Components</h1>
        <p className="text-[var(--RN-Text-muted)] mb-6">
          Navigation elements including breadcrumbs, tabs, and menus.
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
        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-6">
            Breadcrumb Example
          </h2>

          <RNBreadCrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Components', href: '/components' },
              { label: 'Navigation' },
            ]}
          />
        </RNCard>

        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-6">Tabs Example</h2>

          <RNTabs
            tabs={[
              {
                id: 'tab1',
                label: 'Overview',
                content: <div className="p-4">Overview content here</div>,
              },
              {
                id: 'tab2',
                label: 'Details',
                content: <div className="p-4">Details content here</div>,
              },
              {
                id: 'tab3',
                label: 'Settings',
                content: <div className="p-4">Settings content here</div>,
              },
            ]}
          />
        </RNCard>
      </div>
    </RNContainer>
  );
}
