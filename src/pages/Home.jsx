import React from 'react'

import { ChevronDown,  Github, Linkedin, Code2,  } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
              Graphic Artist & Web Developer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Binuo para sa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Imahinasyon.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg">
              Pinagsasama ang sining at lohika. Gumagawa ako ng mga visual na nakakaakit at mga website na talagang gumagana.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#works"><button className="flex items-center space-x-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#0F172A] font-bold rounded-xl transition-all">
                <span>Tignan ang Gawa</span>
                <ChevronDown size={20} />
              </button></a>
              <div className="flex items-center space-x-4 px-4 text-slate-400">
                <Github className="hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden md:flex justify-center relative">
            <div className="w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl relative">
              <div className="absolute -inset-4 border border-cyan-500/30 rounded-3xl -rotate-6 animate-pulse" />
              <div className="w-full h-full bg-[#1E293B] rounded-2xl flex flex-col items-center justify-center -rotate-12 border border-slate-700 p-8 text-center">
                <div className="bg-cyan-500/20 p-4 rounded-2xl mb-4">
                   <Code2 className="text-cyan-400 w-12 h-12" />
                </div>
                <h3 className="text-white font-bold text-xl uppercase tracking-widest mb-2">Build & Design</h3>
                <div className="flex space-x-2">
                   <div className="w-2 h-2 rounded-full bg-red-500" />
                   <div className="w-2 h-2 rounded-full bg-yellow-500" />
                   <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
