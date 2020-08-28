document.addEventListener('DOMContentLoaded', function () {
  const card = new CardSlider();
});

class CardSlider {
  constructor() {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      // slidesPerView: 1,
      slidesPerView: 1.4,
      speed: 1000,
      grabCursor: true,
      breakpoints: {
        600: {
          slidesPerView: 2
        },
        960: {
          slidesPerView: 4
        },
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }
    });
  }
}