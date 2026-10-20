import * as confetti from "confettis"
import ConfettiBlock from "@component/ui/block"

export default function CookiesConfettiBlock() {

    const code = `const minParticleGravity = 1
const maxParticleGravity = 1.5

const cookieGravity = 5
const cookieStartY = 0.0001

// Same X for the cookie and the particles
const x = randomNumber(0.1, 0.9)

// Cookies
confetti.create({
    x: x,
    y: cookieStartY,
    count: 1,
    gravity: cookieGravity,
    ticks: -1,
    scale: 0.8,
    speed: 0.0001,
    decay: 0.8,
    spread: 0.0001,
    shapes: [ 'emoji' ],
    emojis: [ '🍪' ]
})

// Each frame the cookie falls (gravity * 3) pixels
const canvas = document.getElementById("confettis")
const frames = Math.floor((canvas.height * (1 - cookieStartY)) / (cookieGravity * 3)) + 1

setTimeout(() => {

    // Particles
    confetti.create({
        x: x + 0.03,
        y: 1,
        count: 50,
        gravity: [
            randomNumber(minParticleGravity, maxParticleGravity),
            randomNumber(minParticleGravity, maxParticleGravity),
            randomNumber(minParticleGravity, maxParticleGravity),
            randomNumber(minParticleGravity, maxParticleGravity),
        ],
        ticks: randomNumber(40, 80),
        scale: [ 0.3, 0.5, 0.7 ],
        speed: 22,
        decay: 0.95,
        spread: 100,
        shapes: [ 'circle' ],
        colors: [ '#f3ad61', '#ce985e', '#6d4534' ]
    })

}, frames * (1000 / 60))

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}`

    return (
        <>
            <ConfettiBlock
                title="Cookies"
                description="This is another example of how to use emojis to create effects. Test it to feed the monster! 🍪 Ñom ñom ñom 🍪"
                callback={ createConfetti }
            >

                { code }
                
            </ConfettiBlock>
        </>
    )

}

const createConfetti = () => {

    const minParticleGravity = 1
    const maxParticleGravity = 1.5

    const cookieGravity = 5
    const cookieStartY = 0.0001

    // Same X for the cookie and the particles
    const x = randomNumber(0.1, 0.9)

    // Cookies
    confetti.create({
        canvas: "confetti-panel",
        x: x,
        y: cookieStartY,
        count: 1,
        gravity: cookieGravity,
        ticks: -1,
        scale: 0.8,
        speed: 0.0001,
        decay: 0.8,
        spread: 0.0001,
        shapes: [ 'emoji' ],
        emojis: [ '🍪' ]
    })

    // Each frame the cookie falls (gravity * 3) pixels
    const canvas = document.getElementById("confetti-panel") as HTMLCanvasElement
    const frames = Math.floor((canvas.height * (1 - cookieStartY)) / (cookieGravity * 3)) + 1

    setTimeout(() => {

        // Particles
        confetti.create({
            canvas: "confetti-panel",
            x: x + 0.03,
            y: 1,
            count: 50,
            gravity: [
                randomNumber(minParticleGravity, maxParticleGravity),
                randomNumber(minParticleGravity, maxParticleGravity),
                randomNumber(minParticleGravity, maxParticleGravity),
                randomNumber(minParticleGravity, maxParticleGravity),
            ],
            ticks: randomNumber(40, 80),
            scale: [ 0.3, 0.5, 0.7 ],
            speed: 22,
            decay: 0.95,
            spread: 100,
            shapes: [ 'circle' ],
            colors: [ '#f3ad61', '#ce985e', '#6d4534' ]
        })

    }, frames * (1000 / 60))

    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

}