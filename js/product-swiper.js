const slider2 = new Swiper ('.product-swiper-slider', {
  slidesPerView: 1,  
  loop: true,
  loopedSlides: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const thumbs = new Swiper ('.product-swiper-thumbs', {
  direction: 'vertical',
  slidesPerView: 4,
  slideToClickedSlide: true,
  spaceBetween: 10,
  loopedSlides: 50,
  loop: true,
});

slider2.controller.control = thumbs;
thumbs.controller.control = slider2;