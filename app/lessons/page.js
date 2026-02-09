'use client'

import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { useState } from 'react'

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

// Lessons data
const lessons = [
    {
        id: 1,
        title: 'Lesson 01: Foundation of Export-Quality Packaging',
        description: 'Master the fundamentals of packaging that meets international standards. Learn about materials, structural design, and compliance requirements.',
        file: '/lesson-01.html',
        duration: '45 mins',
        status: 'available'
    },
    {
        id: 2,
        title: 'Lesson 02: Brand DNA & Visual Identity',
        description: 'Discover how world-class brands create memorable packaging. Color psychology, typography, and visual hierarchy.',
        file: null,
        duration: '60 mins',
        status: 'coming_soon'
    },
    {
        id: 3,
        title: 'Lesson 03: Production-Ready Dielines',
        description: 'From concept to production - learn to create dielines that manufacturers love.',
        file: null,
        duration: '50 mins',
        status: 'coming_soon'
    }
]

export default function LessonsPage() {
    const { user, isLoaded } = useUser()
    const [downloadedLessons, setDownloadedLessons] = useState([])

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

    const handleDownload = (lesson) => {
        if (!downloadedLessons.includes(lesson.id)) {
            setDownloadedLessons([...downloadedLessons, lesson.id])
        }
        // Open lesson in new tab
        window.open(lesson.file, '_blank')
    }

    const firstName = user?.firstName || 'Builder'

    return (
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
                        <span className="text-sm font-bold" style={{ color: '#D4AF37' }}>{downloadedLessons.length} / {lessons.filter(l => l.status === 'available').length} Lessons Completed</span>
                    </div>
                    <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#222222' }}>
                        <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                                backgroundColor: '#006A4E',
                                width: `${(downloadedLessons.length / lessons.filter(l => l.status === 'available').length) * 100}%`
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
                                    ? downloadedLessons.includes(lesson.id)
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
                                    {downloadedLessons.includes(lesson.id) ? (
                                        <span style={{ color: '#006A4E' }}><CheckCircleIcon /></span>
                                    ) : lesson.status === 'coming_soon' ? (
                                        <span style={{ color: '#555555' }}><LockIcon /></span>
                                    ) : (
                                        <span style={{ color: '#D4AF37' }}><BookIcon /></span>
                                    )}
                                </div>

                                {/* Lesson Info */}
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#FFFFFF' }}>
                                            {lesson.title}
                                        </h3>
                                        {lesson.status === 'coming_soon' && (
                                            <span className="px-2 py-1 text-xs font-bold uppercase" style={{ backgroundColor: 'rgba(136, 136, 136, 0.2)', color: '#888888' }}>
                                                Coming Soon
                                            </span>
                                        )}
                                        {downloadedLessons.includes(lesson.id) && (
                                            <span className="px-2 py-1 text-xs font-bold uppercase" style={{ backgroundColor: 'rgba(0, 106, 78, 0.2)', color: '#006A4E' }}>
                                                Completed
                                            </span>
                                        )}
                                    </div>
                                    <p className="mb-3" style={{ color: '#888888' }}>{lesson.description}</p>
                                    <span className="text-sm" style={{ color: '#555555' }}>⏱️ {lesson.duration}</span>
                                </div>

                                {/* Action Button */}
                                <div className="flex-shrink-0">
                                    {lesson.status === 'available' ? (
                                        <button
                                            onClick={() => handleDownload(lesson)}
                                            className="inline-flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                                            style={{
                                                backgroundColor: downloadedLessons.includes(lesson.id) ? '#0A0A0A' : '#006A4E',
                                                color: downloadedLessons.includes(lesson.id) ? '#006A4E' : '#FFFFFF',
                                                border: downloadedLessons.includes(lesson.id) ? '2px solid #006A4E' : 'none',
                                                boxShadow: downloadedLessons.includes(lesson.id) ? 'none' : '0 0 30px rgba(0, 106, 78, 0.4)'
                                            }}
                                        >
                                            <DownloadIcon />
                                            {downloadedLessons.includes(lesson.id) ? 'View Again' : 'Start Lesson'}
                                        </button>
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

                {/* Badge Showcase Section */}
                <div className="mt-16 p-8 text-center" style={{ backgroundColor: '#0A0A0A', border: '2px solid #D4AF37' }}>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                        🏆 Earn Your <span style={{ color: '#D4AF37' }}>Mission 2030 Badge</span>
                    </h2>
                    <p className="mb-6" style={{ color: '#888888' }}>
                        Complete Lesson 01 and create your personalized badge to share on social media!
                    </p>
                    <Link
                        href="/#badge-generator"
                        className="inline-flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: '#D4AF37', color: '#050505' }}
                    >
                        Create Your Badge
                    </Link>
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
    )
}
