export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen pt-32 pb-20" style={{ backgroundColor: '#050505' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-16 h-[2px] mb-8" style={{ backgroundColor: '#D4AF37' }}></div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
                    Privacy <span style={{ color: '#D4AF37' }}>Policy</span>
                </h1>
                <p className="text-lg mb-10" style={{ color: '#888888' }}>
                    Last updated: February 2024
                </p>

                <div className="space-y-8" style={{ color: '#AAAAAA' }}>
                    <div className="p-8" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
                        <h2 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>Your Privacy Matters</h2>
                        <p className="text-base leading-relaxed mb-4">
                            At Vision 2030, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you use our website and services.
                        </p>
                        <p className="text-base leading-relaxed">
                            We collect only the information necessary to provide you with our consultation services and educational content. Your data is never sold to third parties.
                        </p>
                    </div>

                    <div className="p-8" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
                        <h2 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>Information We Collect</h2>
                        <ul className="list-disc list-inside space-y-2 text-base">
                            <li>Name and contact information (when you book a consultation)</li>
                            <li>Email address (for communication purposes)</li>
                            <li>WhatsApp number (for consultation scheduling)</li>
                            <li>Business information (to understand your brand needs)</li>
                        </ul>
                    </div>

                    <div className="p-8" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
                        <h2 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>Contact Us</h2>
                        <p className="text-base leading-relaxed">
                            For any privacy-related concerns, please contact us through WhatsApp or our contact page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
