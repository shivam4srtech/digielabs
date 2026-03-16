import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: "Frontend Development",
    description: "Crafting pixel-perfect, highly interactive user interfaces using Next.js and Tailwind CSS.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Backend Engineering",
    description: "Architecting scalable, secure server-side logic and robust API integrations.",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2m-14 0a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-14 0h14" />
      </svg>
    ),
  },
  {
    title: "Mobile Apps",
    description: "Building native-feel iOS and Android applications with cross-platform efficiency.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO strategies designed to dominate search rankings and drive organic growth.",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Google Ads",
    description: "Data-driven PPC campaigns that maximize ROI and lower customer acquisition cost.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
      </svg>
    ),
  },
  {
    title: "Web Applications",
    description: "Developing complex SaaS platforms and enterprise-grade web tools from scratch.",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#020617] py-12 px-6 relative overflow-hidden">
      {/* Background Glows to match your Screenshot */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 mb-6">
        <div className="text-center mb-20">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We combine technical excellence with strategic thinking to deliver high-impact digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="mb-6 p-3 inline-block rounded-xl bg-slate-950 border border-slate-800 group-hover:border-blue-500/50 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
        >
            Start Your Project
        </Link>
        <Link 
            href="/services" 
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-transparent border border-slate-700 text-white font-semibold hover:bg-slate-800 transition-all"
        >
            Explore Our Services
        </Link>
        </div>
    </section>
  );
}