'use client'

// Inline SVG Icons
const HeartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const AwardIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050505' }}>

      {/* Hero Section */}
      <section className="pt-32 pb-20" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-[2px] mx-auto mb-8" style={{ backgroundColor: '#D4AF37' }}></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
            The Sadaqah Jariyah <span style={{ color: '#D4AF37' }}>Initiative.</span>
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed" style={{ color: '#888888' }}>
            I am not building an agency. I am building the infrastructure for Bangladesh to rule the global shelf.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-3 opacity-20" style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #006A4E 100%)',
                filter: 'blur(30px)'
              }}></div>
              <img src="/FOUNDER ON MISSION.png" alt="Sheikh Mohammad Sagor" className="relative z-10 w-full max-w-md mx-auto" />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                18 Years. <span style={{ color: '#D4AF37' }}>One Mission.</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#AAAAAA' }}>
                18 years of experience in packaging engineering and brand strategy —
                <strong style={{ color: '#D4AF37' }}> given away for free.</strong>
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#888888' }}>
                In Islam, Sadaqah Jariyah is a continuous charity that benefits people long after
                the giver has passed. By sharing my knowledge freely, I am building a legacy that
                will empower Bangladeshi entrepreneurs for generations.
              </p>

              <div className="p-6" style={{ backgroundColor: '#111111', borderLeft: '3px solid #D4AF37' }}>
                <blockquote className="text-lg italic" style={{ color: '#D4AF37', fontFamily: 'Georgia, serif' }}>
                  "I am not building a company. I am building a legacy for the nation."
                </blockquote>
                <p className="mt-3 text-sm" style={{ color: '#666666' }}>— Sheikh Mohammad Sagor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-20" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 text-center" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                <span style={{ color: '#D4AF37' }}><HeartIcon /></span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>Sadaqah Jariyah</h3>
              <p className="text-sm" style={{ color: '#888888' }}>Knowledge given freely as continuous charity for the ummah.</p>
            </div>

            <div className="p-8 text-center" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 106, 78, 0.1)' }}>
                <span style={{ color: '#006A4E' }}><GlobeIcon /></span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>Global Vision</h3>
              <p className="text-sm" style={{ color: '#888888' }}>Making "Made in Bangladesh" a symbol of world-class quality.</p>
            </div>

            <div className="p-8 text-center" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                <span style={{ color: '#D4AF37' }}><AwardIcon /></span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>18 Years Mastery</h3>
              <p className="text-sm" style={{ color: '#888888' }}>Two decades of global packaging and brand strategy experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2030 Roadmap */}
      <section className="py-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#FFFFFF' }}>
              The <span style={{ color: '#D4AF37' }}>2030 Roadmap</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { year: '2026', title: 'Packaging Hub', desc: 'State-of-the-art facility' },
              { year: '2027', title: 'AI Design Tools', desc: 'Automated solutions for SMEs' },
              { year: '2028', title: 'Design Academy', desc: 'Training next-gen strategists' },
              { year: '2030', title: 'Global Trust', desc: '"Made in BD" = Quality' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 text-center" style={{ backgroundColor: '#0F0F0F', border: '1px solid #222222' }}>
                <p className="text-3xl font-bold mb-2" style={{ color: '#D4AF37' }}>{item.year}</p>
                <p className="font-bold mb-1" style={{ color: '#FFFFFF' }}>{item.title}</p>
                <p className="text-xs" style={{ color: '#666666' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#050505', borderTop: '1px solid #1a1a1a' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Ready to Join the <span style={{ color: '#D4AF37' }}>Mission?</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#006A4E',
              color: '#FFFFFF',
              boxShadow: '0 0 40px rgba(0, 106, 78, 0.4)'
            }}
          >
            Book Free Consultation
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </div>
  )
}
