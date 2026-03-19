'use client'
import dynamic from 'next/dynamic';
import Link from 'next/link'
const ReadyToScale = dynamic(() => import('../../components/ReadyToScale'), { ssr: false });
const RelatedServices = dynamic(() => import('../../components/RelatedServices'), { ssr: false });
import Pricing from '../../components/Pricing';
const ScheduleModal = dynamic(() => import('../../components/ScheduleModal'), { ssr: false });
import { 
  Smartphone, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Code2,
  Apple,
  Play,
  Share2,
  Settings2,
  Activity
} from 'lucide-react';

export default function MobileEngineeringBlog() {
  const techStacks = [
    {
      category: "Native Development",
      description: "For performance-critical apps requiring full hardware access.",
      items: [
        { name: "Swift & SwiftUI", platform: "iOS", icon: <Apple size={20} />, color: "text-orange-500" },
        { name: "Kotlin & Jetpack Compose", platform: "Android", icon: <Play size={20} />, color: "text-green-500" }
      ]
    },
    {
      category: "Cross-Platform Frameworks",
      description: "Unified codebases with 99% code sharing for rapid market entry.",
      items: [
        { name: "React Native", platform: "iOS & Android", icon: <Share2 size={20} />, color: "text-blue-400" },
        { name: "Flutter", platform: "iOS & Android", icon: <Layers size={20} />, color: "text-cyan-400" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 selection:bg-indigo-500/30">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <div className="relative md:pt-20 pt-8 md:pb-20 pb-4 px-6 overflow-hidden">
        {/* Modern Aura Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-indigo-500"></div>
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">Enterprise Mobile Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl md:font-black font-semibold text-white md:mb-8 mb-4 tracking-tighter leading-[1.4]">
            Next-Gen <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Mobile Systems.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
            We architect high-concurrency mobile applications using industry-leading stacks. 
            From <span className="text-white font-medium">Native Swift</span> to <span className="text-white font-medium">React Native</span>, 
            we deploy excellence on every screen.
          </p>
        </div>
      </div>
      <div>
            <ScheduleModal/>
      </div>
      {/* --- TECH STACK GRID --- */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techStacks.map((stack, idx) => (
            <div key={idx} className="p-8 bg-slate-900/30 border border-slate-800 rounded-[2rem] backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-2">{stack.category}</h3>
              <p className="text-sm text-slate-500 mb-8">{stack.description}</p>
              
              <div className="space-y-4">
                {stack.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-950/50 border border-slate-800/50 rounded-2xl group hover:border-indigo-500/50 transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`${item.color} bg-slate-900 p-3 rounded-xl`}>{item.icon}</div>
                      <div>
                        <div className="text-white font-bold">{item.name}</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest">{item.platform}</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-slate-800 group-hover:bg-indigo-500 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- DETAILED ENGINEERING CONTENT --- */}
      <article className="max-w-5xl mx-auto px-6 md:py-10 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-7 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Native Performance, Zero Compromise</h2>
              <p className="text-lg leading-relaxed text-slate-400 mb-6">
                For applications requiring deep hardware integration—such as AR/VR, complex biometric processing, or heavy GPU utilization—we utilize <strong className="text-white font-semibold">Swift (iOS)</strong> and <strong className="text-white font-semibold">Kotlin (Android)</strong>.
              </p>
              <p className="text-slate-400">
                This approach ensures your app leverages the latest OS features (like Dynamic Island on iOS or Material You on Android) the day they are released, providing a premium, non-laggy experience.
              </p>
            </section>

            <section className="relative p-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl">
               <div className="bg-slate-950 md:p-8 p-4 rounded-[calc(1.5rem-1px)]">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Activity size={20} className="text-indigo-400" /> State-of-the-art Middleware
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Our apps don't just look good; they think fast. We implement <strong className="text-white">Redux, MobX, or Riverpod</strong> for state management, ensuring that data flows across your application with zero synchronization lag, even in offline environments.
                  </p>
               </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">The Hybrid Revolution</h2>
              <p className="text-slate-400 mb-6">
                When time-to-market is the priority, <strong className="text-white">React Native</strong> and <strong className="text-white">Flutter</strong> are our tools of choice. We engineer these apps to be indistinguishable from native ones by optimizing the "JavaScript Bridge" and using custom Native Modules for specific heavy tasks.
              </p>
            </section>
          </div>

          {/* SIDEBAR METRICS */}
          <aside className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white">
               <h4 className="text-xs font-bold uppercase tracking-widest opacity-80 mb-8">Performance Targets</h4>
               <div className="space-y-8">
                  {[
                    { label: "Startup Time", val: "< 1.2s" },
                    { label: "Frame Rate", val: "60-120 FPS" },
                    { label: "Crash-Free Rate", val: "99.9%" }
                  ].map((stat, i) => (
                    <div key={i}>
                       <div className="text-4xl font-black">{stat.val}</div>
                       <div className="text-xs uppercase font-bold opacity-70">{stat.label}</div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem]">
               <Settings2 className="text-indigo-400 mb-4" />
               <h4 className="text-white font-bold mb-4">API-First Logic</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                 Every app we build communicates through secure <strong className="text-slate-300">gRPC or RESTful</strong> endpoints, ensuring that your mobile app is just one part of a unified digital ecosystem.
               </p>
            </div>
          </aside>
        </div>
        <div>
            <Pricing/>
        </div>
      </article>

      <ReadyToScale/>
      <RelatedServices/>
    </main>
  );
}