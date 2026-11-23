import React from 'react';

/**
 * Status and metadata badge component.
 */
export default function Badge({
  children,
  variant = 'neutral',
  className = '',
  icon: Icon
}) {
  const variantClass = {
    primary: 'badge-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    danger: 'badge-danger',
    neutral: 'badge-neutral',
  }[variant] || 'badge-neutral';

  return (
    <span className={`badge ${variantClass} ${className}`}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
}
