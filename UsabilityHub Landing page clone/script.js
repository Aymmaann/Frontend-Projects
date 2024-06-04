const toggleButton = document.getElementById("navbar-toggle")
const navLinks = document.getElementById("nav-links")

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle("active")
})