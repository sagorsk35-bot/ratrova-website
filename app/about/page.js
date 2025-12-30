export default function About() {
  return (
    <div className="bg-ratrova-white">
      {/* Hero Section */}
      <section className="section-padding bg-ratrova-black text-ratrova-white">
        <div className="luxury-container text-center">
          <h1 className="font-cormorant font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            About <span className="text-ratrova-gold">RATROVA</span>
          </h1>
          <div className="gold-divider"></div>
          <p className="font-cormorant italic text-2xl md:text-3xl text-ratrova-beige max-w-4xl mx-auto leading-relaxed">
            "Before form, there is meaning. Before beauty, there is belief."
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-luxury text-4xl md:text-5xl mb-8 text-center">
              Our <span className="text-gold-gradient">Story</span>
            </h2>
            <div className="gold-divider"></div>

            <div className="space-y-6 text-lg text-ratrova-charcoal leading-relaxed">
              <p>
                RATROVA Creative Labs was born from a simple yet powerful belief: <strong className="text-ratrova-gold">exceptional design shouldn't require sacrificing family, heritage, or homeland.</strong>
              </p>

              <p>
                With 17 years of packaging industry experience and a legacy rooted in Bangladesh's manufacturing sector since 1988,
                we witnessed countless talented designers leave the country, believing world-class careers only existed abroad.
              </p>

              <p>
                We decided to change that narrative.
              </p>

              <p>
                RATROVA Creative Labs is Bangladesh's <strong className="text-ratrova-gold">first luxury packaging design agency</strong> –
                not because we wanted a title, but because we wanted to prove that international-standard work,
                premium client experiences, and meaningful careers can thrive right here in Dhaka.
              </p>

              <p className="font-cormorant italic text-2xl text-ratrova-gold">
                মায়ের কোল যেন আর শূন্য না হয়
              </p>

              <p>
                <em>"May mothers' laps never be empty."</em> This Bengali phrase captures our deepest mission:
                keeping families together by creating exceptional opportunities at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-ratrova-beige/20">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="card-luxury">
              <h3 className="heading-luxury text-3xl mb-6 text-ratrova-gold">
                Our Mission
              </h3>
              <p className="text-ratrova-charcoal leading-relaxed text-lg">
                Transform Bangladesh into an <strong>"International Packaging Hub"</strong> by 2030,
                proving that world-class design work flourishes here. We reverse brain drain by demonstrating
                that meaningful careers, premium salaries, and purposeful work exist in Bangladesh.
              </p>
            </div>

            <div className="card-luxury">
              <h3 className="heading-luxury text-3xl mb-6 text-ratrova-gold">
                Our Vision
              </h3>
              <p className="text-ratrova-charcoal leading-relaxed text-lg">
                Build a comprehensive design ecosystem spanning five wings: Creative Labs (active now),
                Packaging & Manufacturing (2026), AI Studio (2027), Design University (2028),
                and Freelancer Platform (2029). Each wing empowers local talent while serving global standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-ratrova-black text-ratrova-white">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cormorant font-bold text-4xl md:text-5xl mb-8">
              Our <span className="text-ratrova-gold">Philosophy</span>
            </h2>
            <div className="gold-divider"></div>

            <div className="space-y-8">
              <div>
                <h3 className="font-cormorant font-bold text-3xl text-ratrova-gold mb-4">
                  "Before Form, There Is Meaning"
                </h3>
                <p className="text-ratrova-beige text-lg leading-relaxed">
                  Every design decision must serve business strategy first, aesthetics second.
                  Beautiful packaging that does not sell is just expensive art. We ensure form follows function,
                  always.
                </p>
              </div>

              <div>
                <h3 className="font-cormorant font-bold text-3xl text-ratrova-gold mb-4">
                  "Before Beauty, There Is Belief"
                </h3>
                <p className="text-ratrova-beige text-lg leading-relaxed">
                  Brand positioning stems from conviction, not cosmetics. We dig deep to understand
                  what your brand truly believes, then translate that belief into visual language that
                  commands premium positioning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="luxury-container">
          <h2 className="heading-luxury text-4xl md:text-5xl mb-12 text-center">
            Our <span className="text-gold-gradient">Values</span>
          </h2>
          <div className="gold-divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {[
              {
                value: 'Purpose Over Profit',
                description: 'We measure success by impact, not just revenue. Profit enables purpose, not the other way around.'
              },
              {
                value: 'Family First Always',
                description: 'Work-life integration that keeps families together. No success justifies empty dinner tables.'
              },
              {
                value: 'Excellence Without Compromise',
                description: 'Luxury standards with no shortcuts. Quality is non-negotiable, timelines are optimized.'
              },
              {
                value: 'Speed as Competitive Weapon',
                description: '48-72hr delivery does not mean rushed work. It means ruthlessly efficient processes.'
              }
            ].map((item, index) => (
              <div key={index} className="card-luxury">
                <h3 className="heading-luxury text-2xl mb-4 text-ratrova-gold">
                  {item.value}
                </h3>
                <p className="text-ratrova-charcoal leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-ratrova-beige/20">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-luxury text-4xl md:text-5xl mb-12 text-center">
              Leadership
            </h2>
            <div className="gold-divider"></div>

            <div className="card-luxury mt-12">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-2 border-ratrova-gold">
                  <img src="/owner.jpg" alt="Sheikh Mohammed Sagor" className="w-full h-full object-cover" />
                </div>
                <h3 className="heading-luxury text-3xl mb-2">
                  Sheikh Mohammed Sagor
                </h3>
                <p className="text-ratrova-gold font-inter tracking-wider uppercase text-sm">
                  Founder & Creative Director
                </p>
              </div>

              <div className="space-y-4 text-ratrova-charcoal leading-relaxed">
                <p>
                  With 17 years of packaging design experience and heritage in Bangladesh's manufacturing
                  sector since 1988, Sagor founded RATROVA to prove that world-class design careers exist
                  in Bangladesh.
                </p>
                <p>
                  His entrepreneurial journey began in 2008 with graphic design while working in the family
                  packaging business. After disagreements about modernization approaches, he left to pursue
                  a vision: creating Bangladesh's first luxury-positioned design firm with global aspirations.
                </p>
                <p className="font-cormorant italic text-xl text-ratrova-gold">
                  "Before form, there is meaning. Before beauty, there is belief."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-ratrova-gold to-ratrova-accent text-ratrova-white">
        <div className="luxury-container text-center">
          <h2 className="font-cormorant font-bold text-4xl md:text-5xl mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Be part of building Bangladesh's design future
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/survey" className="bg-ratrova-black text-ratrova-white px-12 py-5 rounded-none font-inter font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105">
              Start a Project
            </a>
            <a href="/contact" className="border-2 border-ratrova-white text-ratrova-white px-12 py-5 rounded-none font-inter font-medium tracking-wider uppercase transition-all duration-300 hover:bg-ratrova-white hover:text-ratrova-gold">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
