'use client';
import { useState } from 'react';
// Error Message Component
const ErrorMsg = ({ msg }) => (
  msg ? <p className="text-xs text-red-500 mt-1 ml-1 animate-in fade-in duration-300">{msg}</p> : null
);
// Stunning Loader Component
const Loader = () => (
  <div className="flex items-center justify-center gap-3">
    <div className="flex gap-1.5">
      {/* Dot 1 */}
      <span className="w-2 h-2 rounded-full bg-white animate-[bounce_1s_infinite_0ms]"></span>
      {/* Dot 2 */}
      <span className="w-2 h-2 rounded-full bg-white animate-[bounce_1s_infinite_200ms]"></span>
      {/* Dot 3 */}
      <span className="w-2 h-2 rounded-full bg-white animate-[bounce_1s_infinite_400ms]"></span>
    </div>
    <span className="text-sm font-medium tracking-wide">Processing request...</span>
  </div>
);

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // Stores field-specific errors
  const [result, setResult] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({}); // Reset errors on new submission
    setResult({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult({ type: 'success', message: 'Inquiry sent! Check your email.' });
        setFormData({ name: '', email: '', phone: '', service: 'Web Development', message: '' });
      } else {
        // If backend returns 400 with errors, set them here
        setErrors(data.errors || {});
        setResult({ type: 'error', message: data.message || 'Please fix the errors below.' });
      }
    } catch (error) {
      setResult({ type: 'error', message: 'Connection error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Notifications */}
      {result.message && (
        <div className={`p-4 rounded-xl text-sm font-medium border animate-in fade-in slide-in-from-top-2 duration-300 ${
          result.type === 'success' 
            ? 'bg-green-500/10 border-green-500/50 text-green-500' 
            : 'bg-red-500/10 border-red-500/50 text-red-500'
        }`}>
          {result.message}
        </div>
      )}

      {/* ... Input fields stay the same ... */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm text-slate-400 ml-1">Full Name</label>
          <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" />
          <ErrorMsg msg={errors.name} />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-400 ml-1">Email Address</label>
          <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@company.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" />
          <ErrorMsg msg={errors.email} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
              <label className="text-sm text-slate-400 ml-1">Phone</label>
              <input required name="phone" value={formData.phone} onChange={handleChange} type="number" placeholder="phone number" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" />
              <ErrorMsg msg={errors.phone} />
          </div>
          <div className="space-y-2">
          <label className="text-sm text-slate-400 ml-1">Service Interested In</label>
          <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition-all appearance-none" >
              <option value={""}>---select---</option>
              <option value={"Web Development"}>Web Development</option>
              <option value={"App Development"}>App Development</option>
              <option value={"SEO Services"}>SEO Services</option>
              <option value={"Google Ads"}>Google Ads</option>
              <option value={"Other"}>Other</option>
          </select>
          <ErrorMsg msg={errors.service} />
          </div>
      </div>    

      <div className="space-y-2">
        <label className="text-sm text-slate-400 ml-1">Message</label>
        <textarea required name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Tell us about your project..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"></textarea>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="group relative w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold overflow-hidden hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-80 disabled:hover:translate-y-0"
      >
        {/* Animated Background Highlight */}
        <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out"></div>
        
        {loading ? <Loader /> : 'Send Message'}
      </button>
    </form>
  );
}