import ServicesSection from "../components/ServicesSection";
import TypingHero from "../components/TypingHero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative w-full bg-slate-950 overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 pb-4">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-300 md:mb-8 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            Your Vision, Expertly Engineered
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-7xl font-extrabold text-white tracking-tight md:mb-8 mb-4 md:leading-[90px] leading-[1.4]">
            Build Digital Experiences <br className="hidden md:block" />
            That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Drive Results</span>
          </h1>

          {/* Subheadline */}
          {/* <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            From robust web and mobile applications to high-converting SEO and Google Ads campaigns. We are your end-to-end growth and development partners.
          </p> */}
          <TypingHero/>

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-3 md:mb-12 mb-6 max-w-3xl mx-auto">
            {['Frontend Dev', 'Backend Dev', 'Mobile Apps', 'Web Apps', 'SEO Optimization', 'Google Ads'].map((service) => (
              <span 
                key={service} 
                className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-800 hover:border-slate-500 transition-colors cursor-default"
              >
                {service}
              </span>
            ))}
          </div>


        </div>

        {/* Optional: Bottom fade transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
    <ServicesSection/>
    </>
  );
}
