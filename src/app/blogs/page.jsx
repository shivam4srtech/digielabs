'use client'
import dynamic from 'next/dynamic';
import Link from 'next/link'
const ReadyToScale = dynamic(() => import('../../components/ReadyToScale'), { ssr: false });
const RelatedServices = dynamic(() => import('../../components/RelatedServices'), { ssr: false });
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';

export default function BlogArchive() {
  const blogs = [
    {
      title: "High-Performance Web Engineering",
      category: "Web Application",
      slug: "web-development",
      desc: "From architectural blueprints to cloud-native deployment. We build dynamic, scalable web applications that power modern enterprises.",
      date: "Mar 8, 2026",
      readTime: "6 min",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Mobile App Development",
      category: "Mobile App",
      slug: "mobile-app-development",
      desc: "Architecting high-concurrency mobile platforms using Swift, Kotlin, and React Native.",
      date: "Mar 12, 2026",
      readTime: "6 min",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Data Scraping & automation",
      category: "Data & Automation",
      slug: "data-scraping-automation",
      desc: "How we use Headless Browsers and Proxy Rotation to extract enterprise-scale data.",
      date: "Mar 10, 2026",
      readTime: "8 min",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "WordPress Re-Engineered",
      category: "Web Dev",
      slug: "wordpress-development",
      desc: "Transforming the world's most popular CMS into a high-octane headless business engine.",
      date: "Mar 08, 2026",
      readTime: "5 min",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Technical SEO Authority",
      category: "SEO",
      slug: "seo-optimization",
      desc: "Dominating SERPs through Core Web Vitals and Semantic Relevance strategies.",
      date: "Mar 05, 2026",
      readTime: "7 min",
      gradient: "from-indigo-500 to-rose-500"
    },
    {
      title: "Precision Paid Search",
      category: "Ads",
      slug: "google-ads-automation",
      desc: "Scaling revenue through script-based bidding and CPA optimization techniques.",
      date: "Mar 01, 2026",
      readTime: "4 min",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 pb-24">
      
      {/* --- DYNAMIC HEADER --- */}
      <section className="relative md:pt-20 pt-10 md:pb-20 pb-10 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold tracking-[0.3em] uppercase text-indigo-400"
          >
            DigieLabs Insights
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl md:font-black font-bold text-white mb-8 tracking-tighter md:leading-[1] leading:[1.4]"
          >
            Engineering <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Perspectives.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Deep dives into the tech stacks, automation scripts, and growth strategies 
            powering the next generation of digital-first companies.
          </motion.p>
        </div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col bg-slate-900/40 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
            >
              {/* Card Header Gradient */}
              <div className={`h-48 w-full bg-gradient-to-br ${blog.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500 relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-white/10 font-black text-8xl select-none">{blog.category[0]}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span className="flex items-center gap-1"><Calendar size={12}/> {blog.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12}/> {blog.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-1">
                  {blog.desc}
                </p>

                <Link 
                  href={`/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-white font-bold text-sm group/link"
                >
                  Read Architecture 
                  <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform text-indigo-500" />
                </Link>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <ReadyToScale/>
      <RelatedServices/>
     
    </main>
  );
}