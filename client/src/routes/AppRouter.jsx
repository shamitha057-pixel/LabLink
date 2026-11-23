import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout.jsx'
import DashboardLayout from '../layouts/DashboardLayout.jsx'

import LandingPage from '../pages/LandingPage.jsx'
import StudentDashboard from '../pages/StudentDashboard.jsx'
import EquipmentCatalogue from '../pages/EquipmentCatalogue.jsx'
import WorkspaceBooking from '../pages/WorkspaceBooking.jsx'
import AIRecommendations from '../pages/AIRecommendations.jsx'
import AdminDashboard from '../pages/AdminDashboard.jsx'
import NotFound from '../pages/NotFound.jsx'

export default function AppRouter() {
  return (
    <Routes>
      {/* Public marketing pages: navbar + footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      {/* Application pages: sidebar + top bar */}
      <Route element={<DashboardLayout />}>
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/equipment" element={<EquipmentCatalogue />} />
        <Route path="/workspaces" element={<WorkspaceBooking />} />
        <Route path="/recommendations" element={<AIRecommendations />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      {/* Anything else */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}