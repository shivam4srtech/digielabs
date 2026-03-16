import React from 'react';

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden flex items-center justify-center py-20 px-6">
      {/* Dynamic Background Blurs (Matching your Hero) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Branding & Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Let’s Build <br />
              Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-black">Epic.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Have a vision? We have the engineering power. Reach out and let’s discuss your next digital breakthrough.
            </p>
          </div>

          <div className="space-y-6">
            {/* Contact Detail 1 */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 transition-all">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email Us</p>
                <p className="text-white font-medium">hello@digielabs.com</p>
              </div>
            </div>

            {/* Contact Detail 2 */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-purple-500/50 transition-all">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Our HQ</p>
                <p className="text-white font-medium">Floor 405, Maheshwari Chambers, <br />Irram Manzil Colony, Punjagutta,<br />
Hyderabad, Telangana 500082.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphism Form */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-slate-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-400 ml-1">Service Interested In</label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition-all appearance-none">
                <option>Web Development</option>
                <option>App Development</option>
                <option>SEO Services</option>
                <option>Google Ads</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-400 ml-1">Message</label>
              <textarea 
                rows="4" 
                placeholder="Tell us about your project..." 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}