'use client'

import Link from 'next/link'
import { useState } from 'react'

// Inline SVG Icons
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'The Vision', href: '/about' },
    { name: 'Core Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: 'rgba(5, 5, 5, 0.95)', borderBottom: '1px solid #1a1a1a' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/mission-2030-logo.png"
              alt="Mission 2030"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider transition-colors duration-300"
                style={{ color: '#AAAAAA' }}
                onMouseEnter={(e) => e.target.style.color = '#D4AF37'}
                onMouseLeave={(e) => e.target.style.color = '#AAAAAA'}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#006A4E',
                color: '#FFFFFF',
                boxShadow: '0 0 20px rgba(0, 106, 78, 0.3)'
              }}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ color: '#D4AF37' }}
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden absolute top-20 left-0 right-0 py-6 px-4"
          style={{ backgroundColor: '#0A0A0A', borderBottom: '1px solid #1a1a1a' }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium py-2 transition-colors"
                style={{ color: '#AAAAAA', borderBottom: '1px solid #1a1a1a' }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 text-center py-4 font-bold uppercase tracking-wider"
              style={{ backgroundColor: '#006A4E', color: '#FFFFFF' }}
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
