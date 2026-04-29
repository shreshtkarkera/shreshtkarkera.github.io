import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const features = [
  { icon: '🩺', bg: '#dbeafe', label: 'Expert Doctors', desc: 'Board-certified specialists across all major disciplines.' },
  { icon: '📅', bg: '#dcfce7', label: 'Easy Scheduling', desc: 'Book, reschedule, or cancel in seconds — anytime.' },
  { icon: '🔒', bg: '#fef3c7', label: 'Secure & Private', desc: 'Your health data is encrypted and fully HIPAA-compliant.' },
  { icon: '📞', bg: '#fce7f3', label: '24 / 7 Support', desc: 'Our care team is always available when you need us.' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <span className="hero-badge">🌿 Trusted by 10,000+ patients</span>
          <h1>Your Health, <span>Our Priority</span></h1>
          <p className="hero-sub">
            Gentle Guardian connects you with top-tier doctors so you can book
            appointments with confidence, comfort, and care.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/booking')}>
              Book Now
            </button>
            <button className="btn btn-outline btn-lg" onClick={() => navigate('/doctors')}>
              Meet Our Doctors
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Specialist Doctors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9 ★</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15 yr</div>
              <div className="stat-label">Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Gentle Guardian?</h2>
            <p>Everything you need for a stress-free healthcare experience.</p>
          </div>
          <div className="features-grid">
            {features.map(f => (
              <div className="feature-card" key={f.label}>
                <div className="feature-icon" style={{ background: f.bg }}>{f.icon}</div>
                <h3>{f.label}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to take control of your health?</h2>
          <p>Join thousands of patients who trust Gentle Guardian every day.</p>
          <button className="btn btn-white btn-lg" onClick={() => navigate('/booking')}>
            Book Your Appointment →
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Gentle Guardian. All rights reserved.</p>
      </footer>
    </>
  )
}
