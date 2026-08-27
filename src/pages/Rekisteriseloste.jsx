import { companyInfo } from '../companyInfo'
import './Contact.css'
import './LegalPage.css'

function Rekisteriseloste() {
  const { visitingAddress } = companyInfo

  return (
    <section className="page legal-page">
      <div className="page-inner">
        <p className="page-eyebrow">Tietosuoja</p>
        <h1>Rekisteriseloste</h1>
        <p className="legal-updated">
          Henkilötietolain (523/1999) 10 §:n mukainen rekisteriseloste.
          Päivitetty 27.8.2026
        </p>

        <section>
          <h2>1. Rekisterinpitäjä</h2>
          <p>
            {companyInfo.name}
            <br />
            Y-tunnus: {companyInfo.businessId}
            <br />
            {visitingAddress.street}, {visitingAddress.zip}{' '}
            {visitingAddress.city}
          </p>
        </section>

        <section>
          <h2>2. Yhteyshenkilö rekisteriä koskevissa asioissa</h2>
          <p>
            Puhelin: <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
            <br />
            Sähköposti:{' '}
            <a href={companyInfo.emailHref}>{companyInfo.email}</a>
          </p>
        </section>

        <section>
          <h2>3. Rekisterin nimi</h2>
          <p>{companyInfo.name}n asiakas- ja ajanvarausrekisteri</p>
        </section>

        <section>
          <h2>4. Henkilötietojen käsittelyn tarkoitus</h2>
          <p>
            Henkilötietoja käsitellään asiakassuhteen hoitamiseksi,
            katsastus- ja muiden tilattujen palveluiden toteuttamiseksi,
            ajanvarausten hallinnoimiseksi, laskutusta varten sekä
            lakisääteisten velvoitteiden täyttämiseksi.
          </p>
        </section>

        <section>
          <h2>5. Rekisterin tietosisältö</h2>
          <p>Rekisteri voi sisältää seuraavia tietoja:</p>
          <ul>
            <li>Asiakkaan nimi ja yhteystiedot</li>
            <li>Ajoneuvon tiedot (esim. rekisterinumero)</li>
            <li>Ajanvaraus- ja asiointihistoria</li>
            <li>Laskutustiedot</li>
          </ul>
        </section>

        <section>
          <h2>6. Säännönmukaiset tietolähteet</h2>
          <p>
            Tiedot saadaan asiakkaalta itseltään yhteydenoton tai
            ajanvarauksen yhteydessä sekä tarvittaessa Traficomin
            ajoneuvorekisteristä katsastustoimintaan liittyvien lakisääteisten
            velvoitteiden hoitamiseksi.
          </p>
        </section>

        <section>
          <h2>7. Tietojen säännönmukaiset luovutukset</h2>
          <p>
            Tietoja luovutetaan viranomaisille lakiin perustuvien
            velvoitteiden täyttämiseksi (esim. Traficom) sekä toimeksiannon
            perusteella palveluntarjoajille, jotka käsittelevät tietoja
            rekisterinpitäjän lukuun (esim. laskutus- ja
            verkkolaskuoperaattorit).
          </p>
        </section>

        <section>
          <h2>8. Tietojen siirto EU:n tai ETA:n ulkopuolelle</h2>
          <p>
            Tietoja ei pääsääntöisesti siirretä Euroopan unionin tai
            Euroopan talousalueen ulkopuolelle.
          </p>
        </section>

        <section>
          <h2>9. Rekisterin suojauksen periaatteet</h2>
          <p>
            Sähköisesti käsiteltävät tiedot on suojattu käyttöoikeuksin ja
            muin tarkoituksenmukaisin tietoturvakeinoin. Manuaalinen
            aineisto säilytetään lukituissa tiloissa, joihin on pääsy vain
            asiaankuuluvilla henkilöillä.
          </p>
        </section>

        <section>
          <h2>10. Tarkastusoikeus ja oikeus vaatia tiedon korjaamista</h2>
          <p>
            Rekisteröidyllä on oikeus tarkastaa itseään koskevat rekisteriin
            tallennetut tiedot sekä vaatia virheellisen tiedon korjaamista.
            Pyynnöt osoitetaan kohdassa 2 mainitulle yhteyshenkilölle.
          </p>
        </section>
      </div>
    </section>
  )
}

export default Rekisteriseloste
