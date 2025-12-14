import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

let partyActive = false

export default function PartyConfettiBlock() {

    const code = `const minConfettiScale = 0.5
const maxConfettiScale = 1

const minConfettiSpeed = 20
const maxConfettiSpeed = 30

const minConfettiGravity = 0.6
const maxConfettiGravity = 1.1

const colors = [ '#307BFF', '#FFFFFF' ]

const createParty = () => {

    // Left Confetti
    confetti.create({
        x: 0.001,
        y: 0.5,
        count: 3,
        gravity: [
            randomNumber(minConfettiGravity, maxConfettiGravity),
            randomNumber(minConfettiGravity, maxConfettiGravity),
            randomNumber(minConfettiGravity, maxConfettiGravity),
        ],
        ticks: 200,
        scale: [
            randomNumber(minConfettiScale, maxConfettiScale),
            randomNumber(minConfettiScale, maxConfettiScale),
            randomNumber(minConfettiScale, maxConfettiScale)
        ],
        speed: randomNumber(minConfettiSpeed, maxConfettiSpeed),
        decay: 0.95,
        spread: 50,
        angle: 50,
        shapes: [ 'square', 'ellipse' ],
        colors: colors
    })

    // Right Confetti
    confetti.create({
        x: 1.999,
        y: 0.5,
        count: 3,
        gravity: [
            randomNumber(minConfettiGravity, maxConfettiGravity),
            randomNumber(minConfettiGravity, maxConfettiGravity),
            randomNumber(minConfettiGravity, maxConfettiGravity),
        ],
        ticks: 200,
        scale: [
            randomNumber(minConfettiScale, maxConfettiScale),
            randomNumber(minConfettiScale, maxConfettiScale),
            randomNumber(minConfettiScale, maxConfettiScale)
        ],
        speed: randomNumber(minConfettiSpeed, maxConfettiSpeed),
        decay: 0.95,
        spread: 50,
        angle: 130,
        shapes: [ 'square', 'ellipse' ],
        colors: colors
    })

}

setInterval(() => {
    createParty()
}, 50)

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}`

    return (
        <>
            <ConfettiBlock
                title="Party"
                description="You can create any type of effect, for example confetti for parties."
                toggle={ true }
                callback={ createConfetti }
            >

                { code }
                
            </ConfettiBlock>
        </>
    )

}

const createConfetti = () => {

    partyActive = !partyActive

    const minConfettiScale = 0.5
    const maxConfettiScale = 1

    const minConfettiSpeed = 20
    const maxConfettiSpeed = 30

    const minConfettiGravity = 0.6
    const maxConfettiGravity = 1.1

    const colors = [ '#307BFF', '#FFFFFF' ]

    const createParty = () => {

        // Left Confetti
        confetti.create({
            x: 0.001,
            y: 0.5,
            count: 3,
            gravity: [
                randomNumber(minConfettiGravity, maxConfettiGravity),
                randomNumber(minConfettiGravity, maxConfettiGravity),
                randomNumber(minConfettiGravity, maxConfettiGravity),
            ],
            ticks: 200,
            scale: [
                randomNumber(minConfettiScale, maxConfettiScale),
                randomNumber(minConfettiScale, maxConfettiScale),
                randomNumber(minConfettiScale, maxConfettiScale)
            ],
            speed: randomNumber(minConfettiSpeed, maxConfettiSpeed),
            decay: 0.95,
            spread: 50,
            angle: 50,
            shapes: [ 'square', 'ellipse' ],
            colors: colors
        })

        // Right Confetti
        confetti.create({
            x: 1.999,
            y: 0.5,
            count: 3,
            gravity: [
                randomNumber(minConfettiGravity, maxConfettiGravity),
                randomNumber(minConfettiGravity, maxConfettiGravity),
                randomNumber(minConfettiGravity, maxConfettiGravity),
            ],
            ticks: 200,
            scale: [
                randomNumber(minConfettiScale, maxConfettiScale),
                randomNumber(minConfettiScale, maxConfettiScale),
                randomNumber(minConfettiScale, maxConfettiScale)
            ],
            speed: randomNumber(minConfettiSpeed, maxConfettiSpeed),
            decay: 0.95,
            spread: 50,
            angle: 130,
            shapes: [ 'square', 'ellipse' ],
            colors: colors
        })

    }

    const partyInterval = setInterval(() => {
        if(!partyActive) clearInterval(partyInterval)
        createParty()
    }, 50)
    
    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

}