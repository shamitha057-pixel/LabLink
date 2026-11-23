import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { LANDING_LINKS } from '../../data/landingContent.js'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand__mark">
            <Icon name="flask" size={20} />
          </span>
          <span>LabLink</span>
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>

        <nav className={`navbar__menu ${menuOpen ? 'is-open' : ''}`}>
          {LANDING_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <Link to="/student" className="btn btn--primary btn--sm" onClick={closeMenu}>
            Open Dashboard
          </Link>
        </nav>
      </div>
    </header>
  )
}