// ClerkProvider enabled - authentication active
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  title: 'Mission 2030 | Building Bangladesh\'s Next Global Brands',
  description: 'Vision 2030 Initiative by Sheikh Mohammad Sagor. 18 years of packaging mastery, 100% free knowledge. Export-quality packaging and brand strategy consulting.',
  keywords: 'mission 2030, bangladesh packaging, brand strategy, export quality packaging, sheikh mohammad sagor, vision 2030',
  openGraph: {
    title: 'Mission 2030 | Building Bangladesh\'s Next Global Brands',
    description: 'Vision 2030 Initiative - 18 years of packaging mastery, 100% free knowledge.',
    url: 'https://ratrova.com',
    siteName: 'Mission 2030',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mission 2030 | Building Bangladesh\'s Next Global Brands',
    description: 'Vision 2030 Initiative - 18 years of packaging mastery.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://ratrova.com" />
          {/* Meta Pixel Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1942404820030848');
              fbq('track', 'PageView');
            `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1942404820030848&ev=PageView&noscript=1"
            />
          </noscript>
        </head>
        <body className="antialiased">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  )
}
