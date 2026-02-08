export default function RefundPolicy() {
    return (
        <div className="min-h-screen pt-32 pb-20" style={{ backgroundColor: '#050505' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-16 h-[2px] mb-8" style={{ backgroundColor: '#D4AF37' }}></div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
                    Refund <span style={{ color: '#D4AF37' }}>Policy</span>
                </h1>
                <p className="text-lg mb-10" style={{ color: '#888888' }}>
                    Last updated: February 2024
                </p>

                <div className="space-y-8" style={{ color: '#AAAAAA' }}>
                    <div className="p-8" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
                        <h2 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>Our Commitment</h2>
                        <p className="text-base leading-relaxed mb-4">
                            At Vision 2030, customer satisfaction is our priority. This policy outlines our refund terms for production and packaging services.
                        </p>
                    </div>

                    <div className="p-8" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
                        <h2 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>Free Services</h2>
                        <p className="text-base leading-relaxed mb-4">
                            Strategic consultation services are offered as <strong style={{ color: '#D4AF37' }}>Sadaqah Jariyah</strong> — completely free of charge for serious founders building for Bangladesh.
                        </p>
                        <p className="text-base leading-relaxed">
                            Educational content, including lessons and resources, are provided free of charge and require no refund policy.
                        </p>
                    </div>

                    <div className="p-8" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
                        <h2 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>Production Services</h2>
                        <p className="text-base leading-relaxed mb-4">
                            For packaging production and manufacturing services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base">
                            <li>Refunds are considered on a case-by-case basis</li>
                            <li>Design revisions are included in the project scope</li>
                            <li>Production errors are corrected at no additional cost</li>
                            <li>Custom orders may have different terms</li>
                        </ul>
                    </div>

                    <div className="p-8" style={{ backgroundColor: '#0A0A0A', border: '1px solid #222222' }}>
                        <h2 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>Contact for Support</h2>
                        <p className="text-base leading-relaxed">
                            For any concerns regarding refunds or service quality, please contact us directly through WhatsApp or our contact page. We are committed to resolving issues promptly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
