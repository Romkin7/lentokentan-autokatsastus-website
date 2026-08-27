import { NavLink } from 'react-router-dom'
import { companyInfo } from '../companyInfo'
import logo from '../assets/logo.svg'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
          <img
            src={logo}
            alt="Lentokentän Autokatsastus Oy"
            className="navbar-logo-img"
          />
        </NavLink>

        <nav className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Etusivu
          </NavLink>
          <NavLink to="/yhteystiedot" className={({ isActive }) => (isActive ? 'active' : '')}>
            Yhteystiedot
          </NavLink>
          <a
            href={companyInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
          >
            Varaa aika
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
