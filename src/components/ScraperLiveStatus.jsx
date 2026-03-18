'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Server, Globe, ShieldCheck, Database, Cpu } from 'lucide-react';

export default function ScraperLiveStatus() {
  const [logs, setLogs] = useState([
    "Initializing Headless Browser...",
    "Proxy Rotation: Node-742 Active",
    "Target: e-commerce-api.v3/products",
  ]);

  // Simulate live terminal logs
  useEffect(() => {
    const messages = [
      "Bypassing Cloudflare WAF...",
      "Status 200: Data Extracted (Item #829)",
      "Rotating IP to Residential (US-East)",
      "Parsing JSON Structure...",
      "Data Normalization Complete",
      "Pushing to BigQuery Cluster...",
      "Cleaning XSS injection patterns...",
      "Validation: Schema Match 100%"
    ];

    const interval = setInterval(() => {
      setLogs((prev) => [...prev.slice(-4), messages[Math.floor(Math.random() * messages.length)]]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-950 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl mb-5">
      {/* Dashboard Header */}
      <div className="p-6 border-b border-slate-800 bg-slate-900/50 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
          </div>
          <h3 className="text-white font-bold tracking-tight">System Live Monitor</h3>
        </div>
        <div className="flex gap-4 text-[10px] font-mono uppercase tracking-widest text-slate-500">
          <span className="flex items-center gap-1.5"><Server size={12} className="text-indigo-400" /> Node: v8.2</span>
          <span className="flex items-center gap-1.5"><Globe size={12} className="text-emerald-400" /> Latency: 42ms</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Stats Panel */}
        <div className="lg:col-span-4 p-8 border-r border-slate-800 space-y-8">
          {[
            { label: "Extraction Speed", val: "420 req/sec", progress: "w-[85%]", color: "bg-emerald-500" },
            { label: "Success Rate", val: "99.82%", progress: "w-[99%]", color: "bg-indigo-500" },
            { label: "Proxy Health", val: "Stable", progress: "w-[70%]", color: "bg-blue-500" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                <span>{stat.label}</span>
                <span className="text-white">{stat.val}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                <div className={`${stat.progress} h-full ${stat.color} transition-all duration-1000`}></div>
              </div>
            </div>
          ))}
          
          <div className="pt-4 flex flex-wrap gap-2">
             <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[9px] font-bold rounded uppercase">TLS 1.3</span>
             <span className="px-2 py-1 bg-indigo-500/10 text-indigo-500 text-[9px] font-bold rounded uppercase">HTTP/3</span>
             <span className="px-2 py-1 bg-purple-500/10 text-purple-500 text-[9px] font-bold rounded uppercase">Anti-Fingerprint</span>
          </div>
        </div>

        {/* Center Live Terminal */}
        <div className="lg:col-span-5 p-6 bg-black/40 font-mono text-xs overflow-hidden h-[300px] flex flex-col justify-end">
          <div className="space-y-2 transition-all duration-500">
            {logs.map((log, i) => (
              <div key={i} className={`flex gap-3 ${i === logs.length - 1 ? 'text-emerald-400' : 'text-slate-500'}`}>
                <span className="opacity-30">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                <span className="flex-1 truncate">{log}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-white">
              <span className="animate-pulse">_</span>
              <span>Listening for incoming target requests...</span>
            </div>
          </div>
        </div>

        {/* Right Icon Metrics */}
        <div className="lg:col-span-3 p-8 flex flex-col justify-between bg-slate-900/20">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400">
              <Database size={32} />
            </div>
            <div className="text-3xl font-black text-white">2.4 TB</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Data Processed Today</div>
          </div>
          <div className="text-center pt-6 border-t border-slate-800">
            <div className="text-2xl font-bold text-indigo-400">92k+</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Active Scraping Jobs</div>
          </div>
        </div>
      </div>
    </div>
  );
}