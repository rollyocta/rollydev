import React from 'react'

import { Menu, X } from "lucide-react"

const NavBar = ({ scrolled, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
    {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0F172A]/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-white group cursor-pointer">
            ROLLY<span className="text-cyan-400 group-hover:animate-pulse transition-all">DEV</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
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

          <button className="md:hidden text-white transition-transform active:scale-90" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      </>
  )
}

export default NavBar
