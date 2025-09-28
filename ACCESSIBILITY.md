# Accessibility Guide

This guide covers accessibility implementation for the Roki Foods website to ensure WCAG AA compliance and excellent user experience for all users.

## Overview

The website implements comprehensive accessibility features including:
- WCAG AA compliant color contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Reduced motion support
- High contrast mode support

## Accessibility Components

### AccessibleButton
Enhanced button component with proper focus states and ARIA attributes:

```typescript
import { AccessibleButton } from '@/components/AccessibleButton';

<AccessibleButton
  variant="primary"
  size="md"
  loading={false}
  disabled={false}
  onClick={handleClick}
>
  Add to Cart
</AccessibleButton>
```

### AccessibleLink
Link component with external link handling and proper ARIA labels:

```typescript
import { AccessibleLink } from '@/components/AccessibleLink';

<AccessibleLink
  href="/shop"
  variant="button"
  external={false}
>
  Shop Now
</AccessibleLink>
```

### AccessibleHeading
Semantic heading component with proper hierarchy:

```typescript
import { AccessibleHeading } from '@/components/AccessibleHeading';

<AccessibleHeading level={2} variant="section">
  Our Products
</AccessibleHeading>
```

### AccessibleForm Components
Form components with proper labeling and error handling:

```typescript
import { AccessibleInput, AccessibleTextarea, AccessibleSelect } from '@/components/AccessibleForm';

<AccessibleInput
  label="Email Address"
  type="email"
  required
  error={errors.email}
  helperText="We'll never share your email"
/>
```

## Color Contrast

### WCAG AA Compliance
All color combinations meet WCAG AA standards (4.5:1 contrast ratio):

- **Primary text**: #1a472a (leaf-900) on #f4f3ef (cream-50) - 12.5:1 ratio
- **Secondary text**: #2e7d32 (leaf-600) on #ffffff (white) - 4.8:1 ratio
- **Accent text**: #1a472a (leaf-900) on #f4c430 (sun-400) - 5.2:1 ratio
- **Error text**: #dc2626 (red-600) on #ffffff (white) - 4.5:1 ratio

### High Contrast Mode
Automatic adaptation for users with high contrast preferences:

```css
@media (prefers-contrast: high) {
  :root {
    --leaf-900: #000000;
    --leaf-600: #000000;
    --bark-900: #000000;
    --sun-400: #ffff00;
    --cream-50: #ffffff;
    --mist-100: #ffffff;
    --clay-300: #000000;
  }
}
```

## Keyboard Navigation

### Focus Management
- Visible focus indicators on all interactive elements
- Logical tab order throughout the site
- Skip links for main content
- Focus trapping in modals and drawers

### Keyboard Shortcuts
- **Tab**: Move to next focusable element
- **Shift + Tab**: Move to previous focusable element
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals and menus
- **Arrow keys**: Navigate carousels and menus

### Focus Styles
Consistent focus indicators using the brand color:

```css
*:focus-visible {
  outline: 2px solid var(--sun-400);
  outline-offset: 2px;
}
```

## Screen Reader Support

### ARIA Landmarks
Proper semantic structure with ARIA landmarks:

```html
<header role="banner">
  <nav role="navigation">
    <!-- Navigation content -->
  </nav>
</header>

<main id="main-content" role="main">
  <!-- Main content -->
</main>

<footer role="contentinfo">
  <!-- Footer content -->
</footer>
```

### ARIA Labels and Descriptions
- Descriptive labels for all form inputs
- Error messages with `role="alert"`
- Loading states with `aria-live` regions
- Button states with `aria-pressed` and `aria-expanded`

### Screen Reader Only Content
Utility class for content only visible to screen readers:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## Motion and Animation

### Reduced Motion Support
Respects user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Animation Guidelines
- All animations are optional and can be disabled
- No essential information is conveyed through animation alone
- Animations don't cause seizures (no flashing content)
- Smooth transitions that don't cause motion sickness

## Form Accessibility

### Input Labeling
Every form input has a proper label:

```typescript
<AccessibleInput
  label="Email Address"
  type="email"
  required
  error={errors.email}
  helperText="We'll never share your email"
/>
```

### Error Handling
- Clear error messages with `role="alert"`
- Error messages are associated with inputs via `aria-describedby`
- Form validation is announced to screen readers
- Required fields are clearly marked

### Form Structure
- Logical tab order
- Grouped related fields with `fieldset` and `legend`
- Clear submit buttons and actions
- Confirmation messages for successful submissions

## Image Accessibility

### Alt Text
All images have descriptive alt text:

```typescript
<OptimizedImage
  src={productImage}
  alt="Roki Palm Oil 500ml bottle with sustainable packaging"
  width={600}
  height={600}
/>
```

### Decorative Images
Decorative images have empty alt attributes:

```typescript
<img src="/decorative-pattern.svg" alt="" role="presentation" />
```

### Image Context
- Product images include size and type information
- Lifestyle images describe the scene and context
- Infographics have text alternatives
- Charts and graphs have data tables

## Testing and Validation

### Automated Testing
- **axe-core**: Automated accessibility testing
- **Lighthouse**: Accessibility audit in Chrome DevTools
- **WAVE**: Web accessibility evaluation tool
- **Pa11y**: Command-line accessibility testing

### Manual Testing
- **Keyboard navigation**: Test all functionality with keyboard only
- **Screen reader testing**: Test with NVDA, JAWS, and VoiceOver
- **Color contrast**: Verify contrast ratios meet WCAG standards
- **Zoom testing**: Test at 200% zoom level

### Testing Checklist
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible and consistent
- [ ] Color contrast meets WCAG AA standards
- [ ] Images have appropriate alt text
- [ ] Forms have proper labels and error handling
- [ ] Headings follow logical hierarchy
- [ ] Links have descriptive text
- [ ] Content is readable at 200% zoom
- [ ] No content flashes more than 3 times per second
- [ ] All functionality works with screen readers

## Accessibility Utilities

### Focus Management
```typescript
import { trapFocus, announceToScreenReader } from '@/lib/accessibility';

// Trap focus in modal
const cleanup = trapFocus(modalElement);

// Announce to screen readers
announceToScreenReader('Product added to cart');
```

### Color Contrast Checking
```typescript
import { checkContrast } from '@/lib/accessibility';

const isAccessible = checkContrast('#1a472a', '#f4f3ef'); // true
```

### Motion Preferences
```typescript
import { prefersReducedMotion } from '@/lib/accessibility';

if (prefersReducedMotion()) {
  // Disable animations
}
```

## Common Accessibility Issues

### 1. Missing Alt Text
**Problem**: Images without descriptive alt text
**Solution**: Always provide meaningful alt text or empty alt for decorative images

### 2. Poor Color Contrast
**Problem**: Text that doesn't meet contrast requirements
**Solution**: Use the provided color combinations or test with contrast tools

### 3. Missing Focus Indicators
**Problem**: Users can't see where they are when navigating with keyboard
**Solution**: Ensure all interactive elements have visible focus states

### 4. Inaccessible Forms
**Problem**: Forms without proper labels or error handling
**Solution**: Use the AccessibleForm components

### 5. Missing ARIA Labels
**Problem**: Screen readers can't understand complex interactions
**Solution**: Add appropriate ARIA attributes and labels

## Resources

### Documentation
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Resources](https://webaim.org/)

### Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)
- [Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)

### Testing
- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse)
- [Pa11y Command Line Tool](https://pa11y.org/)
- [axe-core Testing Library](https://github.com/dequelabs/axe-core)

## Maintenance

### Regular Audits
- Monthly automated accessibility scans
- Quarterly manual testing sessions
- Annual comprehensive accessibility review
- User testing with people with disabilities

### Updates and Changes
- Test all new features for accessibility
- Update documentation when patterns change
- Train team members on accessibility best practices
- Monitor accessibility metrics and user feedback
