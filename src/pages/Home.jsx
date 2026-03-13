import React from "react";
import { ChevronDown, Github, Linkedin, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <>
      <section
        id="home"
        // Pinalitan ang h-screen ng min-h-screen at nilagyan ng padding-top para sa navbar
        className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#0F172A] pt-20 pb-10"
      >
        {/* Background Gradients */}
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[40%] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[40%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 w-full">
          
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs md:text-sm font-medium mx-auto md:mx-0">
              <Sparkles size={14} />
              <span>Available for Freelance Projects</span>
            </div>

            <div className="space-y-4">
              {/* FLUID TYPOGRAPHY: Ginamit ang clamp() para hindi sumabog ang laki */}
              <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-bold text-white leading-[1.1] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-500">
                  Elevating Brands Through Thoughtful Digital Solutions.
                </span>
              </h1>

              <p className="text-sm md:text-base lg:text-lg text-slate-400 max-w-lg leading-relaxed mx-auto md:mx-0">
                Crafting digital work that’s strategic, beautiful, and functional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
              <a href="#works" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-[#0F172A] font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-cyan-500/20">
                  <span>View My Work</span>
                  <ChevronDown size={18} />
                </button>
              </a>

              <div className="flex items-center space-x-6 text-slate-400">
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  <Github size={22} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Code Card */}
          <div className="order-1 md:order-2 w-full max-w-[480px] mx-auto md:max-w-none">
            <div className="bg-[#1E293B]/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 md:p-6 shadow-2xl relative overflow-hidden group">
              {/* Window Controls */}
              <div className="flex space-x-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
              </div>

              {/* Code Content - Fluid text size */}
              <div className="font-mono text-[10px] sm:text-xs lg:text-sm space-y-1.5 md:space-y-2 leading-relaxed">
                <div className="text-cyan-400">
                  <span className="text-blue-400">const</span> developer{" "}
                  <span className="text-slate-100">=</span>{" "}
                  <span className="text-slate-100">{`{`}</span>
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">name</span>:{" "}
                  <span className="text-emerald-400">"Rolly Octa"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">skills</span>: [
                </div>
                <div className="pl-8 text-emerald-400">
                  "React", "UI/UX", "Branding"
                </div>
                <div className="pl-4 text-slate-100">],</div>
                <div className="pl-4 text-purple-400">
                  passion: <span className="text-emerald-400">"User-focused innovation"</span>
                </div>
                <div className="text-slate-100">{`}`};</div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Home;