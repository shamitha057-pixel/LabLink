import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ShieldAlert, 
  SlidersHorizontal,
  MapPin
} from 'lucide-react';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import Button from '../../components/Button';

export default function WorkspaceBookingPage() {
  const [selectedZone, setSelectedZone] = useState('All');

  const labWorkspaces = [
    {
      id: 'WS-101',
      name: 'Cleanroom ISO Class 6 Micro-Fab Bay',
      zone: 'Nanotechnology Wing',
      capacity: '4 Researchers',
      amenities: ['HEPA Filtration', 'Nitrogen Lines', 'Chemical Fume Hood', 'Gowning Protocol'],
      status: 'OPEN',
      openingHours: '08:00 AM - 10:00 PM',
    },
    {
      id: 'WS-102',
      name: 'High-Frequency RF & PCB Soldering Bench #3',
      zone: 'Electronics Lab',
      capacity: '2 Students',
      amenities: ['ESD Safe Worksurface', 'Hot Air Rework Station', 'Microscope', 'Fume Extractor'],
      status: 'RESERVED_NOW',
      openingHours: '24/7 (Access Card Required)',
    },
    {
      id: 'WS-103',
      name: 'Rapid Prototyping & Assembly Pod A',
      zone: 'Makerspace Hub',
      capacity: '6 Students',
      amenities: ['Hand Tools Set', 'Workbenches', 'Power Distribution', 'Large Format Cutting Mat'],
      status: 'OPEN',
      openingHours: '09:00 AM - 08:00 PM',
    },
    {
      id: 'WS-104',
      name: 'Autonomous Robotics Testing Arena',
      zone: 'Robotics Wing',
      capacity: '8 Researchers',
      amenities: ['Vicon Motion Capture Cameras', 'Safety Net Enclosure', 'Floor Grid Calibration'],
      status: 'OPEN',
      openingHours: '10:00 AM - 06:00 PM',
    },
    {
      id: 'WS-105',
      name: 'Biosafety Level 2 (BSL-2) Cell Culture Suite',
      zone: 'Biotechnology Center',
      capacity: '3 Researchers',
      amenities: ['Laminar Flow Hood', 'CO2 Incubators', 'Autoclave Access', 'Centrifuge Bench'],
      status: 'OPEN',
      openingHours: '08:00 AM - 09:00 PM',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1 className="page-title">Workspace & Lab Bay Booking</h1>
              <p className="page-description">
                Reserve dedicated university laboratory benches, maker spaces, and certified research facilities.
              </p>
            </div>
            <Badge variant="primary" icon={Building2}>18 Campus Labs Available</Badge>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Reservation Policy Reminder */}
        <Card style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--primary-border)', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Clock size={20} color="var(--primary)" />
            <div style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>
              <strong>Booking Guidelines:</strong> Workspaces can be booked up to 14 days in advance. Remember to wear appropriate PPE (Personal Protective Equipment) for your designated lab tier.
            </div>
          </div>
        </Card>

        {/* Workspace Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
          {labWorkspaces.map((space) => (
            <Card key={space.id} hoverable style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <Badge variant="neutral">{space.zone}</Badge>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'JetBrains Mono, monospace' }}>
                      {space.id}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>{space.name}</h3>
                </div>

                <Badge variant={space.status === 'OPEN' ? 'success' : 'warning'}>
                  {space.status === 'OPEN' ? 'Available Today' : 'Reserved Until 3:00 PM'}
                </Badge>
              </div>

              {/* Details and Amenities */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Users size={16} color="var(--primary)" /> {space.capacity}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={16} color="var(--accent)" /> {space.openingHours}
                </div>
              </div>

              {/* Amenities tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {space.amenities.map((item, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.75rem',
                      backgroundColor: 'var(--bg-subtle)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', alignItems: 'center' }}>
                <Button variant="secondary" size="sm">
                  View Schedule
                </Button>
                <Button variant="primary" size="sm" icon={Calendar}>
                  Select Time Slot
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
