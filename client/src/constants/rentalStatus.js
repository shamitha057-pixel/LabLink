// Single source of truth for rental request statuses.
export const REQUEST_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
}

export const STATUS_LABELS = {
  pending: 'Pending',
  approved: 'Approved',
  rejected: 'Rejected',
}

// Turns "Pending", " APPROVED " etc. into a valid status.
// Returns null if the value is not a known status.
export function normalizeStatus(value) {
  if (typeof value !== 'string') return null
  const cleaned = value.trim().toLowerCase()
  return Object.values(REQUEST_STATUS).includes(cleaned) ? cleaned : null
}