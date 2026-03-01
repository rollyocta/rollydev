import React from 'react'
import { useState } from 'react';
import { ExternalLink } from 'lucide-react'


const PortfolioGrid = () => {

    const [activeTab, setActiveTab] = useState('all');

    const projects = [
    {
      id: 1,
      title: "Brand Identity: Nova",
      category: "design",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
      description: "Logo at brand guidelines para sa isang tech startup."
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "dev",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      description: "Full-stack web app gamit ang React at Node.js."
    },
    {
      id: 3,
      title: "UI/UX: Travel App",
      category: "design",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
      description: "Mobile application interface design para sa mga biyahero."
    },
    {
      id: 4,
      title: "Dashboard System",
      category: "dev",
      image: "https://images.unsplash.com/photo-1551288049-bbbda546697c?auto=format&fit=crop&q=80&w=800",
      description: "Interactive data visualization dashboard."
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <>
      {/* Portfolio Grid */}
      <section id="works" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Mga Obra</h2>
              <p className="text-slate-400">Piliin ang kategorya para makita ang aking trabaho.</p>
            </div>
            <div className="flex p-1 bg-[#1E293B] rounded-lg border border-slate-700">
              {['all', 'design', 'dev'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md capitalize transition-all ${activeTab === tab ? 'bg-cyan-500 text-[#0F172A] font-bold shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  {tab === 'all' ? 'Lahat' : tab === 'design' ? 'Disenyo' : 'Development'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-3xl bg-[#1E293B] border border-slate-700 transition-all hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
                      {project.category === 'design' ? 'Graphic Art' : 'Web Dev'}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-slate-400 text-sm mt-2">{project.description}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-[#0F172A] transition-colors">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioGrid
