const options = document.querySelectorAll(".option")
const hamburger = document.querySelector(".hamburger-icon")

options.forEach(option => {
    option.addEventListener("click", () => {
        const contentBox = document.querySelector(`.${option.innerText}`)
        const img = option.querySelector("img")

        if(contentBox.style.display === "none") {
            options.forEach(optionClicked => {
                let box = document.querySelector(`.${optionClicked.innerText}`)
                const img = option.querySelector("img")
                box.style.display = "none"
                img.style.transform = "none"
            })
            contentBox.style.display = "block"
            img.style.transform = "rotate(180deg)"
        }
        else {
            contentBox.style.display = "none"
            img.style.transform = "none"
        }
    })
})

hamburger.addEventListener("click", () => {
    const mobileNav = document.querySelector(".mobile-menu")
    if(hamburger.src.includes("icon-hamburger.svg")) {
        hamburger.src = "./images/icon-close.svg"
        mobileNav.style.display = "block"
    }
    else {
        hamburger.src = "./images/icon-hamburger.svg"
        mobileNav.style.display = "none"
    }
}) 
