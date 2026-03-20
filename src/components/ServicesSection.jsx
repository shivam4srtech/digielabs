'use client'
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Link from 'next/link';
import ModalTrigger from './ModalTrigger';
import EnquiryModal from './EnquiryModal'
import { FaWordpressSimple } from "react-icons/fa";
const ScheduleModal = dynamic(() => import('./ScheduleModal'), { ssr: false });
const services = [
  {
    title: "Web Applications",
    slug: "web-development",
    description: "Developing complex SaaS platforms and enterprise-grade web tools from scratch.",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "WordPress Development",
    slug: "wordpress-development",
    description: "We transform the world’s most popular CMS into a high-octane business engine.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='purple' className="w-8 h-8 text-purple-400">
        <path d="M61.7 169.4l101.5 278c-71-34.4-119.9-107.2-119.9-191.4 0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8 .9 0 1.8 .1 2.8 .2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7 .3 13.7 .3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4 46.6-139.6-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zM259.7 274.6L195.9 460.1c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9L259.7 274.6zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9c63.3-36.9 105.8-105.4 105.8-183.9 0-37-9.4-71.8-26-102.1zM8 256a248 248 0 1 1 496 0 248 248 0 1 1 -496 0zm484.6 0a236.6 236.6 0 1 0 -473.2 0 236.6 236.6 0 1 0 473.2 0z"/>
     </svg>
    ),
  },
  {
    title: "Backend Engineering",
     slug: "data-scraping-automation",
    description: "Architecting scalable, secure server-side logic and robust API integrations.",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2m-14 0a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-14 0h14" />
      </svg>
    ),
  },
  {
    title: "Mobile Apps",
    slug: "mobile-app-development",
    description: "Building native-feel iOS and Android applications with cross-platform efficiency.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "SEO Optimization",
    slug: "seo-optimization",
    description: "Technical SEO strategies designed to dominate search rankings and drive organic growth.",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Google Ads",
    slug: "google-ads-automation",
    description: "Data-driven PPC campaigns that maximize ROI and lower customer acquisition cost.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
      </svg>
    ),
  },
  
];

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <> 
      
        <section className="bg-[#020617]  py-6 px-6 relative overflow-hidden">
          <div className='md:pb-10'>
              <ScheduleModal/>
          </div>
        {/* Background Glows to match your Screenshot */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 mb-6 mt-6">
            <div className="text-center md:mb-20 mb-8">
            <h2 className="text-white text-3xl md:text-5xl md:font-extrabold font-semi-bold tracking-tight mb-4">
                Our Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Services</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                We combine technical excellence with strategic thinking to deliver high-impact digital products.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <Link href={service.slug? service.slug : "/services"} 
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
                </Link>
            ))}
            </div>
        </div>
            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
                Start Your Project
            </Link> */}
            <ModalTrigger openModal={() => setIsModalOpen(true)} />
            <Link 
                href="/services" 
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-transparent border border-slate-700 text-white font-semibold hover:bg-slate-800 transition-all"
            >
                Explore Our Services
            </Link>
            </div>
        </section>
        <EnquiryModal
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
        />
    </>    
  );
}