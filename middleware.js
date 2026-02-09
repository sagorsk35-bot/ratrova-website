// Authentication enabled - protecting /survey and /lessons routes
// Social login (Google + Facebook) configured in Clerk Dashboard
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
    '/',
    '/about(.*)',
    '/services(.*)',
    '/portfolio(.*)',
    '/contact(.*)',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/privacy-policy(.*)',
    '/refund-policy(.*)',
    '/terms(.*)'
])
// Protected routes: /lessons, /survey (require login)

export default clerkMiddleware(async (auth, req) => {
    if (!isPublicRoute(req)) {
        await auth.protect()
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}
