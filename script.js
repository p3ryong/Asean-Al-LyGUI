const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

function closeMenu() {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 60);
});


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

const menuChoices = document.querySelectorAll('.navbar a');
menuChoices.forEach(choice => {
    choice.addEventListener('click', closeMenu);
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 100
});


ScrollReveal().reveal('.home-text h5, .country-text h5, .center-text h2, .connect h2, .country-img, .connect-container', { origin: 'top' });
ScrollReveal().reveal('.home-text h1, .home-text p, .country-text p, .projects-container', { origin: 'bottom' });
