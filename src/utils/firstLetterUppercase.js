function firstLetterUppercase(text = '') {
    const validText = text.trim()
    const firstLetter = validText.charAt(0).toUpperCase()
    const capitalizedText = firstLetter.concat(validText.slice(1))
    return capitalizedText;
}

export { firstLetterUppercase }