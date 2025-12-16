import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { RNCard } from '@/components/RNCard';

describe('RNCard', () => {
  it('renders card with content', () => {
    render(<RNCard>Card content</RNCard>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(<RNCard variant="default">Default</RNCard>);

    let card = screen.getByText('Default').parentElement;
    expect(card).toHaveClass('bg-[var(--RN-Base-0)]', 'border');

    rerender(<RNCard variant="elevated">Elevated</RNCard>);
    card = screen.getByText('Elevated').parentElement;
    expect(card).toHaveClass('shadow-lg', 'border-0');

    rerender(<RNCard variant="outlined">Outlined</RNCard>);
    card = screen.getByText('Outlined').parentElement;
    expect(card).toHaveClass('border-2', 'shadow-none');

    rerender(<RNCard variant="filled">Filled</RNCard>);
    card = screen.getByText('Filled').parentElement;
    expect(card).toHaveClass('bg-[var(--RN-Base-10)]', 'border-0');
  });

  it('applies correct padding classes', () => {
    const { rerender } = render(<RNCard padding="sm">Small padding</RNCard>);

    let card = screen.getByText('Small padding').parentElement;
    expect(card).toHaveClass('p-3');

    rerender(<RNCard padding="lg">Large padding</RNCard>);
    card = screen.getByText('Large padding').parentElement;
    expect(card).toHaveClass('p-6');

    rerender(<RNCard padding="none">No padding</RNCard>);
    card = screen.getByText('No padding').parentElement;
    expect(card).toHaveClass('p-0');
  });

  it('applies hoverable styles when hoverable is true', () => {
    render(<RNCard hoverable>Hoverable card</RNCard>);

    const card = screen.getByText('Hoverable card').parentElement;
    expect(card).toHaveClass('cursor-pointer');
  });

  it('supports click events when hoverable', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <RNCard hoverable onClick={handleClick}>
        Clickable card
      </RNCard>
    );

    const card = screen.getByText('Clickable card').parentElement;
    await user.click(card!);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('supports custom className', () => {
    render(<RNCard className="custom-class">Card content</RNCard>);

    const card = screen.getByText('Card content').parentElement;
    expect(card).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <RNCard data-testid="custom-card" aria-label="Custom label">
        Card content
      </RNCard>
    );

    const card = screen.getByTestId('custom-card');
    expect(card).toHaveAttribute('aria-label', 'Custom label');
  });

  it('renders complex content correctly', () => {
    render(
      <RNCard>
        <h2>Card Title</h2>
        <p>Card description</p>
        <button>Action Button</button>
      </RNCard>
    );

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action Button' })).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    render(<RNCard>Default card</RNCard>);

    const card = screen.getByText('Default card').parentElement;
    expect(card).toHaveClass('p-4'); // default padding is 'md'
    expect(card).toHaveClass('bg-[var(--RN-Base-0)]'); // default variant is 'default'
  });
});
