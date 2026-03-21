'use client'
import { motion } from 'framer-motion';
export default function BlogMotion(){
    return(
        <>
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
                        className="text-5xl md:text-8xl md:font-black font-bold text-white mb-8 tracking-tighter md:leading-[1] leading-[1.4]"
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
        </>
    )
}