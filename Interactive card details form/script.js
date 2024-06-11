const submitBtn = document.querySelector(".submit-btn")


function resetAllStyles() {
    const errorMessages = document.querySelectorAll(".error-msg")
    const errorBorders = document.querySelectorAll(".input")
    errorMessages.forEach(Messages => Messages.style.display = "none")
    errorBorders.forEach(border => border.style.borderColor = "var(--Light-grayish-violet)")
}


function checkCardName() {
    const userName = document.querySelector("#name").value
    if(userName === "") {
        const errorName = document.querySelector(".error-name")
        const errorNameBorder = document.querySelector(".name-input")
        errorName.style.display = "block"
        errorNameBorder.style.borderColor = "var(--Red-Errors)"
        return false
    }
    return true
}


function checkCardNumber() {
    const cardNumber = document.querySelector("#number").value.trim().replace(/\s/g, '')
    const isEmpty = cardNumber === ""
    const isNumeric = /^\d+$/.test(cardNumber)
    const isLengthValid = cardNumber.length === 16

    if(isEmpty || !isNumeric || !isLengthValid){
        const errorCardNumber = document.querySelector(".error-card-number")
        const errorCardNumberBorder = document.querySelector(".number-input")
        errorCardNumberBorder.style.borderColor = "var(--Red-Errors)"
        if(isEmpty){
            errorCardNumber.innerText = "Can't be blank"
        }
        else if(!isNumeric) {
            errorCardNumber.innerText = "Wrong format, numbers only"
        }
        else if(!isLengthValid) {
            errorCardNumber.innerText = "Card number must be 16 digits long"
        }
        errorCardNumber.style.display = "block"
        return false
    }
    return true
}


function checkCardDate() {
    const month = document.querySelector("#month").value.trim()
    const year = document.querySelector("#year").value.trim()
    const isMonthNumeric = /^\d+$/.test(month)
    const isYearNumeric = /^\d+$/.test(year)
    const isMonthLengthValid = month.length === 2
    const isYearLengthValid = year.length === 2
    if(month === "" || year === "" || !isMonthNumeric || !isYearNumeric || !isMonthLengthValid || !isYearLengthValid){
        const errorDate = document.querySelector(".error-date")
        const errorMonthBorder = document.querySelector(".month-input")
        const errorYearBorder = document.querySelector(".year-input")
        errorDate.style.display = "block"

        if(month === ""){
            errorMonthBorder.style.borderColor = "var(--Red-Errors)"
        }
        if(year === ""){
            errorYearBorder.style.borderColor = "var(--Red-Errors)"
        }
        else if(!isMonthNumeric || !isYearNumeric){
            if(!isMonthNumeric){
                errorMonthBorder.style.borderColor = "var(--Red-Errors)"
                errorDate.innerText = "Wrong format, numbers only"
            }
            if(!isYearNumeric){
                errorYearBorder.style.borderColor = "var(--Red-Errors)"
                errorDate.innerText = "Wrong format, numbers only"
            }  
        }
        else if(!isMonthLengthValid || !isYearLengthValid) {
            if(!isMonthLengthValid) {
                errorMonthBorder.style.borderColor = "var(--Red-Errors)"
            }
            if(!isYearLengthValid) {
                errorYearBorder.style.borderColor = "var(--Red-Errors)"
            }
            errorDate.innerText = "Must be 2 digits long" 
        }
        return false
    }
    return true
}


function checkCardCVC() {
    const cvc = document.querySelector("#cvc-number").value.trim()
    const isEmpty = cvc === ""
    const isNumeric = /^\d+$/.test(cvc)
    const isCvcLengthValid = cvc.length === 3
    if(isEmpty || !isNumeric || !isCvcLengthValid){
        const errorCVC = document.querySelector(".error-cvc")
        const errorCardCVCBorder = document.querySelector(".cvc-input")
        errorCardCVCBorder.style.borderColor = "var(--Red-Errors)"
        errorCVC.style.display = "block"
        if(isEmpty) {
            errorCVC.innerText = "Can't be blank"
        }
        else if(!isNumeric){
            errorCVC.innerText = "Wrong format, numbers only"
        }
        else if(!isCvcLengthValid) {
            errorCVC.innerText = "Must be 3 digits long"
        }
        return false
    }
    return true
}


function updateCard(userName, InputtedCardNumber, month, year, cvc) {
    const cardName = document.querySelector(".card-name")
    const cardNumber = document.querySelector(".card-number")
    const cardMonth = document.querySelector(".card-month")
    const cardYear = document.querySelector(".card-year")
    const cardCVC = document.querySelector(".card-cvc")

    cardName.innerText = userName
    cardNumber.innerText = InputtedCardNumber
    cardMonth.innerText = month
    cardYear.innerText = year
    cardCVC.innerText = cvc
}

function completionScreen() {
    const formSection = document.querySelector(".form-section")
    const completeSection = document.querySelector(".complete-section")
    formSection.style.display = "none"
    completeSection.style.display = "block"
}

function checkValidity() {
    const userName = document.querySelector("#name").value
    let cardNumber = document.querySelector("#number").value.trim().replace(/\s/g, '')
    const month = document.querySelector("#month").value.trim()
    const year = document.querySelector("#year").value.trim()
    const cvc = document.querySelector("#cvc-number").value.trim()


    const isNameValid = checkCardName()
    const isNumberValid = checkCardNumber()
    const isDateValid = checkCardDate()
    const isCvcValid = checkCardCVC()

    if(isNameValid && isNumberValid && isDateValid && isCvcValid){
        cardNumber = document.querySelector("#number").value.trim()
        updateCard(userName, cardNumber, month, year, cvc)
        completionScreen()
    }
}
 

submitBtn.addEventListener("click", (e) => {
    resetAllStyles()
    checkValidity()
    e.preventDefault()
})
