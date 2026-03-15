import React from 'react';
import { Layers, Palette, Code2, Smartphone, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="text-cyan-400" size={28} />,
      title: "Brand Strategy & Identity",
      description: "Defining unique visual languages that resonate with target audiences and build long-term brand equity.",
      tag: "Branding"
    },
    {
      icon: <Code2 className="text-blue-500" size={28} />,
      title: "Technical Engineering",
      description: "Specializing in high-performance Next.js architectures, optimized for speed, SEO, and scalability.",
      tag: "Development"
    },
    {
      icon: <Smartphone className="text-purple-500" size={28} />,
      title: "Product UI/UX Design",
      description: "Creating conversion-led digital interfaces with a focus on intuitive user flows and kinetic minimalism.",
      tag: "UI/UX"
    },
    {
      icon: <Layers className="text-emerald-400" size={28} />,
      title: "Strategic Graphic Art",
      description: "Visual storytelling through high-end assets, from executive presentations to social media systems.",
      tag: "Visuals"
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-widest">
              Specializations
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Strategic Solutions for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Modern Digital Landscape
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-xs leading-relaxed font-medium">
            Bridging the gap between creative vision and technical execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-slate-900/40 border border-slate-800/50 rounded-[2rem] hover:bg-slate-900/60 transition-all duration-500 hover:border-cyan-500/30 flex flex-col h-full"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-slate-800/50 rounded-2xl group-hover:scale-110 group-hover:bg-slate-800 transition-all duration-500">
                  {service.icon}
                </div>
                <ArrowUpRight className="text-slate-700 group-hover:text-cyan-400 transition-colors" size={20} />
              </div>

              {/* Card Content */}
              <div className="space-y-4 flex-grow">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-cyan-500/80 uppercase tracking-widest">
                    {service.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-medium text-justify">
                  {service.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;