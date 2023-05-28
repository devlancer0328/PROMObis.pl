const hamburger = document.querySelector('header #nav .top-nav .hamburger');
const menu = document.querySelector('header #nav .bottom-nav');
const menu_li = document.querySelectorAll('header #nav .bottom-nav .left-container ul li .bottom-nav-sublist ul li');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});


menu_li.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('active');
}));

