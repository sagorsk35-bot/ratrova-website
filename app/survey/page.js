'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'

export default function Survey() {
  const { user, isLoaded } = useUser()
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [autoFilled, setAutoFilled] = useState(false)
  const [formData, setFormData] = useState({
    // Step 1: Business Info
    companyName: '',
    industry: '',
    currentSituation: '',

    // Step 2: Pain Points
    painPoints: [],

    // Step 3: Priority Ranking
    topPainPoints: ['', '', ''],

    // Step 4: Detailed Description
    detailedDescription: '',

    // Step 5: Contact Info
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',

    // Step 6: Timeline
    timeline: ''
  })

  // Auto-fill user contact information when user data is available
  useEffect(() => {
    if (isLoaded && user && !autoFilled) {
      const userName = user.fullName || `${user.firstName || ''} ${user.lastName || ''}`.trim()
      const userEmail = user.primaryEmailAddress?.emailAddress || ''
      const userPhone = user.primaryPhoneNumber?.phoneNumber || ''

      setFormData(prev => ({
        ...prev,
        name: userName,
        email: userEmail,
        phone: userPhone
      }))
      setAutoFilled(true)
    }
  }, [isLoaded, user, autoFilled])

  const painPointOptions = [
    'Inconsistent brand identity across packaging',
    'Poor design quality that doesn\'t reflect our brand',
    'Long lead times (weeks/months for design)',
    'Printing quality issues and color mismatches',
    'Packaging material doesn\'t match product quality',
    'No proper brand guidelines for consistency',
    'Expensive design costs without ROI',
    'Difficult communication with designers',
    'After-sales support lacking',
    'Need faster turnaround time (48-72hrs)',
    'Require international standard quality',
    'Looking for complete brand identity solution'
  ]

  const handlePainPointToggle = (point) => {
    setFormData(prev => ({
      ...prev,
      painPoints: prev.painPoints.includes(point)
        ? prev.painPoints.filter(p => p !== point)
        : [...prev.painPoints, point]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send data to your backend
    console.log('Survey Data:', formData)
    setIsSubmitted(true)
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const totalSteps = 6

  // Loading state while checking authentication
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-ratrova-white flex items-center justify-center py-20">
        <div className="luxury-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 border-4 border-ratrova-gold border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-xl text-ratrova-charcoal">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-ratrova-white flex items-center justify-center py-20">
        <div className="luxury-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-ratrova-gold rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-ratrova-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="heading-luxury text-4xl md:text-5xl mb-6">
              Thank You for Sharing!
            </h1>
            <div className="gold-divider"></div>
            <p className="text-xl text-ratrova-charcoal mb-8 leading-relaxed">
              We've received your packaging challenges. Our team is reviewing your information
              and <strong className="text-ratrova-gold">we'll contact you with a suggestion</strong> tailored to your needs.
            </p>
            <p className="text-lg text-ratrova-charcoal mb-8">
              In the meantime, feel free to explore our services or get in touch directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link href="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ratrova-white py-20">
      <div className="luxury-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="heading-luxury text-4xl md:text-5xl lg:text-6xl mb-6">
              Share Your <span className="text-gold-gradient">Packaging Challenge</span>
            </h1>
            <div className="gold-divider"></div>
            <p className="text-lg text-ratrova-charcoal">
              Help us understand your needs so we can provide the best solution
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-inter text-ratrova-charcoal">
                Step {step} of {totalSteps}
              </span>
              <span className="text-sm font-inter text-ratrova-charcoal">
                {Math.round((step / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-ratrova-beige h-2 rounded-full overflow-hidden">
              <div
                className="bg-ratrova-gold h-full transition-all duration-500"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card-luxury">
            {/* Step 1: Business Info */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="heading-luxury text-2xl md:text-3xl mb-6">
                  Tell Us About Your Business
                </h2>

                <div>
                  <label className="block text-sm font-semibold text-ratrova-charcoal mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="input-luxury"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ratrova-charcoal mb-2">
                    Industry *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="input-luxury"
                    placeholder="e.g., Food & Beverage, Fashion, Cosmetics"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ratrova-charcoal mb-2">
                    Current Packaging Situation *
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.currentSituation}
                    onChange={(e) => setFormData({ ...formData, currentSituation: e.target.value })}
                    className="input-luxury"
                    placeholder="Briefly describe your current packaging situation"
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-primary w-full"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Pain Point Checklist */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="heading-luxury text-2xl md:text-3xl mb-6">
                  Select Your Pain Points
                </h2>
                <p className="text-ratrova-charcoal mb-6">
                  Check all that apply to your current situation:
                </p>

                <div className="space-y-4">
                  {painPointOptions.map((point, index) => (
                    <label key={index} className="flex items-start space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.painPoints.includes(point)}
                        onChange={() => handlePainPointToggle(point)}
                        className="checkbox-luxury mt-1"
                      />
                      <span className="text-ratrova-charcoal group-hover:text-ratrova-gold transition-colors">
                        {point}
                      </span>
                    </label>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ratrova-charcoal mb-2">
                    Other (Please specify)
                  </label>
                  <input
                    type="text"
                    className="input-luxury"
                    placeholder="Describe any other challenges..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary flex-1"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={formData.painPoints.length === 0}
                    className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Priority Ranking */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="heading-luxury text-2xl md:text-3xl mb-6">
                  Rank Your Top 3 Pain Points
                </h2>
                <p className="text-ratrova-charcoal mb-6">
                  From the pain points you selected, what are your top 3 priorities?
                </p>

                {[1, 2, 3].map((num) => (
                  <div key={num}>
                    <label className="block text-sm font-semibold text-ratrova-charcoal mb-2">
                      Priority {num} *
                    </label>
                    <select
                      required
                      value={formData.topPainPoints[num - 1]}
                      onChange={(e) => {
                        const newTop = [...formData.topPainPoints]
                        newTop[num - 1] = e.target.value
                        setFormData({ ...formData, topPainPoints: newTop })
                      }}
                      className="input-luxury"
                    >
                      <option value="">Select pain point</option>
                      {formData.painPoints.map((point, index) => (
                        <option key={index} value={point}>{point}</option>
                      ))}
                    </select>
                  </div>
                ))}

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary flex-1"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary flex-1"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Detailed Description */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="heading-luxury text-2xl md:text-3xl mb-6">
                  Tell Us More
                </h2>
                <p className="text-ratrova-charcoal mb-6">
                  Please provide more details about your specific packaging challenges:
                </p>

                <textarea
                  required
                  rows="8"
                  value={formData.detailedDescription}
                  onChange={(e) => setFormData({ ...formData, detailedDescription: e.target.value })}
                  className="input-luxury"
                  placeholder="Describe your challenges in detail... What have you tried? What specific outcomes are you looking for?"
                ></textarea>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary flex-1"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary flex-1"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Contact Info */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="heading-luxury text-2xl md:text-3xl mb-2">
                    How Can We Reach You?
                  </h2>
                  {autoFilled && (
                    <div className="flex items-center space-x-2 mb-4">
                      <svg className="w-5 h-5 text-ratrova-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-ratrova-gold font-inter">
                        Information auto-filled from your account
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ratrova-charcoal mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-luxury"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ratrova-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-luxury"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ratrova-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-luxury"
                    placeholder="+880 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ratrova-charcoal mb-2">
                    Preferred Contact Method *
                  </label>
                  <div className="space-y-2">
                    {['email', 'phone', 'whatsapp'].map((method) => (
                      <label key={method} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          className="w-4 h-4 text-ratrova-gold focus:ring-ratrova-gold"
                        />
                        <span className="text-ratrova-charcoal capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary flex-1"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary flex-1"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 6: Timeline */}
            {step === 6 && (
              <div className="space-y-6">
                <h2 className="heading-luxury text-2xl md:text-3xl mb-6">
                  When Do You Need a Solution?
                </h2>

                <div className="space-y-4">
                  {[
                    { value: 'urgent', label: 'Urgent (within 1 month)', description: 'Need immediate solution' },
                    { value: 'soon', label: 'Soon (1-3 months)', description: 'Actively planning' },
                    { value: 'planning', label: 'Planning (3-6 months)', description: 'Researching options' },
                    { value: 'exploring', label: 'Exploring (6+ months)', description: 'Early stage inquiry' }
                  ].map((option) => (
                    <label key={option.value} className="card-luxury flex items-start space-x-4 cursor-pointer hover:border-ratrova-gold">
                      <input
                        type="radio"
                        name="timeline"
                        value={option.value}
                        checked={formData.timeline === option.value}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-5 h-5 text-ratrova-gold focus:ring-ratrova-gold mt-1"
                        required
                      />
                      <div>
                        <div className="font-semibold text-ratrova-black">{option.label}</div>
                        <div className="text-sm text-ratrova-charcoal">{option.description}</div>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary flex-1"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1"
                  >
                    Submit Survey
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
