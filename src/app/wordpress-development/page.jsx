'use client'
import dynamic from 'next/dynamic';
import Link from 'next/link'
const ReadyToScale = dynamic(() => import('../../components/ReadyToScale'), { ssr: false });
const RelatedServices = dynamic(() => import('../../components/RelatedServices'), { ssr: false });
import { 
  Layout, 
  Blocks, 
  ShoppingCart, 
  Zap, 
  ShieldCheck, 
  Search, 
  Code2, 
  Paintbrush,
  Globe,
  ArrowUpRight,
} from 'lucide-react';
import { FaWordpressSimple } from "react-icons/fa";

export default function WordPressEngineeringBlog() {
  const wpCapabilities = [
    {
      title: "Custom Theme Development",
      icon: <Paintbrush className="text-cyan-400" />,
      desc: "Moving beyond pre-made templates to build high-performance, lightweight themes from scratch."
    },
    {
      title: "WooCommerce Ecosystems",
      icon: <ShoppingCart className="text-purple-400" />,
      desc: "Scalable e-commerce solutions with custom payment gateways and inventory sync."
    },
    {
      title: "Custom Plugin Engineering",
      icon: <Code2 className="text-blue-400" />,
      desc: "Tailored PHP functionality to solve specific business logic that off-the-shelf plugins can't handle."
    },
    {
      title: "Advanced Page Builders",
      icon: <Layout className="text-emerald-400" />,
      desc: "Expert-level Elementor and Gutenberg optimization for pixel-perfect, editable layouts."
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 selection:bg-cyan-500/30">
      
      {/* --- HERO SECTION --- */}
      <div className="relative md:pt-20 pt-10 md:pb-14 pb-0 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full -z-10"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-[1px] w-12 bg-indigo-500"></div>
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">Enterprise CMS Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter md:leading-[1] leading-[1.2]">
            WordPress <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Re-Engineered.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
            We transform the world’s most popular CMS into a high-octane business engine. 
            No bloat. No security holes. Just pure, scalable performance.
          </p>
        </div>
      </div>

      {/* --- CAPABILITIES GRID --- */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wpCapabilities.map((item, i) => (
            <div key={i} className="group md:p-8 p-4 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] hover:border-cyan-500/30 transition-all duration-300">
              <div className="mb-6 p-4 w-fit bg-slate-950 rounded-2xl border border-slate-800 group-hover:border-cyan-500/50 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-white text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CORE CONTENT --- */}
      <article className="max-w-5xl mx-auto px-6 py-6 md:py-20 pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-16 md-8">
          
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Why WordPress for Enterprise?</h2>
              <p className="text-lg leading-relaxed mb-6">
                WordPress powers over 40% of the web, but most installations suffer from "Plugin Bloat." 
                At <strong className="text-white font-semibold">DIGIELABS</strong>, we take a developer-first approach. 
                We use WordPress as a robust backend while ensuring the frontend remains lightning-fast and SEO-optimized.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
                  <Zap size={18} className="text-yellow-400" />
                  <span className="text-sm font-medium">90+ Core Web Vitals Score</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
                  <ShieldCheck size={18} className="text-emerald-400" />
                  <span className="text-sm font-medium">Hardened Security Architecture</span>
                </div>
              </div>
            </section>

            <section className="p-8 bg-gradient-to-br from-cyan-900/20 to-transparent border border-cyan-500/20 rounded-[2.5rem]">
               <h3 className="text-xl font-bold text-white mb-4">The Elementor & Gutenberg Edge</h3>
               <p className="text-sm text-slate-400 leading-relaxed mb-6">
                 We bridge the gap between "Hard-Coded" and "User-Friendly." Our team builds 
                 <strong className="text-white"> Custom Elementor Widgets</strong> and 
                 <strong className="text-white"> Gutenberg Blocks</strong>, giving your marketing team 
                 the power to edit pages without ever touching a line of code or breaking the layout.
               </p>
               <Link href={"/services"} className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                 Learn about our design process <ArrowUpRight size={14} />
               </Link>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">WooCommerce Mastery</h2>
              <p className="text-slate-400 mb-6">
                Scaling an online store requires more than a simple setup. We specialize in 
                WooCommerce performance optimization, managing high SKU volumes, and integrating 
                complex third-party logistics (3PL) and ERP systems directly into your WordPress dashboard.
              </p>
            </section>
          </div>

          {/* SIDEBAR - TECH SPEC */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-cyan-600 rounded-[2.5rem] text-[#020617]">
               <h4 className="text-xs font-bold uppercase tracking-widest opacity-80 mb-6">Tech Stack</h4>
               <ul className="space-y-4 font-bold text-sm">
                  <li className="flex items-center justify-between border-b border-black/10 pb-2">
                    <span>Language</span>
                    <span className="font-mono bg-white/20 px-2 py-0.5 rounded">PHP 8.3+</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-black/10 pb-2">
                    <span>Database</span>
                    <span className="font-mono bg-white/20 px-2 py-0.5 rounded">MySQL/MariaDB</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-black/10 pb-2">
                    <span>Frontend</span>
                    <span className="font-mono bg-white/20 px-2 py-0.5 rounded">React / Tailwind</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Server</span>
                    <span className="font-mono bg-white/20 px-2 py-0.5 rounded">Nginx / Redis</span>
                  </li>
               </ul>
            </div>

            <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem]">
               <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                 <Blocks size={18} className="text-cyan-400" /> 
                 Integrations
               </h4>
               <div className="flex flex-wrap gap-2">
                  {['Stripe', 'PayPal', 'Mailchimp', 'HubSpot', 'Zapier', 'Google Analytics 4'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-[10px] text-slate-400">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>
          </aside>
        </div>
      </article>
      <ReadyToScale/>
      <RelatedServices/>
    </main>
  );
}