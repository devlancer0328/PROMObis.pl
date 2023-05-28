const hamburger = document.querySelector('header #nav .top-nav .hamburger');
const menu = document.querySelector('header #nav .bottom-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

