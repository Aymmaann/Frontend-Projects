document.addEventListener('DOMContentLoaded', () => {
    const firstImg = document.querySelector(".first-img")
    firstImg.parentNode.style.border = "2px solid var(--orange)"
    firstImg.style.opacity = "0.5"

    const productImages = document.querySelectorAll(".prod-img")
    const thumbnailImg = document.querySelector(".thumbnail-img")
    const addToCartBtn = document.querySelector(".add-to-cart-btn")
    const productAmount = document.querySelector(".amount")
    const plusToggle = document.querySelector(".plus")
    const minusToggle = document.querySelector(".minus")
    const navCartIcon = document.querySelector(".nav-cart-icon")
    const deleteCart = document.querySelector(".delete-icon")
    const cartBox = document.querySelector(".cart-box")
    const prevOption = document.querySelector(".prev")
    const nextOption = document.querySelector(".next")
    const modalSection = document.querySelector(".modal")
    const modalImg = document.querySelector(".modal-img")
    const mobilePrevOption = document.querySelector(".mobile-prev")
    const mobileNextOption = document.querySelector(".mobile-next")
    const hamburger = document.querySelector(".hamburger-icon")
    const mobileNavContainer = document.querySelector(".mobile-nav-container")
    let modalThumbnail = 1
    let mobileThumbnail = 1
    let amount = 0


    productImages.forEach(prodImg => {
        prodImg.addEventListener("click", () => {
            thumbnailImg.src = prodImg.src
            resetImageStyles()
            prodImg.parentNode.style.border = "2px solid var(--orange)"
            prodImg.style.opacity = "0.5"
        })
    })


    plusToggle.addEventListener("click", () => {
        amount += 1
        productAmount.textContent = amount
    })


    minusToggle.addEventListener("click", () => {
        if(amount > 0) {
            amount -= 1
        }
        productAmount.textContent = amount
    })


    addToCartBtn.addEventListener("click", () => {
        const cartBubble = document.querySelector(".cart-amt-bubble")
        const prodAmt = document.querySelector(".prod-amt")
        resetOrderStyles()
        if(amount > 0) {
            cartBubble.style.display = "flex"
            prodAmt.textContent = amount
            
            const orderSection = document.querySelector(".order-section")
            const orderAmount = document.querySelector(".order-amount")
            const orderTotal = document.querySelector(".order-total")
            orderAmount.textContent = amount
            orderTotal.textContent = `$${(125.00 * amount).toFixed(2)}`
            orderSection.style.display = "block"
        }
        else {
            cartBubble.style.display = "none"
            const emptyOrder = document.querySelector(".empty-order")
            emptyOrder.style.display = "block"
        }
    })


    navCartIcon.addEventListener("click" , (event) => {
        event.preventDefault();
        toggleCartBox()
    })


    thumbnailImg.addEventListener("click", () => {
        setModalMode()
    })


    prevOption.addEventListener("click", () => {
        goToImage(modalImg, modalThumbnail, "prev")
    })


    nextOption.addEventListener("click", () => {
        goToImage(modalImg, modalThumbnail, "next")
    })

    mobilePrevOption.addEventListener("click", () => {
        goToImage(thumbnailImg, mobileThumbnail, "prev")
    })

    mobileNextOption.addEventListener("click", () => {
        goToImage(thumbnailImg, mobileThumbnail, "next")
    })

    hamburger.addEventListener("click", () => {
        mobileNavContainer.classList.toggle("mobile-nav-active")
        closeNavMenu()
    })


    deleteCart.addEventListener("click", emptyCart)


    document.addEventListener("click", (event) => {
        const isClickInsideCart = cartBox.contains(event.target)
        const isClickOnCartIcon = event.target.classList.contains("nav-cart-icon")
        if (!isClickInsideCart && !isClickOnCartIcon && cartBox.classList.contains("cart-box-active")) {
            cartBox.classList.remove("cart-box-active")
        }
    });


    function toggleCartBox() {
        if(cartBox.classList.contains("cart-box-active")) {
            cartBox.classList.remove("cart-box-active")
        }
        else {
            cartBox.classList.add("cart-box-active")
        }
    }


    function closeModal() {
        const closeIcon = document.querySelector(".close")
        closeIcon.addEventListener("click", () => {
            const modalSection = document.querySelector(".modal")
            modalSection.classList.remove("modal-active")
        })
    }


    function setModalMode() {
        if(window.innerWidth > 800) {
            if(modalSection.classList.contains("modal-active")) {
                modalSection.classList.remove("modal-active")
            }
            else {
                modalSection.classList.add("modal-active")
            }
            closeModal()
        }
    }


    function emptyCart() {
        amount = 0
        resetOrderStyles()
        const emptyOrder = document.querySelector(".empty-order")
        const cartBubble = document.querySelector(".cart-amt-bubble")
        emptyOrder.style.display = "block"
        cartBubble.style.display = "none"
    }


    function resetOrderStyles() {
        const emptyOrder = document.querySelector(".empty-order")
        emptyOrder.style.display = "none"
        const orderSection = document.querySelector(".order-section")
        orderSection.style.display = "none"
    }


    function resetImageStyles() {
        productImages.forEach(prodImg => {
            prodImg.parentNode.style.border = "none"
            prodImg.style.opacity = "1"
        })
    }

    function closeNavMenu() {
        const NavCloseIcon = document.querySelector(".mobile-nav-close-icon")
        NavCloseIcon.addEventListener("click", () => {
            mobileNavContainer.classList.remove("mobile-nav-active")
        })
    }


    function goToImage(image, picNum, operation) {
        let imagePath = image.src
        const match = imagePath.match(/image-product-(\d+)\.jpg$/)
        if (match) {
            picNum = parseInt(match[1])
            if(operation === "next") {
                if(picNum === 4) {
                    picNum = 1
                }
                else {
                    picNum += 1
                }
            }
            else if(operation === "prev") {
                if(picNum === 1) {
                    picNum = 4
                }
                else {
                    picNum -= 1
                }
            }
        } 
        image.src = `./images/image-product-${picNum}.jpg`
    }
})
