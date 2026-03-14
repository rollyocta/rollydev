import React, { useState } from 'react';
import { ExternalLink, Github, Construction, Layers, Code2, Share2 } from 'lucide-react';

const PortfolioGrid = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Parachute Consulting",
      subtitle: "Corporate Rebrand",
      category: "design",
      image: "/projects/pcs.png",
      description: "Designed a landing page for Parachute Consulting, an Australia-based consulting firm. The goal was to create a high-level and professional design that reflects the company’s expertise and appeals to larger businesses.",
      tags: ["Figma", "Strategy", "Web Design"],
      link: "https://www.figma.com/proto/Oq9szHBaRLSrALAV0jMYUD/Design?node-id=267-64&t=N06RLgAcQ38C7Cft-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      github: "",
      isProgress: false
    },
    {
      id: 2,
      title: "Smart Menu System",
      subtitle: "E-commerce Solution",
      category: "dev",
      image: "/projects/smartMenu.png",
      description: "Smart Menu is a digital menu solution for small businesses like restaurants, cafés, and food kiosks. It offers a clean, mobile-friendly way for customers to browse items, helping businesses showcase their products and streamline ordering.",
      tags: ["React"],
      link: "https://smartmenu-nu.vercel.app/",
      github: "https://github.com/rollyocta/smartmenu",
      isProgress: false
    },
    {
      id: 3,
      title: "Executive Brand Kit",
      subtitle: "Social Media Strategy",
      category: "content",
      image: "/projects/cpp.png", // Replace with your actual image path
      description: "Developed strategic LinkedIn content for Parachute Consulting, including company positioning, expertise, problem–solution, services overview, announcements, operational insights, and hero visuals. The posts were designed to strengthen the brand’s authority and engage a professional audience.",
      tags: ["Content Strategy", "Graphic Design", "Copywriting"],
      link: "https://drive.google.com/drive/folders/1pLDSX_SceFSr7wgnLW5O7wFEjNL5Jnnb?usp=sharing",
      github: "",
      isProgress: false
    },
    {
      id: 4,
      title: "MoniDash: Finance Tracker",
      subtitle: "Full-stack SaaS",
      category: "dev",
      image: "/projects/monidash.png",
      description: "MoniDash is a personal finance dashboard that helps users track income and expenses in one place. With an intuitive interface and clear visualizations, it enables users to monitor spending patterns, plan budgets, and make informed financial decisions.",
      tags: ["Laravel"],
      link: "#",
      github: "https://github.com/rollyocta/monidash",
      isProgress: true 
    },
    {
      id: 5,
      title: "Bright Smile Dental Clinic",
      subtitle: "UI/UX Case Study",
      category: "design",
      image: "/projects/dentalClinic.png",
      description: "A conversion-focused landing page designed to build brand trust and streamline appointment booking for a dental clinic. The layout emphasizes clarity, professional visuals, and easy navigation to enhance user experience and patient engagement",
      tags: ["Figma", "UI Design", "Branding"],
      link: "https://www.figma.com/proto/Oq9szHBaRLSrALAV0jMYUD/Design?node-id=4-8",
      github: "",
      isProgress: false
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  // Helper function for category icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'design': return <Layers size={12}/>;
      case 'dev': return <Code2 size={12}/>;
      case 'content': return <Share2 size={12}/>;
      default: return null;
    }
  };

  return (
    <section id="works" className="py-24 px-6 bg-[#020617] text-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium tracking-widest uppercase">
              Project Showcase
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Works</span>
            </h2>
            <p className="text-slate-400 max-w-md text-lg leading-relaxed">
              A curated collection of digital experiences, architectural designs, and strategic content solutions.
            </p>
          </div>

          {/* Premium Tab Switcher */}
          <div className="flex p-1.5 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 shadow-2xl">
            {[
              { id: 'all', label: 'All' },
              { id: 'design', label: 'Design' },
              { id: 'dev', label: 'Development' },
              { id: 'content', label: 'Content' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 rounded-xl transition-all duration-300 text-sm font-semibold tracking-wide ${
                  activeTab === tab.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20' 
                  : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* High Professional Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col bg-slate-900/40 border border-slate-800/50 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_20px_50px_rgba(8,112,184,0.1)]"
            >
              {/* Image Layer */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                />
                
                {/* Floating Badges */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                    {getCategoryIcon(project.category)}
                    {project.category === 'design' ? 'Design' : project.category === 'dev' ? 'Engineering' : 'Content'}
                  </span>
                  {project.isProgress && (
                    <span className="flex items-center gap-1.5 bg-amber-500/20 backdrop-blur-xl px-4 py-1.5 rounded-full border border-amber-500/30 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-500">
                      <Construction size={12} /> In Progress
                    </span>
                  )}
                </div>
              </div>

              {/* Content Layer */}
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex-grow space-y-4">
                  <div>
                    <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-1">{project.subtitle}</p>
                    <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p>Project Overview</p>
                  
                  <p className="text-slate-400 leading-relaxed font-medium text-justify">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-semibold px-3 py-1 rounded-md bg-slate-800/50 border border-slate-700/50 text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modern Footer Actions */}
                <div className="mt-10 pt-8 border-t border-slate-800/60 flex items-center justify-between">
                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/icon p-3 rounded-2xl bg-slate-800/50 text-slate-400 hover:bg-white hover:text-black transition-all duration-300"
                        title="Source Code"
                      >
                        <Github size={22} />
                      </a>
                    )}
                  </div>

                  {project.isProgress ? (
                    <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-800/30 text-slate-500 border border-slate-700/50 font-bold italic text-sm">
                      Under Construction
                    </div>
                  ) : (
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-3 px-8 py-3 rounded-2xl bg-white text-black font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-xl"
                    >
                      <span className="text-sm font-bold tracking-tight">Explore Project</span>
                      <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;