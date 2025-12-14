import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

export default function AdvancedConfettiBlock() {

    const code = `const x = 0.5
const y = 0.7

// Confetti
confetti.create({
    x: x,
    y: y,
    count: 100,
    gravity: 1,
    ticks: -1,
    scale: [ 0.5, 0.7, 0.8 ],
    speed: 32,
    decay: 0.93,
    shapes: [ 'square', 'ellipse' ]
})

// Particles
confetti.create({
    x: x,
    y: y,
    count: 42,
    gravity: 1.5,
    ticks: -1,
    scale: 0.1,
    speed: 42,
    decay: 0.93,
    shapes: [ 'circle' ]
})`

    return (
        <>
            <ConfettiBlock
                title="Advanced"
                description="Advanced confetti with some properties."
                callback={ createConfetti }
            >

                { code }
                
            </ConfettiBlock>
        </>
    )

}

const createConfetti = () => {

    const x = 0.5
    const y = 0.7
    
    // Confetti
    confetti.create({
        x: x,
        y: y,
        count: 100,
        gravity: 1,
        ticks: -1,
        scale: [ 0.5, 0.7, 0.8 ],
        speed: 32,
        decay: 0.93,
        shapes: [ 'square', 'ellipse' ]
    })

    // Particles
    confetti.create({
        x: x,
        y: y,
        count: 42,
        gravity: 1.5,
        ticks: -1,
        scale: 0.1,
        speed: 42,
        decay: 0.93,
        shapes: [ 'circle' ]
    })

}