import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

let dropActive = false

export default function DropConfettiBlock() {

    const code = `const minDropScale = 0.5
const maxDropScale = 0.8

const minDropGravity = 0.3
const maxDropGravity = 0.8

const minDropSpeed = 0.3
const maxDropSpeed = 0.8

const createDrop = () => {
    confetti.create({
        x: randomNumber(0, 1),
        y: 0.0001,
        count: 1,
        gravity: randomNumber(minDropGravity, maxDropGravity),
        ticks: randomNumber(-1, 1000),
        scale: randomNumber(minDropScale, maxDropScale),
        speed: randomNumber(minDropSpeed, maxDropSpeed),
        decay: 0.90,
        spread: 0,
        shapes: [ 'square', 'ellipse' ]
    })
}

setInterval(() => {
    createDrop()
}, 80)

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}`

    return (
        <>
            <ConfettiBlock
                title="Drop"
                description="You can create drop style confetti effect in a very simple way."
                toggle={ true }
                callback={ createConfetti }
            >

                { code }
                
            </ConfettiBlock>
        </>
    )

}

const createConfetti = () => {

    dropActive = !dropActive

    const minDropScale = 0.6
    const maxDropScale = 0.9

    const minDropGravity = 0.3
    const maxDropGravity = 0.8

    const minDropSpeed = 0.3
    const maxDropSpeed = 0.8

    const createDrop = () => {
        confetti.create({
            x: randomNumber(0, 1),
            y: 0.0001,
            count: 1,
            gravity: randomNumber(minDropGravity, maxDropGravity),
            ticks: randomNumber(-1, 1000),
            scale: randomNumber(minDropScale, maxDropScale),
            speed: randomNumber(minDropSpeed, maxDropSpeed),
            decay: 0.90,
            spread: 0,
            shapes: [ 'square', 'ellipse' ]
        })
    }

    const dropInterval = setInterval(() => {
        if(!dropActive) clearInterval(dropInterval)
        createDrop()
    }, 50)
    
    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

}