import Icon from '../common/Icon.jsx'
import StatusBadge from '../common/StatusBadge.jsx'
import { REQUEST_STATUS, normalizeStatus } from '../../constants/rentalStatus.js'
import { formatDate } from '../../utils/formatDate.js'
import { formatTime } from '../../utils/timeUtils.js'

export default function WorkspaceBookingList({
  bookings,
  onUpdateStatus,
  showDemoControls = false,
}) {
  return (
    <ul className="request-list">
      {bookings.map((booking) => {
        const isPending =
          (normalizeStatus(booking.status) ?? REQUEST_STATUS.PENDING) ===
          REQUEST_STATUS.PENDING

        return (
          <li key={booking.id} className="request-item">
            <div className="request-item__main">
              <span className="request-item__icon">
                <Icon name="flask" size={20} />
              </span>
              <div>
                <h3 className="request-item__name">{booking.workspaceName}</h3>
                <p className="request-item__dates">
                  <Icon name="calendar" size={14} />
                  {formatDate(booking.date)}
                </p>
                <p className="request-item__dates">
                  <Icon name="clock" size={14} />
                  {formatTime(booking.startTime)} – {formatTime(booking.endTime)}
                </p>
                <p className="request-item__purpose">{booking.purpose}</p>
              </div>
            </div>

            <div className="request-item__side">
              <StatusBadge status={booking.status} />

              {showDemoControls && isPending && (
                <div className="request-item__demo">
                  <button
                    type="button"
                    className="demo-btn demo-btn--approve"
                    onClick={() => onUpdateStatus(booking.id, REQUEST_STATUS.APPROVED)}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="demo-btn demo-btn--reject"
                    onClick={() => onUpdateStatus(booking.id, REQUEST_STATUS.REJECTED)}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}