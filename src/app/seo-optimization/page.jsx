'use client'
import dynamic from 'next/dynamic';
import Link from 'next/link'
const ReadyToScale = dynamic(() => import('../../components/ReadyToScale'), { ssr: false });
const RelatedServices = dynamic(() => import('../../components/RelatedServices'), { ssr: false });
import Pricing from '../../components/Pricing';
const ScheduleModal = dynamic(() => import('../../components/ScheduleModal'), { ssr: false });
import { 
  Search, 
  BarChart4, 
  Globe, 
  Zap, 
  Link2, 
  FileSearch, 
  UserCheck, 
  Gauge, 
  Share2, 
  MousePointer2,
  Settings2,
  TrendingUp
} from 'lucide-react';

export default function SEOOptimizationBlog() {
  const seoPillars = [
    {
      title: "Technical SEO",
      icon: <Settings2 className="text-indigo-400" />,
      desc: "Optimizing site architecture, crawlability, and indexing to ensure search engines love your code."
    },
    {
      title: "On-Page Strategy",
      icon: <FileSearch className="text-purple-400" />,
      desc: "Crafting semantic content, meta-structures, and internal linking that satisfy user intent."
    },
    {
      title: "Off-Page Authority",
      icon: <Link2 className="text-blue-400" />,
      desc: "Building high-quality backlink profiles and digital PR to establish your domain's trust."
    },
    {
      title: "Performance (CWV)",
      icon: <Gauge className="text-rose-400" />,
      desc: "Passing Google's Core Web Vitals with lightning-fast LCP, FID, and CLS metrics."
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 selection:bg-indigo-500/30">
      
      {/* --- HERO SECTION --- */}
      <div className="relative md:pt-20 pt-10 md:pb-20 pb-0 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full -z-10"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-[1px] w-12 bg-indigo-500"></div>
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">Search Engine Engineering</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1] leading-[1.4]">
            Visibility <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400">
              By Design.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
            We don't just chase rankings; we dominate the SERPs. DIGIELABS combines 
            data-driven technical SEO with high-authority content strategies to drive sustainable organic growth.
          </p>
        </div>
      </div>
      <div>
            <ScheduleModal/>
      </div>
      {/* --- SEO PILLARS GRID --- */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {seoPillars.map((pillar, i) => (
            <div key={i} className="group p-6 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-indigo-500/30 transition-all">
              <div className="mb-4 p-3 w-fit bg-slate-950 rounded-xl border border-slate-800 group-hover:border-indigo-500/50 transition-colors">
                {pillar.icon}
              </div>
              <h4 className="text-white font-bold text-sm mb-2">{pillar.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CORE CONTENT --- */}
      <article className="max-w-5xl mx-auto px-6 md:py-14 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-12 gap-4">
          
          <div className="lg:col-span-8 space-y-16">
            {/* On-Page Section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FileSearch className="text-indigo-400" /> On-Page Excellence
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                On-page SEO is more than just keywords. It’s about <strong className="text-white">Semantic Relevance</strong>. 
                We optimize your content structure using H1-H6 hierarchy, LSI (Latent Semantic Indexing) keywords, 
                and high-conversion Meta tags that increase your CTR (Click-Through Rate).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Schema Markup (JSON-LD)', 'Image Alt Optimization', 'UX-Driven Content Layout', 'Keyword Gap Analysis'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Technical SEO Section */}
            <section className="p-8 bg-slate-950 border border-slate-800 rounded-[2.5rem] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Zap size={120} className="text-indigo-400" />
               </div>
               <h3 className="text-xl font-bold text-white mb-4">Technical Foundation</h3>
               <p className="text-sm text-slate-400 leading-relaxed">
                 A beautiful site is useless if Google can't crawl it. We audit your 
                 <strong className="text-white"> Robots.txt, XML Sitemaps, and Canonical tags</strong>. 
                 Our engineers ensure your site is mobile-first, secure (HTTPS), and free of 404/301 redirect loops 
                 that bleed your crawl budget.
               </p>
            </section>
              
            {/* Off-Page Section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Link2 className="text-rose-400" /> Off-Page Authority
              </h2>
              <p className="text-slate-400 mb-6">
                Your Domain Authority (DA) is your digital reputation. We implement ethical, 
                white-hat link-building strategies, focusing on <strong className="text-white">Quality over Quantity</strong>. 
                From guest blogging on high-authority niches to broken link building, we ensure 
                your site is recognized as a leader in your industry.
              </p>
            </section>
            
          </div>

          {/* SIDEBAR - AUDIT METRICS */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] text-white">
               <h4 className="text-xs font-bold uppercase tracking-widest opacity-80 mb-8">Performance Goals</h4>
               <div className="space-y-6">
                  {[
                    { label: "Organic Reach", val: "+250%" },
                    { label: "Page Load Time", val: "< 1.5s" },
                    { label: "Keyword Ranking", val: "Top 3" }
                  ].map((stat, i) => (
                    <div key={i}>
                       <div className="text-4xl font-black">{stat.val}</div>
                       <div className="text-[10px] uppercase font-bold opacity-70">{stat.label}</div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem]">
               <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                 <BarChart4 size={18} className="text-indigo-400" /> 
                 Tools We Use
               </h4>
               <div className="flex flex-wrap gap-2">
                  {['Ahrefs', 'SEMrush', 'GSC', 'Screaming Frog', 'Moz', 'GTMetrix'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-[10px] text-indigo-400 font-mono">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>
          </aside>
        </div>
        <div>
            <Pricing/>
        </div>
      </article>

      {/* --- SEO PROCESS SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 md:pb-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Audit", desc: "Identifying technical bottlenecks and keyword opportunities." },
            { step: "02", title: "Optimize", desc: "Applying on-page and technical fixes across the site." },
            { step: "03", title: "Scale", desc: "Continuous content creation and authority building." }
          ].map((item, idx) => (
            <div key={idx} className="relative p-8 bg-slate-900/20 border border-slate-800 rounded-3xl">
              <span className="text-6xl font-black text-indigo-500/10 absolute top-4 right-4">{item.step}</span>
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 md:pb-18 pb-4">
        <div className="md:p-16 p-6 pb-10 bg-slate-900 border border-slate-800 rounded-[3rem] text-center relative group overflow-hidden">
          <div className=" inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <TrendingUp size={150} className="absolute -bottom-10 -left-10 opacity-5 -rotate-12" />
          
          <h2 className="text-4xl font-bold text-white mb-6">Stop Being Invisible</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Your customers are searching for you right now. Will they find you or your competitors? 
            Let's build a search strategy that puts you at the top.
          </p>
          <Link href={"/contact"} className="md:px-12 px-4 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl shadow-2xl shadow-indigo-900/40 transition-all">
            Get a Free SEO Audit
          </Link>
        </div>
      </section>
      <RelatedServices/>
      <ReadyToScale/>
    </main>
  );
}