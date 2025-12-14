export default function Creator() {
    return (
        <div className="relative z-1">
            <div className="h-full bg4 py-[50px]">
                <div className="md:flex justify-center h-full relative z-10">

                    <div className="lg:w-[400px] py-[50px]">
                        <img alt="Lucas O. S." loading="lazy"className="mx-auto w-full max-w-[250px] md:w-[250px] mask-squircle mt-[50px]" src="/images/lucas.jpg" />

                        <div className="text-center mt-[20px]">
                            <a href="https://bsky.app/profile/sizo.dev" target="_blank" className="inline-block  mr-3">
                                <i className="ti ti-brand-bluesky text-3xl hover:text-bluesky duration-300"></i>
                            </a>
                            <a href="https://x.com/sizodev" target="_blank" className="inline-block mr-3">
                                <i className="ti ti-brand-x text-3xl hover:text-white/80 duration-300"></i>
                            </a>
                            <a href="https://github.com/sizoroot" target="_blank" className="inline-block">
                                <i className="ti ti-brand-github text-3xl hover:text-white/80 duration-300"></i>
                            </a>
                        </div>

                    </div>

                    <div className="lg:w-[400px] mb-[100px] md:py-[100px] px-5 text-white">
                        <h2 className="text-center md:text-left text-[36px] md:text-[50px] font-inter-bold mb-[20px]">Who did this?</h2>
                        <div>
                            <p className="mb-5">
                                Hello, I'm Lucas O. S. and this is a small library to create confettis on your website. I was inspired by the existing library called canvas-confetti, but I wanted to create something new with more understandable code and more functionality.
                            </p>
                            <p className="mb-5">
                                The idea of this library is that web developers can add any style of confetti and other effects to their website. You can see the source code in the <a className="text-white underline" href="https://github.com/sizoroot/confettis">confettis</a> repository on github.
                            </p>
                            <p>
                                You can follow me on my social networks to see my future projects.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}