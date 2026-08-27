import { companyInfo } from '../companyInfo'
import './Contact.css'
import './LegalPage.css'

function Tietosuojaseloste() {
  const { visitingAddress } = companyInfo

  return (
    <section className="page legal-page">
      <div className="page-inner">
        <p className="page-eyebrow">Tietosuoja</p>
        <h1>Tietosuojaseloste</h1>
        <p className="legal-updated">
          Laadittu EU:n yleisen tietosuoja-asetuksen (GDPR) mukaisesti.
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
          <h2>3. Käsiteltävät henkilötiedot</h2>
          <p>Käsittelemme asiakkaistamme ja verkkosivuston käyttäjistä muun muassa seuraavia tietoja:</p>
          <ul>
            <li>Nimi ja yhteystiedot (puhelinnumero, sähköpostiosoite, osoite)</li>
            <li>Ajoneuvon tiedot (esim. rekisterinumero) katsastus- ja ajanvarauspalveluiden toteuttamiseksi</li>
            <li>Yhteydenotto- ja ajanvaraustietojen sisältö</li>
            <li>Laskutus- ja maksutiedot</li>
            <li>Verkkosivuston käyttöä koskevat tekniset tiedot (esim. evästeiden kautta kerättävät tiedot)</li>
          </ul>
        </section>

        <section>
          <h2>4. Henkilötietojen käsittelyn tarkoitus ja peruste</h2>
          <p>Henkilötietoja käsitellään seuraavia tarkoituksia varten:</p>
          <ul>
            <li>Katsastus- ja muiden tilattujen palveluiden toteuttaminen (sopimuksen täytäntöönpano)</li>
            <li>Ajanvarausten hallinnointi ja asiakaspalvelu</li>
            <li>Laskutus ja kirjanpitovelvoitteiden hoitaminen (lakisääteinen velvoite)</li>
            <li>Asiakassuhteen hoitaminen ja viestintä (oikeutettu etu)</li>
            <li>Verkkosivuston toiminnan ja käyttökokemuksen kehittäminen</li>
          </ul>
        </section>

        <section>
          <h2>5. Säännönmukaiset tietolähteet</h2>
          <p>
            Tiedot saadaan pääsääntöisesti asiakkaalta itseltään yhteydenoton,
            ajanvarauksen tai katsastustapahtuman yhteydessä. Tietoja voidaan
            saada myös liikenne- ja viestintävirasto Traficomin rekistereistä
            katsastustoimintaan liittyvien lakisääteisten velvoitteiden
            täyttämiseksi.
          </p>
        </section>

        <section>
          <h2>6. Tietojen säilytysaika</h2>
          <p>
            Henkilötietoja säilytetään vain niin kauan kuin on tarpeen
            käsittelyn tarkoitusten toteuttamiseksi tai lakisääteisten
            velvoitteiden (esim. kirjanpitolaki) täyttämiseksi, minkä jälkeen
            tiedot poistetaan tai anonymisoidaan.
          </p>
        </section>

        <section>
          <h2>7. Tietojen luovutukset ja siirrot</h2>
          <p>
            Tietoja ei luovuteta ulkopuolisille muutoin kuin lakisääteisten
            velvoitteiden täyttämiseksi (esim. Traficom) tai käytettäessä
            luotettuja palveluntarjoajia (esim. ajanvaraus-, laskutus- tai
            verkkolaskuoperaattorit), jotka käsittelevät tietoja
            toimeksiannostamme. Tietoja ei pääsääntöisesti siirretä EU:n tai
            ETA:n ulkopuolelle.
          </p>
        </section>

        <section>
          <h2>8. Rekisterin suojaus</h2>
          <p>
            Henkilötietoja käsitellään huolellisesti ja asianmukaisin
            teknisin ja organisatorisin toimenpitein suojattuna. Sähköisesti
            käsiteltävät tiedot on suojattu käyttöoikeuksin ja muin
            tietoturvakeinoin, ja paperiset asiakirjat säilytetään lukituissa
            tiloissa.
          </p>
        </section>

        <section>
          <h2>9. Rekisteröidyn oikeudet</h2>
          <p>Sinulla on oikeus muun muassa:</p>
          <ul>
            <li>tarkastaa sinusta tallennetut henkilötiedot</li>
            <li>vaatia virheellisen tiedon korjaamista</li>
            <li>vaatia tietojesi poistamista laissa säädetyin edellytyksin</li>
            <li>rajoittaa tai vastustaa tietojesi käsittelyä</li>
            <li>saada tietosi koneluettavassa muodossa (tietojen siirrettävyys)</li>
            <li>
              tehdä valitus tietosuojavaltuutetun toimistolle, mikäli koet
              tietojesi käsittelyn olevan lainvastaista
            </li>
          </ul>
          <p>
            Pyynnöt osoitetaan kohdassa 2 mainitulle yhteyshenkilölle.
          </p>
        </section>

        <section>
          <h2>10. Evästeet</h2>
          <p>
            Verkkosivustolla voidaan käyttää evästeitä sivuston toiminnan
            varmistamiseksi ja käytön analysoimiseksi. Voit hallita
            evästeiden käyttöä selaimesi asetuksista.
          </p>
        </section>
      </div>
    </section>
  )
}

export default Tietosuojaseloste
