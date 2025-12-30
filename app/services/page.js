import Link from 'next/link'

export default function Services() {
  const services = [
    {
      category: 'Brand Identity & Strategy',
      icon: '🎨',
      services: [
        {
          name: 'Complete Brand Identity',
          description: 'Logo design, color palette, typography system, brand voice, and visual guidelines'
        },
        {
          name: 'Brand Kit Development',
          description: 'Comprehensive brand assets package including all variations and usage scenarios'
        },
        {
          name: 'Color Psychology Application',
          description: 'Strategic color selection based on brand positioning and target audience psychology'
        },
        {
          name: 'Typography Selection',
          description: 'Custom typeface pairing for brand personality and maximum readability'
        }
      ]
    },
    {
      category: 'Packaging Design',
      icon: '📦',
      services: [
        {
          name: 'Luxury Packaging Systems',
          description: 'Complete packaging ecosystems for premium brands seeking international standards'
        },
        {
          name: 'Custom Burger Boxes & Food Containers',
          description: 'Fast-turnaround (48-72hr) custom packaging for F&B businesses'
        },
        {
          name: 'Retail Packaging Design',
          description: 'Product packaging that commands shelf presence and drives purchase decisions'
        },
        {
          name: 'Limited Edition Collections',
          description: 'Special edition packaging for seasonal launches and premium offerings'
        }
      ]
    },
    {
      category: 'Digital & Marketing',
      icon: '📱',
      services: [
        {
          name: 'Social Media Content Creation',
          description: 'Engaging visual content optimized for Instagram, Facebook, and TikTok'
        },
        {
          name: 'Video Marketing',
          description: 'Brand films, product showcases, and promotional videos'
        },
        {
          name: 'Facebook Ads Account Support',
          description: 'Creative assets and campaign consultation for Facebook advertising'
        },
        {
          name: 'Brand Photography Direction',
          description: 'Visual style guidance and photoshoot art direction'
        }
      ]
    },
    {
      category: 'Production & Technical',
      icon: '🖨️',
      services: [
        {
          name: 'Print-Ready File Preparation',
          description: 'Technical file setup ensuring flawless production (bleed, crop marks, color profiles)'
        },
        {
          name: 'Printing & Packaging Support',
          description: 'Vendor coordination and quality assurance throughout production'
        },
        {
          name: 'QR-Based Quality Enrollment',
          description: 'Trackable quality assurance system for premium packaging'
        },
        {
          name: 'Material Consultation',
          description: 'Paperboard selection, coating options, and finishing recommendations'
        }
      ]
    },
    {
      category: 'Consultancy & Strategy',
      icon: '💡',
      services: [
        {
          name: 'Brand Consultancy',
          description: 'Strategic guidance from concept to market launch'
        },
        {
          name: 'Competitive Positioning',
          description: 'Market analysis and differentiation strategy development'
        },
        {
          name: 'Brand Guidelines Creation',
          description: 'Comprehensive documentation ensuring brand consistency'
        },
        {
          name: 'International Standard Compliance',
          description: 'Export-ready packaging meeting global regulations'
        }
      ]
    }
  ]

  return (
    <div className="bg-ratrova-white">
      {/* Hero Section */}
      <section className="section-padding bg-ratrova-black text-ratrova-white">
        <div className="luxury-container text-center">
          <h1 className="font-cormorant font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            Our <span className="text-ratrova-gold">Services</span>
          </h1>
          <div className="gold-divider"></div>
          <p className="text-xl md:text-2xl text-ratrova-beige max-w-4xl mx-auto leading-relaxed">
            Comprehensive design solutions that elevate your brand from concept to market
          </p>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="section-padding">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="heading-luxury text-4xl md:text-5xl mb-6">
              Our <span className="text-gold-gradient">Approach</span>
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg text-ratrova-charcoal leading-relaxed">
              We don't just design packaging – we architect brand experiences. Every project begins with understanding 
              your business strategy, then translating that into visual language that commands premium positioning.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Foundation',
                description: 'Every design decision rooted in business objectives and market positioning'
              },
              {
                title: 'Luxury Execution',
                description: 'International-standard quality with meticulous attention to every detail'
              },
              {
                title: 'Speed Without Compromise',
                description: '48-72hr express delivery through ruthlessly optimized processes'
              }
            ].map((pillar, index) => (
              <div key={index} className="card-luxury text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="heading-luxury text-2xl mb-4 text-ratrova-gold">
                  {pillar.title}
                </h3>
                <p className="text-ratrova-charcoal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-ratrova-beige/20">
        <div className="luxury-container">
          <h2 className="heading-luxury text-4xl md:text-5xl mb-16 text-center">
            What We <span className="text-gold-gradient">Offer</span>
          </h2>

          <div className="space-y-16">
            {services.map((category, catIndex) => (
              <div key={catIndex} className="max-w-6xl mx-auto">
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-5xl">{category.icon}</span>
                  <h3 className="heading-luxury text-3xl md:text-4xl">
                    {category.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="card-luxury group hover:shadow-2xl">
                      <h4 className="font-cormorant font-bold text-xl text-ratrova-gold mb-3 group-hover:text-ratrova-accent transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-ratrova-charcoal leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Engine Model */}
      <section className="section-padding">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-luxury text-4xl md:text-5xl mb-6">
              Our <span className="text-gold-gradient">Service Tiers</span>
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg text-ratrova-charcoal">
              Two distinct service models designed for different business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Fast Cash Engine */}
            <div className="card-luxury bg-gradient-to-br from-ratrova-white to-ratrova-beige/30">
              <div className="text-center mb-6">
                <div className="inline-block bg-ratrova-gold text-ratrova-white px-6 py-2 mb-4">
                  <span className="font-cormorant font-bold text-xl tracking-wider">PAPER BOX</span>
                </div>
                <h3 className="heading-luxury text-3xl text-ratrova-black mb-2">
                  Express Service
                </h3>
                <p className="text-ratrova-charcoal">Fast-turnaround packaging solutions</p>
              </div>

              <div className="space-y-4 text-ratrova-charcoal">
                <div className="flex items-start space-x-3">
                  <span className="text-ratrova-gold text-xl">✓</span>
                  <span>48-72 hour delivery</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-ratrova-gold text-xl">✓</span>
                  <span>Custom burger boxes & food containers</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-ratrova-gold text-xl">✓</span>
                  <span>Retail packaging design</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-ratrova-gold text-xl">✓</span>
                  <span>Starting from ৳8,000</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-ratrova-gold text-xl">✓</span>
                  <span>Perfect for small businesses & startups</span>
                </div>
              </div>

              <Link href="/survey" className="btn-primary w-full mt-8 text-center block">
                Start Express Project
              </Link>
            </div>

            {/* Premium Engine */}
            <div className="card-luxury bg-gradient-to-br from-ratrova-black to-ratrova-charcoal text-ratrova-white">
              <div className="text-center mb-6">
                <div className="inline-block bg-ratrova-gold text-ratrova-white px-6 py-2 mb-4">
                  <span className="font-cormorant font-bold text-xl tracking-wider">CREATIVE LABS</span>
                </div>
                <h3 className="font-cormorant font-bold text-3xl mb-2">
                  Premium Experience
                </h3>
                <p className="text-ratrova-beige">Luxury brand positioning</p>
              </div>

              <div className="space-y-4 text-ratrova-beige">
                <div className="flex items-start space-x-3">
                  <span className="text-ratrova-gold text-xl">✓</span>
                  <span>Complete brand identity systems</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-ratrova-gold text-xl">✓</span>
                  <span>Luxury packaging ecosystems</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-ratrova-gold text-xl">✓</span>
                  <span>Strategic brand consultancy</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-ratrova-gold text-xl">✓</span>
                  <span>Starting from ৳75,000</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-ratrova-gold text-xl">✓</span>
                  <span>For established brands seeking elevation</span>
                </div>
              </div>

              <Link href="/survey" className="bg-ratrova-gold text-ratrova-white px-8 py-4 rounded-none font-inter font-medium tracking-wider uppercase transition-all duration-300 hover:bg-ratrova-accent hover:scale-105 w-full mt-8 text-center block">
                Start Premium Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-ratrova-black text-ratrova-white">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-cormorant font-bold text-4xl md:text-5xl mb-6">
              Our <span className="text-ratrova-gold">Process</span>
            </h2>
            <div className="gold-divider"></div>
            <p className="text-xl text-ratrova-beige">
              From initial consultation to final delivery
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              { step: '01', title: 'Discovery & Strategy', description: 'Deep dive into your brand, market, and objectives' },
              { step: '02', title: 'Concept Development', description: 'Multiple design directions rooted in strategy' },
              { step: '03', title: 'Refinement', description: 'Iterative improvements based on feedback' },
              { step: '04', title: 'Finalization', description: 'Technical file preparation and quality assurance' },
              { step: '05', title: 'Delivery & Support', description: 'Complete handover with production guidance' }
            ].map((phase, index) => (
              <div key={index} className="flex items-start space-x-6 card-luxury bg-ratrova-charcoal/50 border-ratrova-gold/30">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-ratrova-gold rounded-full flex items-center justify-center">
                    <span className="font-cormorant font-bold text-2xl text-ratrova-white">
                      {phase.step}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-cormorant font-bold text-2xl text-ratrova-gold mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-ratrova-beige">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-ratrova-gold to-ratrova-accent text-ratrova-white">
        <div className="luxury-container text-center">
          <h2 className="font-cormorant font-bold text-4xl md:text-5xl mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Share your packaging challenge and we'll contact you with a tailored suggestion
          </p>
          <Link href="/survey" className="bg-ratrova-black text-ratrova-white px-12 py-5 rounded-none font-inter font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105 inline-block">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}
