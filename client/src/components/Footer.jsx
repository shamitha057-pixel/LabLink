import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, ShieldCheck, Cpu, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="brand-link" style={{ marginBottom: '0.75rem' }}>
              <div className="brand-icon-wrapper">
                <Microscope size={18} />
              </div>
              <span>Lab<span style={{ color: 'var(--accent)' }}>Link</span></span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', maxWidth: '360px' }}>
              University laboratory equipment rental and smart workspace booking platform.
              Empowering student research and university resource efficiency.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                Platform
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <li><Link to="/equipment" className="hover-underline">Equipment Catalogue</Link></li>
                <li><Link to="/workspaces" className="hover-underline">Workspace Booking</Link></li>
                <li><Link to="/dashboard" className="hover-underline">Student Dashboard</Link></li>
                <li><Link to="/admin" className="hover-underline">Admin Oversight</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                Key Capabilities
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={14} color="var(--primary)" /> Safety Verification
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Cpu size={14} color="var(--primary)" /> Real-time Availability
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Sparkles size={14} color="var(--accent)" /> Gemini AI Matching
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} LabLink University Platform. All rights reserved.</span>
          <span>Designed for university engineering, science, and research labs.</span>
        </div>
      </div>
    </footer>
  );
}
