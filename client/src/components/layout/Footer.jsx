import { Link } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { APP_ROUTES } from '../../constants/navigation.js'
import { LANDING_LINKS } from '../../data/landingContent.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <Link to="/" className="brand">
            <span className="brand__mark">
              <Icon name="flask" size={20} />
            </span>
            <span>LabLink</span>
          </Link>
          <p>
            Laboratory equipment rental and workspace booking for universities,
            made simple.
          </p>
        </div>

        <div>
          <h3 className="footer__heading">Platform</h3>
          <ul className="footer__list">
            {APP_ROUTES.map((route) => (
              <li key={route.path}>
                <Link to={route.path}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Explore</h3>
          <ul className="footer__list">
            {LANDING_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} LabLink. All rights reserved.</span>
        <span>Frontend foundation · work in progress</span>
      </div>
    </footer>
  )
}