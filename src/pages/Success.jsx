import { useLocation, useNavigate } from 'react-router-dom'

export default function Success() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const doctor = state?.doctor ?? 'Your Doctor'
  const specialty = state?.specialty ?? 'General'
  const date = state?.date
    ? new Date(state.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    : '—'
  const slot = state?.slot ?? '—'

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">✅</div>
        <h2>Appointment Confirmed!</h2>
        <p>
          Your appointment has been booked successfully. We&apos;ll send
          a reminder 24 hours before your visit.
        </p>

        <div className="success-details">
          <div className="detail-row">
            <span>Doctor</span>
            <span>{doctor}</span>
          </div>
          <div className="detail-row">
            <span>Specialty</span>
            <span>{specialty}</span>
          </div>
          <div className="detail-row">
            <span>Date</span>
            <span>{date}</span>
          </div>
          <div className="detail-row">
            <span>Time</span>
            <span>{slot}</span>
          </div>
          <div className="detail-row">
            <span>Status</span>
            <span style={{ color: 'var(--green)', fontWeight: 700 }}>Confirmed ✓</span>
          </div>
        </div>

        <div className="success-actions">
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Back to Home
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/booking')}>
            Book Another
          </button>
        </div>
      </div>
    </div>
  )
}
