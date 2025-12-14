const copyToClipboard = (event: MouseEvent) => {

    const buttonElement = event.currentTarget as HTMLButtonElement
    // Usar atributo personalizado para obtener el valor a copiar
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

    buttonElement.style.backgroundColor = 'rgb(96 255 50 / 57%)'

    // Cambiar solo el icono si existe
    const icon = buttonElement.querySelector('i')
    if (icon) {
        icon.className = "ti ti-clipboard-check text-[18px] align-middle mt-[-2px] inline-block ml-1"
    }
    // Cambiar solo el texto (sin el icono)
    buttonElement.childNodes[0].textContent = value + ' '

    setTimeout(() => {
        buttonElement.style.backgroundColor = 'rgb(0 0 0 / 9%)'
        buttonElement.innerHTML = value + ' <i class="ti ti-clipboard text-[18px] align-middle mt-[-2px] inline-block ml-1"></i>'
    }, 5000)

}

export default copyToClipboard