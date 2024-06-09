const submitButton = document.querySelector(".submit-btn")
const input = document.querySelectorAll("input")

function validateFirstName() {
    const firstName = input[0].value
    let isValid = firstName.trim() != ""

    let firstNameErrorIcon = document.querySelector(".first-name-error-icon")
    let firstNameError = document.querySelector(".first-name-error")
    let firstNameBorder = document.querySelector(".first-name-border")
    let firstNamePlaceholder = document.querySelector("#first-name")

    firstNameErrorIcon.style.display = isValid ? "none" : "block"
    firstNameError.style.display = isValid ? "none" : "block"
    firstNameBorder.style.border = isValid ? "" : "2px solid var(--Red)"
    firstNamePlaceholder.placeholder = isValid ? "First Name" : "" 

    return isValid
}

function validateLastName() {
    const lastName = input[1].value
    let isValid = lastName.trim() != ""

    let lastNameErrorIcon = document.querySelector(".last-name-error-icon")
    let lastNameError = document.querySelector(".last-name-error")
    let lastNameBorder = document.querySelector(".last-name-border")
    let lastNamePlaceholder = document.querySelector("#last-name")

    lastNameErrorIcon.style.display = isValid ? "none" : "block"
    lastNameError.style.display = isValid ? "none" : "block"
    lastNameBorder.style.border = isValid ? "" : "2px solid var(--Red)"
    lastNamePlaceholder.placeholder = isValid ? "Last Name" : "" 

    return isValid
}

function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = emailPattern.test(input[2].value)

    let emailErrorIcon = document.querySelector(".email-error-icon")
    let emailError = document.querySelector(".email-error") 
    let emailBorder = document.querySelector(".email-border")
    let email = document.querySelector("#email")

    emailErrorIcon.style.display = isValid ? "none" : "block"
    emailError.style.display = isValid ? "none" : "block"
    emailBorder.style.border = isValid ? "" : "2px solid var(--Red)"
    email.placeholder = isValid ? "Email Address" : "email@example/com"
    
    return isValid
} 

function validatePassword() {
    let password = input[3].value
    let isValid = password.trim() != ""

    let passwordErrorIcon = document.querySelector(".password-error-icon")
    let passwordError = document.querySelector(".password-error") 
    let passwordBorder = document.querySelector(".password-border")
    let passwordPlaceholder = document.querySelector("#password")

    passwordErrorIcon.style.display = isValid ? "none" : "block"
    passwordError.style.display = isValid ? "none" : "block"
    passwordBorder.style.border = isValid ? "" : "2px solid var(--Red)"
    passwordPlaceholder.placeholder = isValid ? "Password" : "" 

    return isValid
}

submitButton.addEventListener("click", (e) => {
    const isFirstNameValid = validateFirstName()
    const isLastNameValid = validateLastName()
    const isEmailValid = validateEmail()
    const isPasswordValid = validatePassword()

    if(!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPasswordValid){
        e.preventDefault()
    }
    else{ 
        e.preventDefault()
        alert("Success")
    }
})
