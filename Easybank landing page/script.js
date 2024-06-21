const navToggle = document.querySelector(".hamburger-icon")

navToggle.addEventListener("click", () => {
    const mobileNav = document.querySelector(".mobile-nav")
    if(navToggle.src.includes("icon-hamburger.svg")) {
        mobileNav.style.display = "block"
        navToggle.src = "./images/icon-close.svg"
    }
    else {
        navToggle.src = "./images/icon-hamburger.svg"
        mobileNav.style.display = "none"
    }
})
