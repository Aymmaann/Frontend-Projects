const adviceNumber = document.querySelector(".advice-number")
const adviceQuote = document.querySelector(".advice")
const toggleButton = document.querySelector(".toggle-button")

async function randomAdvice() {
    let fetchedAdvice = await fetch("https://api.adviceslip.com/advice").then((res) =>
        res.json()
    )
    const {id, advice} = fetchedAdvice.slip
    adviceNumber.textContent = id
    adviceQuote.textContent = `"${advice}"` 
}

toggleButton.addEventListener("click", randomAdvice)
