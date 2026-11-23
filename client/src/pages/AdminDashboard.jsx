import { useMemo, useState } from 'react'
import Icon from '../components/common/Icon.jsx'
import EmptyState from '../components/common/EmptyState.jsx'
import StatCard from '../components/dashboard/StatCard.jsx'
import StatusFilter from '../components/admin/StatusFilter.jsx'
import AdminRequestTable from '../components/admin/AdminRequestTable.jsx'
import { useRentalRequests } from '../context/useRentalRequests.js'
import { useWorkspaceBookings } from '../context/useWorkspaceBookings.js'
import { REQUEST_STATUS, normalizeStatus } from '../constants/rentalStatus.js'
import { getStatusCounts } from '../utils/statusCounts.js'
import { getDemoStudentName } from '../utils/demoStudents.js'
import { formatDate } from '../utils/formatDate.js'
import { formatTime } from '../utils/timeUtils.js'
import '../styles/dashboard.css'
import '../styles/admin.css'

// ---------- Turn context data into simple table rows ----------

function toEquipmentRow(request) {
  return {
    id: request.id,
    studentName: request.studentName || getDemoStudentName(request.id),
    studentIsDemo: !request.studentName,
    itemName: request.equipmentName,
    primaryWhen: `${formatDate(request.startDate)} → ${formatDate(request.endDate)}`,
    secondaryWhen: '',
    purpose: request.purpose || request.reason || request.notes || '',
    status: normalizeStatus(request.status) ?? REQUEST_STATUS.PENDING,
  }
}

function toWorkspaceRow(booking) {
  return {
    id: booking.id,
    studentName: booking.studentName || getDemoStudentName(booking.id),
    studentIsDemo: !booking.studentName,
    itemName: booking.workspaceName,
    primaryWhen: formatDate(booking.date),
    secondaryWhen: `${formatTime(booking.startTime)} – ${formatTime(booking.endTime)}`,
    purpose: booking.purpose || '',
    status: normalizeStatus(booking.status) ?? REQUEST_STATUS.PENDING,
  }
}

// ---------- One reusable section (own filter state) ----------

function RequestSection({
  title,
  itemLabel,
  whenLabel,
  rows,
  counts,
  emptyIcon,
  emptyTitle,
  emptyDescription,
  onUpdateStatus,
}) {
  const [filter, setFilter] = useState('all')

  const visibleRows = useMemo(
    () => (filter === 'all' ? rows : rows.filter((row) => row.status === filter)),
    [rows, filter],
  )

  return (
    <section className="dashboard__panel admin-section">
      <div className="admin-section__head">
        <h2>{title}</h2>
        {rows.length > 0 && (
          <StatusFilter value={filter} onChange={setFilter} counts={counts} />
        )}
      </div>

      {rows.length === 0 ? (
        <EmptyState icon={emptyIcon} title={emptyTitle} description={emptyDescription} />
      ) : visibleRows.length === 0 ? (
        <p className="admin-section__none">No {filter} items to show.</p>
      ) : (
        <AdminRequestTable
          rows={visibleRows}
          itemLabel={itemLabel}
          whenLabel={whenLabel}
          onUpdateStatus={onUpdateStatus}
        />
      )}
    </section>
  )
}

// ---------- The page ----------

export default function AdminDashboard() {
  // These are the SAME shared contexts the Student Dashboard uses,
  // so approvals appear there immediately and are saved to localStorage.
  const { requests, updateRequestStatus } = useRentalRequests()
  const { bookings, updateBookingStatus } = useWorkspaceBookings()

  const rentalCounts = useMemo(() => getStatusCounts(requests), [requests])
  const bookingCounts = useMemo(() => getStatusCounts(bookings), [bookings])

  const equipmentRows = useMemo(() => requests.map(toEquipmentRow), [requests])
  const workspaceRows = useMemo(() => bookings.map(toWorkspaceRow), [bookings])

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div>
          <h1 className="dashboard__title">Admin Dashboard</h1>
          <p className="dashboard__subtitle">
            Review equipment rental requests and workspace bookings, then approve or
            reject them.
          </p>
        </div>
      </div>

      <p className="admin-notice">
        <Icon name="shield" size={18} />
        <span>
          Demo mode: this prototype stores data in your browser's localStorage and
          uses sample student names. There is no real multi-user backend or admin
          login yet, so only requests created in this browser appear here.
        </span>
      </p>

      <section className="stat-grid" aria-label="Admin summary">
        <StatCard label="Equipment requests" value={rentalCounts.total} icon="box" />
        <StatCard
          label="Pending equipment"
          value={rentalCounts.pending}
          icon="clock"
          tone="pending"
        />
        <StatCard label="Workspace bookings" value={bookingCounts.total} icon="calendar" />
        <StatCard
          label="Pending workspaces"
          value={bookingCounts.pending}
          icon="clock"
          tone="pending"
        />
      </section>

      <RequestSection
        title="Equipment Rental Requests"
        itemLabel="Equipment"
        whenLabel="Rental period"
        rows={equipmentRows}
        counts={rentalCounts}
        emptyIcon="box"
        emptyTitle="No equipment requests yet"
        emptyDescription="Requests submitted from the Equipment Catalogue will appear here for review."
        onUpdateStatus={updateRequestStatus}
      />

      <RequestSection
        title="Workspace Booking Requests"
        itemLabel="Workspace"
        whenLabel="Date & time"
        rows={workspaceRows}
        counts={bookingCounts}
        emptyIcon="calendar"
        emptyTitle="No workspace bookings yet"
        emptyDescription="Bookings submitted from the Workspace Booking page will appear here for review."
        onUpdateStatus={updateBookingStatus}
      />
    </div>
  )
}