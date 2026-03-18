'use client';

import React, { useState } from 'react';
import { Rocket, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ReadyToScale() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setErrors({});
  setStatus({ type: '', message: '' });

  try {
    // UPDATED ROUTE TO /api/scale
    const res = await fetch('/api/scale', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      setStatus({ type: 'success', message: 'Inquiry Sent! Check your email for confirmation.' });
      setFormData({ name: '', email: '', phone: '' });
    } else {
      setErrors(data.errors || {});
      setStatus({ type: 'error', message: data.message || 'Please fix the errors below.' });
    }
  } catch (err) {
    setStatus({ type: 'error', message: 'Connection failed. Please check your internet.' });
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="relative md:py-10  overflow-hidden bg-[#020617] p-6">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-5xl mx-auto bg-slate-900/40 border border-slate-800 p-3 md:p-12 rounded-[2.5rem] backdrop-blur-sm">
        <div className="text-center mb-10">
          <div className="inline-flex p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-4">
            <Rocket size={28} />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold md:font-extrabold text-white mb-4 tracking-tight">Ready to Scale?</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Leave your details below. Our engineers will reach out to discuss your project architecture.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {status.message && (
            <div className={`flex items-center gap-3 p-4 rounded-xl border text-sm animate-in fade-in zoom-in-95 duration-300 ${
              status.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' : 'bg-red-500/10 border-red-500/50 text-red-400'
            }`}>
              {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
              {status.message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full bg-slate-950 border rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 transition-all ${
                  errors.name ? 'border-red-500/50 focus:ring-red-500/20' : 'border-slate-800 focus:ring-indigo-500/20 focus:border-indigo-500/50'
                }`}
              />
              {errors.name && <p className="text-[10px] text-red-500 ml-2 uppercase font-bold tracking-wider">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full bg-slate-950 border rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 transition-all ${
                  errors.email ? 'border-red-500/50 focus:ring-red-500/20' : 'border-slate-800 focus:ring-indigo-500/20 focus:border-indigo-500/50'
                }`}
              />
              {errors.email && <p className="text-[10px] text-red-500 ml-2 uppercase font-bold tracking-wider">{errors.email}</p>}
            </div>

            {/* Mobile Field */}
            <div className="space-y-2">
              <input
                type="tel"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className={`w-full bg-slate-950 border rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 transition-all ${
                  errors.phone ? 'border-red-500/50 focus:ring-red-500/20' : 'border-slate-800 focus:ring-indigo-500/20 focus:border-indigo-500/50'
                }`}
              />
              {errors.phone && <p className="text-[10px] text-red-500 ml-2 uppercase font-bold tracking-wider">{errors.phone}</p>}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative w-full py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg transition-all hover:shadow-[0_0_40px_rgba(79,70,229,0.4)] disabled:opacity-70 overflow-hidden"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"></span>
                <span className="ml-2">AI is processing...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Schedule Tech Consultation
              </div>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}