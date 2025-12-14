import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

export default function RandomConfettiBlock() {

    const code = `const x = 0.5
const y = 0.7

const minCount = 50
const maxCount = 90

const minAngle = 40
const maxAngle = 130

const minSpeed = 30
const maxSpeed = 50

confetti.create({
    x: x,
    y: y,
    count: randomNumber(minCount, maxCount),
    ticks: -1,
    gravity: 1,
    decay: 0.93,
    speed: randomNumber(minSpeed, maxSpeed),
    angle: randomNumber(minAngle, maxAngle),
    static: false,
    scales: [ 0.5, 0.7, 0.8 ],
    shapes: [ 'square', 'ellipse' ]
})

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}`

    return (
        <>
            <ConfettiBlock
                title="Random"
                description="Advanced confetti with some random properties."
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

    const minCount = 50
    const maxCount = 90

    const minAngle = 40
    const maxAngle = 130

    const minSpeed = 30
    const maxSpeed = 50
    
    confetti.create({
        x: x,
        y: y,
        count: randomNumber(minCount, maxCount),
        ticks: -1,
        gravity: 1,
        decay: 0.93,
        speed: randomNumber(minSpeed, maxSpeed),
        angle: randomNumber(minAngle, maxAngle),
        static: false,
        scales: [ 0.5, 0.7, 0.8 ],
        shapes: [ 'square', 'ellipse' ]
    })

    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

}