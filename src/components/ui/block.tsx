import { useState, useEffect, useRef } from "react"
import Code from "@component/ui/code"

type Props = {
    children: React.ReactNode
    title: string
    description: string
    toggle?: boolean
    callback: () => void
}

export default function ConfettiBlock(props: Props) {

    const [ isCodeVisible, setIsCodeVisible ] = useState(false)
    const [ toggleActive, setToggleActive ] = useState(false)

    const handleToggleCode = () => {
        setIsCodeVisible((current) => !current)
    }

    const handleToggleConfetti = () => {
        setToggleActive((current) => !current)
    }

    const toggleActiveRef = useRef(toggleActive)

    useEffect(() => {
        toggleActiveRef.current = toggleActive
    }, [toggleActive])

    useEffect(() => {
        return () => {
            if (props.toggle && toggleActiveRef.current) {
                props.callback()
            }
        }
    }, [props.toggle, props.callback])

    useEffect(() => {

        const canvas = document.getElementById("confetti-panel") as HTMLCanvasElement | null
        if (!canvas) return

        const parent = canvas.parentElement
        if (!parent) return

        const dpr = window.devicePixelRatio || 1

        const resize = () => {
            const rect = parent.getBoundingClientRect()
            const w = Math.max(0, Math.round(rect.width))
            const h = Math.max(0, Math.round(rect.height))
            canvas.style.width = `${w}px`
            canvas.style.height = `${h}px`
            canvas.width = Math.round(w * dpr)
            canvas.height = Math.round(h * dpr)
            const ctx = canvas.getContext('2d')
            if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
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
        <>
            <div className="relative bg-white/5 w-full h-full squircle squircle-md backdrop-blur-5xl border border-white/20 overflow-hidden">

                <canvas className="absolute pointer-events-none z-90 h-full w-full" id="confetti-panel"></canvas>

                <div className="z-50 absolute flex h-full w-full flex-col items-center justify-center p-10">
                    
                    <h2 className="text-4xl md:text-7xl font-inter-black">
                        { props.title }
                    </h2>

                    <div className="text-lg md:text-2xl text-center mt-5 max-w-190">
                        { props.description }
                    </div>

                    <div className="mt-4 flex flex-col md:flex-row justify-start gap-3">

                        <button
                            onClick={ () => { props.callback(); props.toggle ? handleToggleConfetti() : "" } }
                            
                            className={`px-4 py-2 squircle squircle-md backdrop-blur-xl border cursor-pointer hover:bg-white/20 hover:border-white/50 duration-300 font-inter-bold ${ toggleActive
                                ? "bg-white/20 border-white/60 text-white"
                                : "bg-white/10 border-white/20" }
                                `}
                        >
                            <i className="relative ti ti-confetti text-[20px] align-bottom mr-1"></i>
                            { props.toggle ? toggleActive ? "Stop Confetti" : "Play Confetti" : "Play Confetti" }
                        </button>

                        <button
                            className={`px-4 py-2 squircle squircle-md backdrop-blur-xl border cursor-pointer hover:bg-white/20 hover:border-white/50 duration-300 ${ isCodeVisible
                                ? "bg-white/20 border-white/60 text-white"
                                : "bg-white/10 border-white/20" }
                                `}
                            onClick={ handleToggleCode }
                        >
                            <i className="relative ti ti-code text-[20px] align-bottom mr-1"></i>
                            { isCodeVisible ? "Hide code" : "Show code" }
                        </button>

                    </div>

                </div>

                <div className="absolute p-5 testing-dots h-full w-full opacity-10 squircle squircle-md"></div>

            </div>

            {isCodeVisible && (
                <Code className="language-javascript">
                    { props.children }
                </Code>
            )}

        </>
	)

}