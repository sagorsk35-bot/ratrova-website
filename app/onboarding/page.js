'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { saveUserProfile } from '@/lib/profile-action'

const professions = [
    { id: 'student', label: 'Student', icon: '🎓', description: 'Learning & building skills' },
    { id: 'job_holder', label: 'Job Holder', icon: '💼', description: 'Working professional' },
    { id: 'businessman', label: 'Businessman', icon: '🏢', description: 'Business owner' },
    { id: 'entrepreneur', label: 'Entrepreneur', icon: '🚀', description: 'Starting something new' },
]

export default function OnboardingPage() {
    const { user, isLoaded } = useUser()
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [username, setUsername] = useState('')
    const [selectedProfession, setSelectedProfession] = useState('')
    const [businessDetails, setBusinessDetails] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(null)

    if (!isLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#050505' }}>
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-6" style={{ borderColor: '#D4AF37', borderTopColor: 'transparent' }}></div>
                    <p className="text-xl" style={{ color: '#888888' }}>Loading...</p>
                </div>
            </div>
        )
    }

    const handleSubmit = async () => {
        if (!username.trim()) {
            setError('Please enter a username')
            return
        }
        if (!selectedProfession) {
            setError('Please select your profession')
            return
        }

        setIsSubmitting(true)
        setError(null)

        try {
            const result = await saveUserProfile({
                userId: user?.id,
                username: username.trim(),
                profession: selectedProfession,
                businessDetails: businessDetails.trim() || null
            })

            if (result.success) {
                router.push('/lessons')
            } else {
                setError(result.error || 'Failed to save profile.')
            }
        } catch (err) {
            setError('Something went wrong. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen py-20 flex items-center justify-center" style={{ backgroundColor: '#050505' }}>
            <div className="max-w-2xl mx-auto px-4 w-full">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                        <span className="text-sm font-medium" style={{ color: '#D4AF37' }}>✨ WELCOME TO MISSION 2030</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                        Let's Set Up Your <span style={{ color: '#D4AF37' }}>Profile</span>
                    </h1>
                    <p className="text-lg" style={{ color: '#888888' }}>
                        Tell us about yourself so we can personalize your experience
                    </p>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-3">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                                style={{
                                    backgroundColor: step >= s ? '#D4AF37' : '#222222',
                                    color: step >= s ? '#050505' : '#555555',
                                    boxShadow: step === s ? '0 0 20px rgba(212, 175, 55, 0.4)' : 'none'
                                }}
                            >
                                {step > s ? '✓' : s}
                            </div>
                            {s < 3 && (
                                <div className="w-12 h-0.5" style={{ backgroundColor: step > s ? '#D4AF37' : '#333333' }}></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Step 1: Username */}
                {step === 1 && (
                    <div className="p-8 transition-all duration-500" style={{ backgroundColor: '#0A0A0A', border: '2px solid #222222' }}>
                        <h2 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                            Choose Your Username
                        </h2>
                        <p className="mb-6" style={{ color: '#888888' }}>
                            This will be displayed on your badges and certificates
                        </p>

                        <input
                            type="text"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value); setError(null) }}
                            placeholder="Enter your username"
                            className="w-full px-5 py-4 text-lg mb-6 focus:outline-none transition-all duration-300"
                            style={{
                                backgroundColor: '#111111',
                                border: '2px solid #333333',
                                color: '#FFFFFF',
                                borderColor: error ? '#EF4444' : username ? '#D4AF37' : '#333333'
                            }}
                            autoFocus
                        />

                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                        <button
                            onClick={() => {
                                if (!username.trim()) { setError('Please enter a username'); return }
                                setError(null)
                                setStep(2)
                            }}
                            className="w-full py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-[1.02]"
                            style={{ backgroundColor: '#D4AF37', color: '#050505' }}
                        >
                            Continue →
                        </button>
                    </div>
                )}

                {/* Step 2: Profession Selector */}
                {step === 2 && (
                    <div className="p-8 transition-all duration-500" style={{ backgroundColor: '#0A0A0A', border: '2px solid #222222' }}>
                        <h2 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                            What's Your Profession?
                        </h2>
                        <p className="mb-6" style={{ color: '#888888' }}>
                            Select the option that best describes you
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {professions.map((prof) => (
                                <button
                                    key={prof.id}
                                    onClick={() => { setSelectedProfession(prof.id); setError(null) }}
                                    className="p-5 text-left transition-all duration-300 hover:scale-[1.03]"
                                    style={{
                                        backgroundColor: selectedProfession === prof.id ? 'rgba(212, 175, 55, 0.1)' : '#111111',
                                        border: selectedProfession === prof.id ? '2px solid #D4AF37' : '2px solid #222222',
                                        boxShadow: selectedProfession === prof.id ? '0 0 20px rgba(212, 175, 55, 0.2)' : 'none'
                                    }}
                                >
                                    <div className="text-3xl mb-2">{prof.icon}</div>
                                    <div className="font-bold text-lg" style={{ color: selectedProfession === prof.id ? '#D4AF37' : '#FFFFFF' }}>
                                        {prof.label}
                                    </div>
                                    <div className="text-sm mt-1" style={{ color: '#888888' }}>
                                        {prof.description}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                        <div className="flex gap-4">
                            <button
                                onClick={() => setStep(1)}
                                className="flex-1 py-4 font-bold uppercase tracking-wide transition-all duration-300"
                                style={{ backgroundColor: 'transparent', color: '#888888', border: '2px solid #333333' }}
                            >
                                ← Back
                            </button>
                            <button
                                onClick={() => {
                                    if (!selectedProfession) { setError('Please select your profession'); return }
                                    setError(null)
                                    setStep(3)
                                }}
                                className="flex-1 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-[1.02]"
                                style={{ backgroundColor: '#D4AF37', color: '#050505' }}
                            >
                                Continue →
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Business/Job Details */}
                {step === 3 && (
                    <div className="p-8 transition-all duration-500" style={{ backgroundColor: '#0A0A0A', border: '2px solid #222222' }}>
                        <h2 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                            Tell Us About Your {selectedProfession === 'student' ? 'Studies' : selectedProfession === 'job_holder' ? 'Job' : 'Business'}
                        </h2>
                        <p className="mb-6" style={{ color: '#888888' }}>
                            {selectedProfession === 'student'
                                ? 'What are you studying and where?'
                                : selectedProfession === 'job_holder'
                                    ? 'What company do you work for and your role?'
                                    : 'What kind of business do you run?'
                            }
                        </p>

                        <textarea
                            value={businessDetails}
                            onChange={(e) => setBusinessDetails(e.target.value)}
                            placeholder={
                                selectedProfession === 'student'
                                    ? 'e.g., Studying Business at Dhaka University...'
                                    : selectedProfession === 'job_holder'
                                        ? 'e.g., Marketing Manager at ABC Company...'
                                        : 'e.g., Food packaging manufacturing business...'
                            }
                            rows={4}
                            className="w-full px-5 py-4 text-lg mb-6 focus:outline-none transition-all duration-300 resize-none"
                            style={{
                                backgroundColor: '#111111',
                                border: '2px solid #333333',
                                color: '#FFFFFF'
                            }}
                        />

                        {/* Profile Preview */}
                        <div className="mb-6 p-5" style={{ backgroundColor: '#111111', border: '1px solid #333333' }}>
                            <h3 className="text-sm font-bold uppercase mb-3" style={{ color: '#D4AF37' }}>Your Profile Preview</h3>
                            <div className="space-y-2">
                                <p style={{ color: '#FFFFFF' }}><span style={{ color: '#888888' }}>Username:</span> <strong>{username}</strong></p>
                                <p style={{ color: '#FFFFFF' }}><span style={{ color: '#888888' }}>Profession:</span> <strong>{professions.find(p => p.id === selectedProfession)?.label}</strong></p>
                                {businessDetails && (
                                    <p style={{ color: '#FFFFFF' }}><span style={{ color: '#888888' }}>Details:</span> {businessDetails}</p>
                                )}
                            </div>
                        </div>

                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                        <div className="flex gap-4">
                            <button
                                onClick={() => setStep(2)}
                                className="flex-1 py-4 font-bold uppercase tracking-wide transition-all duration-300"
                                style={{ backgroundColor: 'transparent', color: '#888888', border: '2px solid #333333' }}
                            >
                                ← Back
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="flex-1 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
                                style={{ backgroundColor: '#006A4E', color: '#FFFFFF', boxShadow: '0 0 30px rgba(0, 106, 78, 0.4)' }}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                        Saving...
                                    </span>
                                ) : (
                                    '🚀 Start Learning'
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
