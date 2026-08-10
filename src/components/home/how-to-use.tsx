import version from "@utils/version"

const v = await version()

const unpkgUrl = `https://unpkg.com/confettis@${v}/lib/confettis.min.js`
const localUrl = `/lib/confettis.min.js`

export default function HowToUse() {

    return (
        <div className="relative bg-white/5 w-full h-full squircle squircle-md backdrop-blur-5xl border border-white/20 overflow-hidden">

            <div className="absolute inset-0 overflow-y-scroll no-scrollbar-but-scroll">

                <div className="z-50 relative mx-auto flex min-h-full w-full max-w-full flex-col items-center justify-center p-5 md:max-w-200">
                    
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-inter-black mb-10 text-center">
                        How to use
                    </h2>

                    <div className="flex flex-col gap-10 w-full">

                        <div>

                            <h2 className="text-2xl md:text-4xl font-inter-bold mb-5">
                                Node
                            </h2>

                            <h3 className="text-lg font-inter-medium mb-1">
                                Install
                            </h3>
                            <div className="bg-white/5 squircle squircle-md backdrop-blur-xl border border-white/10 px-4 py-3 mb-3">
                                pnpm install confettis --save
                            </div>

                            <h3 className="text-lg font-inter-medium mb-1">
                                Import
                            </h3>
                            <div className="bg-white/5 squircle squircle-md backdrop-blur-xl border border-white/10 px-4 py-3">
                                import * as confetti from "confettis"
                            </div>

                        </div>

                        <div>

                            <h2 className="text-2xl md:text-4xl font-inter-bold mb-5">
                                Deno
                            </h2>

                            <h3 className="text-lg font-inter-medium mb-1">
                                Import
                            </h3>
                            <div className="bg-white/5 squircle squircle-md backdrop-blur-xl border border-white/10 px-4 py-3">
                                import * as confetti from "https://esm.sh/confettis@{ v }"
                            </div>

                        </div>

                        <div>

                            <h2 className="text-2xl md:text-4xl font-inter-bold mb-5">
                                Browser
                            </h2>

                            <h3 className="text-lg font-inter-medium mb-1">
                                CDN
                            </h3>
                            <div className="bg-white/5 squircle squircle-md backdrop-blur-xl border border-white/10 px-4 py-3 mb-5">
                                { `<script src="` + unpkgUrl + `"></script>` }
                            </div>

                            <h3 className="text-lg font-inter-medium mb-1">
                                Local
                            </h3>
                            <div className="bg-white/5 squircle squircle-md backdrop-blur-xl border border-white/10 px-4 py-3">
                                { `<script src="` + localUrl + `"></script>` }
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="absolute p-5 testing-dots h-full w-full opacity-10 squircle squircle-md"></div>

        </div>
    )

}