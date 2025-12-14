const version = async () => {
    const unpkg = await fetch("https://unpkg.com/confettis/package.json")
    return unpkg.url.replace("https://unpkg.com/confettis@","").replace("/package.json","")
}

export default version