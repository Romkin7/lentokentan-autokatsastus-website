import { companyInfo } from '../companyInfo'
import './Contact.css'
import './LegalPage.css'

function Kayttoehdot() {
  const { visitingAddress } = companyInfo

  return (
    <section className="page legal-page">
      <div className="page-inner">
        <p className="page-eyebrow">Käyttöehdot</p>
        <h1>Verkkosivuston käyttöehdot</h1>
        <p className="legal-updated">Päivitetty 27.8.2026</p>

        <section>
          <h2>1. Yleistä</h2>
          <p>
            Näitä käyttöehtoja sovelletaan {companyInfo.name} -yrityksen
            (Y-tunnus {companyInfo.businessId}) ylläpitämän verkkosivuston
            käyttöön. Käyttämällä sivustoa hyväksyt nämä käyttöehdot.
            Mikäli et hyväksy ehtoja, pyydämme sinua olemaan käyttämättä
            sivustoa.
          </p>
        </section>

        <section>
          <h2>2. Sisältö ja tekijänoikeudet</h2>
          <p>
            Sivuston sisältö, mukaan lukien tekstit, kuvat, logot ja muu
            materiaali, on {companyInfo.name}n tai sen yhteistyökumppaneiden
            omaisuutta ja suojattu tekijänoikeuslainsäädännöllä. Sisältöä ei
            saa kopioida, jakaa tai käyttää kaupallisiin tarkoituksiin ilman
            kirjallista lupaa.
          </p>
        </section>

        <section>
          <h2>3. Tietojen oikeellisuus</h2>
          <p>
            Pyrimme pitämään sivuston tiedot, kuten palvelukuvaukset,
            yhteystiedot ja aukioloajat, ajan tasalla. Emme kuitenkaan takaa
            tietojen virheettömyyttä tai täydellisyyttä. Sitovat tiedot
            esimerkiksi katsastusajoista ja hinnoista vahvistetaan aina
            erikseen puhelimitse tai ajanvarauksen yhteydessä.
          </p>
        </section>

        <section>
          <h2>4. Vastuunrajoitus</h2>
          <p>
            {companyInfo.name} ei vastaa vahingoista, jotka aiheutuvat
            sivuston käytöstä, käytön estymisestä, sivustolla olevista
            tiedoista tai niiden virheistä. Sivustoa käytetään omalla
            vastuulla.
          </p>
        </section>

        <section>
          <h2>5. Linkit muille sivustoille</h2>
          <p>
            Sivusto voi sisältää linkkejä kolmansien osapuolten
            verkkosivustoille (esimerkiksi ajanvaraus- tai
            karttapalveluihin). Emme vastaa näiden ulkopuolisten
            sivustojen sisällöstä tai tietosuojakäytännöistä.
          </p>
        </section>

        <section>
          <h2>6. Käyttöehtojen muutokset</h2>
          <p>
            Pidätämme oikeuden muuttaa näitä käyttöehtoja. Muutokset tulevat
            voimaan, kun ne on julkaistu tällä sivulla.
          </p>
        </section>

        <section>
          <h2>7. Sovellettava laki</h2>
          <p>
            Näihin käyttöehtoihin sovelletaan Suomen lakia. Käyttöehtoja
            koskevat erimielisyydet pyritään ensisijaisesti ratkaisemaan
            osapuolten välisin neuvotteluin.
          </p>
        </section>

        <section>
          <h2>8. Yhteystiedot</h2>
          <p>
            {companyInfo.name}
            <br />
            {visitingAddress.street}, {visitingAddress.zip}{' '}
            {visitingAddress.city}
            <br />
            Puhelin: <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
            <br />
            Sähköposti:{' '}
            <a href={companyInfo.emailHref}>{companyInfo.email}</a>
          </p>
        </section>
      </div>
    </section>
  )
}

export default Kayttoehdot
