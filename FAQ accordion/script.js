let clickIcons = document.querySelectorAll(".click-icon")

clickIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        let answer = icon.parentElement.nextElementSibling
        if(icon.src.includes("icon-plus")) {
            icon.src = "./assets/images/icon-minus.svg"
            answer.style.display = "block"
        }
        else {
            icon.src = "./assets/images/icon-plus.svg"
            answer.style.display = "none"
        }
    })
})

