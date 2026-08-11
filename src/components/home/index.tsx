import { useState } from "react"
import { stop as stopConfetti } from "confettis"

import version from "@utils/version"

import Confettis from "@component/home/confettis"
import HowToUse from "@component/home/how-to-use"

import DefaultConfetti from "@component/confettis/default"
import AdvancedConfetti from "@component/confettis/advanced"
import RandomConfetti from "@component/confettis/random"
import DropConfetti from "@component/confettis/drop"
import PartyConfetti from "@component/confettis/party"
import FireworksConfetti from "@component/confettis/fireworks"
import SnowConfetti from "@component/confettis/snow"
import StarsConfetti from "@component/confettis/stars"
import EmojisConfetti from "@component/confettis/emojis"
import HeartsConfetti from "@component/confettis/hearts"
import CookiesConfetti from "@component/confettis/cookies"

const v = await version()

export default function Home() {

    const [ activePanel, setActivePanel ] = useState("confettis")
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)

    const confettiButtons = [
        { id: "default", label: "Default", icon: "confetti" },
        { id: "advanced", label: "Advanced", icon: "bolt" },
        { id: "random", label: "Random", icon: "atom" },
        { id: "drop", label: "Drop", icon: "droplets" },
        { id: "party", label: "Party", icon: "confetti" },
        { id: "fireworks", label: "Fireworks", icon: "sparkles" },
        { id: "snow", label: "Snow", icon: "snowflake" },
        { id: "stars", label: "Stars", icon: "star" },
        { id: "emojis", label: "Emojis", icon: "mood-smile" },
        { id: "hearts", label: "Hearts", icon: "heart" },
        { id: "cookies", label: "Cookies", icon: "cookie" },
    ]

    const handlePanelChange = (panel: string) => {
        stopConfetti()
        setActivePanel(panel)
        setMobileMenuOpen(false)
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen((open) => !open)
    }

    return (
        <>
            <div className={`${mobileMenuOpen ? "block" : "hidden"} absolute z-9999 backdrop-blur-xl w-full flex flex-col p-3 gap-1 h-screen mt-12 border-t border-white/10 md:hidden`}>

                <button
                    onClick={ () => handlePanelChange("how-to-use") }
                    className={`text-md font-inter-bold squircle squircle-md px-4 py-3 border text-left cursor-pointer duration-300 hover:bg-primary/10 hover:border-primary/50 hover:text-primary ${activePanel === "how-to-use"
                        ? "bg-primary/10 border-primary/50 text-primary"
                        : "bg-white/2 border-white/10"
                    }`}
                >
                    <i className="ti ti-book-2 text-[20px] align-bottom mr-1 text-white"></i> How to use
                </button>

                { confettiButtons.map((button) => (
                    <button
                        key={ button.id }
                        onClick={ () => handlePanelChange(button.id) }
                        className={`text-md font-inter-bold squircle squircle-md px-4 py-3 border text-left cursor-pointer duration-300 hover:bg-primary/10 hover:border-primary/50 hover:text-primary ${activePanel === button.id
                            ? "bg-primary/10 border-primary/50 text-primary"
                            : "bg-white/2 border-white/10"
                        }`}
                    >
                        <i className={ `ti ti-${button.icon} text-[20px] align-bottom mr-1 text-white` }></i> { button.label }
                    </button>
                )) }
            </div>

            <div className="z-0 h-screen">
                <div className="p-2 h-full flex flex-col md:flex-row gap-3 md:gap-4">

                    <div className="md:max-w-70 w-full md:min-w-50 md:max-h-full">

                        <div className="relative flex flex-row items-center justify-left gap-1">
                            <a
                                href="/"
                                className="z-50 text-2xl font-inter-black text-primary cursor-pointer"
                            >
                                <i className="ti ti-confetti mr-1 text-white"></i>
                                CONFETTIS
                            </a>
                            <div>
                                <span className="text-white/80 text-[13px] font-inter-regular">
                                    v{ v }
                                </span>
                            </div>
                            <div className="absolute right-0 hidden md:block">
                                <a 
                                    className="bg-white/2 border border-white/10 hover:border-primary/50 hover:bg-primary/20 hover:text-primary pt-1.5 px-2 py-2 squircle squircle-full duration-300"
                                    href="https://github.com/sizoroot/confettis"
                                    target="_blank"
                                    title="Confettis en GitHub"
                                >
                                    <i className="ti ti-brand-github text-[18px] align-middle"></i>
                                </a>
                            </div>
                            <div className="absolute right-0 block md:hidden">
                                <button
                                    type="button"
                                    aria-label="Toggle mobile menu"
                                    aria-expanded={ mobileMenuOpen }
                                    onClick={ toggleMobileMenu }
                                >
                                    <i className={ `text-4xl align-middle ${mobileMenuOpen ? "ti ti-x" : "ti ti-menu-2"}` }></i>
                                </button>
                            </div>
                        </div>

                        <div className="hidden md:block my-3"></div>

                        <div className="hidden md:flex flex-col items-left justify-left gap-2 max-h-68 md:max-h-full overflow-y-scroll no-scrollbar-but-scroll">

                            <button
                                onClick={ () => handlePanelChange("how-to-use") }
                                className={`text-md font-inter-bold squircle squircle-md px-4 py-3 border text-left cursor-pointer duration-300 hover:bg-primary/10 hover:border-primary/50 hover:text-primary ${activePanel === "how-to-use"
                                    ? "bg-primary/10 border-primary/50 text-primary"
                                    : "bg-white/2 border-white/10"
                                }`}
                            >
                                <i className="ti ti-book-2 text-[20px] align-bottom mr-1 text-white"></i> How to use
                            </button>

                            { confettiButtons.map((button) => (
                                <button
                                    key={ button.id }
                                    onClick={ () => handlePanelChange(button.id) }
                                    className={`text-md font-inter-bold squircle squircle-md px-4 py-3 border text-left cursor-pointer duration-300 hover:bg-primary/10 hover:border-primary/50 hover:text-primary ${activePanel === button.id
                                        ? "bg-primary/10 border-primary/50 text-primary"
                                        : "bg-white/2 border-white/10"
                                    }`}
                                >
                                    <i className={ `ti ti-${button.icon} text-[20px] align-bottom mr-1 text-white` }></i> { button.label }
                                </button>
                            )) }
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col gap-2">

                        { activePanel == "confettis" && <Confettis /> }
                        { activePanel == "how-to-use" && <HowToUse /> }

                        { activePanel == "default" && <DefaultConfetti /> }
                        { activePanel == "advanced" && <AdvancedConfetti /> }
                        { activePanel == "random" && <RandomConfetti /> }
                        { activePanel == "drop" && <DropConfetti /> }
                        { activePanel == "party" && <PartyConfetti /> }
                        { activePanel == "fireworks" && <FireworksConfetti /> }
                        { activePanel == "snow" && <SnowConfetti /> }
                        { activePanel == "stars" && <StarsConfetti /> }
                        { activePanel == "emojis" && <EmojisConfetti /> }
                        { activePanel == "hearts" && <HeartsConfetti /> }
                        { activePanel == "cookies" && <CookiesConfetti /> }

                    </div>

                </div>
                
            </div>
        </>
    )

}