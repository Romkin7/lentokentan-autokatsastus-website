import Hero from '../components/Hero'
import { companyInfo } from '../companyInfo'
import './Home.css'

const serviceIcons = [
  // Katsastukset
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 38l5-14a6 6 0 0 1 5.7-4h22.6a6 6 0 0 1 5.7 4l5 14"
      stroke="#1e4fd8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="8"
      y="38"
      width="48"
      height="14"
      rx="5"
      stroke="#1e4fd8"
      strokeWidth="3"
    />
    <circle cx="19" cy="52" r="4" fill="#1e4fd8" />
    <circle cx="45" cy="52" r="4" fill="#1e4fd8" />
    <path
      d="M24 44l5 5 11-11"
      stroke="#c8942f"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Akkutestit ja kuntotarkastukset
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="10"
      y="20"
      width="40"
      height="26"
      rx="4"
      stroke="#1e4fd8"
      strokeWidth="3"
    />
    <rect x="50" y="28" width="5" height="10" rx="1.5" fill="#1e4fd8" />
    <path d="M20 20v-4h8v4" stroke="#1e4fd8" strokeWidth="3" />
    <path d="M36 20v-4h8v4" stroke="#1e4fd8" strokeWidth="3" />
    <path
      d="M28 26l-5 9h6l-3 9 10-11h-6l3-7z"
      fill="#c8942f"
    />
  </svg>,
  // Rekisteröinti- ja maahantuontikatsastukset
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 8h24l8 8v40a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z"
      stroke="#1e4fd8"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M40 8v8h8" stroke="#1e4fd8" strokeWidth="3" strokeLinejoin="round" />
    <path d="M20 30h20M20 38h20M20 46h12" stroke="#1e4fd8" strokeWidth="3" strokeLinecap="round" />
    <circle cx="46" cy="46" r="9" fill="#c8942f" />
    <path
      d="M42.5 46l2.5 2.5 5-5"
      stroke="#0f2f52"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
]

function Home() {
  return (
    <>
      <Hero />
      <section className="info-section">
        <div className="info-section-inner">
          <div className="info-card">
            <h2>Toimiala</h2>
            <p>{companyInfo.industry}</p>
          </div>
          <div className="info-card">
            <h2>Sijainti</h2>
            <p>
              {companyInfo.visitingAddress.street},{' '}
              {companyInfo.visitingAddress.zip}{' '}
              {companyInfo.visitingAddress.city}
            </p>
          </div>
          <div className="info-card">
            <h2>Ajanvaraus</h2>
            <p>
              <a
                href={companyInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Varaa katsastusaika helposti verkossa
              </a>
            </p>
          </div>
          <div className="info-card">
            <h2>Aukioloajat</h2>
            <ul className="hours-list">
              {companyInfo.openingHours.map(({ days, hours }) => (
                <li key={days}>
                  <span>{days}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="info-card">
            <h2>Puhelinnumero</h2>
            <p>
              <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
            </p>
          </div>
          <div className="info-card">
            <h2>Sähköposti</h2>
            <p>
              <a href={companyInfo.emailHref}>{companyInfo.email}</a>
            </p>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="services-section-inner">
          <h2>Palvelumme</h2>
          <div className="services-grid">
            {companyInfo.services.map((service, index) => (
              <article className="service-card" key={service}>
                <div className="service-icon">{serviceIcons[index]}</div>
                <p className="service-title">{service}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
