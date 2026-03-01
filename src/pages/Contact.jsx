import React from 'react'

import {Mail, Github, Linkedin} from 'lucide-react';

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0B1120] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Tara, gawa tayo ng kakaiba?</h2>
          <p className="text-slate-400 text-lg mb-12">
            Naghahanap ka ba ng designer na marunong mag-code, o developer na may mata para sa sining? Padalhan ako ng mensahe!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:hello@example.com" className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-white text-[#0F172A] font-bold rounded-2xl hover:bg-cyan-400 transition-all">
              <Mail size={20} />
              <span>Mag-email sa akin</span>
            </a>
            <div className="flex items-center space-x-6">
              <Github className="text-slate-400 hover:text-white cursor-pointer" size={28} />
              <Linkedin className="text-slate-400 hover:text-white cursor-pointer" size={28} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
