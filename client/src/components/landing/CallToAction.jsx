import { Link } from 'react-router-dom'
import Icon from '../common/Icon.jsx'

export default function CallToAction() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta">
          <h2>Ready to simplify lab bookings?</h2>
          <p>
            Take a look around the platform and see how LabLink will fit your
            university.
          </p>
          <div className="cta__actions">
            <Link to="/student" className="btn btn--primary btn--lg">
              Open the dashboard <Icon name="arrow-right" size={18} />
            </Link>
            <Link to="/workspaces" className="btn btn--outline-light btn--lg">
              Book a workspace
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}