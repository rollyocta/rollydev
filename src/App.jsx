import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './pages/NavBar.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import PortfolioGrid from './pages/PortfolioGrid.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './pages/Footer.jsx'

import {   
  Layers, 
  Monitor, 
  Cpu, 
  Layout,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <NavBar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
      <Skills/>
      <PortfolioGrid />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
