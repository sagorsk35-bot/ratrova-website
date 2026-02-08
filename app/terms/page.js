export default function Terms() {
    return (
        <div className="min-h-screen pt-32 pb-20" style={{ backgroundColor: '#050505' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-16 h-[2px] mb-8" style={{ backgroundColor: '#D4AF37' }}></div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
                    Terms & <span style={{ color: '#D4AF37' }}>Conditions</span>
                </h1>
                <p className="text-lg mb-10" style={{ color: '#888888' }}>
                    Last updated: February 2024
                </p>

                <div className="space-y-8" style={{ color: '#AAAAAA' }}>
                    <div className="p-8" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
                        <h2 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>Agreement to Terms</h2>
                        <p className="text-base leading-relaxed mb-4">
                            By accessing and using the Vision 2030 website and services, you agree to be bound by these Terms and Conditions.
                        </p>
                        <p className="text-base leading-relaxed">
                            Our mission is to provide knowledge and guidance to help Bangladeshi entrepreneurs build global brands. These terms govern your use of our educational content and consultation services.
                        </p>
                    </div>

                    <div className="p-8" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
                        <h2 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>Services Provided</h2>
                        <ul className="list-disc list-inside space-y-2 text-base">
                            <li>Free educational content (Sadaqah Jariyah)</li>
                            <li>Brand strategy consultation</li>
                            <li>Export-quality packaging design services</li>
                            <li>Badge Generator for community engagement</li>
                        </ul>
                    </div>

                    <div className="p-8" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
                        <h2 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>Intellectual Property</h2>
                        <p className="text-base leading-relaxed">
                            All content, designs, and materials on this website are the property of Vision 2030 Initiative and Sheikh Mohammad Sagor, unless otherwise stated.
                        </p>
                    </div>

                    <div className="p-8" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
                        <h2 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>Consultation Disclaimer</h2>
                        <p className="text-base leading-relaxed">
                            Strategic consultations are offered as Sadaqah Jariyah (continuous charity). The advice provided is based on experience and expertise, but business outcomes depend on individual implementation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
