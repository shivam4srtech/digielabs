
import { 
  Globe, 
  Smartphone, 
  DatabaseZap, 
  Code2, 
  Search, 
  LineChart, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';
import { FaWordpressSimple } from "react-icons/fa";

export default function RelatedServices() {
  const services = [
    { name: "Web Development", icon: <Globe />, color: "from-blue-500/10", glow: "group-hover:shadow-blue-900/40", slug: "web-development" },
    { name: "Mobile App Development", icon: <Smartphone />, color: "from-purple-500/10", glow: "group-hover:shadow-purple-900/40", slug: "mobile-app-development" },
    { name: "Data Scraping & Automation", icon: <DatabaseZap />, color: "from-emerald-500/10", glow: "group-hover:shadow-emerald-900/40", slug: "data-scraping-automation" },
    { name: "WordPress Development", icon: <FaWordpressSimple />, color: "from-cyan-500/10", glow: "group-hover:shadow-cyan-900/40", slug: 'wordpress-development' },
    { name: "SEO Optimization", icon: <Search />, color: "from-amber-500/10", glow: "group-hover:shadow-amber-900/40", slug: "seo-optimization" },
    { name: "Google Ads Automation", icon: <LineChart />, color: "from-red-500/10", glow: "group-hover:shadow-red-900/40", slug: "google-ads-automation" },
  ];

  return (
    <section className="relative py-10 overflow-hidden bg-[#020617] p-6">
      {/* Background Glow Effect */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end  md:mb-16 mb-8 gap-6">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
              Complementary Intelligence
            </span>
            <h2 className="text-4xl md:text-5xl md:font-extrabold font-bold text-white mt-4 tracking-tight leading-tight">
              Explore More of Our <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Service Ecosystem</span>
            </h2>
          </div>
          
          <button className="group flex items-center gap-2.5 px-6 py-3.5 bg-slate-900 border border-slate-800 text-white font-bold rounded-2xl hover:bg-white hover:text-black transition-all">
            View All Services 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link 
             href={service.slug? service.slug: "/services"}
              key={index}
              className={`group p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-indigo-500/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden ${service.glow}`}
            >
              {/* Card Title & Icon */}
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-xl font-bold text-white leading-tight group-hover:text-indigo-200 transition-colors">
                  {service.name}
                </h4>
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${service.color} to-transparent text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all`}>
                  {service.icon}
                </div>
              </div>

              {/* View Details Link */}
              <div className="flex items-center gap-2 mt-8 text-sm text-indigo-400 font-medium tracking-wide">
                View Details
                <ArrowRight size={14} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>

              {/* Design Element: Bottom Gradient Shine */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo-950/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}