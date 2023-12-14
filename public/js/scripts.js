// Swiper Projects

let swiperProjects = new Swiper('.swiper', {

  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    590: {
      slidesPerView: 2,
      spaceBetween: -56,
    }
  },
});


/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,
  loop: 'true',

  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
