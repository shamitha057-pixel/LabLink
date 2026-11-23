import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Microscope, Menu, X, LayoutDashboard, Shield, Calendar, Layers } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <Link to="/" className="brand-link" onClick={closeMenu}>
          <div className="brand-icon-wrapper">
            <Microscope size={22} />
          </div>
          <span>Lab<span style={{ color: 'var(--accent)' }}>Link</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/equipment"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Equipment
          </NavLink>
          <NavLink
            to="/workspaces"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Workspaces
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Student Portal
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Lab Admin
          </NavLink>
        </nav>

        {/* Actions / CTA */}
        <div className="nav-actions">
          <Link to="/equipment">
            <Button variant="primary" size="sm" icon={Calendar}>
              Book Now
            </Button>
          </Link>
          <button
            type="button"
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
