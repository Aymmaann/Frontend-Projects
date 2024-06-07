const navList = document.querySelector(".list");
let navToggle = document.querySelector(".menu-icon");
let image = document.querySelector('.box1 img');
let overlay = document.createElement('div'); 

function openNav() {
    document.body.appendChild(overlay);
    overlay.classList.add('overlay');
    overlay.style.display = "block"

    navList.innerHTML = '<div class="close-wrapper">' +
    '<div class="cross-icon">' +
    '<a href="" onclick="closeNav()"><img src="./images/icon-menu-close.svg" alt=""></a>' +
    '</div>' +
    '</div>' +
    '<ul>' +
    '<li>Home</li>' +
    '<li>New</li>' +
    '<li>Popular</li>' +
    '<li>Trending</li>' +
    '<li>Categories</li>' +
    '</ul>';
    navList.style.display = "block";
}

function closeNav() {
    overlay.remove();
    navList.style.display = "none";
}

function updateImage() {
    if(window.innerWidth <= 680) {
        image.src = "./images/image-web-3-mobile.jpg";
    }
    if(window.innerWidth > 680) {
        image.src = "./images/image-web-3-desktop.jpg";
    }
}


overlay.classList.add('overlay');
document.body.appendChild(overlay);

updateImage();

window.addEventListener('resize', updateImage);
