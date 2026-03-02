import React from 'react'

import { Layers, Palette, Code2, Smartphone } from 'lucide-react';

const Services = () => {

  const services = [
    {
      icon: <Palette className="text-cyan-400" size={32} />,
      title: "Brand Identity",
      description: "Paglikha ng mga logo at visual style na nagbibigay ng kakaibang pagkakakilanlan sa iyong negosyo."
    },
    {
      icon: <Code2 className="text-blue-500" size={32} />,
      title: "Web Development",
      description: "Mabilis, responsive, at modernong mga website na binuo gamit ang pinakabagong teknolohiya."
    },
    {
      icon: <Smartphone className="text-purple-500" size={32} />,
      title: "Website UI Design",
      description: "Disenyong nakatuon sa gumagamit para sa mas madali at magandang karanasan sa mobile at web."
    },
    {
      icon: <Layers className="text-green-400" size={32} />,
      title: "Graphic Art",
      description: "Mula sa illustrations hanggang sa marketing materials, nagbibigay buhay sa iyong mga ideya."
    }
  ];

  return (
    <>
      <section id="services" className="py-24 bg-[#0B1120]/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Serbisyong Maiaalay</h2>
            <p className="text-slate-400 max-w-2xl mx-auto italic">"Mula konsepto hanggang sa paglulunsad, narito ako para tulungan kang magtagumpay sa digital na mundo."</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-8 bg-[#1E293B] border border-slate-700 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/5"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
