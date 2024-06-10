const submitBtn = document.querySelector(".submit-btn")
const email = document.querySelector("#email")
const modelImage = document.querySelector(".model-image")

function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email.value)

    let emailInputSection = document.querySelector(".email-input")
    emailInputSection.style.border = isValid ? "" : "2px solid var(--Soft-Red)"

    let errorIcon = document.querySelector(".error-icon")
    let errorMessage = document.querySelector(".error")
    errorIcon.style.display = isValid ? "none" : "block"
    errorMessage.style.display = isValid ? "none" : "block"
}

submitBtn.addEventListener("click", () => {
    validateEmail()
})
