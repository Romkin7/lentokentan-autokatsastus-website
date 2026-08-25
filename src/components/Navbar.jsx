import { NavLink } from 'react-router-dom'
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
          <NavLink to="/varaa-aika" className="navbar-cta">
            Varaa aika
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
