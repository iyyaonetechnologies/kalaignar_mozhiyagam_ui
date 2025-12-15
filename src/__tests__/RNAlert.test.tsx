import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { RNAlert } from '@/components/RNAlert';

describe('RNAlert', () => {
  it('renders alert with content', () => {
    render(<RNAlert>Alert message</RNAlert>);
    expect(screen.getByText('Alert message')).toBeInTheDocument();
  });

  it('has correct role attribute', () => {
    render(<RNAlert>Alert message</RNAlert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders with title when provided', () => {
    render(<RNAlert title="Alert Title">Alert message</RNAlert>);

    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Alert message')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(<RNAlert variant="success">Success message</RNAlert>);

    expect(screen.getByRole('alert')).toHaveClass('bg-[var(--RN-Green-10)]');

    rerender(<RNAlert variant="error">Error message</RNAlert>);
    expect(screen.getByRole('alert')).toHaveClass('bg-[var(--RN-Red-10)]');

    rerender(<RNAlert variant="warning">Warning message</RNAlert>);
    expect(screen.getByRole('alert')).toHaveClass('bg-[var(--RN-Orange-10)]');
  });

  it('shows default icon when showIcon is true', () => {
    render(
      <RNAlert variant="success" showIcon>
        Success message
      </RNAlert>
    );

    const alert = screen.getByRole('alert');
    const icon = alert.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('hides icon when showIcon is false', () => {
    render(
      <RNAlert variant="success" showIcon={false}>
        Success message
      </RNAlert>
    );

    const alert = screen.getByRole('alert');
    const icon = alert.querySelector('svg');
    expect(icon).not.toBeInTheDocument();
  });

  it('renders custom icon when provided', () => {
    const CustomIcon = () => <span data-testid="custom-icon">Custom</span>;

    render(
      <RNAlert variant="info" icon={<CustomIcon />}>
        Info message
      </RNAlert>
    );

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('shows dismiss button when dismissible is true', () => {
    render(<RNAlert dismissible>Dismissible alert</RNAlert>);

    expect(screen.getByRole('button', { name: /dismiss alert/i })).toBeInTheDocument();
  });

  it('hides dismiss button when dismissible is false', () => {
    render(<RNAlert dismissible={false}>Non-dismissible alert</RNAlert>);

    expect(screen.queryByRole('button', { name: /dismiss alert/i })).not.toBeInTheDocument();
  });

  it('calls onDismiss when dismiss button is clicked', async () => {
    const user = userEvent.setup();
    const handleDismiss = vi.fn();

    render(
      <RNAlert dismissible onDismiss={handleDismiss}>
        Dismissible alert
      </RNAlert>
    );

    const dismissButton = screen.getByRole('button', { name: /dismiss alert/i });
    await user.click(dismissButton);

    expect(handleDismiss).toHaveBeenCalledTimes(1);
  });

  it('removes alert from DOM when dismissed', async () => {
    const user = userEvent.setup();

    render(<RNAlert dismissible>Dismissible alert</RNAlert>);

    const dismissButton = screen.getByRole('button', { name: /dismiss alert/i });
    await user.click(dismissButton);

    expect(screen.queryByText('Dismissible alert')).not.toBeInTheDocument();
  });

  it('supports custom className', () => {
    render(<RNAlert className="custom-class">Alert message</RNAlert>);

    expect(screen.getByRole('alert')).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <RNAlert data-testid="custom-alert" aria-describedby="description">
        Alert message
      </RNAlert>
    );

    const alert = screen.getByTestId('custom-alert');
    expect(alert).toHaveAttribute('aria-describedby', 'description');
  });

  it('renders complex content correctly', () => {
    render(
      <RNAlert title="Complex Alert">
        <div>
          <p>First paragraph</p>
          <p>Second paragraph</p>
        </div>
      </RNAlert>
    );

    expect(screen.getByText('Complex Alert')).toBeInTheDocument();
    expect(screen.getByText('First paragraph')).toBeInTheDocument();
    expect(screen.getByText('Second paragraph')).toBeInTheDocument();
  });
});
