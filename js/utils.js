export const capitalizeFirstLetter = (word) => {
    const firstCharacter = word.charAt(0)
    const capitalizedFirstCharacter = firstCharacter.toUpperCase()
    return capitalizedFirstCharacter + word.slice(1)
}