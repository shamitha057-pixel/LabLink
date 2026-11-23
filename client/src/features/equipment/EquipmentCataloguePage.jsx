import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Cpu, 
  CheckCircle, 
  AlertCircle, 
  Sparkles, 
  Clock, 
  MapPin, 
  Info,
  CalendarCheck
} from 'lucide-react';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import Button from '../../components/Button';

export default function EquipmentCataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Electronics', 'Fabrication & 3D', 'Biochemistry', 'Materials Testing', 'Robotics'];

  const inventory = [
    {
      id: 'EQ-001',
      name: 'Keysight Infiniium 4-Channel Oscilloscope 500MHz',
      category: 'Electronics',
      department: 'Electrical Engineering',
      location: 'Engineering Bldg 2, Room 304',
      status: 'AVAILABLE',
      safetyLevel: 'Level 1 (Basic)',
      specs: '4GSa/s sample rate, 16 digital channels',
    },
    {
      id: 'EQ-002',
      name: 'Formlabs Form 3+ SLA Resin 3D Printer',
      category: 'Fabrication & 3D',
      department: 'Mechanical Engineering',
      location: 'Maker Lab, Bay B',
      status: 'BOOKED',
      safetyLevel: 'Level 2 (Chemical)',
      specs: 'Laser spot 85 microns, print vol 14.5 × 14.5 × 18.5 cm',
    },
    {
      id: 'EQ-003',
      name: 'Instron 5969 Universal Testing System',
      category: 'Materials Testing',
      department: 'Civil & Materials',
      location: 'Materials Annex, Rm 102',
      status: 'AVAILABLE',
      safetyLevel: 'Level 3 (Certified Operator)',
      specs: '50 kN capacity, tensile and compression tests',
    },
    {
      id: 'EQ-004',
      name: 'Thermo Scientific NanoDrop One UV Spectrophotometer',
      category: 'Biochemistry',
      department: 'Biomedical Science',
      location: 'Life Sciences Hall, Rm 210',
      status: 'AVAILABLE',
      safetyLevel: 'Level 1 (Basic)',
      specs: '0.5 to 2.0 µL microvolume analysis, 190–850 nm',
    },
    {
      id: 'EQ-005',
      name: 'Tormach 1100Mx CNC Mill',
      category: 'Fabrication & 3D',
      department: 'Mechanical Engineering',
      location: 'Precision Machine Shop',
      status: 'MAINTENANCE',
      safetyLevel: 'Level 3 (Certified Operator)',
      specs: 'BT30 spindle, 10,000 RPM, PathPilot controller',
    },
    {
      id: 'EQ-006',
      name: 'Universal Robots UR5e Collaborative Robotic Arm',
      category: 'Robotics',
      department: 'Computer Science & AI',
      location: 'Robotics Wing, Lab 4',
      status: 'AVAILABLE',
      safetyLevel: 'Level 2 (Certified)',
      specs: '5kg payload, 850mm reach, force torque sensor',
    },
  ];

  const filteredItems = inventory.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1 className="page-title">Equipment Catalogue</h1>
              <p className="page-description">
                Explore laboratory instruments, analytical devices, and prototyping hardware across all university faculties.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Badge variant="primary" icon={Cpu}>Live Synced with Campus Labs</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Gemini AI Recommendation Teaser Box */}
        <Card style={{
          backgroundColor: '#f0fdf4',
          borderColor: '#bbf7d0',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: '#dcfce7',
              color: '#15803d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Sparkles size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.975rem', fontWeight: 700, color: '#166534' }}>
                Need AI assistance matching instruments to your research experiment?
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#15803d' }}>
                Gemini API integration (Phase 4) will automatically parse your research methodology and suggest compatible machines.
              </p>
            </div>
          </div>
          <Button variant="secondary" size="sm" icon={Sparkles} style={{ borderColor: '#86efac', color: '#166534' }}>
            AI Equipment Matcher
          </Button>
        </Card>

        {/* Search & Category Filter Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '0.5rem 1rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <Search size={18} color="var(--text-light)" style={{ marginRight: '0.75rem' }} />
            <input
              type="text"
              placeholder="Search equipment by name, technical specs, or lab room..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                width: '100%',
                fontSize: '0.925rem',
                color: 'var(--text-main)',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, marginRight: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Filter size={14} /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--primary)' : 'var(--border-color)',
                  backgroundColor: selectedCategory === cat ? 'var(--primary)' : 'white',
                  color: selectedCategory === cat ? 'white' : 'var(--text-muted)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {filteredItems.map((item) => (
            <Card key={item.id} hoverable style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <Badge variant="neutral">{item.category}</Badge>
                  <Badge
                    variant={
                      item.status === 'AVAILABLE' ? 'success' :
                      item.status === 'BOOKED' ? 'warning' : 'danger'
                    }
                  >
                    {item.status === 'AVAILABLE' ? 'Available' : item.status === 'BOOKED' ? 'Booked' : 'Maintenance'}
                  </Badge>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', lineHeight: 1.35 }}>
                  {item.name}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', minHeight: '2.5rem' }}>
                  {item.specs}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)', backgroundColor: 'var(--bg-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={14} color="var(--primary)" /> {item.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Info size={14} color="var(--accent)" /> Requirement: {item.safetyLevel}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'JetBrains Mono, monospace' }}>
                  {item.id}
                </span>
                <Button
                  variant={item.status === 'AVAILABLE' ? 'primary' : 'secondary'}
                  size="sm"
                  icon={CalendarCheck}
                  disabled={item.status === 'MAINTENANCE'}
                >
                  {item.status === 'AVAILABLE' ? 'Reserve Slot' : item.status === 'BOOKED' ? 'Join Waitlist' : 'Unavailable'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
