const toggle = document.querySelector(".toggle")
const basicPrice = document.querySelector(".basic-price")
const professionalPrice = document.querySelector(".professional-price")
const masterPrice = document.querySelector(".master-price")

toggle.addEventListener("click", () => {
    toggle.classList.toggle("toggle-active")
    if(toggle.classList.contains("toggle-active")) {
        basicPrice.textContent = "199.99"
        professionalPrice.textContent = "249.99"
        masterPrice.textContent = "399.99"
    }
    else {
        basicPrice.textContent = "19.99"
        professionalPrice.textContent = "24.99"
        masterPrice.textContent = "39.99"
    }
})
