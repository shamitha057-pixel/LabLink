import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink, 
  ShieldCheck, 
  FileText,
  Microscope,
  ArrowRight
} from 'lucide-react';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

export default function StudentDashboardPage() {
  const { user } = useAuth();

  const activeReservations = [
    {
      id: 'BK-9841',
      equipment: 'Keysight Infiniium Oscilloscope',
      lab: 'Engineering Rm 304',
      date: 'Today, Nov 24',
      slot: '02:00 PM - 04:00 PM',
      status: 'CONFIRMED',
      type: 'Equipment',
    },
    {
      id: 'BK-9855',
      equipment: 'PCB Soldering Bench #3',
      lab: 'Electronics Lab',
      date: 'Tomorrow, Nov 25',
      slot: '10:00 AM - 12:30 PM',
      status: 'PENDING_APPROVAL',
      type: 'Workspace',
    },
  ];

  const safetyCertifications = [
    { name: 'General University Lab Safety (EHS-101)', status: 'Active', expiry: 'Oct 2027' },
    { name: 'High-Voltage Electrical Protocols', status: 'Active', expiry: 'Mar 2027' },
    { name: 'Laser Safety Level 2', status: 'Pending Verification', expiry: '—' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <User size={26} />
              </div>
              <div>
                <h1 className="page-title" style={{ marginBottom: '0.15rem' }}>Welcome, {user.name}</h1>
                <p className="page-description">
                  {user.department} &bull; University ID: <strong>STU-88294</strong>
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/equipment">
                <Button variant="primary" size="sm" icon={Calendar}>New Equipment Rental</Button>
              </Link>
              <Link to="/workspaces">
                <Button variant="secondary" size="sm">Book Bench</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Quick Stats Grid */}
        <div className="grid-3" style={{ marginBottom: '2rem' }}>
          <Card className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
              <Calendar size={22} />
            </div>
            <div>
              <div className="stat-value">2</div>
              <div className="stat-label">Active Bookings</div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'var(--success-bg)', color: 'var(--success)' }}>
              <Clock size={22} />
            </div>
            <div>
              <div className="stat-value">14.5 hrs</div>
              <div className="stat-label">Lab Hours Completed This Term</div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="stat-value">2 Certified</div>
              <div className="stat-label">Safety Clearance Badges</div>
            </div>
          </Card>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.75rem', marginBottom: '3rem' }}>
          {/* Active Bookings Section */}
          <div>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Upcoming Reservations</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Updated just now</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {activeReservations.map((res) => (
                  <div
                    key={res.id}
                    style={{
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '0.75rem'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-light)' }}>
                          {res.id}
                        </span>
                        <Badge variant="neutral">{res.type}</Badge>
                        <Badge variant={res.status === 'CONFIRMED' ? 'success' : 'warning'}>
                          {res.status === 'CONFIRMED' ? 'Confirmed' : 'Pending Approval'}
                        </Badge>
                      </div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {res.equipment}
                      </h4>
                      <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                        {res.lab} &bull; <strong>{res.date}</strong> ({res.slot})
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Button variant="secondary" size="sm">Details</Button>
                      <Button variant="outline" size="sm" style={{ color: 'var(--danger)', borderColor: '#fca5a5' }}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Safety & Compliance Side Panel */}
          <div>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <ShieldCheck size={18} color="var(--primary)" />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Safety Qualifications</h3>
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Required before booking specialized analytical machines or cleanrooms.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {safetyCertifications.map((cert, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-subtle)',
                      fontSize: '0.825rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: '0.25rem' }}>
                      <span>{cert.name}</span>
                      <Badge variant={cert.status === 'Active' ? 'success' : 'warning'}>
                        {cert.status}
                      </Badge>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                      Valid: {cert.expiry}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.25rem' }}>
                <Button variant="outline" size="sm" style={{ width: '100%' }}>
                  Submit Certification Certificate
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
