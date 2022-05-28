const body = document.querySelector("body");
const showPopup = document.querySelector(".buy-button");
const popupClose = document.querySelector(".close-popup");

let unlock = true;

const timeout= 800;

// function popupOpen (currentPopup) {
//     if()
// }

showPopup.addEventListener("click", function () {
    let currentPopup = document.getElementById('popup');
    currentPopup.classList.add("open")
})