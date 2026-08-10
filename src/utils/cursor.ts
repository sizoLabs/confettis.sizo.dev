
const getCursorPosition = (event: React.MouseEvent<HTMLButtonElement>, canvasId = 'confetti-panel') => {

    const clientX = event.clientX
    const clientY = event.clientY

    let elementWidth = document.documentElement.clientWidth
    let elementHeight = document.documentElement.clientHeight
    let offsetLeft = 0
    let offsetTop = 0

    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null
    if (canvas && canvas.parentElement) {
        const rect = canvas.parentElement.getBoundingClientRect()
        elementWidth = Math.max(1, rect.width)
        elementHeight = Math.max(1, rect.height)
        offsetLeft = rect.left
        offsetTop = rect.top
    }

    const x = (clientX - offsetLeft) / elementWidth
    const y = (clientY - offsetTop) / elementHeight

    const xPos = Math.max(0, Math.min(1, x))
    const yPos = Math.max(0, Math.min(1, y))

    return { x: xPos, y: yPos }

}

export default getCursorPosition