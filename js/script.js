import words from "./words.js"
import { capitalizeFirstLetter } from "./utils.js"

let testActive = false
let wordsList = []
let currentWordIndex = 0
let missedChars = 0
let inputHistory = []
let currentInput = ""

let testMode = "words"
let punctuationMode = true
let wordsConfig = 100

let customText = "The quick brown fox jumped over the lazy dog"


/* let's go */
const initializeWords = () => {
    /* 1: reset all the variables */
    testActive = false;
    wordsList = [];
    currentWordIndex = 0;
    missedChars = 0;
    inputHistory = [];
    currentInput = "";

    /* if test mode is time, do the following ... */

    if (testMode == "time") {

        /* 1: generate a random first word in the sentence */

        let randomWord = words[Math.floor(Math.random() * words.length)]
        let previousWord = ""

        if (punctuationMode) {
            wordsList.push(capitalizeFirstLetter(randomWord))
        } else {
            wordsList.push(randomWord)
        }

        for (let i = 1; i < 50; i++) {
            randomWord = words[Math.floor(Math.random() * words.length)]
            previousWord = wordsList[i - 1]

            /* make sure random word and previous word are not the same here in a while loop */

            if (previousWord.charAt(previousWord.length - 1) == ".") {
                randomWord = capitalizeFirstLetter(randomWord)
            } else if (Math.random() < 0.1 && previousWord.charAt(previousWord.length - 1) !== "." || i == wordsConfig -1) {
                randomWord += "."
            } else if (Math.random() < .01) {
                randomWord = "'" + randomWord + "'"
            } else if (Math.random() < .01) {
                randomWord += ":"
            } else if (Math.random() < .01 && previousWord.charAt(previousWord.length -1) !== "," && previousWord.charAt(previousWord.length - 1) !== "." && previousWord.charAt(previousWord.length - 1) !== "-") {
                randomWord += "-"
            } else if (Math.random() < 0.2 && previousWord.charAt(previousWord.length - 1) !== ",") {
                randomWord += ","
            }

            wordsList.push(randomWord)
        }
    } else if (testMode == "words") {
        let randomWord = words[Math.floor(Math.random() * words.length)]
        let previousWord = ""

        if (punctuationMode) {
            wordsList.push(capitalizeFirstLetter(randomWord))
        } else {
            wordsList.push(randomWord)
        }

        for (let i = 1; i < wordsConfig; i++) {
            randomWord = words[Math.floor(Math.random() * words.length)]
            previousWord = wordsList[i - 1]

            /* make sure random word and previous word are not the same here in a while loop */

            if (previousWord.charAt(previousWord.length - 1) == ".") {
                randomWord = capitalizeFirstLetter(randomWord)
            } else if (Math.random() < 0.1 && previousWord.charAt(previousWord.length - 1) !== "." || i == wordsConfig -1) {
                randomWord += "."
            } else if (Math.random() < .01) {
                randomWord = "'" + randomWord + "'"
            } else if (Math.random() < .01) {
                randomWord += ":"
            } else if (Math.random() < .01 && previousWord.charAt(previousWord.length -1) !== "," && previousWord.charAt(previousWord.length - 1) !== "." && previousWord.charAt(previousWord.length - 1) !== "-") {
                randomWord += "-"
            } else if (Math.random() < 0.2 && previousWord.charAt(previousWord.length - 1) !== ",") {
                randomWord += ","
            }

            wordsList.push(randomWord)
        }
    } else if (testMode == "custom") {
        let w = customText.split(" ")

        for (let i = 0; i < w.length; i++) {
            wordsList.push(w[i])
        }
    }
    showWords()
}

const showWords = () => {
    document.getElementById("words").innerHTML = ""

    if (testMode == "words" || testMode == "custom") {
        for (let i = 0; i < wordsList.length; i++) {
            let w = "<div class='word'>"
            for (let j = 0; j < wordsList[i].length; j++) {
                w += `<span>${wordsList[i].charAt(j)}</span>`
            }
            w += "</div>"
            document.getElementById("words").innerHTML += w
        }
    } else if (testMode == "time") {
        for (let i = 0; i < wordsList.length; i++) {
            let w = "<div class='word'>"
            for (let j = 0; j < wordsList[i].length; j++) {
                w += `<span>${wordsList[i].charAt(j)}</span>`
            }
            w += "</div>"
            document.getElementById("words").innerHTML += w
        }
    }
    updateActiveElement()
    updateCaretPosition()
}

const updateActiveElement = () => {
    document.querySelectorAll("#words .word").forEach(element => { element.classList.remove("active") })
    let wordDiv = document.querySelectorAll("#words .word")[currentWordIndex]
    wordDiv.classList.add("active")
    wordDiv.classList.remove("error")
}

const updateCaretPosition = () => {
    let caret = document.querySelector("#caret")
    let inputLength = currentInput.length
    let currentLetterIndex = inputLength - 1

    if (currentLetterIndex < 0) {
        currentLetterIndex = 0
    }

    let currentLetterSpan = document.querySelectorAll("#words .word.active span")[currentLetterIndex]
    let currentLetterPosition = currentLetterSpan.getBoundingClientRect()
    let letterHeight = currentLetterPosition.height

    /* if we have not typed anything yet */
    if (inputLength == 0) {
        caret.style.top = currentLetterPosition.top - letterHeight / 4
        caret.style.left = currentLetterPosition.left - caret.clientWidth / 2
        console.log("Input length 0")
    } else {
        caret.style.top = `${currentLetterPosition.top - letterHeight / 4}px`
        caret.style.left = `${currentLetterPosition.left + currentLetterSpan.clientWidth - caret.clientWidth / 2}px`
        console.log(currentLetterPosition.left + currentLetterSpan.clientWidth - caret.clientWidth / 2)
    }
}

initializeWords()

document.querySelector("#wordsInput").addEventListener("keypress", (event) => {
    event.preventDefault()
}) 

document.addEventListener("keypress", (event) => {
    const wordsInput = document.getElementById("wordsInput")
   
    // if (!wordsInput.matches(":focus")) return

    if (event.code == "Enter") return

    if (event.code == "Space") return

    currentInput += event.key

    updateCaretPosition()
    console.log(currentInput)
})