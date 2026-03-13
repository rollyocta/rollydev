import React from 'react'
import { Menu, X } from "lucide-react"

const NavBar = ({ scrolled, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#0F172A]/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-white group cursor-pointer relative z-[110]">
            ROLLY<span className="text-cyan-400 group-hover:animate-pulse transition-all">DEV</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-slate-300 font-medium">
            {['Home', 'About', 'Works', 'Services'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative hover:text-cyan-400 transition-colors group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-[#0F172A] font-bold rounded-full transition-all transform hover:scale-110 active:scale-95 shadow-lg shadow-cyan-500/20">
              Hire Me
            </a>
          </div>

          {/* Hamburger Button - High Z-index para laging clickble */}
          <button 
            className="md:hidden text-white transition-transform active:scale-90 relative z-[110]" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay - Pinaka-fix sa position */}
        <div 
          className={`fixed inset-0 w-screen h-screen bg-[#0F172A] z-[105] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: 0, left: 0 }} // Hard reset for position
        >
          {/* Optional: Add a subtle background glow for the mobile menu */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[100px]" />
          
          {['Home', 'About', 'Works', 'Services'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
          
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-10 py-4 bg-cyan-500 text-[#0F172A] font-bold rounded-full text-xl shadow-xl shadow-cyan-500/20 active:scale-95 transition-transform"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </>
  )
}

export default NavBar