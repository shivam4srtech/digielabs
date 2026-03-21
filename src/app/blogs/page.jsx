
import ReadyToScale from '../../components/ReadyToScale'
import RelatedServices from '../../components/RelatedServices'
import BlogMotion from '../../components/BlogMotion'
import BlogGrid from '../../components/BlogGrid'

import ScheduleModal from '../../components/ScheduleModal'
export const metadata = {
  title: "DigieLABS Blog | Tech Insights, Web Dev & SEO Trends",
  description: "Read the latest insights from the DigieLABS team. Stay updated on web development trends, mobile app engineering, SEO strategies, and digital growth.",
  keywords: [
    "tech blog", 
    "web development insights", 
    "SEO trends", 
    "mobile app development news", 
    "digital marketing updates", 
    "software engineering blog", 
    "technology articles",
    "DigieLABS news"
  ],
};
export default function BlogArchive() {

 

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 pb-24">
      
      <BlogMotion/>
      <div className='py-10 px-3'>
          <ScheduleModal/>
      </div>
      <BlogGrid/>
      <ReadyToScale/>
      <RelatedServices/>
     
    </main>
  );
}