import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cardiologist',
    info: '15 years · Heart & Vascular Care',
    rating: '⭐ 4.9 (312 reviews)',
    initials: 'SM',
    color: 'linear-gradient(135deg, #2563eb, #1a4f8a)',
  },
  {
    id: 2,
    name: 'Dr. James Okafor',
    specialty: 'General Physician',
    info: '10 years · Family & Primary Care',
    rating: '⭐ 4.8 (278 reviews)',
    initials: 'JO',
    color: 'linear-gradient(135deg, #16a34a, #15803d)',
  },
  {
    id: 3,
    name: 'Dr. Priya Nair',
    specialty: 'Neurologist',
    info: '12 years · Brain & Nerve Disorders',
    rating: '⭐ 4.9 (205 reviews)',
    initials: 'PN',
    color: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
  },
  {
    id: 4,
    name: 'Dr. Carlos Reyes',
    specialty: 'Orthopedic Surgeon',
    info: '18 years · Joints, Bones & Spine',
    rating: '⭐ 4.7 (189 reviews)',
    initials: 'CR',
    color: 'linear-gradient(135deg, #db2777, #be185d)',
  },
]

export default function Doctors() {
  const navigate = useNavigate()

  return (
    <div className="doctors-page">
      <Navbar />

      <div className="page-hero">
        <div className="container">
          <h1>Our Specialist Doctors</h1>
          <p>Experienced, compassionate, and ready to care for you.</p>
        </div>
      </div>

      <div className="container">
        <div className="doctors-grid">
          {doctors.map(doc => (
            <div className="doctor-card" key={doc.id}>
              <div className="doctor-avatar" style={{ background: doc.color }}>
                {doc.initials}
              </div>
              <h3>{doc.name}</h3>
              <p className="doctor-specialty">{doc.specialty}</p>
              <p className="doctor-info">{doc.info}</p>
              <p className="doctor-rating">{doc.rating}</p>
              <button
                className="btn btn-green"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => navigate('/booking', { state: { doctor: doc.name, specialty: doc.specialty } })}
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Gentle Guardian. All rights reserved.</p>
      </footer>
    </div>
  )
}
