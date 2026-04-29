import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <div className="brand-icon">✚</div>
          Gentle Guardian
        </Link>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/doctors" onClick={() => setOpen(false)}>Doctors</Link></li>
          <li><Link to="/booking" onClick={() => setOpen(false)}>Book Appointment</Link></li>
        </ul>

        <button
          className="btn btn-primary navbar-cta"
          onClick={() => navigate('/login')}
        >
          Sign In
        </button>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
