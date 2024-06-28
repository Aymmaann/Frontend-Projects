const body = document.querySelector("body")
const keypadSection = document.querySelector(".keypad-section")
const toggleCircle = document.querySelector(".toggle-circle")
const keys = document.querySelectorAll(".key")
const textKeys = document.querySelectorAll(".text-key")
const themeSection = document.querySelector(".theme-switcher-section")
const themeToggle = document.querySelector(".theme-toggle")
const screen = document.querySelector(".screen-section")
const numKeys = document.querySelectorAll(".num-key")
const operationKeys = document.querySelectorAll(".operation-key")
const resetBtn = document.querySelector(".reset-key")
const delBtn = document.querySelector(".del-key")
const equalKey = document.querySelector(".equal-key")
const decimalPoint = document.querySelector(".decimal-key")

let themeCount = 1
let decimalCount = 0
let numCount = 0
let num1 = 0
let num2 = 0
let operation = ""


document.addEventListener('DOMContentLoaded' ,() => {
    setTheme(themeCount)

    themeToggle.addEventListener("click", () => {
        themeCount = themeCount === 3? 1 : ++themeCount
        setTheme(themeCount)
    }) 
    
    
    resetBtn.addEventListener("click", () => {
        resetCalculator()
    })
    
    
    delBtn.addEventListener('click', () => {
        deleteLastCharacter()
    })
    
    
    decimalPoint.addEventListener("click", () => {
        checkDecimal()
    })
    
    
    equalKey.addEventListener("click", () => {
        calculateResult()
    })


    document.addEventListener("keydown", (event) => {
        if(event.key === "Enter") {
            event.preventDefault()
            calculateResult()
        }
    })
    
    
    numKeys.forEach(numkey => {
        numkey.addEventListener("click", () => {
            if(numCount === 0) {
                screen.textContent = ""
            }
            numCount++

            if(numCount === 13) {
                screen.textContent = screen.textContent.slice(0, -1) + "..."
            }
            else if(numCount < 13) {
                screen.textContent = screen.textContent + numkey.textContent
            }
        })
    })
    
    
    operationKeys.forEach(operationKey => {
        operationKey.addEventListener("click", () => {
            operation = operationKey.textContent
            num1 = !isNaN(num1)? parseFloat(screen.textContent) : 0
            screen.textContent = screen.textContent + operation
            numCount = 0
            decimalCount = 0
        })
    })
})


function resetCalculator() {
    screen.textContent = ""
    numCount = 0
    num1 = 0
    num2 = 0
}


function deleteLastCharacter() {
    screen.textContent = screen.textContent.slice(0, -1)
    numCount--
}


function calculateResult() {
    let condition = !isNaN(parseFloat(screen.textContent.charAt(screen.textContent.length - 1)))
    num2 = condition? parseFloat(screen.textContent) : 0
    performOperation(operation, num1, num2)
}


function checkDecimal() {
    if(decimalCount === 0) {
        screen.textContent = screen.textContent + '.'
        decimalCount++
    }
}


function performOperation(operation, num1, num2) {
    switch(operation) {
        case '+':
            if((num1 + num2).toString().length > 13) {
                screen.textContent = (num1 + num2).toString().slice(0, 12) + "..."
            }
            else {
                screen.textContent = (num1 + num2).toString().slice(0, 13)
            }
            num1 = num1 + num2
            num2 = 0
            break

        case '-':
            if((num1 - num2).toString().length > 13) {
                screen.textContent = (num1 - num2).toString().slice(0, 12) + "..."
            }
            else {
                screen.textContent = (num1 - num2).toString().slice(0, 13)
            }
            num1 = num1 - num2
            num2 = 0
            break

        case 'x':
            if((num1 * num2).toString().length > 13) {
                screen.textContent = (num1 * num2).toString().slice(0, 12) + "..."
            }
            else {
                screen.textContent = (num1 * num2).toString().slice(0, 13)
            }
            num1 = num1 * num2
            num2 = 0
            break

        case '/':
            if((num1 / num2).toString().length > 13) {
                screen.textContent = (num1 / num2).toString().slice(0, 12) + "..."
            }
            else {
                screen.textContent = (num1 / num2).toString().slice(0, 13)
            }
            num1 = num1 / num2
            num2 = 0
            break

        default: 
            break
    }
}


function setTheme(themeCount) {
    switch(themeCount) {
        case 1:
            themeToggle.style.justifyContent = "flex-start"
            break
        case 2:
            themeToggle.style.justifyContent = "center"
            break
        case 3:
            themeToggle.style.justifyContent = "flex-end"
            break
        default: 
            themeToggle.style.justifyContent = "flex-start"
            break
    }

    // Set CSS variables based on themeCount
    body.style.backgroundColor = `var(--theme-${themeCount}-main-bg)`
    themeSection.style.color = `var(--theme-${themeCount}-heading-text)`
    screen.style.backgroundColor =  `var(--theme-${themeCount}-screen-bg)`
    screen.style.color =  `var(--theme-${themeCount}-heading-text)`
    keypadSection.style.backgroundColor = `var(--theme-${themeCount}-keypad-bg)`
    themeToggle.style.backgroundColor = `var(--theme-${themeCount}-toggle-bg)`

    // Add hover effects to toggleCircle
    toggleCircle.style.backgroundColor = `var(--theme-${themeCount}-equal-bg)`
    toggleCircle.addEventListener("mouseenter", () => {
        toggleCircle.style.backgroundColor = `var(--theme-${themeCount}-equal-hover)`
    })
    toggleCircle.addEventListener("mouseleave", () => {
        toggleCircle.style.backgroundColor = `var(--theme-${themeCount}-equal-bg)`
    })

    // Add hover effects to keys
    keys.forEach(key => {
        key.style.backgroundColor = `var(--theme-${themeCount}-option-bg)`
        key.style.borderColor = `var(--theme-${themeCount}-option-shadow)`
        key.style.color = `var(--theme-${themeCount}-option-text)`

        key.addEventListener("mouseenter", () => {
            key.style.backgroundColor = `var(--theme-${themeCount}-white)`
        })
        key.addEventListener("mouseleave", () => {
            key.style.backgroundColor = `var(--theme-${themeCount}-option-bg)`
        })
    })

    // Add hover effects to textKeys
    textKeys.forEach(textKey => {
        textKey.style.color = `var(--theme-1-white)`
        textKey.style.backgroundColor = `var(--theme-${themeCount}-key-bg)`
        textKey.style.borderColor = `var(--theme-${themeCount}-key-shadow)`

        textKey.addEventListener("mouseenter", () => {
            textKey.style.backgroundColor = `var(--theme-${themeCount}-key-hover)`
        })
        textKey.addEventListener("mouseleave", () => {
            textKey.style.backgroundColor = `var(--theme-${themeCount}-key-bg)`
        })
    })

    // Style equalKey
    equalKey.style.backgroundColor = `var(--theme-${themeCount}-equal-bg)`
    equalKey.style.borderColor = `var(--theme-${themeCount}-equal-shadow)`
    equalKey.style.color = `var(--theme-${themeCount}-equal-text)`
    equalKey.addEventListener("mouseenter", () => {
        equalKey.style.backgroundColor = `var(--theme-${themeCount}-equal-hover)`
    })
    equalKey.addEventListener("mouseleave", () => {
        equalKey.style.backgroundColor = `var(--theme-${themeCount}-equal-bg)`
    })
}
