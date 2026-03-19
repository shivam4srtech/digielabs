'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FireflyButton({ onClick }) {
  // Generate 12 unique fireflies with random positions and durations
  const fireflies = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2, // 2px to 6px
    x: Math.random() * 100, // 0% to 100%
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2, // 2s to 5s
    delay: Math.random() * 5,
  }));

  return (
    <div className="relative flex items-center justify-center">
      
      {/* 1. AMBIENT NIGHT GLOW (Background) */}
      <div className="absolute w-80 h-32 bg-indigo-900/20 blur-[100px] -z-10 rounded-full" />

      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative md:px-12 md:py-7 px-6 py-3 bg-[#020617] border border-slate-800 rounded-full flex items-center gap-6 overflow-hidden shadow-2xl"
      >
        {/* 2. THE FIREFLIES (Floating Particles) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {fireflies.map((fly) => (
            <motion.div
              key={fly.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5],
                x: [`${fly.x}%`, `${fly.x + (Math.random() * 10 - 5)}%`],
                y: [`${fly.y}%`, `${fly.y + (Math.random() * 10 - 5)}%`],
              }}
              transition={{
                duration: fly.duration,
                repeat: Infinity,
                delay: fly.delay,
                ease: "easeInOut",
              }}
              className="absolute bg-amber-300 rounded-full blur-[2px]"
              style={{
                width: fly.size,
                height: fly.size,
                left: `${fly.x}%`,
                top: `${fly.y}%`,
                boxShadow: '0 0 10px #fbbf24, 0 0 20px #f59e0b',
              }}
            />
          ))}
        </div>

        {/* 3. BUTTON CONTENT */}
        <div className="relative z-10 flex items-center gap-5">
          <div className="relative">
            <div className="p-3.5 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700 group-hover:border-amber-500/50 transition-colors">
              <Sparkles className="text-amber-400 group-hover:animate-pulse" size={24} />
            </div>
          </div>

          <div className="text-left">
            <h3 className="[word-spacing:5px] text-[1.1rem] md:text-2xl md:font-bold font-semibold text-white tracking-tighter md:leading-none leading-[1] mb-1">
              Schedule <span className="text-amber-400"> Free </span> Tech Consultation
            </h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-amber-200/60 transition-colors">
              Illuminate Your Tech Strategy
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-400 transition-all duration-500">
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* 4. SOFT INNER GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </motion.button>
    </div>
  );
}