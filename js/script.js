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

    } else if (testMode == "time") {
        
    }
}

initializeWords()

console.log(wordsList)