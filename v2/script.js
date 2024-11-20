import { GoogleGenerativeAI } from "@google/generative-ai"

const generatedTextCounter = 0
const wordsList = []
const currentWordIndex = 20
const customText = "The old lighthouse keeper, Silas, squinted at the churning grey sea. He'd seen a thousand storms lash against the craggy cliffs, but this one felt different, a primal unease settling in his bones. The wind howled a mournful song, rattling the ancient panes of glass in the tower. He checked the lamp, its beam a steadfast sentinel against the encroaching darkness. Down below, the waves crashed with a fury that threatened to swallow the small island whole. Silas sipped his lukewarm tea, the bitter taste oddly comforting amidst the tempest. He’d weathered worse, he told himself, but a shiver, born not of cold but of something far deeper, ran down his spine. The storm, he felt, held more than just wind and rain."

const root = document.querySelector("#root")
const wrapper = document.querySelector("#wrapper")
const caret = document.querySelector("#caret")

let w = customText.split(" ")
for (let i = 0; i < w.length; i++) {
    wordsList.push(w[i])
}

for (let i = 0; i < wordsList.length; i++) {
    let div = "<div class='word'>"
    for (let j = 0; j < wordsList[i].length; j++) {
        div += `<span>${wordsList[i][j]}</span>`
    }
    div += "</div>"
    wrapper.innerHTML += div
}

document.querySelectorAll("#wrapper .word")[currentWordIndex].classList.add("active")

const currentLetterIndex = 2
const span = document.querySelectorAll("#wrapper .word.active span")[currentLetterIndex]
const elementPosition = span.getBoundingClientRect()
caret.style.top = `${elementPosition.top}px`
caret.style.left = `${elementPosition.left}px`