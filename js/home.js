const frontMain = new Swiper(".swiper-container", {
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
