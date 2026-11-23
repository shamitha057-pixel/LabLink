import Icon from '../common/Icon.jsx'

// tone controls the icon colour: "neutral", "pending", "approved" or "rejected"
export default function StatCard({ label, value, icon, tone = 'neutral' }) {
  return (
    <article className={`stat-card stat-card--${tone}`}>
      <span className="stat-card__icon">
        <Icon name={icon} size={22} />
      </span>
      <div>
        <p className="stat-card__label">{label}</p>
        <p className="stat-card__value">{value}</p>
      </div>
    </article>
  )
}