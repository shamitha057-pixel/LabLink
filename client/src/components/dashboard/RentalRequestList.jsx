import Icon from '../common/Icon.jsx'
import StatusBadge from '../common/StatusBadge.jsx'
import { REQUEST_STATUS, normalizeStatus } from '../../constants/rentalStatus.js'
import { formatDate } from '../../utils/formatDate.js'

export default function RentalRequestList({
  requests,
  onUpdateStatus,
  showDemoControls = false,
}) {
  return (
    <ul className="request-list">
      {requests.map((request) => {
        const isPending =
          (normalizeStatus(request.status) ?? REQUEST_STATUS.PENDING) ===
          REQUEST_STATUS.PENDING

        return (
          <li key={request.id} className="request-item">
            <div className="request-item__main">
              <span className="request-item__icon">
                <Icon name="box" size={20} />
              </span>
              <div>
                <h3 className="request-item__name">{request.equipmentName}</h3>
                <p className="request-item__dates">
                  <Icon name="calendar" size={14} />
                  {formatDate(request.startDate)} → {formatDate(request.endDate)}
                </p>
                {request.createdAt && (
                  <p className="request-item__meta">
                    Requested on {formatDate(request.createdAt)}
                  </p>
                )}
              </div>
            </div>

            <div className="request-item__side">
              <StatusBadge status={request.status} />

              {showDemoControls && isPending && (
                <div className="request-item__demo">
                  <button
                    type="button"
                    className="demo-btn demo-btn--approve"
                    onClick={() => onUpdateStatus(request.id, REQUEST_STATUS.APPROVED)}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="demo-btn demo-btn--reject"
                    onClick={() => onUpdateStatus(request.id, REQUEST_STATUS.REJECTED)}
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