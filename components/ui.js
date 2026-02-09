'use client'

/**
 * Button Component - Reusable button with multiple variants
 * Usage: <Button variant="primary">Click Me</Button>
 */
export function Button({
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    icon,
    onClick,
    className = '',
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center gap-3 font-bold uppercase tracking-wide transition-all duration-300'

    const variants = {
        primary: 'bg-[#D4AF37] text-[#050505] hover:scale-105',
        secondary: 'bg-[#006A4E] text-white hover:scale-105 shadow-[0_0_30px_rgba(0,106,78,0.4)]',
        outline: 'bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] hover:scale-105',
        ghost: 'bg-transparent text-[#888888] hover:text-[#D4AF37]',
        danger: 'bg-red-600 text-white hover:bg-red-700',
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-8 py-4',
        lg: 'px-10 py-5 text-lg',
    }

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
            {...props}
        >
            {loading ? (
                <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : icon}
            {children}
        </button>
    )
}

/**
 * Card Component - Reusable card container
 * Usage: <Card variant="highlighted">Content</Card>
 */
export function Card({
    children,
    variant = 'default',
    className = '',
    ...props
}) {
    const variants = {
        default: 'bg-[#0A0A0A] border border-[#222222]',
        highlighted: 'bg-[#0A0A0A] border-2 border-[#D4AF37]',
        success: 'bg-[#0A0A0A] border-2 border-[#006A4E]',
    }

    return (
        <div
            className={`p-6 transition-all duration-300 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

/**
 * Badge Component - Reusable badge/tag
 * Usage: <Badge variant="gold">New</Badge>
 */
export function Badge({
    children,
    variant = 'gold',
    className = '',
    ...props
}) {
    const variants = {
        gold: 'bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.3)] text-[#D4AF37]',
        gray: 'bg-[rgba(136,136,136,0.2)] text-[#888888]',
        green: 'bg-[rgba(0,106,78,0.2)] text-[#006A4E]',
    }

    return (
        <span
            className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-medium ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </span>
    )
}

/**
 * Input Component - Reusable form input
 * Usage: <Input label="Email" type="email" />
 */
export function Input({
    label,
    error,
    className = '',
    ...props
}) {
    return (
        <div className="w-full">
            {label && (
                <label className="block mb-2 text-sm font-medium text-[#888888]">
                    {label}
                </label>
            )}
            <input
                className={`w-full px-4 py-3 bg-[#111111] border border-[#222222] text-white placeholder-[#555555] focus:outline-none focus:border-[#D4AF37] transition-colors ${error ? 'border-red-500' : ''} ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    )
}

/**
 * Spinner Component - Loading indicator
 * Usage: <Spinner size="lg" />
 */
export function Spinner({
    size = 'md',
    className = ''
}) {
    const sizes = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-3',
        lg: 'w-12 h-12 border-4',
    }

    return (
        <div
            className={`${sizes[size]} border-[#D4AF37] border-t-transparent rounded-full animate-spin ${className}`}
        />
    )
}

/**
 * Section Component - Page section container
 * Usage: <Section dark>Content</Section>
 */
export function Section({
    children,
    dark = false,
    className = '',
    id,
    ...props
}) {
    return (
        <section
            id={id}
            className={`py-20 ${dark ? 'bg-[#050505]' : 'bg-[#0A0A0A]'} ${className}`}
            {...props}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    )
}

/**
 * Heading Component - Typography headings
 * Usage: <Heading level={1}>Title</Heading>
 */
export function Heading({
    children,
    level = 2,
    gold = false,
    className = '',
    ...props
}) {
    const sizes = {
        1: 'text-4xl sm:text-5xl lg:text-6xl',
        2: 'text-2xl sm:text-3xl',
        3: 'text-xl sm:text-2xl',
        4: 'text-lg',
    }

    const Tag = `h${level}`
    const colorClass = gold ? 'text-[#D4AF37]' : 'text-white'

    return (
        <Tag
            className={`font-bold ${sizes[level]} ${colorClass} ${className}`}
            {...props}
        >
            {children}
        </Tag>
    )
}
