'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Clock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function ScheduleForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({}); // Clear previous errors

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      date: e.target.date.value,
      time: e.target.time.value,
    };

    try {
      const res = await fetch('/api/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSuccess(true);
      } else if (res.status === 400) {
        setErrors(data.errors); // Set server-side errors
      } else {
        throw new Error();
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to render error messages
  const ErrorMsg = ({ msg }) => msg ? (
    <p className="text-[10px] text-rose-500 mt-1 flex items-center gap-1 ml-2 font-bold uppercase tracking-wider">
      <AlertCircle size={10} /> {msg}
    </p>
  ) : null;

  if (isSuccess) return (
    <div className="text-center py-10">
      <CheckCircle className="mx-auto text-emerald-500 mb-4" size={50} />
      <h3 className="text-white text-2xl font-bold">Booking Sent!</h3>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <div className={`relative transition-all ${errors.name ? 'ring-1 ring-rose-500 rounded-2xl' : ''}`}>
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input name="name" type="text" placeholder="Full Name" className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 text-sm" />
        </div>
        <ErrorMsg msg={errors.name} />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className={`relative ${errors.email ? 'ring-1 ring-rose-500 rounded-2xl' : ''}`}>
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input name="email" type="email" placeholder="Email" className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 text-white focus:outline-none text-sm" />
          </div>
          <ErrorMsg msg={errors.email} />
        </div>
        <div>
          <div className={`relative ${errors.phone ? 'ring-1 ring-rose-500 rounded-2xl' : ''}`}>
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input name="phone" type="tel" placeholder="Phone" className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 text-white focus:outline-none text-sm" />
          </div>
          <ErrorMsg msg={errors.phone} />
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className={`relative ${errors.date ? 'ring-1 ring-rose-500 rounded-2xl' : ''}`}>
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input name="date" type="date" className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 text-white focus:outline-none [color-scheme:dark] text-sm" />
          </div>
          <ErrorMsg msg={errors.date} />
        </div>
        <div>
          <div className={`relative ${errors.time ? 'ring-1 ring-rose-500 rounded-2xl' : ''}`}>
            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input name="time" type="time" className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 text-white focus:outline-none [color-scheme:dark] text-sm" />
          </div>
          <ErrorMsg msg={errors.time} />
        </div>
      </div>

      <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2">
        {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : "Confirm Consultation"}
      </button>
    </form>
  );
}