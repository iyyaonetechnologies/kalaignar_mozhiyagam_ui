# RN Design System - Component Library

A comprehensive React component library built with TypeScript, Tailwind CSS v4, and modern best practices. This design system provides a complete set of accessible, well-tested, and beautifully designed components.

## ✨ Features

- **🎨 Modern Design**: Clean, professional components with consistent theming
- **♿ Accessibility**: WCAG compliant with proper ARIA attributes and keyboard navigation
- **🔧 TypeScript**: Full type safety with comprehensive interfaces
- **📱 Responsive**: Mobile-first design with responsive breakpoints
- **🎭 Animations**: Smooth transitions and micro-interactions
- **📚 Storybook**: Comprehensive component documentation and examples
- **🧪 Testing**: Full test coverage with Vitest and Testing Library
- **🎯 Performance**: Optimized components with minimal bundle size

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook

# Run tests
npm test

# Build for production
npm run build
```

## 📦 Components

### Form Components

#### RNButton

A versatile button component with multiple variants, sizes, and states.

**Features:**

- 5 variants: `solid`, `outline`, `ghost`, `link`, `destructive`
- 5 sizes: `xs`, `sm`, `md`, `lg`, `xl`
- Loading states with spinner
- Icon support (left/right)
- Full width option
- Accessibility compliant

```tsx
<RNButton variant="solid" size="md" leftIcon={<UserIcon />}>
  Get Started
</RNButton>
```

#### RNInput

Enhanced input component with validation, icons, and password toggle.

**Features:**

- Built-in validation styles
- Left/right icon support
- Password visibility toggle
- Helper text and error messages
- Proper accessibility labels
- Focus management

```tsx
<RNInput
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  leftIcon={<EmailIcon />}
  error="Please enter a valid email"
/>
```

### Layout Components

#### RNCard

Flexible card component with multiple variants and interactive states.

**Features:**

- 4 variants: `default`, `elevated`, `outlined`, `filled`
- 5 padding options: `none`, `sm`, `md`, `lg`, `xl`
- Hoverable animations
- Customizable styling

```tsx
<RNCard variant="elevated" padding="lg" hoverable>
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</RNCard>
```

#### RNModal

Accessible modal component with focus management and customizable layouts.

**Features:**

- Multiple sizes: `sm`, `md`, `lg`, `xl`, `full`
- Focus trapping and management
- Keyboard navigation (ESC to close)
- Customizable footer
- Background blur and animations
- Proper ARIA attributes

```tsx
<RNModal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Edit Profile"
  size="lg"
  footer={<ActionButtons />}
>
  <ProfileForm />
</RNModal>
```

### Feedback Components

#### RNAlert

Contextual alert component for important messages.

**Features:**

- 4 variants: `success`, `warning`, `error`, `info`
- Optional titles and dismissible functionality
- Custom icons support
- Automatic dismiss handling
- Accessible announcements

```tsx
<RNAlert variant="warning" title="Attention Required" dismissible onDismiss={handleDismiss}>
  Your subscription expires in 3 days.
</RNAlert>
```

#### RNBadge

Versatile badge component for status indicators and labels.

**Features:**

- 6 variants: `default`, `primary`, `success`, `warning`, `danger`, `info`
- 3 sizes: `sm`, `md`, `lg`
- Dot notation for status indicators
- Rounded and pill styles

```tsx
<RNBadge variant="success" size="sm" rounded>
  Active
</RNBadge>;

{
  /* Status dot */
}
<RNBadge variant="success" dot />;
```

## 🎨 Theming

The design system uses CSS custom properties for theming, supporting both light and dark modes:

```css
/* Light theme variables */
[data-theme='default'] {
  --RN-Blue-100: #0067b1;
  --RN-Base-0: #ffffff;
  --RN-Base-100: #03182b;
  /* ... more variables */
}

/* Dark theme variables */
[data-theme='dark'] {
  --RN-Blue-100: #51a7f0;
  --RN-Base-0: #0b0c0f;
  --RN-Base-100: #5b6892;
  /* ... more variables */
}
```

## 🧪 Testing

All components come with comprehensive test suites covering:

- **Rendering**: Components render correctly with props
- **Accessibility**: ARIA attributes and keyboard navigation
- **Interactions**: User events and state changes
- **Props**: All prop variations and edge cases
- **Styling**: CSS classes and variants

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run coverage
```

## 📚 Storybook

Explore all components and their variations in Storybook:

```bash
npm run storybook
```

Storybook includes:

- **Interactive examples** for all components
- **Props documentation** with TypeScript support
- **Accessibility testing** with a11y addon
- **Design tokens** showcase
- **Usage examples** and best practices

## 🏗️ Development

### Adding New Components

1. Create component file in `src/components/`
2. Add Storybook stories in `ComponentName.stories.tsx`
3. Add tests in `src/__tests__/ComponentName.test.tsx`
4. Export from main index file
5. Update documentation

### Component Structure

```
src/components/
├── RNButton.tsx          # Component implementation
├── RNButton.stories.tsx  # Storybook stories
└── __tests__/
    └── RNButton.test.tsx # Test suite
```

## 🎯 Best Practices

### Accessibility

- Always provide meaningful labels and descriptions
- Ensure proper keyboard navigation
- Use semantic HTML elements
- Test with screen readers

### Performance

- Use `forwardRef` for component refs
- Implement proper prop validation
- Optimize bundle size with tree shaking
- Use CSS-in-JS sparingly

### Styling

- Use CSS custom properties for theming
- Follow consistent spacing and typography scales
- Implement responsive design patterns
- Use Tailwind CSS utilities effectively

## 📝 API Reference

### Common Props

Most components support these common props:

```tsx
interface CommonProps {
  className?: string; // Additional CSS classes
  children?: React.ReactNode; // Child elements
  id?: string; // Element ID
  'data-testid'?: string; // Test identifier
}
```

### Variant Props

Components with variants typically support:

```tsx
interface VariantProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}
```

## 🚀 Production Ready

This design system is production-ready with:

- **TypeScript** for type safety
- **ESLint + Prettier** for code quality
- **Husky** for pre-commit hooks
- **Comprehensive testing** with high coverage
- **Storybook documentation** for design review
- **Accessibility compliance** for inclusive design
- **Performance optimization** for fast loading

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and stories
5. Submit a pull request

---

Built with ❤️ using React, TypeScript, and Tailwind CSS.
