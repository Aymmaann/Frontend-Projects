const options = document.querySelectorAll(".option")
let currentTimeframe = "weekly"


function fetchData() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(activity => {
            const currTaskValue = document.querySelector(`.${activity.title}1`)
            const prevTaskValue = document.querySelector(`.${activity.title}2`)

            const currentHours = currTaskValue.querySelector(".current")
            const previousHours = prevTaskValue.querySelector(".previous")

            currentHours.textContent = activity.timeframes[currentTimeframe].current
            previousHours.textContent = activity.timeframes[currentTimeframe].previous
        })
    })
    .catch(error => console.error("Error fetching data: ", error))
}


options.forEach(option => {
    option.addEventListener("click", () => {
        options.forEach(eachOption => {eachOption.classList.remove("active")})
        option.classList.add("active")
        currentTimeframe = option.textContent.toLowerCase()
        fetchData()
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const defaultOption = document.querySelector(`.${currentTimeframe}.option`)
    defaultOption.classList.add("active")
    defaultOption.click()
})
