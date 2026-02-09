'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

// Inline SVG Icons
const DownloadIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
)

const UploadIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

const BoxIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
)

const TargetIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

const AwardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)

export default function Home() {
  // Badge Generator State
  const [selectedBadge, setSelectedBadge] = useState('patriot')
  const [userImage, setUserImage] = useState(null)
  const [generatedBadge, setGeneratedBadge] = useState(null)
  const [isCanvasReady, setIsCanvasReady] = useState(false)
  const [scale, setScale] = useState(1.5) // Zoom scale: 1 to 3
  const [showThankYou, setShowThankYou] = useState(false)
  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)

  // Canvas Drawing Effect with Zoom
  useEffect(() => {
    if (!canvasRef.current || !userImage) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const size = 500

    canvas.width = size
    canvas.height = size

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      // Clear canvas
      ctx.clearRect(0, 0, size, size)

      // Calculate scaled dimensions (user can zoom in/out)
      const imgRatio = img.width / img.height
      let drawWidth, drawHeight

      if (imgRatio > 1) {
        drawHeight = size * scale
        drawWidth = drawHeight * imgRatio
      } else {
        drawWidth = size * scale
        drawHeight = drawWidth / imgRatio
      }

      // Center the scaled image
      const offsetX = (size - drawWidth) / 2
      const offsetY = (size - drawHeight) / 2

      // Layer 1: User Image (Bottom, Scaled & Centered)
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)

      // Layer 2: Badge Overlay (Top)
      const badge = new Image()
      badge.crossOrigin = 'anonymous'
      badge.onload = () => {
        ctx.drawImage(badge, 0, 0, size, size)
        setGeneratedBadge(canvas.toDataURL('image/png'))
        setIsCanvasReady(true)
      }
      badge.onerror = () => {
        setGeneratedBadge(canvas.toDataURL('image/png'))
        setIsCanvasReady(true)
      }
      badge.src = selectedBadge === 'patriot'
        ? '/badges/badge-patriot.png'
        : '/badges/badge-business.png'
    }
    img.src = userImage
  }, [userImage, selectedBadge, scale])

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUserImage(event.target?.result)
        setIsCanvasReady(false)
        setGeneratedBadge(null)
        setScale(1.5) // Reset zoom on new upload
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDownloadBadge = () => {
    if (!generatedBadge) return
    const link = document.createElement('a')
    link.download = 'Mission2030-Badge.png'
    link.href = generatedBadge
    link.click()
    // Show celebration modal
    setShowThankYou(true)
  }

  const calendarDays = Array.from({ length: 14 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i + 1)
    return {
      day: date.getDate(),
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
      isAvailable: i % 2 === 0 || i % 3 === 0
    }
  })

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050505' }}>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ backgroundColor: '#050505' }}>
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <img src="/mission-2030-logo.png" alt="Mission 2030" className="w-64 sm:w-80 h-auto" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
                Building Bangladesh's<br />
                <span style={{ color: '#D4AF37' }}>Next Global Brands.</span>
              </h1>

              <p className="text-xl sm:text-2xl mb-8 leading-relaxed" style={{ color: '#888888' }}>
                <span style={{ color: '#D4AF37', fontWeight: '600' }}>18 Years of Mastery.</span>{' '}
                100% Free Knowledge.
              </p>

              <a
                href="/lessons"
                className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold tracking-wide uppercase transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: '#006A4E',
                  color: '#FFFFFF',
                  boxShadow: '0 0 40px rgba(0, 106, 78, 0.4)'
                }}
              >
                <DownloadIcon />
                GET LESSON 01
              </a>

              <div className="flex items-center gap-6 mt-10">
                <div className="flex items-center gap-2" style={{ color: '#666666' }}>
                  <span style={{ color: '#006A4E' }}><CheckIcon /></span>
                  <span className="text-sm">Free with Login</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: '#666666' }}>
                  <span style={{ color: '#D4AF37' }}><AwardIcon /></span>
                  <span className="text-sm">Sadaqah Jariyah</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg opacity-20" style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #006A4E 100%)',
                  filter: 'blur(40px)'
                }}></div>
                <img src="/FOUNDER ON MISSION.png" alt="Sheikh Mohammad Sagor" className="relative z-10 w-full max-w-lg mx-auto" />
                <div className="absolute bottom-4 left-4 right-4 p-4 z-20" style={{ backgroundColor: 'rgba(5, 5, 5, 0.9)', border: '1px solid #D4AF37' }}>
                  <p className="font-bold" style={{ color: '#FFFFFF' }}>Sheikh Mohammad Sagor</p>
                  <p className="text-sm" style={{ color: '#D4AF37' }}>Founder & Brand Strategist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BADGE GENERATOR SECTION */}
      <section id="badge-generator" className="py-20 sm:py-28" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-[2px] mx-auto mb-8" style={{ backgroundColor: '#D4AF37' }}></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
              Wear the Badge. <span style={{ color: '#D4AF37' }}>Join the Mission.</span>
            </h2>
            <p className="text-lg" style={{ color: '#888888' }}>
              Show the world you're building Bangladesh's future.
            </p>
          </div>

          <div className="p-8 sm:p-10" style={{ backgroundColor: '#0F0F0F', border: '2px solid #D4AF37', boxShadow: '0 0 80px rgba(212, 175, 55, 0.1)' }}>
            <div className="flex justify-center mb-10">
              <div className="inline-flex p-1" style={{ backgroundColor: '#111111', border: '1px solid #222222' }}>
                <button
                  onClick={() => setSelectedBadge('patriot')}
                  className="px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300"
                  style={{
                    backgroundColor: selectedBadge === 'patriot' ? '#D4AF37' : 'transparent',
                    color: selectedBadge === 'patriot' ? '#050505' : '#666666'
                  }}
                >
                  Patriot Builder
                </button>
                <button
                  onClick={() => setSelectedBadge('business')}
                  className="px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300"
                  style={{
                    backgroundColor: selectedBadge === 'business' ? '#006A4E' : 'transparent',
                    color: selectedBadge === 'business' ? '#FFFFFF' : '#666666'
                  }}
                >
                  Future Global Brand
                </button>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-full max-w-[500px] aspect-square flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#111111', border: '2px dashed #333333' }}>
                {!userImage ? (
                  <div className="text-center p-8">
                    <UploadIcon />
                    <p className="text-base mt-4" style={{ color: '#555555' }}>Upload your photo to generate badge</p>
                  </div>
                ) : (
                  <canvas ref={canvasRef} className="w-full h-full" style={{ maxWidth: '500px', maxHeight: '500px' }} />
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'transparent', color: '#D4AF37', border: '2px solid #D4AF37' }}
              >
                <UploadIcon />
                {userImage ? 'Change Photo' : 'Upload Photo'}
              </button>

              {isCanvasReady && generatedBadge && (
                <button
                  onClick={handleDownloadBadge}
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#006A4E', color: '#FFFFFF', boxShadow: '0 0 40px rgba(0, 106, 78, 0.4)' }}
                >
                  <DownloadIcon />
                  Download Badge
                </button>
              )}
            </div>

            {/* Zoom Slider - Only show when image is uploaded */}
            {userImage && (
              <div className="mt-8 max-w-sm mx-auto">
                <label className="block text-center text-sm mb-3" style={{ color: '#888888' }}>
                  Zoom: {Math.round(scale * 100)}%
                </label>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="0.1"
                  value={scale}
                  onChange={(e) => setScale(parseFloat(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${((scale - 1) / 2) * 100}%, #333333 ${((scale - 1) / 2) * 100}%, #333333 100%)`,
                    accentColor: '#D4AF37'
                  }}
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: '#555555' }}>
                  <span>Zoom Out</span>
                  <span>Zoom In</span>
                </div>
              </div>
            )}

            <p className="text-center mt-8 text-sm" style={{ color: '#555555' }}>
              📱 Share on Facebook, LinkedIn, WhatsApp with <span style={{ color: '#D4AF37' }}>#Mission2030</span>
            </p>
          </div>
        </div>

        {/* THANK YOU MODAL - Enhanced with Both Badge Options */}
        {showThankYou && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.90)' }}
              onClick={() => setShowThankYou(false)}
            ></div>
            <div
              className="relative w-full max-w-2xl p-8 sm:p-10 text-center shadow-2xl overflow-y-auto max-h-[90vh]"
              style={{ backgroundColor: '#0A0A0A', border: '2px solid #D4AF37', boxShadow: '0 0 100px rgba(212, 175, 55, 0.3)' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowThankYou(false)}
                className="absolute top-4 right-4 p-2 transition-colors hover:opacity-80"
                style={{ color: '#888888' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-6xl mb-4">🇧🇩</div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#D4AF37' }}>
                You are a Nation Builder!
              </h3>
              <p className="text-base mb-8" style={{ color: '#888888' }}>
                Share on social media with <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>#Mission2030</span>
              </p>

              {/* Badge Showcase */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-6" style={{ color: '#FFFFFF' }}>
                  🏆 Your Two Mission 2030 Badges
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Patriot Builder Badge */}
                  <div
                    className="p-4 cursor-pointer transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: selectedBadge === 'patriot' ? 'rgba(212, 175, 55, 0.1)' : '#111111',
                      border: selectedBadge === 'patriot' ? '2px solid #D4AF37' : '1px solid #333333'
                    }}
                    onClick={() => setSelectedBadge('patriot')}
                  >
                    <div className="aspect-square mb-3 overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
                      <img src="/Badges/badge-patriot.png" alt="Patriot Builder" className="w-full h-full object-contain" />
                    </div>
                    <p className="font-bold text-sm" style={{ color: '#D4AF37' }}>Patriot Builder</p>
                    <p className="text-xs" style={{ color: '#666666' }}>For Nation Builders</p>
                  </div>

                  {/* Future Global Brand Badge */}
                  <div
                    className="p-4 cursor-pointer transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: selectedBadge === 'business' ? 'rgba(0, 106, 78, 0.1)' : '#111111',
                      border: selectedBadge === 'business' ? '2px solid #006A4E' : '1px solid #333333'
                    }}
                    onClick={() => setSelectedBadge('business')}
                  >
                    <div className="aspect-square mb-3 overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
                      <img src="/Badges/badge-business.png" alt="Future Global Brand" className="w-full h-full object-contain" />
                    </div>
                    <p className="font-bold text-sm" style={{ color: '#006A4E' }}>Future Global Brand</p>
                    <p className="text-xs" style={{ color: '#666666' }}>For Business Leaders</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setShowThankYou(false)
                    // Scroll to badge generator
                    document.querySelector('#badge-generator')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#D4AF37', color: '#050505' }}
                >
                  Create Another Badge
                </button>
                <button
                  onClick={() => setShowThankYou(false)}
                  className="px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: 'transparent', color: '#888888', border: '1px solid #333333' }}
                >
                  Close
                </button>
              </div>

              <p className="mt-6 text-sm" style={{ color: '#555555' }}>
                📱 Tag us <span style={{ color: '#D4AF37' }}>@mission2030bd</span> on Facebook & LinkedIn
              </p>
            </div>
          </div>
        )}
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-[2px] mx-auto mb-8" style={{ backgroundColor: '#D4AF37' }}></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
              Two Pillars. <span style={{ color: '#D4AF37' }}>One Mission.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 transition-all duration-500 hover:scale-[1.02]" style={{ backgroundColor: '#0A0A0A', border: '2px solid #D4AF37' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid #D4AF37' }}>
                  <span style={{ color: '#D4AF37' }}><BoxIcon /></span>
                </div>
                <span className="px-3 py-1 text-xs font-bold uppercase" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)', color: '#D4AF37' }}>Hardware</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>Packaging Infrastructure</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#888888' }}>World-class structural design, material science, and production-ready engineering for the global shelf.</p>
              <ul className="space-y-3">
                {['3D Structural Design', 'Material Sourcing (Food-Safe, Eco)', 'Production-Ready Dielines', 'International Compliance'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span style={{ color: '#006A4E' }}><CheckIcon /></span>
                    <span className="text-sm" style={{ color: '#AAAAAA' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 sm:p-10 transition-all duration-500 hover:scale-[1.02]" style={{ backgroundColor: '#0A0A0A', border: '2px solid #006A4E' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 106, 78, 0.1)', border: '1px solid #006A4E' }}>
                  <span style={{ color: '#006A4E' }}><TargetIcon /></span>
                </div>
                <span className="px-3 py-1 text-xs font-bold uppercase" style={{ backgroundColor: 'rgba(0, 106, 78, 0.2)', color: '#006A4E' }}>Software</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>Strategic Consultation</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#888888' }}>1-on-1 brand strategy with Sheikh Mohammad Sagor. Positioning your brand for 2030 and beyond.</p>
              <ul className="space-y-3">
                {['Brand DNA Development', 'Competitive Analysis', 'Export Market Advisory', 'Consumer Psychology Mapping'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span style={{ color: '#D4AF37' }}><CheckIcon /></span>
                    <span className="text-sm" style={{ color: '#AAAAAA' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg italic" style={{ color: '#D4AF37', fontFamily: 'Georgia, serif' }}>
              "Strategic Consultation is offered as Sadaqah Jariyah — free for serious founders."
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-[2px] mx-auto mb-8" style={{ backgroundColor: '#D4AF37' }}></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
              Consult with <span style={{ color: '#D4AF37' }}>Sheikh Mohammad Sagor</span>
            </h2>
            <p className="text-lg" style={{ color: '#888888' }}>Check availability and book your free strategy session.</p>
          </div>

          <div className="p-6 sm:p-8 mb-8" style={{ backgroundColor: '#0F0F0F', border: '2px solid #D4AF37' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span style={{ color: '#D4AF37' }}><CalendarIcon /></span>
                <span className="font-medium" style={{ color: '#FFFFFF' }}>Next 14 Days</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#006A4E' }}></div>
                  <span style={{ color: '#888888' }}>Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#333333' }}></div>
                  <span style={{ color: '#888888' }}>Booked</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 sm:gap-3">
              {calendarDays.map((day, index) => (
                <button
                  key={index}
                  onClick={() => day.isAvailable && window.open('https://wa.me/8801611616861?text=I%20want%20to%20join%20Vision%202030%20Inner%20Circle', '_blank')}
                  disabled={!day.isAvailable}
                  className={`p-3 sm:p-4 text-center transition-all duration-300 ${day.isAvailable ? 'hover:scale-105 cursor-pointer' : 'cursor-not-allowed'}`}
                  style={{
                    backgroundColor: day.isAvailable ? 'rgba(0, 106, 78, 0.15)' : '#111111',
                    border: day.isAvailable ? '1px solid #006A4E' : '1px solid #222222',
                    opacity: day.isAvailable ? 1 : 0.5
                  }}
                >
                  <p className="text-[10px] sm:text-xs uppercase mb-1" style={{ color: '#666666' }}>{day.dayName}</p>
                  <p className="text-lg sm:text-2xl font-bold" style={{ color: day.isAvailable ? '#FFFFFF' : '#444444' }}>{day.day}</p>
                </button>
              ))}
            </div>

            <p className="text-center mt-6 text-sm" style={{ color: '#555555' }}>
              Click on an available date → Opens WhatsApp to book
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/8801611616861?text=I%20want%20to%20join%20Vision%202030%20Inner%20Circle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#006A4E', color: '#FFFFFF', boxShadow: '0 0 50px rgba(0, 106, 78, 0.4)' }}
            >
              Book Free Strategy Session
              <ArrowRightIcon />
            </a>
            <p className="mt-4 text-lg font-bold" style={{ color: '#D4AF37' }}>+880 1611-616861</p>
          </div>
        </div>
      </section>
    </div>
  )
}

