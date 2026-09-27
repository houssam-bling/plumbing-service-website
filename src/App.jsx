import { Routes, Route } from 'react-router'
import NavBar from "./NavBar"
import Footer from './Footer'
import HomePage from './HomePage'
import Services from './ServicesPage'
import ContactUsPage from './ContactUsPage'
import NotFound from './NotFound'
import WhatsAppButton from './WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App