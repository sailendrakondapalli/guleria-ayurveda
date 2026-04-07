import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SplashScreen from './components/SplashScreen'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import ProgramStudents from './pages/programs/ProgramStudents'
import ProgramWomen from './pages/programs/ProgramWomen'
import ProgramCorporates from './pages/programs/ProgramCorporates'
import './index.css'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const handleDone = useCallback(() => setShowSplash(false), [])

  return (
    <>
      {showSplash && <SplashScreen onDone={handleDone} />}
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/students" element={<ProgramStudents />} />
          <Route path="/programs/women" element={<ProgramWomen />} />
          <Route path="/programs/corporates" element={<ProgramCorporates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
