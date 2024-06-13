const tipBoxes = document.querySelectorAll(".tip-box")
const resetButton = document.querySelector(".reset-btn")
let tipAmount = 0

function checkError(noOfPeople) {
    if(noOfPeople === 0){
        let errorMsg = document.querySelector(".error-msg")
        let errorBorder = document.querySelector("#people-input")
        errorMsg.style.display = "block"
        errorBorder.style.border = "2px solid #b47c6d"
        return false
    }
    return true
}

function resetError(){
    let errorMsg = document.querySelector(".error-msg")
    let errorBorder = document.querySelector("#people-input")
    errorMsg.style.display = "none"
    errorBorder.style.border = "none"
}

document.addEventListener("DOMContentLoaded", () => {
    let billInput = document.querySelector("#bill-input")
    let noOfPeopleInput = document.querySelector("#people-input")
    let customTipInput = document.querySelector("#custom-tip")

    function updateResult() {
        let billAmount = parseFloat(billInput.value)
        let noOfPeople = parseInt(noOfPeopleInput.value)
        let customTip = parseFloat(customTipInput.value)
        let finalTip = 0
        let totalAmount = 0
        let isValid = checkError(noOfPeople)

        if(isValid && (!isNaN(billAmount) && !isNaN(tipAmount))) {
            resetError()
            if(!isNaN(customTip)){
                finalTip = parseFloat(((billAmount * customTip) / 100).toFixed(2))
            }
            else {
                finalTip = parseFloat(((billAmount * tipAmount) / 100).toFixed(2))
            }
            totalAmount = parseFloat((billAmount + finalTip).toFixed(2))

            if(!isNaN(noOfPeople)) {
                finalTip = (finalTip/noOfPeople).toFixed(2)
                totalAmount = (totalAmount/noOfPeople).toFixed(2)
            }

            const finalTipDisplay = document.querySelector(".final-tip-amount")
            const finalTotalDisplay = document.querySelector(".final-total-amount")
            finalTipDisplay.innerText = finalTip
            finalTotalDisplay.innerText = totalAmount
        }
    }

    billInput.addEventListener("input", updateResult)
    customTipInput.addEventListener("input", updateResult)
    tipBoxes.forEach(tipBox => {
        tipBox.addEventListener("click", () => {
            tipBoxes.forEach(boxes => {boxes.classList.remove("active")})
            tipBox.classList.add("active")
            tipAmount = parseFloat(tipBox.querySelector(".tip-amount").innerText)
            updateResult()
        })
    })
    noOfPeopleInput.addEventListener("input", updateResult)
})


resetButton.addEventListener("click", () => {
    location.reload()
})
