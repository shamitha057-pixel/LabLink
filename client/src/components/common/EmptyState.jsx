import Icon from './Icon.jsx'

export default function EmptyState({ icon = 'box', title, description, children }) {
  return (
    <div className="empty-state">
      <span className="empty-state__icon">
        <Icon name={icon} size={28} />
      </span>
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__text">{description}</p>
      {children}
    </div>
  )
}