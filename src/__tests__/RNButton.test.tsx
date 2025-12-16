import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { RNButton } from '@/components/RNButton';

describe('RNButton', () => {
  it('renders button with text', () => {
    render(<RNButton>Click me</RNButton>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<RNButton onClick={handleClick}>Click me</RNButton>);

    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(<RNButton variant="outline">Button</RNButton>);

    expect(screen.getByRole('button')).toHaveClass('border');

    rerender(<RNButton variant="ghost">Button</RNButton>);
    expect(screen.getByRole('button')).toHaveClass('bg-transparent');

    rerender(<RNButton variant="destructive">Button</RNButton>);
    expect(screen.getByRole('button')).toHaveClass('bg-[var(--RN-Red-100)]');
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<RNButton size="sm">Button</RNButton>);

    expect(screen.getByRole('button')).toHaveClass('h-8');

    rerender(<RNButton size="lg">Button</RNButton>);
    expect(screen.getByRole('button')).toHaveClass('h-11');
  });

  it('shows loading state correctly', () => {
    render(<RNButton loading>Submit</RNButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toBeDisabled();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('is disabled when loading', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <RNButton loading onClick={handleClick}>
        Submit
      </RNButton>
    );

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });

  it('is disabled when disabled prop is true', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <RNButton disabled onClick={handleClick}>
        Submit
      </RNButton>
    );

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });

  it('renders with left icon', () => {
    const LeftIcon = () => <span data-testid="left-icon">←</span>;

    render(<RNButton leftIcon={<LeftIcon />}>With Icon</RNButton>);

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByText('With Icon')).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    const RightIcon = () => <span data-testid="right-icon">→</span>;

    render(<RNButton rightIcon={<RightIcon />}>With Icon</RNButton>);

    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    expect(screen.getByText('With Icon')).toBeInTheDocument();
  });

  it('applies fullWidth class when fullWidth is true', () => {
    render(<RNButton fullWidth>Full Width</RNButton>);

    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('supports custom className', () => {
    render(<RNButton className="custom-class">Button</RNButton>);

    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <RNButton data-testid="custom-button" aria-label="Custom label">
        Button
      </RNButton>
    );

    const button = screen.getByTestId('custom-button');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<RNButton onClick={handleClick}>Button</RNButton>);

    const button = screen.getByRole('button');
    button.focus();

    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);

    await user.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
