const hamburger = document.querySelector('header #nav .top-nav .hamburger');
const menu = document.querySelector('header #nav .bottom-nav');
const menu_li = document.querySelectorAll('header #nav .bottom-nav .left-container ul li .bottom-nav-sublist ul li');
const footer_year = document.querySelector('.footer-bottom span');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

menu_li.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('active');
}));

footer_year.innerHTML = new Date().getFullYear();

const modal = document.querySelector('.account-add-a-new-address-container');
const close_icon = document.querySelector('.account-add-a-new-address-container .x-close-icon');
const add_address_btn = document.querySelector('.account-add-address-container .account-change-btn .add-address');

add_address_btn.addEventListener('click', () => {
    modal.classList.toggle('active');
    document.body.classList.toggle('open-modal');
});

close_icon.addEventListener('click', () => {
    modal.classList.toggle('active');
    document.body.classList.toggle('open-modal'); 
});