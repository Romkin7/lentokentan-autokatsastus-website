import { Link } from 'react-router-dom'
import { companyInfo } from '../companyInfo'
import '../pages/Contact.css'
import './Booking.css'

function Booking() {
  return (
    <section className="page booking-page">
      <div className="page-inner">
        <p className="page-eyebrow">Ajanvaraus</p>
        <h1>Varaa katsastusaika</h1>
        <div className="booking-placeholder">
          <p>
            Verkkoajanvaraus otetaan käyttöön pian. Ajanvaraus tehdään
            jatkossa Doris-järjestelmän kautta.
          </p>
          <p>
            Sillä välin voit varata ajan puhelimitse tai olla yhteydessä
            meihin{' '}
            <Link to="/yhteystiedot">yhteystietosivun</Link> kautta.
          </p>
          <p className="booking-phone">
            Puhelin:{' '}
            <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Booking
