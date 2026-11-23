import Icon from '../common/Icon.jsx'
import { FEATURES } from '../../data/landingContent.js'

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Features</span>
          <h2 className="section__title">Everything your lab needs in one platform</h2>
          <p className="section__subtitle">
            From finding the right instrument to managing the whole inventory,
            LabLink keeps the process simple.
          </p>
        </div>

        <div className="features__grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="feature-card">
              <span className="feature-card__icon">
                <Icon name={feature.icon} size={22} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}