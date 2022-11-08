const hamburgerMenu = document.querySelector('.navigation-container-header');
const hamburger = document.querySelector('.hamburger-menu-container');
const arrowObj = document.querySelector('.arrow');

hamburger.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hidden');
    arrowObj.classList.toggle('hidden');
});

window.addEventListener('load', () => {
    let timerId = null;
    let y = 0;

    if (window.innerWidth < 1024) {
        hamburgerMenu.classList.toggle('hidden');
    }
    
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