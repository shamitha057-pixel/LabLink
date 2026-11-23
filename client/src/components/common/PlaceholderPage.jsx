import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

// Reusable template for the five placeholder screens.
export default function PlaceholderPage({ title, description, icon, plannedFeatures }) {
  return (
    <div className="page">
      <div className="page__header">
        <div className="page__icon">
          <Icon name={icon} size={26} />
        </div>
        <div>
          <span className="page__badge">Placeholder</span>
          <h1 className="page__title">{title}</h1>
          <p className="page__description">{description}</p>
        </div>
      </div>

      <section className="page__panel">
        <h2>Planned features</h2>
        <ul className="feature-list">
          {plannedFeatures.map((feature) => (
            <li key={feature}>
              <Icon name="check" size={18} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="page__empty">
        <p>
          This screen is only a placeholder. The real interface will be built
          in a later stage.
        </p>
        <Link to="/" className="btn btn--secondary btn--sm">
          <Icon name="arrow-left" size={16} /> Back to home
        </Link>
      </section>
    </div>
  )
}