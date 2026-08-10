const copyToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {

    const buttonElement = event.currentTarget as HTMLButtonElement
    const value = buttonElement.getAttribute('aria-label') || ''
    const hiddenElement = document.createElement('textarea')

    hiddenElement.value = value
    hiddenElement.setAttribute('readonly', '')
    hiddenElement.style.position = 'absolute'
    hiddenElement.style.left = '-9999px'
    document.body.appendChild(hiddenElement)
    hiddenElement.select()
    document.execCommand('copy')
    document.body.removeChild(hiddenElement)

    const updateButtonText = (text: string) => {
        const textNode = Array.from(buttonElement.childNodes).find((node) => node.nodeType === Node.TEXT_NODE) as Text | undefined

        if (textNode) {
            textNode.textContent = ` ${text}`
        } else {
            buttonElement.appendChild(document.createTextNode(` ${text}`))
        }
    }

    buttonElement.style.backgroundColor = 'rgb(96 255 50 / 30%)'
    buttonElement.style.borderColor = 'rgb(96 255 50 / 50%)'

    const icon = buttonElement.querySelector('i')

    if (icon) {
        icon.className = "ti ti-clipboard-check text-[18px] align-middle -mt-0.5 inline-block"
    }

    updateButtonText(value)

    setTimeout(() => {
        buttonElement.style.backgroundColor = 'rgb(255 255 255 / 5%)'
        buttonElement.style.borderColor = 'rgb(255 255 255 / 20%)'

        if (icon) {
            icon.className = "ti ti-clipboard text-[18px] align-middle -mt-0.5 inline-block"
        }
        updateButtonText(value)
    }, 5000)

}

export default copyToClipboard