import { Link } from 'react-router-dom'
import { companyInfo } from '../companyInfo'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">Auton katsastus &middot; Vantaa</p>
          <h1>Lentokentän Autokatsastus Oy</h1>
          <p className="hero-lead">
            Ammattitaitoinen autojen katsastuspalvelu Vantaalla, lähellä
            lentokenttää. Varaa katsastusaika helposti ja hoida asiointi
            nopeasti.
          </p>
          <div className="hero-actions">
            <a
              href={companyInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Varaa aika
            </a>
            <Link to="/yhteystiedot" className="btn btn-secondary">
              Yhteystiedot
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
