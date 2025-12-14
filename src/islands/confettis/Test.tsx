import * as confetti from "confettis"
import { TestConfetti } from "../../components/Buttons.tsx"

export default function TestConfettiBlock() {

    return (
        <>
            <TestConfetti onClick={ createConfetti }>
                <i class="ti ti-confetti"></i>
            </TestConfetti>
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
        gravity: [ 0.6, 0.9 ],
        ticks: -1,
        scale: [ 0.7, 0.8 ],
        speed: 32,
        decay: 0.93,
        shapes: [ 'square', 'ellipse' ]
    })

    // Particles
    confetti.create({
        x: x,
        y: y,
        count: 42,
        gravity: [ 0.8, 1.3 ],
        ticks: -1,
        scale: 0.1,
        speed: 42,
        decay: 0.93,
        shapes: ['circle']
    })

}