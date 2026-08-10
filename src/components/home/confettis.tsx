import { useEffect } from "react"
import * as confetti from "confettis"
import copyToClipboard from "@utils/clipboard"
import getCursorPosition from "@utils/cursor"

export default function Confettis() {

    const onClickInstall = (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault()

        copyToClipboard(event)

        const { x, y } = getCursorPosition(event)

        const ticks = [ -1, 200, 500, 1000, 3000 ]

        // Confetti
        confetti.create({
            canvas: "confetti-panel",
            x: x,
            y: y,
            count: 50,
            gravity: 1.1,
            ticks: ticks,
            decay: 0.91,
            speed: 25,
            scale: [ 0.5, 0.6 ],
            shapes: [ 'square', 'ellipse' ]
        })

        // Particles
        confetti.create({
            canvas: "confetti-panel",
            x: x,
            y: y,
            count: 25,
            gravity: 1.5,
            ticks: ticks,
            scale: 0.1,
            speed: 21,
            decay: 0.91,
            shapes: ['circle']
        })

    }

    useEffect(() => {

        const canvas = document.getElementById("confetti-panel") as HTMLCanvasElement | null
        if (!canvas) return

        const parent = canvas.parentElement
        if (!parent) return

        const resize = () => {
            const rect = parent.getBoundingClientRect()
            const w = Math.max(0, Math.round(rect.width))
            const h = Math.max(0, Math.round(rect.height))
            canvas.style.width = `${w}px`
            canvas.style.height = `${h}px`
            canvas.width = w
            canvas.height = h
            const ctx = canvas.getContext('2d')
            if (ctx) ctx.setTransform(1, 0, 0, 1, 0, 0)
        }

        resize()

        const resizeObserver = new ResizeObserver(resize)

        resizeObserver.observe(parent)

        window.addEventListener('resize', resize)

        return () => {
            resizeObserver.disconnect()
            window.removeEventListener('resize', resize)
        }

    }, [])

    return (
        <div className="relative bg-white/5 w-full h-full squircle squircle-md backdrop-blur-5xl border border-white/20 overflow-hidden">

            <canvas className="absolute pointer-events-none z-90 h-full w-full" id="confetti-panel"></canvas>

            <div className="z-50 absolute flex h-full w-full flex-col items-center justify-center p-10">
                
                <h2 className="text-3xl md:text-5xl lg:text-8xl font-inter-black">
                    CONFETTIS
                </h2>

                <div className="text-lg md:text-2xl my-5 max-w-170 text-center">
                    Confettis 🎉 is a library to create confettis on your website. Enjoy a symphin of possibilities from common confettis to fireworks, snow, effects, emojis, and much more.
                </div>

                <div className="flex flex-col md:flex-row gap-3">

                    <a
                        className="text-md font-inter-bold squircle squircle-md px-4 py-3 border text-left duration-300 bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 cursor-pointer backdrop-blur-xl"
                        href="https://www.npmjs.com/package/confettis"
                        target="_blank"
                        title="View on npmjs.com"
                    >
                        View on npmjs.com <i className="ti ti-external-link ml-1 text-[18px] -mt-0.5 align-middle inline-block"></i>
                    </a>

                    <button
                        className="text-md font-inter-bold squircle squircle-md px-4 py-3 border text-left duration-300 bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 cursor-pointer backdrop-blur-xl"
                        onClick={ (ev) => onClickInstall(ev) }
                        aria-label="pnpm install confettis"
                    >
                        <i className="ti ti-clipboard text-[18px] align-middle -mt-0.5 inline-block mr-1"></i>
                        pnpm install confettis
                    </button>

                </div>

                <div className="mt-20 text-white/50">
                    Crafted with ❤︎ by <a
                        href="https://sizo.dev"
                        className="font-inter-bold hover:text-secondary duration-300"
                    >
                        Lucas O.S.
                    </a>
                </div>

            </div>

            <div className="absolute p-5 testing-dots h-full w-full opacity-10 squircle squircle-md"></div>

        </div>
    )

}