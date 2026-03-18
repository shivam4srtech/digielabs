'use client'
import dynamic from 'next/dynamic';
import Link from 'next/link'
const ReadyToScale = dynamic(() => import('../../components/ReadyToScale'), { ssr: false });
const RelatedServices = dynamic(() => import('../../components/RelatedServices'), { ssr: false });
import { 
  Code2, 
  Cpu, 
  Layers, 
  Globe, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Database,
  Server
} from 'lucide-react';


export default function WebDevelopmentServiceBlog() {
  const techStack = [
    { name: "Frontend", tools: "React, Next.js, Tailwind CSS", icon: <Globe className="text-blue-400" /> },
    { name: "Backend", tools: "Node.js, Laravel (PHP), Python", icon: <Server className="text-purple-400" /> },
    { name: "Database", tools: "PostgreSQL, MongoDB, Redis", icon: <Database className="text-emerald-400" /> },
    { name: "DevOps", tools: "AWS, Docker, Vercel, CI/CD", icon: <Cpu className="text-amber-400" /> },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-indigo-500/30">
      
      {/* --- HERO SECTION --- */}
      <div className="relative pt-10 md:pt-24 md:pb-16 px-6 text-center overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full -z-10"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Engineering Excellence
          </div>
          
          <h1 className="text-3xl md:text-7xl font-extrabold font-semobold text-white mb-6 tracking-tight leading-[1.4]">
            High-Performance <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Web Engineering
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From architectural blueprints to cloud-native deployment. We build dynamic, 
            scalable web applications that power modern enterprises.
          </p>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <article className="max-w-5xl mx-auto px-6 py-12">
        
        {/* The Triple Threat: Design, Develop, Deploy */}
        <section className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 md:mb-24 mb-12">
          {[
            { title: "Design", desc: "User-centric UI/UX focused on conversion and intuitive flows.", color: "from-blue-500/20" },
            { title: "Develop", desc: "Clean, maintainable code using modern frameworks and AI-assisted logic.", color: "from-indigo-500/20" },
            { title: "Deploy", desc: "Automated pipelines ensuring 99.9% uptime and global scalability.", color: "from-purple-500/20" },
          ].map((item, i) => (
            <div key={i} className={`p-8 rounded-3xl bg-gradient-to-b ${item.color} to-transparent border border-white/5`}>
              <div className="text-white text-xl font-bold mb-3">0{i+1}. {item.title}</div>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Detailed Service Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-6">
          <div className="lg:col-span-8 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code2 className="text-indigo-500" /> Full-Stack Mastery
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Our approach to web development is holistic. We don't believe in "one size fits all." 
                By utilizing <strong className="text-white">Next.js and React</strong> for the frontend, we deliver 
                lightning-fast user interfaces with optimized SEO right out of the box.
              </p>
              <p className="text-slate-400">
                Whether it's the robust enterprise capabilities of <strong className="text-white">Laravel (PHP)</strong>, 
                the real-time speed of <strong className="text-white">Node.js</strong>, or the data-crunching 
                prowess of <strong className="text-white">Python</strong>, our backend systems are built to 
                withstand high-traffic loads and secure data processing.
              </p>
            </section>

            <section className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={100} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Why Scalability Matters</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                As your business grows, your infrastructure must adapt. Our applications 
                utilize microservices and containerization (Docker) to ensure that adding 
                new features or handling more users never results in a performance bottleneck.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <ShieldCheck className="text-emerald-500" /> Security by Design
              </h2>
              <p className="text-slate-400">
                In a digital-first world, your web application is your fortress. We implement 
                multi-layer authentication, encrypted data storage, and rigorous API validation 
                to ensure your intellectual property and user data remain untouchable.
              </p>
            </section>
          </div>

          {/* Sidebar Tech Stack */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-3xl sticky top-24">
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                <Layers size={18} className="text-indigo-400" /> Core Tech Stack
              </h4>
              <div className="space-y-6">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center gap-3 mb-2">
                      {tech.icon}
                      <span className="text-white font-medium text-sm">{tech.name}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-mono tracking-wider">{tech.tools}</p>
                    {idx !== techStack.length - 1 && <div className="mt-4 border-b border-slate-800"></div>}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* "You May Also Interested In" Section */}
        <RelatedServices/>
      </article>

      {/* --- Ready to sacle lazyLoaded --- */}
      <ReadyToScale/>
     
    </main>
  );
}