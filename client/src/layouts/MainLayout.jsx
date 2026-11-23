import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'

// Layout for public pages. <Outlet /> is where the current page renders.
export default function MainLayout() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}