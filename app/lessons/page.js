'use client'

import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import ContentProtection from '../../components/ContentProtection'
import '../content-protection.css'

// Icons
const DownloadIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
)

const BookIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
)

const CheckCircleIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)

const LockIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
)

const UploadIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
)

const ShareIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
)

// Lessons data
const lessons = [
    {
        id: 1,
        title: 'Lesson 01: Foundation of Export-Quality Packaging',
        description: 'Master the fundamentals of packaging that meets international standards. Learn about materials, structural design, and compliance requirements.',
        file: '/lesson-01.html',
        status: 'available'
    },
    {
        id: 2,
        title: 'Lesson 02: Brand DNA & Visual Identity',
        description: 'Discover how world-class brands create memorable packaging. Color psychology, typography, and visual hierarchy.',
        file: null,
        status: 'coming_soon'
    },
    {
        id: 3,
        title: 'Lesson 03: Production-Ready Dielines',
        description: 'From concept to production - learn to create dielines that manufacturers love.',
        file: null,
        status: 'coming_soon'
    }
]

export default function LessonsPage() {
    const { user, isLoaded } = useUser()
    const [completedLessons, setCompletedLessons] = useState([])
    const [showBadgeGenerator, setShowBadgeGenerator] = useState(false)

    // Badge Generator State
    const [selectedBadge, setSelectedBadge] = useState('patriot')
    const [userImage, setUserImage] = useState(null)
    const [generatedBadge, setGeneratedBadge] = useState(null)
    const [isCanvasReady, setIsCanvasReady] = useState(false)
    const [scale, setScale] = useState(1.5)
    const [positionX, setPositionX] = useState(0)
    const [positionY, setPositionY] = useState(0)
    const [isBadgeLoading, setIsBadgeLoading] = useState(false)
    const [badgesPreloaded, setBadgesPreloaded] = useState(false)
    const canvasRef = useRef(null)
    const preloadedBadges = useRef({})
    const fileInputRef = useRef(null)
    const badgeSectionRef = useRef(null)

    // Preload badge images
    useEffect(() => {
        const preloadBadgesFunc = async () => {
            const badgePaths = ['/Badges/badge-patriot.png', '/Badges/badge-business.png']
            for (const path of badgePaths) {
                const img = new Image()
                img.crossOrigin = 'anonymous'
                img.src = path
                await new Promise((resolve) => {
                    img.onload = resolve
                    img.onerror = resolve
                })
                preloadedBadges.current[path] = img
            }
            setBadgesPreloaded(true)
        }
        preloadBadgesFunc()
    }, [])

    // Canvas Drawing Effect
    useEffect(() => {
        if (!canvasRef.current || !userImage) return
        setIsBadgeLoading(true)

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const size = 500
        canvas.width = size
        canvas.height = size

        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = () => {
            ctx.clearRect(0, 0, size, size)
            const imgRatio = img.width / img.height
            let drawWidth, drawHeight
            if (imgRatio > 1) {
                drawHeight = size * scale
                drawWidth = drawHeight * imgRatio
            } else {
                drawWidth = size * scale
                drawHeight = drawWidth / imgRatio
            }
            const baseOffsetX = (size - drawWidth) / 2
            const baseOffsetY = (size - drawHeight) / 2
            const adjustedOffsetX = baseOffsetX + (positionX * 0.5)
            const adjustedOffsetY = baseOffsetY + (positionY * 0.5)

            ctx.drawImage(img, adjustedOffsetX, adjustedOffsetY, drawWidth, drawHeight)

            const badgeSrc = selectedBadge === 'patriot'
                ? '/Badges/badge-patriot.png'
                : '/Badges/badge-business.png'

            const drawBadge = (badgeImg) => {
                ctx.drawImage(badgeImg, 0, 0, size, size)
                setGeneratedBadge(canvas.toDataURL('image/png'))
                setIsCanvasReady(true)
                setIsBadgeLoading(false)
            }

            if (preloadedBadges.current[badgeSrc] && preloadedBadges.current[badgeSrc].complete) {
                drawBadge(preloadedBadges.current[badgeSrc])
            } else {
                const badge = new Image()
                badge.crossOrigin = 'anonymous'
                badge.onload = () => drawBadge(badge)
                badge.onerror = () => {
                    setGeneratedBadge(canvas.toDataURL('image/png'))
                    setIsCanvasReady(true)
                    setIsBadgeLoading(false)
                }
                badge.src = badgeSrc
            }
        }
        img.src = userImage
    }, [userImage, selectedBadge, scale, positionX, positionY])

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                setUserImage(event.target?.result)
                setIsCanvasReady(false)
                setGeneratedBadge(null)
                setScale(1.5)
                setPositionX(0)
                setPositionY(0)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleDownloadBadge = () => {
        if (!generatedBadge) return
        const link = document.createElement('a')
        link.download = 'Mission2030-Badge.png'
        link.href = generatedBadge
        link.click()
    }

    const handleShareBadge = () => {
        if (!generatedBadge) return
        // Try Web Share API
        if (navigator.share) {
            fetch(generatedBadge)
                .then(res => res.blob())
                .then(blob => {
                    const file = new File([blob], 'Mission2030-Badge.png', { type: 'image/png' })
                    navigator.share({
                        title: 'My Mission 2030 Badge',
                        text: 'I just earned my Mission 2030 Badge! 🏆 Join the movement at ratrova.com',
                        files: [file]
                    }).catch(() => { })
                })
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard?.writeText('I just earned my Mission 2030 Badge! 🏆 Join the movement at https://ratrova.com')
            alert('Link copied to clipboard! Share it with pride! 🎉')
        }
    }

    // Loading state
    if (!isLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#050505' }}>
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-6" style={{ borderColor: '#D4AF37', borderTopColor: 'transparent' }}></div>
                    <p className="text-xl" style={{ color: '#888888' }}>Loading lessons...</p>
                </div>
            </div>
        )
    }

    const handleStartLesson = (lesson) => {
        if (!completedLessons.includes(lesson.id)) {
            setCompletedLessons([...completedLessons, lesson.id])
        }
        window.open(lesson.file, '_blank')
    }

    const handleCompleteAndBadge = (lesson) => {
        if (!completedLessons.includes(lesson.id)) {
            setCompletedLessons([...completedLessons, lesson.id])
        }
        setShowBadgeGenerator(true)
        // Scroll to badge generator
        setTimeout(() => {
            badgeSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    const firstName = user?.firstName || 'Builder'

    return (
        <ContentProtection enabled={true}>
            <div className="min-h-screen py-20" style={{ backgroundColor: '#050505' }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                            <span className="text-sm font-medium" style={{ color: '#D4AF37' }}>🎓 MISSION 2030 ACADEMY</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
                            Welcome, <span style={{ color: '#D4AF37' }}>{firstName}!</span>
                        </h1>

                        <p className="text-xl max-w-2xl mx-auto" style={{ color: '#888888' }}>
                            Your journey to becoming a world-class packaging expert starts here.
                            Access exclusive lessons crafted from 18 years of industry experience.
                        </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-12 p-6" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium" style={{ color: '#888888' }}>Your Progress</span>
                            <span className="text-sm font-bold" style={{ color: '#D4AF37' }}>{completedLessons.length} / {lessons.filter(l => l.status === 'available').length} Lessons Completed</span>
                        </div>
                        <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#222222' }}>
                            <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                    backgroundColor: '#006A4E',
                                    width: `${(completedLessons.length / lessons.filter(l => l.status === 'available').length) * 100}%`
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Lessons Grid */}
                    <div className="space-y-6">
                        {lessons.map((lesson) => (
                            <div
                                key={lesson.id}
                                className="p-6 sm:p-8 transition-all duration-300"
                                style={{
                                    backgroundColor: '#0A0A0A',
                                    border: lesson.status === 'available'
                                        ? completedLessons.includes(lesson.id)
                                            ? '2px solid #006A4E'
                                            : '2px solid #D4AF37'
                                        : '1px solid #222222',
                                    opacity: lesson.status === 'coming_soon' ? 0.6 : 1
                                }}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                    {/* Lesson Icon */}
                                    <div
                                        className="w-16 h-16 flex items-center justify-center flex-shrink-0"
                                        style={{
                                            backgroundColor: lesson.status === 'available'
                                                ? 'rgba(212, 175, 55, 0.1)'
                                                : 'rgba(136, 136, 136, 0.1)',
                                            border: `1px solid ${lesson.status === 'available' ? '#D4AF37' : '#333333'}`
                                        }}
                                    >
                                        {completedLessons.includes(lesson.id) ? (
                                            <span style={{ color: '#006A4E' }}><CheckCircleIcon /></span>
                                        ) : lesson.status === 'coming_soon' ? (
                                            <span style={{ color: '#555555' }}><LockIcon /></span>
                                        ) : (
                                            <span style={{ color: '#D4AF37' }}><BookIcon /></span>
                                        )}
                                    </div>

                                    {/* Lesson Info */}
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                                            <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#FFFFFF' }}>
                                                {lesson.title}
                                            </h3>
                                            {lesson.status === 'coming_soon' && (
                                                <span className="px-2 py-1 text-xs font-bold uppercase" style={{ backgroundColor: 'rgba(136, 136, 136, 0.2)', color: '#888888' }}>
                                                    Coming Soon
                                                </span>
                                            )}
                                            {completedLessons.includes(lesson.id) && (
                                                <span className="px-2 py-1 text-xs font-bold uppercase" style={{ backgroundColor: 'rgba(0, 106, 78, 0.2)', color: '#006A4E' }}>
                                                    ✅ Completed
                                                </span>
                                            )}
                                        </div>
                                        <p className="mb-3" style={{ color: '#888888' }}>{lesson.description}</p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex-shrink-0 flex flex-col gap-3">
                                        {lesson.status === 'available' ? (
                                            <>
                                                <button
                                                    onClick={() => handleStartLesson(lesson)}
                                                    className="inline-flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                                                    style={{
                                                        backgroundColor: completedLessons.includes(lesson.id) ? '#0A0A0A' : '#006A4E',
                                                        color: completedLessons.includes(lesson.id) ? '#006A4E' : '#FFFFFF',
                                                        border: completedLessons.includes(lesson.id) ? '2px solid #006A4E' : 'none',
                                                        boxShadow: completedLessons.includes(lesson.id) ? 'none' : '0 0 30px rgba(0, 106, 78, 0.4)'
                                                    }}
                                                >
                                                    <DownloadIcon />
                                                    {completedLessons.includes(lesson.id) ? 'View Again' : 'Start Lesson'}
                                                </button>

                                                {/* Show "Generate Badge" button after completion */}
                                                {completedLessons.includes(lesson.id) && (
                                                    <button
                                                        onClick={() => handleCompleteAndBadge(lesson)}
                                                        className="inline-flex items-center gap-3 px-8 py-3 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                                                        style={{
                                                            backgroundColor: '#D4AF37',
                                                            color: '#050505'
                                                        }}
                                                    >
                                                        🏆 Generate Badge
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <button
                                                disabled
                                                className="inline-flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-wide cursor-not-allowed"
                                                style={{ backgroundColor: '#1A1A1A', color: '#555555' }}
                                            >
                                                <LockIcon />
                                                Locked
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ===== BADGE GENERATOR SECTION ===== */}
                    <div ref={badgeSectionRef} className="mt-16">
                        {!showBadgeGenerator ? (
                            /* Badge Showcase CTA */
                            <div className="p-8 text-center" style={{ backgroundColor: '#0A0A0A', border: '2px solid #D4AF37' }}>
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                                    🏆 Earn Your <span style={{ color: '#D4AF37' }}>Mission 2030 Badge</span>
                                </h2>
                                <p className="mb-6" style={{ color: '#888888' }}>
                                    Complete a lesson, then generate your personalized badge to share with pride!
                                </p>
                                {completedLessons.length > 0 ? (
                                    <button
                                        onClick={() => setShowBadgeGenerator(true)}
                                        className="inline-flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                                        style={{ backgroundColor: '#D4AF37', color: '#050505' }}
                                    >
                                        🏆 Generate Your Badge Now
                                    </button>
                                ) : (
                                    <p className="text-sm" style={{ color: '#555555' }}>
                                        Complete your first lesson to unlock badge generation
                                    </p>
                                )}
                            </div>
                        ) : (
                            /* Inline Badge Generator */
                            <div className="p-8" style={{ backgroundColor: '#0A0A0A', border: '2px solid #D4AF37' }}>
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                                        🏆 Create Your <span style={{ color: '#D4AF37' }}>Mission 2030 Badge</span>
                                    </h2>
                                    <p style={{ color: '#888888' }}>
                                        Upload your photo, customize, and share with pride! 🎉
                                    </p>
                                </div>

                                {/* Badge Type Selector */}
                                <div className="flex justify-center gap-4 mb-8">
                                    <button
                                        onClick={() => setSelectedBadge('patriot')}
                                        className="px-6 py-3 font-bold uppercase tracking-wide transition-all duration-300"
                                        style={{
                                            backgroundColor: selectedBadge === 'patriot' ? '#D4AF37' : 'transparent',
                                            color: selectedBadge === 'patriot' ? '#050505' : '#D4AF37',
                                            border: '2px solid #D4AF37'
                                        }}
                                    >
                                        🇧🇩 Patriot Builder
                                    </button>
                                    <button
                                        onClick={() => setSelectedBadge('business')}
                                        className="px-6 py-3 font-bold uppercase tracking-wide transition-all duration-300"
                                        style={{
                                            backgroundColor: selectedBadge === 'business' ? '#D4AF37' : 'transparent',
                                            color: selectedBadge === 'business' ? '#050505' : '#D4AF37',
                                            border: '2px solid #D4AF37'
                                        }}
                                    >
                                        🌍 Future Global Brand
                                    </button>
                                </div>

                                {/* Canvas Area */}
                                <div className="flex justify-center mb-8">
                                    <div className="w-full max-w-[500px] aspect-square flex items-center justify-center overflow-hidden relative" style={{ backgroundColor: '#111111', border: '2px dashed #333333' }}>
                                        {!userImage ? (
                                            <div className="text-center p-8">
                                                <UploadIcon />
                                                <p className="text-base mt-4" style={{ color: '#555555' }}>Upload your photo to generate badge</p>
                                                {!badgesPreloaded && (
                                                    <p className="text-xs mt-2" style={{ color: '#D4AF37' }}>Loading badge frames...</p>
                                                )}
                                            </div>
                                        ) : (
                                            <>
                                                <canvas ref={canvasRef} className="w-full h-full" style={{ maxWidth: '500px', maxHeight: '500px' }} />
                                                {isBadgeLoading && (
                                                    <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                                                        <div className="text-center">
                                                            <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4" style={{ borderColor: '#D4AF37', borderTopColor: 'transparent' }}></div>
                                                            <p className="text-sm" style={{ color: '#D4AF37' }}>Generating badge...</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Controls */}
                                {userImage && (
                                    <div className="max-w-md mx-auto mb-8 space-y-4">
                                        {/* Zoom */}
                                        <div>
                                            <label className="text-sm font-bold flex justify-between mb-1" style={{ color: '#888888' }}>
                                                <span>🔍 Zoom</span>
                                                <span style={{ color: '#D4AF37' }}>{scale.toFixed(1)}x</span>
                                            </label>
                                            <input type="range" min="1" max="3" step="0.1" value={scale} onChange={(e) => setScale(parseFloat(e.target.value))} className="w-full accent-[#D4AF37]" />
                                        </div>
                                        {/* Horizontal */}
                                        <div>
                                            <label className="text-sm font-bold flex justify-between mb-1" style={{ color: '#888888' }}>
                                                <span>↔️ Horizontal</span>
                                                <span style={{ color: '#D4AF37' }}>{positionX}</span>
                                            </label>
                                            <input type="range" min="-100" max="100" step="1" value={positionX} onChange={(e) => setPositionX(parseInt(e.target.value))} className="w-full accent-[#D4AF37]" />
                                        </div>
                                        {/* Vertical */}
                                        <div>
                                            <label className="text-sm font-bold flex justify-between mb-1" style={{ color: '#888888' }}>
                                                <span>↕️ Vertical</span>
                                                <span style={{ color: '#D4AF37' }}>{positionY}</span>
                                            </label>
                                            <input type="range" min="-100" max="100" step="1" value={positionY} onChange={(e) => setPositionY(parseInt(e.target.value))} className="w-full accent-[#D4AF37]" />
                                        </div>
                                    </div>
                                )}

                                {/* Upload / Action Buttons */}
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                                        style={{
                                            backgroundColor: userImage ? 'transparent' : '#D4AF37',
                                            color: userImage ? '#D4AF37' : '#050505',
                                            border: userImage ? '2px solid #D4AF37' : 'none'
                                        }}
                                    >
                                        <UploadIcon />
                                        {userImage ? 'Change Photo' : 'Upload Photo'}
                                    </button>

                                    {isCanvasReady && generatedBadge && (
                                        <>
                                            <button
                                                onClick={handleDownloadBadge}
                                                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                                                style={{ backgroundColor: '#006A4E', color: '#FFFFFF', boxShadow: '0 0 30px rgba(0, 106, 78, 0.4)' }}
                                            >
                                                <DownloadIcon /> Download Badge
                                            </button>
                                            <button
                                                onClick={handleShareBadge}
                                                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                                                style={{ backgroundColor: '#1877F2', color: '#FFFFFF' }}
                                            >
                                                <ShareIcon /> Share with Pride
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-12 text-center">
                        <p style={{ color: '#555555' }}>
                            Need help or have questions?
                            <a
                                href="https://wa.me/8801611616861"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 font-medium hover:underline"
                                style={{ color: '#D4AF37' }}
                            >
                                Contact us on WhatsApp
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </ContentProtection>
    )
}
