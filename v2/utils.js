document.addEventListener("DOMContentLoaded", async () => {
    const genAI = new GoogleGenerativeAI(GOOGLE_AI_STUDIO_API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
    const prompt = "Generate a random paragaph of about 100 words"

    const result = await model.generateContent(prompt)
    console.log(result.response.text())
})