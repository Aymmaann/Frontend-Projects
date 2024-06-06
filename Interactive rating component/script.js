const ratingOptions = document.querySelectorAll(".rating")
const userRating = document.querySelector(".user-rating")

ratingOptions.forEach(ratingOption => {
    ratingOption.addEventListener("click", () => {
        ratingOptions.forEach(option => option.classList.remove("active"))
        ratingOption.classList.add("active")
        userRating.innerText = ratingOption.innerText
    })
})

function thankyou() {
    document.querySelector(".rating-container").style.display = "none"
    document.querySelector(".thankyou-container").style.display = "block"
}