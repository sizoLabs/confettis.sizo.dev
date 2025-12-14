import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

export default function CookiesConfettiBlock() {

    const code = `const minParticleGravity = 1
const maxParticleGravity = 1.5

// Cookies
confetti.create({
    x: 0.5,
    y: 0.7,
    count: 1,
    gravity: 5,
    ticks: -1,
    scale: 0.8,
    speed: 50,
    decay: 0.8,
    spread: 0,
    shapes: [ 'emoji' ],
    emojis: [ '🍪' ]
})

setTimeout(() => {

    // Particles
    confetti.create({
        x: 0.5,
        y: 1.9999,
        count: 50,
        gravity: [
            randomNumber(minParticleGravity, maxParticleGravity),
            randomNumber(minParticleGravity, maxParticleGravity),
            randomNumber(minParticleGravity, maxParticleGravity),
            randomNumber(minParticleGravity, maxParticleGravity),
        ],
        ticks: randomNumber(40, 80),
        scale: [ 0.3, 0.5, 0.7 ],
        speed: 30,
        decay: 0.95,
        spread: 100,
        shapes: [ 'circle' ],
        colors: [ '#f3ad61', '#ce985e', '#6d4534' ]
    })
    
}, 700)

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

    // Cookies
    confetti.create({
        x: 0.5,
        y: 0.7,
        count: 1,
        gravity: 5,
        ticks: -1,
        scale: 0.8,
        speed: 50,
        decay: 0.8,
        spread: 0,
        shapes: [ 'emoji' ],
        emojis: [ '🍪' ]
    })

    setTimeout(() => {

        // Particles
        confetti.create({
            x: 0.5,
            y: 1.9999,
            count: 50,
            gravity: [
                randomNumber(minParticleGravity, maxParticleGravity),
                randomNumber(minParticleGravity, maxParticleGravity),
                randomNumber(minParticleGravity, maxParticleGravity),
                randomNumber(minParticleGravity, maxParticleGravity),
            ],
            ticks: randomNumber(40, 80),
            scale: [ 0.3, 0.5, 0.7 ],
            speed: 30,
            decay: 0.95,
            spread: 100,
            shapes: [ 'circle' ],
            colors: [ '#f3ad61', '#ce985e', '#6d4534' ]
        })
        
    }, 700)

    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

}