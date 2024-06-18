const bars = document.querySelectorAll(".bar")
const hovers = document.querySelectorAll(".hover")
const ratio = 2.87
let maxAmount = -1
let maxAmountDay = ""


function updateColor(maxAmountDay) {
    bars.forEach(bar => {
        if(bar.classList.contains(maxAmountDay)) {
            bar.style.backgroundColor = "var(--Cyan)"
        }
    })
}


function setHoverValues(dataitem, barHeight) {
    hovers.forEach(hover => {
        if(hover.classList.contains(`${dataitem.day}-hover`)) {
            hover.textContent = `$${dataitem.amount}`
            let offset = 39 + barHeight
            hover.style.bottom = `${offset}px`
        }
    })
}


function addHoverListeners() {
    bars.forEach(bar => {
        bar.addEventListener("mouseenter", () => {
            const hoverElement = bar.previousElementSibling
            hoverElement.style.display = "block"
        }) 
        bar.addEventListener("mouseleave", () => {
            const hoverElement = bar.previousElementSibling
            hoverElement.style.display = "none"
        })
    })
} 


fetch('data.json')
    .then(response => {
        if(!response.ok) {
            console.log("Network response was not ok")
        }
        return response.json()
    })
        .then(data => {
            data.forEach(dataitem => {
                bars.forEach(bar => {
                    if(bar.classList.contains(dataitem.day)) {
                        let barHeight = ratio*dataitem.amount
                        maxAmount = dataitem.amount > maxAmount? dataitem.amount : maxAmount
                        bar.style.height = `${barHeight}px`
                        setHoverValues(dataitem, barHeight)
                    }
                })
                if(dataitem.amount === maxAmount) {
                    maxAmountDay = dataitem.day
                }
            })
            updateColor(maxAmountDay)
            addHoverListeners()
        })
        .catch(error => {
            console.error("Fetch error: ", error)
        })
