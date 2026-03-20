'use client'
import dynamic from 'next/dynamic';
import ModalTrigger from '../../components/ModalTrigger';
import CompleteService from '../../components/CompleteService';
import EnquiryModal from '../../components/EnquiryModal';
import { useState } from 'react';
import Pricing from '../../components/Pricing';
const ScheduleModal = dynamic(() => import('../../components/ScheduleModal'), { ssr: false });

const serviceDetails = [
  {
    category: "Development",
    title: "Full-Stack Engineering",
    description: "We build scalable architectures using Next.js, Node.js, and Cloud-native solutions. From Frontend polish to Backend stability.",
    features: ["Custom Web Apps", "API Development", "SaaS Infrastructure"],
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    category: "Mobile",
    title: "Cross-Platform Apps",
    description: "Native-performance applications for iOS and Android built with React Native and Flutter for maximum velocity.",
    features: ["Real-time Sync", "Offline Functionality", "App Store Optimization"],
    gradient: "from-purple-500 to-blue-500"
  },
  {
    category: "Marketing",
    title: "Growth & Performance",
    description: "Data-driven SEO and Google Ads campaigns designed to lower your CAC and dominate your market niche.",
    features: ["Technical SEO", "High-ROAS Ads", "Conversion Rate Optimization"],
    gradient: "from-fuchsia-500 to-purple-600"
  }
];

export default function ServicesPage() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="bg-[#020617] text-white min-h-screen">
      
      {/* 1. SERVICE HERO */}
      <section className="relative pt-10 md:pt-16 md:pb-20 pb-5 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-blue-400 font-mono text-sm tracking-[0.4em] uppercase mb-4">Our Expertise</h2>
          <h1 className="text-4xl md:text-[5rem] md:font-black font-semibold tracking-tight leading-[1.4] md:mb-8 mb-4">
            Digital Solutions <br /> 
            Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">Compromise.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            We don't just ship code. We ship competitive advantages. Explore our specialized services designed for modern scale.
          </p>
        </div>
      </section>
       <div className='p-3'>
          <ScheduleModal/>
       </div>
      {/* 2. THE DEEP DIVE SECTION (Bento Style) */}
      <section className="md:py-20 py-5 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
          {serviceDetails.map((item, idx) => (
            <div key={idx} className="group relative md:p-10 p-5 rounded-[2.5rem] bg-slate-900/20 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${item.gradient} opacity-5 blur-[60px] group-hover:opacity-20 transition-opacity`} />
              
              <p className="text-xs md:font-bold font-semibold tracking-widest text-slate-500 uppercase mb-4">{item.category}</p>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {item.description}
              </p>
              
              <ul className="space-y-3">
                {item.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CompleteService/>
      <div className='p-6'>
          <Pricing/>
      </div>
      {/* 3. TECHNICAL STACK (The "How we build" Grid) */}
      <section className="md:py-18 py-10  bg-slate-950/50 border-y border-slate-800/50 relative ">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Core Tech Stack</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We choose tools that prioritize speed, security, and developer experience. Our stack is optimized for high-performance deployments.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Tailwind', 'Framer Motion'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Visual Element: A glowing grid box */}
          <div className="relative aspect-video rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
             <div className="relative text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-500/20 blur-2xl absolute -top-4 left-0 right-0 animate-pulse" />
                <p className="text-blue-500 font-mono text-xl font-bold uppercase tracking-tighter">Performance First</p>
                <p className="text-slate-500 text-xs mt-2 italic">Optimized for Vercel Edge Runtime</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. THE PROCESS (Timeline) */}
      <section className="py-10 p-5">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-3xl font-bold md:mb-16 mb-6">The Road to <span className="text-purple-400">Success</span></h3>
          <div className="space-y-12">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "We deep-dive into your business goals and map out the technical blueprint." },
              { step: "02", title: "Design & Prototyping", desc: "Interactive UI/UX designs that bring your vision to life before a single line of code." },
              { step: "03", title: "Agile Development", desc: "Bi-weekly sprints with full transparency and constant feedback loops." },
              { step: "04", title: "Launch & Support", desc: "Zero-downtime deployment followed by 24/7 technical monitoring." }
            ].map((p, idx) => (
              <div key={idx} className="flex gap-8 group md:mb-10 mb-5">
                <div className="text-4xl font-black text-slate-800 group-hover:text-blue-500/30 transition-colors">
                  {p.step}
                </div>
                <div className="pb-8 border-b border-slate-800/50">
                  <h4 className="text-xl font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-3 pb-10 text-center">
        <ModalTrigger openModal={() => setIsModalOpen(true)} />
      </section>
      <EnquiryModal
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
        />
      
    </main>
  );
}