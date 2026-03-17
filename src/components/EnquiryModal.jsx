'use client';

import React, { useState } from 'react';
import { X, Rocket, Zap, CheckCircle2 } from 'lucide-react'; // Optional: npm i lucide-react
import ContactForm from './ContactForm';

export default function TechModal({ isOpen, onClose }) {
  if (!isOpen) return null; // Important: Don't render if closed
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        View Service Details
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={onClose}
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
            
            {/* Design Element: Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

            {/* Header */}
            <div className="p-3 flex justify-between items-start">
              <div className="bg-indigo-500/10 p-3 rounded-2xl">
                <Rocket className="w-6 h-6 text-indigo-400" />
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="px-8 pb-8 modal-body no-scrollbar">
              
                <ContactForm/>
              
            </div>

            {/* Footer Buttons */}
            <div className="p-2 bg-slate-950/50 border-t border-slate-800 flex gap-3">
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}