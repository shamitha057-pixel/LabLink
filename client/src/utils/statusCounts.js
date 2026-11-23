import { REQUEST_STATUS, normalizeStatus } from '../constants/rentalStatus.js'

export function getStatusCounts(items) {
  const counts = { total: items.length, pending: 0, approved: 0, rejected: 0 }

  items.forEach((item) => {
    const status = normalizeStatus(item.status) ?? REQUEST_STATUS.PENDING
    counts[status] += 1
  })

  return counts
}