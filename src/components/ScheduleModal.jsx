'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle2, Loader2 } from 'lucide-react';
import AttractionButton from './AttractionButton'; 
const ScheduleForm = dynamic(() => import('./ScheduleForm'), { ssr: false });

export default function ScheduleModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    // Auto-close after success
    setTimeout(() => {
      setIsOpen(false);
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <>
      {/* The Trigger Button */}
      <AttractionButton onClick={() => setIsOpen(true)} />

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 schedule_modal">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              {/* Decorative Header Glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-500" />

              <div className="p-8 md:p-10">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                {!isSuccess ? (
                  <>
                    <div className="mb-8">
                      <h2 className="[word-spacing:5px] text-3xl font-black text-white tracking-tighter mb-2">Technical Intake</h2>
                      <p className="text-slate-400 text-sm">Secure a 30-minute deep-dive with our lead engineers.</p>
                    </div>

                    <ScheduleForm/>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="text-emerald-500" size={48} />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Appointment Scheduled</h2>
                    <p className="text-slate-400">Check your inbox for the calendar invite and meeting link.</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}