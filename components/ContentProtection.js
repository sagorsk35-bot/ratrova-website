'use client'

import { useEffect } from 'react'

/**
 * ContentProtection Component
 * Prevents screenshots, copying, and content theft on protected pages
 */
export default function ContentProtection({ children, enabled = true }) {
    useEffect(() => {
        if (!enabled) return

        // Disable right-click context menu
        const handleContextMenu = (e) => {
            e.preventDefault()
            return false
        }

        // Disable keyboard shortcuts for copying/printing/screenshots
        const handleKeyDown = (e) => {
            // Prevent Ctrl+C, Ctrl+P, Ctrl+S, Ctrl+Shift+S, PrintScreen
            if (
                (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'p' || e.key === 'P' || e.key === 's' || e.key === 'S')) ||
                (e.ctrlKey && e.shiftKey && (e.key === 's' || e.key === 'S' || e.key === 'i' || e.key === 'I')) ||
                e.key === 'PrintScreen' ||
                (e.metaKey && (e.key === 'c' || e.key === 'C' || e.key === 'p' || e.key === 'P' || e.key === 's' || e.key === 'S'))
            ) {
                e.preventDefault()
                return false
            }
        }

        // Blur content when window loses focus (screenshot prevention)
        const handleVisibilityChange = () => {
            const protectedElements = document.querySelectorAll('.content-protected')
            if (document.hidden) {
                protectedElements.forEach(el => el.classList.add('window-blur'))
            } else {
                protectedElements.forEach(el => el.classList.remove('window-blur'))
            }
        }

        // Blur content when window loses focus
        const handleBlur = () => {
            const protectedElements = document.querySelectorAll('.content-protected')
            protectedElements.forEach(el => el.classList.add('window-blur'))
        }

        const handleFocus = () => {
            const protectedElements = document.querySelectorAll('.content-protected')
            protectedElements.forEach(el => el.classList.remove('window-blur'))
        }

        // Add event listeners
        document.addEventListener('contextmenu', handleContextMenu)
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('visibilitychange', handleVisibilityChange)
        window.addEventListener('blur', handleBlur)
        window.addEventListener('focus', handleFocus)

        // Disable copy event
        const handleCopy = (e) => {
            e.preventDefault()
            return false
        }
        document.addEventListener('copy', handleCopy)

        // Disable drag
        const handleDragStart = (e) => {
            e.preventDefault()
            return false
        }
        document.addEventListener('dragstart', handleDragStart)

        // Cleanup
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu)
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('visibilitychange', handleVisibilityChange)
            document.removeEventListener('copy', handleCopy)
            document.removeEventListener('dragstart', handleDragStart)
            window.removeEventListener('blur', handleBlur)
            window.removeEventListener('focus', handleFocus)
        }
    }, [enabled])

    if (!enabled) return children

    return (
        <div className="content-protected">
            {children}
            {/* Watermark overlay */}
            <div className="content-watermark" />
        </div>
    )
}
