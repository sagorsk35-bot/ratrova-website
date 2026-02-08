'use client'

import Link from 'next/link'

// Inline SVG Icons
const BoxIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
)

const TargetIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

export default function Services() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050505' }}>

      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-[2px] mx-auto mb-8" style={{ backgroundColor: '#D4AF37' }}></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
            Two Pillars. <span style={{ color: '#D4AF37' }}>One Mission.</span>
          </h1>
          <p className="text-xl" style={{ color: '#888888' }}>
            Everything we do serves one goal: elevating Bangladesh on the global stage.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Service 1: Export-Quality Packaging */}
            <div className="p-10 transition-all duration-500 hover:scale-[1.02]" style={{ backgroundColor: '#0F0F0F', border: '2px solid #D4AF37' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 flex items-center justify-center" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid #D4AF37' }}>
                  <span style={{ color: '#D4AF37' }}><BoxIcon /></span>
                </div>
                <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)', color: '#D4AF37' }}>Hardware</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>Export-Quality Packaging</h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#888888' }}>
                World-class structural design, material science, and production-ready engineering.
                Built for the global shelf.
              </p>

              <ul className="space-y-4 mb-10">
                {['3D Structural Design & Prototyping', 'Food-Safe & Eco-Friendly Materials', 'Production-Ready Dielines', 'FDA & EU Compliance Ready', 'Vendor Coordination & QC'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span style={{ color: '#006A4E' }}><CheckIcon /></span>
                    <span style={{ color: '#AAAAAA' }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="aspect-video flex items-center justify-center" style={{ backgroundColor: '#111111', border: '1px dashed #333333' }}>
                <div className="text-center">
                  <span style={{ color: '#333333' }}><BoxIcon /></span>
                  <p className="text-xs mt-2" style={{ color: '#444444' }}>3D Packaging Preview</p>
                </div>
              </div>
            </div>

            {/* Service 2: Brand Strategy Consulting */}
            <div className="p-10 transition-all duration-500 hover:scale-[1.02]" style={{ backgroundColor: '#0F0F0F', border: '2px solid #006A4E' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 106, 78, 0.1)', border: '1px solid #006A4E' }}>
                  <span style={{ color: '#006A4E' }}><TargetIcon /></span>
                </div>
                <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: 'rgba(0, 106, 78, 0.2)', color: '#006A4E' }}>Software</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>Brand Strategy Consulting</h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#888888' }}>
                1-on-1 consultation with Sheikh Mohammad Sagor.
                Positioning your brand for 2030 and beyond.
              </p>

              <ul className="space-y-4 mb-10">
                {['Brand DNA & Identity Development', 'Competitive Market Analysis', 'Export Market Advisory', 'Consumer Psychology Mapping', 'Shelf Attention Strategy'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span style={{ color: '#D4AF37' }}><CheckIcon /></span>
                    <span style={{ color: '#AAAAAA' }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6" style={{ backgroundColor: '#111111', borderLeft: '3px solid #D4AF37' }}>
                <p className="text-sm italic" style={{ color: '#D4AF37' }}>
                  "Offered as Sadaqah Jariyah — FREE for serious founders building for Bangladesh."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#050505', borderTop: '1px solid #1a1a1a' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Ready to Build Your <span style={{ color: '#D4AF37' }}>Global Brand?</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: '#888888' }}>
            Whether you need physical packaging or strategic guidance, we're here to serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#006A4E', color: '#FFFFFF', boxShadow: '0 0 40px rgba(0, 106, 78, 0.4)' }}
            >
              Book Consultation
              <ArrowRightIcon />
            </Link>
            <a
              href="/lesson-01.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'transparent', color: '#D4AF37', border: '2px solid #D4AF37' }}
            >
              Get Free Lesson
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
