const getCursorPosition = (event: MouseEvent) => {

    const clientX = event.clientX
    const clientY = (event).clientY

    const elementWidth = document.documentElement.clientWidth
    const elementHeight = document.documentElement.clientHeight

    const x = clientX / elementWidth
    const y = clientY / elementHeight

    const xPos = Math.max(0, Math.min(1, x))
    const yPos = Math.max(0, Math.min(1, y))

    return { x: xPos, y: yPos }

}

export default getCursorPosition