import { Link } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import {
  HERO_HIGHLIGHTS,
  PREVIEW_STATS,
  PREVIEW_ITEMS,
} from '../../data/landingContent.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <Icon name="flask" size={14} /> Built for university laboratories
          </span>

          <h1 className="hero__title">
            Reserve lab equipment and workspaces <span>in a few clicks</span>
          </h1>

          <p className="hero__text">
            LabLink gives students, researchers and lab staff one place to find
            equipment, book workspaces and keep every lab running smoothly.
          </p>

          <div className="hero__actions">
            <Link to="/student" className="btn btn--primary btn--lg">
              Explore the platform <Icon name="arrow-right" size={18} />
            </Link>
            <Link to="/equipment" className="btn btn--outline-light btn--lg">
              Browse equipment
            </Link>
          </div>

          <ul className="hero__highlights">
            {HERO_HIGHLIGHTS.map((item) => (
              <li key={item}>
                <Icon name="check" size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative sample dashboard, built with plain HTML and CSS */}
        <div className="preview" aria-hidden="true">
          <div className="preview__bar">
            <span className="preview__dot" />
            <span className="preview__dot" />
            <span className="preview__dot" />
            <span className="preview__title">LabLink · Sample preview</span>
          </div>

          <div className="preview__body">
            <div className="preview__stats">
              {PREVIEW_STATS.map((stat) => (
                <div key={stat.label} className="preview__stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <ul className="preview__list">
              {PREVIEW_ITEMS.map((item) => (
                <li key={item.name}>
                  <div className="preview__item">
                    <span className="preview__item-icon">
                      <Icon name={item.icon} size={18} />
                    </span>
                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.meta}</small>
                    </div>
                  </div>
                  <span className={`status status--${item.status}`}>
                    {item.statusLabel}
                  </span>
                </li>
              ))}
            </ul>

            <div className="preview__ai">
              <Icon name="zap" size={18} />
              <p>
                <strong>AI suggestion:</strong> For a prototyping project, try
                the Makerspace workstation this Thursday afternoon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}