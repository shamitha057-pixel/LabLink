import StatusBadge from '../common/StatusBadge.jsx'
import { REQUEST_STATUS } from '../../constants/rentalStatus.js'

// rows: [{ id, studentName, studentIsDemo, itemName, primaryWhen,
//          secondaryWhen, purpose, status }]
// itemLabel / whenLabel: column headings that differ per section.
export default function AdminRequestTable({
  rows,
  itemLabel,
  whenLabel,
  onUpdateStatus,
}) {
  return (
    <div className="admin-table-wrap">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>{itemLabel}</th>
            <th>{whenLabel}</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td data-label="Student">
                <div className="admin-cell">
                  <span className="admin-student">{row.studentName}</span>
                  {row.studentIsDemo && <span className="admin-demo-tag">Demo</span>}
                </div>
              </td>

              <td data-label={itemLabel}>
                <div className="admin-cell">
                  <strong>{row.itemName}</strong>
                </div>
              </td>

              <td data-label={whenLabel}>
                <div className="admin-cell admin-cell--stack">
                  <span>{row.primaryWhen}</span>
                  {row.secondaryWhen && (
                    <span className="admin-table__sub">{row.secondaryWhen}</span>
                  )}
                </div>
              </td>

              <td data-label="Purpose">
                <div className="admin-cell">
                  {row.purpose ? (
                    <span className="admin-purpose">{row.purpose}</span>
                  ) : (
                    <span className="admin-table__muted">Not provided</span>
                  )}
                </div>
              </td>

              <td data-label="Status">
                <div className="admin-cell">
                  <StatusBadge status={row.status} />
                </div>
              </td>

              <td data-label="Actions">
                <div className="admin-cell">
                  {row.status === REQUEST_STATUS.PENDING ? (
                    <div className="admin-actions">
                      <button
                        type="button"
                        className="admin-btn admin-btn--approve"
                        aria-label={`Approve ${row.itemName} for ${row.studentName}`}
                        onClick={() => onUpdateStatus(row.id, REQUEST_STATUS.APPROVED)}
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        className="admin-btn admin-btn--reject"
                        aria-label={`Reject ${row.itemName} for ${row.studentName}`}
                        onClick={() => onUpdateStatus(row.id, REQUEST_STATUS.REJECTED)}
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <span className="admin-table__muted">Reviewed</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}