import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-ratrova-black">
            <SignIn
                appearance={{
                    elements: {
                        rootBox: "mx-auto",
                        card: "bg-ratrova-charcoal border border-ratrova-gold/20 shadow-2xl",
                        headerTitle: "text-ratrova-gold font-cormorant",
                        headerSubtitle: "text-ratrova-beige",
                        formButtonPrimary: "bg-ratrova-gold hover:bg-ratrova-accent text-ratrova-black",
                        footerActionLink: "text-ratrova-gold hover:text-ratrova-accent"
                    }
                }}
            />
        </div>
    )
}
