import Icon from '../common/Icon.jsx'
import { AVAILABILITY_LABELS } from '../../data/workspaceData.js'

export default function WorkspaceCard({ workspace, onBook }) {
  const isUnavailable = workspace.availability === 'unavailable'

  return (
    <article className="ws-card">
      <div className="ws-card__top">
        <div className="ws-card__heading">
          <span className="ws-card__icon">
            <Icon name={workspace.icon} size={22} />
          </span>
          <div>
            <h3 className="ws-card__name">{workspace.name}</h3>
            <span className="ws-card__category">{workspace.category}</span>
          </div>
        </div>
        <span className={`ws-availability ws-availability--${workspace.availability}`}>
          {AVAILABILITY_LABELS[workspace.availability]}
        </span>
      </div>

      <p className="ws-card__description">{workspace.description}</p>

      <p className="ws-card__capacity">
        <Icon name="user" size={16} />
        Capacity: {workspace.capacity} people
      </p>

      <div>
        <p className="ws-card__facilities-title">Equipment &amp; facilities</p>
        <ul className="ws-chips">
          {workspace.facilities.map((facility) => (
            <li key={facility} className="ws-chip">
              {facility}
            </li>
          ))}
        </ul>
      </div>

      <div className="ws-card__footer">
        <button
          type="button"
          className="btn btn--primary btn--sm"
          disabled={isUnavailable}
          onClick={() => onBook(workspace)}
        >
          <Icon name="calendar" size={16} />
          {isUnavailable ? 'Currently unavailable' : 'Book Workspace'}
        </button>
      </div>
    </article>
  )
}