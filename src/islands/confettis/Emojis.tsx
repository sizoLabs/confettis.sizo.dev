import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

let emojisActive = false

export default function EmojisConfettiBlock() {

    const code = `const minEmojiCount = 8
const maxEmojiCount = 30

const minEmojiSize = 0.1
const maxEmojiSize = 0.4

const minDisappear = 200
const maxDisappear = 500

const minPos = 0.1
const maxPos = 0.9

const emojisList = [
    [ '👻', '💀', '🎃', '🍬', '🦇', '🕷️' ],
]

const createEmoji = () => {

    const xPos = randomNumber(minPos, maxPos)
    const yPos = randomNumber(minPos, maxPos)

    const emojiStack = parseInt(randomNumber(0, emojisList.length - 1).toFixed(0))
    const emojis = emojisList[emojiStack]

    // Emojis
    confetti.create({
        x: xPos,
        y: yPos,
        count: randomNumber(minEmojiCount, maxEmojiCount),
        gravity: 1.5,
        ticks: randomNumber(minDisappear, maxDisappear),
        scale: [ 
            randomNumber(minEmojiSize, maxEmojiSize),
            randomNumber(minEmojiSize, maxEmojiSize),
            randomNumber(minEmojiSize, maxEmojiSize)
        ],
        speed: 31,
        decay: 0.96,
        spread: 360,
        shapes: [ 'emoji' ],
        emojis: emojis
    })

    // Particles
    confetti.create({
        x: xPos,
        y: yPos,
        count: randomNumber(20, 60),
        gravity: 1.7,
        ticks: randomNumber(minDisappear, maxDisappear),
        scale: 0.1,
        speed: 20,
        decay: 0.93,
        spread: 360,
        shapes: [ 'circle' ],
        colors: [ '#ffffff', '#000000', '#FF752B' ]
    })

}

setInterval(() => {
    createEmoji()
}, 900)

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}`

    return (
        <>
            <ConfettiBlock
                title="Emojis"
                description="You can use emojis to create any type of effect. In this demo we simulate thematized fireworks for 👻 Halloween."
                toggle={ true }
                callback={ createConfetti }
            >

                { code }
                
            </ConfettiBlock>
        </>
    )

}

const createConfetti = () => {

    emojisActive = !emojisActive

    const minEmojiCount = 8
    const maxEmojiCount = 30

    const minEmojiSize = 0.1
    const maxEmojiSize = 0.4

    const minDisappear = 200
    const maxDisappear = 500

    const minPos = 0.1
    const maxPos = 0.9

    const emojisList = [

        [ '👻', '💀', '🎃', '🍬', '🦇', '🕷️' ],

    ]

    const createEmoji = () => {

        const xPos = randomNumber(minPos, maxPos)
        const yPos = randomNumber(minPos, maxPos)

        const emojiStack = parseInt(randomNumber(0, emojisList.length - 1).toFixed(0))
        const emojis = emojisList[emojiStack]

        // Emojis
        confetti.create({
            x: xPos,
            y: yPos,
            count: randomNumber(minEmojiCount, maxEmojiCount),
            gravity: 1.5,
            ticks: randomNumber(minDisappear, maxDisappear),
            scale: [ 
                randomNumber(minEmojiSize, maxEmojiSize),
                randomNumber(minEmojiSize, maxEmojiSize),
                randomNumber(minEmojiSize, maxEmojiSize)
            ],
            speed: 31,
            decay: 0.96,
            spread: 360,
            shapes: [ 'emoji' ],
            emojis: emojis
        })

        // Particles
        confetti.create({
            x: xPos,
            y: yPos,
            count: randomNumber(20, 60),
            gravity: 1.7,
            ticks: randomNumber(minDisappear, maxDisappear),
            scale: 0.1,
            speed: 20,
            decay: 0.93,
            spread: 360,
            shapes: [ 'circle' ],
            colors: [ '#ffffff', '#000000', '#FF752B' ]
        })

    }

    const emojiInterval = setInterval(() => {
        if(!emojisActive) clearInterval(emojiInterval)
        createEmoji()
    }, 900)
    
    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

}