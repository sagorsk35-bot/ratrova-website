'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-ratrova-black/95 backdrop-blur-sm shadow-2xl border-b border-ratrova-gold/20'
        : 'bg-transparent'
        }`}
    >
      <nav className="luxury-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* <div className="relative w-12 h-12 bg-gradient-to-br from-ratrova-gold to-ratrova-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="font-cormorant font-bold text-2xl text-ratrova-white">R</span>
              <div className="absolute inset-0 rounded-full border-2 border-ratrova-beige/30 group-hover:border-ratrova-beige/60 transition-colors"></div>
            </div> */}
            <img src="/ratrova-logo-v3.jpg" alt="Ratrova Logo" className="w-20 h-20 object-contain rounded-full group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(175,140,92,0.4)]" />
            <span className="font-cormorant font-bold text-2xl text-ratrova-white tracking-wider">
              RATROVA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-inter font-medium text-sm tracking-wider uppercase transition-colors duration-300 relative ${pathname === item.href
                  ? 'text-ratrova-gold'
                  : 'text-ratrova-white hover:text-ratrova-gold'
                  }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-ratrova-gold"></span>
                )}
              </Link>
            ))}
            <Link href="/survey" className="btn-primary">
              Start Survey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-ratrova-white p-2 hover:text-ratrova-gold transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-ratrova-black/98 backdrop-blur-sm absolute top-20 left-0 right-0 border-t border-ratrova-gold/20 shadow-2xl">
            <div className="flex flex-col space-y-4 p-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-inter font-medium text-sm tracking-wider uppercase transition-colors duration-300 py-2 ${pathname === item.href
                    ? 'text-ratrova-gold border-l-4 border-ratrova-gold pl-4'
                    : 'text-ratrova-white hover:text-ratrova-gold hover:pl-4'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/survey"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center"
              >
                Start Survey
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
