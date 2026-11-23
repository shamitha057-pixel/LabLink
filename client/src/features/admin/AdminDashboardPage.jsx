import React, { useState } from 'react';
import { 
  Shield, 
  CheckCircle2, 
  XCircle, 
  Wrench, 
  AlertCircle, 
  Activity, 
  Clock, 
  Building, 
  Check, 
  X,
  UserCheck
} from 'lucide-react';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

export default function AdminDashboardPage() {
  const { user, switchRole } = useAuth();

  const [pendingRequests, setPendingRequests] = useState([
    {
      id: 'REQ-402',
      student: 'Sarah Chen (Graduate Researcher)',
      department: 'Bioengineering',
      resource: 'Shimadzu UV-Visible Spectrophotometer',
      timeSlot: 'Nov 24, 01:00 PM - 05:00 PM (4h)',
      purpose: 'Enzyme kinetics optical density reading for thesis',
      safetyCleared: true,
    },
    {
      id: 'REQ-403',
      student: 'Marcus Vance (Senior Capstone)',
      department: 'Mechanical Eng.',
      resource: 'Tormach 1100Mx CNC Mill',
      timeSlot: 'Nov 25, 09:00 AM - 12:00 PM (3h)',
      purpose: 'Milling chassis components for Formula SAE',
      safetyCleared: false,
    },
  ]);

  const maintenanceAlerts = [
    { machine: 'Formlabs Form 3+ (Bay 4)', issue: 'Resin tank optical window replacement required', priority: 'Medium' },
    { machine: 'Instron 5969 Universal Tester', issue: 'Annual load cell calibration due in 5 days', priority: 'High' },
  ];

  const handleApprove = (id) => {
    setPendingRequests((prev) => prev.filter((item) => item.id !== id));
  };

  const handleReject = (id) => {
    setPendingRequests((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <Shield size={20} color="var(--primary)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Laboratory Operations Management
                </span>
              </div>
              <h1 className="page-title">Lab Manager Administration</h1>
              <p className="page-description">
                Review equipment approval queues, oversee lab capacity, and schedule instrument calibrations.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'var(--bg-subtle)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Role Switcher (Demo):</span>
              <Button
                variant={user.role === 'ADMIN' ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => switchRole('ADMIN')}
              >
                Manager Mode
              </Button>
              <Button
                variant={user.role === 'STUDENT' ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => switchRole('STUDENT')}
              >
                Student Mode
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Metric Cards */}
        <div className="grid-4" style={{ marginBottom: '2rem' }}>
          <Card className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'var(--warning-bg)', color: 'var(--warning)' }}>
              <Clock size={20} />
            </div>
            <div>
              <div className="stat-value">{pendingRequests.length}</div>
              <div className="stat-label">Pending Approvals</div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
              <Activity size={20} />
            </div>
            <div>
              <div className="stat-value">84%</div>
              <div className="stat-label">Lab Utilization Rate</div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'var(--danger-bg)', color: 'var(--danger)' }}>
              <Wrench size={20} />
            </div>
            <div>
              <div className="stat-value">2</div>
              <div className="stat-label">Maintenance Alerts</div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'var(--success-bg)', color: 'var(--success)' }}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <div className="stat-value">46</div>
              <div className="stat-label">Check-ins Completed</div>
            </div>
          </Card>
        </div>

        {/* Pending Approvals Table */}
        <div style={{ marginBottom: '2.5rem' }}>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Reservation Approval Queue</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Requests for restricted machinery requiring lab supervisor sign-off.
                </p>
              </div>
              <Badge variant="warning">{pendingRequests.length} Action Needed</Badge>
            </div>

            {pendingRequests.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={36} color="var(--success)" style={{ margin: '0 auto 0.75rem' }} />
                <p style={{ fontWeight: 600 }}>All reservation requests have been processed!</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Request ID</th>
                      <th>Researcher</th>
                      <th>Target Instrument</th>
                      <th>Time Window</th>
                      <th>Safety Clearance</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingRequests.map((req) => (
                      <tr key={req.id}>
                        <td style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--text-light)' }}>
                          {req.id}
                        </td>
                        <td>
                          <strong>{req.student}</strong>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{req.department}</div>
                        </td>
                        <td>{req.resource}</td>
                        <td style={{ fontSize: '0.825rem' }}>{req.timeSlot}</td>
                        <td>
                          <Badge variant={req.safetyCleared ? 'success' : 'danger'}>
                            {req.safetyCleared ? 'Cleared' : 'Missing Clearance'}
                          </Badge>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', gap: '0.4rem' }}>
                            <Button
                              variant="primary"
                              size="sm"
                              icon={Check}
                              onClick={() => handleApprove(req.id)}
                            >
                              Approve
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              icon={X}
                              onClick={() => handleReject(req.id)}
                            >
                              Reject
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>

        {/* Maintenance Log */}
        <Card style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Wrench size={18} color="var(--danger)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Upcoming Maintenance & Inspection</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {maintenanceAlerts.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.85rem 1rem',
                  backgroundColor: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-md)',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                <div>
                  <strong>{item.machine}</strong>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{item.issue}</div>
                </div>
                <Badge variant={item.priority === 'High' ? 'danger' : 'warning'}>
                  {item.priority} Priority
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
