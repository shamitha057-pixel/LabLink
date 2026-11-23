import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from '../features/landing/LandingPage';
import EquipmentCataloguePage from '../features/equipment/EquipmentCataloguePage';
import WorkspaceBookingPage from '../features/workspaces/WorkspaceBookingPage';
import StudentDashboardPage from '../features/dashboard/StudentDashboardPage';
import AdminDashboardPage from '../features/admin/AdminDashboardPage';
import Button from '../components/Button';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/equipment" element={<EquipmentCataloguePage />} />
      <Route path="/workspaces" element={<WorkspaceBookingPage />} />
      <Route path="/dashboard" element={<StudentDashboardPage />} />
      <Route path="/admin" element={<AdminDashboardPage />} />
      
      {/* 404 Fallback */}
      <Route
        path="*"
        element={
          <div className="container" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
              404
            </h1>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Lab Page Not Found
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              The laboratory page or resource you are looking for does not exist or has been relocated.
            </p>
            <Link to="/">
              <Button variant="primary">Return to LabLink Home</Button>
            </Link>
          </div>
        }
      />
    </Routes>
  );
}
