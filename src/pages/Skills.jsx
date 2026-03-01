import React from 'react'

import {Palette, Code2} from 'lucide-react';

const Skills = () => {
  return (
    <>
      {/* Skills / Tools Section */}
      <section id="about" className="py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Palette className="text-cyan-400" /> Graphic Art Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {['Brand Identity', 'UI/UX Design', 'Illustration', 'Vector Art', 'Typography', 'Photo Editing'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-3 bg-[#1E293B] p-4 rounded-xl border border-slate-700/50">
                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Code2 className="text-blue-500" /> Web Dev Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {['React / Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Node.js', 'Git / GitHub', 'Firebase'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-3 bg-[#1E293B] p-4 rounded-xl border border-slate-700/50">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
