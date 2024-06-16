const toggleButton = document.querySelector(".toggle-button");
const toggleCircle = document.querySelector(".toggle-circle");
const background = document.querySelector(".background");
const body = document.querySelector("body");
const cards = document.querySelectorAll(".card");
const paragraphs = document.querySelectorAll("p");
const overviewHeading = document.querySelector(".overview-heading")


function toggleDarkMode() {
    toggleButton.classList.toggle("toggle-active");

    if (toggleButton.classList.contains("toggle-active")) {
        toggleCircle.style.backgroundColor = "var(--Very-Dark-Blue-Top-BG-Pattern)";
        background.style.backgroundColor = "var(--Very-Dark-Blue-Top-BG-Pattern)";
        body.style.backgroundColor = "var(--Very-Dark-Blue-BG)";
        body.style.color = "white";
        overviewHeading.style.color = "white"
        paragraphs.forEach(paragraph => {
            paragraph.style.color = "var(--Desaturated-Blue-Text)";
        });
        cards.forEach(card => {
            card.style.backgroundColor = "var(--Dark-Desaturated-Blue-Card-BG)";
        });

        cards.forEach(card => {
            card.addEventListener("mouseenter", () => {
                card.style.backgroundColor = "#333a56";
            });
            card.addEventListener("mouseleave", () => {
                card.style.backgroundColor = "var(--Dark-Desaturated-Blue-Card-BG)";
            });
        });
    } else {
        toggleCircle.style.backgroundColor = "var(--Very-Pale-Blue-Top-BG-Pattern)";
        background.style.backgroundColor = "var(--Very-Pale-Blue-Top-BG-Pattern)";
        body.style.backgroundColor = "var(--White-BG)";
        body.style.color = "black";
        overviewHeading.style.color = "var(--Dark-Grayish-Blue-Text)"
        paragraphs.forEach(paragraph => {
            paragraph.style.color = "var(--Dark-Grayish-Blue-Text)";
        });
        cards.forEach(card => {
            card.style.backgroundColor = "var(--Light-Grayish-Blue-Card-BG)";
        });

        cards.forEach(card => {
            card.addEventListener("mouseenter", () => {
                card.style.backgroundColor = "#e1e3f0";
            });
            card.addEventListener("mouseleave", () => {
                card.style.backgroundColor = "var(--Light-Grayish-Blue-Card-BG)";
            });
        });
    }
}


toggleButton.addEventListener("click", toggleDarkMode);
