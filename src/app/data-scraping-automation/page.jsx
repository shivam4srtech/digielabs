
import Link from 'next/link'
import ReadyToScale from '../../components/ReadyToScale';
import RelatedServices from '../../components/RelatedServices';
import ScraperLiveStatus from '../../components/ScraperLiveStatus';
import Pricing from '../../components/Pricing';
import ScheduleModal from '../../components/ScheduleModal'
import { 
  DatabaseZap, 
  Binary, 
  Terminal, 
  ShieldCheck, 
  Repeat, 
  LineChart, 
  Cpu, 
  Globe,
  Layers,
  Search,
  Lock,
  Workflow,
  ServerCrash
} from 'lucide-react';
export const metadata = {
  title: "Data Scraping & Automation Services | DigieLABS",
  description: "Streamline your operations with DigieLABS' custom data scraping and automation services. Extract valuable web data accurately and efficiently to drive business decisions.",
  keywords: [
    "data scraping services", 
    "web scraping company", 
    "data automation solutions", 
    "web data extraction", 
    "automated data mining", 
    "business intelligence", 
    "custom data pipelines", 
    "Python web scraping"
  ],
};
export default function DataAutomationDetailedBlog() {
  const engineeringSpecs = [
    { 
      title: "Headless Orchestration", 
      icon: <Terminal className="text-emerald-400" />, 
      tech: "Playwright, Puppeteer",
      desc: "Simulating real user behavior on React/Angular/Vue sites that require JS execution." 
    },
    { 
      title: "Anti-Bot Bypass", 
      icon: <Lock className="text-blue-400" />, 
      tech: "TLS Fingerprinting",
      desc: "Evading Cloudflare, Akamai, and PerimeterX using advanced header randomization." 
    },
    { 
      title: "Distributed Crawling", 
      icon: <Layers className="text-purple-400" />, 
      tech: "Celery & Redis",
      desc: "Scaling to millions of requests by distributing tasks across a cluster of worker nodes." 
    },
    { 
      title: "Smart IP Rotation", 
      icon: <Globe className="text-cyan-400" />, 
      tech: "Residential Proxies",
      desc: "Rotating through millions of unique residential IPs to eliminate 403 Forbidden errors." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 selection:bg-emerald-500/30">
      
      {/* --- HERO SECTION --- */}
      <div className="relative md:pt-20 pt-8 md:pb-20 pb-8 px-6 overflow-hidden">
        {/* Theme-Consistent Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full -z-10"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-[1px] w-12 bg-emerald-500"></div>
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">Data Engineering & ETL</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter md:leading-[1] leading-[1.4]">
            The Web is <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Your Database.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
            Stop fighting with rate-limits and broken scripts. DIGIELABS engineers autonomous 
            extraction pipelines that turn fragmented web content into structured, ready-to-use intelligence.
          </p>
        </div>
      </div>
       <ScheduleModal/>
      {/* --- ENGINEERING SPECS GRID --- */}
      <section className="max-w-5xl mx-auto px-6 md:py-12 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringSpecs.map((spec, i) => (
            <div key={i} className="group p-8 bg-slate-900/40 border border-slate-800 rounded-[2rem] hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 group-hover:border-emerald-500/50 transition-colors">
                  {spec.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold">{spec.title}</h4>
                  <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">{spec.tech}</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{spec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CORE CONTENT --- */}
      <article className="max-w-5xl mx-auto px-6 md:py-20 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-16 gap-6">
          
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <DatabaseZap className="text-emerald-500" /> Scalable Extraction Architecture
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Traditional scraping fails when faced with modern "Single Page Applications" (SPAs). 
                We utilize <strong className="text-white font-semibold">Playwright and Puppeteer</strong> to 
                render full browser environments, allowing us to interact with buttons, scroll for lazy-loading 
                content, and solve complex login challenges autonomously.
              </p>
              <p className="text-slate-400">
                By implementing <strong className="text-white">TLS Fingerprinting</strong>, our scrapers 
                match the encryption handshake of popular browsers (Chrome/Firefox), making our bots 
                indistinguishable from real human users.
              </p>
            </section>

            <section className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-[2.5rem] relative overflow-hidden md:mb-12 mb-6">
               <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Workflow size={20} className="text-emerald-400" /> Automated ETL Pipelines
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Data is useless if it's messy. Our <strong>Extract-Transform-Load</strong> logic 
                    automatically normalizes units (e.g., converting currencies), validates email 
                    formats, and deduplicates records in real-time before pushing to your production database.
                  </p>
               </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Monitoring & Self-Healing</h2>
              <p className="text-slate-400 mb-6">
                Websites change layouts constantly. Our system uses <strong className="text-white">Schema Validation </strong> 
                to detect layout shifts. If a selector fails, our "Self-Healing" logic triggers 
                an alert or attempts to locate the data using fuzzy-matching algorithms, ensuring 
                minimal downtime for your business operations.
              </p>
            </section>
          </div>

          {/* SIDEBAR METRICS & CAPABILITIES */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] text-[#fff]">
               <h4 className="text-xs font-bold uppercase tracking-widest opacity-80 mb-8">Data Capabilities</h4>
               <div className="space-y-6">
                  {[
                    { label: "Daily Throughtput", val: "5M+ Pages" },
                    { label: "Success Rate", val: "99.8%" },
                    { label: "IP Pool Size", val: "40M+" }
                  ].map((stat, i) => (
                    <div key={i}>
                       <div className="text-4xl font-black leading-none">{stat.val}</div>
                       <div className="text-[10px] uppercase font-bold opacity-70 mt-1">{stat.label}</div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem]">
               <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                 <ServerCrash size={18} className="text-red-400" /> 
                 Destinations
               </h4>
               <ul className="space-y-4">
                  {['Amazon S3 / Azure Blob', 'PostgreSQL / MongoDB', 'Google BigQuery', 'Salesforce / HubSpot CRM'].map((dest, i) => (
                    <li key={i} className="text-xs flex items-center gap-3 text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-emerald-500" />
                      {dest}
                    </li>
                  ))}
               </ul>
            </div>
          </aside>
        </div>
      </article>

      {/* --- BOTTOM CTA --- */}
      <section className="max-w-5xl mx-auto px-6 md:pb-18 pb-8">
        <ScraperLiveStatus/>
        
        <div className="md:p-14 pb-[3rem] p-3 bg-slate-900 border border-slate-800 rounded-[3rem] text-center relative">
          <div className="absolute top-0 right-10 opacity-5">
            <DatabaseZap size={200} />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Build Your Data Moat</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Ready to automate your market research or lead generation? 
            Let's build a custom data pipeline that gives you a 10x edge.
          </p>
          <Link href='/contact'className="md:px-12 px-6 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl shadow-2xl shadow-emerald-900/40 transition-all">
            Consult a Data Engineer
          </Link>
        </div>
         <Pricing/>
      </section>
     
      <RelatedServices/>
      <ReadyToScale/>
    </main>
  );
}