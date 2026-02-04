'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="bg-ratrova-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-ratrova-black overflow-hidden">
        {/* Background Pattern */}
        {/* Background Pattern - Layer 1 (Primary Dots) */}
        <div className="absolute inset-0 animate-dots-slow">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #AF8C5C 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Background Pattern - Layer 2 (Secondary Floating Dots) */}
        <div className="absolute inset-0 animate-dots-fast">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #AF8C5C 0.5px, transparent 0)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '15px 15px'
          }}></div>
        </div>

        <div className={`luxury-container relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 flex justify-center">
            <img src="/ratrova-logo-v3.jpg" alt="Ratrova Logo" className="w-48 h-48 object-contain rounded-full animate-gold-shimmer shadow-[0_0_25px_rgba(175,140,92,0.3)]" />
          </div>

          {/* Main Heading */}
          <h1 className="font-cormorant font-bold text-5xl md:text-7xl lg:text-8xl text-ratrova-white mb-6 leading-tight">
            RATROVA
          </h1>

          {/* Philosophy */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="font-cormorant italic text-2xl md:text-3xl lg:text-4xl text-ratrova-beige leading-relaxed">
              "Before form, there is meaning.<br />
              Before beauty, there is belief."
            </p>
          </div>

          <div className="gold-divider"></div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-ratrova-beige mb-12 font-inter tracking-wide">
            Bangladesh's First Luxury Packaging Design Agency
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/survey" className="btn-primary">
              Share Your Packaging Challenge
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              View Our Work
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-ratrova-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="section-padding bg-ratrova-white">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-luxury text-4xl md:text-5xl lg:text-6xl mb-6">
              We Understand Your <span className="text-gold-gradient">Packaging Pain Points</span>
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg md:text-xl text-ratrova-charcoal leading-relaxed mb-12">
              From inconsistent branding to poor print quality, from endless delays to lack of creative vision –
              packaging challenges can make or break your brand's first impression.
            </p>
            <Link href="/survey" className="btn-primary inline-block">
              Tell Us Your Challenge
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-ratrova-beige/20">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="heading-luxury text-4xl md:text-5xl lg:text-6xl mb-6">
              Our <span className="text-gold-gradient">Expertise</span>
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg text-ratrova-charcoal max-w-2xl mx-auto">
              Comprehensive design solutions that elevate your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Brand Identity',
                description: 'Complete visual identity systems that define your brand\'s essence',
                icon: '🎨'
              },
              {
                title: 'Luxury Packaging Design',
                description: 'International-standard packaging that commands premium positioning',
                icon: '📦'
              },
              {
                title: 'Brand Consultancy',
                description: 'Strategic guidance from concept to market launch',
                icon: '💡'
              },
              {
                title: 'Print-Ready Files',
                description: 'Technical precision ensuring flawless production',
                icon: '🖨️'
              },
              {
                title: 'Social Media Content',
                description: 'Engaging visual content that amplifies your brand story',
                icon: '📱'
              },
              {
                title: 'Quality Assurance',
                description: 'QR-enabled tracking and premium production support',
                icon: '✓'
              },
            ].map((service, index) => (
              <div key={index} className="card-luxury group cursor-pointer">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-cormorant font-bold text-2xl text-ratrova-black mb-4">
                  {service.title}
                </h3>
                <p className="text-ratrova-charcoal leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why RATROVA Section */}
      <section className="section-padding bg-ratrova-black text-ratrova-white">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-cormorant font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-ratrova-white">
              Why <span className="text-ratrova-gold">RATROVA</span>?
            </h2>
            <div className="gold-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: '17 Years of Excellence',
                description: 'Deep industry expertise and proven track record in packaging design'
              },
              {
                title: 'Luxury Positioning',
                description: 'Bangladesh\'s only agency specializing in premium brand packaging'
              },
              {
                title: 'Speed & Quality',
                description: '48-72hr express delivery without compromising on excellence'
              },
              {
                title: 'Mission-Driven',
                description: 'Building Bangladesh\'s design ecosystem while serving global standards'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-ratrova-gold rounded-full flex items-center justify-center">
                    <span className="font-cormorant font-bold text-2xl text-ratrova-white">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-cormorant font-bold text-2xl text-ratrova-gold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-ratrova-beige leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-ratrova-gold to-ratrova-accent text-ratrova-white">
        <div className="luxury-container text-center">
          <h2 className="font-cormorant font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Let's Transform Your Brand Together
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Share your packaging challenges with us. We'll contact you with a tailored suggestion.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/survey" className="bg-ratrova-black text-ratrova-white px-12 py-5 rounded-none font-inter font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Start Your Journey
            </Link>
            <Link href="/contact" className="border-2 border-ratrova-white text-ratrova-white px-12 py-5 rounded-none font-inter font-medium tracking-wider uppercase transition-all duration-300 hover:bg-ratrova-white hover:text-ratrova-gold">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
