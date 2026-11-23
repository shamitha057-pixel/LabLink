import Icon from '../common/Icon.jsx'
import { STEPS } from '../../data/landingContent.js'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">How it works</span>
          <h2 className="section__title">From idea to experiment in three steps</h2>
          <p className="section__subtitle">
            No paperwork and no waiting in queues.
          </p>
        </div>

        <ol className="steps">
          {STEPS.map((step, index) => (
            <li key={step.title} className="step">
              <span className="step__number">{index + 1}</span>
              <span className="step__icon">
                <Icon name={step.icon} size={22} />
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}