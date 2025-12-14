export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer className="relative">
            <div className="absolute bottom-0 w-full z-0">
                <img className="w-full opacity-[0.5] lg:mt-[-150px] " src="/images/footer.webp" />
            </div>
            <div className="relative z-50">
                <div className="lg:max-w-[800px] mx-auto py-[100px] text-white/50 mt-[-100px]">
                    <div className="text-center text-[14px]">
                        Copyright © 2023-{year} Sizo.dev.
                        <span className="block md:inline-block md:ml-1">All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}