const productImages = document.querySelectorAll(".prod-img")
const thumbnailImg = document.querySelector(".thumbnail-img")
const addToCartBtn = document.querySelector(".add-to-cart-btn")
const productAmount = document.querySelector(".amount")
const plusToggle = document.querySelector(".plus")
const minusToggle = document.querySelector(".minus")
const navCartIcon = document.querySelector(".nav-cart-icon")
const deleteCart = document.querySelector(".delete-icon")
const cartBox = document.querySelector(".cart-box")
let amount = 0

productImages.forEach(prodImg => {
    prodImg.addEventListener("click", () => {
        console.log("clicked")
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
    console.log("Thumbnail clicked")
    const modalSection = document.querySelector(".modal")
    if(modalSection.classList.contains("modal-active")) {
        modalSection.classList.remove("modal-active")
    }
    else {
        modalSection.classList.add("modal-active")
    }
})

deleteCart.addEventListener("click", emptyCart)

document.addEventListener("click", (event) => {
    const clickInsideCart = 
})

function toggleCartBox() {
    if(cartBox.classList.contains("cart-box-active")) {
        cartBox.classList.remove("cart-box-active")
    }
    else {
        cartBox.classList.add("cart-box-active")
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


document.addEventListener('DOMContentLoaded', () => {
    const firstImg = document.querySelector(".first-img")
    firstImg.parentNode.style.border = "2px solid var(--orange)"
    firstImg.style.opacity = "0.5"
})
