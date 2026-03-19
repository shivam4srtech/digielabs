'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';
const ModalTrigger = dynamic(() => import('../components/ModalTrigger'), { ssr: false });
const EnquiryModal = dynamic(() => import('../components/EnquiryModal'), { ssr: false });



export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
        <section className="py-5  bg-[#020617] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full -z-10"></div>

        <div className="max-w-5xl mx-auto">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-6 md:p-10 bg-slate-900/40 border border-slate-800 rounded-[3.5rem] overflow-hidden backdrop-blur-md"
            >
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Tagline */}
                <div className="flex items-center gap-2 mb-0 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">
                <Sparkles size={14} /> Tailored Engineering Solutions
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Pricing</span>
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 font-light leading-relaxed">
                Every project at DIGIELABS is unique. We provide custom pricing based on your 
                specific technical requirements, architecture complexity, and automation goals.
                </p>

                {/* Benefits Row */}
                <div className="flex flex-wrap justify-center gap-8 mb-12 opacity-60 text-white">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <Zap size={16} className="text-yellow-400" /> Fast Delivery
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <ShieldCheck size={16} className="text-emerald-400" /> Enterprise Security
                </div>
                </div>

                {/* The Main Button */}
                
                <ModalTrigger
                    openModal={() => setIsModalOpen(true)}
                    label="Get Pricing Details"
                    btnClass="group relative md:px-12 px-6 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl shadow-2xl shadow-indigo-900/40 transition-all flex items-center gap-3"
                    icon={<ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />}
                />

                <p className="mt-8 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                Consultation is free • No hidden costs
                </p>
            </div>
            </motion.div>
        </div>
        </section>
        <EnquiryModal
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
        />
    </>
  );
}