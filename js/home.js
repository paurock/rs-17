//Image-slider initialization
const frontMain = new Swiper(".mySwiper-slider", {
  spaceBetween: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".rs-17-slider__next",
    prevEl: ".rs-17-slider__prev"
  },
  mousewheel: {
    forceToAxis: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">0' + (index + 1) + "</span>";
    }
  }
});

//Product-slider initialization
const swiper = new Swiper(".mySwiper-products", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: ".rs-17-products__next",
    prevEl: ".rs-17-products__prev"
  },
});