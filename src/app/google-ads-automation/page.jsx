'use client'
import dynamic from 'next/dynamic';
import Link from 'next/link'
const ReadyToScale = dynamic(() => import('../../components/ReadyToScale'), { ssr: false });
const RelatedServices = dynamic(() => import('../../components/RelatedServices'), { ssr: false });
import { 
  Target, 
  BarChart3, 
  Zap, 
  MousePointerClick, 
  TrendingUp, 
  Bot, 
  ShieldCheck, 
  PieChart, 
  RefreshCcw,
  Search,
  ArrowUpRight,
  GanttChartSquare
} from 'lucide-react';

export default function GoogleAdsAutomationBlog() {
  const adFeatures = [
    {
      title: "Smart Bidding (CPA/ROAS)",
      icon: <Target className="text-amber-400" />,
      desc: "Algorithm-driven bidding to ensure you get the maximum conversions within your Target CPA (Cost Per Acquisition)."
    },
    {
      title: "PPC Automation Scripts",
      icon: <Bot className="text-blue-400" />,
      desc: "Custom JavaScript scripts to auto-pause low-performing keywords and reallocate budget in real-time."
    },
    {
      title: "High-Intent Search",
      icon: <Search className="text-emerald-400" />,
      desc: "Focusing on 'Buying Intent' keywords to reduce wasted spend and increase Lead Quality."
    },
    {
      title: "A/B Multivariate Testing",
      icon: <RefreshCcw className="text-purple-400" />,
      desc: "Continuous testing of headlines and descriptions to find the highest performing ad combinations."
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 selection:bg-amber-500/30">
      
      {/* --- HERO SECTION --- */}
      <div className="relative md:pt-20 pt-10 md:pb-20 pb-0 px-6 overflow-hidden">
        
        
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-[1px] w-12 bg-indigo-500"></div>
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">High-Performance SEM</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter md:leading-[1] leading[1.4]">
            Precision <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Paid Search.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
            We don't just run ads; we engineer profit engines. Using advanced 
            <strong className="text-white"> Google Ads Automation</strong>, we eliminate wasted spend 
            and scale your winning campaigns with mathematical precision.
          </p>
        </div>
      </div>

      {/* --- CORE PILLARS GRID --- */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adFeatures.map((item, i) => (
            <div key={i} className="group p-8 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] hover:border-amber-500/30 transition-all duration-300">
              <div className="mb-6 p-4 w-fit bg-slate-950 rounded-2xl border border-slate-800 group-hover:border-amber-500/50 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-white text-sm font-bold mb-3 uppercase tracking-wider">{item.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- DETAILED ENGINEERING CONTENT --- */}
      <article className="max-w-5xl mx-auto px-6 md:py-20 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-16 gap-6">
          
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">The Power of Automation</h2>
              <p className="text-lg leading-relaxed mb-6">
                Manual bidding is a relic of the past. At <strong className="text-white">DIGIELABS</strong>, we deploy 
                custom <strong className="text-white font-semibold">Google Ads Scripts</strong> that monitor your 
                campaigns 24/7. Whether it's weather-based bidding, stock-level automation, or 
                competitor-triggered adjustments, our automation ensures your budget is always where the profit is.
              </p>
              <div className="flex flex-wrap gap-3 not-prose mt-8">
                {['Dynamic Search Ads', 'Performance Max Optimization', 'Negative Keyword Sculpting'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-[10px] text-amber-400 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="p-8 bg-gradient-to-br from-amber-900/20 to-transparent border border-amber-500/20 rounded-[2.5rem] relative md:mb-12 mb-6">
               <ShieldCheck className=" top-6 right-6 text-amber-500/20" size={60} />
               <h3 className="text-xl font-bold text-white mb-4">Mastering Target CPA</h3>
               <p className="text-sm text-slate-400 leading-relaxed">
                 We focus on the metric that actually matters: <strong className="text-white">CPA (Cost Per Acquisition)</strong>. 
                 By feeding high-quality conversion data back into Google’s machine learning models, 
                 we train your account to ignore "click-happy" users and find your highest-value customers 
                 at a lower cost.
               </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">E-commerce & Lead Gen Specialty</h2>
              <p className="text-slate-400 mb-6">
                From Shopify storefronts to complex B2B service websites, we've automated the scaling process. 
                Our team handles everything from <strong className="text-white">Merchant Center</strong> feed 
                optimization for Google Shopping to landing page conversion rate optimization (CRO), 
                ensuring that every click has the highest possible chance of converting.
              </p>
            </section>
          </div>

          {/* SIDEBAR - ROI METRICS */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-amber-600 rounded-[2.5rem] text-[#020617]">
               <h4 className="text-xs font-bold uppercase tracking-widest opacity-80 mb-8">Performance Targets</h4>
               <div className="space-y-6">
                  {[
                    { label: "Avg. ROAS Increase", val: "340%" },
                    { label: "CPA Reduction", val: "-45%" },
                    { label: "Lead Quality Score", val: "9/10" }
                  ].map((stat, i) => (
                    <div key={i}>
                       <div className="text-4xl font-black leading-none">{stat.val}</div>
                       <div className="text-[10px] uppercase font-bold opacity-70 mt-1">{stat.label}</div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] mb-5">
               <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                 <GanttChartSquare size={18} className="text-amber-400" /> 
                 Reporting Deck
               </h4>
               <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                 Every DIGIELABS client receives a live, 24/7 Looker Studio dashboard 
                 covering every metric from Search Impression Share to LTV.
               </p>
               
            </div>
          </aside>
        </div>
      </article>

      {/* --- CTA SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="md:p-16 p-6 pt-16 pb-16 bg-slate-900 border border-slate-800 rounded-[3rem] text-center relative group overflow-hidden">
          <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <TrendingUp size={150} className="absolute -bottom-10 -left-10 opacity-5 -rotate-12" />
          
          <h2 className="md:text-4xl text-3xl font-bold text-white mb-6">Scale Your Revenue, Not Your Workload</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Ready to stop "testing" and start winning? Our Google Ads specialists and 
            automation engineers are ready to build your dominant search presence.
          </p>
          <Link href={"/contact"} className="md:px-12 px-6 py-5 bg-amber-600 hover:bg-amber-500 text-white font-black rounded-2xl shadow-2xl shadow-amber-900/40 transition-all active:scale-95">
            Start Your Audit
          </Link>
        </div>
      </section>
      <RelatedServices/>
      <ReadyToScale/>
    </main>
  );
}