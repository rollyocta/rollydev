import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowRight, Copy, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "rollyocta05@gmail.com"; // Replace with your actual email

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-slate-900/40 border border-slate-800/50 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl shadow-3xl text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Direct Collaboration
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight">
            Ready to build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
              extraordinary?
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Whether you need a technical partner or a creative lead, I’m available for high-impact projects and strategic partnerships.
          </p>

          <div className="flex flex-col items-center justify-center gap-8">
            {/* Primary Email CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <a 
                href={`mailto:${email}`} 
                className="group w-full sm:w-auto flex items-center justify-center space-x-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-2xl shadow-white/5"
              >
                <span>Start a Conversation</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Copy Email Tool */}
              <button 
                onClick={copyToClipboard}
                className="w-full sm:w-auto flex items-center justify-center space-x-3 px-10 py-5 bg-slate-800/50 text-slate-300 font-bold rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-all"
              >
                {copied ? <CheckCircle2 size={20} className="text-emerald-400" /> : <Copy size={20} />}
                <span>{copied ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-8 flex items-center gap-10 border-t border-slate-800/60 w-full max-w-md justify-center">
              <a href="https://github.com/rollyocta" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
                <Github size={24} />
                <span className="text-sm font-bold">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/rolly-octa/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
                <Linkedin size={24} />
                <span className="text-sm font-bold">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;