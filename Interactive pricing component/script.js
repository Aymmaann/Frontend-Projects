let slider = document.querySelector("#Range")
const selectedAmount = document.querySelectorAll(".selected-amount")
const toggle = document.querySelector(".option-toggle")
const planTypes = document.querySelectorAll(".plan-type")
const pageViewText = document.querySelector(".pageviews")
let sliderMax = 32

slider.addEventListener("input", () => {
    let newSliderSize = (parseFloat(parseFloat(slider.value) / sliderMax)) * 100 + "%"
    selectedAmount.forEach(option => {option.textContent = `$${slider.value}`})
    document.documentElement.style.setProperty("--slider-size", newSliderSize)
    let pageViews = parseInt((parseInt(newSliderSize)/100) * 200)
    pageViewText.textContent = `${pageViews}k Pageviews`
})

function resetSlider(sliderValue) {
    let newSliderSize = (parseFloat(parseFloat(sliderValue) / sliderMax)) * 100 + "%"
    selectedAmount.forEach(option => {option.textContent = `$${slider.value}`})
    document.documentElement.style.setProperty("--slider-size", newSliderSize)
    pageViewText.textContent = `${100}k Pageviews`
}

function toggleMode() {
    toggle.classList.toggle("option-active")
    if(toggle.classList.contains("option-active")) {
        sliderMax = 240
        slider.min = 24
        slider.max = sliderMax
        slider.step = 1
        slider.value = 132
        resetSlider(slider.value)
        planTypes.forEach(planType => {planType.textContent = "/ year"})
    }
    else {
        sliderMax = 32
        slider.min = 0.32
        slider.max = sliderMax
        slider.step = 0.01
        slider.value = 16.00
        resetSlider(slider.value)
        planTypes.forEach(planType => {planType.textContent = "/ month"})
    }
}

toggle.addEventListener("click", toggleMode)

window.addEventListener("resize", () => {
    const discountSection = document.querySelector(".discount-section")
    if(window.innerWidth <= 600) {
        discountSection.textContent = "-25%"
    }
    else {
        discountSection.textContent = "25% discount"
    }
})
