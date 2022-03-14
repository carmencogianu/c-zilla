const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const openModal = document.getElementsByClassName("open-modal");
const closeModal = document.getElementsByClassName("close-modal");
const modalContainer = document.getElementById("modal-container");

openModal[0].addEventListener('click', () => {
    modalContainer.classList.add('show');
});
openModal[1].addEventListener('click', () => {
    modalContainer.classList.add('show');
});

closeModal[0].addEventListener('click', () => {
    modalContainer.classList.remove('show');
}); 

