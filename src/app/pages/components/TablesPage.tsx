import { RNContainer } from '@/components/RNContainer';
import { RNCard } from '@/components/RNCard';
import { RNButton } from '@/components/RNButton';
import { RNTable } from '@/components/RNTable';
import { Link } from 'react-router-dom';

export default function TablesPage() {
  return (
    <RNContainer className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--RN-Base-100)] mb-4">Table Components</h1>
        <p className="text-[var(--RN-Text-muted)] mb-6">
          Data tables for displaying structured information.
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
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-6">Basic Table</h2>

          <RNTable
            headers={['Name', 'Email', 'Role']}
            rows={[
              ['John Doe', 'john@example.com', 'Developer'],
              ['Jane Smith', 'jane@example.com', 'Designer'],
            ]}
          />
        </RNCard>
      </div>
    </RNContainer>
  );
}
