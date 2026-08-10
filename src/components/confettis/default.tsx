import * as confetti from "confettis"
import ConfettiBlock from "@component/ui/block"

export default function DefaultConfettiBlock() {

    return (
        <>
            <ConfettiBlock
                title="Default"
                description="Default confetti with no properties."
                callback={ createConfetti }
            >

                confetti.create()
                
            </ConfettiBlock>
        </>
    )

}

const createConfetti = () => {
    confetti.create({
        canvas: "confetti-panel"
    })
}