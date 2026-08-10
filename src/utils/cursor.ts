
const getCursorPosition = (event: any, canvasId = 'confetti-panel') => {

    // soporte para eventos touch/pointer/mouse
    let clientX = 0
    let clientY = 0

    if (event.touches && event.touches[0]) {
        clientX = event.touches[0].clientX
        clientY = event.touches[0].clientY
    } else if (event.changedTouches && event.changedTouches[0]) {
        clientX = event.changedTouches[0].clientX
        clientY = event.changedTouches[0].clientY
    } else if (typeof event.clientX === 'number' && typeof event.clientY === 'number') {
        clientX = event.clientX
        clientY = event.clientY
    } else if (event.nativeEvent && event.nativeEvent.clientX) {
        clientX = event.nativeEvent.clientX
        clientY = event.nativeEvent.clientY
    }

    // calcular respecto al canvas (no al documento) para evitar offsets por paddings/márgenes
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null
    let rect = { left: 0, top: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight }
    if (canvas) {
        const r = canvas.getBoundingClientRect()
        rect = { left: r.left, top: r.top, width: Math.max(1, r.width), height: Math.max(1, r.height) }
    }

    const x = (clientX - rect.left) / rect.width
    const y = (clientY - rect.top) / rect.height

    const xPos = Math.max(0, Math.min(1, x || 0))
    const yPos = Math.max(0, Math.min(1, y || 0))

    return { x: xPos, y: yPos }

}

export default getCursorPosition