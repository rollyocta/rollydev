import React from 'react';
import { ExternalLink, Cloud, Palette, ShieldCheck, Award, Eye } from 'lucide-react';

const Certificates = () => {
  const certs = [
    {
      title: "Cloud and Dev Ops Certification",
      issuer: "DICT",
      date: "2025",
      link: "https://drive.google.com/drive/folders/1UgReQZSG5xG3OeKJcMe3wwY91PZWHCOh",
      // Siguraduhing tama ang path ng image preview mo
      image: "/certificates/cloud.png", 
      color: "from-cyan-950/40 via-cyan-900/60 to-cyan-950/80", // Darker colored gradient
      icon: <Cloud className="text-cyan-400" size={24} />
    },
    {
      title: "Advanced Graphic Design Specialization",
      issuer: "Udemy",
      date: "2023",
      link: "#",
      image: "/certs/udemy_design.jpg", 
      color: "from-purple-950/40 via-purple-900/60 to-purple-950/80", // Darker colored gradient
      icon: <Palette className="text-purple-400" size={24} />
    },
    {
      title: "UI/UX Design Mastery",
      issuer: "Google",
      date: "2023",
      link: "#",
      image: "/certs/google_ux.jpg", 
      color: "from-emerald-950/40 via-emerald-900/60 to-emerald-950/80", // Darker colored gradient
      icon: <ShieldCheck className="text-emerald-400" size={24} />
    }
  ];

  return (
    <section id="certificates" className="relative py-24 px-6 bg-[#0F172A] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 border-b border-slate-800 pb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-widest uppercase">
              <Award size={16} />
              <span>Achievements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Certifications
            </h2>
          </div>
          <div className="text-slate-500 font-medium md:text-right max-w-sm">
            A glimpse into my professional certifications and continuous learning journey.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <div 
              key={index}
              className="group relative h-[380px] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 border border-slate-800/50 hover:border-cyan-500/30"
            >
              {/* Certificate Image - "Silip" Background - ADDED OPACITY FILTER */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 brightness-[0.4] group-hover:brightness-[0.6]"
                style={{ backgroundImage: `url(${cert.image})` }} // Dynamic background image
              />
              
              {/* FIXED: Darker & More Precise Gradient Overlays for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent group-hover:via-[#0F172A]/80 transition-colors" />

              {/* Glassmorphism/Color Glow Layer - ADDED BACKDROP-BLUR FOR DEPTH */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} backdrop-blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content Container - FIXED Z-INDEX & PADDING */}
              <div className="relative z-30 flex flex-col h-full p-8">
                <div className="flex justify-between items-start mb-auto">
                  <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-700/50 shadow-xl group-hover:scale-110 group-hover:bg-slate-800 transition-transform duration-500">
                    {cert.icon}
                  </div>
                  <div className="flex items-center gap-2">
                     <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2.5 bg-slate-900/80 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all border border-slate-700/50 shadow-xl"
                      aria-label="View verified certificate"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                {/* Text Content - FIXED CONTRAST & TYPOGRAPHY */}
                <div className="space-y-3 mt-10">
                   <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest text-cyan-300 uppercase">
                      <Eye size={16} />
                      <span>Certificate Preview</span>
                   </div>
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight group-hover:text-cyan-200 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-100 font-semibold md:text-lg">{cert.issuer}</p>
                </div>
                
                {/* Verified Badge & Date - FIXED Z-INDEX */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-tighter text-slate-400">Issued Date</span>
                    <span className="text-sm font-mono text-slate-100">{cert.date}</span>
                  </div>
                   <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                    <span className="text-[10px] uppercase tracking-widest text-cyan-300 font-black">
                      Verified
                    </span>
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