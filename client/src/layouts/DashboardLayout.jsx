import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Icon from '../components/common/Icon.jsx'
import { APP_ROUTES } from '../constants/navigation.js'

// Layout for application pages: sidebar on the left, content on the right.
export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="dash">
      <aside className={`dash__sidebar ${sidebarOpen ? 'is-open' : ''}`}>
        <Link to="/" className="brand dash__brand" onClick={closeSidebar}>
          <span className="brand__mark">
            <Icon name="flask" size={20} />
          </span>
          <span>LabLink</span>
        </Link>

        <p className="dash__label">Workspace</p>
        <nav className="dash__nav">
          {APP_ROUTES.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              onClick={closeSidebar}
              className={({ isActive }) => `dash__link ${isActive ? 'is-active' : ''}`}
            >
              <Icon name={route.icon} size={18} />
              <span>{route.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="dash__footer">
          <Link to="/" className="dash__link" onClick={closeSidebar}>
            <Icon name="arrow-left" size={18} />
            <span>Back to home</span>
          </Link>
        </div>
      </aside>

      {sidebarOpen && <div className="dash__overlay" onClick={closeSidebar} />}

      <div className="dash__main">
        <header className="dash__topbar">
          <button
            type="button"
            className="dash__menu-btn"
            aria-label="Open navigation menu"
            onClick={() => setSidebarOpen(true)}
          >
            <Icon name="menu" size={22} />
          </button>
          <span className="dash__env">Frontend foundation preview</span>
          <div className="dash__user">
            <span className="dash__avatar">G</span>
            <span className="dash__user-name">Guest</span>
          </div>
        </header>

        <main className="dash__content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}