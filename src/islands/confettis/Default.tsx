import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

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
    confetti.create()
}