'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, ShieldCheck } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('digielabs-cookie-consent');
    if (!consent) {
      // Small delay for better UX after page load
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

const handleAccept = () => {
  // 1. Save to localStorage
  localStorage.setItem('digielabs-cookie-consent', 'accepted');
  
  // 2. Trigger Google Analytics Consent Update
  if (typeof window.gtag !== 'undefined') {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted'
    });
  }

  setIsVisible(false);
};

  const handleDecline = () => {
    localStorage.setItem('digielabs-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:w-[400px] z-[100]"
        >
          <div className="relative overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-6 rounded-[2.5rem] shadow-2xl">
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full -z-10"></div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
                <Cookie size={24} />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white font-bold tracking-tight">Cookie Settings</h4>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
                
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  We use cookies to enhance your experience, serve personalized ads (Google Ads), 
                  and analyze our traffic (SEO). By clicking "Accept", you consent to our use of cookies.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-indigo-900/20 active:scale-95"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition-all active:scale-95"
                  >
                    Essential Only
                  </button>
                </div>
                
                <div className="mt-4 flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
                  <ShieldCheck size={12} className="text-emerald-500" />
                  Your data is encrypted & secured
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}