import React from 'react'

import { Coffee, 
  Award, 
  Palette, 
  Code2,
} from 'lucide-react';

const About = () => {
  return (
    <>
      <section id="about" className="pt-32 pb-24 px-6 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Image & Bio */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
              <img 
                src="/rollyAbout.png" 
                alt="Profile" 
                className="relative rounded-2xl w-full aspect-square object-cover border border-slate-700"
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Kilalanin Ako</h2>
              <p className="text-slate-400 leading-relaxed">
                Ako ay isang creative professional na nakabase sa Pilipinas. Sa loob ng mahigit 5 taon, pinagsasama ko ang sining ng visual design at ang lohika ng modernong web technologies.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Naniniwala ako na ang bawat pixel ay may kwento, at ang bawat line of code ay dapat magsilbi sa user experience. Mahilig ako sa kape, minimalist na disenyo, at pag-aaral ng mga bagong frameworks.
              </p>
            </div>
          </div>

          {/* Right Column: Experience & Skills */}
          <div className="space-y-12">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1E293B] p-6 rounded-2xl border border-slate-700/50">
                <Coffee className="text-cyan-400 mb-3" size={24} />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">Cups of Coffee</div>
              </div>
              <div className="bg-[#1E293B] p-6 rounded-2xl border border-slate-700/50">
                <Award className="text-purple-400 mb-3" size={24} />
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">Projects Completed</div>
              </div>
            </div>

            {/* Skills Accordion Style */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Palette className="text-cyan-400" size={20} /> Graphic Design
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Photoshop', 'Illustrator', 'Figma', 'Indesign', 'Branding', 'UI/UX'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white flex items-center gap-2 pt-4">
                <Code2 className="text-blue-500" size={20} /> Web Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Tailwind', 'MongoDB', 'PostgreSQL', 'TypeScript'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6 pt-6 border-t border-slate-800">
              <h3 className="text-xl font-bold text-white">Karanasan</h3>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-slate-800">
                  <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[7px] top-1.5" />
                  <div className="text-sm text-cyan-400 font-bold mb-1">2021 - Kasalukuyan</div>
                  <div className="text-white font-bold">Senior Creative Dev</div>
                  <div className="text-slate-500 text-sm">Digital Horizons Agency</div>
                </div>
                <div className="relative pl-6 border-l-2 border-slate-800">
                  <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[7px] top-1.5" />
                  <div className="text-sm text-slate-500 font-bold mb-1">2018 - 2021</div>
                  <div className="text-white font-bold">Graphic Artist & Web Admin</div>
                  <div className="text-slate-500 text-sm">TechNova Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
