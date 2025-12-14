import DefaultConfettiBlock from "@component/confettis/default"
import AdvancedConfettiBlock from "@component/confettis/advanced"
import RandomConfettiBlock from "@component/confettis/random"
import DropConfettiBlock from "@component/confettis/drop"
import PartyConfettiBlock from "@component/confettis/party"
import FireworksConfettiBlock from "@component/confettis/fireworks"
import SnowConfettiBlock from "@component/confettis/snow"
import StarsConfettiBlock from "@component/confettis/stars"
import EmojisConfettiBlock from "@component/confettis/emojis"
import HeartsConfettiBlock from "@component/confettis/hearts"
import CookiesConfettiBlock from "@component/confettis/cookies"

export default function Confettis() {
    return (
        <div className="relative z-10 lg:mx-auto lg:max-w-[900px] text-center">

            <div className="text-white font-inter w-[100%] text-center mb-[50px]">
                <h2 className="text-[28px] md:text-[40px] font-inter font-bold">
                    Examples
                </h2>
            </div>

            <DefaultConfettiBlock />
            <AdvancedConfettiBlock />
            <RandomConfettiBlock />
            <DropConfettiBlock />
            <PartyConfettiBlock />
            <FireworksConfettiBlock />
            <SnowConfettiBlock />
            <StarsConfettiBlock />
            <EmojisConfettiBlock />
            <HeartsConfettiBlock />
            <CookiesConfettiBlock />

        </div>
    )

}