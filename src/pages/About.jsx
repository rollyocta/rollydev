import React from 'react'
import { Coffee, Award, Palette, Code2, GraduationCap } from 'lucide-react'; // Added GraduationCap

const About = () => {
  return (
    <>
      <section id="about" className="pt-32 pb-24 px-6 animate-in fade-in duration-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column: Image & Bio (No changes here) */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
                <img 
                  src="/rollyAbout.png" 
                  alt="Profile" 
                  className="relative rounded-2xl w-full aspect-square object-cover border border-slate-700"
                />
              </div>
              
              <div className="space-y-4 text-justify">
                <h2 className="text-3xl font-bold text-white">About Me</h2>
                <p className="text-slate-400 leading-relaxed">
                  I am a creative professional based in the Philippines with 2 years of experience in web development and visual design. I specialize in building clean, user-focused websites and systems that help businesses improve efficiency and grow online.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  My approach combines functional design with a focus on usability, ensuring that every system and website I build not only looks polished but also delivers tangible value.
                </p>
              </div>
            </div>

            {/* Right Column: Stats, Skills, Experience, and Education */}
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

              {/* Skills (Graphic & Web) */}
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

              {/* Work Experience & Education Grid */}
              <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-slate-800">
                
                {/* Work Experience Timeline */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    Work Experience
                  </h3>
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-slate-800">
                      <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[7px] top-1.5" />
                      <div className="text-xs text-cyan-400 font-bold">2025 - Present</div>
                      <div className="text-white font-bold text-sm">Web Developer</div>
                      <div className="text-slate-500 text-xs italic">Freelance</div>
                    </div>
                    <div className="relative pl-6 border-l-2 border-slate-800">
                      <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[7px] top-1.5" />
                      <div className="text-xs text-slate-500 font-bold">2024 - 2025</div>
                      <div className="text-white font-bold text-sm">Unit Planner</div>
                      <div className="text-slate-500 text-xs italic">SMIILS Inc.</div>
                    </div>
                  </div>
                </div>

                {/* Education Timeline */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="text-purple-400" size={20} /> Education
                  </h3>
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-slate-800">
                      <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-1.5" />
                      <div className="text-xs text-purple-400 font-bold">2020 - 2024</div>
                      <div className="text-white font-bold text-sm">BS in Information Technology</div>
                      <div className="text-slate-500 text-xs">University Name Here</div>
                    </div>
                    {/* Add more educational background if needed */}
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