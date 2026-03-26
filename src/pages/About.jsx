import React from 'react';
import { Coffee, Award, Palette, Code2, GraduationCap, Briefcase, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#020617] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Visual Bio (4-cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800">
                <img 
                  src="/rollyAbout.png" 
                  alt="Rolly Octa" 
                  className="w-full aspect-[4/5] object-cover hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105" 
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                <Sparkles size={14} /> The Creative Mind
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tight">Professional Bio</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-lg text-justify">
                <p>
                  I am a creative professional based in the Philippines with 2 years of experience in web development and visual design. I specialize in building clean, user-focused websites and systems that help businesses improve efficiency.
                </p>
                <p>
                  My approach combines functional design with a focus on usability, ensuring that every system and website I build not only looks polished but also delivers tangible value.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Stats & Timeline (7-cols) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Cups of Coffee', val: '500+', icon: <Coffee size={24} />, color: 'text-cyan-400' },
                { label: 'Projects Completed', val: '20+', icon: <Award size={24} />, color: 'text-blue-500' }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-colors group">
                  <div className={`${stat.color} mb-4 transform group-hover:scale-110 transition-transform`}>{stat.icon}</div>
                  <div className="text-4xl font-bold text-white mb-1">{stat.val}</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Professional Skills */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-10 space-y-8">
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] flex items-center gap-3">
                  <Palette size={18} className="text-cyan-500" /> Core Design Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Photoshop', 'Adobe', 'Figma', 'Indesign', 'Branding', 'UI/UX'].map(skill => (
                    <span key={skill} className="px-5 py-2 bg-slate-800/50 hover:bg-cyan-500 hover:text-[#0F172A] border border-slate-700 text-slate-300 rounded-xl text-sm font-semibold transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] flex items-center gap-3">
                  <Code2 size={18} className="text-blue-500" /> Technical Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['MongoDB', 'Express.js', 'React / Next.js', 'Node.js', 'JavaScript (ES6+)', 'TypeScript', 'Git / GitHub', 'Sanity'].map(skill => (
                    <span key={skill} className="px-5 py-2 bg-slate-800/50 hover:bg-blue-500 hover:text-white border border-slate-700 text-slate-300 rounded-xl text-sm font-semibold transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience & Education - Professional Timeline Style */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* Experience */}
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Briefcase size={20} className="text-cyan-500" /> Experience
                </h3>
                <div className="space-y-8">
                  {[
                    { date: 'Feb 2026 - Mar 2026', role: 'Freelance Web & Brand Designer ', co: 'Parachute Consulting Services', active: true },
                    { date: 'Apr 2024 - Dec 2025', role: 'Professional Development & Freelance Experience', active: false },
                    { date: 'Oct 2023 - Feb 2024', role: 'IT Staff', co: 'Macro Wiring Technologies Co. Inc.', active: false }
                  ].map((job, i) => (
                    <div key={i} className="relative pl-8 group">
                      <div className={`absolute left-0 top-1 w-[2px] h-full ${job.active ? 'bg-cyan-500' : 'bg-slate-800'}`} />
                      <div className={`absolute left-[-4px] top-1.5 w-2 h-2 rounded-full ${job.active ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'bg-slate-700'}`} />
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{job.date}</div>
                      <div className="text-white font-bold group-hover:text-cyan-400 transition-colors">{job.role}</div>
                      <div className="text-slate-500 text-xs font-medium">{job.co}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <GraduationCap size={22} className="text-blue-500" /> Education
                </h3>
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-1 w-[2px] h-full bg-blue-500" />
                  <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">2020 - 2024</div>
                  <div className="text-white font-bold group-hover:text-blue-400 transition-colors">BS in Information Technology</div>
                  <div className="text-slate-500 text-xs font-medium">Cavite State University CCAT-Campus</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;