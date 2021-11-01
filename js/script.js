const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows

  breakpoints: {
    320: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 2,
    },
    999: {
        slidesPerView: 3,
    }
  },
  watchOverflow: true,
  spaceBetween: 30,
  freeMode: true,
  slidesPerGroup: 1,
  initialSlide: 0,
});
$(document).ready(function() {
    $('.header_burger').click(function() {
        $('.header_burger, .header_menu, .block').toggleClass('active');
        $('body').toggleClass('lock')
    });
});