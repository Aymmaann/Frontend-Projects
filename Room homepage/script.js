const nextBtns = document.querySelectorAll(".right")
const prevBtns = document.querySelectorAll(".left")
const thumbnailImg = document.querySelector(".hero-img")
const thumbnailTextSection = document.querySelector(".thumbnail-text-section")
const thumbnailHeading = document.querySelector(".thumbnail-heading")
const thumbnailDescription = document.querySelector(".thumbnail-description")
const hamburgerIcon = document.querySelector(".hamburger-icon")
const closeIcon = document.querySelector(".close-icon")
const mobileNavContainer = document.querySelector(".mobile-nav-container")
const thumbnails = document.querySelector(".thumbnail-area")
let imageNumber = 1
let isAnimating = false

window.addEventListener("DOMContentLoaded", () => {
    updateThumbnail(imageNumber)
});

nextBtns.forEach(nextBtn => {
    nextBtn.addEventListener("click", () => {
        if (!isAnimating) {
            imageNumber = imageNumber === 3 ? 1 : imageNumber + 1
            slideThumbnails("next")
        }
    });
});

prevBtns.forEach(prevBtn => {
    prevBtn.addEventListener("click", () => {
        if (!isAnimating) {
            imageNumber = imageNumber === 1 ? 3 : imageNumber - 1
            slideThumbnails("prev")
        }
    });
});


function slideThumbnails(direction) {
    isAnimating = true

    thumbnails.classList.add(direction === "next" ? "slide-out-left" : "slide-out-right")

    setTimeout(() => {
        thumbnails.classList.add(direction === "next" ? "set-left" : "set-right")

        setTimeout(() => {
            updateThumbnail(imageNumber)
            thumbnails.classList.remove("slide-out-left", "slide-out-right")
            thumbnails.classList.remove("set-right", "set-left")
            thumbnails.classList.add(direction === "prev" ? "slide-in-right" : "slide-in-left")

            setTimeout(() => {
                thumbnails.classList.remove("slide-in-right", "slide-in-left")
                isAnimating = false
            }, 400)
        }, 100)
    }, 200)
}



hamburgerIcon.addEventListener("click", () => {
    mobileNavContainer.style.display = "block"
    hamburgerIcon.style.display = "none"
});

closeIcon.addEventListener("click", () => {
    mobileNavContainer.style.display = "none"
    hamburgerIcon.style.display = "block"
});

function updateThumbnail(imageNumber) {
    if (window.innerWidth > 800) {
        thumbnailImg.src = `./images/desktop-image-hero-${imageNumber}.jpg`
    } else {
        thumbnailImg.src = `./images/mobile-image-hero-${imageNumber}.jpg`
    }
    setThumbnailText(imageNumber)
}

function setThumbnailText(imageNumber) {
    switch (imageNumber) {
        case 1:
            thumbnailHeading.textContent = "Discover innovative ways to decorate"
            thumbnailDescription.textContent = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
            break
        case 2:
            thumbnailHeading.textContent = "We are available all across the globe"
            thumbnailDescription.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
            break
        case 3:
            thumbnailHeading.textContent = "Manufactured with the best materials"
            thumbnailDescription.textContent = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
            break
        default:
            break
    }
}
