import React from 'react';

/**
 * Reusable Card container for content panels, dashboard widgets, and catalog items.
 */
export default function Card({
  children,
  hoverable = false,
  className = '',
  ...props
}) {
  return (
    <div
      className={`card ${hoverable ? 'card-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
