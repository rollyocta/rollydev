import React from 'react';
import { ExternalLink, Cloud, Braces, Code,  Award, Calendar, Verified } from 'lucide-react';

const Certificates = () => {
  const certs = [
    {
      title: "Cloud & DevOps Engineering",
      issuer: "DICT",
      date: "2025",
      link: "https://drive.google.com/drive/folders/1UgReQZSG5xG3OeKJcMe3wwY91PZWHCOh",
      image: "/certificates/cloud.png", 
      accent: "from-cyan-500/20 to-blue-500/20",
      icon: <Cloud className="text-cyan-400" size={24} />
    },
    {
      title: "Laravel Advanced Topics",
      issuer: "Alison",
      date: "2025",
      link: "https://alison.com/verify/e1302d08c5",
      image: "/certificates/laravel.png", 
      accent: "from-purple-500/20 to-indigo-500/20",
      icon: <Code className="text-purple-400" size={24} />
    },
    {
      title: "React JavaScript - Fundamentals to Coding ",
      issuer: "Alison",
      date: "2025",
      link: "https://alison.com/certification/check/b42e1f4bb8",
      image: "/certificates/react.png", 
      accent: "from-emerald-500/20 to-teal-500/20",
      icon: <Braces className="text-emerald-400" size={24} />
    }
  ];

  return (
    <section id="certificates" className="relative py-32 px-6 bg-[#020617] overflow-hidden">
      {/* Background Architectural Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-slate-800/50 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs tracking-[0.2em] uppercase">
              <Award size={16} className="text-cyan-500" />
              <span>Professional Credentials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none">
              Academic & Tech <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Endorsements</span>
            </h2>
          </div>
          <p className="text-slate-400 font-medium md:text-right max-w-xs leading-relaxed">
            Validation of specialized technical expertise and creative proficiency from industry leaders.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certs.map((cert, index) => (
            <div 
              key={index}
              className="group relative h-[420px] rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-3 bg-slate-900/40 border border-slate-800/50 hover:border-cyan-500/30"
            >
              {/* Background Image Layer */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-40 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${cert.image})` }} 
              />
              
              {/* Refined Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-[#020617]/20 transition-all duration-500" />
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Main Content */}
              <div className="relative z-30 flex flex-col h-full p-10">
                <div className="flex justify-between items-start">
                  <div className="p-4 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 group-hover:border-white/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                    {cert.icon}
                  </div>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black rounded-full transition-all border border-white/10 shadow-xl"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-cyan-400 uppercase">
                    <Verified size={14} />
                    <span>Industry Verified</span>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 font-semibold">{cert.issuer}</p>
                  </div>
                  
                  {/* Footer Action Area */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Conferred</span>
                      <div className="flex items-center gap-2 text-slate-200 font-mono text-sm">
                        <Calendar size={12} className="text-slate-500" />
                        {cert.date}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-300 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/50">
                      ID: LIC-REDEV
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;