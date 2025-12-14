import * as confetti from "confettis"

import Logo from '@component/ui/logo'
import Check from '@component/ui/check'
import TestConfettiBlock from "@component/confettis/test"
import Link from '@component/ui/buttons/link'

import copyToClipboard from '@utils/clipboard'
import getCursorPosition from '@utils/cursor'

export default function Header() {

    const onClickNPM = (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault()

        copyToClipboard(event)

        const { x, y } = getCursorPosition(event)

        const ticks = [ -1, 200, 500, 1000, 3000 ]

        // Confetti
        confetti.create({
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

    return (
        <div className="relative z-10 lg:mx-auto lg:max-w-[900px] mb-[20px] lg:mb-[50px]">

            <div className="lg:pt-[100px]">
                <Logo />
            </div>

            <div className="mx-auto mt-[10px] lg:mt-[20px] md:max-w-[500px] lg:max-w-[700px] text-[16px] p-10 lg:p-0 lg:text-[23px] text-center font-inter">
                Confettis 🎉 is a library to create confettis on your website. Enjoy a symphin of possibilities from common confettis to fireworks, snow, effects, emojis, and much more.
            </div>

            <div className="lg:max-w-[700px] mx-auto mt-[20px] lg:mt-[50px] text-center">

                <Link href="https://github.com/sizoroot/confettis">
                    <i className="ti ti-brand-github text-[18px] align-middle mt-[-2px] inline-block"></i> GitHub
                </Link>

                <Link href="https://npmjs.com/package/confettis">
                    <i className="ti ti-package text-[18px] align-middle mt-[-2px] inline-block"></i> NPM
                </Link>

                <button
                    className="bg-white/10 hover:bg-white/20 duration-300 border border-white/20 hover:border-white/50 text-white text-[16px] mr-2 px-4 py-[10px] rounded-[4px] cursor-pointer"
                    onClick={ (ev) => onClickNPM(ev) }
                    aria-label="npm i confettis"
                >
                    npm i confettis <i className="ti ti-clipboard text-[18px] align-middle mt-[-2px] inline-block ml-1"></i>
                </button>

            </div>

            <div className="lg:max-w-[700px] p-10 lg:p-0 mx-auto mt-[10px] lg:mt-[50px] text-center">
                <Check>Fully Typed</Check>
                <Check>SSR compatibility</Check>
                <Check>Deno compatibility</Check>
                <Check>Emoji support</Check>
            </div>

            <div className="mb-[50px] mt-[20px] lg:mt-[50px] text-center">

                <TestConfettiBlock />

                <div className="text-[14px] mt-[15px] text-white font-inter font-black uppercase">
                    Click to test
                </div>

                <div className="mt-[50px] justify-center w-[200px] text-center mx-auto font-inter text-[13px]">
                    <div className="mb-[15px]">
                        More examples below!
                    </div>
                    <svg width="30px" height="30px" className="animate-bounce mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#ffffff"/></svg>
                </div>

            </div>

        </div>
    )

}