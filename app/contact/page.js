'use client'

import { useState } from 'react'

// Inline SVG Icons
const MessageIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

const FactoryIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

export default function Contact() {
  const whatsappUrl = 'https://wa.me/8801611616861?text=I%20want%20to%20join%20Vision%202030%20Inner%20Circle'

  const calendarDays = Array.from({ length: 14 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i + 1)
    return {
      day: date.getDate(),
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      isAvailable: i % 2 === 0 || i % 3 === 0
    }
  })

  const handleDateClick = (isAvailable) => {
    if (isAvailable) {
      window.open(whatsappUrl, '_blank')
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050505' }}>

      {/* Hero Section */}
      <section className="pt-32 pb-12" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-[2px] mx-auto mb-8" style={{ backgroundColor: '#D4AF37' }}></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
            Let's Build <span style={{ color: '#D4AF37' }}>Together.</span>
          </h1>
          <p className="text-xl" style={{ color: '#888888' }}>
            Book your free consultation with Sheikh Mohammad Sagor.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16" style={{ backgroundColor: '#0A0A0A' }}>
        <div className you="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* WhatsApp Direct - PRIMARY CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 text-center transition-all duration-300 hover:scale-105 block"
              style={{ backgroundColor: '#0F0F0F', border: '2px solid #006A4E' }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(0, 106, 78, 0.2)' }}>
                <span style={{ color: '#006A4E' }}><MessageIcon /></span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#FFFFFF' }}>Message on WhatsApp</h3>
              <p className="text-lg font-bold mb-4" style={{ color: '#006A4E' }}>+880 1611-616861</p>
              <span
                className="inline-flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-wide text-sm"
                style={{ backgroundColor: '#006A4E', color: '#FFFFFF' }}
              >
                Chat Now
                <ArrowRightIcon />
              </span>
            </a>

            {/* Corporate Office */}
            <div className="p-8 text-center" style={{ backgroundColor: '#0F0F0F', border: '1px solid #D4AF37' }}>
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                <span style={{ color: '#D4AF37' }}><BuildingIcon /></span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#FFFFFF' }}>Corporate Office</h3>
              <p className="text-sm mb-2" style={{ color: '#888888' }}>Dhaka, Bangladesh</p>
              <p className="text-xs" style={{ color: '#666666' }}>(Full address shared after booking)</p>
            </div>

            {/* Production Factory */}
            <div className="p-8 text-center" style={{ backgroundColor: '#0F0F0F', border: '1px solid #222222' }}>
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(0, 106, 78, 0.1)' }}>
                <span style={{ color: '#006A4E' }}><FactoryIcon /></span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#FFFFFF' }}>Gazipur Factory</h3>
              <p className="text-sm mb-2" style={{ color: '#888888' }}>Production & Packaging Hub</p>
              <p className="text-xs" style={{ color: '#666666' }}>(Tours available by appointment)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking - Redirects to WhatsApp */}
      <section className="py-16" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Check <span style={{ color: '#D4AF37' }}>Availability</span>
            </h2>
            <p className="text-lg" style={{ color: '#888888' }}>
              Select an available date to start a WhatsApp conversation.
            </p>
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
                  onClick={() => handleDateClick(day.isAvailable)}
                  disabled={!day.isAvailable}
                  className={`p-3 sm:p-4 text-center transition-all duration-300 ${day.isAvailable ? 'hover:scale-105 cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                  style={{
                    backgroundColor: day.isAvailable ? 'rgba(0, 106, 78, 0.15)' : '#111111',
                    border: day.isAvailable ? '1px solid #006A4E' : '1px solid #222222'
                  }}
                >
                  <p className="text-[10px] sm:text-xs uppercase mb-1" style={{ color: '#666666' }}>{day.dayName}</p>
                  <p className="text-lg sm:text-2xl font-bold" style={{ color: day.isAvailable ? '#FFFFFF' : '#444444' }}>{day.day}</p>
                  <p className="text-[10px] sm:text-xs" style={{ color: '#666666' }}>{day.month}</p>
                </button>
              ))}
            </div>

            <p className="text-center mt-6 text-sm" style={{ color: '#555555' }}>
              Click on an available date → Opens WhatsApp to book
            </p>
          </div>

          {/* Direct CTA */}
          <div className="text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#006A4E', color: '#FFFFFF', boxShadow: '0 0 50px rgba(0, 106, 78, 0.4)' }}
            >
              <PhoneIcon />
              Message on WhatsApp
            </a>
            <p className="mt-4 text-lg font-bold" style={{ color: '#D4AF37' }}>+880 1611-616861</p>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-12" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-[2px] mx-auto mb-8" style={{ backgroundColor: '#D4AF37' }}></div>
          <blockquote className="text-xl italic leading-relaxed" style={{ color: '#888888', fontFamily: 'Georgia, serif' }}>
            "I personally review every consultation request.<br />
            <span style={{ color: '#D4AF37' }}>Serious founders only, please.</span>"
          </blockquote>
          <p className="mt-6 text-sm" style={{ color: '#555555' }}>— Sheikh Mohammad Sagor</p>
          <div className="w-16 h-[2px] mx-auto mt-8" style={{ backgroundColor: '#D4AF37' }}></div>
        </div>
      </section>
    </div>
  )
}
