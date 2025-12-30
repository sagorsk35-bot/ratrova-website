import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ratrova-black text-ratrova-white">
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                <img src="/ratrova-logo-v3.jpg" alt="RATROVA" className="w-16 h-16 object-contain rounded-full border-2 border-ratrova-gold shadow-[0_0_10px_rgba(175,140,92,0.3)]" />
              </div>
            </div>
            <p className="font-cormorant italic text-ratrova-beige text-lg leading-relaxed">
              "Before form, there is meaning. Before beauty, there is belief."
            </p>
            <p className="text-sm text-ratrova-beige/80">
              Bangladesh's First Luxury Packaging Design Agency
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-cormorant font-bold text-xl text-ratrova-gold mb-6">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-ratrova-beige hover:text-ratrova-gold transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="text-ratrova-beige hover:text-ratrova-gold transition-colors duration-300">
                About Us
              </Link>
              <Link href="/services" className="text-ratrova-beige hover:text-ratrova-gold transition-colors duration-300">
                Services
              </Link>
              <Link href="/portfolio" className="text-ratrova-beige hover:text-ratrova-gold transition-colors duration-300">
                Portfolio
              </Link>
              <Link href="/contact" className="text-ratrova-beige hover:text-ratrova-gold transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-cormorant font-bold text-xl text-ratrova-gold mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-ratrova-gold font-semibold mb-1">Call</p>
                <a href="tel:09639990099" className="text-ratrova-beige hover:text-ratrova-gold transition-colors">
                  09639990099
                </a>
              </div>
              <div>
                <p className="text-ratrova-gold font-semibold mb-1">WhatsApp</p>
                <a href="https://wa.me/8809639990099" target="_blank" rel="noopener noreferrer" className="text-ratrova-beige hover:text-ratrova-gold transition-colors">
                  09639990099
                </a>
              </div>
              <div>
                <p className="text-ratrova-gold font-semibold mb-1">Email</p>
                <a href="mailto:hello@ratrova.com" className="text-ratrova-beige hover:text-ratrova-gold transition-colors block">
                  hello@ratrova.com
                </a>
                <a href="mailto:creative@ratrova.com" className="text-ratrova-beige hover:text-ratrova-gold transition-colors block">
                  creative@ratrova.com
                </a>
                <a href="mailto:production@ratrova.com" className="text-ratrova-beige hover:text-ratrova-gold transition-colors block">
                  production@ratrova.com
                </a>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h3 className="font-cormorant font-bold text-xl text-ratrova-gold mb-6">
              Our Locations
            </h3>
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-ratrova-gold font-semibold mb-2">RATROVA HQ</p>
                <p className="text-ratrova-beige leading-relaxed">
                  Al-Modina Tower<br />
                  2nd Floor, Flat-3E<br />
                  Sonr Bangla Project, Godabagh<br />
                  Keranigonj, Dhaka-1310
                </p>
              </div>
              <div>
                <p className="text-ratrova-gold font-semibold mb-2">Production</p>
                <p className="text-ratrova-beige leading-relaxed">
                  House # 7, Zindabahar<br />
                  Road # 1, Nayabazar<br />
                  Dhaka-1100
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-ratrova-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a
                href="https://facebook.com/ratrova"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ratrova-beige hover:text-ratrova-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/ratrova"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ratrova-beige hover:text-ratrova-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            <p className="text-ratrova-beige text-sm">
              © {currentYear} RATROVA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
