import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen py-20" style={{ backgroundColor: '#050505' }}>
            <div className="w-full max-w-md px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-3" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
                        Welcome to <span style={{ color: '#D4AF37' }}>Mission 2030</span>
                    </h1>
                    <p style={{ color: '#888888' }}>
                        Sign in to access exclusive lessons and resources
                    </p>
                </div>

                {/* Clerk SignIn with Social Login Styling */}
                <SignIn
                    appearance={{
                        layout: {
                            socialButtonsPlacement: 'top',
                            socialButtonsVariant: 'blockButton',
                        },
                        elements: {
                            rootBox: "mx-auto w-full",
                            card: "bg-[#0A0A0A] border-2 border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/10",
                            headerTitle: "text-[#D4AF37] font-bold text-xl",
                            headerSubtitle: "text-[#888888]",
                            socialButtonsBlockButton: "bg-[#1A1A1A] border border-[#333333] hover:border-[#D4AF37] hover:bg-[#111111] transition-all duration-300 text-white font-medium",
                            socialButtonsBlockButtonText: "text-white",
                            socialButtonsProviderIcon: "w-5 h-5",
                            dividerLine: "bg-[#333333]",
                            dividerText: "text-[#555555]",
                            formFieldLabel: "text-[#888888] font-medium",
                            formFieldInput: "bg-[#111111] border-[#333333] text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]",
                            formButtonPrimary: "bg-[#006A4E] hover:bg-[#005a42] text-white font-bold uppercase tracking-wide shadow-lg shadow-[#006A4E]/30",
                            footerActionLink: "text-[#D4AF37] hover:text-[#f0c850]",
                            identityPreviewText: "text-[#888888]",
                            identityPreviewEditButton: "text-[#D4AF37]",
                            formFieldInputShowPasswordButton: "text-[#D4AF37]",
                            otpCodeFieldInput: "bg-[#111111] border-[#333333] text-white",
                            footer: "hidden"
                        }
                    }}
                    forceRedirectUrl="/onboarding"
                />

                {/* Footer Note */}
                <p className="text-center mt-6 text-sm" style={{ color: '#555555' }}>
                    🔒 Your data is secure and protected
                </p>
            </div>
        </div>
    )
}
