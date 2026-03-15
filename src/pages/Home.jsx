import React from "react";
import { ChevronRight, Github, Linkedin, Sparkles, Terminal, Facebook } from "lucide-react";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#020617] pt-20 pb-10"
      >
        {/* Advanced Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          {/* Left Content: 7-columns for prominence */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-cyan-400 text-xs md:text-sm font-semibold tracking-wide shadow-xl mx-auto lg:mx-0">
              <Sparkles size={14} className="animate-spin-slow" />
              <span className="uppercase tracking-[0.1em]">Available for Strategic Partnerships</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold text-white leading-[1.05] tracking-tight">
                Crafting the future of 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
                  Digital Excellence.
                </span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-medium text-justify">
                High-performance development meets strategic design. I build digital solutions that prioritize clarity, scalability, and impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <a href="#works" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-white hover:bg-cyan-500 text-black hover:text-white font-bold rounded-2xl transition-all duration-300 active:scale-95 shadow-2xl shadow-white/5">
                  <span>View Portfolio</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>

              <div className="flex items-center space-x-8 text-slate-500 border-l border-slate-800 pl-0 sm:pl-8">
                <a href="https://github.com/rollyocta" target="_blank" className="hover:text-white transition-colors p-2 hover:bg-slate-900 rounded-lg">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/rolly-octa/" target="_blank" className="hover:text-white transition-colors p-2 hover:bg-slate-900 rounded-lg">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.facebook.com/rolly.octa.98/" target="_blank" className="hover:text-white transition-colors p-2 hover:bg-slate-900 rounded-lg">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content: 5-columns for the Code Card */}
          <div className="lg:col-span-5 order-1 lg:order-2 w-full">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative bg-[#0F172A]/80 backdrop-blur-2xl border border-slate-800/50 rounded-[2rem] p-6 md:p-8 shadow-3xl overflow-hidden">
                {/* Header of Code Card */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-xs">
                    <Terminal size={14} />
                    <span>developer.ts</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="font-mono text-xs sm:text-sm lg:text-[15px] space-y-3 leading-relaxed">
                  <div>
                    <span className="text-pink-500 italic">interface</span>{" "}
                    <span className="text-cyan-400">Developer</span>{" "}
                    <span className="text-slate-300">{`{`}</span>
                  </div>
                  <div className="pl-6">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-400">'Rolly Octa'</span>;
                  </div>
                  <div className="pl-6">
                    <span className="text-slate-400">focus:</span>{" "}
                    <span className="text-emerald-400">'Modern UX/UI'</span>;
                  </div>
                  <div className="pl-6">
                    <span className="text-slate-400">stack:</span>{" "}
                    <span className="text-blue-400">[</span>
                    <span className="text-emerald-400">'Next.js'</span>,{" "}
                    <span className="text-emerald-400">'Laravel'</span>
                    <span className="text-blue-400">]</span>;
                  </div>
                  <div className="pl-6">
                    <span className="text-slate-400">vision:</span>{" "}
                    <span className="text-emerald-400">'Impactful Tech'</span>;
                  </div>
                  <div className="text-slate-300">{`}`}</div>
                  
                  <div className="pt-4 flex items-center gap-2">
                    <span className="text-blue-400">export default</span>{" "}
                    <span className="text-cyan-400">RollyDev</span>;
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
        </div>
      </section>
    </>
  );
};

export default Home;