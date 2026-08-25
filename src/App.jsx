import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Booking from './pages/Booking'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yhteystiedot" element={<Contact />} />
          <Route path="/varaa-aika" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
