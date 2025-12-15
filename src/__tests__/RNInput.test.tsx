import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { RNInput } from '@/components/RNInput';

describe('RNInput', () => {
  it('renders input with placeholder', () => {
    render(<RNInput placeholder="Enter text..." />);
    expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<RNInput label="Email Address" placeholder="Enter email" />);

    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(
      <RNInput
        label="Username"
        placeholder="Enter username"
        helperText="Must be at least 3 characters"
      />
    );

    expect(screen.getByText('Must be at least 3 characters')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(<RNInput label="Email" placeholder="Enter email" error="Please enter a valid email" />);

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('handles user input', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<RNInput placeholder="Type here" onChange={handleChange} />);

    const input = screen.getByPlaceholderText('Type here');
    await user.type(input, 'Hello World');

    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue('Hello World');
  });

  it('supports disabled state', () => {
    render(<RNInput placeholder="Disabled input" disabled />);

    const input = screen.getByPlaceholderText('Disabled input');
    expect(input).toBeDisabled();
  });

  it('renders password input with toggle', async () => {
    const user = userEvent.setup();

    render(<RNInput type="password" placeholder="Enter password" showPasswordToggle />);

    const input = screen.getByPlaceholderText('Enter password');
    const toggleButton = screen.getByRole('button', { name: /show password/i });

    expect(input).toHaveAttribute('type', 'password');

    await user.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');

    await user.click(toggleButton);
    expect(input).toHaveAttribute('type', 'password');
  });

  it('renders with left icon', () => {
    const LeftIcon = () => <span data-testid="left-icon">@</span>;

    render(<RNInput placeholder="Email" leftIcon={<LeftIcon />} />);

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    const RightIcon = () => <span data-testid="right-icon">🔍</span>;

    render(<RNInput placeholder="Search" rightIcon={<RightIcon />} />);

    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('applies error styles when error is present', () => {
    render(<RNInput placeholder="Email" error="Invalid email" />);

    const input = screen.getByPlaceholderText('Email');
    expect(input).toHaveClass('border-[var(--RN-Red-100)]');
  });

  it('handles focus and blur events', async () => {
    const user = userEvent.setup();
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();

    render(<RNInput placeholder="Test input" onFocus={handleFocus} onBlur={handleBlur} />);

    const input = screen.getByPlaceholderText('Test input');

    await user.click(input);
    expect(handleFocus).toHaveBeenCalled();

    await user.tab();
    expect(handleBlur).toHaveBeenCalled();
  });

  it('supports custom className', () => {
    render(<RNInput placeholder="Custom input" className="custom-class" />);

    const input = screen.getByPlaceholderText('Custom input');
    expect(input).toHaveClass('custom-class');
  });

  it('generates unique id when not provided', () => {
    const { container } = render(<RNInput label="Test Label" />);

    const label = container.querySelector('label');
    const input = container.querySelector('input');

    expect(label).toHaveAttribute('for');
    expect(input).toHaveAttribute('id');
    expect(label?.getAttribute('for')).toBe(input?.getAttribute('id'));
  });

  it('uses provided id', () => {
    render(<RNInput id="custom-id" label="Test Label" />);

    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('id', 'custom-id');
  });

  it('associates helper text with input', () => {
    render(<RNInput label="Username" helperText="Enter your username" id="username-input" />);

    const input = screen.getByLabelText('Username');
    expect(input).toHaveAttribute('aria-describedby', 'username-input-desc');

    const helperText = screen.getByText('Enter your username');
    expect(helperText).toHaveAttribute('id', 'username-input-desc');
  });

  it('associates error message with input', () => {
    render(<RNInput label="Email" error="Invalid email format" id="email-input" />);

    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-errormessage', 'email-input-err');

    const errorMessage = screen.getByText('Invalid email format');
    expect(errorMessage).toHaveAttribute('id', 'email-input-err');
  });

  it('supports different input types', () => {
    const { rerender } = render(<RNInput type="email" placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email');

    rerender(<RNInput type="number" placeholder="Number" />);
    expect(screen.getByPlaceholderText('Number')).toHaveAttribute('type', 'number');

    rerender(<RNInput type="tel" placeholder="Phone" />);
    expect(screen.getByPlaceholderText('Phone')).toHaveAttribute('type', 'tel');
  });
});
