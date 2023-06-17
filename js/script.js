const hamburger = document.querySelector('header #nav .top-nav .hamburger');
const menu = document.querySelector('header #nav .bottom-nav');
const menu_li = document.querySelectorAll('header #nav .bottom-nav .left-container ul li .bottom-nav-sublist ul li');
const footer_year = document.querySelector('.footer-bottom span');
const header = document.querySelector('body.main > header');

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

/* Modal Add Address */
const modal_add_address = document.querySelector('.account-add-a-new-address-container');
const close_add_icon = document.querySelector('.account-add-a-new-address-container .x-close-icon');
const add_address_btn = document.querySelector('.account-add-address-container .account-change-btn .add-address');

add_address_btn.addEventListener('click', () => {
    modal_add_address.classList.toggle('active');
    document.body.classList.toggle('open-modal');
});

close_add_icon.addEventListener('click', () => {
    modal_add_address.classList.toggle('active');
    document.body.classList.toggle('open-modal'); 
});

/* Modal Change Address */
const modal_change_address = document.querySelector('.account-change-address-container');
const close_change_address_icon = document.querySelector('.account-change-address-container .x-close-icon');
const change_address_btn = document.querySelector('.account-address-container.location .account-change-btn .change-btn');

change_address_btn.addEventListener('click', () => {
    modal_change_address.classList.toggle('active');
    document.body.classList.toggle('open-modal');
});

close_change_address_icon.addEventListener('click', () => {
    modal_change_address.classList.toggle('active');
    document.body.classList.toggle('open-modal'); 
});

/* Modal Change Delivery Address */
const modal_change_delivery_address = document.querySelector('.account-change-delivery-address-container');
const change_delivery_address_icon = document.querySelector('.account-change-delivery-address-container .x-close-icon');
const change_address_delivery_btn = document.querySelectorAll('.account-address-container .account-change-btn.double .change-btn');

change_address_delivery_btn.forEach(e => {
    e.addEventListener('click', () => {
        modal_change_delivery_address.classList.toggle('active');
        document.body.classList.toggle('open-modal');
    });
})


change_delivery_address_icon.addEventListener('click', () => {
    modal_change_delivery_address.classList.toggle('active');
    document.body.classList.toggle('open-modal'); 
});

/* Modal Change Personal Data */
const modal_change_personal_data = document.querySelector('.account-change-personal-data-container');
const close_change_personal_data_icon = document.querySelector('.account-change-personal-data-container .x-close-icon');
const change_personal_data_btn = document.querySelector('.account-password-container .account-change-btn .change-btn');

change_personal_data_btn.addEventListener('click', () => {
    modal_change_personal_data.classList.toggle('active');
    document.body.classList.toggle('open-modal');
});

close_change_personal_data_icon.addEventListener('click', () => {
    modal_change_personal_data.classList.toggle('active');
    document.body.classList.toggle('open-modal'); 
});

/* Modal Change Invoice Data */
const modal_change_invoice_data = document.querySelector('.account-change-invoice-data-container');
const close_change_invoice__data_icon = document.querySelector('.account-change-invoice-data-container .x-close-icon');
const change_invoice__data_btn = document.querySelector('.account-invoice-container .account-change-btn .change-btn');

change_invoice__data_btn.addEventListener('click', () => {
    modal_change_invoice_data.classList.toggle('active');
    document.body.classList.toggle('open-modal');
});

close_change_invoice__data_icon.addEventListener('click', () => {
    modal_change_invoice_data.classList.toggle('active');
    document.body.classList.toggle('open-modal'); 
});

/* Modal Change Password */
const modal_change_password = document.querySelector('.account-change-password-container');
const close_change_password_icon = document.querySelector('.account-change-password-container .x-close-icon');
const change_password_btn = document.querySelector('.account-password-container .account-pass-cont-right .account-change-btn .change-btn');

change_password_btn.addEventListener('click', () => {
    modal_change_password.classList.toggle('active');
    document.body.classList.toggle('open-modal');
});

close_change_password_icon.addEventListener('click', () => {
    modal_change_password.classList.toggle('active');
    document.body.classList.toggle('open-modal'); 
});
