
const stats = [
  { label: 'Projects Delivered', value: '150+', color: 'text-blue-400' },
  { label: 'Client Satisfaction', value: '99%', color: 'text-purple-400' },
  { label: 'Expert Engineers', value: '25+', color: 'text-blue-400' },
  { label: 'Years Experience', value: '8+', color: 'text-purple-400' },
];

export default function AboutPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">
      {/* Hero Section: The Vision */}
      <section className="relative md:pt-26 pt-8 pb-5 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-600/10 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Our DNA</h2>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.4]">
            Turning Binary Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Business Value.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We aren't just a development agency; we are a high-performance engineering lab. 
            We bridge the gap between complex code and intuitive user experiences.
          </p>
        </div>
      </section>

      {/* Stats Section: Glassmorphism  */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-sm text-center hover:border-slate-700 transition-colors">
                <p className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}>{stat.value}</p>
                <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The "Why Us" Section: Split Feature */}
      <section className="py-24 px-6 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Unique Decorative Image Placeholder */}
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800')] opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
               <div className="absolute bottom-8 left-8">
                 <p className="text-2xl font-bold italic">"Code is poetry in motion."</p>
               </div>
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-blue-600 shadow-xl shadow-blue-900/40 hidden md:block">
               <p className="text-white font-bold">Innovation First</p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              A Partnership, Not a <span className="text-blue-400 italic">Project.</span>
            </h3>
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                Founded in 2026, our mission was simple: to eliminate the friction between business goals and technical execution. We realized that most "vendors" just follow tickets. We wanted to lead strategy.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "Transparency", desc: "Real-time access to our dev environment." },
                  { title: "Velocity", desc: "Agile sprints that deliver MVP in weeks, not months." },
                  { title: "Scale", desc: "Future-proof architecture built for millions of users." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">✓</span>
                    <div>
                      <strong className="text-white block">{item.title}</strong>
                      {item.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto p-12 rounded-[3rem] bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/5 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to evolve your digital presence?</h2>
          <button className="px-10 py-4 rounded-full bg-white text-black font-bold hover:bg-blue-400 hover:text-white transition-all transform hover:scale-105">
            Join the Journey
          </button>
        </div>
      </section>
    </main>
  );
}