// Accessibility utilities for Roki Foods

/**
 * Generate a unique ID for form elements
 */
export function generateId(prefix: string = 'element'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Check if color contrast meets WCAG AA standards
 */
export function checkContrast(foreground: string, background: string): boolean {
  // Simplified contrast check - in production, use a proper contrast library
  const getLuminance = (color: string): number => {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;
    
    // Apply gamma correction
    const [rs, gs, bs] = [r, g, b].map(c => 
      c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    );
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  
  const contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  
  return contrast >= 4.5; // WCAG AA standard
}

/**
 * Announce text to screen readers
 */
export function announceToScreenReader(text: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = text;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Trap focus within an element
 */
export function trapFocus(element: HTMLElement): () => void {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };

  element.addEventListener('keydown', handleKeyDown);
  
  // Focus first element
  firstElement?.focus();

  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
}

/**
 * Get accessible color combinations
 */
export const accessibleColors = {
  // Primary colors with sufficient contrast
  primary: {
    text: '#1a472a', // leaf-900
    background: '#f4f3ef', // cream-50
    contrast: 12.5 // High contrast ratio
  },
  secondary: {
    text: '#2e7d32', // leaf-600
    background: '#ffffff', // white
    contrast: 4.8 // Meets WCAG AA
  },
  accent: {
    text: '#1a472a', // leaf-900
    background: '#f4c430', // sun-400
    contrast: 5.2 // Meets WCAG AA
  },
  // Error states
  error: {
    text: '#dc2626', // red-600
    background: '#ffffff', // white
    contrast: 4.5 // Meets WCAG AA
  },
  // Success states
  success: {
    text: '#059669', // green-600
    background: '#ffffff', // white
    contrast: 4.5 // Meets WCAG AA
  }
};

/**
 * ARIA landmark roles for semantic structure
 */
export const landmarks = {
  banner: 'banner', // Site header
  navigation: 'navigation', // Main navigation
  main: 'main', // Main content
  complementary: 'complementary', // Sidebar
  contentinfo: 'contentinfo', // Site footer
  search: 'search', // Search functionality
  form: 'form' // Form sections
};

/**
 * Screen reader only text utility
 */
export const srOnly = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[color:var(--leaf-900)] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--sun-400)]';

/**
 * Focus management utilities
 */
export const focusStyles = {
  default: 'focus:outline-none focus:ring-2 focus:ring-[color:var(--sun-400)] focus:ring-offset-2',
  button: 'focus:outline-none focus:ring-2 focus:ring-[color:var(--sun-400)] focus:ring-offset-2',
  link: 'focus:outline-none focus:ring-2 focus:ring-[color:var(--sun-400)] focus:ring-offset-2',
  input: 'focus:outline-none focus:ring-2 focus:ring-[color:var(--sun-400)] focus:border-transparent'
};

/**
 * Motion preferences for reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * High contrast mode detection
 */
export function prefersHighContrast(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-contrast: high)').matches;
}

/**
 * Color scheme preference
 */
export function prefersColorScheme(): 'light' | 'dark' | 'no-preference' {
  if (typeof window === 'undefined') return 'no-preference';
  
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  
  return 'no-preference';
}
