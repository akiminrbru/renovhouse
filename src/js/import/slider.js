const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination1',
    },
});


// detail

let swiper3 = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 9,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    400: {
        slidesPerView: 3,
        spaceBetween: 9,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 9,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 9,
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 9,
    },
},
});

let swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  thumbs: {
    swiper: swiper3,
  },
});

const swiperPrev = document.getElementById("swiperPrev");
const swiperNext = document.getElementById("swiperNext");

swiperPrev.addEventListener("click", () => {
    swiper2.slidePrev();
});
swiperNext.addEventListener("click", () => {
    swiper2.slideNext();
});