import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">Auton katsastus &middot; Vantaa</p>
        <h1>Lentokentän Autokatsastus Oy</h1>
        <p className="hero-lead">
          Ammattitaitoinen autojen katsastuspalvelu Vantaalla, lähellä
          lentokenttää. Varaa katsastusaika helposti ja hoida asiointi
          nopeasti.
        </p>
        <div className="hero-actions">
          <Link to="/varaa-aika" className="btn btn-primary">
            Varaa aika
          </Link>
          <Link to="/yhteystiedot" className="btn btn-secondary">
            Yhteystiedot
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
