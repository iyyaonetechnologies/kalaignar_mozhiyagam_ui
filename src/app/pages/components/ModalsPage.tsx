import { RNContainer } from '@/components/RNContainer';
import { RNCard } from '@/components/RNCard';
import { RNButton } from '@/components/RNButton';
import { RNModal } from '@/components/RNModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ModalsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <RNContainer className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--RN-Base-100)] mb-4">Modal Components</h1>
        <p className="text-[var(--RN-Text-muted)] mb-6">
          Dialog boxes and overlays for displaying content in a focused context.
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
          <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-6">Modal Example</h2>

          <RNButton variant="solid" onClick={() => setModalOpen(true)}>
            Open Modal
          </RNButton>

          <RNModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Example Modal"
            size="md"
          >
            <p className="text-[var(--RN-Text-muted)] mb-4">
              This is an example modal dialog. It includes proper focus management and keyboard
              navigation.
            </p>
            <div className="flex justify-end gap-3">
              <RNButton variant="ghost" onClick={() => setModalOpen(false)}>
                Cancel
              </RNButton>
              <RNButton variant="solid" onClick={() => setModalOpen(false)}>
                Confirm
              </RNButton>
            </div>
          </RNModal>
        </RNCard>
      </div>
    </RNContainer>
  );
}
