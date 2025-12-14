import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

let heartsActive = false

export default function HeartsConfettiBlock() {

    const code = `const minHeartScale = 0.1
const maxHeartScale = 0.5

const minHeartSpeed = 5
const maxHeartSpeed = 10

const minHeartGravity = -0.5
const maxHeartGravity = -1.5

const createHeart = () => {

    // Hearts
    confetti.create({
        x: 0.5,
        y: 0.5,
        count: 3,
        gravity: [
            randomNumber(minHeartGravity, maxHeartGravity),
            randomNumber(minHeartGravity, maxHeartGravity),
            randomNumber(minHeartGravity, maxHeartGravity),
            randomNumber(minHeartGravity, maxHeartGravity),
        ],
        ticks: randomNumber(50, 100),
        scale: [
            randomNumber(minHeartScale, maxHeartScale),
            randomNumber(minHeartScale, maxHeartScale),
            randomNumber(minHeartScale, maxHeartScale),
            randomNumber(minHeartScale, maxHeartScale)
        ],
        speed: randomNumber(minHeartSpeed, maxHeartSpeed),
        decay: 0.92,
        spread: 80,
        shapes: [ 'emoji' ],
        emojis: [ '❤️' ]
    })

}

setInterval(() => {
    createHeart()
}, 180)

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}`

    return (
        <>
            <ConfettiBlock
                title="Hearts"
                description="With the possibility of adding emojis, you can create effects like this that we have created with ❤️ Hearts."
                toggle={ true }
                callback={ createConfetti }
            >

                { code }
                
            </ConfettiBlock>
        </>
    )

}

const createConfetti = () => {

    heartsActive = !heartsActive

    const minHeartScale = 0.1
    const maxHeartScale = 0.5

    const minHeartSpeed = 5
    const maxHeartSpeed = 10

    const minHeartGravity = -0.5
    const maxHeartGravity = -1.5

    const createHeart = () => {

        // Hearts
        confetti.create({
            x: 0.5,
            y: 0.5,
            count: 3,
            gravity: [
                randomNumber(minHeartGravity, maxHeartGravity),
                randomNumber(minHeartGravity, maxHeartGravity),
                randomNumber(minHeartGravity, maxHeartGravity),
                randomNumber(minHeartGravity, maxHeartGravity),
            ],
            ticks: randomNumber(50, 100),
            scale: [
                randomNumber(minHeartScale, maxHeartScale),
                randomNumber(minHeartScale, maxHeartScale),
                randomNumber(minHeartScale, maxHeartScale),
                randomNumber(minHeartScale, maxHeartScale)
            ],
            speed: randomNumber(minHeartSpeed, maxHeartSpeed),
            decay: 0.92,
            spread: 80,
            shapes: [ 'emoji' ],
            emojis: [ '❤️' ]
        })

    }

    const heartsInterval = setInterval(() => {
        if(!heartsActive) clearInterval(heartsInterval)
        createHeart()
    }, 150)
    
    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

}