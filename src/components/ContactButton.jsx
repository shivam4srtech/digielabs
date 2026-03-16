import React from 'react';
import Link from 'next/link';

export default function ContactButton() {
  return (
    <Link href="/contact" className="group relative inline-flex items-center justify-end cursor-pointer">
      {/* The Animated Outer Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 group-hover:inset-[-2px] transition-all duration-500 animate-pulse"></div>
      
      {/* The Main Button Body */}
      <button className="relative flex items-center gap-2 px-6 py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-full leading-none transition duration-200 border border-slate-800 group-hover:border-slate-700">
        
        {/* Animated Icon (Bounces on hover) */}
        <span className="flex h-2 w-2 rounded-full bg-blue-500 group-hover:animate-ping"></span>
        
        <span className="text-sm font-semibold tracking-wide">Contact Us</span>

        {/* Shimmer Effect Overlay */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-full pointer-events-none">
          <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>
        </div>

        {/* Right Arrow (Slides in on hover) */}
        <svg 
          className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </Link>
  );
}