const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1,
});
$(document).ready(function() {
    $('.header_burger').click(function() {
        $('.header_burger, .header_menu, .block').toggleClass('active');
        $('body').toggleClass('lock')
    });
});