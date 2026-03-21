
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';
import Header from '../components/Header'
import CookieConsent from '../components/CookieConsent';
import GoogleAnalytics from '../components/GoogleAnalytics';

import "./globals.css";
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
  display: 'swap',
})
export const metadata = {
  title: "DigieLABS | Custom Web & Mobile App Development Agency",
  description: "Scale your business with DigieLABS. We specialize in custom web development, robust mobile apps, SEO optimization, and data-driven marketing. Get a free proposal!",
  keywords: ["web development agency", "mobile app development","custom software solutions", "SEO optimization services", "Google Ads management"," WordPress development", "backend engineering", "data scraping", "DigieLABS"],
  metadataBase: new URL("https://digielabs.com"),

  openGraph: {
    title: "DigieLABS | Custom Web & Mobile App Development Agency",
    description: "Scale your business with DigieLABS. We specialize in custom web development, robust mobile apps, SEO optimization, and data-driven marketing. Get a free proposal!",
    url: "https://digielabs.com",
    siteName: "digieLABS",
    images: [
      {
        url: "/images/icon.png",
        width: 1200,
        height: 630,
        alt: "digieLABS",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DigieLABS | Custom Web & Mobile App Development Agency",
    description: "Scale your business with DigieLABS. We specialize in custom web development, robust mobile apps, SEO optimization, and data-driven marketing. Get a free proposal!",
    images: ["/images/icon.png"],
  },

  alternates: {
    canonical: "./",
  },

  robots: {
    index: false,
    follow: false,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header/>
          {children}
        <Footer/>  
        <WhatsAppButton/>
        <CookieConsent/>
        <GoogleAnalytics/>
      </body>
    </html>
  );
}
