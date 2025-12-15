import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { RNBadge } from '@/components/RNBadge';

describe('RNBadge', () => {
  it('renders badge with text', () => {
    render(<RNBadge>Badge Text</RNBadge>);
    expect(screen.getByText('Badge Text')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(<RNBadge variant="primary">Primary</RNBadge>);

    expect(screen.getByText('Primary')).toHaveClass('bg-[var(--RN-Blue-100)]');

    rerender(<RNBadge variant="success">Success</RNBadge>);
    expect(screen.getByText('Success')).toHaveClass('bg-[var(--RN-Green-100)]');

    rerender(<RNBadge variant="danger">Danger</RNBadge>);
    expect(screen.getByText('Danger')).toHaveClass('bg-[var(--RN-Red-100)]');
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<RNBadge size="sm">Small</RNBadge>);

    expect(screen.getByText('Small')).toHaveClass('px-1.5');

    rerender(<RNBadge size="lg">Large</RNBadge>);
    expect(screen.getByText('Large')).toHaveClass('px-2.5');
  });

  it('applies rounded class when rounded is true', () => {
    render(<RNBadge rounded>Rounded Badge</RNBadge>);

    expect(screen.getByText('Rounded Badge')).toHaveClass('rounded-full');
  });

  it('renders as dot when dot prop is true', () => {
    render(<RNBadge dot variant="success" />);

    const badge = screen.getByRole('generic');
    expect(badge).toHaveClass('w-2', 'h-2', 'p-0', 'rounded-full');
  });

  it('does not render children when dot is true', () => {
    render(<RNBadge dot>This should not be visible</RNBadge>);

    expect(screen.queryByText('This should not be visible')).not.toBeInTheDocument();
  });

  it('supports custom className', () => {
    render(<RNBadge className="custom-class">Badge</RNBadge>);

    expect(screen.getByText('Badge')).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <RNBadge data-testid="custom-badge" aria-label="Custom label">
        Badge
      </RNBadge>
    );

    const badge = screen.getByTestId('custom-badge');
    expect(badge).toHaveAttribute('aria-label', 'Custom label');
  });
});
