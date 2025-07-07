import React from 'react';

/**
 * ScreenReaderOnly - Hides content visually but exposes it to screen readers.
 */
export const ScreenReaderOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

export default ScreenReaderOnly;
