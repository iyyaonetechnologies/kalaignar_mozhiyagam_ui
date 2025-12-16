import { RNContainer } from '@/components/RNContainer';
import { RNCard } from '@/components/RNCard';
import { RNButton } from '@/components/RNButton';
import { RNBadge } from '@/components/RNBadge';
import { Link } from 'react-router-dom';

export default function BadgesPage() {
  return (
    <RNContainer className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--RN-Base-100)] mb-4">Badge Components</h1>
        <p className="text-[var(--RN-Text-muted)] mb-6">
          Small status indicators and labels for highlighting important information.
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
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-6">Badge Variants</h2>

          <div className="flex flex-wrap gap-3">
            <RNBadge variant="default">Default</RNBadge>
            <RNBadge variant="primary">Primary</RNBadge>
            <RNBadge variant="success">Success</RNBadge>
            <RNBadge variant="warning">Warning</RNBadge>
            <RNBadge variant="danger">Danger</RNBadge>
            <RNBadge variant="info">Info</RNBadge>
          </div>
        </RNCard>

        <RNCard variant="outlined" padding="lg">
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-6">Badge Sizes</h2>

          <div className="flex flex-wrap items-center gap-3">
            <RNBadge variant="primary" size="sm">
              Small
            </RNBadge>
            <RNBadge variant="primary" size="md">
              Medium
            </RNBadge>
            <RNBadge variant="primary" size="lg">
              Large
            </RNBadge>
          </div>
        </RNCard>
      </div>
    </RNContainer>
  );
}
