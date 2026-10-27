import { Link } from 'react-router-dom'
import { companyInfo } from '../companyInfo'
import './Footer.css'

function Footer() {
  const { visitingAddress, postalAddress } = companyInfo

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <h3>{companyInfo.name}</h3>
          <p className="footer-tag">{companyInfo.locationType}</p>
          <p className="footer-industry">{companyInfo.industry}</p>
          <a
            href={companyInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-cta"
          >
            Varaa aika
          </a>
        </div>

        <div className="footer-col">
          <h4>Yhteystiedot</h4>
          <p>
            Puhelin: <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
          </p>
          <p>
            Sähköposti: <a href={companyInfo.emailHref}>{companyInfo.email}</a>
          </p>
          <p>Y-tunnus: {companyInfo.businessId}</p>
          <p>Verkkolaskuosoite: {companyInfo.einvoiceAddress}</p>
          <p>
            Operaattoritunnus: {companyInfo.einvoiceOperator}{' '}
            {companyInfo.einvoiceOperatorId}
          </p>
        </div>

        <div className="footer-col">
          <h4>Aukioloajat</h4>
          <ul className="footer-hours">
            {companyInfo.openingHours.map(({ days, hours }) => (
              <li key={days}>
                <span>{days}</span>
                <span>{hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Osoitteet</h4>
          <p className="footer-label">Toimipaikka</p>
          <p>
            {visitingAddress.street}
            <br />
            {visitingAddress.zip} {visitingAddress.city}
          </p>
          <p className="footer-label">Postiosoite</p>
          <p>
            {postalAddress.street}
            <br />
            {postalAddress.zip} {postalAddress.city}
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}
          </p>
          <nav className="footer-legal">
            <Link to="/yhteystiedot">Yhteystiedot</Link>
            <Link to="/kayttoehdot">Käyttöehdot</Link>
            <Link to="/tietosuojaseloste">Tietosuojaseloste</Link>
            <Link to="/rekisteriseloste">Rekisteriseloste</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
