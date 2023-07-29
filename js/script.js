const hamburger = document.querySelector('header #nav .top-nav .hamburger');
const menu = document.querySelector('header #nav .bottom-nav');
const menu_li = document.querySelectorAll('header #nav .bottom-nav .left-container ul li .bottom-nav-sublist > ul > li');
const footer_year = document.querySelector('.footer-bottom span');
const header = document.querySelector('body header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    header.classList.toggle('menu-open');
    window.scrollTo(0,0);
});

menu_li.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('active');
}));

footer_year.innerHTML = new Date().getFullYear();