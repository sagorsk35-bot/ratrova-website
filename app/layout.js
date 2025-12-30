import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'RATROVA Creative Labs | Bangladesh\'s First Luxury Packaging Design Agency',
  description: 'Before form, there is meaning. Before beauty, there is belief. RATROVA is Bangladesh\'s premier luxury packaging design agency.',
  keywords: 'packaging design bangladesh, luxury branding dhaka, brand identity, ratrova',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
