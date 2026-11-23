import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Microscope, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Activity,
  Flame,
  Search
} from 'lucide-react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Badge from '../../components/Badge';

export default function LandingPage() {
  const sampleEquipment = [
    {
      id: 'eq-1',
      name: 'Rigol 4-Channel Digital Oscilloscope 100MHz',
      category: 'Electronics Lab',
      room: 'Hall B, Rm 302',
      status: 'AVAILABLE',
      specs: '1GSa/s, 4 Channels, UltraVision',
    },
    {
      id: 'eq-2',
      name: 'Formlabs Form 3+ SLA 3D Printer',
      category: 'Fabrication & Prototyping',
      room: 'MakerSpace Bay 4',
      status: 'IN_USE',
      specs: '25μm resolution, photopolymer resin',
    },
    {
      id: 'eq-3',
      name: 'Shimadzu UV-Visible Spectrophotometer',
      category: 'Biochemistry Lab',
      room: 'Life Sciences Rm 114',
      status: 'AVAILABLE',
      specs: '190 - 1100 nm, double-beam optics',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Browse Equipment & Spaces',
      desc: 'Explore certified university lab equipment, maker bays, and specialized research cleanrooms.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Get AI Recommendations',
      desc: 'Let Gemini AI suggest the exact tools, safety gear, and time slots based on your project description.',
      icon: Sparkles,
    },
    {
      step: '03',
      title: 'Conflict-Free Booking',
      desc: 'Reserve time slots with instant validation, preventing double bookings and schedule clashes.',
      icon: Calendar,
    },
    {
      step: '04',
      title: 'Check-In & Conduct Research',
      desc: 'Access the lab with automated manager approval, safety checklists, and usage logging.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="hero-pill">
            <Sparkles size={16} />
            <span>Smart University Research Infrastructure</span>
          </div>

          <h1 className="hero-title">
            Reserve Lab Equipment & Workspaces <span className="text-gradient">Without Friction</span>
          </h1>

          <p className="hero-subtitle">
            LabLink connects university students, researchers, and faculty to specialized laboratory instruments,
            prototyping tools, and collaborative workspaces with intelligent scheduling and AI assistance.
          </p>

          <div className="hero-cta">
            <Link to="/equipment">
              <Button variant="primary" size="lg" icon={ArrowRight}>
                Explore Equipment
              </Button>
            </Link>
            <Link to="/workspaces">
              <Button variant="secondary" size="lg" icon={Calendar}>
                Book a Workspace
              </Button>
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div style={{ marginTop: '3.5rem', width: '100%', maxWidth: '850px' }}>
            <div className="grid-3">
              <Card className="stat-card" style={{ justifyContent: 'center' }}>
                <div className="stat-icon" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
                  <Cpu size={22} />
                </div>
                <div>
                  <div className="stat-value">250+</div>
                  <div className="stat-label">Instruments Available</div>
                </div>
              </Card>

              <Card className="stat-card" style={{ justifyContent: 'center' }}>
                <div className="stat-icon" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
                  <Layers size={22} />
                </div>
                <div>
                  <div className="stat-value">18</div>
                  <div className="stat-label">University Lab Bays</div>
                </div>
              </Card>

              <Card className="stat-card" style={{ justifyContent: 'center' }}>
                <div className="stat-icon" style={{ backgroundColor: 'var(--success-bg)', color: 'var(--success)' }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Safety & Access Verified</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Instruments Preview */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>Active Inventory</div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.25rem' }}>High-Demand Equipment</h2>
              <p className="section-subtitle" style={{ textAlign: 'left' }}>Check live availability across campus laboratories.</p>
            </div>
            <Link to="/equipment">
              <Button variant="outline" size="sm" icon={ArrowRight}>View All 250+ Items</Button>
            </Link>
          </div>

          <div className="grid-3">
            {sampleEquipment.map((item) => (
              <Card key={item.id} hoverable style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <Badge variant="neutral">{item.category}</Badge>
                    <Badge variant={item.status === 'AVAILABLE' ? 'success' : 'warning'}>
                      {item.status === 'AVAILABLE' ? 'Available' : 'In Use'}
                    </Badge>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {item.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                    {item.specs}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={14} /> {item.room}
                  </span>
                  <Link to="/equipment">
                    <Button variant="secondary" size="sm">Details</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>Streamlined Workflow</div>
            <h2 className="section-title">How LabLink Works</h2>
            <p className="section-subtitle">A modern, integrated booking experience designed specifically for academic laboratories.</p>
          </div>

          <div className="grid-4">
            {steps.map((st) => {
              const IconComp = st.icon;
              return (
                <Card key={st.step} hoverable style={{ position: 'relative' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    PHASE {st.step}
                  </div>
                  <div className="feature-icon-box">
                    <IconComp size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>{st.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5 }}>{st.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Callout Banner */}
      <section style={{ padding: '3.5rem 0 5rem' }}>
        <div className="container">
          <Card style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)',
            color: 'white',
            padding: '3rem 2.5rem',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div style={{ maxWidth: '620px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.15)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem' }}>
                <Sparkles size={14} /> Gemini 1.5 Pro Recommendation Engine
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.75rem' }}>
                Unsure which instrument fits your research?
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6 }}>
                Simply enter your hypothesis or experimental methodology. LabLink's AI analyzes your parameters and pairs you with appropriate lab machines, required safety pre-requisites, and available times.
              </p>
            </div>
            <div>
              <Link to="/equipment">
                <Button variant="secondary" size="lg" icon={Sparkles} style={{ backgroundColor: 'white', color: 'var(--primary)', border: 'none' }}>
                  Try AI Recommender
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
