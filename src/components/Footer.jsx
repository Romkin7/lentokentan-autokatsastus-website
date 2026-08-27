import { Link } from 'react-router-dom'
import { companyInfo } from '../companyInfo'
import './Footer.css'

function Footer() {
  const { visitingAddress, postalAddress } = companyInfo

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h3>{companyInfo.name}</h3>
          <p className="footer-tag">{companyInfo.locationType}</p>
          <p className="footer-industry">{companyInfo.industry}</p>
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
                {days}: {hours}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Toimipaikan osoite</h4>
          <p>
            {visitingAddress.street}
            <br />
            {visitingAddress.zip} {visitingAddress.city}
          </p>
        </div>

        <div className="footer-col">
          <h4>Postiosoite</h4>
          <p>
            {postalAddress.street}
            <br />
            {postalAddress.zip} {postalAddress.city}
          </p>
        </div>

        <div className="footer-col">
          <h4>Linkit</h4>
          <p>
            <Link to="/yhteystiedot">Yhteystiedot</Link>
          </p>
          <p>
            <a
              href={companyInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Varaa aika
            </a>
          </p>
          <p>
            <Link to="/kayttoehdot">Käyttöehdot</Link>
          </p>
          <p>
            <Link to="/tietosuojaseloste">Tietosuojaseloste</Link>
          </p>
          <p>
            <Link to="/rekisteriseloste">Rekisteriseloste</Link>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} {companyInfo.name}
      </div>
    </footer>
  )
}

export default Footer
