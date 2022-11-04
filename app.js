const hamburgerMenu = document.querySelector('.navigation-container-header');
const hamburger = document.querySelector('.hamburger-menu-container');
const arrowObj = document.querySelector('.arrow');

hamburger.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hidden');
});

window.addEventListener('load', () => {
    let timerId = null;
    let y = 0;
    
    timerId = setInterval(arrow, 5);

    function arrow() {
        if (y >= 370) {
            clearInterval(timerId);
        } else {
            y+=5;
            arrowObj.style.top = y + 'px';
        }
    }
});