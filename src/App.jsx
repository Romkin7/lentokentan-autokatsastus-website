import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Kayttoehdot from './pages/Kayttoehdot'
import Tietosuojaseloste from './pages/Tietosuojaseloste'
import Rekisteriseloste from './pages/Rekisteriseloste'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yhteystiedot" element={<Contact />} />
          <Route path="/kayttoehdot" element={<Kayttoehdot />} />
          <Route path="/tietosuojaseloste" element={<Tietosuojaseloste />} />
          <Route path="/rekisteriseloste" element={<Rekisteriseloste />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
