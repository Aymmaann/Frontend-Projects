const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function verify() {
    const email = document.querySelector("#email")
    const isValid = emailPattern.test(email.value)
    if(isValid){
        const loginWrapper = document.querySelector(".login-wrapper")
        const successSection = document.querySelector(".success-container")
        const userEmail = document.querySelector(".user-email")
        userEmail.innerText = `${email.value}.`
        loginWrapper.style.display = "none"
        successSection.style.display = "block"
    }
    else {
        const error = document.querySelector(".error")
        error.style.display = "block"
        email.style.borderColor = "var(--Tomato)"
        email.style.color = "var(--Tomato)"
        email.style.backgroundColor = "#ffe8e6"
    }
}

function dismiss() {
    window.location.reload()
}