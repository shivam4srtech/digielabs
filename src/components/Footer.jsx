
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 pt-24 pb-8 overflow-hidden border-t border-slate-800/50">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer CTA Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 p-8 sm:p-12 mb-20 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl pointer-events-none" />
          <div className="text-center sm:text-left z-10">
            <h2 className="text-3xl font-bold text-white mb-2">Ready to scale your business?</h2>
            <p className="text-slate-400">Let's build something extraordinary together.</p>
          </div>
          <div className="z-10 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="block w-full text-center px-8 py-4 rounded-lg bg-white text-slate-950 font-bold hover:bg-blue-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Get a Free Proposal
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-extrabold text-white tracking-tighter mb-4 block">
              Digie<span className="text-blue-500">LABS.</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge web development, robust mobile apps, and data-driven marketing strategies.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { name: 'Twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
                { name: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z' },
                { name: 'GitHub', path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' }
              ].map((social) => (
                <a key={social.name} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Frontend Development', 'Backend Engineering', 'Mobile App Dev', 'Web Applications', 'SEO Optimization', 'Google Ads Management'].map((item) => (
                <li key={item}>
                  <Link href="#" className="group flex items-center hover:text-blue-400 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-all mr-0 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              {['About Us', 'Our Portfolio', 'Careers', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@digielabs.com" className="hover:text-white transition-colors">hello@startup.com</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+91 80507 39493</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Floor 405, Maheshwari Chambers, Irram Manzil Colony, Punjagutta, <br/>Hyderabad, Telangana 500082.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} StartupLogo. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}