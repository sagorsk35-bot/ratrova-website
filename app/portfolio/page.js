import Link from 'next/link'

export default function Portfolio() {
  // Placeholder projects - will be replaced with real work
  const placeholderProjects = [
    {
      title: 'Luxury Tea Packaging',
      category: 'Premium F&B',
      description: 'Complete brand identity and packaging system for premium tea collection',
      tags: ['Brand Identity', 'Packaging Design', 'Print Production']
    },
    {
      title: 'Fashion Brand Launch',
      category: 'Fashion & Lifestyle',
      description: 'Boutique fashion brand packaging with sustainable materials',
      tags: ['Sustainable Design', 'Luxury Positioning', 'Retail Packaging']
    },
    {
      title: 'Artisan Coffee Collection',
      category: 'Food & Beverage',
      description: 'Limited edition packaging for specialty coffee roaster',
      tags: ['Limited Edition', 'Typography', 'Material Innovation']
    },
    {
      title: 'Cosmetics Line Rebranding',
      category: 'Beauty & Wellness',
      description: 'Complete visual overhaul for established skincare brand',
      tags: ['Rebranding', 'Premium Positioning', 'International Standards']
    },
    {
      title: 'Restaurant Packaging System',
      category: 'Food & Beverage',
      description: 'Burger boxes, containers, and branded materials for premium burger chain',
      tags: ['Fast-Turnaround', 'Food Packaging', 'Brand Consistency']
    },
    {
      title: 'Jewelry Brand Identity',
      category: 'Luxury Goods',
      description: 'Elegant packaging reflecting premium craftsmanship',
      tags: ['Luxury', 'Material Selection', 'Brand Experience']
    }
  ]

  return (
    <div className="bg-ratrova-white">
      {/* Hero Section */}
      <section className="section-padding bg-ratrova-black text-ratrova-white">
        <div className="luxury-container text-center">
          <h1 className="font-cormorant font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            Our <span className="text-ratrova-gold">Portfolio</span>
          </h1>
          <div className="gold-divider"></div>
          <p className="text-xl md:text-2xl text-ratrova-beige max-w-4xl mx-auto leading-relaxed">
            Showcasing excellence in packaging design across industries
          </p>
        </div>
      </section>

      {/* Portfolio Notice */}
      <section className="section-padding">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-luxury bg-gradient-to-br from-ratrova-beige/30 to-ratrova-white border-ratrova-gold">
              <div className="text-5xl mb-6">🎨</div>
              <h2 className="heading-luxury text-3xl md:text-4xl mb-6">
                Portfolio <span className="text-ratrova-gold">Coming Soon</span>
              </h2>
              <p className="text-lg text-ratrova-charcoal leading-relaxed mb-6">
                We're currently curating our case studies and project showcases. As RATROVA
                actively serves clients in Q1 2025, we'll be updating this portfolio with real work,
                detailed process breakdowns, and measurable results.
              </p>
              <p className="text-ratrova-gold font-semibold text-xl mb-8">
                In the meantime, let's discuss your project
              </p>
              <Link href="/survey" className="btn-primary inline-block">
                Share Your Challenge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories Preview */}
      <section className="section-padding bg-ratrova-beige/20">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="heading-luxury text-4xl md:text-5xl mb-6">
              Industries We <span className="text-gold-gradient">Serve</span>
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg text-ratrova-charcoal max-w-2xl mx-auto">
              Sample project categories showcasing our versatility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderProjects.map((project, index) => (
              <div key={index} className="card-luxury group cursor-pointer">
                {/* Placeholder Image Area */}
                <div className="w-full h-64 bg-gradient-to-br from-ratrova-beige to-ratrova-charcoal/20 mb-6 flex items-center justify-center group-hover:from-ratrova-gold/20 group-hover:to-ratrova-accent/20 transition-all duration-500">
                  <span className="font-cormorant italic text-4xl text-ratrova-charcoal/30">
                    Coming Soon
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-inter tracking-wider uppercase text-ratrova-gold">
                      {project.category}
                    </span>
                    <h3 className="font-cormorant font-bold text-2xl text-ratrova-black mt-2 group-hover:text-ratrova-gold transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-ratrova-charcoal leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-inter px-3 py-1 bg-ratrova-beige text-ratrova-charcoal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Showcase */}
      <section className="section-padding">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-luxury text-4xl md:text-5xl mb-6">
              What You'll <span className="text-gold-gradient">See Here Soon</span>
            </h2>
            <div className="gold-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Before & After',
                description: 'Visual transformation showcasing strategic design improvements'
              },
              {
                title: 'Process Breakdown',
                description: 'Detailed walkthrough from initial brief to final execution'
              },
              {
                title: 'Client Results',
                description: 'Measurable impact on brand perception and business metrics'
              },
              {
                title: 'Design Rationale',
                description: 'Strategic reasoning behind every creative decision'
              }
            ].map((item, index) => (
              <div key={index} className="card-luxury">
                <h3 className="heading-luxury text-2xl text-ratrova-gold mb-4">
                  {item.title}
                </h3>
                <p className="text-ratrova-charcoal leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="section-padding bg-ratrova-black text-ratrova-white">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cormorant font-bold text-4xl md:text-5xl mb-6">
              Client <span className="text-ratrova-gold">Testimonials</span>
            </h2>
            <div className="gold-divider"></div>
            <p className="text-xl text-ratrova-beige mb-12">
              Coming soon: Stories from brands we've elevated
            </p>

            <div className="card-luxury bg-ratrova-charcoal/50 border-ratrova-gold/30">
              <p className="font-cormorant italic text-2xl text-ratrova-beige leading-relaxed mb-6">
                "This space will showcase testimonials from satisfied clients who've experienced
                the RATROVA difference – from rapid delivery to premium quality to strategic impact."
              </p>
              <p className="text-ratrova-gold">
                — Client Success Stories Coming Q1 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-ratrova-gold to-ratrova-accent text-ratrova-white">
        <div className="luxury-container text-center">
          <h2 className="font-cormorant font-bold text-4xl md:text-5xl mb-6">
            Be Our Next Success Story
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Let's create packaging that elevates your brand and drives results
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/survey" className="bg-ratrova-black text-ratrova-white px-12 py-5 rounded-none font-inter font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105">
              Start Your Project
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
