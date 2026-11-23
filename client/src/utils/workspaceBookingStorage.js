import { REQUEST_STATUS, normalizeStatus } from '../constants/rentalStatus.js'

export const WORKSPACE_STORAGE_KEY = 'lablink.workspaceBookings.v1'

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim() !== ''
}

// Checks that a saved item has every field a booking needs.
function isValidBooking(item) {
  return (
    item !== null &&
    typeof item === 'object' &&
    (typeof item.id === 'string' || typeof item.id === 'number') &&
    isNonEmptyString(item.workspaceId) &&
    isNonEmptyString(item.workspaceName) &&
    isNonEmptyString(item.date) &&
    isNonEmptyString(item.startTime) &&
    isNonEmptyString(item.endTime) &&
    isNonEmptyString(item.purpose)
  )
}

function sanitizeBooking(item) {
  return {
    ...item,
    id: String(item.id),
    status: normalizeStatus(item.status) ?? REQUEST_STATUS.PENDING,
  }
}

export function loadBookings() {
  try {
    const raw = window.localStorage.getItem(WORKSPACE_STORAGE_KEY)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []

    return parsed.filter(isValidBooking).map(sanitizeBooking)
  } catch {
    // Broken JSON or blocked storage: start with an empty list.
    return []
  }
}

export function saveBookings(bookings) {
  try {
    window.localStorage.setItem(WORKSPACE_STORAGE_KEY, JSON.stringify(bookings))
  } catch {
    // Storage may be full or blocked. The app keeps working in memory.
  }
}