import Link from "next/link";

const serviceGroups = [
  {
    id: "01",
    slug: "web-development",
    title: "Web Development",
    description: "Modern, high-performance web engineering.",
    color: "from-cyan-500 to-blue-500",
    items: ["Next.js & React Frontend", "Laravel, Django & Node Backend", "Database Architecture", "Enterprise Web Systems", "Custom Portals & Dashboards"]
  },
  {
    id: "02",
    slug: "mobile-app-development",
    title: "Application Dev",
    description: "Scalable mobile and desktop ecosystems.",
    color: "from-blue-500 to-purple-500",
    items: ["SaaS Platform Development", "Android & iOS (Native)", "Cross-Platform (Flutter/React Native)", "Business Management Systems"]
  },
   {
    id: "03",
    slug: "wordpress-development",
    title: "WordPress Excellence",
    description: "Professional CMS customization & security.",
    color: "from-blue-400 to-indigo-600",
    items: ["Custom Theme & Plugin Dev", "WordPress API & Automation", "Speed & Security Hardening", "WooCommerce Solutions", "Migration & Maintenance"]
  },
   {
    id: "04",
    title: "Digital Marketing",
    slug: "seo-optimization",
    description: "Results-driven SEO and Ads management.",
    color: "from-fuchsia-500 to-pink-500",
    items: ["Technical & On-Page SEO", "SEO Audits & Performance", "Google Ads Setup & Mgmt", "PPC Automation", "Conversion & Tag Tracking"]
  },
  {
    id: "05",
    slug: "google-ads-automation",
    title: "Automation Solutions",
    description: "End-to-end workflow and process engineering.",
    color: "from-blue-500 to-cyan-400",
    items: ["Business Process Automation", "Workflow Automation", "Task Automation", "Marketing Automation", "Reporting & Dashboard Automation", "Data & File Processing", "Email & Document Generation"]
  },
  {
    id: "06",
    slug: "data-scraping-automation",
    title: "Data & Scraping",
    description: "Automated intelligence and data mining.",
    color: "from-indigo-500 to-purple-500",
    items: ["Web Data Scraping", "Automated Collection Systems", "Competitor & Price Monitoring", "Lead Extraction", "Data Pipeline Automation"]
  },
  {
    id: "07",
    title: "Google Workspace",
    description: "Maximized productivity via Google Ecosystem.",
    color: "from-green-400 to-emerald-500",
    items: ["Apps Script Development", "Sheets & Docs Automation", "Drive & Forms Automation", "Gmail & Calendar Sync", "Automated Reporting Systems"]
  },
  {
    id: "08",
    title: "AI & Intelligent Systems",
    description: "Smart agents and data-driven intelligence.",
    color: "from-purple-500 to-blue-600",
    items: ["AI Chatbots & Support Bots", "Lead Generation Bots", "Content & Email Automation", "Business Insights & Analytics", "System Integrations", "Web & Mobile AI Integration"]
  },
  {
    id: "09",
    title: "API & CRM Solutions",
    description: "Seamless connectivity across your tech stack.",
    color: "from-blue-600 to-indigo-500",
    items: ["Custom API Development", "Third-Party & REST Integration", "Zoho, HubSpot & Salesforce", "CRM Workflow Automation", "Payment & ERP Integration"]
  },
  
 
  
  {
    id: "10",
    title: "Python Development",
    description: "Versatile backend and automation logic.",
    color: "from-yellow-400 to-blue-500",
    items: ["Automation Scripts", "Backend API Development", "Machine Learning Integration", "AI Model Deployment", "Data Analytics Tools"]
  },
 
 
  {
    id: "11",
    title: "Cloud & Infrastructure",
    description: "Reliable, scalable cloud architectures.",
    color: "from-blue-700 to-indigo-900",
    items: ["AWS & Google Cloud Infra", "Server Setup & Management", "DevOps & Docker Deployment", "Scalable System Architecture"]
  },
  {
    id: "12",
    title: "Business Systems",
    description: "Internal tools for operational efficiency.",
    color: "from-slate-500 to-slate-800",
    items: ["Custom CRM/ERP Development", "Inventory & Sales Management", "Workflow Management Systems", "Zapier & Make Automation"]
  }
];

export default function CompleteService() {
  return (
    <section className="bg-[#020617] md:py-14 py-6 px-6 relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className='mb-5 md:mb-10'>
          <h2 className="text-blue-400 font-mono text-xs tracking-[0.5em] uppercase mb-4">Capabilities</h2>
          <h3 className="text-4xl md:text-6xl md:font-black font-semibold text-white tracking-tighter leading-[1.4] mb-6">
            Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">Service Ecosystem.</span>
          </h3>
          <p className="text-slate-500 text-lg max-w-2xl">
            A full-spectrum engineering suite designed to automate, scale, and transform your business operations.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-3">
          {serviceGroups.map((group) => (
            <Link 
              key={group.id} 
              href={group.slug? group.slug: "/services"}
              className="group flex flex-col md:p-8 p-4 rounded-[2.5rem] bg-slate-900/20 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${group.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white font-black`}>
                   {group.id}
                </div>
                <div className="h-[1px] flex-grow bg-slate-800 mx-4 mt-6 group-hover:bg-blue-500/30 transition-colors" />
              </div>

              <h4 className="text-2xl md:font-bold font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {group.title}
              </h4>
              <p className="text-slate-500 text-xs mb-6 font-medium tracking-wide italic">
                {group.description}
              </p>

              <ul className="space-y-3 mt-auto">
                {group.items.map((item, k) => (
                  <li key={k} className="flex items-start gap-3 text-slate-400 text-sm hover:text-white transition-colors">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 shadow-[0_0_8px_transparent] group-hover:shadow-blue-500/50 transition-all" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 blur-3xl pointer-events-none group-hover:opacity-5 transition-opacity duration-700`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}