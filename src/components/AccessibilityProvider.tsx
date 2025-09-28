"use client";

import { useEffect } from "react";

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Skip to content functionality
    const handleSkipToContent = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && !e.shiftKey) {
        const skipLink = document.getElementById('skip-to-content');
        if (skipLink && document.activeElement === document.body) {
          skipLink.focus();
        }
      }
    };

    // Announce page changes for screen readers
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Page content loaded';
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Add keyboard event listeners
    document.addEventListener('keydown', handleSkipToContent);
    
    // Announce initial page load
    announcePageChange();

    return () => {
      document.removeEventListener('keydown', handleSkipToContent);
    };
  }, []);

  return (
    <>
      {/* Skip to content link */}
      <a
        id="skip-to-content"
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[color:var(--leaf-900)] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--sun-400)]"
      >
        Skip to main content
      </a>
      {children}
    </>
  );
}
