'use client'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';
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

 

export default function BlogGrid(){
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
    return(
        <>
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
        </>
    )
}