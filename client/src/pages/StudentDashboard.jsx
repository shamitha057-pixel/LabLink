import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon.jsx'
import EmptyState from '../components/common/EmptyState.jsx'
import StatCard from '../components/dashboard/StatCard.jsx'
import RentalRequestList from '../components/dashboard/RentalRequestList.jsx'
import WorkspaceBookingList from '../components/dashboard/WorkspaceBookingList.jsx'
import { useRentalRequests } from '../context/useRentalRequests.js'
import { useWorkspaceBookings } from '../context/useWorkspaceBookings.js'
import { getStatusCounts } from '../utils/statusCounts.js'
import '../styles/dashboard.css'
import '../styles/workspaces.css'

// Temporary: lets you preview approved/rejected statuses before an admin
// dashboard exists. Set to false (or delete the feature) later.
const ENABLE_DEMO_CONTROLS = false

export default function StudentDashboard() {
  const { requests, updateRequestStatus } = useRentalRequests()
  const { bookings, updateBookingStatus } = useWorkspaceBookings()

  // Recalculated only when the lists change.
  const rentalCounts = useMemo(() => getStatusCounts(requests), [requests])
  const bookingCounts = useMemo(() => getStatusCounts(bookings), [bookings])

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div>
          <h1 className="dashboard__title">Student Dashboard</h1>
          <p className="dashboard__subtitle">
            Track your equipment rental requests and workspace bookings, and see
            where each one stands.
          </p>
        </div>
        <div className="dashboard__actions">
          <Link to="/equipment" className="btn btn--primary">
            Browse equipment <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      </div>

      {/* ---------- Equipment rentals ---------- */}
      <div className="dashboard__section">
        <h2 className="dashboard__section-title">Equipment rentals</h2>

        <section className="stat-grid" aria-label="Rental request summary">
          <StatCard label="Total requests" value={rentalCounts.total} icon="grid" />
          <StatCard label="Pending" value={rentalCounts.pending} icon="clock" tone="pending" />
          <StatCard label="Approved" value={rentalCounts.approved} icon="check" tone="approved" />
          <StatCard label="Rejected" value={rentalCounts.rejected} icon="x" tone="rejected" />
        </section>

        <section className="dashboard__panel">
          <div className="dashboard__panel-head">
            <h2>My rental requests</h2>
            {requests.length > 0 && (
              <span className="dashboard__count">
                {requests.length} {requests.length === 1 ? 'request' : 'requests'}
              </span>
            )}
          </div>

          {requests.length === 0 ? (
            <EmptyState
              icon="box"
              title="No rental requests yet"
              description="When you request equipment from the catalogue, your requests will show up here."
            >
              <Link to="/equipment" className="btn btn--primary">
                Go to Equipment Catalogue <Icon name="arrow-right" size={18} />
              </Link>
            </EmptyState>
          ) : (
            <>
              {ENABLE_DEMO_CONTROLS && (
                <p className="demo-note">
                  Demo controls: until the admin dashboard is built, use the
                  Approve / Reject buttons on pending requests to preview each status.
                </p>
              )}
              <RentalRequestList
                requests={requests}
                onUpdateStatus={updateRequestStatus}
                showDemoControls={ENABLE_DEMO_CONTROLS}
              />
            </>
          )}
        </section>
      </div>

      {/* ---------- Workspace bookings ---------- */}
      <div className="dashboard__section">
        <h2 className="dashboard__section-title">Workspace bookings</h2>

        <section className="stat-grid" aria-label="Workspace booking summary">
          <StatCard label="Total bookings" value={bookingCounts.total} icon="calendar" />
          <StatCard label="Pending" value={bookingCounts.pending} icon="clock" tone="pending" />
          <StatCard label="Approved" value={bookingCounts.approved} icon="check" tone="approved" />
          <StatCard label="Rejected" value={bookingCounts.rejected} icon="x" tone="rejected" />
        </section>

        <section className="dashboard__panel">
          <div className="dashboard__panel-head">
            <h2>My Workspace Bookings</h2>
            {bookings.length > 0 && (
              <span className="dashboard__count">
                {bookings.length} {bookings.length === 1 ? 'booking' : 'bookings'}
              </span>
            )}
          </div>

          {bookings.length === 0 ? (
            <EmptyState
              icon="calendar"
              title="No workspace bookings yet"
              description="Book a lab or workspace and your bookings will show up here."
            >
              <Link to="/workspaces" className="btn btn--primary">
                Book a workspace <Icon name="arrow-right" size={18} />
              </Link>
            </EmptyState>
          ) : (
            <>
              {ENABLE_DEMO_CONTROLS && (
                <p className="demo-note">
                  Demo controls: until the admin dashboard is built, use the
                  Approve / Reject buttons on pending bookings to preview each status.
                </p>
              )}
              <WorkspaceBookingList
                bookings={bookings}
                onUpdateStatus={updateBookingStatus}
                showDemoControls={ENABLE_DEMO_CONTROLS}
              />
            </>
          )}
        </section>
      </div>
    </div>
  )
}