import { REQUEST_STATUS, normalizeStatus } from '../constants/rentalStatus.js'

export const STORAGE_KEY = 'lablink.rentalRequests.v1'

// Checks that a saved item has the minimum fields we need.
function isValidRequest(item) {
  return (
    item !== null &&
    typeof item === 'object' &&
    (typeof item.id === 'string' || typeof item.id === 'number') &&
    typeof item.equipmentName === 'string' &&
    item.equipmentName.trim() !== '' &&
    Boolean(item.startDate) &&
    Boolean(item.endDate)
  )
}

// Makes sure every request has a string id and a valid status.
function sanitizeRequest(item) {
  return {
    ...item,
    id: String(item.id),
    status: normalizeStatus(item.status) ?? REQUEST_STATUS.PENDING,
  }
}

export function loadRequests() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []

    return parsed.filter(isValidRequest).map(sanitizeRequest)
  } catch {
    // Broken JSON, blocked storage, etc. Start with an empty list.
    return []
  }
}

export function saveRequests(requests) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(requests))
  } catch {
    // Storage may be full or blocked. The app keeps working in memory.
  }
}

// Creates a unique id for each new request.
export function createRequestId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `req-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}