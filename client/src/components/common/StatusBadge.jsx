import {
  REQUEST_STATUS,
  STATUS_LABELS,
  normalizeStatus,
} from '../../constants/rentalStatus.js'

export default function StatusBadge({ status }) {
  const safeStatus = normalizeStatus(status) ?? REQUEST_STATUS.PENDING

  return (
    <span className={`status-badge status-badge--${safeStatus}`}>
      <span className="status-badge__dot" />
      {STATUS_LABELS[safeStatus]}
    </span>
  )
}