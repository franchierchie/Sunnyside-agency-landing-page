const hamburgerMenu = document.querySelector('.navigation-container-header');
const hamburger = document.querySelector('.hamburger-menu-container');

hamburger.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hidden');
});