import { companyInfo } from '../companyInfo'
import './Contact.css'

function Contact() {
  const { visitingAddress, postalAddress } = companyInfo

  return (
    <section className="page contact-page">
      <div className="page-inner">
        <p className="page-eyebrow">{companyInfo.locationType}</p>
        <h1>{companyInfo.name}</h1>
        <p className="contact-description">{companyInfo.description}</p>

        <dl className="contact-list">
          <div className="contact-row">
            <dt>Toimiala</dt>
            <dd>{companyInfo.industry}</dd>
          </div>
          <div className="contact-row">
            <dt>Y-tunnus</dt>
            <dd>{companyInfo.businessId}</dd>
          </div>
          <div className="contact-row">
            <dt>Puhelinnumero</dt>
            <dd>
              <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
            </dd>
          </div>
          <div className="contact-row">
            <dt>Sähköposti</dt>
            <dd>
              <a href={companyInfo.emailHref}>{companyInfo.email}</a>
            </dd>
          </div>
          <div className="contact-row">
            <dt>Palvelut</dt>
            <dd>
              <ul className="contact-services-list">
                {companyInfo.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="contact-row">
            <dt>Verkkolaskuosoite</dt>
            <dd>{companyInfo.einvoiceAddress}</dd>
          </div>
          <div className="contact-row">
            <dt>Operaattoritunnus</dt>
            <dd>
              {companyInfo.einvoiceOperator} {companyInfo.einvoiceOperatorId}
            </dd>
          </div>
          <div className="contact-row">
            <dt>Toimipaikan osoite</dt>
            <dd>
              {visitingAddress.street}
              <br />
              {visitingAddress.zip} {visitingAddress.city}
            </dd>
          </div>
          <div className="contact-row">
            <dt>Postiosoite</dt>
            <dd>
              {postalAddress.street}
              <br />
              {postalAddress.zip} {postalAddress.city}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default Contact
