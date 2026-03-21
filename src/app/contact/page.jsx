
import ContactUsForm from "../../components/ContactForm";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Contact DigieLABS | Get a Free IT & Development Proposal",
  description: "Ready to scale your business? Get in touch with the DigieLABS team today for a free consultation on web development, mobile apps, and digital marketing.",
  keywords: [
    "contact DigieLABS", 
    "get a free proposal", 
    "hire web developers", 
    "software development consultation", 
    "tech agency Hyderabad", 
    "contact digital marketing agency",
    "IT support contact"
  ],
};
export default function ContactPage() {
  const phoneNumber = "918050739493"; 
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const message = `Hello! I'm interested in your development services. Redirected from ${currentUrl}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
  
    <section className="relative min-h-screen bg-[#020617] overflow-hidden flex items-center justify-center md:py-8 py-6 px-6">
      {/* Dynamic Background Blurs (Matching your Hero) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-8 items-start">
        
        {/* Left Side: Branding & Info */}
        <div className="space-y-8 order-last lg:order-none">
          <div>
            <h1 className="text-3xl md:text-5xl md:text-6xl md:font-extrabold font-bold text-white tracking-tight mb-6">
              Let’s Build <br />
              Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-black">Epic.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Have a vision? We have the engineering power. Reach out and let’s discuss your next digital breakthrough.
            </p>
          </div>

          <div className="space-y-6">
            {/* Contact Detail 1 */}
            <Link href={whatsappUrl} target="_blank"  rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 transition-all">
                <FaWhatsapp  fill="#25D366"/>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">WhatsApp Us</p>
                <p className="text-white font-medium">+91 80507 39493</p>
              </div>
            </Link>
            {/* Contact Detail 1 */}
            <Link href={"mailto:hello@digielabs.com"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 transition-all">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email Us</p>
                <p className="text-white font-medium">hello@digielabs.com</p>
              </div>
            </Link>

            {/* Contact Detail 2 */}
            <Link href={'https://maps.app.goo.gl/NCMmQyjm8MPB5xmX7'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
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
            </Link>
          </div>
        </div>

        {/* Right Side: Glassmorphism Form */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-4 md:p-8 rounded-3xl shadow-2xl">
          <ContactUsForm/>
        </div>
      </div>
    </section>
  );
}