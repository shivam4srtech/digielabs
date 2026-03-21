
import { Scale, FileCode, CreditCard, AlertTriangle, ShieldCheck, Mail } from 'lucide-react';
export const metadata = {
  title: "Terms and Conditions | DigieLABS",
  description: "Review the Terms and Conditions for using DigieLABS' website and digital services. Learn about our user guidelines, service agreements, and legal policies.",
  keywords: [
    "terms and conditions", 
    "terms of service", 
    "user agreement", 
    "service guidelines", 
    "website policies", 
    "legal terms", 
    "DigieLABS terms"
  ],
};
export default function TermsAndConditions() {
  const lastUpdated = "March 18, 2026";

  const legalSections = [
    {
      title: "1. Service Engagement",
      icon: <FileCode size={20} className="text-indigo-400" />,
      content: "DIGIELABS provides custom software development, data scraping, SEO, and Google Ads automation. Engagement begins upon the digital signature of a Statement of Work (SOW) or the first milestone payment. We reserve the right to refuse service for projects that violate our ethical data scraping policies."
    },
    {
      title: "2. Intellectual Property (IP)",
      icon: <ShieldCheck size={20} className="text-emerald-400" />,
      content: "Upon full and final payment, the 'Work Product' (custom code, apps, and specific UI designs) is transferred to the Client. However, DIGIELABS retains ownership of pre-existing codebases, internal automation scripts, and proprietary 'know-how' used to deliver the service."
    },
    {
      title: "3. Payment & Subscription Terms",
      icon: <CreditCard size={20} className="text-amber-400" />,
      content: "Project-based work requires a 50% upfront deposit. For recurring services like Google Ads Automation or SEO, billing occurs on the 1st of each month. Late payments exceeding 15 days may result in a temporary suspension of automated API services and data pipelines."
    },
    {
      title: "4. Data Scraping & Third-Party Terms",
      icon: <Scale size={20} className="text-purple-400" />,
      content: "Clients using our Data Scraping services warrant that their use case complies with the target website's Terms of Service. DIGIELABS acts as a technical executor and is not liable for how extracted data is utilized or any subsequent account bans on third-party platforms."
    },
    {
      title: "5. Limitation of Liability",
      icon: <AlertTriangle size={20} className="text-rose-400" />,
      content: "DIGIELABS is not responsible for loss of revenue due to server downtimes, Google algorithm updates (SEO), or sudden changes in Google Ads policies. Our maximum liability is limited to the amount paid for the specific service in the preceding three months."
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 pb-24">
      {/* Header Section */}
      <header className="relative pt-32 pb-16 px-6 border-b border-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <Scale size={48} className="text-indigo-500 mb-6" />
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Version 2.0 • Updated {lastUpdated}</p>
        </div>
      </header>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <div className="prose prose-invert prose-indigo max-w-none">
          <p className="text-lg text-slate-400 leading-relaxed mb-12 italic border-l-2 border-indigo-500/30 pl-6">
            By accessing the DIGIELABS website or utilizing our engineering services, you agree to be bound by these 
            Terms and Conditions. Please read them carefully as they govern the legal relationship between 
            SocialLabs (operating as DIGIELABS) and our clients.
          </p>

          <div className="space-y-16">
            {legalSections.map((section, index) => (
              <section key={index} className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white m-0 tracking-tight">{section.title}</h2>
                </div>
                <div className="text-slate-400 leading-relaxed space-y-4 text-md">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* Termination Clause */}
          <section className="mt-20 p-10 bg-gradient-to-br from-slate-900 to-[#020617] rounded-[2.5rem] border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full"></div>
            <h3 className="text-xl font-bold text-white mb-4">6. Termination</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Either party may terminate the agreement with a 30-day written notice. Upon termination, 
              the Client shall pay for all work completed up to the termination date. DIGIELABS will 
              provide a handover of all Client-owned assets within 14 days of final payment.
            </p>
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
              <Mail size={16} />
              <span>Contact legal: legal@sociallabs.in</span>
            </div>
          </section>

        
        </div>
      </div>
    </main>
  );
}