import React from 'react';
import { Eye, FileText, Lock, Globe, Mail } from 'lucide-react';
import { BsShieldLock } from "react-icons/bs";

export default function PrivacyPolicy() {
  const lastUpdated = "March 18, 2026";

  const sections = [
    {
      title: "1. Information We Collect",
      icon: <Eye size={20} className="text-indigo-400" />,
      content: "We collect information you provide directly to us when you request a quote, subscribe to our newsletter, or use our automation services. This includes your name, email address, company details, and any technical specifications provided for project evaluation."
    },
    {
      title: "2. How We Use Your Data",
      icon: <FileText size={20} className="text-purple-400" />,
      content: "Your data is used to provide, maintain, and improve our services. Specifically for: project communication, processing Google Ads automation, optimizing your SEO strategy, and ensuring our data scraping activities remain compliant with target site TOS."
    },
    {
      title: "3. Data Scraping & Ethics",
      icon: <Globe size={20} className="text-emerald-400" />,
      content: "At DIGIELABS, we perform data extraction with a 'Privacy by Design' approach. We do not scrape PII (Personally Identifiable Information) from third-party sites unless explicitly authorized, and we adhere to Robots.txt protocols and global data protection standards."
    },
    {
      title: "4. Security Standards",
      icon: <Lock size={20} className="text-rose-400" />,
      content: "We implement bank-grade encryption and secure socket layer (SSL) technology. Access to client data is strictly limited to authorized personnel involved in project delivery, protected by multi-factor authentication (MFA)."
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 pb-24">
      {/* Header */}
      <header className="relative pt-32 pb-16 px-6 border-b border-slate-900">
        <div className="max-w-4xl mx-auto">
          <BsShieldLock size={48} className="text-indigo-500 mb-6" />
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-500 font-mono text-sm">Last Updated: {lastUpdated}</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <div className="prose prose-invert prose-indigo max-w-none">
          <p className="text-lg text-slate-400 leading-relaxed mb-12">
            This Privacy Policy describes how <span className="text-white font-bold">DIGIELABS</span> ("we," "us," or "our") 
            collects, uses, and shares your personal information when you visit our website or use our 
            automated technology services.
          </p>

          <div className="grid gap-12">
            {sections.map((section, index) => (
              <section key={index} className="group">
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h2 className="text-xl font-bold text-white m-0">{section.title}</h2>
                </div>
                <p className="text-slate-400 leading-relaxed pl-8 border-l border-slate-800 group-hover:border-indigo-500/50 transition-colors">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <hr className="my-16 border-slate-900" />

          <section className="bg-slate-900/40 p-8 rounded-[2rem] border border-slate-800">
            <h2 className="text-2xl font-bold text-white mt-0 mb-4 flex items-center gap-2">
              <Mail className="text-indigo-400" size={24} /> Contact Our DPO
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              If you have questions about this policy or our data handling practices, 
              please contact our Data Protection Officer:
            </p>
            <div className="space-y-1">
              <p className="text-white font-bold">DIGIELABS Legal Team</p>
              <p className="text-indigo-400 hover:underline cursor-pointer">privacy@sociallabs.in</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}