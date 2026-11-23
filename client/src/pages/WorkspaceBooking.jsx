import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon.jsx'
import WorkspaceCard from '../components/workspaces/WorkspaceCard.jsx'
import WorkspaceBookingModal from '../components/workspaces/WorkspaceBookingModal.jsx'
import { WORKSPACES, WORKSPACE_DEMO_NOTICE } from '../data/workspaceData.js'
import { formatDate } from '../utils/formatDate.js'
import { formatTime } from '../utils/timeUtils.js'
import '../styles/workspaces.css'

export default function WorkspaceBooking() {
  const [selectedWorkspace, setSelectedWorkspace] = useState(null)
  const [lastBooking, setLastBooking] = useState(null)

  return (
    <div className="ws-page">
      <div className="ws-page__header">
        <h1 className="ws-page__title">Workspace Booking</h1>
        <p className="ws-page__subtitle">
          Choose a lab or workspace, pick a date and time, and send your booking
          request.
        </p>
      </div>

      <p className="ws-demo-notice">
        <Icon name="flask" size={18} />
        {WORKSPACE_DEMO_NOTICE}
      </p>

      {lastBooking && (
        <div className="ws-success" role="status">
          <p>
            Booking request sent for <strong>{lastBooking.workspaceName}</strong> on{' '}
            {formatDate(lastBooking.date)}, {formatTime(lastBooking.startTime)} –{' '}
            {formatTime(lastBooking.endTime)}. It is now pending.{' '}
            <Link to="/student">View it on your dashboard</Link>
          </p>
          <button
            type="button"
            className="ws-success__close"
            aria-label="Dismiss message"
            onClick={() => setLastBooking(null)}
          >
            <Icon name="x" size={16} />
          </button>
        </div>
      )}

      <section className="ws-grid" aria-label="Available workspaces">
        {WORKSPACES.map((workspace) => (
          <WorkspaceCard
            key={workspace.id}
            workspace={workspace}
            onBook={setSelectedWorkspace}
          />
        ))}
      </section>

      {selectedWorkspace && (
        <WorkspaceBookingModal
          key={selectedWorkspace.id}
          workspace={selectedWorkspace}
          onClose={() => setSelectedWorkspace(null)}
          onBooked={setLastBooking}
        />
      )}
    </div>
  )
}