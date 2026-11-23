import Icon from '../common/Icon.jsx'
import { ROLES } from '../../data/landingContent.js'

export default function Roles() {
  return (
    <section id="roles" className="section">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Who it's for</span>
          <h2 className="section__title">Designed for everyone in the lab</h2>
          <p className="section__subtitle">
            Each role gets the tools it needs, and nothing it doesn't.
          </p>
        </div>

        <div className="roles__grid">
          {ROLES.map((role) => (
            <article key={role.title} className="role-card">
              <div className="role-card__head">
                <span className="role-card__icon">
                  <Icon name={role.icon} size={22} />
                </span>
                <h3>{role.title}</h3>
              </div>
              <ul className="role-card__list">
                {role.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}