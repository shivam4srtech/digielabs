
'use client'; 
import { Typewriter } from 'react-simple-typewriter';

export default function TypingHero() {
  
  // Define the list of services to type through
  const serviceList = [
    'Web Development',
    'App Development',
    'SEO Optimization',
    'Google Ads',
    'Application Development',
    'WordPress Customization',
    'Shopify'
  ];

  return (
    <div className="flex items-center justify-center mb-6">
      <h1 className="text-[20px] md:text-3xl lg:text-4xl font-bold tracking-tight text-white flex items-center flex-col md:flex-row gap-x-3">
        {/* Static part of the headline (White Text) */}
        <span className='md:font-bold font-semibold'>Crafting Next-Gen Solutions For</span>

        {/* Dynamic part of the headline (Lime Green Text + Cursor) */}
        <span className="md:font-bold font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center">
          <Typewriter
            words={serviceList}
            loop={0} // 0 means it will loop infinitely
            cursor
            cursorStyle='|'
            typeSpeed={80} // Speed of typing in ms
            deleteSpeed={50} // Speed of deleting in ms
            delaySpeed={1500} // How long to pause on a full word
          />
        </span>
      </h1>
    </div>
  );
}