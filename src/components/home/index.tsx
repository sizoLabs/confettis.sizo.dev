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

    const confettiButtons = [
        { id: "default", label: "Default", icon: "confetti-filled" },
        { id: "advanced", label: "Advanced", icon: "bolt-filled" },
        { id: "random", label: "Random", icon: "atom" },
        { id: "drop", label: "Drop", icon: "droplets-filled" },
        { id: "party", label: "Party", icon: "confetti-filled" },
        { id: "fireworks", label: "Fireworks", icon: "sparkles" },
        { id: "snow", label: "Snow", icon: "snowflake" },
        { id: "stars", label: "Stars", icon: "star-filled" },
        { id: "emojis", label: "Emojis", icon: "mood-smile-filled" },
        { id: "hearts", label: "Hearts", icon: "heart-filled" },
        { id: "cookies", label: "Cookies", icon: "cookie-filled" },
    ]

    const handlePanelChange = (panel: string) => {
        stopConfetti()
        setActivePanel(panel)
    }

    return (
        <div className="z-0 h-screen">
            <div className="p-2 h-full flex flex-col md:flex-row items-center justify-left gap-4">

                <div className="md:max-w-70 w-full h-full md:min-w-50 max-h-76 md:max-h-full">

                    <div className="relative flex flex-row items-center justify-left gap-1">
                        <div className="z-50 text-2xl font-inter-black">
                            <i className="ti ti-confetti mr-1"></i>
                            CONFETTIS
                        </div>
                        <div>
                            <span className="text-white/80 text-[13px] font-inter-regular">
                                v{ v }
                            </span>
                        </div>
                        <div className="absolute right-0">
                            <a 
                                className="bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 pt-1.5 px-2 py-2 squircle squircle-full duration-300"
                                href="https://github.com/sizoroot/confettis"
                                target="_blank"
                                title="Confettis en GitHub"
                            >
                                <i className="ti ti-brand-github-filled text-[18px] align-middle"></i>
                            </a>
                        </div>
                    </div>

                    <div className="my-3"></div>

                    <div className="flex flex-col items-left justify-left gap-2 max-h-68 md:max-h-full overflow-y-scroll no-scrollbar-but-scroll">

                        <button
                            onClick={ () => handlePanelChange("confettis") }
                            className={`text-md font-inter-bold squircle squircle-md px-4 py-3 border text-left cursor-pointer duration-300 hover:bg-white/10 hover:border-white/30 ${activePanel === "confettis"
                                ? "bg-white/20 border-white/60 text-white"
                                : "bg-white/5 border-white/20"
                            }`}
                        >
                            <i className="ti ti-confetti text-[20px] align-bottom mr-1"></i> Home
                        </button>

                        <button
                            onClick={ () => handlePanelChange("how-to-use") }
                            className={`text-md font-inter-bold squircle squircle-md px-4 py-3 border text-left cursor-pointer duration-300 hover:bg-white/10 hover:border-white/30 ${activePanel === "how-to-use"
                                ? "bg-white/20 border-white/60 text-white"
                                : "bg-white/5 border-white/20"
                            }`}
                        >
                            <i className="ti ti-book-2 text-[20px] align-bottom mr-1"></i> How to use
                        </button>

                        { confettiButtons.map((button) => (
                            <button
                                key={ button.id }
                                onClick={ () => handlePanelChange(button.id) }
                                className={`text-md font-inter-bold squircle squircle-md px-4 py-3 border text-left cursor-pointer duration-300 hover:bg-white/10 hover:border-white/30 ${activePanel === button.id
                                    ? "bg-white/20 border-white/60 text-white"
                                    : "bg-white/5 border-white/20"
                                }`}
                            >
                                <i className={ `ti ti-${button.icon} text-[20px] align-bottom mr-1` }></i> { button.label }
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
    )

}