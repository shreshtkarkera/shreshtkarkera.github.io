import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
]

const UNAVAILABLE = ['10:30 AM', '3:00 PM']

export default function Booking() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const doctor = state?.doctor ?? 'Any Available Doctor'
  const specialty = state?.specialty ?? 'General'

  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('')

  const today = new Date().toISOString().split('T')[0]

  const handleConfirm = () => {
    if (!date || !slot) return
    navigate('/success', { state: { doctor, specialty, date, slot } })
  }

  return (
    <div className="booking-page">
      <Navbar />

      <div className="booking-wrapper">
        <div className="booking-card">
          <h2>Book an Appointment</h2>
          <p>Select your preferred date and time slot below.</p>

          {/* Doctor info summary */}
          <div className="booking-summary">
            <p><span>👨‍⚕️ Doctor:</span> <strong>{doctor}</strong></p>
            <p><span>🏥 Specialty:</span> <strong>{specialty}</strong></p>
          </div>

          {/* Date picker */}
          <div className="booking-section">
            <h3>📅 Choose a Date</h3>
            <input
              type="date"
              min={today}
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>

          {/* Time slots */}
          <div className="booking-section">
            <h3>🕐 Choose a Time Slot</h3>
            <div className="time-slots">
              {TIME_SLOTS.map(t => {
                const unavail = UNAVAILABLE.includes(t)
                return (
                  <button
                    key={t}
                    className={`time-slot${slot === t ? ' selected' : ''}${unavail ? ' unavailable' : ''}`}
                    disabled={unavail}
                    onClick={() => setSlot(t)}
                  >
                    {t}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Confirm */}
          <button
            className="btn btn-primary btn-block"
            disabled={!date || !slot}
            style={{ opacity: (!date || !slot) ? 0.5 : 1, cursor: (!date || !slot) ? 'not-allowed' : 'pointer' }}
            onClick={handleConfirm}
          >
            Confirm Appointment
          </button>
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Gentle Guardian. All rights reserved.</p>
      </footer>
    </div>
  )
}
