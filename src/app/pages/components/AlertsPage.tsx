import { RNContainer } from '@/components/RNContainer';
import { RNCard } from '@/components/RNCard';
import { RNButton } from '@/components/RNButton';
import { RNAlert } from '@/components/RNAlert';
import { Link } from 'react-router-dom';

export default function AlertsPage() {
  return (
    <RNContainer className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--RN-Base-100)] mb-4">Alert Components</h1>
        <p className="text-[var(--RN-Text-muted)] mb-6">
          Alert components for displaying important messages and notifications to users.
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
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-6">Alert Variants</h2>

          <div className="space-y-4">
            <RNAlert variant="success">
              <strong>Success!</strong> Your changes have been saved successfully.
            </RNAlert>

            <RNAlert variant="warning">
              <strong>Warning!</strong> Please review your information before proceeding.
            </RNAlert>

            <RNAlert variant="error">
              <strong>Error!</strong> There was an issue processing your request.
            </RNAlert>

            <RNAlert variant="info">
              <strong>Info:</strong> New features are now available in the component library.
            </RNAlert>
          </div>
        </RNCard>
      </div>
    </RNContainer>
  );
}
